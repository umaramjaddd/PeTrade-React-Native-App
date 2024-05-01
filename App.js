import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';
import AdUploadScreen from './screens/AdUploadScreen';
import MyAdsScreen from './screens/MyAdsScreen';
import ChatScreen from './screens/ChatScreen';

import ProfileScreen from './screens/Profile';

import { signOut } from 'firebase/auth';
import { auth, firestore } from './firebase';
import { AuthContext } from './AuthContext';

import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

import HomeScreen from "./screens/HomeScreen";
import { AdDetail } from "./screens/AdDetail"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const PostStack = createNativeStackNavigator();

import { DiagnosisNavigation } from './src/DiagnosisNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function PostNavigator() {
    return (
        <PostStack.Navigator screenOptions={{headerShown: false}}>
            <PostStack.Screen component={HomeScreen} name='Search' />
            <PostStack.Screen component={AdDetail} name='AdDetail' />
        </PostStack.Navigator>
    );
}



const AppTabs = () => {
  const [activeTab, setActiveTab] = useState('Home'); // track the active tab

  // define a function to determine the size of the icon based on whether it's active or not
  const getIconSize = (isActive) => {
    return isActive ? 30 : 24; // change the size based on whether the tab is active or not
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="#aaa"
      barStyle={{ backgroundColor: '#008080' }}
    >
      <Tab.Screen
        name="Home"
        component={PostNavigator}
        options={{
          tabBarLabel: 'Ads',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={getIconSize(activeTab === 'Home' || focused)}
            />
          ),
        }}
        listeners={({ route }) => {
          // update the active tab when it's changed
          setActiveTab(route.name);
        }}
      />
      <Tab.Screen
        name="AdUpload"
        component={AdUploadScreen}
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={getIconSize(activeTab === 'AdUpload' || focused)}
            />
          ),
        }}
        listeners={({ route }) => {
          // update the active tab when it's changed
          setActiveTab(route.name);
        }}
      />
      <Tab.Screen
      name="MyAds"
      component={MyAdsScreen}
      options={{
        tabBarLabel: 'My Ads',
        tabBarIcon: ({ color, size, focused }) => (
          <MaterialCommunityIcons
            name="clipboard-list-outline"
            color={color}
            size={getIconSize(activeTab === 'MyAds' || focused)}
          />
        ),
      }}
      listeners={({ route }) => {
        // update the active tab when it's changed
        setActiveTab(route.name);
      }}
    />
      {/* <Tab.Screen
        name="Diagnose"
        component={DiagnosisNavigation}
        options={{
          tabBarLabel: 'Diagnose',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="stethoscope"
              color={color}
              size={getIconSize(activeTab === 'Diagnose' || focused)}
            />
          ),
        }}
        listeners={({ route }) => {
          // update the active tab when it's changed
          setActiveTab(route.name);
        }}
      /> */}
    </Tab.Navigator>
  );
};


const AppStart = () => {
  const [user, setUser] = useState({user: null, data: null});

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
          if (user) {
              (async () => {
                  const docRef = doc(firestore, "users", user.uid);

                  getDoc(docRef).then(value => {
                      const data = value.data();

                      setUser({
                          user: user,
                          data: {
                              mobileNumber: data.mobileNumber
                          }
                      });
                  })
                  .catch(error => {
                      alert(error);
                  })
              })();
          }
          else {
              setUser({
                  user: null,
                  data: null
              });
          }
      })

      return unsub;
  }, []);

  return(
    <AuthContext.Provider value={user}>
    {
      user.user === null ?
      (<Stack.Navigator 
        name='Root'
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
          }}>
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Signup' component={SignupScreen} />
      </Stack.Navigator>)
      : <AppDrawer />
    }
    </AuthContext.Provider>
  )
}
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => signOut(auth) }
        icon={() => <MaterialCommunityIcons name="logout" size={24} color="red" />}
      />
    </DrawerContentScrollView>
  );
}

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: {
          backgroundColor: '#fff'
        },
        drawerStyle: {
          backgroundColor: '#f6f6f6'
        },
        activeTintColor: '#000',
        activeBackgroundColor: '#dcdcdc',
        inactiveTintColor: '#888',
        inactiveBackgroundColor: '#f6f6f6',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
          marginLeft: -5
        },
        itemStyle: {
          borderRadius: 10,
          marginVertical: 5
        }
      }}
    >
      <Drawer.Screen
        name="Ads"
        component={AppTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
          ),
          headerTitle: "",
          title: "Home"
        }}
      />
      
      <Drawer.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStart />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
