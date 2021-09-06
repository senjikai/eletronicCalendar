<?php

class Event{

    // include 'calendar.php';
    
    public $title = "";
    public $dateStart = "";
    public $dateEnd = "";
    public $scheduleStart = "";
    public $scheduleEnd = "";

    // public $people[] = {};
    public $location = "";
    public $description = "";

    // $calendar = new Calendar();

    public function showEventSchedule(){

        echo '<div><h2>'.date('l',time()).'</h2>
                    <h1>'.date('F',time()).' '.date('j',time()).'</h1>
              </div>';

    }

}

?>