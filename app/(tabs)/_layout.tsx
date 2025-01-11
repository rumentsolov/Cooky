import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Начало',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-circle" size={29} color="black" />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'меню',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={28} color="black" />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'контакт',
          tabBarIcon: ({ color }) => <FontAwesome name="phone" size={28} color="black" />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'потребител',
          tabBarIcon: ({ color }) =>  <MaterialCommunityIcons name="chef-hat" size={28} color="black" />,
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: 'кошница',
          tabBarIcon: ({ color }) =><FontAwesome5 name="shopping-cart" size={28} color="black" />,
        }}
      />
    </Tabs>
  );
}
