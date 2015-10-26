(function() {
    var Speed = function() {
        this.slow = {
            durability: 0.001,
            gas: 7
        };
        this.average = {
            durability: 0.001,
            gas: 6.5
        };
        this.fast = {
            durability: 0.003,
            gas: 6
        };
    };

    var Car = function() {

        this.durability = 0.78;
        this.gas = 100;
        this.speeds = new Speed();

        this.drive = function(distance, speed) {
            function getRealDistance(carToDetect) {
                var speedCharacteristics = carToDetect.speeds[speed];
                var drivingDistance = Math.min(distance, carToDetect.gas / speedCharacteristics.gas * 100);

                var durabilitySpent = drivingDistance * speedCharacteristics.durability;
                var durabilityLeft = carToDetect.durability - durabilitySpent;

                var realDistance;
                if (durabilityLeft < 0) {
                    realDistance = carToDetect.durability / speedCharacteristics.durability;
                } else {
                    realDistance = drivingDistance;
                }
                return realDistance;
            }

            var realDurabilitySpent = getRealDistance(this) * this.speeds[speed].durability;
            var realGasSpent = getRealDistance(this) * this.speeds[speed].gas / 100;
            this.durability -= realDurabilitySpent;
            this.gas -= realGasSpent;
        };
    };

    var car = new Car();
})();

// Объединить несколько функций в одну
function compose() {

        function toArray(obj) {
            var key;
            var resultArr = [];

            for (key in obj) {
                resultArr[key] = obj[key];
            }
            return resultArr;
        }

        var funcssToCompose = toArray(arguments);

        function execute() {
            funcssToCompose.map(function(funcToExec) {
                return funcToExec();
            });
        }

        return execute;
    }
    // function log1() {console.log(111);}
    // function log2() {console.log(222);}
    // function log3() {console.log(333);}
    // var logAll = compose(log1, log2, log3);
    // logAll();

// Ключник
function createKeeper() {
    var arrayOfKeys = [];
    var arrayOfValues = [];
    var mainObj = {
        get: function(key) {
            return arrayOfValues[arrayOfKeys.indexOf(key)] || null;
        },

        put: function(key, value) {
            if (arrayOfKeys.indexOf(key) === -1) {
                arrayOfKeys.push(key);
                arrayOfValues.push(value);
            } else {
                arrayOfValues[arrayOfKeys.indexOf(key)] = value;
            }
        }
    };

    return mainObj;
}
