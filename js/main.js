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


//Second method
//***************

// const project = document.querySelector('.mockup-container');

// console.log(mockups);

// mockups.forEach(mockup => {
//     const indivMockup = document.createElement('DIV');
//     const mockupHeader = document.createElement('H2');
//     const imgContainer = document.createElement('DIV');
//     const mockupDesc = document.createElement('P');
//     indivMockup.classList.add('mockup');
//     imgContainer.classList.add('img-contain');
//     mockupHeader.textContent = `${mockup.name}`;
//     imgContainer.innerHTML = `<img src="${mockup.image}" alt="${mockup.name}"></img>`;
//     mockupDesc.textContent = `${mockup.description}`;
//     indivMockup.appendChild(mockupHeader);
//     indivMockup.appendChild(imgContainer);
//     indivMockup.appendChild(mockupDesc);
//     project.appendChild(indivMockup);
//     console.log(mockupHeader);
//     console.log(indivMockup);
// });


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
           }})
        } else if(e.target === sassBtn) {
            mockups.forEach((mockup, index) => {
                if(mockup.sass !== true) {
                 mockupCard[index].style.display = 'none'; // hide all none sass projects
                }else {
                    mockupCard[index].style.display = '';
                }
            })
        } else if(e.target === javascriptBtn) {
            mockups.forEach((mockup, index) => {
                if(mockup.javascript !== true) {
                 mockupCard[index].style.display = 'none'; // hide all js html projects
                } else {
                    mockupCard[index].style.display = '';
                }
            })
        } else if (e.target === allBtn) {
            mockups.forEach((mockup, index) => {
                mockupCard[index].style.display = ''; // display all projects
            })
        }
});

const mock = document.querySelectorAll('.mockup');
const mockupContainer = document.querySelector('.mockup-container');
const modalOverlay = document.querySelector('.modal');
mockupContainer.addEventListener('click', e => {
   mock.forEach((mock, index) => {
      if (e.target === mock) {
        console.log(mock[index]);
        modalOverlay.classList.remove('hidden');
     }
  })

});

//const mockupContainer = document.querySelector('.mockup-container');
// const modal = document.querySelectorAll('.modal__content');
// const modalOverlay = document.querySelector('.modal');

// mockupContainer.addEventListener('click', e => {
//     modalOverlay.classList.remove('hidden');
//     mockups.forEach((mockup, index) => {
//         modal[index].innerHTML += `<img src="${mockup.modalImage}" alt="${mockup.name}">`;
// })
// });

//This just shows the first image

// mockups.forEach((mockup, index) => {
//     modal[index].innerHTML += `<img src="${mockup.modalImage}" alt="${mockup.name}">`;
// })

const closeBtn = document.querySelector('.fa-times-circle');
closeBtn.addEventListener('click', e => {
    modalOverlay.classList.add('hidden');
});

