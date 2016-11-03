angular.module('WalkthroughJS').controller('stepsCtrl', function ($scope) {

  $scope.correctStuff = {
    'var_ex1': false,
    'var_ex2': false,
    'var_ex3': false,
    'func_ex1': false,
    'func_ex2': false,
    'cond_ex1': false,
    'cond_ex2': false,
    'cond_ex3': false,
    'loops_ex1': false,
    'loops_ex2': false,
    'arr_ex1': false,
    'arr_ex2': false,
    'arr_ex3': false,
    'obj_ex1': false,
    'obj_ex2': false,
    'obj_ex3': false,
  };

  $scope.checkVarAnswers = function () {
    if($scope.var_ex1_var === 'dozen' && $scope.var_ex1_val === '12') {$scope.correctStuff.var_ex1 = true;}
    if($scope.var_ex2_var === 'cokeOrPepsi' && ($scope.var_ex2_val.toLowerCase() === 'coke' || $scope.var_ex2_val.toLowerCase() === 'pepsi')) {$scope.correctStuff.var_ex2 = true;}
    if($scope.var_ex3_var === 'javascriptIsAwesome' && ($scope.var_ex3_val === 'true' || $scope.var_ex3_val === 'false')) {$scope.correctStuff.var_ex3 = true;}
  };

  $scope.checkFuncAnswers = function () {
    if($scope.func_ex1_name === "sumOfTwo" && ($scope.func_ex1_arg1===$scope.func_ex1_arg3  && $scope.func_ex1_arg2===$scope.func_ex1_arg4)){ $scope.correctStuff.func_ex1 = true; }
    if($scope.func_ex2_name === "helloThere" && ($scope.func_ex2_arg1===$scope.func_ex2_arg2)){ $scope.correctStuff.func_ex2 = true; }
  };

  $scope.checkCondAnswers = function () {
    if($scope.cond_ex1_var1 === 'x' && $scope.cond_ex1_val1 === '5') { $scope.correctStuff.cond_ex1 = true; }
    if($scope.cond_ex1_var2 === 'y' && $scope.cond_ex1_val2 === '10') { $scope.correctStuff.cond_ex2 = true; }
    if($scope.cond_ex2_var1 === 'y' && $scope.cond_ex2_var2 === 'x') { $scope.correctStuff.cond_ex3 = true; }
  };

  $scope.checkLoopAnswers = function () {
    if($scope.loops_ex1_var === 'i' && $scope.loops_ex1_val === '1') { $scope.correctStuff.loops_ex1 = true; }
    if($scope.loops_ex2_var1 === 'i' && $scope.loops_ex2_val === '6') { $scope.correctStuff.loops_ex2 = true;}
  }

  $scope.checkArrayAnswers = function () {
    if($scope.arr_ex1_var === 'emptyArray' && $scope.arr_ex1_val) { $scope.correctStuff.arr_ex1 = true; }
    if($scope.arr_ex2_var === 'emptyArray') { $scope.correctStuff.arr_ex2 = true; }
    if($scope.arr_ex3_var === 'emptyArray' && $scope.arr_ex3_val === '0') { $scope.correctStuff.arr_ex3 = true; }
  }

  $scope.checkObjAnswers = function () {
    if($scope.obj_ex1_var === 'emptyObj' && $scope.obj_ex1_val === '{}') { $scope.correctStuff.obj_ex1 = true;}
    if($scope.obj_ex2_var === 'emptyObj' && $scope.obj_ex2_key === "firstName" && $scope.obj_ex2_val.toLowerCase() === "james") { $scope.obj_ex2 = true;}
    if($scope.obj_ex3_var === 'emptyObj' && $scope.obj_ex3_key === 'lastName' && $scope.obj_ex3_val.toLowerCase() === 'jameson') { $scope.obj_ex3 = true;}
  }

  

});
