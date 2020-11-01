(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .controller('HomeController', homeController)
        .filter('startFrom', function(){
            //data = vm.listarCarros;
            return function(data, start){
                return data.slice(start);
            }
        })
;

    homeController.$inject = ['helperFactory', 'autoLocadoraService'];

    function homeController(helper, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.iniciar = iniciar;

        function iniciar() {
            return vm.listarCarros();
        }

        /* ***************    FUNÇÕES ADD 'VM' PARA TESTES     **************** */
        vm.listarCarros = listarCarros;

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        function listarCarros() {
            return service.listar()
                .then(function (_listaCarros) {
                    vm.listaCarros = _listaCarros;
                    helper.rootScopeApply();
                });
        }

        //function startFrom(){
         //   return function(data, start){
          //      return data.slice(start);
           // }
       // }



    }

})();