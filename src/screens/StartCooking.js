// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   Image,
//   TextInput,
// } from 'react-native';
// import Alerts from '../components/Alerts';

// const StartCooking = ({ navigation }) => {
//   const [selectedQuantity, setSelectedQuantity] = useState('1 Cup');

//   const getEstimatedTime = (quantity) => {
//     switch(quantity) {
//       case '1 Cup': return '30min';
//       case '2 Cup': return '45min';
//       case '5 Cup': return '55min';
//       default: return '30min';
//     }
//   };

//   const toggleQuantity = () => {
//     switch(selectedQuantity) {
//       case '1 Cup': return '2 Cup';
//       case '2 Cup': return '5 Cup';
//       case '5 Cup': return '1 Cup';
//       default: return '1 Cup';
//     }
//   };

//   const [showAlerts, setShowAlerts] = useState(false);
//   const [alerts, setAlerts] = useState([
//     {
//       type: 'warning',
//       title: 'Your Rice Level Is Low',
//       message: 'Check Device\'s Internet',
//     }
// ]);

//   // Add this before the return statement
//   const [isDataConnected, setIsDataConnected] = useState(true); // Add this state

//   // Remove the isDataConnected state and its button
//   const handleStartCooking = () => {
//     setAlerts([
//       {
//         type: 'Success',
//         title: 'Your Rice Is Ready',
//         message: 'View Rice Status',
//         onView: () => navigation.navigate('CookingStatus'),
//       }
//     ]);
//      setShowAlerts(true);
//   };
  
//   // In the JSX, remove this button:
//   // <TouchableOpacity 
//   //   style={[styles.startButton, { marginTop: 10 }]}
//   //   onPress={() => setIsDataConnected(!isDataConnected)}
//   // >
//   //   <Text style={styles.buttonText}>
//   //     {isDataConnected ? 'Simulate Offline' : 'Simulate Online'}
//   //   </Text>
//   // </TouchableOpacity>
  
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <Alerts
//         visible={showAlerts}
//         alerts={alerts}
//         onClose={() => setShowAlerts(false)}
//       />
//        */}
//       <View style={styles.header}>
//         <Image
//           source={require('../assets/robot-logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         <View style={styles.searchContainer}>
//           <Image
//             source={require('../assets/search.png')}
//             style={styles.searchIcon}
//             resizeMode="contain"
//           />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search..."
//             placeholderTextColor="#FFFFFF"
//           />
//         </View>
//         <TouchableOpacity style={styles.menuButton}>
//           <Image 
//             source={require('../assets/menu.png')}
//             style={styles.menuIcon}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.startCookingBanner}>
//           <Text style={styles.startCookingText}>Start Cooking</Text>
//         </View>

//         <View style={styles.quantitySection}>
//           <Text style={styles.sectionTitle}>Quantity Selection</Text>
          
//           <TouchableOpacity 
//             style={styles.quantitySelector}
//             onPress={() => setSelectedQuantity(toggleQuantity())}
//           >
//             <Text style={styles.quantityText}>{selectedQuantity}</Text>
//             <Image
//               source={require('../assets/down-arrow.png')}
//               style={styles.arrowIcon}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.mlSection}>
//           <Text style={styles.mlText}>
//             Machine learning model shows the ungrammed quantity of rice
//           </Text>
//         </View>

//         <View style={styles.estimatedSection}>
//           <Text style={styles.estimatedTime}>
//             Estimated cooking time : {getEstimatedTime(selectedQuantity)}{'\n'}
//             ( Based on the selected Quantity )
//           </Text>
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity 
//             style={styles.startButton}
//             onPress={handleStartCooking}
//           >
//             <Text style={styles.buttonText}>Start Cooking</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity 
//             style={styles.cancelButton}
//             onPress={() => navigation.goBack()}
//           >
//             <Text style={[styles.buttonText, styles.historyButtonText]}>Cancel</Text>
//           </TouchableOpacity>
          
//           // Add this near your other buttons
//           {/* <TouchableOpacity 
//             style={[styles.startButton, { marginTop: 10 }]}
//             onPress={() => setIsDataConnected(!isDataConnected)}
//           >
//             <Text style={styles.buttonText}>
//               {isDataConnected ? 'Simulate Offline' : 'Simulate Online'}
//             </Text>
//           </TouchableOpacity> */}
//         </View>
//       </View>

