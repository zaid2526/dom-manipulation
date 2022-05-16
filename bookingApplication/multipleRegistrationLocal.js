var submitButton=document.getElementById('btn');
submitButton.addEventListener('click',runEvent);
function runEvent(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;

    let userDetails=new Array();
    userDetails=JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')):[];
    userDetails.push({
        'name':name,
        'email':email,
        'phone':phone,
    });
    localStorage.setItem('users',JSON.stringify(userDetails))
    
    //object directly does not send to the browser.. it send into string formm
    // or readable form, the process called serialization..
    // with the help of JSON.stringify(object)

    //clear input field..
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
}
let userDetails=JSON.parse(localStorage.getItem('users'));

document.getElementById('demo').innerHTML=JSON.stringify(userDetails);
for(user of userDetails){
    console.log(user.name)
    console.log(user.email)
    console.log(user.phone)
    
}

var refButton=document.getElementById('refbtn');


document.addEventListener('DOMContentLoaded', () => {
   // let btn = document.getElementById('btn');
   refButton.addEventListener('click', (e) => {
        // handle the click event
        console.log('clicked',e.target);
        var userList=document.getElementById('users');
        userList.innerHTML='';
        let userDetails=JSON.parse(localStorage.getItem('users'));
        for(user of userDetails){
            let li=document.createElement('li');
            li.appendChild(document.createTextNode(`Name ${user.name}, Email ${user.email}, Phone ${user.phone}`));
            userList.appendChild(li);
        }
        

    });
});





//window.onload = () => {
    //let userDetails=JSON.parse(localStorage.getItem('users'))
    //console.log("zaid");
    //console.log("zaid", userDetails);
//};

