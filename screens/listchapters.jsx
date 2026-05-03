import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import JsonData from '../Assets/booklocation.json';

export default function ListChapters({ navigation, route }) {
  const { className, Section, Subject, book } = route.params;

  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const subjectData = JsonData[className][Subject];

    const chaptersTemp = [];
    subjectData.forEach(books => {
      if (book === books.code) {
        chaptersTemp.push(...books.chapters);
      }
    });
    setChapters(chaptersTemp);
  }, [className, Subject, book]);

  return (
    <>
      <View style={''}>
        <FlatList
          data={chapters}
          keyExtractor={item => item.code}
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
                  Section,
                  Subject,
                  book,
                  code: item.code,
                  title:
                    'Class ' +
                    className.slice(5, className.length) +
                    ' : ' +
                    item.title,
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
                {item.title}
              </Text>
              <Text style={{ padding: 4, fontSize: 18 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
