//http://jscourse.com/task/simple-templater
function templater(templateString, dataObj) {
    var _arrTemplate = templateString.split('${');
    var resultArr = [];
    var indexCloseBkt;
    var i;
    var key = '';

    for (i = 0; i < _arrTemplate.length; i += 1) {
        indexCloseBkt = _arrTemplate[i].indexOf('}');
        key = _arrTemplate[i].slice(0, indexCloseBkt);
        if (dataObj.hasOwnProperty(key)) {
            resultArr.push(_arrTemplate[i].replace(key + '}', dataObj[key]));
        } else {
            resultArr.push(_arrTemplate[i]);
        }
    }

    return resultArr.join('');
}
