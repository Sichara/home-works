/**
 * Created by 1 on 26.09.2015.
 */
//Добавить класс в строку

function addClass(obj, cls) {
    var arr = obj.className.split(' '),
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === cls) return;
    }
    arr.push(cls);

    obj.className = arr.join(' ');
}

addClass({
    className: 'open menu'
}, 'new'); // obj.className='open menu new'
addClass({
    className: 'open menu'
}, 'open'); // без изменений (класс уже существует)
addClass({
    className: 'open menu'
}, 'me'); // obj.className='open menu new me'


//Самый длинный полиндром---------------------
function findLongestPalindrome(str) {
    var polyForward = [],
        polyBack = [],
        result = '',
        i,
        j;

    str = str.toLowerCase().replace(/\s/g, '');
    for (i = 0; i < str.length; i++) {
        polyForward = str.slice(i).split('');
        polyBack = polyForward.slice().reverse();
        for (j = 0; j < polyBack.length; j++) {
            if (polyBack.slice(j).join('') === polyForward.slice(0, polyForward.length - j).join('')) {
                result = (result.length < polyBack.slice(j).join('').length) ? polyBack.slice(j).join('') : result;
            }
        }
    }
    return result;
}

findLongestPalindrome('Mama mila mashiny');

//Перевести текст вида border-left-width в borderLeftWidth
function camelize(str) {
    var arr = str.split('-'),
        i;

    for (i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

//Функция removeClass
function removeClass(obj, str) {
    var arr = obj.className.split(' '),
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {}
    }
}

// https://en.wikipedia.org/wiki/99_Bottles_of_Beer
(function() {
    var BOTTLES_AT_START = 99;
    var verseOfTheSong;

    for (var currentBottleIndex = BOTTLES_AT_START; currentBottleIndex > 0; currentBottleIndex -= 1) {
        verseOfTheSong = '';
        //form
        verseOfTheSong += currentBottleIndex + ' bottles of beer on the wall, ' + currentBottleIndex + ' bottles of beer.\n';
        verseOfTheSong += 'Take one down, pass it around, ' + (currentBottleIndex - 1) + ' bottles of beer on the wall...';
        //print
        console.log(verseOfTheSong);
    }
})();

//Напиши программу, которая загадывает целое число до 50, и просит пользователя число отгадать.
// Каждый раз, когда пользовател вводит число, которое ближе к ответу, чем предыдущее предположение пользователя,
// программа выдает prompt для следующего числа с сообщением "теплее", если новое предположение отдаляется от
// задуманного числа, программа выводит prompt с сообщением "холоднее". После отгадывания числа программа с
// помощью alert показывает количество попыток, за сколько было угадано число.
// Максимальное число попыток: 10 (должно быть настраиваемым). После этого игра считается проиграной, о чем
// сообщается в alert окошке.
(function() {
    var random = Math.random();
    var MAX_NUMBER_CHOICE = 50;
    var MAX_RETRIES = 10;
    var PROGRAM_CHOISE = Math.floor(random * MAX_NUMBER_CHOICE);
    var messagePromt = 'Я загадала число. Угадывай, пользователь';
    var rememberPlayerChoice = Infinity;
    var playerChoice;
    var userInput;
    var countRetries;

    //console.log(PROGRAM_CHOISE);
    for (countRetries = 1; countRetries <= MAX_RETRIES; countRetries += 1) {
        userInput = prompt(messagePromt); //в первый раз 'Я загадала число. Угадывай, пользователь'
        playerChoice = parseInt(userInput.trim(), 10);

        if (isNaN(playerChoice)) {
            console.log('Вводить надо цифрами');
        } else {
            if (playerChoice === PROGRAM_CHOISE) {
                messagePromt = 'Угадал хитрец за ' + countRetries + ' попыток';
                break;
            } else {
                if (Math.abs(PROGRAM_CHOISE - playerChoice) <= Math.abs(PROGRAM_CHOISE - rememberPlayerChoice)) {
                    messagePromt = 'Теплее';
                    // console.log(Math.abs(PROGRAM_CHOISE - playerChoice), Math.abs(PROGRAM_CHOISE - rememberPlayerChoice));
                } else {
                    messagePromt = 'Холоднее';
                    // console.log(Math.abs(PROGRAM_CHOISE - playerChoice), Math.abs(PROGRAM_CHOISE - rememberPlayerChoice));
                }
                rememberPlayerChoice = playerChoice;
            }
        }
    }
    if (countRetries !== MAX_RETRIES) {
        console.log(messagePromt);
    } else console.log('Игра проиграна. Вы исчерпали все ' + MAX_RETRIES + ' попытки');
})();

//Просуммировать числа из массива, которые больше 100
function sumOnly100Plus(arr) {
    var result = 0;
    var i;
    for (i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && arr[i] > 100) result += arr[i];
    }
    return result;
}

