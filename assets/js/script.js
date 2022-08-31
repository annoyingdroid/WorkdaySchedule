
//Variables
const date = new Date();
var index = 0;
var hours = 9;
var events = [];
var scheduleItems = [];
var curDay = new Date().toLocaleString('en-us', {weekday: 'long'});
var curDate = new Date().toLocaleString('en-us', {year: 'numeric', month: 'short', day: 'numeric'});
var curTime = date.getTime();
var clock;
var background = Math.round(1 + (Math.random() * 5));
var imgURL = "assets/images/background\\ " + background + ".jpg";

//Set random background image for header
$("#header").css({
    "box-shadow": "0px -210px 450px 30px rgba(255,255,255,1) inset",
    "background-image":"url(" + imgURL + ")",
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "background-position": "center center"
});

//Generating hour blocks
for (var i = 0; i < hours; i++) {
    events.push(hours + i +":00");
    $('.container').append(`
    <div class="row time-block" id=${"hour" + (hours + i)}) >

    <div class="col-sm col-md-2 hour">
        ${hours + i + ":00"}
    </div>
    <div class="col-sm col-md-10 d-flex description">
      <div class="input-group">
          <textarea class="form-control text-area"></textarea>
          <div class="input-group-append">
          <button class="saveBtn d-flex justify-center align-center">
            <i class="material-icons">save</i>
          </button>
        </div>
      </div>
    </div>
  </div>
`);
}

//Saving an event

//Saving the calendar

//Check for current time & disable if time passed


//Set the current day and date
$("#header h1 #weekday").text(curDay);
$("#header #longDate").text(curDate);

//Loading the current time
function timeUpdate(){
    $("#header #curTime").text(new Date().toLocaleTimeString('en-us', {hour12: false}));
}

//Loading the number of scheduled items
$("#header p #schedItems").text(scheduleItems.length);

//Make time dynamically update
timeUpdate();
clock = setInterval(timeUpdate, 1000);

//EventListeners

