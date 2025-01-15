import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, Button, Switch, View, StyleSheet } from 'react-native';
import { ThemeProvider } from '@/context/ThemeContext'; // Assuming you have a theme provider
import { LAYOUTS } from '@/constants/Layouts';

const Account = () => {
  // Mocked binding data for the UI. Replace with state or context as needed.
  const accountData = {
    email: "user@example.com",
    phoneNo: "123-456-7890",
    givenName: "John",
    familyName: "Doe",
    address: "123 Main Street",
    createdAt: "2022-01-01",
    updatedAt: "2022-12-31",
    lastLogin: "2023-01-15",
    latestBasketUpdate: "2023-01-10",
    totalBasketItems: 5,
    emailVerified: true,
  };

  const handleSave = () => {
    console.log("Save button pressed");
    // Implement save logic here
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <ScrollView contentContainerStyle={[LAYOUTS.scrollContent, styles.container]}>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{accountData.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
              style={styles.input}
              value={accountData.phoneNo}
              placeholder="Enter your phone number"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Given Name:</Text>
            <TextInput
              style={styles.input}
              value={accountData.givenName}
              placeholder="Enter your given name"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Family Name:</Text>
            <TextInput
              style={styles.input}
              value={accountData.familyName}
              placeholder="Enter your family name"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <TextInput
              style={styles.input}
              value={accountData.address}
              placeholder="Enter your address"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Created At:</Text>
            <Text style={styles.value}>{accountData.createdAt}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Updated At:</Text>
            <Text style={styles.value}>{accountData.updatedAt}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Last Login:</Text>
            <Text style={styles.value}>{accountData.lastLogin}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Basket Updated:</Text>
            <Text style={styles.value}>{accountData.latestBasketUpdate}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Basket Items:</Text>
            <Text style={styles.value}>{accountData.totalBasketItems}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Email Verified:</Text>
            <Switch value={accountData.emailVerified} disabled />
          </View>

          <View style={styles.saveButton}>
            <Button title="Save" onPress={handleSave} />
          </View>
        </ScrollView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    width: '40%',
  },
  value: {
    width: '60%',
    textAlign: 'right',
  },
  input: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  saveButton: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Account;
