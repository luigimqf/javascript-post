const form = document.querySelector('.form');
const button = document.querySelector('.button');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  try{
    await fetch('http://localhost:3001/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)

    })
    setTimeout( () =>{
      window.location.replace('/')
    },1000);
  }catch(err) {
    console.log(err.message);
  }
})