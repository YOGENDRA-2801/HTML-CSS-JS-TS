let headEl = document.querySelector('h2'); // type is HTMLHeadingElement 
console.log(headEl.classList);
let headCls = document.querySelector('.headStyle');
console.log(headCls.textContent);
let anchEl = document.querySelector('a'); // type is HTMLAnchorElement 
console.log(anchEl?.href);
let ancCls = document.querySelector('.hypStyle'); // type is Element -- as class can be applied to any element
export {};
// console.log(ancCls.target);  Error -- as target is specific prop of 'HTMLAnchorElement' not 'Element' hence typecase is required
// querySelector => Returns the first element that is a descendant of node that matches selectors.
// ! => Non-null Assertion Operator => TypeScript को force कर रहे हो कि "मुझे पक्का पता है यह element exist करता है
// ? => Optional Chaining Operator => अगर variable null नहीं है तभी textContent access करो Returns undefined if null
// as => Type Assertion => यह TypeScript को force कर बताता है कि "मुझे पता है यह element actually कौन सा specific element type है
//# sourceMappingURL=ts-dom.js.map