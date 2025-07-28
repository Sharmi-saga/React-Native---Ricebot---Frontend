// mqttService.js
import { connect } from 'mqtt'; // ✅ This is the correct import
import { Buffer } from 'buffer';
import { EventEmitter } from 'events';

// Polyfill setup
global.Buffer = global.Buffer || Buffer;
global.process = require('process');

const statusEmitter = new EventEmitter();
let client = null;
let mqttStatus = 'Disconnected';

const connectMQTT = () => {
  if (client && client.connected) return client;

  const options = {
    clientId: 'rn-client-' + Math.random().toString(16).substr(2, 8),
    username: 'sharmi',
    password: 'Sh123456',
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 2000,
  };

  mqttStatus = 'Connecting';
  statusEmitter.emit('status', mqttStatus);

  const brokerUrl = 'wss://374ed151fb5c42a9997898a577cb49f5.s1.eu.hivemq.cloud:8884/mqtt';
  client = connect(brokerUrl, options); // ✅ Use correct `connect` from import

  client.on('connect', () => {
    mqttStatus = 'Connected';
    statusEmitter.emit('status', mqttStatus);
    console.log('✅ Connected to HiveMQ');
  });

  client.on('reconnect', () => {
    mqttStatus = 'Reconnecting';
    statusEmitter.emit('status', mqttStatus);
  });

  client.on('close', () => {
    mqttStatus = 'Disconnected';
    statusEmitter.emit('status', mqttStatus);
  });

  client.on('error', (err) => {
    mqttStatus = 'Error';
    statusEmitter.emit('status', mqttStatus);
    console.log('❌ MQTT Error:', err);
    client.end();
  });

  return client;
};

const getStatus = () => mqttStatus;

const onStatusChange = (callback) => {
  statusEmitter.on('status', callback);
};

const offStatusChange = (callback) => {
  statusEmitter.off('status', callback);
};

export default {
  connectMQTT,
  getStatus,
  onStatusChange,
  offStatusChange,
};
