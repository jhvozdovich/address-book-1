//------Buiseness Logic for Address book-----

//-------Business Logic for Contact
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
//-------UI Logic-------
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var phoneNumber = $("input#number").val();
    var newContact = new Contact(firstName, lastName, phoneNumber);
    console.log(newContact.fullName());
  });
});