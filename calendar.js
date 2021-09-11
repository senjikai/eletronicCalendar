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

$('#2021-09-07').css({
    "border-bottom":"12px solid #5e7bff"
});

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

    console.log(JSON.parse(localStorage.getItem('content')));
}