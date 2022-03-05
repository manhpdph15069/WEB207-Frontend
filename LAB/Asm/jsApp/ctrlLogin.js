 function loginCtrl($scope, $http,$rootScope,$location) {
    $scope.goto = function(path){
        $location.path(path);
    }
        myStorage = window.localStorage;
        $scope.students = [];
        $scope.isLoading = false;
    
        const url = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/students';
    
        $scope.isLoading = true;
    
        $http.get(url).then(function (response) {
            $scope.students = response.data;
            $scope.isLoading = false;
            // console.log(response);
        }).catch(function (error) {
            console.log(error);
            $scope.isLoading = false;
        });
        
    
        $scope.loginApp = function (){
            var tb = false;
            // localStorage.setItem('pass',)
            for(var i=0;i < $scope.students.length;i++){
                if($scope.userName == $scope.students[i].username && $scope.pass == $scope.students[i].password){
                    if($scope.students[i].isAdmin == 1){
                        alert('Đăng nhập với quyền quản trị thành công');
                        localStorage["user"] = JSON.stringify($scope.students[i]);
                        var cars = JSON.parse(localStorage["user"]);
                        $rootScope.userisAdmin = cars;
                        // window.location ='http://127.0.0.1:5500/admin.html#!/pages/account';
                        // $scope.goto('admin.html#!/pages/account');
                        $scope.goto('#!/');
                    }else{
                        $scope.isLoading = true;
                        alert('Đăng nhập thành công');
                        // tb=0;
                        // localStorage.setItem('name',$scope.students[i].username);
                        // localStorage.setItem('pass',$scope.students[i].password);
                        localStorage["user"] = JSON.stringify($scope.students[i]);
                        var cars = JSON.parse(localStorage["user"]);
                        $rootScope.userisAdmin = cars;
                        // console.log(cars);
                        // window.location ='http://127.0.0.1:5500/Asm/index.html';
                        $scope.goto('#!/');
                        
                    }                                                  
                    return;
                }else{
                    tb=true;
                    $scope.isLoading = false;
                    localStorage.removeItem('name');
                    localStorage.removeItem('pass');
                   
                }
            }
            if(tb==true){
                $scope.userName = "";
                $scope.pass = "";
                alert('Đăng nhập thất bại');
            }
        };
    }