/**
 * Created by 1 on 08.10.2015.
 */
'use strict';

(function () {
    var validUser = {
        name: 'Test',
        pass: '111'
    };

    function toggle() {
        formLogin.classList.toggle('visible');
        authText.classList.toggle('visible');
    }

    function print(message, whereToPut) {
        whereToPut.innerHTML = '';
        var textElem = document.createElement('h1');
        var buttonElem = document.createElement('button');

        textElem.classList.toggle('form-header');
        textElem.innerHTML = message;

        buttonElem.classList.toggle('button');
        buttonElem.innerHTML = 'back';
        buttonElem.id = 'back';
        buttonElem.addEventListener('click', function (e) {
            e.preventDefault();
            toggle();
        }, false);

        whereToPut.appendChild(textElem);
        whereToPut.appendChild(buttonElem);
    }

    function getUserFromHTML() {
        var user = {};
        var userNameElem;
        var passElem;

        userNameElem = document.querySelector('#userName');
        passElem = document.querySelector('#password');

        user.name = userNameElem.value;
        user.pass = passElem.value;

        return user;
    }

    function auth(user) {
        var key;
        for (key in validUser) {
            if (user.hasOwnProperty(key) && validUser[key] !== user[key]) {
                return false;
            }

        }
        return true;
    }

    function login() {
        var ERROR_MESSAGE = 'You don\'t have permission!';
        var ENTER_MESSAGE = 'Welcome ';

        var userToCheck = getUserFromHTML();

        if (auth(userToCheck)){
            print(ENTER_MESSAGE + userToCheck.name, authText);
        } else {
            print(ERROR_MESSAGE, authText);
        }
        toggle();
    }

    submit.addEventListener('click', login);
})();