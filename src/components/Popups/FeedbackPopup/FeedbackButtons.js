import React from 'react';

import buttonStyles from '../../../theme/button';
import SizedBoxHeight from '../../Common/SizedBoxHeight';
import GoButton from '../../GoComponents/GoButton';

const FeedbackButtons = ({ setModalType }) => {
  return (
    <>
      <SizedBoxHeight height={16} />
      <GoButton
        onPress={() => {
          setModalType('leaveFeedback');
        }}
        text="Leave a Feedback"
        style={buttonStyles.outlinedButton}
        textStyle={buttonStyles.outlinedButtonText}
      />
      <SizedBoxHeight height={28} />
      <GoButton
        onPress={() => {
          setModalType('reportIssue');
        }}
        text="Report an Issue"
        style={buttonStyles.outlinedButton}
        textStyle={buttonStyles.outlinedButtonText}
      />
      <SizedBoxHeight height={16} />
    </>
  );
};

export default FeedbackButtons;
