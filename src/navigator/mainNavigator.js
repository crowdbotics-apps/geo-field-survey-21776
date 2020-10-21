import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps152730Navigator from '../features/Maps152730/navigator';
import Settings152708Navigator from '../features/Settings152708/navigator';
import Settings152693Navigator from '../features/Settings152693/navigator';
import NotificationList152692Navigator from '../features/NotificationList152692/navigator';
import Maps152691Navigator from '../features/Maps152691/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps152730: { screen: Maps152730Navigator },
Settings152708: { screen: Settings152708Navigator },
Settings152693: { screen: Settings152693Navigator },
NotificationList152692: { screen: NotificationList152692Navigator },
Maps152691: { screen: Maps152691Navigator },

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
