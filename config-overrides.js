const { alias } = require('react-app-rewire-alias');

const baseUrl = (dir = '') => `src/${dir}`;

module.exports = function override(config) {
  alias({
    '@root': baseUrl(),
    '@interfaces': baseUrl('@interfaces'),
    '@layouts': baseUrl('layouts/'),
    '@components': baseUrl('components'),
    '@pages': baseUrl('pages'),
    '@utils': baseUrl('utils'),
    '@styles': baseUrl('styles'),
  })(config);

  return config;
};
