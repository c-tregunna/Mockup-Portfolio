
const project = document.querySelector('.mockup');
let index = 0;

console.log(mockups);



mockups.forEach(mockup => {
    project.innerHTML += `<h2>${mockups[index].name}</h2>
                    <img src="${mockups[index].image}" alt="${mockups[index].name}">
                    <p>${mockups[index].description}</p>`;
                    index ++;
});



// projectHTML += `<h2>${mockup[index].name}</h2>
// <img src="${mockup[index].image}" alt="${mockup[index].name}">
// <p>${mockup[index].description}</p>`;