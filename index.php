<html>
    <head>   
        <link href="calendar.css" type="text/css" rel="stylesheet" />
    </head>
        <body>
        <div class="area">
            <div class="calendar">
                <?php
                    include 'calendar.php';
                    $calendar = new Calendar();
                    
                    echo $calendar->show();
                ?>
            </div>
            <div class="schedule">
                <?php
                    include 'event.php';
                    $event = new Event();

                    echo $event->showEventSchedule();
                ?>

                <!-- <input type="input" name="" > -->
            </div>
        </div>
        </body>
</html>      