import React from 'react';
import { View } from 'react-native';

import TabScreens from "../navigations/MainTabNavigator";
import {createSwitchNavigator,createAppContainer} from "react-navigation";
  

// export default TabScreens;
const AppContainer = createAppContainer(TabScreens);
export default class AppNavigator extends React.Component {
    render(){
        return <AppContainer />
    }
}
// export default createAppContainer(
//     createSwitchNavigator(
//     {
//         App: TabScreens
//     }
//     )
//   );
  
  // import React from 'react';
  // import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
  
  // import MainTabNavigator from './MainTabNavigator';
  
  // export default createAppContainer(createSwitchNavigator({
  //   // You could add another route here for authentication.
  //   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //   Main: MainTabNavigator,
  // }));
  