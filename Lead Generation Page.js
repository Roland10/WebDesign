
function checkPassword(form) {
  var password = form.password.value;
  var repeatPassword = form.repeatPassword.value;

 //Not entered//
  if (password=="")
    alert("Please enter password");

  //entered //
  else if (repeatPassword== "")
    alert("Please enter confirm password");

  //Not Same//
  else if (password != repeatPassword )
    alert ("please enter password");

  //Same //
    else
      alert("Thank you");
      return true ;

}
