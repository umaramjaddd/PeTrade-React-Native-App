import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GeneralScreen } from './Screens/GeneralScreen';
import { UploadScreen } from './Screens/UploadScreen';
import { DiagnosisScreen } from './Screens/DiagnosisScreen';
import { PrescriptionScreen } from './Screens/PrescriptionScreen';


const DiagnosisStack = createNativeStackNavigator();

export function DiagnosisNavigation() {
    const screenOptions = {
        headerShown: false
    };

    return (
      <DiagnosisStack.Navigator initialRouteName='Upload' screenOptions={screenOptions}>
        <DiagnosisStack.Screen name='General' component={GeneralScreen}/>
        <DiagnosisStack.Screen name='Upload' component={UploadScreen}/>
        <DiagnosisStack.Screen name='Diagnosis' component={DiagnosisScreen}/>
        <DiagnosisStack.Screen name='Prescription' component={PrescriptionScreen} />
      </DiagnosisStack.Navigator>
    );
}