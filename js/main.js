//---------------------
//Create mockup divs direct into HTML 2 different ways
//---------------------

//First method
//***************

const project = document.querySelectorAll('.mockup');

//console.log(mockups);

mockups.forEach((mockup, index) => {
    project[index].innerHTML += `
                     <h2>${mockup.name}</h2>
                    <div class="img-contain">
                        ${mockup.image}
                    </div>
                    <p class="mockup__desc">${mockup.description}</p>

                    <ul class="mockup__type">

                    </ul>
                    `;
});


//Add in the li elements to show mock up type. This added it into the code above
mockups.forEach((mockup, index) => {
    const mockupType = document.querySelectorAll('.mockup__type');
    if (mockup.html === true && mockup.sass === true && mockup.javascript === true ) {
            mockupType[index].innerHTML += '<li>HTML/CSS</li> <li>Sass</li> <li>JavaScript</li>';
        } else
        if (mockup.html === true && mockup.sass === true) {
            mockupType[index].innerHTML += '<li>HTML/CSS</li> <li>Sass</li>';
        } else
        if (mockup.html === true ) {
            mockupType[index].innerHTML += '<li>HTML/CSS</li>';
        } else
        if (mockup.javascript === true ) {
            mockupType[index].innerHTML += '<li>JavaScript</li>';
        }
});




//---------------------
// Select type of project buttons
//---------------------

const mockupCard = document.getElementsByClassName('mockup');
const buttons = document.querySelector('.button-container');

const allBtn = document.getElementById('all');
const htmlBtn = document.getElementById('html');
const sassBtn = document.getElementById('sass');
const javascriptBtn = document.getElementById('javascript');



buttons.addEventListener('click', e => {
    if(e.target ===  htmlBtn) {
        mockups.forEach((mockup, index) => {
           if(mockup.html !== true) {
            mockupCard[index].style.display = 'none'; // hide all none html projects
           } else {
               mockupCard[index].style.display = '';
           }});
        } else if(e.target === sassBtn) {
            mockups.forEach((mockup, index) => {
                if(mockup.sass !== true) {
                 mockupCard[index].style.display = 'none'; // hide all none sass projects
                }else {
                    mockupCard[index].style.display = '';
                }
            });
        } else if(e.target === javascriptBtn) {
            mockups.forEach((mockup, index) => {
                if(mockup.javascript !== true) {
                 mockupCard[index].style.display = 'none'; // hide all js html projects
                } else {
                    mockupCard[index].style.display = '';
                }
            });
        } else if (e.target === allBtn) {
            mockups.forEach((mockup, index) => {
                mockupCard[index].style.display = ''; // display all projects
            });
        }
});


//const mockupContainer = document.querySelector('.mockup-container');
const modal = document.querySelector('.modal__content');
const modalOverlay = document.querySelector('.modal');
const mock = document.querySelectorAll('.mockup');

mock.forEach((mockup, index) => {
  mockup.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    modal.innerHTML += `<img src="${mockups[index].modalImage}" alt="${mock[index].name}">
                        <h3>${mockups[index].name}</h3>`;
  });
});



const closeBtn = document.querySelector('.fa-times-circle');
closeBtn.addEventListener('click', (e) => {
    modalOverlay.classList.add('hidden');
});
