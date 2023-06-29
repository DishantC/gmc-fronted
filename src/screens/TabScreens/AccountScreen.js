import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ArchiveTick from '../../assets/icons/account/ArchiveTick';
import DrivingIcon from '../../assets/icons/account/DrivingIcon';
import EmptyWallet from '../../assets/icons/account/EmptyWallet';
import IssueBell from '../../assets/icons/account/IssueBell';
import PrivecyIcon from '../../assets/icons/account/PrivecyIcon';
import ReciptItem from '../../assets/icons/account/ReciptItem';
import SavedAddress from '../../assets/icons/account/SavedAddress';
import UserIconDefault from '../../assets/icons/account/UserIconDefault';
import EditCircle from '../../assets/icons/EditCircle';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import SizedBoxWidth from '../../components/Common/SizedBoxWidth';
import GoButton from '../../components/GoComponents/GoButton';
import buttonStyles from '../../theme/button';

import color, { gradients } from '../../theme/color';
import commonStyles from '../../theme/common';
import { fsize, fWeight } from '../../theme/font';

const AccountScreen = ({ logout }) => {
  const accountOptions = [
    {
      id: 1,
      title: 'Issues',
      icon: <IssueBell />,
    },
    {
      id: 2,
      title: 'Saved Addresses',
      icon: <SavedAddress />,
    },
    {
      id: 3,
      title: 'My Cars',
      icon: <DrivingIcon />,
    },
    {
      id: 4,
      title: 'Payment History',
      icon: <ReciptItem />,
    },
    {
      id: 5,
      title: 'User History',
      icon: <ArchiveTick />,
    },
    {
      id: 6,
      title: 'Privacy Policy',
      icon: <PrivecyIcon />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={gradients.mainBlue} useAngle={true} angle={90}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.topSection}>
            <UserIconDefault />
            <View style={styles.usernameView}>
              <Text style={styles.nameText}>Usernmae</Text>
              <EditCircle />
            </View>

            <Text style={styles.phnText}>+91 725187653</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.creditWrap}>
              <EmptyWallet />
              <SizedBoxWidth />
              <View>
                <Text style={styles.headingText}>Cleaning Balance</Text>
                <Text style={commonStyles.pText}>No Credit Left</Text>
              </View>
            </View>
            <SizedBoxHeight />
            {accountOptions.map(item => (
              <TouchableOpacity key={item.id} style={styles.actionItem}>
                {item.icon}
                <SizedBoxWidth />
                <Text style={styles.actionItemText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
            <SizedBoxHeight height={30} />
            <GoButton
              text="Log Out"
              onPress={logout}
              style={buttonStyles.primaryButton}
              textStyle={buttonStyles.primaryButtonText}
            />
            <SizedBoxHeight height={10} />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingTop: Platform.OS === 'ios' ? 0 : 12,
  },
  wrapper: {
    flex: 1,
    backgroundColor: color.white,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 80,
    marginBottom: 24,
    ...commonStyles.paddingHorizontal,
  },
  topSection: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    ...commonStyles.paddingHorizontal,
  },
  usernameView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nameText: {
    fontSize: fsize.h2,
    fontWeight: fWeight.semiBold,
    color: color.white,
    marginRight: 10,
  },
  phnText: {
    fontSize: fsize.h4,
    color: color.white,
    marginBottom: 20,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderBottomWidth: 1,
    borderBottomColor: color.blue3,
  },
  actionItemText: {
    fontSize: fsize.h5,
    fontWeight: fWeight[500],
    color: color.black,
  },
  creditWrap: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.blue3,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: fsize.h3,
    fontWeight: fWeight[500],
    color: color.black,
  },
});
