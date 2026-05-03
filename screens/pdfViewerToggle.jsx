import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import FileViewer from 'react-native-file-viewer';
import NetInfo from '@react-native-community/netinfo';
import * as Progress from 'react-native-progress';

export default function PDFViewerToggle({ route }) {
  const { className, Subject, book, code } = route.params;

  const [pdfPath, setPdfPath] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [initialPage, setInitialPage] = useState(1);

  const url = `https://raw.githubusercontent.com/calculatorajay/PDFData/main/${book}dd/${code}.pdf`;

  const dirPath = `${RNFS.DocumentDirectoryPath}/${className}/${Subject}/${book}dd`;
  const filePath = `${dirPath}/${code}.pdf`;
  const jsonPath = `${RNFS.DocumentDirectoryPath}/pdf_pages.json`;

  useEffect(() => {
    downloadFile();
  }, [className, Subject, book, code]);

  const downloadFile = async () => {
    try {
      await RNFS.mkdir(dirPath);

      const exists = await RNFS.exists(filePath);

      if (exists) {
        setPdfPath(filePath);
        const pages = await readPages();
        if (pages[code]) {
          setInitialPage(pages[code]);
        }
        setLoading(false);
        return;
      }

      const netState = await NetInfo.fetch();

      if (!netState.isConnected) {
        Alert.alert('No internet connection');
        setLoading(false);
        return;
      }

      const result = await RNFS.downloadFile({
        fromUrl: url,
        toFile: filePath,
        progressDivider: 1,
        progress: res => {
          const percent = Math.floor(res.bytesWritten / res.contentLength);
          setProgress(percent);
        },
      }).promise;

      if (result.statusCode === 200) {
        setPdfPath(filePath);
        setLoading(false);
      } else {
        throw new Error('Download failed');
      }
    } catch (error) {
      Alert.alert('Error:', error);
    }
  };

  const readPages = async () => {
    try {
      const exists = await RNFS.exists(jsonPath);
      if (!exists) return {};

      const data = await RNFS.readFile(jsonPath);
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  };

  const savePage = async (code, page) => {
    try {
      let pages = {};

      const exists = await RNFS.exists(jsonPath);

      if (exists) {
        const data = await RNFS.readFile(jsonPath);
        pages = JSON.parse(data || '{}');
      }

      pages[code] = page;

      await RNFS.writeFile(jsonPath, JSON.stringify(pages));
    } catch (e) {
      console.log('Save error', e);
    }
  };

  const copyFileToCache = async type => {
    try {
      if (!pdfPath) return null;

      const destPath =
        type === 'open'
          ? `${RNFS.ExternalCachesDirectoryPath}/${code}.pdf`
          : `${RNFS.CachesDirectoryPath}/${code}.pdf`;

      const exists = await RNFS.exists(destPath);
      if (exists) {
        await RNFS.unlink(destPath);
      }

      await RNFS.copyFile(pdfPath, destPath);

      return destPath;
    } catch (error) {
      Alert.alert('Copy error:', error);
      return null;
    }
  };

  const handleShare = async () => {
    try {
      const path = await copyFileToCache('share');
      if (!path) return;

      await Share.open({
        url: `file://${path}`,
        type: 'application/pdf',
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const handleOpenExternal = async () => {
    try {
      const path = await copyFileToCache('open');
      if (!path) return;

      await FileViewer.open(path);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'No app found to open PDF');
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Progress.Pie progress={progress} size={100} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={{ uri: `file://${pdfPath}` }}
        style={{ flex: 1 }}
        trustAllCerts={false}
        page={initialPage}
        renderActivityIndicator={() => <ActivityIndicator size="large" />}
        onError={error => console.log(error)}
        onLoadComplete={pages => setTotalPages(pages)}
        onPageChanged={async (page, total) => {
          setPage(page);
          savePage(code, page);
        }}
      />
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 35,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: `${(page / totalPages) * 100 - 3.2}%`,
            height: 40,
            width: '100%',
            backgroundColor: '#fff',
            borderWidth: 2,
            borderTopLeftRadius: 35,
            borderBottomLeftRadius: 35,
          }}
        >
          <TouchableOpacity style={{ padding: 8 }}>
            <Image
              source={require('../Assets/scroll.png')}
              style={{ height: '100%', width: '100%' }}
            />
          </TouchableOpacity>
        </View>
      </View>

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
