

    angular.module('myApp', [])
  .controller('CheckboxController', function($scope, $http) {
    $scope.checkboxGroups = [];

    // Fetch data from the API
    $http.get('your_api_url_here')
      .then(function(response) {
        $scope.checkboxGroups = response.data;
      })
      .catch(function(error) {
        console.error('Error fetching data from API:', error);
      });

    $scope.atLeastOneSelected = function(groupCheckboxes) {
      return groupCheckboxes.some(function(checkbox) {
        return checkbox.selected;
      });
    };

    $scope.getCheckboxName = function(groupIndex, checkboxIndex) {
      return 'checkbox_' + groupIndex + '_' + checkboxIndex;
    };

    $scope.submitForm = function() {
      var invalidGroups = [];

      $scope.checkboxGroups.forEach(function(group, groupIndex) {
        if (!$scope.atLeastOneSelected([group])) {
          invalidGroups.push(group.remark);
        }
      });

      if (invalidGroups.length === 0) {
        console.log("All checkboxes are properly selected!");
        // Perform any other validation or actions here
      } else {
        console.log("Checkboxes are missing in the following groups:", invalidGroups);
        // Show an error message or take other actions for validation failure
      }
    };
  });