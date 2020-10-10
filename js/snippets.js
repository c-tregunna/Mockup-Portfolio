// mockupContainer.addEventListener('click', e => {
//     modalOverlay.classList.remove('hidden');
//     mockups.forEach((mock, index) => {
//         console.log(mock[index]);
//         modal[index].innerHTML += `<img src="${mock.modalImage}" alt="${mock.name}">`;
//     })
// });

// const mock = document.querySelectorAll('.mockup');
// const mockupContainer = document.querySelector('.mockup-container');
// mockupContainer.addEventListener('click', e => {
//    mock.forEach((mock, index) => {
//       if (e.target === mock) {
//         console.log(mock[index])
//      }
//   });
// }

//This just shows the first image

// mockups.forEach((mockup, index) => {
//     modal[index].innerHTML += `<img src="${mockup.modalImage}" alt="${mockup.name}">`;
// })

// const mock = document.querySelectorAll('.mockup');
// const mockupContainer = document.querySelector('.mockup-container');
// const modalOverlay = document.querySelector('.modal');
// mockupContainer.addEventListener('click', e => {
//    mockups.forEach((mock, index) => {
//     modalOverlay.classList.remove('hidden');
//       if (e.target === mock) {
//         modalOverlay.classList.remove('hidden');
//         console.log(mock[index]);
//      }
//   })

// });


//Second method for adding list of mockups
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

// let projectImg = document.createElement('DIV');
// projectImg.classList.add('modal__content-img-container');
// projectImg.innerHTML = `<img src="${mockup[index].image}" alt="${mockup[index].name}">`
// //projectImg.setAttribute('src', '${mock[index].modalImage}');
// //projectImg.setAttribute('alt', '${mock[index].name}');
// modal.appendChild(projectImg);

// This worked but for some reason the close button would not work with it

// modal.innerHTML += `
//                     <img src="${mockups[index].modalImage}" alt="${mock[index].name}">
//                     <h3>${mockups[index].name}</h3>`;


// function nextElement() {
//     if (index <= mockups.length) {
//      index ++;
//     }
//     modalHTML();
//  }

// function prevElement() {
//     if (index > 0) {
//       index --;
//     }
//     modalHTML();
//   }