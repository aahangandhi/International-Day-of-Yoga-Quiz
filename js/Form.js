var qCheck;

class Form {

  constructor() {

    this.donotsee = createElement('h1');

    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.whatisyourname = createElement('h2');
    this.tellingScore = createElement('h2');
    this.tellingAboutUpdates = createElement('h3');
    this.madeby = createElement('h1');
    this.instruction = createElement('h3');
    //this.reset = createButton('Reset');
    this.startQuiz = createButton('Start Quiz');

    this.qu1 = createElement('h2');
    this.qu1o1 = createButton('Krishnamacharya');
    this.qu1o2 = createButton('Maharshi Patanjali');
    this.qu1o3 = createButton('Gautam Buddha');
    this.qu1o4 = createButton('Adi Shankaracharya');

    this.qu2 = createElement('h2');
    this.qu2o1 = createButton('Philosophy & meditation');
    this.qu2o2 = createButton('Inner peace & tranquility');
    this.qu2o3 = createButton('Joining together');
    this.qu2o4 = createButton('Controlled breathing');

    this.qu3 = createElement('h2');
    this.qu3o1 = createButton('A spiritual discipline');
    this.qu3o2 = createButton('An aerobic workout');
    this.qu3o3 = createButton('A competetive sport');
    this.qu3o4 = createButton('A diet');

    this.qu4 = createElement('h2');
    this.qu4o1 = createButton('Breathe deep');
    this.qu4o2 = createButton('Think about your tasks');
    this.qu4o3 = createButton('I bow to you');
    this.qu4o4 = createButton('Strength');

    this.qu5 = createElement('h2');
    this.qu5o1 = createButton('5000 years ago');
    this.qu5o2 = createButton("In the 2000's");
    this.qu5o3 = createButton('In the last decade');
    this.qu5o4 = createButton('In 1880');

    this.qu6 = createElement('h2');
    this.qu6o1 = createButton('Push ups');
    this.qu6o2 = createButton('Asanas');
    this.qu6o3 = createButton('Deadlifts');
    this.qu6o4 = createButton('Songs');

    this.qu7 = createElement('h2');
    this.qu7o1 = createButton('France');
    this.qu7o2 = createButton('America');
    this.qu7o3 = createButton('India');
    this.qu7o4 = createButton('Mexico');

    this.qu8 = createElement('h2');
    this.qu8o1 = createButton('Pigeon Yoga');
    this.qu8o2 = createButton('Hatha Yoga');
    this.qu8o3 = createButton('Barre Yoga');
    this.qu8o4 = createButton('Spnning Yoga');

    this.qu9 = createElement('h2');
    this.qu9o1 = createButton('Restorative');
    this.qu9o2 = createButton('Hot Yoga');
    this.qu9o3 = createButton('Aerobic');
    this.qu9o4 = createButton('Competetive');
    
    this.qu10 = createElement('h2');
    this.qu10o1 = createButton('Jiu Jitsu');
    this.qu10o2 = createButton('Power Yoga');
    this.qu10o3 = createButton('Barre');
    this.qu10o4 = createButton('Yin Yoga');
    
    this.qu11 = createElement('h2');
    this.qu11o1 = createButton('The practice of mindfulness');
    this.qu11o2 = createButton('Breathing sequence');
    this.qu11o3 = createButton('Dolajata');
    this.qu11o4 = createButton('Dol Jatara');

    this.qu12 = createElement('h2');
    this.qu12o1 = createButton('Fire starter');
    this.qu12o2 = createButton('Flip Flop');
    this.qu12o3 = createButton('The leap');
    this.qu12o4 = createButton('Downward dog');
    
    this.qu13 = createElement('h2');
    this.qu13o1 = createButton('A type of animal');
    this.qu13o2 = createButton('An energy point');
    this.qu13o3 = createButton('A god');
    this.qu13o4 = createButton('A pose');

    this.qu14 = createElement('h2');
    this.qu14o1 = createButton('A newcomer to Yoga');
    this.qu14o2 = createButton('Trained practitioner of yoga');
    this.qu14o3 = createButton('An onld book of sutras');
    this.qu14o4 = createButton('A weekly Yoga class');
    
    this.qu15 = createElement('h2');
    this.qu15o1 = createButton('A type of food');
    this.qu15o2 = createButton('A yoga practitioner');
    this.qu15o3 = createButton('A deep breath');
    this.qu15o4 = createButton('A physical pose');

  }

