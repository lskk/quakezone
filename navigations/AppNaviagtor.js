
import TabScreens from "../navigations/MainTabNavigator";
import {createSwitchNavigator,createAppContainer} from "react-navigation";
  
export default createAppContainer(
    createSwitchNavigator(
    {
        App: TabScreens
    }
    )
  );
  
  // import React from 'react';
  // import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
  
  // import MainTabNavigator from './MainTabNavigator';
  
  // export default createAppContainer(createSwitchNavigator({
  //   // You could add another route here for authentication.
  //   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //   Main: MainTabNavigator,
  // }));
  