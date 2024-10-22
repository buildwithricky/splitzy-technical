import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Animated } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

interface PaymentInitiationModalProps {
  visible: boolean;
  onClose: () => void;
}

const BookingCompleted: React.FC<PaymentInitiationModalProps> = ({ visible, onClose }) => {
  const [animationValue] = useState(new Animated.Value(0));

  const animateSuccess = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
    
    });
  };


  const strokeDashoffset = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const renderSuccessAnimation = () => (
    <Svg height="100" width="100" viewBox="0 0 100 100" fill="none">
      <Circle cx="50" cy="50" r="45" stroke="green" strokeWidth="5" fill="none" />
      <Path
        d="M30 50 L45 65 L70 35"
        stroke="green"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="100"
        strokeDashoffset={strokeDashoffset}
      />
    </Svg>
  );

  return (
    <Modal visible={visible} transparent={true} animationType="fade" onShow={animateSuccess}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {renderSuccessAnimation()}

          <Text style={styles.modalText}>Booking Confirmed!</Text>
          <Text style={styles.subText}>Payment links have been sent to all participants.</Text>

          {/* Close Button */}
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BookingCompleted;
