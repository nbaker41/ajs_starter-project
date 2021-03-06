(function () {

     let keyboard = angular.module("keyboard", []);

     keyboard.controller(
          'keyboardCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
               this.app = $scope.$parent;
               let keyboard = this;

          // populate the keyboard template with character data from external json file.
               $http({
                    method: 'GET',
                    url: 'components/keyboard/keyboard.json'
               }).then(function (response) {
                    keyboard.layout = response.data;
                    console.log(keyboard.layout);
               }, function (error) {
                    console.log("error loading data");
               });

          // this is what happens when you press a button on the keyboard.
               keyboard.keyPressed = function (value, action) {
                    keyboard.someInput = value;
                    $rootScope.$broadcast('keyPressed', keyboard.someInput, action);
               // keyboard.app.list.searchObject = 
                    console.log($rootScope.keyboardSearchObject);
                    keyboard.app.list.searchObject = $rootScope.keyboardSearchObject;
                    console.log(keyboard.app.list);
               }

          }]);


     keyboard.component("keyboard", {
          controller: "keyboardCtrl",
          controllerAs: "keyboard",
          templateUrl: "components/keyboard/keyboard.html"
     });


     keyboard.directive('myText', ['$rootScope', function ($rootScope) {
          return {
               link: function (scope, element, attrs) {
                    $rootScope.$on('keyPressed', function (e, val, action) {
                         var domElement = element[0];
                         if (document.selection) {
                              domElement.focus();
                              var sel = document.selection.createRange();
                              sel.text = val;
                              domElement.focus();
                         } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                              var startPos = domElement.selectionStart;
                              var endPos = domElement.selectionEnd;
                              var scrollTop = domElement.scrollTop;

                              if (action === 'del') {
                                   if (startPos === endPos) {
                                        domElement.value = domElement.value.substring(0, startPos - 1) + domElement.value.substring(endPos, domElement.value.length);
                                        domElement.focus();
                                        domElement.selectionStart = startPos - 1;
                                        domElement.selectionEnd = startPos - 1;
                                   } else {
                                        domElement.value = domElement.value.substring(0, startPos) + domElement.value.substring(endPos, domElement.value.length);
                                        domElement.focus();
                                        domElement.selectionStart = startPos;
                                        domElement.selectionEnd = startPos;
                                   }

                                   domElement.scrollTop = scrollTop;
                              } else {
                                   domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);
                                   domElement.focus();
                                   domElement.selectionStart = startPos + val.length;
                                   domElement.selectionEnd = startPos + val.length;
                                   domElement.scrollTop = scrollTop;
                              }
                         } else {
                              domElement.value += val;
                              domElement.focus();
                         }
                         // console.log(domElement.value);
                         $rootScope.keyboardSearchObject = domElement.value;
                    });
               }
          }
     }]);

})();