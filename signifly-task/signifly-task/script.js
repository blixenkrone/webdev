//create firebase reference
var dbRef = new Firebase("https://contactb.firebaseio.com/");
var contactsRef = dbRef.child('contacts')

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#contacts').innerHTML += (contactHtmlFromObject(snap.val()));
});

//save contact
document.querySelector('.addValue').addEventListener("click", function( event ) {
  event.preventDefault();
  if( document.querySelector('#name').value != '' || document.querySelector('#email').value != '' ){
    contactsRef
      .push({
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        location: {
          city: document.querySelector('#city').value,
          state: document.querySelector('#state').value,
          zip: document.querySelector('#zip').value
        }
      })
      contactForm.reset();
  } else {
    alert('Please fill at lease name or email!');
  }
}, false);
