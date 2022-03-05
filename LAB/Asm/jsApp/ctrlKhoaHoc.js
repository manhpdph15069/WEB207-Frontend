function ctrlKhoaHoc($scope, $http) {
    const api = "https://620ddfb220ac3a4eedcc0ab5.mockapi.io/khoaHoc";
    $scope.index = -1;
    $scope.khoaHocs = [];
    $scope.begin = 0;
 
 
 
    $http.get(api)
    .then(function (response) {
        $scope.khoaHocs = response.data;
        console.log($scope.khoaHocs);
    });
    $scope.pageCount = Math.ceil($scope.khoaHocs.length / 10);
    
    $scope.onSelect = function (index) {
        $scope.index = index;
        $scope.kh = angular.copy($scope.khoaHocs[index]);
    }





    $scope.onClear = function () {
        $scope.kh = {};
        $scope.index = -1;
    }
 
    $scope.onInsert = function (e) {

        $scope.kh.id = null;
        var logo1 = document.getElementById('logo').value;
        var logo2 = logo1.substring(12,20);
        $scope.kh.logo = logo2;
        

        $http.post(api, $scope.kh)
            .then(function (response) {
                console.log(response.data);
                alert("Thêm thành công!");
            });
            e.preventDefault();
    }

    $scope.onUpdate = function () {
        const apiUpdate = api + "/" + $scope.kh.id;
        // $scope.quiz.id = null;
        var logo1 = document.getElementById('logo').value;
        var logo2 = logo1.substring(12,20);
        $scope.kh.logo = logo2;
        
        $http.put(apiUpdate, $scope.kh)
            .then(function (response) {
                console.log(response.data);
                alert("Sửa thành công!");
            });
    }

    $scope.onDelete = function () {
        const apiDelete = api + "/" + $scope.kh.id;
        $http.delete(apiDelete, $scope.kh)
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