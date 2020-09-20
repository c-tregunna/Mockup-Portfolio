
// const project = document.querySelectorAll('.mockup');
// let index = 0;

// console.log(mockups);

// mockups.forEach((mockup, index) => {
//     project[index].innerHTML += `
//                      <h2>${mockup.name}</h2>
//                     <div class="img-contain">
//                         <img src="${mockup.image}" alt="${mockup.name}">
//                     </div>
//                     <p>${mockup.description}</p>`;
//                     index ++;
// });

const project = document.querySelector('.mockup-container');

console.log(mockups);

mockups.forEach(mockup => {
    const indivMockup = document.createElement('DIV');
    const mockupHeader = document.createElement('H2');
    const imgContainer = document.createElement('DIV');
    const mockupDesc = document.createElement('P');
    indivMockup.classList.add('mockup');
    imgContainer.classList.add('img-contain');
    mockupHeader.textContent = `${mockup.name}`;
    imgContainer.innerHTML = `<img src="${mockup.image}" alt="${mockup.name}"></img>`;
    mockupDesc.textContent = `${mockup.description}`;
    indivMockup.appendChild(mockupHeader);
    indivMockup.appendChild(imgContainer);
    indivMockup.appendChild(mockupDesc);
    project.appendChild(indivMockup);
    console.log(mockupHeader);
    console.log(indivMockup);
});
