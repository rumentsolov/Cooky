// components/Vw.tsx
import React from 'react';
import { StyleSheet, type ViewProps, View, Text, type TextProps, ScrollView } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTSIZE } from '@/constants/Fonts';
import { LAYOUTS } from '@/constants/Layouts';

export type VwProps = ViewProps & {
  title?: string; // Optional title
  subtitle?: string; // Optional subtitle
  children?: React.ReactNode; // Nested components
};

var fontsize = FONTSIZE();

export function Vw({ title, subtitle, style, children, ...otherProps }: VwProps) {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <ScrollView style={[LAYOUTS.container, { backgroundColor }]} {...otherProps}>
      {title && <Text style={[fontsize.title, { color: textColor }]}>{title}</Text>}
      {subtitle && <Text style={[fontsize.semiBold, { color: textColor }]}>{subtitle}</Text>}

      <ScrollView
        contentContainerStyle={[LAYOUTS.container, style]} // Apply scroll-specific styles here
        showsVerticalScrollIndicator={false}
      >
        <View style={LAYOUTS.container}>{children}</View>
      </ScrollView>
    </ScrollView>
  );
}

export type ThemedTextProps = TextProps & {
  type?: 
  'default' | 
  'xSmall' | 
  'small' |
  'medium' |
  'large'|
  'xLarge'|
  'xxLarge'|
  'title'|
  'semiBold' | 
  'bold'|
  'describtion'|
  'button'|
  'link';
  lightColor?: string;
  darkColor?: string;
  align?: 'center' | 'left' | 'right'; // Text alignment
  paddingLeft?: number; // Padding left
  paddingRight?: number; // Padding right
};

Vw.Text = function ThemedText({
  type = 'default',
  style,
  lightColor,
  darkColor,
  align = 'left', // Default alignment is left
  paddingLeft = 0, // Default paddingLeft is 0
  paddingRight = 0, // Default paddingRight is 0
  ...props
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const alignmentStyle = {
    textAlign: align, // Align text based on 'left', 'center', or 'right'
  };

  const paddingStyle = {
    paddingLeft,
    paddingRight,
  };

  return (
    <Text
      style={[
        { color },
        alignmentStyle, // Apply the alignment style
        paddingStyle, // Apply the padding style
        type === 'default'    && fontsize.default,
        type === 'xSmall'     && fontsize.xSmall,
        type === 'small'      && fontsize.small,
        type === 'medium'     && fontsize.medium,
        type === 'large'      && fontsize.large,
        type === 'xLarge'     && fontsize.xLarge,
        type === 'xxLarge'    && fontsize.xxLarge,
        type === 'title'      && fontsize.title,
        type === 'semiBold'   && fontsize.semiBold,
        type === 'bold'       && fontsize.bold,
        type === 'describtion'&& fontsize.describtion,
        type === 'button'     && fontsize.button,
        type === 'link'       && fontsize.link,
        style,
      ]}
      {...props}
    />
  );
};
