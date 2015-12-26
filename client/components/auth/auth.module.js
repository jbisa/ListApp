'use strict';

angular.module('listAppApp.auth', [
  'listAppApp.constants',
  'listAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
