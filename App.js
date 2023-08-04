import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./screens/Homepage";
import Profile from "./screens/Profile";
import Dependants from "./screens/Dependants";
import Payment from "./screens/Payment";
import Contact from "./screens/Contact";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0284c7",
        },
        headerTintColor: "#fff",
        tabBarActiveBackgroundColor: "#0284c7",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#0284c7",
        tabBarStyle: {
          height: 56,
        },
        tabBarLabelStyle: {
          paddingBottom: 6,
          fontFamily: "productsansregular",
        },
      }}
    >
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerTitle: "Welcome",
          headerTitleStyle: {
            fontFamily: "productsansbold",
          },
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Dependants"
        component={Dependants}
        options={{
          title: "Dependants",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          title: "Talk To Us",
          tabBarIcon: ({ color }) => (
            <Feather name="phone" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    productsansregular: require("./assets/fonts/product-sans-regular.ttf"),
    productsansbold: require("./assets/fonts/product-sans-bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0284c7" />

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0284c7",
          },
          headerTitleStyle: {
            fontFamily: "productsansbold",
          },
          headerTintColor: "#fff",
          headerMode: "float",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ title: "Welcome" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Dependants"
          component={Dependants}
          options={{ title: "Dependants" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: "Payment & Status" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Talk To Us" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
