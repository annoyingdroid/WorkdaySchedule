
//Variables
const date = new Date();
var index = 0;
var hours = 9;
var events = [];
var scheduleItems = [];
var curDay = new Date().toLocaleString('en-us', {weekday: 'long'});
var curDate = new Date().toLocaleString('en-us', {year: 'numeric', month: 'short', day: 'numeric'});
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
    <row class="row time-block" index=${hours + i}>

        <section class="col-sm col-md-1 hour">${hours + i + ":00"}</section>
        
        <section class="col-sm col-md d-flex">
            <div class="input-group">
                <textarea class="form-control"></textarea>
                <div class="input-group-append">
                    <button class="saveBtn justify-center align-center">
                        <i class="material-icons">save</i>
                    </button>
                </div>
            </div>
        </section>
    </row>
`);
}

//Check for current time & disable if time passed
// $('.time-block').each(function(i, obj) {
//     var schedTime = $(obj).attr("index");
//     if(schedTime === date.getHours()){
//         $(obj).find('textarea').addClass('present');
//     } else if (schedTime < date.getHours()){
//         $(obj).find('textarea').addClass('past').attr('disabled', 'disabled');
//         $(obj).find('.save-button').addClass('disabled').attr('disabled', true);
//     } else {
//         $(obj).find('textarea').addClass('future');
//     }
// });

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
setInterval(timeUpdate, 1000);

//EventListeners
    //Save events
$('.saveBtn').on('click', function(event){
    var schedTime = $(this).attr("index");
    var schedEvent = $(this).attr("index");
});
