function ctrlCauhoi($scope,$http,$routeParams){
    const api = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/khoaHoc/' +$routeParams.id+'/quizs';
    $scope.quizs = [];
    $scope.index = -1;
    $scope.begin = 0;

    $http.get(api).then(function(response){
        $scope.quizs = response.data;
    }).catch(function(error){
        console.log(error);
    });

    $scope.onSelect = function (index) {
        $scope.index = index;
        console.log($scope.index);
        $scope.ch = angular.copy($scope.quizs[index]);
    }
    
    $scope.onClear = function () {
        $scope.ch = {};
        $scope.index = -1;
    }

    $scope.onInsert = function (e) {
        $scope.ch.id = null;

        $http.post(api, $scope.ch)
            .then(function (response) {
                console.log(response.data);
                alert("Thêm thành công!");
            });
            e.preventDefault();
    }

    $scope.onUpdate = function () {
        const apiUpdate = api + "/" + $scope.ch.id;

        $http.put(apiUpdate, $scope.ch)
            .then(function (response) {
                console.log(response.data);
                alert("Sửa thành công!");
            });
    }

    $scope.onDelete = function () {
        const apiDelete = api + "/" + $scope.ch.id;
        $http.delete(apiDelete, $scope.ch)
            .then(function (response) {
                console.log(response)
                alert("Xóa thành công!");
            });
    }

    $scope.first = function () {
        $scope.begin = 0;
    }

    $scope.prev = function () {
        console.log($scope.begin);
        if ($scope.begin > 0) {
            $scope.begin -= 10;
        }
    }

    $scope.next = function () {
        if ($scope.begin < (($scope.pageCount - 1) * 10)) {
            $scope.begin += 10;
        }
        console.log($scope.beign);
    }

    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 10;

    }
}