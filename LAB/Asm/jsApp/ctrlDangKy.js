function ctrlDangky($scope,$http){
    $scope.students = [];
    $scope.isLoading = false;
   $scope.isSuccess = true;
   $scope.message = "";

   const url = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/students';

//    $scope.isLoading = true;
//    $http.get(url) // Gửi 1 request GET tới API
//        .then(function (response) { // Phản hồi của API
//            $scope.students = response.data;
//            $scope.isLoading = false;
//        })
//        .catch(function (error) {
//            console.log(error);
//            $scope.isLoading = false;
//        });

$scope.onClear = function () {
    $scope.sv = { gender: "1"};
    $scope.isSuccess = true;
  }
   $scope.onSubmitForm = function (event) {
       event.preventDefault();     
    }
    // Gửi 1 request POST tới API
   $scope.insert = function (){
       if($scope.sv != null){
            if($scope.sv.password == $scope.pass2){

                $http.post(url, $scope.sv)
                .then(function (response) {
                    $scope.message = "Đăng ký thành công";
                    // window.location = 'http://127.0.0.1:5500/Asm/pages/DangNhap.html';
                    $rootScope.goto('/pages/login');
                    // $scope.onClear();
                });
            }else{
                alert('Xác nhận mật khẩu không chính xác !!!');
            }
        }else{
            alert('Không được để trống form');
        }
   }
}