import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  COOKING_HISTORY: 'cooking_history',
};

class StorageService {
  // Save cooking history entry
  async saveCookingHistory(entry) {
    try {
      const existingHistory = await this.getCookingHistory();
      const newHistory = [entry, ...existingHistory]; // Add new entry at the beginning
      
      // Keep only the last 50 entries to prevent storage bloat
      const trimmedHistory = newHistory.slice(0, 50);
      
      await AsyncStorage.setItem(STORAGE_KEYS.COOKING_HISTORY, JSON.stringify(trimmedHistory));
      console.log('✅ Cooking history saved:', entry);
      return true;
    } catch (error) {
      console.error('❌ Error saving cooking history:', error);
      return false;
    }
  }

  // Get all cooking history
  async getCookingHistory() {
    try {
      const history = await AsyncStorage.getItem(STORAGE_KEYS.COOKING_HISTORY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('❌ Error getting cooking history:', error);
      return [];
    }
  }

  // Clear all cooking history
  async clearCookingHistory() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.COOKING_HISTORY);
      console.log('✅ Cooking history cleared');
      return true;
    } catch (error) {
      console.error('❌ Error clearing cooking history:', error);
      return false;
    }
  }

  // Get the most recent cooking entry (for repeat functionality)
  async getLastCookingEntry() {
    try {
      const history = await this.getCookingHistory();
      return history.length > 0 ? history[0] : null;
    } catch (error) {
      console.error('❌ Error getting last cooking entry:', error);
      return null;
    }
  }
}

const storageService = new StorageService();
export default storageService;