import { createStackNavigator } from '@react-navigation/stack';
import { PlantLists } from '../src/PlantsList/PlantsList';
import { PlantView } from '../src/ViewPlant/ViewPlant';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="ListScreen" component={PlantLists} />
      <Stack.Screen name="PlantView" component={PlantView} />
    </Stack.Navigator>
  );
}