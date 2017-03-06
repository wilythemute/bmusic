'use strict';

angular.module('myApp', ['angularSoundManager'])

    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.songs = [
            {
                id: 'one',
                title: 'Ana (Wily Bravo)',
                url: 'http://bmusic.jaolab.com/temas/ana.mp3'
            },
            {
                id: 'two',
                title: 'Fe (Wily B. Ft. Peter Arboleda)',
                url: 'http://bmusic.jaolab.com/temas/fepreview.mp3'
            },
            {
                id: 'three',
                title: 'Claroscuro (Joel Bravo)',
                url: 'http://bmusic.jaolab.com/temas/zzqq.mp3'
            },
            {
                id: 'four',
                title: 'Mercedes (Joel Bravo)',
                url: 'http://bmusic.jaolab.com/temas/mercedesc.mp3'
            },
            {
                id: 'five',
                title: 'Último borrador (Joel Bravo)',
                url: 'http://bmusic.jaolab.com/temas/ultimoborrador.mp3'
            }
        ];

    }]);