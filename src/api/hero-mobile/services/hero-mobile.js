'use strict';

/**
 * hero-mobile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-mobile.hero-mobile');
