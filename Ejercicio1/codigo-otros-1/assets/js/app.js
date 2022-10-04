/*Se agregó el punto al inicio de cada elemento del HTML,
se creó la variable promesa para llamar a la API con el fetch a través del metodo GET */

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


function displayUser(username) {
  let promesa =  fetch(`${usersEndpoint}/${username}`,{
    method:"GET"
  });
  promesa.then((response)=>{
    response.json().then((data)=>{
      console.log(data);
      console.log(typeof(data));
      $n.innerText = `${data.name}`;
      $b.innerText = `${data.blog}`;
      $l.innerText = `${data.location}`;
    });
});
};

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski');