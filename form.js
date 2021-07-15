class Form{
    constructor(){
        this.greetings = createElement() 
        this.input1 = createInput();
        this.h1 = createElement();
        this.element1 = createElement();
        this.element2 = createElement();
        this.input2 = createInput();
        this.element3 = createElement();
        this.element4 = createElement();
        this.fage = createInput();
        this.mage = createInput();
        this.input3 = createInput();
        this.element5 = createElement();
        this.element6 = createElement();
        this.element7 = createElement();
        this.element8 = createElement();
        this.element9 = createElement();
        this.input8 = createInput();
        this.submitButton = createButton();
        this.element10 = createElement();
        this.element11 = createElement();
        this.element12 = createElement();
        this.element13 = createElement();
        this.element14 = createElement();
        this.h2 = createElement();
       
    }
    display(){
        this.greetings.html('Welcome')
        this.greetings.position(width/2-150,10)
        this.greetings.style('color','black')
        this.greetings.style('font-size','50px')

        this.h1.html("Parents Details :")
        this.h1.position(width/2-150,100)
        this.h1.style('font-size','30px')



        this.input1.position(width/2-300,height/2-150)
        this.input1.style('background','#f5ff38')
        this.input1.style('border-color','black')
     //   this.input1.style('border-radius','20px')
        this.input1.size(190,30)

        this.element1.html("Father's Name :")
        this.element1.position(50,height/2-150)
        this.element1.style('color','black')
        this.element1.style('font-size','30px')
      
        this.element2.html("Mother's Name :")
        this.element2.position(50,height/2-50)
        this.element2.style('color','black')
        this.element2.style('font-size','30px')

        this.input2.position(width/2-300,height/2-50);
        this.input2.style('background','#f5ff38')
        this.input2.style('border-color','black')
     //   this.input1.style('border-radius','20px')
        this.input2.size(190,30)



        this.input8.position(width/2-100,height/2-250);
        this.input8.style('background','#f5ff38')
        this.input8.style('border-color','black')
     //   this.input1.style('border-radius','20px')
        this.input8.size(190,30)

        this.element12.html("User Name :")
        this.element12.position(width/2-300,height/2-250)
        this.element12.style('color','black')
        this.element12.style('font-size','30px')
      

        this.element3.position(width/2+80,height/2-150)
        this.element3.html("Age :")
        this.element3.style('color','black')
        this.element3.style('font-size','30px')

        this.element4.position(width/2+80,height/2-50)
        this.element4.html("Age :")
        this.element4.style('color','black')
        this.element4.style('font-size','30px')


        this.fage.position(width/2+200,height/2-150)
        this.fage.style('background','#f5ff38')
        this.fage.style('border-color','black')
     //   this.input1.style('border-radius','20px')
        this.fage.size(190,30)

        this.input3.position(width/2+100,height/2+100)
        this.input3.style('background','#f5ff38')
        this.input3.style('border-color','black')
     //   this.input1.style('border-radius','20px')
        this.input3.size(190,30)

        this.element5.position(width/2-70,height/2+100)
        this.element5.html("Cell No :")
        this.element5.style('color','black')
        this.element5.style('font-size','30px')




        this.mage.position(width/2+200,height/2-50)
        this.mage.style('background','#f5ff38')
        this.mage.style('border-color','black')
     //   this.input1.style('border-radius','20px')
        this.mage.size(190,30)

        this.submitButton.position(width/2-80,height/2+200)
        this.submitButton.style('background','#1fecd1')
        this.submitButton.style('border-radius','50px')
        this.submitButton.style('border-color','black')
        this.submitButton.html('Submit')
        this.submitButton.size(70,50)
        this.submitButton.mousePressed(()=>{
            if(this.input1.value!==null&&this.input3.value!==null&&this.input2.value!==null){
                this.form2();

            }
        })
      
    }
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.greetings.hide();
        this.submitButton.hide();
        this.mage.hide();
        this.fage.hide();
        this.element1.hide();
        this.element2.hide();
        this.element3.hide();
        this.element4.hide();
        this.element5.hide();
        this.h1.hide();
        this.input8.hide();
        this.element12.hide();
    }
    form2(){
        this.hide()
        this.input4 = createInput();
        this.input5 = createInput();
        this.input6 = createInput();
        this.input7 = createInput();
        this.input10 = createInput();
        FathersName = this.input1.value();
        MothersName = this.input2.value();
        fathersAge = this.fage.value();
        mothersAge = this.mage.value();
        cellNo = this.input3.value();
         userName = this.input8.value();
        database.ref(userName).set({
            FathersName:FathersName,
            fathersAge:fathersAge,
            MothersName:MothersName,
            mothersAge:mothersAge,
            cellNo:cellNo,
            UserName:userName

        })
        this.input9 = createInput()
        this.input9.position(width/2+200,height/2+150)
        this.input9.style('background','#f5ff38')
        this.input9.style('border-color','black')
     //   this.input1.style('border-radius','20px')
        this.input9.size(190,30)

      
      
        console.log(fathersAge,FathersName,MothersName,mothersAge,cellNo)
     
        
      this.element6.html("Child's Name :")
      this.element6.position(50,height/2-150)
      this.element6.style('color','black')
      this.element6.style('font-size','30px')
    
      this.element7.html("Height :  ft")
      this.element7.position(50,height/2-50)
      this.element7.style('color','black')
      this.element7.style('font-size','30px')


      this.element8.position(width/2+80,height/2-150)
      this.element8.html("Weight")
      this.element8.style('color','black')
      this.element8.style('font-size','30px')

      this.element9.position(width/2-280,height/2-50)
      this.element9.html("In")
      this.element9.style('color','black')
      this.element9.style('font-size','30px')

      this.input4.position(width/2-300,height/2-150)
      this.input4.style('background','#f5ff38')
      this.input4.style('border-color','black')
   //   this.input1.style('border-radius','20px')
      this.input4.size(190,30)


      this.input5.position(width/2-480,height/2-50);
      this.input5.style('background','#f5ff38')
      this.input5.style('border-color','black')
   //   this.input1.style('border-radius','20px')
      this.input5.size(90,30)

      this.input6.position(width/2+200,height/2-150)
      this.input6.style('background','#f5ff38')
      this.input6.style('border-color','black')
   //   this.input1.style('border-radius','20px')
      this.input6.size(190,30)

      this.input10.position(width/2-300,height/2+150)
      this.input10.style('background','#f5ff38')
      this.input10.style('border-color','black')
   //   this.inp10t1.style('border-radius','20px')
      this.input10.size(190,30)


      this.input7.position(width/2-200,height/2-50)
      this.input7.style('background','#f5ff38')
      this.input7.style('border-color','black')
   //   this.input1.style('border-radius','20px')
      this.input7.size(90,30)

      
      this.element10.position(width/2+80,height/2-50)
      this.element10.html("Gender :")
      this.element10.style('color','black')
      this.element10.style('font-size','30px')
  
      this.element11.position(width/2+290,height/2-50)
      this.element11.html("/")
      this.element11.style('color','black')
      this.element11.style('font-size','30px')

      this.element13.html(' Confirm Username :')
      this.element13.position(width/2-50,height/2+145)
      this.element13.style('color','black')
      this.element13.style('font-size','30px')

      this.element14.html('Age :')
      this.element14.position(width/2-400,height/2+145)
      this.element14.style('color','black')
      this.element14.style('font-size','30px')

      this.h2.html("Child's Details :")
      this.h2.position(width/2-150,80)
      this.h2.style('font-size','30px')
  

      this.m    = createButton();
      this.f    = createButton();
       
    this.m.html("male");
    this.m.position(width/2+220,height/2-50)
    this.m.size(50,50)
    this.m.style('border-color','red');
    this.m.style('background','#1fecd1')
    this.m.mousePressed(()=>{
        this.f.hide();
        this.element10.html("Gender = ")
        this.submitButton2.show();
        this.element11.hide();
        
    })

    this.f.html("female");
    this.f.position(width/2+310,height/2-50)
    this.f.size(50,50)
    this.f.style('border-color','red');
    this.f.style('background','#1fecd1')
    this.f.mousePressed(()=>{
        this.m.hide();
        this.element10.html("Gender = ")
        this.element11.hide();
        this.submitButton2.show();
        
    })
    this.submitButton2 = createButton();
    this.submitButton2.hide();
    this.submitButton2.position(width/2-80,height/2+200)
    this.submitButton2.style('background','#1fecd1')
    this.submitButton2.style('border-radius','50px')
    this.submitButton2.style('border-color','black')
    this.submitButton2.html('Submit')
    this.submitButton2.size(70,50)
    this.submitButton2.mousePressed(()=>{
        database.ref(userName)
        if(userName===this.input9.value()){
            ChildName = this.input4.value()
            ChildsWeight = this.input6.value()
            ChildsHeight = this.input5.value()+"ft"+this.input7.value()+"in"
            ChildsAge = this.input10.value();
            database.ref(this.input9.value()).update({
                ChildsWeight:ChildsWeight,
                ChildsHeight:ChildsHeight,
                ChildsName:ChildName,
                ChildsAge:ChildsAge
            })
            appState = "Home";
            this.hide2();
        }else{
            alert("Enter Correct Username")
        }

  
     
    })

}
hide2(){
    this.element6.hide();
    this.element7.hide();
    this.element8.hide();
    this.element9.hide();
    this.element10.hide();
    this.element11.hide();
    this.element12.hide();
    this.element13.hide();
    this.element14.hide();
    this.h2.hide();
    this.input4.hide();
    this.input5.hide();
    this.input6.hide();
    this.input7.hide();
    this.input8.hide();
    this.input9.hide();
    this.input10.hide();
    this.m.hide();
    this.submitButton2.hide();
    this.f.hide()
;}
}