//       <View style={styles.footer}>
//         <TouchableOpacity>
//           <Text style={styles.footerText}>Term of Service</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.footerText}>Privacy policy</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.footerText}>Contact Us</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };



//===========================

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   Image,
//   TextInput,
//   Alert
// } from 'react-native';
// import axios from 'axios';
// import moment from 'moment';

// const StartCooking = ({ navigation }) => {
//   const [selectedQuantity, setSelectedQuantity] = useState('1 Cup');

//   const getEstimatedTime = (quantity) => {
//     switch(quantity) {
//       case '1 Cup': return '30min';
//       case '2 Cup': return '45min';
//       case '5 Cup': return '55min';
//       default: return '30min';
//     }
//   };

//   const toggleQuantity = () => {
//     switch(selectedQuantity) {
//       case '1 Cup': return '2 Cup';
//       case '2 Cup': return '5 Cup';
//       case '5 Cup': return '1 Cup';
//       default: return '1 Cup';
//     }
//   };

//   // const handleStartCooking = async () => {
//   //   // convert selected quantity to number
//   //   let rice_quantity = 1;
//   //   if (selectedQuantity === '2 Cup') rice_quantity = 2;
//   //   if (selectedQuantity === '5 Cup') rice_quantity = 5;

//   //   // get current datetime values
//   //   const now = moment();
//   //   const payload = {
//   //     rice_quantity,
//   //     day_of_week: now.isoWeekday(), // Monday=1, Sunday=7
//   //     month: now.month() + 1, // 0-based in moment
//   //     hour: now.hour(),
//   //     minute: now.minute(),
//   //     meal_type_encoded: 1, // Hardcoded: you can add a selector later
//   //   };

//   //   console.log('Sending to prediction backend:', payload);

//   //   try {
//   //     const response = await axios.post(
//   //       'https://rice-cooker-back-end.onrender.com/predict', // replace with your prediction backend URL
//   //       payload,
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //       }
//   //     );

//   //     console.log('Prediction response:', response.data);

//   //     if (response.data.prediction === 1) {
//   //       Alert.alert('Prediction', `Likely to cook. Shall I start cooking ${rice_quantity} cups?`);
//   //       navigation.navigate('CookingStatus');
//   //     } else {
//   //       Alert.alert('Prediction', 'Probably no cooking expected now.');
//   //     }

//   //   } catch (error) {
//   //     console.error('Prediction error:', error);
//   //     Alert.alert('Error', 'Failed to get prediction from backend.');
//   //   }
//   // };

//   const handleStartCooking = async () => {
//     let rice_quantity = 1;
//     if (selectedQuantity === '2 Cup') rice_quantity = 2;
//     if (selectedQuantity === '5 Cup') rice_quantity = 5;
  
//     const now = moment();
//     const payload = {
//       rice_quantity,
//       day_of_week: now.isoWeekday(),
//       month: now.month() + 1,
//       hour: now.hour(),
//       minute: now.minute(),
//       meal_type_encoded: 1,
//     };
  
//     console.log('Sending to prediction backend:', payload);
  
//     try {
//       const response = await axios.post(
//         'https://rice-cooker-back-end.onrender.com/prediction/predict',
//         payload,
//         { headers: { 'Content-Type': 'application/json' } }
//       );
  
//       console.log('Prediction response:', response.data);
  
//       if (response.data.prediction === 1) {
//         Alert.alert('Prediction', `Likely to cook. Shall I start cooking ${rice_quantity} cups?`);
//         navigation.navigate('CookingStatus');
//       } else {
//         Alert.alert('Prediction', 'Probably no cooking expected now.');
//       }
  
//     } catch (error) {
//       console.error('Prediction error:', error.response?.data || error.message || error);
//       Alert.alert('Error', `Failed: ${JSON.stringify(error.response?.data || error.message)}`);
//     }
//   };
  

//   return (
//     <SafeAreaView style={styles.container}>
//   <View style={styles.header}>
//     <Image source={require('../assets/robot-logo.png')} style={styles.logo} />
//     <View style={styles.searchContainer}>
//       <Image source={require('../assets/search.png')} style={styles.searchIcon} />
//       <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#FFFFFF" />
//     </View>
//     <TouchableOpacity style={styles.menuButton}>
//       <Image source={require('../assets/menu.png')} style={styles.menuIcon} />
//     </TouchableOpacity>
//   </View>

