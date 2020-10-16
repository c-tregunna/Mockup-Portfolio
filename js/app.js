//-----Variables-----//

const project = document.querySelectorAll('.mockup'); // to create each card on index.html

const mockupCard = document.getElementsByClassName('mockup'); // for selecting project type buttons
const buttons = document.querySelector('.button-container');

const allBtn = document.getElementById('all');
const htmlBtn = document.getElementById('html');
const sassBtn = document.getElementById('sass');
const javascriptBtn = document.getElementById('javascript');

const modal = document.querySelector('.modal__content'); // for creating the modal when click project card
const modalOverlay = document.querySelector('.modal');
const mock = document.querySelectorAll('.mockup');

const scrollLeft = document.querySelector('.fa-chevron-left'); // to navigate between modals
const scrollRight = document.querySelector('.fa-chevron-right');

//-------------------END

//-----Create cards on index.html-----//

mockups.forEach((mockup, index) => {
    //projectCard.setAttribute('data-index', `${index}`); nope, doesnt work
    project[index].innerHTML += `
                    <div class="card" data-index="${index}">
                     <h2>${mockup.name}</h2>
                    <div class="img-contain">
                        ${mockup.image}
                    </div>
                    <p class="mockup__desc">${mockup.description}</p>

                    <ul class="mockup__type">

                    </ul>
                    </div>
                    `;
});

//--------------------END

//-----Add buttons to the cards-----//

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

//--------------------END

//-----Buttons to select project type-----//

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

//---------------------END

//-----Create modal and modal navigation-----//

const modalHTML = index => {
    console.log(index);

    //-----create content of modal
    modal.innerHTML = `<i class="far fa-times-circle"></i>`;

    modalOverlay.classList.remove('hidden');
    let modalContainer = document.createElement('DIV');
    let projectImg = document.createElement('DIV');
    let projectInfo = document.createElement('DIV');
    let projectHeading = document.createElement('H3');
    modalContainer.classList.add('modal__content-container');
    projectInfo.classList.add('modal__content-information');
    projectImg.classList.add('modal__content-img-container');
    projectImg.innerHTML = `<img src="${mockups[index].modalImage}" alt="${mockups[index].name}">`;
    projectHeading.innerHTML = `${mockups[index].name}`;
    modalContainer.appendChild(projectImg);
    projectInfo.innerHTML = `<h3>${mockups[index].name}</h3>
                                <p>This is the mockup image I was given to work from.</p>
                                <p>Click the link below to see the code or the live site(coming soon).</p>
                                <div class="project-links">
                                    <a href="${mockups[index].codeUrl}" target="_blank" class="github-link modal-link">Code</a>
                                    <a href="${mockups[index].codeUrl}" target="_blank" class="github-link modal-link">Live</a>
                                </div>`;
    modalContainer.appendChild(projectInfo);
    modal.appendChild(modalContainer);

    //-----modal navigation
    scrollRight.addEventListener('click', () => {
        if (index < mock.length - 1) {
            modalHTML(index += 1);
        } else {
            index = 0;
            modalHTML(index);
        }
    });

    scrollLeft.addEventListener('click', () => {
        if (index > 0) {
            modalHTML(index -= 1);
        } else {
            modalHTML(index = mock.length - 1);
        }
    });

    //-----close modal
    const closeButton = document.querySelector('.fa-times-circle'); // to close the modal
    closeButton.addEventListener('click', () => {
        modalOverlay.classList.add('hidden');
        let projectImage = document.querySelector('.modal__content-container');
        projectImage.remove();
    });

};

//--------------------END

//-----Show modal on click of project card-----//
mock.forEach((mockup, index) => {
    mockup.addEventListener('click', () => {
        modalHTML(index);
    });
});

