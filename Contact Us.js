function ValidateForm()

{

	 
  if (document.forms["myForm"]["first name"].value==null || document.forms["myForm"]["first name"].value=="") 
  
   { 
  
     alert("First Name must be filled out");
  
     return false;
	}
	
   
   if (document.forms["myForm"]["last name"].value==null || document.forms["myForm"]["last name"].value=="")
  
   { 
  
     alert("Last Name must be filled out");
  
     return false;
  
   }

  if (document.forms["myForm"]["email"].value==null || document.forms["myForm"]["email"].value=="")
  
   { 
  
     alert("Email must be filled out");
  
     return false;
  
   }
   
   if (document.forms["myForm"]["phone number"].value==null || document.forms["myForm"]["phone number"].value=="")
  
   { 
  
     alert("Phone Number must be filled out");
  
     return false;
  
   }

  return true;

}
