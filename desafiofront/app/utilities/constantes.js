(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .constant('constantes', {
            URL_BASE: 'http://localhost:8084/api',
            MSGS: {
                ERRO_GERAL: 'Ocorreu algum problema. Tente novamente mais tarde.',
            },
        });

})();