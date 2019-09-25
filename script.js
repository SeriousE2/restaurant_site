alert("Please enable Javascript on your browser for optimal use.")
var addInfo = document.getElementById("formTextArea");
var radioBtns = document.getElementsByName("gridRadios");
var checkBoxValid = document.getElementsByName("checkbox");
var formRequest=[];

function validate() {
    event.preventDefault();
    //if the name has blank alert
    if( document.getElementById("inputName3").value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }//if the email is blank alert user
    if( document.getElementById("inputEmail3").value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }//if the phone number is blank, or not a number, some countries have more than 10 digits
    if( document.getElementById("validationCustom08").value == "" || isNaN( document.getElementById("validationCustom08").value ) ) {
       alert( "Please provide a phone number in the format ##########." );
    //    document.getElementById("validationCustom08").focus() ;
       return false;
    }//
    if( document.getElementById("dropDownSelect").value == "1" ) {
       alert( "Please select from the Dropdown Menu!" );
       return false;
    }
    //call the function that validates the radio buttons 
    if( radioValidation()) {
        return false;
     }
     //call the function that validates the checkboxes
     if( checkBoxValidation()) {
        return false;
     }
    return( true );
 }

 //create a function that loops through the radio buttons and see if its check. if either is not checked then alert
 function radioValidation() {
     var yesNo = false; 
     for(var i = 0; i < radioBtns.length; i++){
         if(radioBtns[i].checked == true){
             yesNo = true;
         }
     } if (!yesNo){
         alert("Please answer if you have been to this restaurant!")
         return false; 
     }
 }
 
  //create a function that loops through the radio buttons and see if its check. if either is not checked then alert
 function checkBoxValidation() {
    var select = false; 
    for(var i = 0; i < checkBoxValid.length; i++){
        if(checkBoxValid[i].checked == true){
            select = true;
        }
    } if (!select){
        alert("Please select the days we can best reach you!")
        return false; 
    }
}

