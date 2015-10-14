/**
 * Created by 1 on 13.10.2015.
 */

window.addEventListener('load', function () {
    var evalBox = document.querySelector('.eval-box');
    var numList = document.querySelectorAll('.num');
    var actionList = document.querySelectorAll('.action');
    var evalBtn = document.querySelector('.eval');
    var number;
    var resultEval = 0;
    var action = {
        symbol: '',
        pushed: false
    };


    function addToEvalBox(symToAdd) {
        evalBox.value += String(symToAdd);
    }

    function eraseEvalBox() {
        evalBox.value = '';
    }

    function clickOnNumbers() {
        var symToAdd = this.innerHTML;

        if (action.pushed) {
            eraseEvalBox();
            action.pushed = false;
        }

        addToEvalBox(symToAdd);
    }

    function getCurrentNum() {
        return Number(evalBox.value);
    }

    function clickOnActions() {
        number = getCurrentNum();
        action.pushed = true;

        if (action.symbol === '') {
            resultEval = number;
            action.symbol = this.innerHTML;
        } else {
            resultEval = eval(resultEval, action.symbol, number);
            action.symbol = this.innerHTML;
        }

        evalBox.value = String(resultEval);
    }

    function eval(numberA, symbol, numberB) {
        if (symbol === '+') {
            return numberA + numberB;
        }
        if (symbol === '-') {
            return numberA - numberB;
        }
        if (symbol === '*') {
            return numberA * numberB;
        }
        if (symbol === '/') {
            return numberA / numberB;
        }
    }

    function evalResult() {
        number = getCurrentNum();
        action.pushed = true;
        resultEval = eval(resultEval, action.symbol, number);

        action.symbol = '';
        evalBox.value = String(resultEval);

        resultEval = 0;
    }

    function bindEventsNumClick() {
        var i,
            j;

        for (i = 0; i < arguments.length; i += 1) {
            for (j = 0; j < arguments[i].length; j += 1) {
                arguments[i][j].addEventListener('click', clickOnNumbers);
            }
        }
    }

    function bindEventsActionsClick() {
        var i,
            j;

        for (i = 0; i < arguments.length; i += 1) {
            for (j = 0; j < arguments[i].length; j += 1) {
                arguments[i][j].addEventListener('click', clickOnActions);
            }
        }
    }

    bindEventsNumClick(numList);
    bindEventsActionsClick(actionList);

    evalBtn.addEventListener('click', evalResult);
});