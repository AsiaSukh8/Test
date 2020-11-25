//console.log('Hello world');

var date = new Date();
console.log(date);

var day = date.getDay();
var hours = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

function ApplyTheme(currentDay, currentHour, currentSecond){
    var bodyClass = $('body').attr("class");
    $('body').removeAttr("class")
    if ((currentHour >=7)&&(currentHour < 18)){
        bodyClass = "light";
    }
    else {
        bodyClass = "dark";
    }

    if (currentSecond %2 === 0){
        $('body').addClass('even')
    } else {
        $('body').removeClass('even')
    }
    /*switch (day) {
        case true: 
        bodyClass = "light";
            break;
    
        case false:
            bodyClass = "dark";
            break;
    }*/
    switch (currentHour) {
        case 18: 
            $('body').addClass('time19');
            break;
    }
    $('body').addClass(bodyClass);
console.log(currentHour, currentSecond)
}
ApplyTheme(day, hours, sec);