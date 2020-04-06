//------Buiseness Logic for Address book-----
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId; 
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; this.contact.length; i++) {
  if (this.contacts[i]) {
    if (this.contacts[i].id == id) {
      return this.contacts[i];
    }
  }
};
  return false;
}
AddressBook.prototype.deleteContact = function(id) {
  for (var i= 0; i< this.contacts.length;i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;

      }
    }
  };
  return false;
}

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