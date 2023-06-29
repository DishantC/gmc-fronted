import React, { useCallback, useMemo, useRef } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

import AddCarScreen from './AddCarScreen';
import BottomSheetHeader from '../../components/Common/BottomSheetHeader';
import AddNumberScreen from './AddNumberScreen';
import AddCarCompany from './AddCarCompany';
import AddCarModel from './AddCarModel';
import AddCarFule from './AddCarFule';
import AddAppartment from './AddAppartment';

const AddCarBottomSheets = ({
  addCarRef,
  addCarSnapPoints,
  closeAddCarModal,
  dismissAllBottomSheets,
}) => {
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'collapse'}
        onPress={() => dismissAllBottomSheets()}
      />
    ),
    // eslint-disable-next-line
    [],
  );

  // Add Car Number Bottom Sheet
  const carNumberRef = useRef(null);
  const carNumberSnapPoints = useMemo(() => ['30%'], []);

  const openCarNumberModal = () => {
    carNumberRef?.current?.present();
  };

  const closeCarNumberModal = () => {
    carNumberRef?.current?.dismiss();
  };

  // Select Company Bottom Sheet
  const selectCompanyRef = useRef(null);
  const selectCompanySnapPoints = useMemo(() => ['90%'], []);

  const openSelectCompanyModal = () => {
    selectCompanyRef?.current?.present();
  };

  const closeSelectCompanyModal = () => {
    selectCompanyRef?.current?.dismiss();
  };

  // Select Model Bottom Sheet
  const selectModelRef = useRef(null);
  const selectModelSnapPoints = useMemo(() => ['70%'], []);

  const openSelectModelModal = () => {
    selectModelRef?.current?.present();
  };

  const closeSelectModelModal = () => {
    selectModelRef?.current?.dismiss();
  };

  // Select Fuel Bottom Sheet
  const selectFuelRef = useRef(null);
  const selectFuelSnapPoints = useMemo(() => ['60%'], []);

  const openSelectFuelModal = () => {
    selectFuelRef?.current?.present();
  };

  const closeSelectFuelModal = () => {
    selectFuelRef?.current?.dismiss();
  };

  // Select Appartment Bottom Sheet
  const selecAppartmentRef = useRef(null);
  const selecAppartmentSnapPoints = useMemo(() => ['35%', '80%'], []);

  const openSelecAppartmentModal = () => {
    selecAppartmentRef?.current?.present();
  };

  const closeSelecAppartmentModal = () => {
    selecAppartmentRef?.current?.dismiss();
  };

  const handleAppartmentSnapPress = useCallback(index => {
    selecAppartmentRef.current?.snapToIndex(index);
  }, []);

  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(5, [0, 1], [0, 1], Extrapolate.CLAMP),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      {
        backgroundColor: '#a8b5eb',
        flex: 1,
      },
      containerAnimatedStyle,
    ],
    [containerAnimatedStyle],
  );

  return (
    <Animated.View style={containerStyle}>
      <SafeAreaView>
        <BottomSheetModal
          enablePanDownToClose={false}
          backdropComponent={renderBackdrop}
          ref={addCarRef}
          snapPoints={addCarSnapPoints}
          handleComponent={() => (
            <BottomSheetHeader
              headerText="Add Car"
              onClose={closeAddCarModal}
            />
          )}
          name="addCar">
          <AddCarScreen openCarNumberModal={openCarNumberModal} />
        </BottomSheetModal>

        <BottomSheetModal
          backdropComponent={renderBackdrop}
          ref={carNumberRef}
          snapPoints={carNumberSnapPoints}
          name="carNumber"
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          enableDismissOnClose={true}
          enableOverDrag={true}
          handleComponent={() => (
            <BottomSheetHeader
              headerText="Enter Details"
              onClose={closeCarNumberModal}
            />
          )}>
          <AddNumberScreen openSelectCompanyModal={openSelectCompanyModal} />
        </BottomSheetModal>

        <BottomSheetModal
          backdropComponent={renderBackdrop}
          ref={selectCompanyRef}
          snapPoints={selectCompanySnapPoints}
          handleComponent={() => (
            <BottomSheetHeader
              headerText="Select Brand"
              onClose={closeSelectCompanyModal}
            />
          )}
          name="selectCarCompany">
          <AddCarCompany
            openSelectModelModal={openSelectModelModal}
            dismissAllBottomSheets={dismissAllBottomSheets}
          />
        </BottomSheetModal>

        <BottomSheetModal
          backdropComponent={renderBackdrop}
          ref={selectModelRef}
          snapPoints={selectModelSnapPoints}
          handleComponent={() => (
            <BottomSheetHeader
              headerText="Select Model"
              onClose={closeSelectModelModal}
            />
          )}
          name="selectCarModel">
          <AddCarModel
            dismissAllBottomSheets={dismissAllBottomSheets}
            openSelectFuelModal={openSelectFuelModal}
          />
        </BottomSheetModal>

        <BottomSheetModal
          backdropComponent={renderBackdrop}
          ref={selectFuelRef}
          snapPoints={selectFuelSnapPoints}
          handleComponent={() => (
            <BottomSheetHeader
              headerText="Select Fuel and Transmission Type"
              onClose={closeSelectFuelModal}
            />
          )}
          name="selectFuel">
          <AddCarFule
            dismissAllBottomSheets={dismissAllBottomSheets}
            openSelecAppartmentModal={openSelecAppartmentModal}
          />
        </BottomSheetModal>

        <BottomSheetModal
          backdropComponent={renderBackdrop}
          ref={selecAppartmentRef}
          snapPoints={selecAppartmentSnapPoints}
          handleComponent={() => (
            <BottomSheetHeader
              headerText="Enter Apartment Details"
              onClose={closeSelecAppartmentModal}
            />
          )}
          name="selectAppartment">
          <AddAppartment
            dismissAllBottomSheets={dismissAllBottomSheets}
            handleAppartmentSnapPress={handleAppartmentSnapPress}
          />
        </BottomSheetModal>
      </SafeAreaView>
    </Animated.View>
  );
};

export default AddCarBottomSheets;
