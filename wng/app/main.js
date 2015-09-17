(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        vm.number = 0;
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
