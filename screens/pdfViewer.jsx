import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import FileViewer from 'react-native-file-viewer';
// import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';

export default function PDFViewer({ route }) {
  const { className, homeFolder, Examplar, fileName, Part } = route.params;
  const classMap = {
    9: 'IX',
    10: 'X',
    11: 'XI',
    12: 'XII',
  };

  let classFolder = classMap[className] || 'IX';

  if (
    className === 12 &&
    (homeFolder === 'Books' || homeFolder === 'Solutions')
  ) {
    if (Part === 1) {
      classFolder += 'Part-I';
    } else if (Part === 2) {
      classFolder += 'Part-II';
    }
  }
  if (Examplar) {
    classFolder += 'Examplar';
  }
  const filePathStart =
    homeFolder + '/' + classFolder + '/' + fileName + '.pdf';
  const source = {
    uri: `bundle-assets://${filePathStart}`,
  };

  const destPathOpen = `${RNFS.ExternalCachesDirectoryPath}/${fileName}.pdf`;
  const destPathShare = `${RNFS.CachesDirectoryPath}/${fileName}.pdf`;

  const copyFileToCache = async state => {
    if (state === 'open') {
      const exists = await RNFS.exists(destPathOpen);
      if (exists) {
        await RNFS.unlink(destPathOpen);
      }

      await RNFS.copyFileAssets(filePathStart, destPathOpen);
      return destPathOpen;
    } else if (state === 'share') {
      const exists = await RNFS.exists(destPathShare);
      if (exists) {
        await RNFS.unlink(destPathShare);
      }

      await RNFS.copyFileAssets(filePathStart, destPathShare);
      return destPathShare;
    }
    return null;
  };

  const handleShare = async () => {
    try {
      const path = await copyFileToCache('share');
      console.log(path);
      await Share.open({ url: `file://${path}`, type: 'application/pdf' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenExternal = async () => {
    try {
      const path = await copyFileToCache('open');
      console.log(path);
      await FileViewer.open(path);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'No app found to open PDF');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={source}
        style={{ flex: 1, width: '100%', height: '100%' }}
        trustAllCerts={false}
        renderActivityIndicator={() => <ActivityIndicator size="large" />}
        onError={error => {
          console.log(error);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: 85,
          position: 'absolute',
          right: 3,
          bottom: 45,
        }}
      >
        <TouchableOpacity onPress={handleShare}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../Assets/share.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenExternal}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../Assets/openwith.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
