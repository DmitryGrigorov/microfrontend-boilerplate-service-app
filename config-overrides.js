const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

const setEntryPointName = () => {
  switch (process.env.REACT_APP_MODE) {
    case 'local': {
      return 'index.tsx'
    }
    case 'prod':
    case 'dev': {
      return 'microFrontend.tsx'
    }
  }
};

const entryPointName = setEntryPointName();

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@app': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@models': path.resolve(__dirname, './src/models/'),
      '@service': path.resolve(__dirname, './src/service/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      'styled-components': path.resolve('./node_modules/styled-components'),
    }),
    (config, env) => {
      config.entry = {
        main: [
          '@babel/polyfill',
          path.resolve('.', 'src', entryPointName),
        ],
      };
      config.output = {
        ...config.output,
        library: 'mfServiceName',
        libraryTarget: 'window',
      };
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: false,
        },
      };
      return config;
    },
  ),
};
