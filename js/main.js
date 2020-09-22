//---------------------
//Create mockup divs direct into HTML 2 different ways
//---------------------

//First method
//***************

const project = document.querySelectorAll('.mockup');

console.log(mockups);

mockups.forEach((mockup, index) => {
    project[index].innerHTML += `
                     <h2>${mockup.name}</h2>
                    <div class="img-contain">
                        ${mockup.image}
                    </div>
                    <p class="mockup__desc">${mockup.description}</p>
                    `;
});

//<img src="${mockup.image}" alt="${mockup.name}"></img>

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
            mockupCard[index].style.display = 'none';
           } else {
               mockupCard[index].style.display = '';
           }})
        } else if(e.target === sassBtn) {
            mockups.forEach((mockup, index) => {
                if(mockup.sass !== true) {
                 mockupCard[index].style.display = 'none';
                }else {
                    mockupCard[index].style.display = '';
                }
            })
        } else if(e.target === javascriptBtn) {
            mockups.forEach((mockup, index) => {
                if(mockup.javascript !== true) {
                 mockupCard[index].style.display = 'none';
                } else {
                    mockupCard[index].style.display = '';
                }
            })
        } else if (e.target === allBtn) {
            mockups.forEach((mockup, index) => {
                mockupCard[index].style.display = '';
            })
        }
});





// buttons.addEventListener('click', e => {
//     if(e.target ===  htmlBtn) {
//         for (let i = 0; i < mockupCard.length; i++) {
//             if(mockupCard[i].dataset.type !== 'html') {
//                 mockupCard[i].style.display = 'none';
//             }
//         }
//     }
// })