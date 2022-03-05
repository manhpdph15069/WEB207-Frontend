function accountController($scope, $http,$location) {
  $scope.goto = function(path){
    $location.path(path);}
    const api = "https://620ddfb220ac3a4eedcc0ab5.mockapi.io/students";
    $scope.students = [];
    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.students.length / 10);
    //Lấy dữ liệu
    $http.get(api)
      .then(function (response) {
        $scope.students = response.data;
        // console.log($scope.students);
      });
    $scope.select = function (index) {
      apiUpdate = api + "/" + $scope.students[index].id;
      $scope.index = index;
      $scope.sv = angular.copy($scope.students[index]);
    }
  
    $scope.index = -1;
    $scope.sv = { gender: "1", isAdmin: "1" };
    $scope.isSuccess = true;
    $scope.message = "";
  
    $scope.onInsert = function () {
      if ($scope.sv.pass != $scope.sv.pass1) {
        $scope.isSuccess = false;
        $scope.message = "Mật khẩu không khớp!";
        return;
      }
      $scope.sv.id = null;
      $http.post(api, $scope.sv)
        .then(function (response) {
          $scope.goto('/pages/account');
            // window.location = 'http://127.0.0.1:5500/Asm/admin.html#!/pages/account';
          console.log(response);
        });
      // $scope.message = "Thêm thành công!"
    }
  
    $scope.onUpdate = function () {
      $scope.sv.id = null;
      $http.put(apiUpdate, $scope.sv)
        .then(function (response) {
          console.log(response.data);
          // window.location = 'http://127.0.0.1:5500/Asm/admin.html#!/pages/account';
          alert ("Sửa thành công!");
          $scope.goto('/pages/account');
        })
      $scope.onClear();
    }
  
    $scope.onClear = function () {
      $scope.index = -1;
      $scope.sv = { gender: "1", isAdmin: "1" };
      $scope.isSuccess = true;
      $scope.message = "";
    }
  
    $scope.onDelete = function () {
      console.log(apiUpdate);
      $http.delete(apiUpdate, $scope.sv)
        .then(function (response) {
          console.log(response);
          
          alert("Xóa thành công!")
          $scope.goto('/pages/account');
          // window.location = 'http://127.0.0.1:5500/Asm/admin.html#!/pages/account';
        });
    }
    $scope.logout = function (){
        localStorage.removeItem('name');
        localStorage.removeItem('pass');
        window.location = 'http://127.0.0.1:5500/Asm/index.html';
    }
 
    $scope.onInsert = function (e) {
      if ($scope.sv.pass != $scope.sv.pass1) {
        $scope.isSuccess = false;
        $scope.message = "Mật khẩu không khớp!";
        return;
      }
      $scope.sv.id = null;
      $http.post(api, $scope.sv)
      .then(function (response) {
        // window.location = 'http://127.0.0.1:5500/Asm/admin.html#!/pages/account';
        $scope.goto('/pages/account');
        console.log(response);
      });
      $scope.message = "Thêm thành công!";
      e.preventDefault();
    }
  
    // chuyển trang
    $scope.first = function () {
      $scope.begin = 0;
    }
  
    $scope.prev = function () {
      if ($scope.begin > 0) {
        $scope.begin -= 10;
      }
    }
  
    $scope.next = function () {
      if ($scope.begin < ($scope.pageCount - 1) * 10) {
        $scope.begin += 10;
      }
    }
  
    $scope.last = function () {
      $scope.begin = ($scope.pageCount - 1) * 10;
    }
  }