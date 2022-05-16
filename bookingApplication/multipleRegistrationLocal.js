var submitButton=document.getElementById('btn');
submitButton.addEventListener('click',runEvent);
function runEvent(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    
    //let test=JSON.parse(localStorage.getItem(`${document.getElementById('email').value}`));
    //console.log('test',test)
    let userDetails={
        "name":name,
        "email":email,
        "phone":phone
    }
    localStorage.setItem(`${email}`,JSON.stringify(userDetails));

    
    showOnScreen(userDetails)
    //clear input field..
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
    
}
window.addEventListener('DOMContentLoaded',()=>{
    let localStorageObj=localStorage;
    console.log('localStorageObj', localStorageObj);
    let localStorageObjKeys=Object.keys(localStorageObj)
    console.log(typeof localStorageObjKeys);
    for(i=0;i<localStorageObjKeys.length;i++){
        let key=localStorageObjKeys[i];
        //console.log(key);

        //let userDetailsString=localStorageObj[key];
        //let userDetailsObj=(userDetailsString)
        //console.log(userDetailsString);
        //console.log(userDetailsObj);

        let userDetails=JSON.parse(localStorage.getItem(key));
        //console.log(userDetails);

        showOnScreen(userDetails);


    }
    

});
function showOnScreen(user){
    //let name=document.getElementById('name').value;
    //let email=document.getElementById('email').value;
    //let phone=document.getElementById('phone').value;
    if(localStorage.getItem(user.email)){
        console.log('to be removed');
        removeFromScreen(user.email);
    }
    var userList=document.getElementById('users');
    //userList.innerHTML='';
    let li=document.createElement('li');
    li.className='list-group-item';
    li.id=`${user.email}`
    //let span=document.createElement('span');

    li.appendChild(document.createTextNode(`${user.name} ${user.email} ${user.phone}`));
    let dltBtn=document.createElement('button');
    dltBtn.className='btn btn-danger float-right btn-sm  dlt';
    dltBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dltBtn);
    let editBtn=document.createElement('button');
    editBtn.className='btn btn-warning float-right btn-sm mr-3 edit';
    editBtn.appendChild(document.createTextNode('edit'))
    
    li.appendChild(editBtn);

    userList.appendChild(li);
    

}
function removeFromScreen(emailId){
    let ul=document.getElementById('users');
    let nodeToBeDelted=document.getElementById(emailId);
    console.log(nodeToBeDelted);
    if(nodeToBeDelted){
        ul.removeChild(nodeToBeDelted);
    }
}
var userList=document.getElementById('users');
console.log(userList)
userList.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON'){
        let button=event.target;
        let li=button.parentNode;
        let ul=li.parentNode;
        if(button.textContent=="X"){
            //li.remove(); it also work.. both are same..
            //ul.removeChild(li);
            console.log(li);
            let userId=li.textContent.split(" ");

            console.log(userId[1]);
            localStorage.removeItem(userId[1])
            ul.removeChild(li)
            
        }else if(button.textContent=="edit"){
            console.log('edited......');
            console.log(li);
            let user=li.textContent.split(" ");
            document.getElementById('name').value=user[0];
            document.getElementById('email').value=user[1];
            document.getElementById('phone').value=user[2];
            //showOnScreen(user[1]);
            if(localStorage.getItem(user[1])){
                //removeFromScreen(user[1])
            }
        }

    }
})

/*
function runEvent(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;

    let userDetails=new Array();
    userDetails=JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')):[];
    if(userDetails.some((d)=>{ return d.email==email; })){
        alert("already registered")
    }else{
        userDetails.push({
            'name':name,
            'email':email,
            'phone':phone,
        });
        localStorage.setItem('users',JSON.stringify(userDetails))
    }
    
    
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

var refButton=document.getElementById('refbtn');

document.addEventListener('DOMContentLoaded', () => {
   // let btn = document.getElementById('btn');
   refButton.addEventListener('click', (e) => {
        // handle the click event
        //console.log('clicked',e.target);
        
        var userList=document.getElementById('users');
        userList.innerHTML='';
        let userDetails=JSON.parse(localStorage.getItem('users'));
        for(user of userDetails){
            let li=document.createElement('li');
            li.className='list-group-item';
            li.appendChild(document.createTextNode(`${user.name} ${user.email} ${user.phone}`));
            let dltBtn=document.createElement('button');
            dltBtn.className='btn btn-danger float-right btn-sm edit';
            dltBtn.appendChild(document.createTextNode('X'))
            li.appendChild(dltBtn)
            userList.appendChild(li);
            
        }
        
    });
});

//------- delete Button------ 
var userList=document.getElementById('users');
console.log(userList)
userList.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON'){
        let button=event.target;
        let li=button.parentNode;
        let ul=li.parentNode;
        if(button.textContent="X"){
            //li.remove(); it also work.. both are same..
            //ul.removeChild(li);
            console.log(li);
            let userId=li.textContent.split(" ");
            console.log(userId[1]);
            let userDetails=JSON.parse(localStorage.getItem('users'));
            console.log("user",typeof userDetails)
            for(user of userDetails){
                console.log(user.email);
                if(user.email===userId[1]){
                    console.log("userid Match",delete user);
                }
            }
            
        }

    }
})


window.onload = () => {
    //let userDetails=JSON.parse(localStorage.getItem('users'))
    //console.log("zaid");
    //console.log("zaid", userDetails);
    var userList=document.getElementById('users');
        userList.innerHTML='';
        let userDetails=JSON.parse(localStorage.getItem('users'));
        for(user of userDetails){
            let li=document.createElement('li');
            li.className='list-group-item';
            li.appendChild(document.createTextNode(`${user.name} ${user.email} ${user.phone}`));
            let dltBtn=document.createElement('button');
            dltBtn.className='btn btn-danger float-right btn-sm edit';
            dltBtn.appendChild(document.createTextNode('X'))
            li.appendChild(dltBtn)
            userList.appendChild(li);
            
        }
};

*/