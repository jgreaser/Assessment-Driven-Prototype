$(document).ready(function () {

    ///////////////////////////////////////////////////////////////////////////
    ///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///
    ///////////////////////////////////////////////////////////////////////////
    ///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///MODEL///
    ///////////////////////////////////////////////////////////////////////////



	

var lesson = myJSONObject.lesson;



//    var lesson = [testIntroduction, page01, testContentMCEntry, testContentMCEntry2, testContentTextEntry, testContentTextEntry2, testInstruction, testConclusion];

    //set x is the object number we want to look at within the lesson. start at 0. 
    var x = 0;




    ///////////////////////////////////////////////////////////////////////////////
    //CONTROL//CONTROL//CONTROL//CONTROL//CONTROL//CONTROL//CONTROL//CONTROL///////
    ///////////////////////////////////////////////////////////////////////////////
    //CONTROL//CONTROL//CONTROL//CONTROL//CONTROL//CONTROL//CONTROL//CONTROL///////
    ///////////////////////////////////////////////////////////////////////////////


    ////Global Control////Global Control////Global Control////
    ////Global Control////Global Control////Global Control////


	
	
    //create the displayNow object with all of our screen goodies - only happens first time it loads
	
    var displayNow = new DisplayContent(lesson[x].type, lesson[x].questionType, lesson[x].text, lesson[x].distractors, lesson[x].answer, lesson[x]["correct feedback"], lesson[x]['incorrect feedback']);

    function navigateContent(direction) {
        if (direction == "next") {
            x++;
            console.log("next " + x);
			trackLoaded();

        } else {
            x--;
        }
		
		
        displayNow = new DisplayContent(lesson[x].type, lesson[x].questionType, lesson[x].text, lesson[x].distractors, lesson[x].answer, lesson[x]["correct feedback"], lesson[x]['incorrect feedback']);
        displayNow.display();
    	
	}

	//add audio vars
	var correctAudio = $("#correctAudio")[0];
	var incorrectAudio = $("#incorrectAudio")[0];
	var nextAudio = $("#nextAudio")[0];


    //Event listener for navigation
    $('#next').on('click', function () {
        navigateContent("next");
		nextAudio.play();
		
		
    });
    $('#previous').on('click', function () {
        navigateContent("previous");
    });


    ///Create Event Listener for Questions

    var startListenIn = function (questionType) {

        console.log("start listen in called!");

        console.log("listening for " + questionType);

        //first, lets unbind all of items' children, shall we?
        $("#items").unbind();

        console.log("now unbinding MC listener");


        if (questionType == "text") {
            $("#items").bind({
                submit: function (event) {
                    console.log("you hit text entry");
                    event.preventDefault();
                    var input = $('input.textinput').val();
                    console.log("you selected " + input);
                    displayNow.checkAnswer(input);
                }
                //          $("#items").submit(function (event) {
                //				console.log("now unbinding MC listener");
                //				event.preventDefault();
                //               console.log("clickin' on text entry");

                //             var input = $('input.textinput').val();
                //            console.log("text entry" + input);
                //           displayNow.checkAnswer(input);
            });
        } else {
            $("#items").bind({
                submit: function (event) {
                    console.log("you hit item-mc!");
                    event.preventDefault();
                    var input = $('input:checked').val();
                    console.log("you selected " + input);
                    displayNow.checkAnswer(input);
                }


            });


            //            $("#items").submit(function (event) {

            //              console.log("you hit item-mc!");
            //            event.preventDefault();

            //          var input = $('input:checked').val();
            //         console.log("you selected " + input);

            //       displayNow.checkAnswer(input);

            //});




        }
    }



    var killListenIn = function () {
        console.log("kill listen in");
        listenIn = '';
    }


    //OK NOW DISPLAY!!! AND TRACK!@
	function trackLoaded(){
	console.log("you called trackLoaded!");	
	ga('send', 'event', 'Screen Loaded', 'loaded', x);	
	}
	function trackAttempts(attempts){
	console.log("you called trackAttempts!");	
	ga('send', 'event', 'Attempts', 'Counted Attempts on screen ' + x, attempts);	
	}
	
	
    displayNow.display();
	//ga('send', 'event', 'Screen Loaded', 'loaded', x)
	trackLoaded();
	


    ///////////////////////////////////////////////////////////////////////////////
    ///VIEW//////VIEW//////VIEW//////VIEW//////VIEW//////VIEW//////VIEW//////VIEW//
    ///////////////////////////////////////////////////////////////////////////////
    ///VIEW//////VIEW//////VIEW//////VIEW//////VIEW//////VIEW//////VIEW//////VIEW//
    /////////////////////////////////////////////////////////////////////////////// 


    //constructor for content display

    function DisplayContent(contentType, contentQuestionType, contentText, contentDistractors, contentAnswer, contentCorrectFeedback, contentIncorrectFeedback) {

        this.currentAttempts = 0;

        this.type = contentType;
        this.questionType = contentQuestionType;

        console.log(this.questionType);

        this.text = contentText;
        this.distractors = contentDistractors;
        this.answer = contentAnswer;
        this.correctFeedback = contentCorrectFeedback;
        this.incorrectFeedback = contentIncorrectFeedback;

        this.attemptsCount = function () {
            this.currentAttempts++;
        }


        this.checkAnswer = function (input) {
            var correct = "correct";
            var incorrect = "incorrect";

            if (input == this.answer) {

                //function to UNBIND listenere here? HERE
                $("#items").children().unbind();

                this.showFeedback(this.currentAttempts, correct, input, this.correctFeedback, this.answer);
            } else {
                this.attemptsCount();
                this.showFeedback(this.currentAttempts, incorrect, input, this.incorrectFeedback, this.answer);
            }
        }

        this.display = function () {
            if (this.type == "introduction") {
                displayIntroduction(this.text);
            }
            if (this.type == "question") {
                displayQuestion(this.text, this.questionType, this.distractors);
            }
            if (this.type == "instruction") {
                displayInstruction(this.text);
            }
            if (this.type == "conclusion") {
                displayConclusion(this.text);
            }
        }


        ////////////////////////////////////////////////
        //Display     Feedback                //////////
        ////////////////////////////////////////////////

        this.showFeedback = function (attempts, status, input, feedback, correct) {

            //this.currentAttempts++;
            console.log("Current attempts: " + attempts);
			
			if (status == "correct"){
			correctAudio.play();
			$('.feedbackicon').attr('src', 'images/correct.png');
			}
			else {
				incorrectAudio.play();
				$('.feedbackicon').attr('src', 'images/incorrect.png');
					}


            //display feedback if under 3 attempts
            if (attempts < 3) {


				//Check for undefined!
				if (input == undefined || input ==''){
				 $('#feedback').html("Please answer the question...");

				}
				else{
					//not Undefined, great! Show that first line. 
                $('#feedback').html("<p>You answered <em>" + input + "</em>.</p> " + "<p>" + feedback + "</p>");}
				
                if (status == "correct") {
					trackAttempts(attempts+1);
                    $('#feedbackContainer').removeClass('bg-warning').removeClass('bg-info').addClass('bg-success');
                    $('form').hide();
                    $('#next').show();

                } else {
                    $('#feedbackContainer').addClass('bg-warning');
                }
				//$('#feedback').prepend("<img src='images/incorrect.png' class='feedbackicon'>");
                $('#feedbackContainer').show();
            } else {
				//set icon
				$('.feedbackicon').attr('src', 'images/attemptsReached.png');

				
                $('#feedbackContainer').removeClass('bg-warning').addClass('bg-info');
				if (input == undefined || input ==''){
					trackAttempts(attempts);
					$('#feedback').html("<p>Next time, try entering an answer.</p><p>The correct answer is <strong>" + correct + "</strong>.");
				}
                else {
					trackAttempts(attempts);
					$('#feedback').html("<p>You answered <em>" + input + "</em>.</p> " + "<p>The correct answer is <strong>" + correct + "</strong>.");}
                $('form').hide();
                $('#next').show();
            }
        }


    }

    //displayIntroduction()
    function displayIntroduction(content) {
        $('#feedbackContainer').hide();
        $('#previous').hide();
        $('#text').html(content);
    }

    //displayConclusion(object)
    function displayConclusion(content) {
        $('#feedbackContainer').hide();
		$('#previous').show();
        $('#next').hide();
        $('#text').html(content);
    }

    //displayInstruction(object)
    function displayInstruction(content) {
        $('#feedbackContainer').hide();
        //$('#next').hide();
        $('#text').html(content);
    }

    //displayQuestion(object)
    function displayQuestion(content, questionType, items) {

        startListenIn(questionType);
        console.log("display Question type: " + questionType);
        $('#feedbackContainer').hide();
        $('#next').hide();
        $('#text').html(content);

        //THIS PART IS HOKEY...FIX THIS
        if (questionType == "text") {
            //listenIn("text");
            console.log("showing a text entry");
            $('#items').html('<div id="div-item-text"><form id="item-text"><div class="form-group" action="javascript:void(0);"><div id="text-entry" class="input-group"><span class="input-group-addon">?</span><input type="text" id="answer" class="textinput form-control" value="" placeholder="Enter answer here" /></div> </div> <br /><button type="submit" class="btn btn-default" type="button">Submit Answer</button></form></div>');

        } else if (questionType == "mc") {
            //listenIn("mc");
            console.log("showing a mc entry");

            var itemsList = '<div id="div-item-mc"><form id="item-mc"  action="#">';

            for (var i = 0; i < items.length; i++) {
                itemsList = itemsList + '<div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios' + (i + 1) + '" value="' + items[i] + '" />' + items[i] + '</label></div>';
            }
            itemsList = itemsList + '<button type="submit" class="btn btn-default">Submit Answer</button></form></div>';

            $('#items').html(itemsList);
            console.log("done adding mc entry");
        }

    }




});