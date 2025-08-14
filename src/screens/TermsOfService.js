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

const TermsOfService = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/robot-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>Term of Service</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Image 
            source={require('../assets/menu.png')}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
       <View style={styles.termsContainer}>
  <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
  <Text style={styles.termsText}>
    By using this app, users agree to comply with these Terms and Conditions. If you do not agree to these terms, do not use the app.
  </Text>

  <Text style={styles.sectionTitle}>2. Services Provided</Text>
  <Text style={styles.termsText}>
    Ricebot offers a variety of services, including remote monitoring, control, and interaction with IoT devices through our platform. These devices may include smart home appliances, kitchen automation systems, and other IoT-enabled devices.
  </Text>

  <Text style={styles.sectionTitle}>3. Eligibility</Text>
  <Text style={styles.termsText}>
    To use our services, you must be at least 18 years of age or the legal age of majority in your jurisdiction. By agreeing to these terms, you confirm that you are eligible to use the services.
  </Text>

  <Text style={styles.sectionTitle}>4. Account Registration</Text>
  <Text style={styles.termsText}>
    To access certain features of the app, you may be required to create an account. You agree to provide accurate and complete information during the registration process and keep your account details updated. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
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
  termsContainer: {
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
  termsText: {
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

export default TermsOfService;