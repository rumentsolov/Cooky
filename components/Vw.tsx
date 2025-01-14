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
  backgroundColor?: string; // Custom background color
};

var fontsize = FONTSIZE();


export function Vw({ title, subtitle, style, backgroundColor: customBgColor, children, ...otherProps }: VwProps) {
  const themeBackgroundColor = useThemeColor({}, 'background');
  const backgroundColor = customBgColor || themeBackgroundColor; // Use custom color if provided

  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[LAYOUTS.container, { backgroundColor }, style]} {...otherProps}>
      {title && <Text style={[fontsize.title, { color: textColor }]}>{title}</Text>}
      {subtitle && <Text style={[fontsize.semiBold, { color: textColor }]}>{subtitle}</Text>}
      <View style={LAYOUTS.container}>
        {children}
      </View>
    </View>
  );
}


Vw.Scrollable = function VwScrollable({ title, subtitle, style, backgroundColor: customBgColor, children, ...otherProps }: VwProps) {
  const themeBackgroundColor = useThemeColor({}, 'background');
  const backgroundColor = customBgColor || themeBackgroundColor; // Use custom color if provided

  const textColor = useThemeColor({}, 'text');

  return (
    <ScrollView style={[LAYOUTS.container, { backgroundColor }, style]} {...otherProps}>
      {title && <Text style={[fontsize.title, { color: textColor }]}>{title}</Text>}
      {subtitle && <Text style={[fontsize.semiBold, { color: textColor }]}>{subtitle}</Text>}
      <View style={LAYOUTS.container}>
        {children}
      </View>
    </ScrollView>
  );
};


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
  align?: 'center' | 'left' | 'right'; 
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
  paddingTop = 0, // Default paddingTop is 0
  paddingBottom = 0, // Default paddingBottom is 0
  ...props
}: ThemedTextProps & {
  paddingTop?: number; // Padding top
  paddingBottom?: number; // Padding bottom
}) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const alignmentStyle = {
    textAlign: align, 
  };

  const paddingStyle = {
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  };

  return (
    <Text
      style={[
        { color },
        alignmentStyle, 
        paddingStyle, 
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
