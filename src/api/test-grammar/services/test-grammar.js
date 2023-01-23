'use strict';

/**
 * test-grammar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-grammar.test-grammar');
