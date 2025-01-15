// components/Btn.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Vw } from '@/components/Vw';
import applyShadow from '@/utils/Shadows';
import { LAYOUTS } from '@/constants/Layouts';

const Btn: React.FC<{
  title: string;
  icon?: React.ReactNode; // Optional icon component
  onPress: () => void;
  style?: object; // Allow custom style override
  alignment?: 'flex-start' | 'center' | 'flex-end'; // Alignment option
  buttonColor?: string; // Custom color for the button
}> = ({ title, icon,onPress, style, alignment = 'center' , buttonColor }) => {

  const { colors } = useTheme();


  return (
    <Vw style={LAYOUTS.paddingLR25Container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            backgroundColor:buttonColor||colors.button,
            alignSelf: alignment,
            borderRadius: 25, 
            paddingVertical: 14,
            paddingHorizontal: 18,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: icon ? 'row' : 'column', 
          },
          applyShadow(), // Apply shadows
          style,
        ]}
      >
        {icon ? (
          <>{icon}</>
        ) : (
          title && (
            <Vw.Text
              type="default"
              align="center"
              lightColor={colors.menuTextItemNotSelected}
              darkColor={colors.menuTextItemNotSelected}
            >
              {title}
            </Vw.Text>
          )
        )}
      </TouchableOpacity>
    </Vw>
  );
};


export default Btn;
