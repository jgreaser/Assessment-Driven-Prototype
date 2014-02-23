//MODEL

var myJSONObject = {"lesson": [
        
		 {        type: "introduction",
        text: "<img src='images/comparison.png' class='pull-right'><p>You made it here! Great!</p><p>This is a prototype lesson developed by Florida Virtual School. We need your help to go through this lesson and give it a run for its money. If it was a car, we’d want you to kick the tires. If it was a hat, we’d want you to try it on. You get the idea.</p><p>Get set to learn and show what you know about absolute and comparative advantages. I’ve already seen it, so I have the absolute advantage... for now.</p>",
},
	
		
		{type: "question",
		questionType: "mc",
        text: "<p>Which brother* makes more money?</p><p><em>*Names have been changed to protect reputations and avoid lawsuits.</em></p>",
        answer: "Devon Mason—professional wide receiver",
        distractors: ["Devon Mason—professional wide receiver", "Jackson Mason–professional dog walker"],
        "correct feedback": "Good call. Dog walking is an important service, but it’s not going to make you the millions that most professional athletes are raking in each year.",
        "incorrect feedback": "Let’s look at this again. Devon plays for a professional football team and makes millions. Jackson is walking dogs for minimum wage. Though Jackson does often get tips from his customers, he’s not going to be breaking into the million-dollar range anytime soon.",},
		{type: "question",
		questionType: "mc",
        text: "<p>Which brother is better at playing football?</p>",
        answer: "Devon Mason—professional wide receiver",
        distractors: ["Devon Mason—professional wide receiver", "Jackson Mason–professional dog walker"],
        "correct feedback": "Yep, you’re right. Wouldn’t Devon’s team feel like they missed out if his brother was actually the better football player?",
        "incorrect feedback": "While it’s probably true that there are amazing athletes out there who aren’t professionals, let’s not overthink this. Devon really is better than his brother at playing a football.",},
		{type: "question",
		questionType: "mc",
        text: "<p>Which brother is better at walking dogs?</p>",
        answer: "Devon Mason—professional wide receiver",
        distractors: ["Devon Mason—professional wide receiver", "Jackson Mason–professional dog walker"],
        "correct feedback": "You totally saw that one coming, didn’t you? You were right. Devon’s a better football player AND dog walker. He’s got great reflexes and quick feet. Just what a dog walker needs. Devon has an absolute advantage over his brother in both playing football and walking dogs.",
        "incorrect feedback": "I know, it’s kind of a difficult question. You didn’t know that Devon was also a star dog-walker because we didn’t share that piece of information before. Now you know. Devon is better at both. He has an <strong>absolute advantage</strong> over his brother in both playing football and walking dogs. It’s about reflexes.",},
		{type: "question",
		questionType: "mc",
        text: "<p>Which profession is Devon more likely to stick with, at least in the short term?</p>",
        answer: "Professional wide receiver",
        distractors: ["Professional wide receiver", "Professional dog walker"],
        "correct feedback": "Yeah. The <strong>opportunity cost</strong> of giving up football for dog walking is a little high. Like millions of dollars high. Dog walking can be a great job, but not many professional football players are going to give up fame and fortune to spend their days with Fluffy, the toy poodle. ",
        "incorrect feedback": "Let’s talk for a minute about <strong>opportunity cost</strong>. What would Devon have to give up to be a full-time dog walker? Fame, fortune, and lots of free travel. Just because he’s good at dog walking doesn’t mean that’s the best career choice for Devon right now. Maybe when he retires from football he’ll look into it, but he’s pretty happy where he is right now.  ",},
		{type: "question",
		questionType: "mc",
        text: "<p>So, who has the comparative advantage when it comes to dog walking?</p>",
        answer: "Jackson Mason–professional dog walker",
        distractors: ["Devon Mason—professional wide receiver", "Jackson Mason–professional dog walker"],
        "correct feedback": "You did a great job figuring this out! You already knew that Devon had an absolute advantage over Jackson because he was a better dog walker. However, being a dog walker would mean that Devon would have to give up his professional football career (and all the money that comes with it). That’s a huge opportunity cost. Jackson doesn’t have to give up anything to be a dog walker, except maybe some couch time, so he has the <strong>comparative advantage</strong> over his brother because his opportunity cost is very low.",
        "incorrect feedback": "Yeah, this is another hard question. You already know that Devon has the absolute advantage over Jackson because he’s a better dog walker. What you may not know is that Jackson actually has the <strong>comparative advantage</strong>. Jackson doesn’t have to give anything up to be a dog walker, so there’s no opportunity cost. Dog walking is what he already does. He has the comparative advantage over his brother because Devon would have to give up millions and a professional football career.",},
		{type: "question",
		questionType: "text",
        text: "<p>How many hours are in a day?</p>",
        answer: "24",
        distractors: ["", ""],
        "correct feedback": "You got it. What does this have to do with what you’re learning? You need to recognize that time is limited. If you spend two hours watching a movie, that’s two hours that you’re not doing something else like studying or playing sports. What you’re giving up to watch the movie is your opportunity cost. Remember, “time is money.” (Seriously, make sure you remember that because it’s pretty important in this lesson.)",
        "incorrect feedback": "We weren’t trying to be tricky here. We’re just trying to make a point. There are a limited number of hours in a day. If you spend two hours watching a movie, that’s two hours that you’re not doing something else like studying or playing sports. What you’re giving up to watch the movie is your opportunity cost. Remember, “time is money.” (Seriously, make sure you remember that because it’s pretty important in this lesson.)",},		
		{type: "question",
		questionType: "mc",
        text: "<p>Let’s say you have a free Saturday afternoon. You can either detail your car or go to a movie with friends. What’s the opportunity cost if you choose to detail your car?</p>",
        answer: "time spent with friends watching a movie you wanted to see",
        distractors: ["$18 for a movie ticket, popcorn, and soda", "time spent with friends watching a movie you wanted to see"],
        "correct feedback": "You’re right about the opportunity cost in this case. Choosing your car over your friends would be a difficult decision. Making that choice in this scenario would mean giving up a chance to see a movie and hang out.",
        "incorrect feedback": "Remember that opportunity cost is what you are giving up when you make a choice. In this case, you’re giving up the chance to hang out with your friends.",},		
		
		{
		type: "question",
		questionType: "mc",
        text: "<p>Remember what you learned from Devon and Jackson about absolute and comparative advantage? Hope so! Use that to answer the following question</p><table class='table table-striped table-hover'> <tr><th><p>Country</p></th>         <th><p>Worker Hours to Produce 1 Ton of Iron</p></th> </tr>   <tr><td><p>U.S.</p></td><td><p>4</p></td>       </tr>       <tr>         <td><p>Ecuador</p></td>         <td><p>7</p></td>       </tr>       <tr>         <td><p>China</p></td>         <td><p>8</p></td>       </tr>     </table><p>Which country has an absolute advantage in the production of iron?</p>",
        answer: "U.S.",
        distractors: ["Ecuador", "China","U.S."],
        "correct feedback": "You’re right. The U.S. is using fewer resources (in this case, worker hours) to produce the same product. That means the U.S. has an absolute advantage over both of the other countries. Now you’re ready for something a little more challenging. Let’s look at another example. ",
        "incorrect feedback": "Let’s take another look at this. Remember that “time is money.” In this case, the U.S. can produce a ton of iron faster than Ecuador or China. It’s using fewer resources (in this case, worker hours) to make the same amount of the same product. "	
		},
		{
		type: "question",
		questionType: "mc",
        text: "<p>Just by looking at this chart, you should see that it takes the U.S. fewer resources (worker hours) to make both a ton of iron and a barrel of crude oil. In both products the U.S. has an absolute advantage over Ecuador.</p><p>But we’re not looking at absolute advantage this time. Now we’re thinking about comparative advantage. Which country has a <strong>comparative advantage</strong> in the production of crude oil?</p><table class='table table-striped table-hover' > <tr><th><p>Country</p></th>         <th><p>Worker Hours to Produce 1 Ton of Iron</p></th>     <th>Worker Hours to Produce 1 Barrel of Crude Oil</th>   </tr>        <tr><td><p>U.S.</p></td><td><p>4</p></td>       <td>9</td>     </tr>            <tr>         <td><p>Ecuador</p></td>         <td><p>7</p></td>       <td>10</td>     </tr>          </table>",
        answer: "Ecuador",
        distractors: ["U.S.", "Ecuador"],
        "correct feedback": "Good for you! This isn’t an easy question. You have to look at how long it takes each country to make each item, but you also have to think about opportunity cost. What would the U.S. have to give up to make a barrel of crude oil? They’d have to give up making over two tons of iron. It would take U.S. workers five more hours to make a barrel of crude oil than it would take them to make a ton of iron. What about Ecuador? It takes them longer to make both products, but there’s only a difference of three hours. They wouldn’t be giving up as much to produce crude oil instead of iron. So, you’re right, Ecuador would have a comparative advantage in the production or crude oil.",
        "incorrect feedback": "Yeah, this one is more difficult, but it’s definitely something you can figure out. Remember opportunity cost? What would the U.S. have to give up to make a barrel of crude oil? They’d have to give up over two tons of iron. It would take U.S. workers five more hours to make a barrel of crude oil than it would take them to make a ton of iron. What about Ecuador? It takes them longer to make both products, but there’s only a difference of three hours. They wouldn’t be giving up as much to produce crude oil instead of iron. So, in this case, Ecuador would have a comparative advantage in the production or crude oil."	
		},
		{
		type: "question",
		questionType: "mc",
        text: "<p>Which type of advantage is more important for international trade?</p>",
        answer: "Comparative",
        distractors: ["Absolute", "Comparative"],
        "correct feedback": "That’s right! Trade is based on <strong>comparative advantage</strong>. It doesn’t make sense for countries to spend their resources on making every product when they don’t hold an advantage. Remember Devon and Jackson? Just because Devon was a better dog walker didn’t mean it made financial sense for him to spend his time on that when he could be out making millions as a pro football player. It’s the same with countries. Just because you CAN make something, doesn’t mean it’s in your best interests to do so.",
        "incorrect feedback": "While it’s nice to have an absolute advantage in the creation of all products, it’s really a <strong>comparative advantage</strong> that drives trade. Remember Devon and Jackson? Just because Devon was a better dog walker didn’t mean it made financial sense for him to spend his time on that when he could be out making millions as a pro football player. It’s the same with countries. Just because you CAN make something, doesn’t mean it’s in your best interest to do so. That’s where trade comes in. Each country can make the products for which it holds a comparative advantage and then import the others."	
		},
		{
		type: "question",
		questionType: "mc",
        text: "<p>Which product would it make the most sense for the U.S. to <strong>import?</strong></p> <table class='table table-striped table-hover' > <tr><th><p>Country</p></th>         <th><p>Worker Hours to Produce 1 Automobile</p></th>     <th>Worker Hours to Produce 1 Television</th>   </tr>        <tr><td><p>U.S.</p></td><td><p>6</p></td>       <td>2</td>     </tr>            <tr>         <td><p>S. Korea</p></td>         <td><p>10</p></td>       <td>3</td>     </tr>          </table>",
        answer: "Televisions",
        distractors: ["Televisions", "Automobiles"],
        "correct feedback": "That’s right! The U.S. has an absolute advantage in the production of both products, but it makes more sense for the U.S. to focus on making automobiles. It takes the South Koreans only one more hour than the Americans to produce a television. Their comparative advantage would be in the building of TVs, which means that the U.S. would want to import televisions from South Korea and focus on building cars at home. ",
        "incorrect feedback": "The U.S. has an absolute advantage in the production of both products, so we have to look for the comparative advantage. It takes four more worker hours to produce a car in South Korea than in the U.S., but it only takes one more worker hour to produce a television. So it makes more sense for South Korea to make televisions and import American cars and for the Americans to make their own cars and import televisions from South Korea. "	
		},
		{
		type: "question",
		questionType: "mc",
        text: "<p>Using the numbers provided, complete the chart so that it shows the U.S. has an absolute advantage in the production of apples and Costa Rica has an absolute advantage in the production of bananas.</p> <table class='table table-striped table-hover' > <tr><th><p>Country</p></th>         <th><p>Worker Hours to Produce 1 Unit of Bananas</p></th>     <th>Worker Hours to Produce 1 Unit of Apples</th>   </tr>        <tr><td><p>U.S.</p></td><td><p>6</p></td>       <td>3</td>     </tr>            <tr>         <td><p>Costa Rica</p></td>         <td><p><strong>?</strong></p></td>       <td>5</td>     </tr>          </table>   ",
        answer: "2",
        distractors: ["2", "6","7"],
        "correct feedback": "You remembered that an absolute advantage occurs when a country requires less physical resources than another country to produce a particular good or service and you figured out that the measure of physical resources in this case was worker hours. Well done!",
        "incorrect feedback": "Remember that having an absolute advantage occurs when a country requires less physical resources than another country to produce a particular good or service. In this case, the worker hours are the physical resource that’s being measured."	
		},
		{
		type: "question",
		questionType: "mc",
        text: "<p>Using the numbers provided, complete the chart so that it shows Mexico has a comparative advantage in the production of corn, but not an absolute advantage. </p> <table class='table table-striped table-hover' > <tr><th><p>Country</p></th>         <th><p>Worker Hours to Produce 1 Unit of Corn</p></th>     <th>Worker Hours to Produce 1 Unit of Wheat</th>   </tr>        <tr><td><p>U.S.</p></td><td><p>4</p></td>       <td>4</td>     </tr>            <tr>         <td><p>Mexico</p></td>         <td><p><strong>?</strong></p></td>       <td>6</td>     </tr>          </table>",
        answer: "5",
        distractors: ["4", "5","6"],
        "correct feedback": "You’re right! You realized that for Mexico to have a comparative advantage in the production of corn without having an absolute advantage, it would have to take more worker hours to produce a unit of corn in Mexico than in the U.S. However, it would also have to take less time for Mexican workers to produce a unit of corn than it would take for them to produce a unit of wheat.",
        "incorrect feedback": "For Mexico to have a comparative advantage in the production of corn without having an absolute advantage, it would have to take more worker hours to produce a unit of corn in Mexico than in the U.S. However, it would also have to take less time for Mexican workers to produce a unit of corn than it would take for them to produce a unit of wheat."	
		},
		{
		type: "question",
		questionType: "mc",
        text: "<p>Looks like you’re ready to try something a little more challenging. Using the numbers provided, complete the chart so that it shows a situation that would make the U.S. want to <strong>import</strong> bananas from Brazil and wheat from Canada, while <strong>exporting</strong> corn to both. </p>  <table class='table table-striped table-hover' > <tr><th><p>Country</p></th>         <th><p>Worker Hours to Produce 1 Unit of Corn</p></th>     <th>Worker Hours to Produce 1 Unit of Wheat</th>     <th>Worker Hours to Produce 1 Unit of Bananas</th>   </tr>        <tr><td><p>U.S.</p></td><td><p><strong>?</strong></p></td>       <td><strong>?</strong></td>       <td><strong>?</strong></td>     </tr>            <tr>       <td>Canada</td>       <td>6</td>       <td>4</td>       <td>6</td>     </tr>     <tr>         <td><p>Brazil</p></td>         <td><p>6</p></td>       <td>8</td>       <td>2</td>     </tr>          </table>",
        answer: "Corn(4), Wheat(5), Bananas(4)",
        distractors: ["Corn(3), Wheat(5), Bananas(5)", "Corn(4), Wheat(5), Bananas(4)", "Corn(4), Wheat(6), Bananas(4)"],
        "correct feedback": "You’ve done it! You completed the chart to show how the exporting countries had an advantage over the importing countries in the production of these products. You’ve worked hard in this lesson and learned a lot of new concepts. It looks like you have a good understanding of the circumstances that can drive trade. Way to go!",
        "incorrect feedback": "Think about what drives trade. The exporting country needs to have an advantage in the production of the product. This is usually a comparative advantage, but it can also be an absolute advantage. "	
		},
			   {
		type: "question",
		questionType: "mc",
        text: "<p>If you have the choice between going to a water park and going to a theme park, what is the opportunity cost if you choose the theme park?</p>",
        answer: "the chance to go to the water park",
        distractors: ["the price of the water park ticket", "the price of parking at the theme park", "the chance to go to the water park", "the chance to go to the theme park" ],
        "correct feedback": "Correct!",
        "incorrect feedback": "Incorrect, please try again."	
		},
			   {
		type: "question",
		questionType: "mc",
        text: "<p>Which country holds an absolute advantage in the production of digital picture frames?</p><table class='table table-striped table-hover' > <tr><th><p>Country</p></th> <th><p>Time to Produce One Digital Picture Frame</p></th> </tr> <tr><td><p>United States</p></td><td><p>2.5 hours</p></td> </tr> <tr> <td><p>S.Korea</p></td> <td><p>1.5 hours</p></td> </tr> <tr> <td>Phillippines</td> <td>2.0 hours</td> </tr> <tr> <td>Germany</td> <td>3.5 hours</td> </tr> </table>",
        answer: "S. Korea",
        distractors: ["United States", "S. Korea","Philippines", "Germany"],
        "correct feedback": "Correct!",
        "incorrect feedback": "Incorrect, please try again."	
		},
			   {
		type: "question",
		questionType: "mc",
        text: "<p>In the production of which product(s) does Canada have an absolute advantage over Mexico?</p><table class='table table-striped table-hover' > <tr><th><p>Country</p></th> <th>Time to Produce One Unit of Soybeans</th> <th><p>Time to Produce One Unit of Barley</p></th> </tr> <tr><td><p>Canada</p></td> <td>4 hours</td> <td><p>3 hours</p></td> </tr> <tr> <td><p>Mexico</p></td> <td>5 hours</td> <td><p>4 hours</p></td> </tr></table><p></p>",
        answer: "both soybeans and barley",
        distractors: ["soybeans", "barley","both soybeans and barley", "neither soybeans nor barley"],
        "correct feedback": "Correct!",
        "incorrect feedback": "Incorrect, please try again."	
		},
			   {
		type: "question",
		questionType: "mc",
        text: "<p>In the production of which product does China have a comparative advantage over Japan?</p><table class='table table-striped table-hover' > <tr><th><p>Country</p></th> <th>Time to Produce One Digital Video Recorder</th> <th><p>Time to Produce One MP3 Player</p></th> </tr> <tr><td><p>China</p></td> <td>5 hours</td> <td><p>4 hours</p></td> </tr> <tr> <td><p>Japan</p></td> <td>4 hours</td> <td><p>2 hours</p></td> </tr></table><p></p>",
        answer: "Digital Video Recorder",
        distractors: ["Digital Video Recorder", "MP3 Player"],
        "correct feedback": "Correct!",
        "incorrect feedback": "Incorrect, please try again."	
		},
			   {
		type: "question",
		questionType: "mc",
        text: "<p>Which product should Spain import from Portugal?</p><table><table class='table table-striped table-hover' > <tr><th><p>Country</p></th> <th>Time to Produce One Unit of Olive</th> <th><p>Time to Produce One Unit of Grapes</p></th> </tr> <tr><td><p>Portugal</p></td> <td>5 hours</td> <td><p>3 hours</p></td> </tr> <tr> <td><p>Spain</p></td> <td>6 hours</td> <td><p>6 hours</p></td> </tr> </table></table><p></p>",
        answer: "grapes",
        distractors: ["olives", "grapes"],
        "correct feedback": "Correct!",
        "incorrect feedback": "Incorrect, please try again."	
		},
		{
		type: "conclusion",
        text: "<p>Excellent work! You made it to the end of the prototype lesson.  We really appreciate you making it this far… but… you’re not done yet.</p><p>Next is the survey. We need you to jump in there and tell us what you thought. We base every decision we make on the interest of students, so your opinion counts for a great deal!</p>"}
    ]
};

