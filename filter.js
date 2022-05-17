var filter=document.getElementById('filter');
//var itemList=document.getElementById('items'); for without discription..
var itemList=document.getElementById('dItems');

filter.addEventListener('keyup',filterItem);
function filterItem(e){
    var text=e.target.value.toLowerCase()
    //var items=itemList.getElementsByClassName('list-group-item')); also work
    //collecting lis....
    var items=itemList.getElementsByTagName('li');//it returns htmlCollection
    // convert into array.....
    Array.from(items).forEach(function(item){
        //li has 3 child 1)text, 2)delete Button and 3) edit button
        // so we get the first child
        var itemName=item.firstElementChild.textContent;
        var itemDesc=item.lastElementChild.textContent; // filter with description
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemDesc.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none'
        }
    });
    

}

/*---- adding deleting the item----*/

var ul=document.querySelector('#dItems');

var button=document.querySelector('input[type=submit]');


button.addEventListener('click',addItem);

function addItem(e){
    e.preventDefault();
    var newItemText=document.getElementById('item-input')
    var newItemDescText=document.getElementById('item-desc')
    if(newItemText.value!=''){

        let li=document.createElement('li')
        li.classList.add('list-group-item');
        // to add all children in li and then li append to ul


        var newItem=document.createElement('dt');
        newItem.appendChild(document.createTextNode(newItemText.value));
        //console.log(newItem);
        li.appendChild(newItem);

        

        var editBtn=document.createElement('button');
        editBtn.className='btn btn-warning float-right edit';
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);

        var deletebtn=document.createElement('button');
        deletebtn.className='btn btn-danger float-right mr-2 delete';
        deletebtn.appendChild(document.createTextNode('x'));
        //ul.insertAdjacentElement('beforebegin',newItem)
        li.appendChild(deletebtn);

        //appending all the element as li's child..
        
        var newItemDesc=document.createElement('dd');
        newItemDesc.appendChild(document.createTextNode(newItemDescText.value))
        console.log(newItemDesc);
        li.appendChild(newItemDesc);


        
        console.log(ul);
        //ul.insertAdjacentElement('beforebegin',li)
        ul.appendChild(li);
        console.log("after ",ul)

        //clearing inout field....
        newItemText.value='';
        newItemDescText.value='';

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



// filter only with item name from input field
/*
let inputItem=document.querySelector('#item-input')
inputItem.addEventListener('keyup',filterItemByInput);

function filterItemByInput(e){
    var text=e.target.value.toLowerCase();
    //console.log(text);
    var items=itemList.getElementsByTagName('li');//it returns htmlCollection
    console.log(items);
    // convert into array.....
    Array.from(items).forEach(function(item){
        //li has 3 child 1)text, 2)delete Button and 3) edit button
        // so we get the first child
        var itemName=item.firstElementChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none'
        }
    });
}
*/