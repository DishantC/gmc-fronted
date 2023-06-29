import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import color from '../../theme/color';
import commonStyles from '../../theme/common';
import { ffamily, fsize, fWeight } from '../../theme/font';
import { dateFormat } from '../../utils/dates';
import HeadingSub from '../Cards/HeadingSub';
import LineVertical from '../Common/LineVertical';
import SizedBoxHeight from '../Common/SizedBoxHeight';
import SizedBoxWidth from '../Common/SizedBoxWidth';

const CleaningBalance = ({ carPlanHistoryDetails, car_plan_id }) => {
  const sortedCarPlanHistoryDetails = carPlanHistoryDetails?.sort(
    (a, b) => b.id - a.id,
  );

  const exludeCurrentPlan = (
    car_plan_id
      ? sortedCarPlanHistoryDetails?.filter(item => item.id < car_plan_id)
      : sortedCarPlanHistoryDetails
  )?.slice(0, 6);

  const totalExterior = exludeCurrentPlan?.reduce(function (accumulator, item) {
    return (
      accumulator + (item.exteriorCleaning - item.completedExteriorCleaning)
    );
  }, 0);

  const totalInterior = exludeCurrentPlan?.reduce(function (accumulator, item) {
    return accumulator + (item.fullCleaning - item.completedFullCleaning);
  }, 0);

  return (
    <View style={styles.background}>
      <View style={styles.textHeadWrap}>
        <Text
          style={{
            ...commonStyles.smallText,
            fontWeight: fWeight.bold,
            fontSize: fsize.mh5,
          }}>
          Cleaning Blance
        </Text>
        <SizedBoxWidth width={10} />
        <Text style={commonStyles.superSmallText}>Excluding Current Plan</Text>
      </View>
      <SizedBoxHeight height={10} />
      {exludeCurrentPlan && (
        <View style={styles.card}>
          {exludeCurrentPlan?.map((item, id) => {
            return (
              <View style={styles.balanceRowItem} key={id}>
                <HeadingSub
                  heading={
                    <Text>
                      {item.exteriorCleaning - item.completedExteriorCleaning}
                    </Text>
                  }
                  subHeading="Exterior"
                />
                <LineVertical fillcolor={color.black} />
                <HeadingSub
                  heading={
                    <Text>
                      {item.fullCleaning - item.completedFullCleaning}
                    </Text>
                  }
                  subHeading="Interior"
                />
                <LineVertical fillcolor={color.black} />
                <HeadingSub
                  subHeading={
                    item.fromDate &&
                    item.toDate && (
                      <View>
                        <Text style={{ ...styles.h4Text, color: color.black }}>
                          {dateFormat(item.fromDate)}
                        </Text>
                        <Text style={{ ...styles.h4Text, color: color.black }}>
                          {dateFormat(item.toDate)}
                        </Text>
                      </View>
                    )
                  }
                />
              </View>
            );
          })}
          {/* Total balance */}
          <View style={styles.balanceRowTotal}>
            <HeadingSub
              heading={<Text>{totalExterior}</Text>}
              subHeading="Exterior"
            />
            <LineVertical />
            <HeadingSub
              heading={<Text>{totalInterior}</Text>}
              subHeading="Interior"
            />
            <LineVertical />
            <HeadingSub subHeading={`Total ${'\n'} Balance`} />
          </View>
        </View>
      )}
      <View style={[styles.card, { alignItems: 'center' }]}>
        <Text
          style={{
            color: color.black,
            textAlign: 'center',
            fontFamily: ffamily.semiBold,
          }}>
          Cleaning Balance will be adjusted in future playable.
        </Text>
      </View>
      <View style={{ height: 36 }} />
    </View>
  );
};

export default CleaningBalance;

const styles = StyleSheet.create({
  textHeadWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 2,
    backgroundColor: color.blue2,
    paddingVertical: 8,
    borderRadius: 4,
    flex: 1,
  },
  balanceRowTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 2,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.blue2,
  },
  h2Text: {
    fontSize: fsize.h2,
    color: color.white,
    fontFamily: ffamily.semiBold,
  },
  h4Text: {
    fontSize: fsize.mh5,
    color: color.white,
    fontFamily: ffamily.semiBold,
  },
});
