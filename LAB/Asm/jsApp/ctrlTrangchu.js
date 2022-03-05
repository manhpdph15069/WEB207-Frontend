// app.component('trangChu',{
//     templateUrl: "Trangchu.html",
//     controller: quizs
// });
function quizs($scope,$rootScope,$routeParams, $http) {
    $rootScope.quizzs = [];
    $scope.isLoading = false;
    $scope.isSuccess = true;
    $scope.message = "";
    $scope.index =0;
    // $rootScope.listQKH = [];
    const url = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/khoaHoc';
    // const urlQ = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/khoaHoc/'+$routeParams.id+'/quizs';

    $scope.isLoading = true;
    $http.get(url) // Gửi 1 request GET tới API
        .then(function (response) { // Phản hồi của API
            $rootScope.quizzs = response.data;
            $scope.isLoading = false;
            // console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
            $scope.isLoading = false;
        });
    // $http.get(urlQ) // Gửi 1 request GET tới API
    //     .then(function (response) { // Phản hồi của API
    //         $rootScope.listQKH = response.data;
    //         $scope.isLoading = false;
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         $scope.isLoading = false;
    //     });
    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizzs.length/4);
    console.log($scope.pageCount);
    $scope.fist = function () {
        $scope.begin = 0;
        console.log($scope.pageCount);
    }
    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 4;
            console.log($scope.pageCount);
        }
    }
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 4) {
            $scope.begin += 4;
            console.log($scope.pageCount);
        }
    }
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 4;
        console.log($scope.pageCount);
    }
    $scope.listQA = function(index){
        // var name = localStorage.getItem('name');
        // if(name !=null){
        //     $rootScope.index = index;

        // }else{
        //     alert('Vui lòng đăng nhập');
        //     // window.location=  'http://127.0.0.1:5500/Asm/index.html';
        //     $rootScope.goto('#!/');
        // }
        // // console.log(index +1);
       
    }
};
