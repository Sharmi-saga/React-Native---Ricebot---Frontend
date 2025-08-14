import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

const PrivacyPolicy = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/robot-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Image 
            source={require('../assets/menu.png')}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>

       <View style={styles.policyContainer}>
  <Text style={styles.sectionTitle}>1. Information We Collect</Text>
  <Text style={styles.policyText}>
    We collect personal information such as name, email address, device data, and usage information when you access and use the app. This data is essential for providing and improving the services we offer.
  </Text>

  <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
  <Text style={styles.policyText}>
    The information we collect is used to provide you with the best experience possible. It helps us optimize app performance, enhance functionality, personalize user experiences, and communicate important updates. We may also use this data to send you notifications or promotional offers that align with your preferences.
  </Text>

  <Text style={styles.sectionTitle}>3. Data Security</Text>
  <Text style={styles.policyText}>
    We implement standard security measures to protect your personal information. However, please note that no method of electronic transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
  </Text>

  <Text style={styles.sectionTitle}>4. Your Rights</Text>
  <Text style={styles.policyText}>
    You have the right to access, correct, or delete your personal data. If you wish to exercise these rights, please contact us. Additionally, you can manage your notification preferences and opt-out of marketing communications at any time.
  </Text>
</View>

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('TermsOfService')}>
          <Text style={styles.footerText}>Term of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.footerText}>Privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
          <Text style={styles.footerText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#178ea3',
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
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
  policyContainer: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#178ea3',
    marginBottom: 10,
    marginTop: 15,
  },
  policyText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 22,
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#096171',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default PrivacyPolicy;