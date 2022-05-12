// examin the documents object
/*
console.log(document);
console.log(document.all);
console.log(document.doctype);
console.log(document.documentElement);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);

document.all[10].textContent=123;//this is not the way..
// if we add any element, index of this element may be changes.

*/

//getElemenById
console.log(document.getElementById('header-title'));
let headerTitle=document.getElementById('header-title');
console.log(headerTitle);
console.log(headerTitle.value);
headerTitle.textContent='hello';
headerTitle.innerText='new action'
// the only diffrence bw these is....
// textContent does not take care of style attribute of element
// while innerText take care of style attribute of element

headerTitle.innerHTML="<h3>hello</h3>"
//innerHTML does not change existing element,
//it puuting the content inside  the element
//example... <h1 id="header-title"> <h3>hello</h3></h1>

const mainHeader=document.getElementById('main-header');
mainHeader.style.borderBottom='solid 4px black';

//const addItem=document.getElementsByClassName('title');
const addItem=document.querySelector('.title');
console.log(addItem);
//addItem.innerHTML='<h1> Add Item</h1>';
addItem.style.color='green'
addItem.style.fontWeight='bold';

// getElementByClass.......
/*
 let items=document.getElementsByClassName('list-group-item');
 console.log(items);
 console.log(items[2]);
 items[2].style.background='green';

 //it giver error...
 //items.style.fontweight='bold';
 
 // we need to apply loop because items is a htmla collection
 // or similar to array but not array .. forEach() not work...
 
 
 for(item of items){
     console.log("se",item);
     item.style.fontWeight='bold';

 }
document.getElementById('by-class').textContent=`length of list for getElementByClassName is ${items.length}`
*/
 //getElementByTageName...
 /*
 let li=document.getElementsByTagName('li');
 console.log(li);
 console.log(li[2]);
 li[2].style.background='green';
 for(liItem of li){
     console.log("se",liItem);
     liItem.style.fontWeight='bold';

 }
 document.getElementById('by-tag').textContent=`length of list for getElementByTagName is ${li.length}`
*/
 //querySelector......
 
 let header=document.querySelector('#main-header');
 header.style.borderBottom='solid 4px blue';
 
 let input=document.querySelector('input');
 input.value="hello";
 // there two input tag so, it pick the first element when queried
 //element present more than one...
 // for selecting other input tag element we just use css pseudo class

 let submit=document.querySelector('input[type=submit');
 submit.value='send';

let itemFirst=document.querySelector('.list-group-item');
itemFirst.style.background='orange';

let secondItem=document.querySelector('li:nth-child(2)');
//secondItem.style.background='green';
let thirdItem=document.querySelector('.list-group-item:nth-child(3)')
//thirdItem.style.display='none';

let lastChild=document.querySelector('.list-group-item:last-child')

//querySelectorAll
let itemList=document.querySelectorAll('.list-group-item');
itemList[1].style.color='green';
let odd=document.querySelectorAll('li:nth-child(odd)');

for(i=0;i<odd.length;i++){
    odd[i].style.background='green';
}
 