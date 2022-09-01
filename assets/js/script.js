//Variables
const date = new Date();
var index = 0;
var hours = 24;
var events = [];
var scheduleItems = [];
var curTime = date.getHours();
var curDay = new Date().toLocaleString('en-us', {weekday: 'long'});
var curDate = new Date().toLocaleString('en-us', {year: 'numeric', month: 'short', day: 'numeric'});
var clock;
var background = Math.round(1 + (Math.random() * 5));
var hello = ["Hello","你好","Hola","Mbote","Kia ora","Hi", "Hey", "Bonjour"]
var randHello = Math.round((Math.random() * (hello.length-1)));
var imgURL = "assets/images/background\\ " + background + ".jpg";

//Set random background image for header
$("#header").css({
    "box-shadow": "0px -200px 155px 40px rgba(255,255,255,1) inset",
    "background-image":"url(" + imgURL + ")",
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "background-position": "center center"
});

//Sets a random language for the greeting
$(".hello").text(hello[randHello].toString());

//Generating hour blocks
for (var i = 0; i < hours; i++) {
    events.push(i +":00");
    $('.container').append(`
    <row class="time-block d-flex" index=${i}>

        <section class="col-sm-1 hour"><i>${i + ":00"}</i></section>
        
        <section class="col-md d-flex">
            <textarea class="form-control"></textarea>
            <div class="d-flex">
                <button class="d-flex saveBtn w-100 h-100" index=${i}>
                    <i class="material-icons m-auto">save</i>
                </button>
            </div>
        </section>
    </row>
`);
}

//Loads events into calendar
loadEvents();
function loadEvents(){
    var timeBlock = document.getElementsByClassName("form-control");
    for(var i = 0; i < hours; i++)
    {
        timeBlock[i].value = localStorage.getItem(i);
        if(localStorage.getItem(i) != null)
        {
            scheduleItems.push(localStorage.getItem(i));
        }
    }
};

//Check for current time & disable if time passed
function allowEntry(){
    $('.time-block').each(function(i, obj) {
        var schedTime = $(obj).attr("index");
        if(schedTime == curTime){
            $(obj).find('textarea').addClass('present');
        } else if (schedTime > curTime){
            $(obj).find('textarea').addClass('future');
        } else {
            $(obj).find('textarea').addClass('past').attr('disabled', 'disabled');
        }
    });
}

//Set the current day and date
$("#header h1 #weekday").text(curDay);
$("#header #longDate").text(curDate);

//Loading the current time
function timeUpdate(){
    $("#header #curTime").text(new Date().toLocaleTimeString('en-us', {hour12: false}));
    allowEntry();
    scheduleLoad();
}

//Loading the number of scheduled items
function scheduleLoad() {
    if(scheduleItems.length == 1){
        $("#header p #schedItems").text(scheduleItems.length + " event");
    } else if(scheduleItems.length > 1){
        $("#header p #schedItems").text(scheduleItems.length + " events");
    } else {
        $("#header p #schedItems").text("no events");
}
}

//Saves date for comparison
localStorage.setItem("date", curDay);

//Check if the day is over and clear localStorage
if(curDay != localStorage.getItem("date")){
    localStorage.clear();
}

//EventListeners
$('.saveBtn').on('click', function(event){
    var schedTime = $(this).closest(".time-block").attr("index");
    var schedEvent = $(this).closest(".time-block").find("textarea").val();

    localStorage.setItem(schedTime, schedEvent);
});

//Make time dynamically update
timeUpdate();
setInterval(timeUpdate, 1000);