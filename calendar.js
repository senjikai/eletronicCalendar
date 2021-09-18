$('.date').datepicker({
    autoclose: true
});

$('#timepicker1').timepicker();
$('#timepicker2').timepicker();

function startIdCount(){
    var id = 0;
    if(localStorage.getItem('id')){
        id = Number(localStorage.getItem('id'));
        id++;
        localStorage.setItem('id',String(id));
        // alert(''+id);
        return id;
    }else{
        localStorage.setItem('id','1');
        return 1;
    }
}

function getId(id){
        
    if(localStorage.getItem('tmp') == ""){
        selectItem(id);
    }else{
        if(id != ""){
            $('#'+localStorage.getItem('tmp')).css({
                "background-color":"#b4d2ff"
            });

            selectItem(id);
        }
    }
}

function selectItem(id){
    if(id != ""){
        $('#'+id).css({
            "background-color":"#6697e0"
        });
        
        localStorage.setItem('tmp',id);

        dt = new Date(reaDate(id)+', '+formatDate(id));

        $('.con2 h2').html(getDayWeek(dt.getDay()));
        $('.con2 h1').html(reaDate(id));
    }

    var element = JSON.parse(localStorage.getItem('content'));

    $('table').html('<tr><td>No schedule for this day</td></tr>');

    var counter = 0;

    for(var j = 0;j<element.length;j++){
        
        if(trasformDate(element[j].dtStart) == id || trasformDate(element[j].dtEnd) == id){
            counter++;

            if(counter == 1){
                $('table tr').remove(); 
            }

            $('table').append('<tr><td>'+element[j].title+'</td></tr>');
        }
    }
}

function reaDate(date){
    var monthI = "";
    var day = "";

    day = Number(date.substring(8));
    monthI = Number(date.substring(5,7));

    switch(monthI){
        case 1: month = "January"; break;
        case 2: month = "February"; break;
        case 3: month = "March"; break;
        case 4: month = "April"; break;
        case 5: month = "May"; break;
        case 6: month = "June"; break;
        case 7: month = "July"; break;
        case 8: month = "August"; break;
        case 9: month = "September"; break;
        case 10: month = "October"; break;
        case 11: month = "November"; break;
        case 12: month = "December"; break;
    }

    return month+' '+day;
}

function formatDate(date){
    var year = "";

    year = date.substring(0,4);

    return year;
}

function getDayWeek(day){
    switch(day){
        case 0: week = "Sunday"; break;
        case 1: week = "Monday"; break;
        case 2: week = "Tuesday"; break;
        case 3: week = "Wednesday"; break;
        case 4: week = "Thursday"; break;
        case 5: week = "Friday"; break;
        case 6: week = "Saturday"; break;
    }

    return week;
}

//format to yyyy-mm-dd
function trasformDate(value){

    var month = value.substring(0,2);
    var day = value.substring(3,5);
    var year = value.substring(6,10);

    return year+'-'+month+'-'+day;
}

function events(){

    var events = JSON.parse(localStorage.getItem('content'));

    for(var i = 0;i<events.length;i++){
        $('#'+trasformDate(events[i].dtStart)).css({
            "border-bottom":"12px solid #5e7bff"
        });
        $('#'+trasformDate(events[i].dtEnd)).css({
            "border-bottom":"12px solid #5e7bff"
        });
    }

    // $('#2021-09-07').css({
    //     "border-bottom":"12px solid #5e7bff"
    // });
}

events();

function saveEvent(element){

    var elements = [];

    var title = element.title.value;
    var dtStart = element.dtStart.value;
    var dtEnd = element.dtEnd.value;

    var content = {
        id: startIdCount(),
        title: title,
        dtStart: dtStart,
        dtEnd: dtEnd
    };

    if(localStorage.getItem('content')){
        Addelements = JSON.parse(localStorage.getItem('content'));
        Addelements.push(content);

        localStorage.setItem('content',JSON.stringify(Addelements));
    }
    else{
        elements.push(content);

        localStorage.setItem('content',JSON.stringify(elements));
    }

    dates = JSON.parse(localStorage.getItem('content'));

    // console.log(date[0].dtStart+' '+date[0].dtEnd);
}