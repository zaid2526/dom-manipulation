//click	The event occurs when the user clicks on an element
//contextmenu	The event occurs when the user right-clicks on an element to open a context menu
//dblclick	The event occurs when the user double-clicks on an element
//mousedown	The event occurs when the user presses a mouse button over an element
//mouseenter	The event occurs when the pointer is moved onto an element
//mouseleave	The event occurs when the pointer is moved out of an element
//mousemove	The event occurs when the pointer is moving while it is over an element
//mouseout	The event occurs when a user moves the mouse pointer out of an element, or out of one of its children
//mouseover	The event occurs when the pointer is moved onto an element, or onto one of its children
//mouseup	The event occurs when a user releases a mouse button over an element


var box=document.getElementById('box');

box.addEventListener('mousemove',runEvent);
function runEvent(e){
    //console.log(e.type);
    //console.log(e.offsetX)
    //box.style.background=`rgb(${e.offsetY}, ${e.offsetX} ,40 )`
    //console.log(e.type);
    //console.log(e.target.value);
    //console.log('data',e.data);

}
var inputitem=document.querySelector('input[type=text]');
inputitem.addEventListener('blur',runEvent);

//keydown	The event occurs when the user is pressing a key
//keypress	The event occurs when the user presses a key
//keyup	The event occurs when the user releases a key
inputitem.addEventListener('keydown',runEvent)
inputitem.addEventListener('input',runEvent)
console.log("in",inputitem.value);


//Event	Description
//blur	The event occurs when an element loses focus
//focus	The event occurs when an element gets focus
//focusin	The event occurs when an element is about to get focus
//focusout	The event occurs when an element is about to lose focus

var ul=document.querySelector('#items');

console.log(ul);

var button=document.querySelector('input[type=submit]');


button.addEventListener('click',addElement);

function addElement(e){
    e.preventDefault()
    var newItemText=document.querySelector('input[type=text]')
    if(newItemText.value!=''){
        var newItem=document.createElement('li');
        newItem.appendChild(document.createTextNode(newItemText.value));
        newItem.classList.add('list-group-item');
        //console.log(newItem);

        var editBtn=document.createElement('button');
        editBtn.className='btn btn-warning float-right edit';
        editBtn.appendChild(document.createTextNode('Edit'))
        newItem.appendChild(editBtn);

        var deletebtn=document.createElement('button');
        deletebtn.className='btn btn-danger float-right mr-2 delete';
        deletebtn.appendChild(document.createTextNode('x'));
        //ul.insertAdjacentElement('beforebegin',newItem)
        
        newItem.appendChild(deletebtn);

        ul.appendChild(newItem);

        newItemText.value=''

    }
    else{
        alert('plz enter some value....');
    }
    
}

ul.addEventListener('click',deleteItem);
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure..?')){
            var li=e.target.parentElement;
            //li.remove(); it also work
            ul.removeChild(li)
        }
        console.log("delete");
    }
    
}