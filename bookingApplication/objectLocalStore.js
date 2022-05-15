var submitButton=document.getElementById('btn');
var refButton=document.getElementById('refbtn');



submitButton.addEventListener('click',runEvent);
//refButton.addEventListener('click',getDetailEvent);

function runEvent(e){
    console.log(e.target);
    let userDetails={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
    }
    //let userDetailsSerialized=JSON.stringify(userDetails);

    console.log(userDetails);
    //object directly does not send to the browser.. it send into string formm
    // or readable form, the process called serialization..
    // with the help of JSON.stringify(object)
    localStorage.setItem('userDtails',JSON.stringify(userDetails));

    //clear input field..
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
}
var lis=document.getElementsByClassName('items');
console.log(window);
window.onload = () => {
    let userDetails=JSON.parse(localStorage.getItem('userDtails'))
    console.log(userDetails);

    lis[0].innerHTML=userDetails.name;
    lis[1].innerHTML=userDetails.email;
    lis[2].innerHTML=userDetails.phone;

  };