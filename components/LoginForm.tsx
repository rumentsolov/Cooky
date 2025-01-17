//components/LoginForm.tsx

import React, { useState } from 'react';
import { TextInput, View, Alert, Image, TouchableOpacity } from 'react-native';
import { LAYOUTS } from '@/constants/Layouts';
import { useTheme } from '@/context/ThemeContext';
import { Vw } from '@/components/Vw';
import Btn from '@/components/Button'; 


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
    <Vw style={LAYOUTS.container}>
      <Vw style={LAYOUTS.imageContainerTop}>
        <Image source={require('@/assets/images/cooky.png')} style={LAYOUTS.imageTop} />
      </Vw>
      <Vw style={[LAYOUTS.scrollContent, { paddingTop: 20 } ]}>
        <Vw >
          <TextInput
            style={[LAYOUTS.inputField, { fontSize: 16, color: colors.text }]}
            placeholder="  >> Имейл"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            placeholderTextColor={colors.semiText}
          />
          <TextInput
            style={[LAYOUTS.inputField, { fontSize: 16, color: colors.text }]}
            placeholder="  >> Парола"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor={colors.semiText}
          />
        </Vw>
        <Btn
          title="Вход / Регистрация"
          onPress={handleLoginOrCreate}
          style={{ maxWidth: 350 }}
          alignment="flex-end"
          //buttonColor={colors.text}
          />
      </Vw>
    </Vw>
  );
};

export default LoginForm;
