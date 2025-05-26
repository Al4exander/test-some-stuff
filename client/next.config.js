const { i18n } = require('./next-i18next.config');

module.exports = {
    future: {
        webpack5: true,
    },
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    i18n,
    experimental: {
        cpus:          1,
        workerThreads: false,
    },
};
