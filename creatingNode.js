const itemList=document.querySelector('#items');
console.log(itemList);
console.log(itemList.parentNode);
console.log(itemList.parentElement);
itemList.parentElement.style.background='#f4f4f4';
//itemList.parentNode.style.background='grey';

console.log(itemList.lastElementChild);
console.log(itemList.lastChild);

// createchild

console.log(itemList.firstElementChild);
console.log(itemList.firstChild);

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
// if have then return otherwise return null

console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);// it return whitespaces
//if exist... so we prefer to use previousElementSibling

//createElement.........
var newDiv=document.createElement('div');
newDiv.className='hello'
newDiv.id='hello1';
//newDiv.textContent='Hello World..!';
// we add text node using appendchild after creating textNode

newDiv.setAttribute('title','hello div...');

console.log(newDiv);

// createTextNode.......
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

// now addinhg the created node into our html file
//inside the header and bofore the h1 tag or item Lister..

const container=document.querySelector('header .container');

const h1=document.querySelector('header h1')

// inserting the element..
container.insertBefore(newDiv,h1)
//1. first parameter(ex-- newDiv) to be inserted, before..
// second parameter(ex--h1 tag)

const ul=document.querySelector('#items');

const newItem=document.createElement('li');
newItem.appendChild(document.createTextNode('new item add before the item1'));

const firstItem=ul.firstElementChild;
newItem.classList.add('list-group-item')
//ul.insertBefore(newDiv,firstItem);
ul.insertBefore(newItem,firstItem);