//   <View style={styles.content}>
//     <View style={styles.startCookingBanner}>
//       <Text style={styles.startCookingText}>Start Cooking</Text>
//     </View>

//     <View style={styles.quantitySection}>
//       <Text style={styles.sectionTitle}>Quantity Selection</Text>
//       <TouchableOpacity style={styles.quantitySelector} onPress={() => setSelectedQuantity(toggleQuantity())}>
//         <Text style={styles.quantityText}>{selectedQuantity}</Text>
//         <Image source={require('../assets/down-arrow.png')} style={styles.arrowIcon} />
//       </TouchableOpacity>
//     </View>

//     <View style={styles.mlSection}>
//       <Text style={styles.mlText}>
//         Machine learning model shows the ungrammed quantity of rice
//       </Text>
//     </View>

//     <View style={styles.estimatedSection}>
//       <Text style={styles.estimatedTime}>
//         Estimated cooking time: {getEstimatedTime(selectedQuantity)} {'\n'}
//         (Based on selected quantity)
//       </Text>
//     </View>

//     <View style={styles.buttonContainer}>
//       <TouchableOpacity style={styles.startButton} onPress={handleStartCooking}>
//         <Text style={styles.buttonText}>Start Cooking</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//         <Text style={[styles.buttonText, styles.historyButtonText]}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   </View>

//   <View style={styles.footer}>
//     <TouchableOpacity><Text style={styles.footerText}>Term of Service</Text></TouchableOpacity>
//     <TouchableOpacity><Text style={styles.footerText}>Privacy Policy</Text></TouchableOpacity>
//     <TouchableOpacity><Text style={styles.footerText}>Contact Us</Text></TouchableOpacity>
//   </View>
// </SafeAreaView>

//   );
// };

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import axios from 'axios';
// import moment from 'moment';

// const StartCooking = ({ navigation }) => {
//   const [selectedQuantity, setSelectedQuantity] = useState('1 Cup');

//   const getEstimatedTime = (quantity) => {
//     switch(quantity) {
//       case '1 Cup': return '30min';
//       case '2 Cup': return '45min';
//       case '5 Cup': return '55min';
//       default: return '30min';
//     }
//   };

//   const toggleQuantity = () => {
//     switch(selectedQuantity) {
//       case '1 Cup': return '2 Cup';
//       case '2 Cup': return '5 Cup';
//       case '5 Cup': return '1 Cup';
//       default: return '1 Cup';
//     }
//   };

//   const handleStartCooking = async () => {
//     let rice_quantity = 1;
//     if (selectedQuantity === '2 Cup') rice_quantity = 2;
//     if (selectedQuantity === '5 Cup') rice_quantity = 5;

//     const now = moment();
//     const payload = {
//       rice_quantity,
//       day_of_week: now.isoWeekday(),
//       month: now.month() + 1,
//       hour: now.hour(),
//       minute: now.minute(),
//       meal_type_encoded: 1,
//     };

//     console.log('Sending to prediction backend:', payload);

//     try {
//       const response = await axios.post(
//         'https://rice-cooker-back-end.onrender.com/prediction/predict',
//         payload,
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       console.log('Prediction response:', response.data);

//       let predictionMessage = response.data.next_time_prediction || "No future prediction available";

//       if (response.data.prediction === 1) {
//         Alert.alert('Prediction', `Likely to cook. Shall I start cooking ${rice_quantity} cups?`);
//       } else {
//         Alert.alert('Prediction', 'Probably no cooking expected now.');
//       }

//       // ✅ navigate to CookingStatus with prediction info
//       navigation.navigate('CookingStatus', {
//         predictionInfo: predictionMessage
//       });

//     } catch (error) {
//       console.error('Prediction error:', error.response?.data || error.message || error);
//       Alert.alert('Error', `Failed: ${JSON.stringify(error.response?.data || error.message)}`);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex:1 }}>
//       <View style={{ padding:20 }}>
//         <Text style={{ fontSize:24, fontWeight:'bold' }}>Start Cooking</Text>

//         <TouchableOpacity onPress={() => setSelectedQuantity(toggleQuantity())}>
//           <Text style={{ marginTop:20, fontSize:18 }}>
//             Selected Quantity: {selectedQuantity}
//           </Text>
//         </TouchableOpacity>

