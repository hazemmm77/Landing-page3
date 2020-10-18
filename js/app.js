/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 */
const elements = document.querySelectorAll('section');
const nav =document.querySelector('.navbar__menu');
let ul=document.querySelector('#navbar__list');



 //  some contents in section 1
 const section1=document.getElementById('section1')
 const D =section1.querySelector('.landing__container')
 const la =document.createElement("P");
 la.innerText='MY Name is Hazem';
 D.appendChild(la);

// some contents in section 2
 const section2=document.getElementById('section2')
 const D2 =section2.querySelector('.landing__container')
 const la2 =document.createElement("P");
 la2.innerText='my age is 42';
 D2.appendChild(la2);
// some contents in section3 
 const section3=document.getElementById('section3')
 const D3 =section3.querySelector('.landing__container')
 const la3 =document.createElement("p");
 
 la3.innerText='my hoppies is reading';
 D3.appendChild(la3);


  
 
  //  generate navigation menu  
function genrateMenu()
{
 let i=1;   
ul.classList.add('__menu')
elements.forEach(function(element) 
 {
 let h2=element.querySelector('h2');
 h2.id="section"+i;
 let li=document.createElement('li');
   
 //li.innerHTML=`<a class="menu__link" href=#${h2.id}>${h2.textContent}</a>`
 li.innerHTML=`<a class="menu__link" data-link=${h2.id}>${h2.textContent}</a>`
 ul.appendChild(li)
    i++;
   });
}
genrateMenu();
   
 
 //  fuction to determine if section in viewport or not
function sectionactivation()
 {
   elements.forEach((element)=>
   {
     const offset=Math.floor(element.getBoundingClientRect().top);
     inViewport=(offset<150) && (offset>=-150)
     element.classList.remove('your-active-class');
     
     
     if(inViewport)
     {
       element.classList.add('your-active-class');
     }

   });
}
// added listener to scroll event
window.addEventListener('scroll',sectionactivation);

/// navigation


const links=document.querySelectorAll('.navbar__menu a');
/// add listeners to all links to scroll to appropriate section
links.forEach((link)=>{
 link.addEventListener('click',()=>{
  const el=document.getElementById(link.getAttribute('data-link'));
  el.scrollIntoView({behavior:"smooth",block:"center"});

 });
 
 
 
 
 });












/**
* End Global Variables
* Start Helper Functions
* 
*/



/**
* End Helper Functions
* Begin Main Functions
* 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
* End Main Functions
* Begin Events
* 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active














