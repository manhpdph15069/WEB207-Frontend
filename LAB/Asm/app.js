const app = angular.module('asm', ['ngRoute']);
        app.config(function($routeProvider){
            $routeProvider.when('/gioi-thieu',{
                templateUrl: "GioiThieu.html"
            }).when('/',{
                templateUrl: "Trangchu.html"
            }).when('/hoi-dap',{
                templateUrl: "Hoidap.html"
            }).when('/gop-y',{
                templateUrl: "gopy.html"
            }).when('/lien-he',{
                templateUrl: "LienHe.html"
            }).when('/thi-trac-nhiem',{
                templateUrl: "ThiTracNhiem.html"
            }).otherwise(
                {
                    template: "Lỗi ròi"
                }
            )
        });
// -------------------------------------------------------------------------

function listQ($scope) {
    $scope.index = 0;
    $scope.listQA = [
        {
            khoaHoc: "Khóa học tự do",
            cauHoi: "Câu 1: Câu hỏi gì cũng được suy nghĩ mệt người :((",
            dapAnA: "Đúng rồi",
            dapAnB: "Đúng luôn",
            dapAnC: "Đúng đúng vậy",
            dapAnD: "Thôi suy nghĩ cũng được"
        },
        {
            khoaHoc: "Khóa học tự do",
            cauHoi: "Câu 2: Câu hỏi gì cũng được suy nghĩ mệt người :((",
            dapAnA: "Đúng rồi",
            dapAnB: "Đúng luôn",
            dapAnC: "Đúng đúng vậy",
            dapAnD: "Thôi suy nghĩ cũng được"
        },
        {
            khoaHoc: "Khóa học tự do",
            cauHoi: "Câu 3: Câu hỏi gì cũng được suy nghĩ mệt người :((",
            dapAnA: "Đúng rồi",
            dapAnB: "Đúng luôn",
            dapAnC: "Đúng đúng vậy",
            dapAnD: "Thôi suy nghĩ cũng được"
        },
        {
            khoaHoc: "Khóa học tự do",
            cauHoi: "Câu 4: Câu hỏi gì cũng được suy nghĩ mệt người :((",
            dapAnA: "Đúng rồi",
            dapAnB: "Đúng luôn",
            dapAnC: "Đúng đúng vậy",
            dapAnD: "Thôi suy nghĩ cũng được"
        }
    ]
    $scope.nextQA = function() {
        $scope.index ++;
    }
    $scope.prevQA = function() {
        $scope.index --;
    }
}
app.controller("AppController", listQ);