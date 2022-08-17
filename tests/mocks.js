const { config } = require('@vue/test-utils');

// Mock textmanager globally
config.mocks.$t = key => key;
