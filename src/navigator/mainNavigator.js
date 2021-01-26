import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2197085Navigator from '../features/BlankScreen2197085/navigator';
import BlankScreen1197084Navigator from '../features/BlankScreen1197084/navigator';
import BlankScreen0197083Navigator from '../features/BlankScreen0197083/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2197085: { screen: BlankScreen2197085Navigator },
BlankScreen1197084: { screen: BlankScreen1197084Navigator },
BlankScreen0197083: { screen: BlankScreen0197083Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
