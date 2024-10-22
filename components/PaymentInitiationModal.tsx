import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface PaymentInitiationModalProps {
  visible: boolean;
  onInitiatePayment: (totalAmount: number, participants: string[]) => void;
  onClose: () => void;
}

const PaymentInitiationModal: React.FC<PaymentInitiationModalProps> = ({ visible, onInitiatePayment, onClose }) => {
  const [totalAmount, setTotalAmount] = useState<string>('');
  const [participants, setParticipants] = useState<string>('');
  
  const handleInitiate = () => {
    const participantsList = participants.split(',').map(participant => participant.trim());
    onInitiatePayment(parseFloat(totalAmount), participantsList);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Initiate Group Payment</Text>

          {/* Input for total amount */}
          <TextInput
            style={styles.input}
            placeholder="Total Amount"
            value={totalAmount}
            onChangeText={setTotalAmount}
            keyboardType="numeric"
          />

          {/* Input for participants (comma-separated) */}
          <TextInput
            style={styles.input}
            placeholder="Participants (comma-separated)"
            value={participants}
            onChangeText={setParticipants}
          />

          {/* Initiate Payment Button */}
          <TouchableOpacity style={styles.initiateButton} onPress={handleInitiate}>
            <Text style={styles.buttonText}>Initiate Payment</Text>
          </TouchableOpacity>

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
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  initiateButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
    marginBottom:10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PaymentInitiationModal;