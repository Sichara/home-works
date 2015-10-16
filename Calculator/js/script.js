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
        pushed: true
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
            resultEval = toCalculate(resultEval, action.symbol, number);
            action.symbol = this.innerHTML;
        }

        evalBox.value = String(resultEval);
    }

    function toCalculate(numberA, symbol, numberB) {//назови ее по другому, toCalculate - очень не удачное название. toCalculate например
        var actions = {
			'+': numberA + numberB,
			'-': numberA - numberB,
			'*': numberA * numberB,
			'/': numberA / numberB
		};

		return actions[symbol]; //так будет более изящно 
    }

    function evalResult() {
        number = getCurrentNum();
        action.pushed = true;
        resultEval = toCalculate(resultEval, action.symbol, number);

        action.symbol = '';
        evalBox.value = String(resultEval);

        resultEval = 0;
    }

   function bindEvent(buttons, action, handler) {
        var i;

		for(i = 0; i < buttons.length; i ++) {
			buttons[i].addEventListener(action, handler);
		}
    }

    bindEvent(numList, 'click', clickOnNumbers);
    bindEvent(actionList, 'click', clickOnActions);


    evalBtn.addEventListener('click', evalResult);
});
