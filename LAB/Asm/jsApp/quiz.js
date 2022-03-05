function listQuiz($scope, $rootScope, $routeParams, $location, $interval, $http) {
    $scope.indexQA = 0;
    $scope.dapan = 0;
    $scope.hidenext = true;
    $scope.tb = "";
    $scope.counter = 0;
    $scope.inProgess = false;
    $scope.history = {
        idStudent: "",
        idKhoaHoc: "",
        mark: 0
    };
 
    $scope.lichsu = [];
    $scope.lichsu2 = [];



    console.log($scope.history.idKhoaHoc);
    var name = localStorage.getItem('name');
    $rootScope.listQKH = [];
    $scope.goto = function (path) {
        $location.path(path);
    }
    const urlQ = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/khoaHoc/' + $routeParams.id + '/quizs';
    const hapi = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/history';
    $http.get(urlQ) // Gửi 1 request GET tới API
        .then(function (response) { // Phản hồi của API
            $rootScope.listQKH = shuffle(response.data);
            $scope.isLoading = false;
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
            $scope.isLoading = false;
        });
    $http.get(hapi) // Gửi 1 request GET tới API
        .then(function (response) { // Phản hồi của API
            $scope.lichsu = response.data;
            $scope.isLoading = false;
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
            $scope.isLoading = false;
        });



    $scope.start = function () {

        if ($rootScope.userisAdmin != null) {
            if($rootScope.listQKH ==0){
                alert('Bài làm chưa mở vui lòng quay lại sau');
                $location.path('#!/');
            }else{
                $scope.inProgess = true;
                $scope.countTime();
            }
            // $rootScope.index = index;

        } else {
            alert('Vui lòng đăng nhập');
            // window.location=  'http://127.0.0.1:5500/Asm/index.html';
            $location.path('#!/');
        }
        // console.log(index +1);
    };
    $scope.check = function () {
        $scope.hidenext = false;
        if ($scope.dapan == $rootScope.listQKH[$scope.indexQA].check) {
            console.log($scope.dapan);
            $scope.tb = "Đúng";
            $scope.history.mark++;
            // console.log($scope.mark);
        } else {
            $scope.tb = "Sai";
            $scope.history.mark = $scope.history.mark;
        }
    }
    $scope.endQuiz = function () {
        $scope.history.idStudent = name;
        $scope.history.idKhoaHoc = $routeParams.name;
        if ($scope.history != null) {
            console.log($scope.history);
            $http.post(hapi, $scope.history)
                .then(function (response) {
                    // $scope.message = "Đăng ký thành công";
                    $location.path('#!/');
                });
        }
        // alert('Điểm của bạn là ' + $scope.mark);

        // window.location = 'http://127.0.0.1:5500/index.html';
    }
    console.log($rootScope.listQKH);
    // console.log($rootScope.quizzs);

    $scope.next = function () {
        $scope.hidenext = true;
        $scope.dapan = {};
        $scope.tb = "";
        $scope.indexQA++;
        if ($scope.indexQA > 9) {
            $scope.indexQA = 9;
            $scope.endQuiz();
        }
    }
    $scope.prev = function () {
        $scope.dapan = {};
        $scope.tb = "";
        $scope.indexQA--;
        if ($scope.indexQA < 0) {
            $scope.indexQA = 0;
        }
    }

    function shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    }

    $scope.time = 900;
    $scope.min = $scope.time / 60;
    $scope.sec = 60;
    $scope.secTwo = 0;
    $scope.secOne = 0;


    $scope.countTime = function () {
        $interval(function () {
            $scope.time--;
            $scope.sec--;
            if ($scope.sec == -1) {
                $scope.sec = 59;
            }
            $scope.min = Math.floor($scope.time / 60);
            // console.log($scope.min);
            $scope.secTwo = Math.floor($scope.sec / 10);
            // console.log($scope.secTwo);
            $scope.secOne = $scope.sec - ($scope.secTwo * 10);


        }, 500)
    }


}