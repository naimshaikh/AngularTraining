var hInterval;
var vInterval;
var Signal = /** @class */ (function () {
    function Signal() {
    }
    Signal.prototype.signal = function () {
        $(function () {
            $("#vroad").css("height", $(window).innerHeight());
        });
        $(function () {
            $("#hroad").css("width", $(window).innerWidth);
        });
    };
    // Red Signal
    Signal.prototype.redsignal = function () {
        $(function () {
            $("#red").click(function () {
                $("#showsignal").attr("src", "images/redsignal.png");
                clearInterval(hInterval);
            });
        });
    };
    // Green Signal
    Signal.prototype.greensignal = function () {
        $(function () {
            $("#green").click(function () {
                $("#showsignal").attr("src", "images/greensignal.png");
                clearInterval(hInterval);
                //var $car = $('#car').val();
                //alert($car);
                var car = document.getElementById("car");
                var leftOffset = 0;
                function move() {
                    car.style.marginLeft = leftOffset + "px";
                    leftOffset += 2;
                    if (leftOffset > window.innerWidth) {
                        leftOffset = 0;
                    }
                }
                ;
                hInterval = setInterval(move, 1);
            });
        });
    };
    // Yellow Signal
    Signal.prototype.yellowsignal = function () {
        $(function () {
            $("#yellow").click(function () {
                $("#showsignal").attr("src", "images/yellowsignal.png");
                clearInterval(hInterval);
                var car = document.getElementById("car");
                var leftOffset = 0;
                function move() {
                    car.style.marginLeft = leftOffset + "px";
                    leftOffset += 2;
                    if (leftOffset > window.innerWidth) {
                        leftOffset = 0;
                    }
                }
                ;
                hInterval = setInterval(move, 20);
            });
        });
    };
    // Red Signal1
    Signal.prototype.redsignal1 = function () {
        $(function () {
            $("#red1").click(function () {
                $("#showsignal1").attr("src", "images/redsignal.png");
                clearInterval(vInterval);
            });
        });
    };
    // Green Signal1
    Signal.prototype.greensignal1 = function () {
        $(function () {
            $("#green1").click(function () {
                $("#showsignal1").attr("src", "images/greensignal.png");
                clearInterval(vInterval);
                //var $car = $('#car').val();
                //alert($car);
                var car = document.getElementById("car1");
                var leftOffset = 0;
                function move() {
                    car.style.marginTop = leftOffset + "px";
                    leftOffset += 2;
                    if (leftOffset > window.innerHeight) {
                        leftOffset = 0;
                    }
                }
                ;
                vInterval = setInterval(move, 5);
            });
        });
    };
    // Yellow Signal1
    Signal.prototype.yellowsignal1 = function () {
        $(function () {
            $("#yellow1").click(function () {
                $("#showsignal1").attr("src", "images/yellowsignal.png");
                clearInterval(vInterval);
                var car = document.getElementById("car1");
                var leftOffset = 0;
                function move() {
                    car.style.marginTop = leftOffset + "px";
                    leftOffset += 2;
                    if (leftOffset > window.innerHeight) {
                        leftOffset = 0;
                    }
                }
                ;
                vInterval = setInterval(move, 20);
            });
        });
    };
    return Signal;
}());
var sing = new Signal();
sing.redsignal();
sing.greensignal();
sing.yellowsignal();
sing.redsignal1();
sing.greensignal1();
sing.yellowsignal1();
