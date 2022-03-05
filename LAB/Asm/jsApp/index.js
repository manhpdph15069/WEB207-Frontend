function localStoragee($scope,$location,$rootScope) {
    $rootScope.nameq = localStorage.getItem('name');
    // var user = JSON.parse(localStorage["user"]);

    $scope.logout = function (){
        localStorage.removeItem('user');
        // localStorage.removeItem('pass');
        // window.location = 'http://127.0.0.1:5500/Asm/index.html';
        $location.path('#!/');
    }
}