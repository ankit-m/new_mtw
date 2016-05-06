console.log('eventPage running');

//On first installation, load default Data and initialize context menu
chrome.runtime.onInstalled.addListener(function() {
  setupDefaultData();
  chrome.contextMenus.create({
    'title': 'MindTheWord',
    'id': 'parent',
    'contexts': ['selection', 'page']
  });
  chrome.contextMenus.create({
    'title': 'Blacklist this website',
    'parentId': 'parent',
    'id': 'blacklistWebsite'
  });
  chrome.contextMenus.create({
    'title': 'Blacklist selected word',
    'parentId': 'parent',
    'contexts': ['selection'],
    'id': 'blacklistWord'
  });
  chrome.contextMenus.create({
    'title': 'Save word to dictionary',
    'parentId': 'parent',
    'contexts': ['selection'],
    'id': 'saveWord'
  });
})

//sets up default data in localStorage
function setupDefaultData() {
  var defaultStorage = {
    initialized: true,
    activation: true,
    blacklist: '(stackoverflow.com|github.com|code.google.com|developer.*.com|duolingo.com)',
    savedPatterns: JSON.stringify([
      [
        ['en', 'English'],
        ['it', 'Italian'], '25', true, 'Yandex'
      ],
      [
        ['en', 'English'],
        ['de', 'German'], '15', false, 'Yandex'
      ]
    ]),
    sourceLanguage: 'en',
    targetLanguage: 'it',
    translatedWordStyle: 'font-style: inherit;\ncolor: rgba(255,153,0,1);\nbackground-color: rgba(256, 100, 50, 0);',
    userBlacklistedWords: '(this|that)',
    translationProbability: 15,
    minimumSourceWordLength: 3,
    ngramMin: 1,
    ngramMax: 1,
    userDefinedTranslations: '{"the":"the", "a":"a"}',
    translatorService: 'Yandex',
    yandexTranslatorApiKey: ''
  };
  chrome.storage.set(defaultStorage);
}

console.log('eventPage ended');
