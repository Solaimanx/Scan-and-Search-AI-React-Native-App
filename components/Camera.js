import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/FontAwesome';

const CameraFunction = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const [viewPhoto, setViewPhoto] = useState(false);
  const [base64Photo, setBase64Photo] = useState();

  const handleCapture = async () => {
    try {
      const data = await takePicture();
      const filePath = data.uri;

      if (Platform.OS === 'ios') {
        console.log('ok');

        RNFS.readFile(filePath, 'base64').then(async encodedBase64 => {
          const base64Img = `data:image/jpg;base64,${encodedBase64}`;
          setBase64Photo(base64Img);
          setViewPhoto(true);
        });
      } else {
        const fileName = new Date().getTime();
        const newFilePath = RNFS.ExternalDirectoryPath + `${fileName}.jpg`;
        RNFS.moveFile(filePath, newFilePath)
          .then(() => {
            RNFS.readFile(newFilePath, 'base64')
              .then(async encodedBase64 => {
                const base64Img = `data:image/jpg;base64,${encodedBase64}`;
                console.log('base64 done');
                setBase64Photo(base64Img);
                setViewPhoto(true);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ForwardPhoto = () => {
    navigation.navigate('showproduct', {base64Photo});
  };

  const cameraView = () => {
    setViewPhoto(false);
  };

  const goBack = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      {viewPhoto ? (
        <View style={{height: Dimensions.get('window').height}}>
          <View style={{flex: 3}}>
            <Image source={{uri: base64Photo}} style={styles.previewImage} />
          </View>

          <View style={{flex: 0.8, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Icon
                name="times"
                size={50}
                style={styles.viewPhotoCheck}
                onPress={() => cameraView()}
                color="#333333"
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Icon
                name="check-circle"
                size={50}
                style={styles.viewPhotoCheck}
                onPress={() => ForwardPhoto()}
                color="#65A15A"
              />
            </View>
          </View>
        </View>
      ) : (
        <View>
          <RNCamera
            ref={cameraRef}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            activeOpacity={0.5}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            style={styles.preview}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 60,
              }}>
              <TouchableOpacity>
                <Icon
                  name="arrow-left"
                  size={40}
                  style={styles.close}
                  onPress={() => goBack()}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 60,
              }}>
              <TouchableOpacity>
                <Icon
                  name="camera"
                  size={40}
                  style={styles.customButton}
                  r
                  onPress={() => handleCapture()}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </View>
          </RNCamera>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  preview: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    paddingBottom: 40,
  },
  previewImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
  viewPhotoCheck: {
    marginTop: 30,
  },
});

export default CameraFunction;
