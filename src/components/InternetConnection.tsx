import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet,Image,Button} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const InternetConnection = () => {
  const [isConnected, setConnected] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected!);
      if (!state.isConnected) {
        setModal(true);
       } 
      else {
        setModal(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const offlineMode = () => {
    if(isConnected){
    setModal(false);
    }
    else{
      setModal(true);
    }
  };

  return (
    <View style={styles.container}>
      {modal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => setModal(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Image source={require('../../assets/images/fitness.png')} style={styles.image} />
              <Text style={styles.modalText}>Please use Internet to access this Application</Text>
              <Button title="Retry"  onPress={offlineMode}/>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#58fcfd'
	
  },
  modalContent: {
    backgroundColor:'#58fcfd',
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 32,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  image: {
    width: 225,
    height: 225,
    margin: 10,
    padding: 10
  },
});

export default InternetConnection;