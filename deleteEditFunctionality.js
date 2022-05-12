var ul=document.querySelector('#items');

//console.log(ul);

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