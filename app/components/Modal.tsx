import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Modal, Portal, Button, PaperProvider, TextInput } from 'react-native-paper';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const ModalComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    marginBottom: 100,
    marginLeft: -100,
    height: 150,
    width: 200,
    backgroundColor: '#001C30',
    borderRadius: 10,
    borderBottomColor: '#001C30',
    borderColor: '#001C30',
    borderWidth: 1,
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal

          visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
         
            <Text className='text-white mx-auto'>Change YARN Rate/CTN</Text>
            <View className='flex-row justify-center items-center gap-4 mt-2'>
       
            <TextInput style={styles.input} keyboardType='number-pad' />
          <TouchableOpacity className='px-2 py-3 bg-[#0F4C75] hover:bg-zinc-500 rounded-md' onPress={hideModal} >
              <Text className='text-xs text-gray-300 font-semibold'>Confirm</Text>
            </TouchableOpacity>
       </View>
          
        </Modal>
      </Portal>
      <Button style={{ marginTop: 35 }} onPress={showModal}>
        <Text className='text-white font-semibold'>Unit</Text>
      </Button>
    </PaperProvider>
  );
};

export default ModalComponent;



const styles = StyleSheet.create({

  input: {
  
    textAlign: 'center',
    minWidth: 100,
    backgroundColor: '#001C30',
    borderColor: '#3F72AF',
    borderWidth: 1,
    height: 36,
    width: 60,
    color: 'green',
  }
});