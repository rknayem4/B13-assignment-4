
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
*   getElementById() selects a single element by its ID, not requiring a CSS selector icon. getElementsByClassName() selects a multiple HTML Collection with that class name; there does not need to be anything like a CSS selector, like a dot or a hash( . #)single element by its ID, not requiring. querySelector() first matching element selector using CSS selector like '.class-name' and '#id-name' query selector provide a NodeList. querySelectorAll() provides all elements by their tagName and Class name, tis use for multiple elements. It must need css selector like '.classname' and '#idName'.
       

3. How do you create and insert a new element into the DOM?
* First we creat a element by document.createElement(). In the bracket, we write a tag name, and set its inner text or HTML by the element.innerText/HTML(). In the bracket, we write what we want to text or HTML. atlast we set the element where we set it by the parentname. appendChild ().

5. What is Event Bubbling? And how does it work?
* When you click a child element, the event first runs on that element, then on its parent, then grandparent, and continues up to the document. exp: Our assignment INTERVIEW button click and all parents card go to the interview tab.

7. What is Event Delegation in JavaScript? Why is it useful?
* Event Delegation is a method where, instead of providing separate event listeners to multiple child elements, a single listener is placed on their parent element.

9. What is the difference between preventDefault() and stopPropagation() methods?
* preventDefault() stops the browser's default action, and stopPropagation() prevents the event from going to the parent element.
