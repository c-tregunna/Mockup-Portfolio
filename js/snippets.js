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