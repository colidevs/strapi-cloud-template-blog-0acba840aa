const { mergeConfig } = require('vite');

module.exports = (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: [
        ...(config.server?.allowedHosts || []),
        'coli.internal',
        'jad-marmoleria.colidevs.com'
      ],
    },
  });
}; 