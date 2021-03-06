const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  plugins: ['typescript'],
  modify: (config, { target }) => {
    if (target === 'web') {
      return {
        ...config,
        plugins: [
          ...config.plugins,
          new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
          }),
        ],
      };
    }

    return config;
  },
};
