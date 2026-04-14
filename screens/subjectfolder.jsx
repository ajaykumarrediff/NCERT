import { FlatList, Image, Text, TouchableOpacity } from 'react-native';
import BottomBar from '../Components/bottomBar';
import { useEffect, useState } from 'react';
import JsonData from '../Assets/booklocation.json';

export default function SubjectFolder({ navigation, route }) {
  const { Section, className } = route.params;
  const [subjectList, setSubjectList] = useState([]);
  const imageLocation = {
    english: require('../Assets/english.png'),
    hindi: require('../Assets/hindi.png'),
    sanskrit: require('../Assets/sanskrit.png'),
    politicalscience: require('../Assets/politicalscience.png'),
    computerscience: require('../Assets/computerscience.png'),
    mathematics: require('../Assets/mathematics.png'),
    physics: require('../Assets/physics.png'),
    chemistry: require('../Assets/chemistry.png'),
    biology: require('../Assets/biology.png'),
    history: require('../Assets/history.png'),
    geography: require('../Assets/geography.png'),
    economics: require('../Assets/economic.png'),
    science: require('../Assets/science.png'),
    socialscience: require('../Assets/socialscience.png'),
    punjabi: require('../Assets/punjabi.png'),
  };

  useEffect(() => {
    const classData = JsonData[className];

    if (!classData) return;

    const subjects = [];

    Object.keys(classData).forEach(subject => {
      const result = subject.replace(/\s+/g, '').toLowerCase();
      subjects.push({ title: subject, imageName: result });
    });

    setSubjectList(subjects);
  }, [className, Section]);

  return (
    <>
      <FlatList
        data={subjectList}
        numColumns={2}
        keyExtractor={item => item.title}
        contentContainerStyle={{ padding: 8 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        // style={{ marginBottom: 50 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: '48%',
              borderWidth: 2,
              borderRadius: 8,
              padding: 10,
              marginBottom: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              navigation.navigate('Book', {
                Section: Section,
                className: className,
                title:
                  'Class ' +
                  className.slice(5, className.length) +
                  ' : ' +
                  item.title,
                Subject: item.title,
              })
            }
          >
            <Image
              source={imageLocation[item.imageName]}
              style={{ height: 120, width: 120 }}
            />
            <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 8 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* <BottomBar navigation={navigation} /> */}
    </>
  );
}
