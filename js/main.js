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

const modal = document.querySelector('.modal__content');
const modalOverlay = document.querySelector('.modal');
const mock = document.querySelectorAll('.mockup');


function modalHTML () {

mock.forEach((mockup, index) => {
  mockup.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    let modalContainer = document.createElement('DIV');
    let projectImg = document.createElement('DIV');
    let projectInfo = document.createElement('DIV');
    let projectHeading = document.createElement('H3');
    modalContainer.classList.add('modal__content-container');
    modalContainer.setAttribute('data-index', handleModalScroll);
    projectInfo.classList.add('modal__content-information');
    projectImg.classList.add('modal__content-img-container');
    projectImg.innerHTML = `<img src="${mockups[index].modalImage}" alt="${mockups[index].name}">`;
    projectHeading.innerHTML = `${mockups[index].name}`;
    modalContainer.appendChild(projectImg);
    projectInfo.innerHTML += `<h3>${mockups[index].name}</h3>
                                <p>This is the mockup image I was given to work from.</p>
                                <p>Click the link below to see the code or the live site(coming soon).</p>
                                <div class="project-links">
                                    <a href="${mockups[index].codeUrl}" target="_blank" class="github-link modal-link">Code</a>
                                    <a href="${mockups[index].codeUrl}" target="_blank" class="github-link modal-link">Live</a>
                                </div>`
    modalContainer.appendChild(projectInfo);
    modal.appendChild(modalContainer);

  });
});
}

modalHTML();




const closeButton = document.querySelector('.fa-times-circle');
closeButton.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    let projectImage = document.querySelector('.modal__content-container');
    projectImage.remove();
});

const scrollLeft = document.querySelector('.fa-chevron-left');
const scrollRight = document.querySelector('.fa-chevron-right');

handleModalScroll = (dir, index) => {
    if (dir === 'prev') {
        index -= 1;
            index === 0 && modalHTML(index);
    } else {
        index += 1;
        if (index === project.length) {
            index = 0;
            modalHTML(index);
        } else {
            modalHTML(index);
        }
    }
}
scrollPrev = index => {
    handleModalScroll('right', index);
}
scrollNext = index => {
    handleModalScroll('prev', index);
}


// let index = 0;


// scrollRight.addEventListener('click', e => {
//     if (index <= mockups.length) {
//         index ++;
//        }
//        modalHTML(index);
//     //    modalHTML();
// });

// scrollLeft.addEventListener('click', e => {
//     if (index > 0) {
//         index --;
//       }
//       modalHTML(index);
//     //   modalHTML();
// });


// // scroll forward through modals
// scrollRight.addEventListener('click', () => {
// 	if (mock < mockups.length - 1) {
// 		mock++;
// 	}
// });

// //scroll back through modals
// scrollLeft.addEventListener('click', () => {
// 	if (mock > 0) {
// 		mock--;
// 	}
// });
