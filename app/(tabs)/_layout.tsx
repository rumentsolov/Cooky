import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { getThemeColors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const theme = useColorScheme() ?? 'light';
  const isDarkMode = theme === 'dark';
  const colors = getThemeColors(isDarkMode); 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.IconSelected, // this is the color of the icon when active
        tabBarInactiveTintColor: colors.IconDefault, // this is the color of the icon when inactive
        tabBarActiveBackgroundColor: colors.menuBackground,
        tabBarInactiveBackgroundColor: colors.menuBackground,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Начало',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-circle" size={29} color={color} /> // Pass the color prop here
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'меню',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={28} color={color} /> // Pass the color prop here
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'контакт',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="phone" size={28} color={color} /> // Pass the color prop here
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'потребител',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chef-hat" size={28} color={color} /> // Pass the color prop here
          ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: 'кошница',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" size={28} color={color} /> // Pass the color prop here
          ),
        }}
      />
    </Tabs>
  );
}
