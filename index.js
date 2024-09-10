// let i =1;
// let interval = setInterval(function()  {
//     if ( i == 5){
//         clearInterval(interval)
//     }
//     console.log (i);
//     i==;
    
// }, interval);

// let isExist = true

// const asyncOperation = new Promise( function(resolve, reject) {
//     setTimeout( function() {
    
//       if (isExist) {
//         resolve('Muvaffaqiyat!');
//       } else {
//         reject('Xato!');
//       }
//     }, 2000);
//   });
//   asyncOperation
//    .then (data => {
//     console.log(data);
//    })

// const button = document.getElementById("button");
// button && button.addEventListener("clik",function(event) {
//   event.preventDefault();
//   fetch ("")
// }
  


document.addEventListener('DOMContentLoaded', () => {
  const photoContainer = document.getElementById('photo-container');
  const loader = document.getElementById('loader');

  loader.style.display = 'block';
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
          loader.style.display = 'none';
          data.slice(0,200).forEach(photo => {
              const card = document.createElement('div');
              card.className = 'card';
              card.innerHTML = `
                  <img src="${photo.url}" alt="${photo.title}">
                  <h3>${photo.title}</h3>
              `;
              photoContainer.appendChild(card);
          });
      })
      .catch(err => {
          console.error(err);
      });
});