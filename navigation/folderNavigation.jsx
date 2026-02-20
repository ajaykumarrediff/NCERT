import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/Home';
import ClassFolder from '../screens/classfolder';
import PDFFolder from '../screens/pdfFolder';
import PartDataShow from '../screens/listPDFPart';
import PDFViewer from '../screens/pdfViewer';

const Stack = createNativeStackNavigator();

export default function StackNavigations() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreens}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Class"
        component={ClassFolder}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="PDFfolder"
        component={PDFFolder}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="PartPDF"
        component={PartDataShow}
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
