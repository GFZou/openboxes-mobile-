import React, { FC } from "react";
import { View, Text, Image } from 'react-native';
import Styles from './Styles';
import DeviceInfo from 'react-native-device-info';

const AppInfoScreen: FC = () => {
  return (
     <View style={Styles.mainContainer}>
         <Text style={Styles.openboxTextStyle}>Openbox</Text>
         <Text style={Styles.versionNumberText}>Version number {DeviceInfo.getVersion()} </Text>
         <Image
            source={require('../../assets/images/logo.png')}
            resizeMode={'cover'}
            style={Styles.imageStyle}
        />
        <Text style={Styles.certificateText}>2010-2022 Openbox inc.</Text>    
     </View>
  );
}


export default AppInfoScreen;
