import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  RefreshControl,
  ScrollView,
  TextInput,
} from 'react-native';
import moment from 'moment';
import storageService from '../services/StorageService';

const CookingHistory = ({ navigation }) => {
  const [cookingHistory, setCookingHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadCookingHistory = async () => {
    try {
      setLoading(true);
      const history = await storageService.getCookingHistory();
      setCookingHistory(history);
      console.log('📋 Loaded cooking history:', history.length, 'entries');
    } catch (error) {
      console.error('❌ Error loading cooking history:', error);
      Alert.alert('Error', 'Failed to load cooking history');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadCookingHistory();
    setRefreshing(false);
  };

  const handleRepeatOrder = async () => {
    try {
      const lastEntry = await storageService.getLastCookingEntry();
      if (lastEntry) {
        Alert.alert(
          'Repeat Last Order',
          `Would you like to repeat cooking ${lastEntry.quantity} cups of rice?`,
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Repeat',
              onPress: () => {
                // Navigate to StartCooking with the last quantity
                navigation.navigate('StartCooking', {
                  selectedQuantity: lastEntry.quantity
                });
              }
            }
          ]
        );
      } else {
        Alert.alert('No History', 'No previous cooking history found to repeat.');
      }
    } catch (error) {
      console.error('❌ Error getting last cooking entry:', error);
      Alert.alert('Error', 'Failed to get previous cooking data');
    }
  };

  const handleClearHistory = () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear all cooking history?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            try {
              await storageService.clearCookingHistory();
              setCookingHistory([]);
              Alert.alert('Success', 'Cooking history cleared');
            } catch (error) {
              console.error('❌ Error clearing cooking history:', error);
              Alert.alert('Error', 'Failed to clear cooking history');
            }
          }
        }
      ]
    );
  };

  useEffect(() => {
    loadCookingHistory();
  }, []);

  const formatDate = (dateString) => {
    return moment(dateString).format('DD/MM/YYYY');
  };

  const formatTime = (dateString) => {
    return moment(dateString).format('HH:mm');
  };

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

      <ScrollView 
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cooking History</Text>
        </View>

        <View style={styles.historyContainer}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyHeaderText}>Cooking History</Text>
            {cookingHistory.length > 0 && (
              <TouchableOpacity onPress={handleClearHistory} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
            )}
          </View>

          {loading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading history...</Text>
            </View>
          ) : cookingHistory.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No cooking history yet</Text>
              <Text style={styles.emptySubText}>Start cooking to see your history here</Text>
            </View>
          ) : (
            cookingHistory.map((entry, index) => (
              <View key={index} style={styles.historyItem}>
                <View style={styles.historyItemLeft}>
                  <Text style={styles.dateText}>{formatDate(entry.date)}</Text>
                  <Text style={styles.timeText}>{formatTime(entry.date)}</Text>
                </View>
                <View style={styles.historyItemRight}>
                  <Text style={styles.statusText}>Status: {entry.quantity} Cups</Text>
                  <Text style={styles.statusSubText}>{entry.status}</Text>
                </View>
              </View>
            ))
          )}
        </View>

        {cookingHistory.length > 0 && (
          <TouchableOpacity style={styles.repeatButton} onPress={handleRepeatOrder}>
            <Text style={styles.repeatButtonText}>Repeat Order of Previous Quantity</Text>
          </TouchableOpacity>
        )}
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
  historyContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 30,
    marginTop:30
  },
  historyHeader: {
    backgroundColor: '#178ea3',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  clearButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#096171',
  },
  clearButtonText: {
    color: '#096171',
    fontSize: 14,
    fontWeight: '600',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  historyItemLeft: {
    flex: 1,
    marginRight: 10,
  },
  historyItemRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 16,
    color: '#333333',
  },
  timeText: {
    fontSize: 14,
    color: '#666666',
  },
  statusText: {
    fontSize: 16,
    color: '#178ea3',
    fontWeight: '500',
  },
  statusSubText: {
    fontSize: 14,
    color: '#666666',
  },
  repeatButton: {
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  repeatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#666666',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '600',
    marginBottom: 10,
  },
  emptySubText: {
    fontSize: 14,
    color: '#666666',
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

export default CookingHistory;