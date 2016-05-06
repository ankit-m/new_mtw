console.log('mtw content script running');

var blacklist = [],
  srcLang = '',
  targetLang = '';

window.addEventListener('load', function(){
  var app = angular.module('MTWTranslator', []);
  var html = document.querySelector('html');
  html.setAttribute('ng-app', '');
  html.setAttribute('ng-csp', '');
  angular.bootstrap(html, ['MTWTranslator'], []);
});