sumOnly100Plus([100]);

function sumOnly100Plus(arr) {
    return arr.reduce(function(result, curentItem) {
        if (typeof curentItem === 'number' && curentItem > 100) {
            result += curentItem;
        }
        return result;
    }, 0);
}

//Отфильтровать элементы массива с нечетным индексом
function extractOddItems(arr) {
    return arr.filter(function(item, index) {
        if (!(index % 2 === 0)) return item;

    });
}
console.log(extractOddItems([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Проверить является ли один массив подмножеством второго
function contains(where, what) {
    /*    var result;
        result = what.every(function(itemWhat) {
            return where.some(function(itemWhere) {
                console.count('loop');  
                return itemWhere === itemWhat;
            });
        });

        return result;*/
    var i;
    for (i = 0; i < what.length; i += 1) {
        if (where.indexOf(what[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(contains([1, 2, 3], [3, 2])); // true
console.log(contains([1, 2, 3], [3, 2, 1, 2, 3])); // true

// Объединить объекты
function extend(obj1, obj2) {
    var key;

    for (key in obj2) {
        obj1[key] = obj2[key];
    }

    return obj1;
}

console.log(extend({
    foo: 'bar',
    baz: 1
}, {
    foo: true,
    zoop: 0
})); // {foo: true, baz: 1, zoop: 0}

//Создать объект из массивов данных
function createObject(arrOfKeys, arrOfData) {
    var resultObj = {};
    var i;
    var key;

    for (i = 0; i < arrOfKeys.length; i += 1) {
        key = arrOfKeys[i];
        resultObj[key] = arrOfData[i];
        // resultObj[key] = arrOfData[i];
    }

    return resultObj;
}

function createObject(arrOfKeys, arrOfData) {
    return arrOfKeys.reduce(function(obj, prev, index) {
        obj[prev] = arrOfData[index];
        return obj;
    }, {});
}

console.log(createObject(['foo'], ['bar'])); // {foo: 'bar'}
console.log(createObject(['foo', 'extra'], ['bar'])); // {foo: 'bar', extra: undefined}

//Преобразовать одномерный массив в двумерный
function toMatrix(data, rowSize) {
    var i;
    var rowChildSize = 0;
    var columnChild = 0;
    var dataChild = [];
    var rowChild = 0;
    var _data = [];

    for (i = 0; i < data.length; i += 1) {
        dataChild.push(data[i]);
        rowChildSize = dataChild.length;
        if (rowChildSize === rowSize) {
            _data.push(dataChild.slice(0, rowSize));
            dataChild.splice(0, rowChildSize);
        }
    }
    if (rowChildSize < rowSize && rowChildSize > 0) {
        _data.push(dataChild.slice(0, rowSize));
        dataChild.splice(0, rowChildSize);
    }

    return _data;
}

// Сложить все аргументы
function sum() {
    var result;
    for (var i = 0; i < arguments.length; i++) {
        result = (i === 0) ? arguments[0] : result + arguments[i];
    }
    return result;
}

// Проверить вхождение элементов в массив
function isInArray(arr) {
    var i;
    for (i = 1; i < arguments.length; i += 1) {
        if (arr.indexOf(arguments[i]) === -1) {
            return false;
        }
    }
    return true;
}

// Проверить каждый элемент массива на удовлетворение условию
function every(arr, func) {
    var i;
    for (i = 0; i < arr.length; i += 1) {
        if (!func(arr[i], i, arr)) return false;
    }

    return true;
}

// Выполнить функции из массива
function execFunctions(arrOfFunctions) {
    var arrayOfResults = [];
    var i;
    for (i = 0; i < arrOfFunctions.length; i += 1) {
        arrayOfResults.push(arrOfFunctions[i]());
    }

    return arrayOfResults;
}

function execFunctions(arrOfFunctions) {
    return arrOfFunctions.map(function(funcToExec) {
        return funcToExec();
    });
}

// Получить название файла или папки из пути
function getName(path) {
    var arrOfFolders = path.trim().split('/');
    var length = arrOfFolders.length - 1;

    return (arrOfFolders[length]) ? (arrOfFolders[length]) : (arrOfFolders[arrOfFolders.indexOf('', 1) - 1]);
}


// Создать массив из массивоподобного объекта
function toArray(obj) {
    var key;
    var resultArr = [];

    for (key in obj) {
        resultArr[key] = obj[key];
    }
    return resultArr;
}

function toArray(obj) {
    return [].map.call(obj, function(value) {
        return value;
    });
}

// Преобразовать строку запроса (query string) в объект
function queryStringToObject(queryString) {
    var arrayOfQueries = queryString.split('&');
    var splitQuery = [];
    var arrayOfKeys = [];
    var arrayOfData = [];
    var objOfTypes = {
        'true': true,
        'false': false,
        'null': null,
        'undefined': undefined
    };
    var numberOfQuery;

    for (numberOfQuery = 0; numberOfQuery < arrayOfQueries.length; numberOfQuery += 1) {
        splitQuery = arrayOfQueries[numberOfQuery].split('=');
        if (splitQuery[0] !== '') {
            arrayOfKeys.push(decodeURIComponent(splitQuery[0]));
            splitQuery[1] = decodeURIComponent(splitQuery[1]);

            if (!isNaN(parseInt(splitQuery[1], 10))) {
                splitQuery[1] = parseInt(splitQuery[1], 10);
            }

            if (objOfTypes[splitQuery[1]] !== undefined) {
                splitQuery[1] = objOfTypes[splitQuery[1]];
            }

            arrayOfData.push(splitQuery[1]);
        }
    }

    return createObject(arrayOfKeys, arrayOfData);
}

function queryStringToObject(queryString) {
    var res = {};
    var keyValPairs = queryString.split('&');

    res = keyValPairs.reduce(function (reducedValue, currentKeyValue) {
        var key = currentKeyValue.split('=')[0];
        var stringifiedValue = currentKeyValue.split('=')[1];

        return reducedValue;
    }, {});

    return res;
}

// Найти и исправить объект в структуре
function fixStruct(struct) {
    var elementToCheck = {};
    var elemPrevious = {};
    var elemNext = {};
    var i;

    for (i = 1; i < struct.length - 1; i += 1) {
        elemPrevious = struct[i - 1];
        elementToCheck = struct[i];
        if (!(elementToCheck.delta === elementToCheck.value - elemPrevious.value)) {
            elemNext = struct[i + 1];
            elementToCheck.value = elemNext.value - elemNext.delta;
            elementToCheck.delta = elementToCheck.value - elemPrevious.value;
        }
    }

}

// Сформировать список без повторений
function getUnique(list) {
    var resultArray = [];
    var listItem;

    for (listItem = 0; listItem < list.length; listItem += 1) {
        if (resultArray.indexOf(list[listItem]) === -1) {
            resultArray.push(list[listItem]);
        }
    }

    return resultArray;
}

function getUnique(list) {
    return [].filter.call(list, function(item, index, arrayToSearch) {
        return index === 0 || [].lastIndexOf.call(arrayToSearch, item, index - 1) === -1;
    });
}

// Реализовать счетчик, сокрыв детали реализации
function createSummator(initialValue) {
    var _initialValue = initialValue || 0;
    var counter = {};

    counter.get = function() {
        return _initialValue;
    };

    counter.inc = function(num) {
        var countInc = num || 1;
        return _initialValue += countInc;
    };

    counter.dec = function(num) {
        var countDec = num || 1;

        return _initialValue -= countDec;
    };

    return counter;
}