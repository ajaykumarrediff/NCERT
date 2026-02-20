import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import PDFTitle from '../Assets/listPDFChapter.json';
import PDFLink from '../Assets/listPDFLink.json';
import { useEffect, useState } from 'react';
import BottomBar from '../Components/bottomBar';

export default function PDFFolder({ navigation, route }) {
  const { className, homeFolder, Examplar } = route.params;
  const [loading, setLoading] = useState(true);

  const getChapters = (className, type, part = null) => {
    if (Examplar && type === 'Solutions') {
      let titleData = PDFTitle[className][type]['Examplar'];
      let linkData = PDFLink[className][type]['Examplar'];

      return Object.keys(titleData).map(key => ({
        id: key,
        title: titleData[key], // from first JSON
        fileId: linkData[key], // from second JSON
      }));
    }
    if (!Examplar && type === 'Solutions') {
      let titleData = PDFTitle[className][type]['Books'];
      let linkData = PDFLink[className][type]['Books'];

      return Object.keys(titleData).map(key => ({
        id: key,
        title: titleData[key], // from first JSON
        fileId: linkData[key], // from second JSON
      }));
    }
    let titleData = PDFTitle[className][type];
    let linkData = PDFLink[className][type];

    if (part) {
      titleData = titleData[part];
      linkData = linkData[part];
    }
    return Object.keys(titleData).map(key => ({
      id: key,
      title: titleData[key], // from first JSON
      fileId: linkData[key], // from second JSON
    }));
  };

  useEffect(() => {
    setLoading(false);
  });

  if (
    className === 12 &&
    (homeFolder === 'Books' || homeFolder === 'Solutions') &&
    !Examplar
  ) {
    return (
      <>
        <View
          style={{
            shadowRadius: 5,
            shadowOffset: 5,
            shadowColor: '#7c7878',
            width: '95%',
            height: '90%',
            borderRadius: 8,
            borderWidth: 1,
            margin: 10,
            padding: 4,
            gap: 8,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PartPDF', {
                data: getChapters('Class12', homeFolder, 'Part 1'),
                title: homeFolder + ' : Class 12 : Part 1',
                className,
                homeFolder,
                Part: 1,
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>Part 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PartPDF', {
                data: getChapters('Class12', homeFolder, 'Part 2'),
                title: homeFolder + ' : Class 12 : Part 2',
                className,
                homeFolder,
                Part: 2,
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>Part 2</Text>
          </TouchableOpacity>
        </View>
        <BottomBar />
      </>
    );
  }

  return (
    <>
      <View style={{ height: '94%', paddingBottom: 5 }}>
        <FlatList
          data={getChapters('Class' + className, homeFolder)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderWidth: 3,
                margin: 2,
                borderRadius: 5,
                gap: 2,
                borderColor: '#051f84',
              }}
              onPress={() =>
                navigation.navigate('PDFViewer', {
                  className,
                  homeFolder,
                  id: item.id,
                  fileName: item.fileId,
                  Examplar,
                  title: 'Class ' + className + ' ' + item.id,
                })
              }
            >
              <Text
                style={{
                  backgroundColor: '#456643',
                  padding: 5,
                  fontSize: 18,
                  color: '#fff',
                }}
              >
                {item.id}
              </Text>
              <Text style={{ padding: 4, fontSize: 18 }}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <BottomBar />
    </>
  );
}
