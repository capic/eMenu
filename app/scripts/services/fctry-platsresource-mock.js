'use strict';

/**
 * @ngdoc service
 * @name eMenuApp.srvcPlatsResource
 * @description
 * # srvcPlatsResource
 * Service in the eMenuApp.
 */
eMenuServicesModule
    .factory('platsResourceFctry', ['$resource',
        function ($resource) {
            return $resource('mock/plats.json');
        }
    ]
);
