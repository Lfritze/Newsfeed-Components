/* This is the data we will be using, study it but don't change anything, yet. */
// initial commit
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// *****************STEP 1*********************************
//   Step 1: Write a function that will create a menu component as seen below:

document.querySelector('.header').appendChild(buildMenuOut(menuItems));

function buildMenuOut (infoInsideMenu) {
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');

  // structure------------------------------------
    menu.appendChild(menuList);
    
  // set class names --------------------------------
  menu.classList.add('menu');

//**********************STEP 2***********************************
  //   Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
  // iterate means (forEach) under the hood it looks like this: for (i=0; i <0; i++)

  infoInsideMenu.forEach(data => {
    // define new element -----------------------
    const menuThing = document.createElement('li');
    //set structure
    menu.appendChild(menuThing)
    menuThing.textContent = data;
  });

//***********************STEP 3*******************************
//   Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
//<img class="menu-button" src="./assets/menu.png"/> This is from the index.html file

const buttonForMenu = document.querySelector('.menu-button');

//********************Step 4***********************
// Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

buttonForMenu.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

return menu;
}





/* 
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>




  

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
