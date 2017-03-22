import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens/';
import store from './store/';


registerScreens(store, Provider);

const createTabs = () => {
  let tabs = [
    {
      label: 'One',
      icon: require('../img/one.png'),
      screen: 'Ninja.FirstTabScreen',
      title: 'Screen One'
    },
    {
      label: 'Two',
      icon: require('../img/two.png'),
      screen: 'Ninja.SecondTabScreen',
      title: 'Screen Two'
    }
  ];

  return tabs;
}



Navigation.startTabBasedApp({
    tabs: createTabs(),
    drawer: {
        left: {
            screen: "Ninja.Drawer"
        },
        disableOpenGesture: false   // 可以通过手指向右滑动，打开Drawer
    }
 });
