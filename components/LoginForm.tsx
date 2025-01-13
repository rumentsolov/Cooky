import React, { useState } from 'react';
import { Button, TextInput, View, Alert, Image } from 'react-native';
import { LAYOUTS } from '@/constants/Layouts';
import { useTheme } from '@/context/ThemeContext'; 
import { Vw } from '@/components/Vw';

const LoginForm: React.FC = () => {
  const { colors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginOrCreate = () => {
    if (username && password) {
      Alert.alert('Добре дошли!', `Потребител: ${username} \nПарола: ${password}`);
    } else {
      Alert.alert('Моля, попълнете и двете полета');
    }
  };

  return (
    <Vw style={LAYOUTS.scrollContent}>
      <Vw style={LAYOUTS.imageContainerTop}>
        <Image source={require('@/assets/images/cooky.png')} style={LAYOUTS.imageTop} />
      </Vw>

      <TextInput
        style={[LAYOUTS.inputField, { fontSize: 18, color: colors.text }]} 
        placeholder="  Имейл"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholderTextColor={colors.menuTextItemNotSelected}
      />
      <TextInput
        style={[LAYOUTS.inputField, { fontSize: 18, color: colors.text }]}
        placeholder="  Парола"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor={colors.menuTextItemNotSelected}
      />
      <View style={LAYOUTS.buttonContainer}>
        <Button title="Вход / Регистрация" onPress={handleLoginOrCreate} color={colors.button} />
      </View>
    </Vw>
  );
};

export default LoginForm;
