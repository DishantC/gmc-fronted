import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { launchCamera } from 'react-native-image-picker';

import selector from '../../../redux/selector';
import ImageUpload from '../../../assets/icons/ImageUpload';
import buttonStyles from '../../../theme/button';
import color from '../../../theme/color';
import commonStyles from '../../../theme/common';
import LineHorizontal from '../../Common/LineHorizontal';

import SizedBoxHeight from '../../Common/SizedBoxHeight';
import GoButton from '../../GoComponents/GoButton';

import { send_complaint } from '../../../apis/feedbackApis';
import { showtoast } from '../../../utils/error';
import RedCloseCircle from '../../../assets/icons/RedCloseCircle';
import { uploadImage } from '../../../apis/imgUploadApi';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width * 0.75;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const ReportIssue = ({ dateData, car_id, setModalType }) => {
  const complaintOptions = [
    { id: 1, name: 'Car not cleaned', data: 'car not cleaned' },
    { id: 2, name: 'Key not given', data: 'key not given' },
    {
      id: 3,
      name: 'Photo not uploaded by the cleaner',
      data: 'photo not uploaded by the cleaner',
    },
    { id: 4, name: 'Others', data: 'others' },
  ];

  const user_id = useSelector(selector.userId);
  const [loading, setLoading] = useState(false);
  const [complaintText, setComplaintText] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [imgData, setImgData] = useState(null);

  const requestPermission = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Camera Permission',
    });
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const pickImage = useCallback(() => {
    setImgData(null);
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        setImgData({ resourcePath: response });
      },
    );
  }, []);

  const onConfirm = async () => {
    if (!selectedComplaint) {
      showtoast('Please select a complaint');
      return;
    }
    if (selectedComplaint === 4 && !complaintText) {
      showtoast('Please write the complaint');
      return;
    }

    try {
      setLoading(true);

      var fd = new FormData();
      fd.append('files', {
        uri: imgData?.resourcePath?.assets[0]?.uri,
        type: imgData?.resourcePath?.assets[0]?.type,
        name: imgData?.resourcePath?.assets[0]?.fileName,
      });
      let response_image = await uploadImage(fd);

      if (response_image) {
        const data = {
          data: {
            description: complaintText,
            issue: complaintOptions.find(item => item.id === selectedComplaint)
              .data,
            raised_on: dateData,
            status: 'raised',
            raised_by: user_id,
            car: car_id,
            image: response_image[0].id,
          },
        };

        const response = await send_complaint(data);
        if (response) {
          setSelectedComplaint(null);
          setComplaintText('');
          setLoading(false);
          showtoast('Complaint submitted successfully');
          setModalType('root');
        } else {
          showtoast('Complaint submission failed');
        }
      } else {
        showtoast('Image upload failed');
      }
    } catch (error) {
      showtoast(error.message);
      setLoading(false);
    }
  };

  return (
    <View>
      {/* Complaint Options */}
      <Text style={commonStyles.h5Text}>Report an Issue</Text>
      <SizedBoxHeight height={10} />
      <Text style={commonStyles.smallText}>Nature of Issue</Text>
      <View style={styles.itemsWrap}>
        {complaintOptions.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.singleItem}
            onPress={() => setSelectedComplaint(item.id)}>
            <View
              style={{
                ...styles.box,
                backgroundColor:
                  selectedComplaint === item.id ? color.blue : color.white,
              }}
            />
            <Text
              style={{ ...commonStyles.smallText, maxWidth: childWidth - 20 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <LineHorizontal
        height={1}
        width="100%"
        linecolor={color.blue}
        marginTop={8}
      />

      {/* Write Complaint */}
      <Text style={commonStyles.smallText}>Complaint</Text>
      <SizedBoxHeight height={6} />
      <TextInput
        placeholder="Write down the complaint in brief..."
        onChangeText={value => {
          setComplaintText(value);
        }}
        placeholderTextColor={color.black}
        value={complaintText}
        style={styles.complaintInput}
        multiline={true}
        numberOfLines={4}
      />
      <LineHorizontal height={1} width="100%" linecolor={color.blue} />
      {/* Image Upload */}
      <Text style={commonStyles.smallText}>Upload Image</Text>
      <SizedBoxHeight height={6} />
      <View style={commonStyles.rowACenterJBetween}>
        {imgData && (
          <View style={styles.imgWrap}>
            <TouchableOpacity
              style={styles.closeWrap}
              onPress={() => setImgData(null)}>
              <RedCloseCircle />
            </TouchableOpacity>
            <View style={styles.imgContainer}>
              <Image
                source={{ uri: imgData?.resourcePath?.assets[0]?.uri }}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.imgUpload} onPress={() => pickImage()}>
          <ImageUpload />
        </TouchableOpacity>
      </View>

      <LineHorizontal height={1} width="100%" linecolor={color.blue} />
      <GoButton
        onPress={onConfirm}
        text={loading ? <ActivityIndicator color={color.white} /> : 'Confirm'}
        style={buttonStyles.primaryButton}
        textStyle={buttonStyles.primaryButtonText}
        loading={loading}
      />
    </View>
  );
};

export default ReportIssue;

const styles = StyleSheet.create({
  complaintInput: {
    height: 80,
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: color.blueLight2,
    color: color.black,
  },
  itemsWrap: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    marginBottom: 8,
    marginTop: 8,
  },
  singleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
  box: {
    height: 12,
    width: 12,
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 2,
    marginRight: 6,
    marginTop: 3,
  },
  imgUpload: {
    height: 50,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: color.blue,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imgWrap: {
    height: 50,
    width: 50,
    position: 'relative',
    marginRight: 8,
  },
  imgContainer: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
  },
  img: { width: 50, height: 50 },
  closeWrap: {
    position: 'absolute',
    top: -5,
    right: -5,
    zIndex: 1,
  },
});
