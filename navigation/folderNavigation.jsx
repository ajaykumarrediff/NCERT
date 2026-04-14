import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/Home';
import ClassFolder from '../screens/classfolder';
import BookFolder from '../screens/bookfolder';
import ListChapters from '../screens/listchapters';
import PDFViewer from '../screens/pdfViewer';
import SubjectFolder from '../screens/subjectfolder';

const Stack = createNativeStackNavigator();

export default function StackNavigations() {
  return (
    <Stack.Navigator initialRouteName="Class">
      <Stack.Screen
        name="Home"
        component={HomeScreens}
        options={{ title: 'Home' }}
      />
      {/* <Stack.Screen
        name="Class"
        component={ClassFolder}
        options={({ route }) => ({
          title: route.params.title,
        })}
      /> */}
      <Stack.Screen
        name="Class"
        component={ClassFolder}
        options={{
          title: 'Class',
        }}
      />
      <Stack.Screen
        name="Subject"
        component={SubjectFolder}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Book"
        component={BookFolder}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="ListChapters"
        component={ListChapters}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="PDFViewer"
        component={PDFViewer}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
