mtw.controller('PopupCtrl', function($scope){

  chrome.tabs.executeScript(null, {
    code: 'var inst = new __mindtheword();'
  });

  $scope.toggleWords = function() {
    chrome.tabs.executeScript(null, {
      code: 'inst.toggleAllElements();'
    }, function() {
      $scope.updateData();
    });
  };

  $scope.toggleEnabled = function() {
    chrome.storage.local.get('activation', function(data) {
      chrome.storage.local.set({
        activation: !data.activation
      }, function() {
        chrome.tabs.executeScript(null, {
          code: 'window.location.reload();'
        });
        window.close();
      });
    });
  };

  $scope.options = function() {
    chrome.tabs.create({
      url: chrome.extension.getURL('options.html')
    });
    window.close();
  };

  $scope.updateData = function() {
    chrome.tabs.executeScript(null, {
      code: 'inst.isTranslated();'
    }, function(translated) {
      $scope.$apply(function() {
        $scope.toggledOn = translated[0];
      });
    });
    chrome.storage.local.get(null, function(data) {
      $scope.$apply(function() {
        $scope.data = data;
      });
    });
  };
  $scope.updateData();

});
