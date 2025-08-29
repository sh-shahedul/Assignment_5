
**Question (1):  What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?**

**Ans:**

**getElementById()**

- Find one element by its unique ID.
 
**getElementsByClassName()**
  
- Finds all elements with a class.
- Returns an array-like HTMLCollection.
 
**querySelector()**
  
- Find first element that match a CSS selector.
 
**querySelectorAll()**
  
- Finds all elements that match a CSS selector.
- Return nodeList.

##

**Question (2): How do you **create and insert a new element into the DOM**?**

  **Ans:**
  
 To create and insert a new element into the DOM, At first use document.createElement() to make the element. Then add text or attributes and lastly  insert it into the page using appendChild()   

##
    
**Question(3): What is **Event Bubbling** and how does it work?**

**Ans:** 

 Event Bubbling is when an event on a child element first runs on that element and then propagates up to its parent elements.
 When an event starts on the element that was clicked and then going up through its parent elements to the top of the page.

##

    
**Question(4):  What is **Event Delegation** in JavaScript? Why is it useful?**

**Ans:** 

Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of our code, especially when dealing with dynamic content or a large number of elements.

**it's useful because :**

- Reduce code.  
- works for Dynamic elements.
- Better performence.


##


**Queastion(5): What is the difference between **preventDefault() and stopPropagation()** methods?**

**Ans:**

**preventDefault()** 

- Stops the element's Default behavior.
- Example: Clicking  the submit  button inside the form tag will not reload.

**stopPropagation()** 

- Stop the event from moving up to parent elements.
- Example: Clicking a button inside a div without triggering the div's click event. 






