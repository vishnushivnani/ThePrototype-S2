var form;
var fathersAge
var mothersAge
var cellNo
var FathersName
var MothersName
var appState 
var ChildName
var ChildsAge
var ChildsWeight
var ChildsHeight
var ChildsGender
var btnState = "unhidden"
var userName
var UserName
var element1;
var element2;
var element3;
var element4;
var element5;
var element6;
var element7;
var menuButton
var ParentDetailsButton
var LeaderBoardButton

var database = firebase.database();
function setup(){
    createCanvas(windowWidth,windowHeight)
   form = new Form();
    element1 = createElement();
    element2 = createElement();
    element3 = createElement();
    element4 = createElement();
    element5 = createElement();
    element6 = createElement();
    element7 = createElement();

  
   }
   

function draw(){
    var col = color(random(0,255),random(0,255),random(0,255))
    background('#f5ff39');
    form.display()
    if(appState==="Home"&&btnState!=="hidden"){
     
        btnState = "hidden"
      }
      if(appState==="Home"){
         
        database.ref(userName).update({
            userName:userName,
            
          
        })
      background('#00bfa6')
        //console.log(userName)
        element1.html("Welcome " +  userName)
        element1.position(50,height/2-250)
        element1.style('color','black')
        element1.style('font-size','30px')

        element2.html(ChildName + " 's  Height = "+ChildsHeight )
        element2.position(50,height/2-50)
      //  element2.position(50,height/2-150)
        element2.style('color','black')
        element2.style('font-size','30px')

        element3.html(ChildName +"'s  Weight = "+ ChildsWeight)
        element3.position(50,height/2-0)
        element3.style('color','black')
        element3.style('font-size','30px')

        element5.html(ChildName +"'s  Age = "+ ChildsAge)
        element5.position(50,height/2+50)
        element5.style('color','black')
        element5.style('font-size','30px')


    if(ChildsWeight>=21&&ChildsAge===6){
        element4.html("Nutrition Status : Fully nutritious")
        element4.position(width/2+200,height/2-0)
        element4.style('color','black')
        element4.style('font-size','30px')
                      

    }
    if(ChildsWeight<=21&&ChildsAge===6){
        element4.html("Nutrition Status :  SomeWards Less nutritious")
        element4.position(width/2+200,height/2-0)
        element4.style('color','black')
        element4.style('font-size','30px')
                      

    }
    if(ChildsWeight<=11&&ChildsAge===6){
        element4.html("Nutrition Status : Malnutritious")
        element4.position(width/2+200,height/2-0)
        element4.style('color','black')
        element4.style('font-size','30px')
                      

    }

    element7.html('For more info of app refer to Menu>Info')
    element7.position(width/2,height/2-250)
    element7.style('color','black')
    element7.style('font-size','30px')
    if(appState==='Home'){
        menuButton = createButton('menu')
        menuButton.position(50,height/2-250)
        menuButton.mousePressed(()=>{
         element1.hide();
         element2.hide();
         element3.hide();
         element4.hide();
         element5.hide();
            ParentDetailsButton = createButton('ParentDetails');
            ParentDetailsButton.position(50,height/2-200)
            LeaderBoardButton = createButton('LeaderBoard')
            LeaderBoardButton.position(50,height/2-150)
             var MoreInfo = createButton('Info')
             MoreInfo.position(50,height/2-50)
             MoreInfo.mousePressed(()=>{
                 ParentDetailsButton.hide();
                 LeaderBoardButton.hide();
                 MoreInfo.hide();
                 element6.html('This app will sync data of the childs Weight and Height and the make decision as the child is nutritious or not by counting BMI as the days increases the weight of the body will be increasing we will also show some of tips to increase health and height by refering to a prediatation tips for health and natural food every age will have a specific weight and height average value if limit exeeds then the child is obbessed if = to the average then nutritious if < average then malNutritious will also come through a leaderBoard Setup that will help for increasing competition among the parents / new parents will also give some tips for all the diseases that occurs to the baby the procurement and also what to dos and doesnts an app that will show how to treat a baby for new parents and also takes care for the babies health by arranging a time table to make baby eat and sleep (TILL AGE 5)after that the app will take care about the babies weight and height and disease procurement This will stop the country to get the malnutritious future   ')
                 element6.position(150,height/2-100);
                 element6.style('color','black')
                 element6.style('font-size','30px')
                 var cancel  = createButton('cancel')
                 cancel.position(150,150)
                 cancel.mousePressed(()=>{
                     element6.hide()
                     element1.show();
                     element2.show();
                     element3.show();
                     element4.show();
                     element5.show();
                 })
             })
        })
    }
}
   
    drawSprites();
}
