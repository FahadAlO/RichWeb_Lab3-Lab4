# RichWeb_Lab3-Lab4


Q1) What does it mean for a data structure to be described as a functor? Give a code example in JavaScript in your explanation?
Any type data with a function like this is a functor, with one additional restriction: the map function has to preserve the “structure” of the value it’s mapping over. For lists, this means it can change the elements but not the size of the list structure that can be implements as map operation and it will be described as a functor. The map function takes two arguments one is object second is a function then calls the function for each element in the object. This process should produce a new functor has same size of the object. An example:    [‘num’, ‘num’,’num’]         . map(i => parsenlnt(i))         . map(n => n/10)  


Q2) Describe how the flexbox model works in CSS?
The main idea behind the flex layout is to give the container the ability to alter its items width /height and order to best fill the available space mostly to accommodate to all kind of display device and screen size. Flexbox is a new layout that introduced in CSS3 and they use of flexbox is to ensure that all the elements will behave according to the screen size. On other words the elements will change its size to accommodate to the user’s screen. Since then flex has undergone a few change to reach its current iteration. The flex value is an alternative to block element floated and manipulated using media queries.