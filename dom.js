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
addItem.innerHTML='<h1> Add Item</h1>';
addItem.style.color='green'