// components/Btn.tsx
import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Vw } from '@/components/Vw';
import applyShadow from '@/components/Shadows'; // Import your shadow function

interface BtnProps {
  title: string;
  onPress: () => void;
  style?: object;  // Optional style override
  disabled?: boolean; // Optional disabled prop
  alignment?: 'flex-start' | 'center' | 'flex-end';  // New prop for alignment
  shadowLevel?: 'light' | 'medium' | 'heavy'; // New prop for shadow level
}

const Btn: React.FC<BtnProps> = ({
  title,
  onPress,
  style,
  disabled = false,
  alignment = 'center',  // Default to 'center' alignment
  shadowLevel = 'light',  // Default to 'light' shadow
}) => {
  const { colors } = useTheme();

  // Get the shadow style for the button based on shadowLevel and theme color
  const shadowStyle = applyShadow(shadowLevel, colors.shadowColor);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: disabled ? colors.BtnDisabled : colors.button, // Apply different color when disabled
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: alignment,  // Apply the alignment here
          marginTop: 20,
          ...applyShadow('heavy', colors.button),
        },
        style,  // Allow custom styles to be passed in
      ]}
      disabled={disabled}
    >
      <Vw.Text
        type="default"
        align="center"
        lightColor={colors.menuTextItemNotSelected}
        darkColor={colors.menuTextItemNotSelected}
      >
        {title}
      </Vw.Text>
    </TouchableOpacity>
  );
};

export default Btn;
