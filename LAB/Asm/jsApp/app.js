const app = angular.module('asm', ['ngRoute']);


// app.directive('quizfpoly',function(){
//     return{
//         restrict : 'AE',
//         scope: {},
//         templateUrl:'pages/quiz.html',
//         link : function(scope,elem,attrs){
//     // $scope.question ='s';
//             scope.start = function(){
//                 scope.inProgess = true;
//             };
//             scope.reset = function(){
//                 scope.inProgess = false;
//             };
//             scope.getQuestion = function(){
//                 scope.question = 'cau hoi 1dasdjaaskdasdsa';
//                 console.log(question);
//             };
//             scope.reset();
//         }
//     }
// })
// function listQ($scope) {
//     $scope.index = 0;
//     $scope.nextQA = function() {
//         $scope.index ++;
//     }
//     $scope.prevQA = function() {
//         $scope.index --;
//     }
// }

// function loginCtrl($scope, $http) {
//     $scope.students = [];
//     $scope.isLoading = false;

//     const url = 'https://620ddfb220ac3a4eedcc0ab5.mockapi.io/students';

//     $scope.isLoading = true;

//     $http.get(url).then(function (response) {
//         $scope.students = response.data;
//         $scope.isLoading = false;
//         console.log(response);
//     }).catch(function (error) {
//         console.log(error);
//         $scope.isLoading = false;
//     });


//     $scope.loginApp = function (){
//         for(var i=0;i < $scope.students.length;i++){
//             if($scope.userName == $scope.students[i].username && $scope.pass == $scope.students[i].password){
//                 $scope.isLoading = true;
//                 window.location ='http://127.0.0.1:5500/Asm/index.html' ;
//             }
//             $scope.isLoading = false;
//         }
//     };
// }