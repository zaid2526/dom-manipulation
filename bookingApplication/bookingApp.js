var submitButton=document.getElementById('btn');
submitButton.addEventListener('click',runEvent);
function runEvent(e){
    console.log(e.target);
    var name=document.getElementById('name')
    var email=document.getElementById('email')
    var phone=document.getElementById('phone')
    //var user=document.querySelector('#my-form').getElementsByTagName('input[type=text]');
    //console.log(user);
    console.log(document.getElementById('name').value);
    localStorage.setItem(`name${name.value}`,`${name.value}`)
    localStorage.setItem(`email${email.value}`,`${email.value}`)
    localStorage.setItem(`phone${phone.value}`,`${phone.value}`)
    //clear input field..
    name.value='';
    email.value='';
    phone.value='';
    
}