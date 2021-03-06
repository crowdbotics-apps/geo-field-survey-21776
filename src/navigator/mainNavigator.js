import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile152808Navigator from '../features/UserProfile152808/navigator';
import Maps152789Navigator from '../features/Maps152789/navigator';
import Settings152767Navigator from '../features/Settings152767/navigator';
import Settings152752Navigator from '../features/Settings152752/navigator';
import NotificationList152751Navigator from '../features/NotificationList152751/navigator';
import Maps152750Navigator from '../features/Maps152750/navigator';
import UserProfile152749Navigator from '../features/UserProfile152749/navigator';
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
UserProfile152808: { screen: UserProfile152808Navigator },
Maps152789: { screen: Maps152789Navigator },
Settings152767: { screen: Settings152767Navigator },
Settings152752: { screen: Settings152752Navigator },
NotificationList152751: { screen: NotificationList152751Navigator },
Maps152750: { screen: Maps152750Navigator },
UserProfile152749: { screen: UserProfile152749Navigator },
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
