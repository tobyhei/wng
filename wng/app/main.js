(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        vm.number = 0;
        vm.all = function () {
            var val = vm.number;
            var result = [];            
            var i;
            for (i = 1; i <= val; i++) {
                result[i] = i;
            }
            return result.filter(function (n) { return n != undefined });
        };
        vm.odd = function () {
            var val = vm.number;
            var result = [];
            var i;
            for (i = 1; i <= val; i+=2) {
                result[i] = i;
            }
            return result.filter(function (n) { return n != undefined });
        };
        vm.even = function () {
            var val = vm.number;
            var result = [];
            var i;
            for (i = 2; i <= val; i += 2) {
                result[i] = i;
            }
            return result.filter(function (n) { return n != undefined });
        };
        vm.fibonacci = function () {
            var val = vm.number;
            if (val === 0) return 0;
            if (val === 1) return 1;
            if (val === 2) return 1;
            var fib = [];
            fib[0] = 0;
            fib[1] = 1;
            var i;
            for (i = 2; i <= val; i++) {                
                fib[i] = fib[i - 2] + fib[i - 1];
            }
            return fib.filter(function (n) { return n != undefined });
        };
        vm.fizzBuzz = function () {
            var val = vm.number;
            var result = [];
            var i;
            for (i = 1; i <= val; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result[i] = 'Z';
                }
                else if (i % 3 === 0) {
                    result[i] = 'C';
                }
                else if (i % 5 === 0) {
                    result[i] = 'E';
                }
                else {
                    result[i] = i;
                }
            }
            return result.filter(function (n) { return n != undefined });
        };
    }

    var INTEGER_REGEXP = /^\-?\d+$/;
    angular
        .module('app').
            directive('integer', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elm, attrs, ctrl) {
                        ctrl.$validators.integer = function (modelValue, viewValue) {
                            if (ctrl.$isEmpty(modelValue)) {
                                // consider empty models to be valid
                                return true;
                            }

                            if (INTEGER_REGEXP.test(viewValue)) {
                                // it is valid
                                return true;
                            }

                            // it is invalid
                            return false;
                        };
                    }
                };
            });
})();
