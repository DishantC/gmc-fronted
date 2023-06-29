import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';

import buttonStyles from '../../../theme/button';
import color from '../../../theme/color';
import commonStyles from '../../../theme/common';
import LineHorizontal from '../../Common/LineHorizontal';
import SizedBoxHeight from '../../Common/SizedBoxHeight';
import GoButton from '../../GoComponents/GoButton';
import { get_feedback, send_feedback } from '../../../apis/feedbackApis';
import { showtoast } from '../../../utils/error';

const LeaveFeedback = ({ scheduleId, setModalType }) => {
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbackData, setFeedbackData] = useState();
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const onConfirm = async () => {
    if (rating === 0) {
      showtoast('Please give rating to cleaner');
      return;
    }
    const data = {
      data: {
        customer_rating: rating,
        customer_comment: feedbackText,
      },
    };

    try {
      setSubmitLoading(true);
      const response = await send_feedback(scheduleId, data);
      if (response) {
        setRating(0);
        setFeedbackText('');
        setModalType('root');
        setSubmitLoading(false);
        showtoast('Feedback submitted successfully');
      }
    } catch (error) {
      setSubmitLoading(false);
    }
  };

  useEffect(() => {
    getFeedbackData();
    // eslint-disable-next-line
  }, []);

  const getFeedbackData = async () => {
    setLoading(true);
    try {
      const response = await get_feedback(scheduleId);
      if (response) {
        setFeedbackData(response);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={commonStyles.h5Text}>Leave Feedback</Text>
      <LineHorizontal
        height={2}
        width="100%"
        linecolor={color.blueLight2}
        marginTop={8}
      />
      {loading ? (
        <View style={{ minHeight: 50 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : feedbackData?.data?.attributes?.customer_rating ? (
        <View style={styles.feedbackDone}>
          <Text style={commonStyles.pText}>
            You have already given feedback for this cleaner.
          </Text>
        </View>
      ) : (
        <>
          <Text style={commonStyles.smallText}>Cleaner Rating</Text>
          <View style={styles.ratingWrap}>
            <View>
              <Rating
                type="custom"
                showRating={false}
                onFinishRating={ratingSave => {
                  setRating(ratingSave);
                }}
                style={styles.ratingContainerStyle}
                tintColor={color.ratingYellow}
                ratingBackgroundColor={color.white}
                ratingColor={color.ratingBlack}
                startingValue={rating}
                imageSize={40}
              />
            </View>
          </View>
          <LineHorizontal
            height={2}
            width="100%"
            linecolor={color.blueLight2}
            marginTop={12}
          />
          <Text style={commonStyles.smallText}>
            Leave a feedback for the cleaner
          </Text>
          <SizedBoxHeight height={10} />
          <TextInput
            placeholder="Write down your feedback in brief..."
            onChangeText={value => {
              setFeedbackText(value);
            }}
            placeholderTextColor={color.black}
            value={feedbackText}
            style={styles.complaintInput}
            multiline={true}
            numberOfLines={4}
          />
          <LineHorizontal
            height={2}
            width="100%"
            linecolor={color.blueLight2}
            marginBottom={16}
          />
          <GoButton
            onPress={onConfirm}
            text={
              submitLoading ? (
                <ActivityIndicator color={color.white} />
              ) : (
                'Submit'
              )
            }
            style={buttonStyles.primaryButton}
            textStyle={buttonStyles.primaryButtonText}
            disabled={submitLoading}
          />
        </>
      )}
    </View>
  );
};

export default LeaveFeedback;

const styles = StyleSheet.create({
  complaintInput: {
    height: 80,
    width: '100%',
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: color.blueLight2,
  },
  ratingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
  },
  cameraWrap: {
    backgroundColor: color.blue,
    padding: 7,
  },
  cameraCircle: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainerStyle: {
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: color.ratingYellow,
    height: 50,
    margin: 5,
  },
  feedbackDone: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