//         <Text style={{ marginTop:20 }}>
//           Estimated Time: {getEstimatedTime(selectedQuantity)}
//         </Text>

//         <TouchableOpacity 
//           onPress={handleStartCooking}
//           style={{ marginTop:40, backgroundColor:'#178ea3', padding:15, borderRadius:8 }}
//         >
//           <Text style={{ color:'#fff', textAlign:'center' }}>Start Cooking</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           onPress={() => navigation.goBack()}
//           style={{ marginTop:20, borderWidth:2, borderColor:'#178ea3', padding:15, borderRadius:8 }}
//         >
//           <Text style={{ color:'#178ea3', textAlign:'center' }}>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 6,
//     backgroundColor: '#178ea3',
//   },
//   logo: {
//     width: 70,
//     height: 70,
//   },
//   menuIcon: {
//     // width: 15,
//     // height: 15,
//     tintColor: '#FFFFFF',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   startCookingBanner: {
//     backgroundColor: '#178ea3',
//     padding: 15,
//     borderRadius: 25,
//     marginBottom: 30,
//     borderWidth: 0.9,
//     borderColor: '#096171',
//   },
//   startCookingText: {
//     color: '#FFFFFF',
//     fontSize: 20,
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   quantitySection: {
//     backgroundColor: '#F5F5F5',
//     padding: 20,
//     borderRadius: 15,
//     marginBottom: 15,
//     borderWidth: 0.5,
//     borderColor: '#096171',
//   },
//   sectionTitle: {
//     color: '#178ea3',
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   quantitySelector: {
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//     borderWidth: 0.5,
//     borderColor: '#096171',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#178ea3',
//     fontWeight: '500',
//   },
//   arrowIcon: {
//     width: 20,
//     height: 20,
//     tintColor: '#178ea3',
//   },
//   mlSection: {
//     backgroundColor: '#F5F5F5',
//     padding: 15,
//     borderRadius: 15,
//     marginBottom: 15,
//     borderWidth: 0.5,
//     borderColor: '#096171',
//   },
//   estimatedSection: {
//     backgroundColor: '#F5F5F5',
//     padding: 15,
//     borderRadius: 15,
//     marginBottom: 30,
//     borderWidth: 0.5,
//     borderColor: '#096171',
    
//   },
//   mlText: {
//     textAlign: 'center',
//     color: '#666666',
//     fontSize: 16,
//   },
//   estimatedTime: {
//     textAlign: 'center',
//     color: '#178ea3',
//     fontWeight: '500',
//     fontSize: 17,
//     lineHeight:25
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap: 15,
//   },
//   startButton: {
//     flex: 1,
//     backgroundColor: '#178ea3',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   cancelButton: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#178ea3',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   historyButtonText: {
//     color: '#178ea3',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 20,
//     backgroundColor: '#096171',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   footerText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 20,
//     marginHorizontal: 10,
//     paddingHorizontal: 10,
//     height: 40,
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//     tintColor: '#FFFFFF',
//     marginRight: 5,
//   },
//   searchInput: {
//     flex: 1,
//     color: '#FFFFFF',
//     fontSize: 16,
//     padding: 0,
//   },
//   historyButton: {
//     backgroundColor: '#178ea3',
//     borderWidth: 1,
//     borderColor: '#FFFFFF',
//   },
// });

// export default StartCooking;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';

const StartCooking = ({ navigation }) => {
  const [selectedQuantity, setSelectedQuantity] = useState('1 Cup');

  const getEstimatedTime = (quantity) => {
    switch(quantity) {
      case '1 Cup': return '30min';
      case '1.5 Cup': return '45min';
      case '2 Cup': return '55min';
      default: return '30min';
    }
  };

  const toggleQuantity = () => {
    switch(selectedQuantity) {
      case '1 Cup': return '1.5 Cup';
      case '1.5 Cup': return '2 Cup';
      case '2 Cup': return '1 Cup';
      default: return '1 Cup';
    }
  };

  const handleStartCooking = async () => {
    let rice_quantity = 1;
    if (selectedQuantity === '1.5 Cup') rice_quantity = 2;
    if (selectedQuantity === '2 Cup') rice_quantity = 5;

    const now = moment();
    const payload = {
      rice_quantity,
      day_of_week: now.isoWeekday(),  // 1 (Monday) to 7 (Sunday)
      month: now.month() + 1,         // 1-12
      meal_type_encoded: 1,           // you can change if you add meal types
    };

    console.log('📤 Sending to prediction backend:', payload);

    try {
      const response = await axios.post(
        'https://rice-cooker-back-end.onrender.com/prediction/predict',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('✅ Prediction response:', response.data);

      const predictionData = response.data.prediction || {};
      const nextTime = predictionData.next_time_prediction;
      const cooked = predictionData.prediction; // 1 or 0

      if (cooked === 1) {
        Alert.alert('Prediction', `Likely to cook. Shall I start cooking ${rice_quantity} cups?`);
      } else {
        Alert.alert('Prediction', 'Probably no cooking expected now.');
      }

      if (nextTime) {
        const notifyTime = moment(nextTime, "YYYY-MM-DD HH:mm:ss");
        if (notifyTime.isValid() && notifyTime.isAfter(moment())) {
          PushNotification.localNotificationSchedule({
            channelId: "cooking-channel",
            message: `It's time to cook again! 🍚 (${selectedQuantity})`,
            date: notifyTime.toDate(),
            allowWhileIdle: true,
          });
          console.log('⏰ Scheduled notification at:', notifyTime.format("hh:mm A"));
        } else {
          console.log("⚠️ Invalid or past time, not scheduling notification.");
        }
      }

      navigation.navigate('CookingStatus', {
        predictionInfo: nextTime || "No future prediction available",
      });

    } catch (error) {
      console.error('❌ Prediction error:', error.response?.data || error.message || error);
      Alert.alert('Error', `Failed: ${JSON.stringify(error.response?.data || error.message)}`);
    }
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

      <View style={styles.content}>
        <View style={styles.startCookingBanner}>
          <Text style={styles.startCookingText}>Start Cooking</Text>
        </View>

        <View style={styles.quantitySection}>
          <Text style={styles.sectionTitle}>Quantity Selection</Text>
          
          <TouchableOpacity 
            style={styles.quantitySelector}
            onPress={() => setSelectedQuantity(toggleQuantity())}
          >
            <Text style={styles.quantityText}>{selectedQuantity}</Text>
            <Image
              source={require('../assets/down-arrow.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.mlSection}>
          <Text style={styles.mlText}>
            Machine learning model shows the ungrammed quantity of rice
          </Text>
        </View> */}

        <View style={styles.estimatedSection}>
          <Text style={styles.estimatedTime}>
            Estimated cooking time : {getEstimatedTime(selectedQuantity)}{'\n'}
            ( Based on the selected Quantity )
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={handleStartCooking}
          >
            <Text style={styles.buttonText}>Start Cooking</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.buttonText, styles.historyButtonText]}>Cancel</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity 
  style={[styles.startButton, { marginTop: 10, backgroundColor: '#4CAF50' }]}
  onPress={() => {
    PushNotification.localNotification({
      channelId: 'cooking-channel',
      title: 'Test Notification',
      message: 'This is a test notification to verify it works! 🎉',
      playSound: true,
      soundName: 'default',
      importance: 'high',
      vibrate: true,
    });
  }}
>
  <Text style={styles.buttonText}>Send Test Notification</Text>
</TouchableOpacity> */}

        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Term of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    backgroundColor: '#178ea3',
  },
  logo: { width: 70, height: 70 },
  menuIcon: {
    tintColor: '#FFFFFF',
  },
  content: { flex: 1, padding: 20 },
  startCookingBanner: {
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 25,
    marginBottom: 30,
    borderWidth: 0.9,
    borderColor: '#096171',
  },
  startCookingText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  quantitySection: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: '#096171',
  },
  sectionTitle: {
    color: '#178ea3',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  quantitySelector: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#096171',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quantityText: {
    fontSize: 16,
    color: '#178ea3',
    fontWeight: '500',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#178ea3',
  },
  mlSection: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: '#096171',
  },
  estimatedSection: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 30,
    borderWidth: 0.5,
    borderColor: '#096171',
  },
  mlText: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 16,
  },
  estimatedTime: {
    textAlign: 'center',
    color: '#178ea3',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  startButton: {
    flex: 1,
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#178ea3',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  historyButtonText: {
    color: '#178ea3',
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
});

export default StartCooking;
