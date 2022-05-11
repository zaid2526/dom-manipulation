// examin the documents object

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
