// components/MainView.tsx
import React from 'react';
import { StyleSheet, type ViewProps, View, Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';

export type MainViewProps = ViewProps & {
  title?: string; // Optional title
  subtitle?: string; // Optional subtitle
  children?: React.ReactNode; // Nested components
};

export function MainView({ title, subtitle, style, children, ...otherProps }: MainViewProps) {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]} {...otherProps}>
      {title && <Text style={[styles.title, { color: textColor }]}>{title}</Text>}
      {subtitle && <Text style={[styles.subtitle, { color: textColor }]}>{subtitle}</Text>}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  lightColor?: string;
  darkColor?: string;
};

MainView.Text = function ThemedText({
  type = 'default',
  style,
  lightColor,
  darkColor,
  ...props
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'defaultSemiBold' && styles.defaultSemiBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
});
