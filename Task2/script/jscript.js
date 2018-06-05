var browserSize = 0;
var hInterval;
var vInterval;

$(document).ready(function () {
    $("#vroad").css("height", $(window).innerHeight());
});

$(document).ready(function () {
    $("#hroad").css("width", $(window).innerWidth);
});

function hstop() {
    clearInterval(hInterval);
}

function vstop() {
    clearInterval(vInterval);
}

//JQuery for Red Signal
$(document).ready(function () {
    $("#red").click(function () {
        hstop();
        $("#showsignal").attr("src", "images/redsignal.png");
    });
});

//JQuery for Green Signal
$(document).ready(function () {
    $("#green").click(function () {
        hstop();
        $("#showsignal").attr("src", "images/greensignal.png");
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

        };
        hInterval = setInterval(move, 5);
    });
});

//JQuery for Yellow Signal
$(document).ready(function () {
    $("#yellow").click(function () {
        hstop();
        $("#showsignal").attr("src", "images/yellowsignal.png");
        var car = document.getElementById("car");
        var leftOffset = 0;
        function move() {
            car.style.marginLeft = leftOffset + "px";
            leftOffset += 2;
            if (leftOffset > window.innerWidth) {
                leftOffset = 0;
            }
        };
        hInterval = setInterval(move, 20);
    });
});

//JQuery for Red Signal
$(document).ready(function () {
    $("#red1").click(function () {
        vstop();
        $("#showsignal1").attr("src", "images/redsignal.png");
    });
});

//JQuery for Green Signal
$(document).ready(function () {
    $("#green1").click(function () {
        vstop();
        $("#showsignal1").attr("src", "images/greensignal.png");
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

        };
        vInterval = setInterval(move, 5);
    });
});

//JQuery for Yellow Signal
$(document).ready(function () {
    $("#yellow1").click(function () {
        vstop();
        $("#showsignal1").attr("src", "images/yellowsignal.png");
        var car = document.getElementById("car1");
        var leftOffset = 0;
        function move() {
            car.style.marginTop = leftOffset + "px";
            leftOffset += 2;
            if (leftOffset > window.innerHeight) {
                leftOffset = 0;
            }
        };
        vInterval = setInterval(move, 20);
    });
});

