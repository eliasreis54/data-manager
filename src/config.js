const config = {
  flow_broker_url: process.env.FLOW_BROKER_URL || 'http://flowbroker:80', // export FLOW_BROKER_URL=http://172.29.0.3:80
  device_manager_url: process.env.DEVICE_MANAGER_URL || 'http://device-manager:5000', // export DEVICE_MANAGER_URL=http://172.28.0.17:5000
};

export default config;
