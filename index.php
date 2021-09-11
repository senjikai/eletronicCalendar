<?php
include 'calendar.php';
include 'event.php';
?>

<html>
    <head>   
        <title>Eletronic Calendar</title>
        <link href="bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
        <link href="dist/css/bootstrap-datepicker3.css" type="text/css" rel="stylesheet" />
        <link href="calendar.css" type="text/css" rel="stylesheet" />
        <link href="dist/css/bootstrap-timepicker.min.css" type="text/css" rel="stylesheet" />

        <script src="jquery/jquery-2.2.1.min.js"></script>

    </head>
        <body>
            <div class="container">
            <div class="row">
                <div class="gap-head"></div>
                <div class="col-sm-6 col-sm-offset-1 con1">
                    <?php
                        $calendar = new Calendar();
                        echo $calendar->show();
                    ?>
                </div>
                <div class="col-sm-3 con2">
                    <?php
                        $event = new Event();
                        echo $event->showEventSchedule();
                    ?>

                    <div>
                        <input type="text" class="form-control" value="No schedule for this day">
                    </div>
                    <br>
                    <div class="gap"></div>
                    <div class="btn-add">
                        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#janela">Add</button>
                    </div>
                </div>
            </div> <!--end row-->

                <!-- modal window -->
                <form class="modal fade" id="janela" onSubmit="saveEvent(this)">
        
                <div class="modal-dialog modal-md">
                <div class="modal-content">
                    
                    <!-- cabecalho -->
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">Add a new event</h4>
                    </div>

                    <!-- corpo -->
                    <div class="modal-body">
                    <div class="row">
                        <div class="form-group">
                            <div class="col-sm-2">Title*</div>
                            <div class="col-sm-10"><input type="text" name="title" class="form-control" id="title" placeholder="Event Title"></div>
                        </div>
                    </div><!--row-->
                    <br>
                    <div class="row">
                        <!-- <div class="form-group "> -->
                            <div class="col-sm-2">Start date*</div>

                            <div class="col-sm-4">
                                <div class="input-group date" data-provide="datepicker">
                                    <input type="text" name="dtStart" class="form-control" placeholder="mm/dd/yyyy">
                                    <div class="input-group-addon" >
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </div>
                                </div>
                            </div>
                            <!-- <br> -->
                            <div class="col-sm-2">End date*</div>
                            
                            <div class="col-sm-4">
                                <div class="input-group date" data-provide="datepicker">
                                    <input type="text" name="dtEnd" class="form-control" placeholder="mm/dd/yyyy">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </div>
                                </div>
                            </div>
                            <!-- </div> -->
                    </div><!--row-->
                    <br>
                    <div class="row">
                        <div class="col-sm-2">Begins</div>

                        <div class="col-sm-4">
                            <div class="input-group bootstrap-timepicker timepicker">
                                <input id="timepicker1" type="text" class="form-control input-small">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                            </div>
                        </div>

                        <div class="col-sm-2">Ends</div>

                        <div class="col-sm-4">
                            <div class="input-group bootstrap-timepicker timepicker">
                                <input id="timepicker2" type="text" class="form-control input-small">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-2">People</div>
                        <div class="col-sm-10"><input type="text" class="form-control" id="senha"></div>
                    </div><!--row-->
                    <br>
                    <div class="row">
                        <div class="col-sm-2">Location</div>
                        <div class="col-sm-10"><input type="text" class="form-control" id="senha"></div>
                    </div><!--row-->
                    <br>
                    <div class="row">
                        <div class="col-sm-2">Description</div>
                        <div class="col-sm-10"><input type="text" class="form-control" id="senha"></div>
                    </div><!--row-->
                    <br>

                    <button class="btn btn-primary">Add Event</button>
                    </div>

                    <!-- rodape -->
                    <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                    </button>

                    </div>

                </div>
                </div>

            </form>
            <!-- modal window -->

        </div> <!--end container area-->

        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="dist/js/bootstrap-datepicker.js"></script>
        <script src="dist/js/bootstrap-timepicker.min.js"></script>
        <script src="calendar.js"></script>

        </body>
</html>      