import React, { useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import color from '../../../theme/color';
import commonStyles from '../../../theme/common';
// import AddTip from './AddTip';
import FeedbackButtons from './FeedbackButtons';
import LeaveFeedback from './LeaveFeedback';
import ReportIssue from './ReportIssue';

const FeedbackRoot = ({
  showFeedback,
  setShowFeedback,
  scheduleId,
  car_id,
  // cleaner_id,
  dateData,
}) => {
  const [modalType, setModalType] = useState('root');

  return (
    <Modal
      animationIn="slideInUp"
      hasBackdrop={true}
      backdropColor={color.black}
      backdropOpacity={0.4}
      isVisible={showFeedback}
      onBackButtonPress={() => {
        if (modalType === 'root') {
          setShowFeedback(false);
        } else {
          setModalType('root');
        }
      }}
      onBackdropPress={() => {
        setModalType('root');
        setShowFeedback(false);
      }}>
      <View style={commonStyles.popupCardWrap}>
        {modalType === 'root' && (
          <FeedbackButtons setModalType={setModalType} />
        )}
        {/* {modalType === 'addTip' && (
          <AddTip
            setModalType={setModalType}
            car_id={car_id}
            dateData={dateData}
            cleaner_id={cleaner_id}
          />
        )} */}
        {modalType === 'leaveFeedback' && (
          <LeaveFeedback scheduleId={scheduleId} setModalType={setModalType} />
        )}
        {modalType === 'reportIssue' && (
          <ReportIssue
            dateData={dateData}
            car_id={car_id}
            setModalType={setModalType}
          />
        )}
      </View>
    </Modal>
  );
};

export default FeedbackRoot;
