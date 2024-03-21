import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TareaNavigator } from './src/navigator/TareaNavigator';


const App = () => {
    return (
        <NavigationContainer>
          <TareaNavigator/>
        </NavigationContainer>
    );
}

export default App;