import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import mqttService from '../services/mqttService'; // Make sure the path is correct
const Settings = ({ navigation }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mqttStatus, setMqttStatus] = useState(mqttService.getStatus());

  useEffect(() => {
    const client = mqttService.connectMQTT(); // Initiate connection if needed

    const handleStatusChange = (status) => {
      setMqttStatus(status);
    };

    mqttService.onStatusChange(handleStatusChange);

    return () => {
      mqttService.offStatusChange(handleStatusChange);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/robot-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Image 
            source={require('../assets/menu.png')}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <Text style={styles.connectionText}>MQTT Connection Status:</Text>
        <View style={styles.connectionStatusContainer}>
          <Text
            style={[
              styles.connectionStatus,
              mqttStatus === 'Connected'
                ? styles.connected
                : mqttStatus === 'Connecting' || mqttStatus === 'Reconnecting'
                ? styles.connecting
                : styles.disconnected,
            ]}
          >
            {mqttStatus}
          </Text>

          <View
            style={[
              styles.circle,
              mqttStatus === 'Connected'
                ? styles.connectedCircle
                : mqttStatus === 'Connecting' || mqttStatus === 'Reconnecting'
                ? styles.connectingCircle
                : styles.disconnectedCircle,
            ]}
          />
        </View>

        <View style={styles.riceCookerContainer}>
          <Image
            source={require('../assets/rice-cooker.png')}
            style={styles.riceCookerImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            source={require('../assets/profile.png')}
            style={styles.profileIcon}
          />
          <Text style={styles.profileButtonText}>Your Profile</Text>
          <Text style={styles.arrowIcon}>→</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#178ea3',
  },
  logo: { width: 50, height: 50 },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    padding: 0,
  },
  menuIcon: { width: 24, height: 24, tintColor: '#FFFFFF' },
  content: { flex: 1, padding: 20 },
  titleContainer: {
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 25,
    marginBottom: 30,
    borderWidth: 0.9,
    borderColor: '#096171',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  connectionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  connectionStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  connectionStatus: {
    fontSize: 16,
    fontWeight: '600',
  },
  connected: { color: '#4CAF50' },
  connecting: { color: '#FFC107' },
  disconnected: { color: '#F44336' },
  connectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    marginLeft: 8,
  },
  connectingCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFC107',
    marginLeft: 8,
  },
  disconnectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F44336',
    marginLeft: 8,
  },
  riceCookerContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  riceCookerImage: {
    width: 300,
    height: 320,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#178ea3',
    padding: 16,
    borderRadius: 25,
    marginBottom: 50,
  },
  profileIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
    marginRight: 12,
  },
  profileButtonText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  arrowIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Settings;
