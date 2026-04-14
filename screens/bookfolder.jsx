import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import JsonData from '../Assets/booklocation.json';
import { useEffect, useState } from 'react';
import BottomBar from '../Components/bottomBar';

export default function BookFolder({ navigation, route }) {
  const { className, Subject, Section } = route.params;
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const subjectData = JsonData[className][Subject];

    const books = [];

    subjectData.forEach(book => {
      books.push({ name: book.name, code: book.code });
    });
    setBookList(books);
  }, [className, Subject]);

  return (
    <>
      <FlatList
        data={bookList}
        numColumns={2}
        keyExtractor={item => item.code}
        contentContainerStyle={{ padding: 8 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        // style={{ marginBottom: 50 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: '48%',
              height: 170,
              borderWidth: 2,
              borderRadius: 8,
              padding: 10,
              marginBottom: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              navigation.navigate('ListChapters', {
                title:
                  'Class ' +
                  className.slice(5, className.length) +
                  ' : ' +
                  Subject +
                  ' : ' +
                  item.name,
                Section: Section,
                className: className,
                Subject: Subject,
                book: item.code,
              })
            }
          >
            {/* <Image
              source={imageLocation[item.imageName]}
              style={{ height: 120, width: 120 }}
            /> */}
            <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 8 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* <BottomBar navigation={navigation} /> */}
    </>
  );
}
