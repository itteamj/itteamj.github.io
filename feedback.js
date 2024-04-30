function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["femail"].value;
  let z = document.forms["myForm"]["ffeedback"].value;

  if (x == "") {
      let errorMessage = document.createElement('div');
      errorMessage.textContent = "Please enter your name";
      document.getElementById('nameError').appendChild(errorMessage);
      return false;
  }

  if (y == "") {
      let errorMessage = document.createElement('div');
      errorMessage.textContent = "Please enter your email";
      document.getElementById('emailError').appendChild(errorMessage);
      return false;
  }

  if (z == "") {
      let errorMessage = document.createElement('div');
      errorMessage.textContent = "Please enter your feedback";
      document.getElementById('feedbackError').appendChild(errorMessage);
      return false;
  }

  // If all fields are filled, you can redirect or take other action here
  // Example: window.location.href = "index.html";
  return true;
}



    /*
  function validateForm() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["femail"].value;
  let z = document.forms["myForm"]["ffeedback"].value;
 
  if (x == "") {
   
    alert("inter your name");
    return false;}
  if (y== "") {
    alert("inter your email");
    return false;}
  
  if (z == "") {
    alert("inter your feedback");
    return false;}
  else {
  <a href="index.html">goback</a>}
  
  
  
  }*/