  getState(){
    var qCheckRef  = database.ref('qCheck');
    gameStateRef.on("value",function(data){
       qCheck = data.val();
    })

  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.instruction.hide();
    this.startQuiz.hide();
    //this.qu1.hide();
  }

  display(){

    this.donotsee.html("Please ignore everything on the bottom and consider the things in the yoga canvas only")

    this.qu1.style('color','black')
    this.qu2.style('color','black')
    this.qu3.style('color','black')
    this.qu4.style('color','black')
    this.qu5.style('color','black')
    this.qu6.style('color','black')
    this.qu7.style('color','black')
    this.qu8.style('color','black')
    this.qu9.style('color','black')
    this.qu10.style('color','black')
    this.qu11.style('color','black')
    this.qu12.style('color','black')
    this.qu13.style('color','black')
    this.qu14.style('color','black')
    this.qu15.style('color','black')

    this.title.html("The International Day of Yoga Quiz");
    this.title.position(displayWidth/2 - 250, 0);
    this.title.style('color',"green")
    this.title.style('font-size',26)

    this.whatisyourname.html("Type your full name here:");
    this.whatisyourname.position(500,280);
    this.whatisyourname.style('color', 'orange');

    this.input.position(displayWidth/2 + 50 ,305);

    this.button.position(displayWidth/2 - 50, displayHeight/2 + 65);
    this.button.style('width', '100px');
    this.button.style('height', '30px');
    this.button.style('font-size', '17.5px');
    this.button.style('background', 'yellow');

    this.button.mousePressed(()=>{

      //this.title.html("The Holi Quiz, by " + name);
      //this.title.position(displayWidth/2 - 160, 0);

      this.whatisyourname.hide();
      this.input.hide();
      this.button.hide();
     name = this.input.value();
     this.greeting.html("Happy Internationl Day of Yoga " + name + "!");
      this.greeting.position(displayWidth/2 - 265, displayHeight/4);
      this.greeting.style('color','orange')


      this.qu1.html("Q.1. Who is believed to be the father of Yoga?");
      this.qu2.html("Q.2. What is the literal meaning of the word “Yoga”?");
      this.qu3.html("Q.3. What best describes yoga?");
      this.qu4.html("Q.4. What does “Namaste” mean?");
      this.qu5.html("Q.5. About how long ago did the philosophy of yoga begin?");
      this.qu6.html("Q.6. Yoga exercises consist of a set of what?");
      this.qu7.html("Q.7. In what country did yoga originate?");
      this.qu8.html("Q.8. Which is a type of yoga?");
      this.qu9.html("Q.9. Bikram Yoga is known as what type of yoga?");
      this.qu10.html("Q.10. Which type of yoga has a western influence?");
      this.qu11.html("Q.11. What is meditation?");
      this.qu12.html("Q.12. Which of these is a common yoga pose:");
      this.qu13.html("Q.13. What is a chakra?_");
      this.qu14.html("Q.14. What is a “yogi”?");
      this.qu15.html("Q.15. What is an asana?");      

      this.startQuiz.position(displayWidth/2 - 50, displayHeight/2 + 65);
      this.startQuiz.style('width', '120px');
      this.startQuiz.style('height', '30px');
      this.startQuiz.style('background', 'yellow');
      this.startQuiz.style('font-size', '17.5px');

    //  this.startQuiz.style('width', '150px');
      //this.startQuiz.style('height', '50px');

    this.instruction.html("Instructions - This quiz will be having 15 questions. All the questions will be related to Yoga only.  Their is no time limit and so let's see how much you know about Yoga. The result will be displayed after attending all questions. You cannot skip any question neither you can change the answer of any question that you have answered, so think twice before clicking on the answer. To start the quiz click on the 'Start Quiz' button below.");
    this.instruction.position(5,displayHeight/4 + 50);
    this.instruction.style('color','orange')


    });

    this.startQuiz.mousePressed(()=>{
      qCheck = 1;
     
      if(qCheck === 1){
        this.greeting.hide();
        this.instruction.hide();
        this.startQuiz.hide();
  
        this.qu1.position(10,80);

        this.qu1o1.position(417,208.5);
        this.qu1o1.style('width', '150px');
        this.qu1o1.style('height', '50px');
        this.qu1o1.style('background', 'lightblue');
        this.qu1o1.style('color', rgb(240,0,0));
        this.qu1o1.style('font-size', '17.5px');
        this.qu1o3.position(417,625.5);
        this.qu1o3.style('width', '150px');
        this.qu1o3.style('height', '50px');
        this.qu1o3.style('background', 'lightblue');
        this.qu1o3.style('color', rgb(240,0,0));
        this.qu1o3.style('font-size', '17.5px');
        this.qu1o2.position(1137,208.5);
        this.qu1o2.style('width', '150px');
        this.qu1o2.style('height', '50px');
        this.qu1o2.style('background', 'lightblue');
        this.qu1o2.style('color', rgb(240,0,0));
        this.qu1o2.style('font-size', '17.5px');
        this.qu1o4.position(1137,625.5);
        this.qu1o4.style('width', '150px');
        this.qu1o4.style('height', '50px');
        this.qu1o4.style('background', 'lightblue');   
        this.qu1o4.style('color', rgb(240,0,0));
        this.qu1o4.style('font-size', '17.5px');
      }

      if(qCheck === 2){
  
        this.qu2.position(10,80);
          this.qu2o1.position(417,208.5);
          this.qu2o3.position(417,625.5);
          this.qu2o2.position(1137,208.5);
          this.qu2o4.position(1137,625.5);  
          
      this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
      }

      if(qCheck === 3){
  
        this.qu3.position(10,80);
          this.qu3o1.position(417,208.5);
          this.qu3o3.position(417,625.5);
          this.qu3o2.position(1137,208.5);
          this.qu3o4.position(1137,625.5);  
          
      this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
      }

      if(qCheck === 4){
  
        this.qu4.position(10,80);
          this.qu4o1.position(417,208.5);
          this.qu4o3.position(417,625.5);
          this.qu4o2.position(1137,208.5);
          this.qu4o4.position(1137,625.5);  
          
      this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
      }

      if(qCheck === 5){
  
        this.qu5.position(10,80);
          this.qu5o1.position(417,208.5);
          this.qu5o3.position(417,625.5);
          this.qu5o2.position(1137,208.5);
          this.qu5o4.position(1137,625.5);  
          
      this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
      }

      if(qCheck === 6){
  
        this.qu6.position(10,80);
          this.qu6o1.position(417,208.5);
          this.qu6o3.position(417,625.5);
          this.qu6o2.position(1137,208.5);
          this.qu6o4.position(1137,625.5);  
          
      this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
      }

      if(qCheck === 7){
  
        this.qu7.position(10,80);
          this.qu7o1.position(417,208.5);
          this.qu7o3.position(417,625.5);
          this.qu7o2.position(1137,208.5);
          this.qu7o4.position(1137,625.5);  
          
      this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
      }

      if(qCheck === 8){
  
        this.qu8.position(10,80);
          this.qu8o1.position(417,208.5);
          this.qu8o3.position(417,625.5);
          this.qu8o2.position(1137,208.5);
          this.qu8o4.position(1137,625.5);  
          
      this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
      }

      if(qCheck === 9){
  
        this.qu9.position(10,80);
          this.qu9o1.position(417,208.5);
          this.qu9o3.position(417,625.5);
          this.qu9o2.position(1137,208.5);
          this.qu9o4.position(1137,625.5);  
          
      this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
      }

      if(qCheck === 10){
  
        this.qu10.position(10,80);
          this.qu10o1.position(417,208.5);
          this.qu10o3.position(417,625.5);
          this.qu10o2.position(1137,208.5);
          this.qu10o4.position(1137,625.5);  
          
      this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
      }

      if(qCheck === 11){
  
        this.qu11.position(10,80);
          this.qu11o1.position(417,208.5);
          this.qu11o3.position(417,625.5);
          this.qu11o2.position(1137,208.5);
          this.qu11o4.position(1137,625.5);  
          
      this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
      }

      if(qCheck === 12){
  
        this.qu12.position(10,80);
          this.qu12o1.position(417,208.5);
          this.qu12o3.position(417,625.5);
          this.qu12o2.position(1137,208.5);
          this.qu12o4.position(1137,625.5);  
          
      this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
      }

      if(qCheck === 13){
  
        this.qu13.position(10,80);
          this.qu13o1.position(417,208.5);
          this.qu13o3.position(417,625.5);
          this.qu13o2.position(1137,208.5);
          this.qu13o4.position(1137,625.5);  
          
      this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
      }

      if(qCheck === 14){
  
        this.qu14.position(10,80);
          this.qu14o1.position(417,208.5);
          this.qu14o3.position(417,625.5);
          this.qu14o2.position(1137,208.5);
          this.qu14o4.position(1137,625.5);  
          
      this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
      }

      if(qCheck === 15){
  
        this.qu15.position(10,80);
          this.qu15o1.position(417,208.5);
          this.qu15o3.position(417,625.5);
          this.qu15o2.position(1137,208.5);
          this.qu15o4.position(1137,625.5);  
          
      this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
      }
    }); 

// ======================================
//                  qu1
// ======================================

this.qu1o1.mousePressed(()=>{
  qCheck = 2;
  q1 = "wrong";
  

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 

this.qu1o2.mousePressed(()=>{
  qCheck = 2;
  q1 = "right";
  score += 1;

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 

this.qu1o3.mousePressed(()=>{
  qCheck = 2;
  q1 = "wrong";
  

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 

this.qu1o4.mousePressed(()=>{
  qCheck = 2;
  q1 = "wrong";
  

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  this.qu2o3.position(417,625.5);
  this.qu2o3.style('width', '150px');
  this.qu2o3.style('height', '50px');
  this.qu2o3.style('background', 'lightblue');
  this.qu2o3.style('color', rgb(240,0,0));
  this.qu2o3.style('font-size', '17.5px');
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  this.qu2o4.position(1137,625.5);
  this.qu2o4.style('width', '150px');
  this.qu2o4.style('height', '50px');
  this.qu2o4.style('background', 'lightblue');   
  this.qu2o4.style('color', rgb(240,0,0));
  this.qu2o4.style('font-size', '17.5px');

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
      this.qu1o3.hide();
      this.qu1o4.hide();
}); 


// ======================================
//                  qu2
// ======================================

this.qu2o1.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

this.qu2o2.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

this.qu2o3.mousePressed(()=>{
  qCheck = 3;
  q2 = "right";
  score += 1;

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

this.qu2o4.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  this.qu3o3.position(417,625.5);
  this.qu3o3.style('width', '150px');
  this.qu3o3.style('height', '50px');
  this.qu3o3.style('background', 'lightblue');
  this.qu3o3.style('color', rgb(240,0,0));
  this.qu3o3.style('font-size', '17.5px');
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  this.qu3o4.position(1137,625.5);
  this.qu3o4.style('width', '150px');
  this.qu3o4.style('height', '50px');
  this.qu3o4.style('background', 'lightblue');   
  this.qu3o4.style('color', rgb(240,0,0));
  this.qu3o4.style('font-size', '17.5px');

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      this.qu2o3.hide();
      this.qu2o4.hide();
}); 

// ======================================
//                  qu3
// ======================================

this.qu3o1.mousePressed(()=>{
  qCheck = 4;
  q3 = "right";
  score += 1;

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

this.qu3o2.mousePressed(()=>{
  qCheck = 4;
  q3 = "wrong";
  

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

this.qu3o3.mousePressed(()=>{
  qCheck = 4;
  q3 = "wrong";
  

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

this.qu3o4.mousePressed(()=>{
  qCheck = 4;
  q3 = "wrong";
  

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  this.qu4o3.position(417,625.5);
  this.qu4o3.style('width', '150px');
  this.qu4o3.style('height', '50px');
  this.qu4o3.style('background', 'lightblue');
  this.qu4o3.style('color', rgb(240,0,0));
  this.qu4o3.style('font-size', '17.5px');
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  this.qu4o4.position(1137,625.5);
  this.qu4o4.style('width', '150px');
  this.qu4o4.style('height', '50px');
  this.qu4o4.style('background', 'lightblue');   
  this.qu4o4.style('color', rgb(240,0,0));
  this.qu4o4.style('font-size', '17.5px');

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      this.qu3o3.hide();
      this.qu3o4.hide();
}); 

// ======================================
//                  qu4
// ======================================

this.qu4o1.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o2.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o3.mousePressed(()=>{
  qCheck = 5;
  q4 = "right";
  score += 1;

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o4.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

// ======================================
//                  qu5
// ======================================

this.qu5o1.mousePressed(()=>{
  qCheck = 6;
  q5 = "right";
  score += 1;

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o2.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o3.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o4.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

// ======================================
//                  qu6
// ======================================

this.qu6o1.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

this.qu6o2.mousePressed(()=>{
  qCheck = 7;
  q6 = "right";
  score += 1;

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 


this.qu6o3.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

this.qu6o4.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

// ======================================
//                  qu7
// ======================================

this.qu7o1.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o2.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o3.mousePressed(()=>{
  qCheck = 8;
  q7 = "right";
  score += 1;

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o4.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

// ======================================
//                  qu8
// ======================================

this.qu8o1.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o2.mousePressed(()=>{
  qCheck = 9;
  q8 = "right";
  score += 1;

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o3.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o4.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

// ======================================
//                  qu9
// ======================================

this.qu9o1.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o2.mousePressed(()=>{
  qCheck = 10;
  q9 = "right";
  score += 1;

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o3.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o4.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

// ======================================
//                  qu10
// ======================================

this.qu10o1.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o2.mousePressed(()=>{
  qCheck = 11;
  q10 = "right";
  score += 1;

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o3.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o4.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

// ======================================
//                  qu11
// ======================================

this.qu11o1.mousePressed(()=>{
  qCheck = 12;
  q11 = "right";
  score += 1;

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o2.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o3.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o4.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

// ======================================
//                  qu12
// ======================================

this.qu12o1.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o2.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o3.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
    this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o4.mousePressed(()=>{
  qCheck = 13;
  q12 = "right";
  score += 1;

  this.qu13.position(10,80);
  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

// ======================================
//                  qu13
// ======================================

this.qu13o1.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o2.mousePressed(()=>{
  qCheck = 14;
  q13 = "right";
  score += 1;

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o3.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o4.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

// ======================================
//                  qu14
// ======================================

this.qu14o1.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o2.mousePressed(()=>{
  qCheck = 15;
  q14 = "right";
  score += 1;

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o3.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o4.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

// ======================================
//                  qu15
// ======================================

this.qu15o1.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  
  this.tellingScore.html(name + ", you have scored " + score + "/15");
  this.tellingScore.position(displayWidth/2 - 225,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  this.tellingScore.style('color', 'blue');

  this.tellingAboutUpdates.html(name + ", please stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions. Side by side this quiz will be updated time to time with the questions of many upcoming festivals.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "grey");
  this.tellingAboutUpdates.style('outline', "grey");
  this.tellingAboutUpdates.style('font-family', "TimesNewRoman");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o2.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  
  this.tellingScore.html(name + ", you have scored " + score + "/15");
  this.tellingScore.position(displayWidth/2 - 225,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  this.tellingScore.style('color', 'blue');

  this.tellingAboutUpdates.html(name + ", please stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions. Side by side this quiz will be updated time to time with the questions of many upcoming festivals.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "grey");
  this.tellingAboutUpdates.style('outline', "grey");
  this.tellingAboutUpdates.style('font-family', "TimesNewRoman");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o3.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  
  this.tellingScore.html(name + ", you have scored " + score + "/15");
  this.tellingScore.position(displayWidth/2 - 225,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  this.tellingScore.style('color', 'blue');

  this.tellingAboutUpdates.html(name + ", please stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions. Side by side this quiz will be updated time to time with the questions of many upcoming festivals.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "grey");
  this.tellingAboutUpdates.style('outline', "grey");
  this.tellingAboutUpdates.style('font-family', "TimesNewRoman");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o4.mousePressed(()=>{
  qCheck = 16;
  q15 = "right";
  score += 1;
  this.tellingScore.html(name + ", you have scored " + score + "/15");
  this.tellingScore.position(displayWidth/2 - 225,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  this.tellingScore.style('color', 'blue');

  this.tellingAboutUpdates.html(name + ", please stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions. Side by side this quiz will be updated time to time with the questions of many upcoming festivals.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "grey");
  this.tellingAboutUpdates.style('outline', "grey");
  this.tellingAboutUpdates.style('font-family', "TimesNewRoman");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide()
      this.qu15o4.hide();
});


//console.log(qCheck);












  }
  

}
