function ctrlDMK ($scope,$http) {
    $scope.students = [];
    $scope.isLoading = false;
    $scope.isSuccess = true;
    $scope.message = "";
    $scope.user = localStorage.getItem('name');

    const url = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/students';

    $scope.isLoading = true;
    $http.get(url).then(function(response){
        $scope.students = response.data;
        $scope.isLoading= false;
    }).catch(function (error){
        console.log(error);
        $scope.isLoading= false;
    });

    $scope.onSubmitForm = function (event) {
        event.preventDefault();     
     }
     $scope.update = function(){
         var tb= 0;
         for(var i =0; i < $scope.students.length; i++){
             if($scope.students[i].username == $scope.user && $scope.students[i].password == $scope.pass1){
                 const updateMKAPI = url +'/'+ $scope.students[i].id;
                 if($scope.pass2 == $scope.pass3){
                    $scope.students[i].password.id=null;
                     console.log($scope.pass2);
                     $scope.students[i].password = $scope.pass2;
                     $http.put(updateMKAPI,$scope.students[i]).then(function (response) {
                        $scope.students[i].password = $scope.pass2;
                        
                         $scope.message = "Đổi mật khẩu thành công";
                         $scope.isSuccess = true;
                         alert($scope.message);
                         console.log(response);
                         window.location = 'http://127.0.0.1:5500/Asm/index.html';
                        });
                       return;
                }else{
                    alert('Xác nhận mật khẩu không chính xác !!!');
                }
             }else{
                 tb=1;
             }
         }
         if(tb!=0){
            alert('Mật khẩu cũ không đúng !!!')
         }

     }

}