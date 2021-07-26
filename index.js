const tBody = document.querySelector('tbody');

async function getInfoPerson(){

  try{
    const response = await fetch('http://localhost:3001/users')
    const data = await response.json();

    console.log(data);
    return data
  }catch(err){
    console.log(err.mensage)
  }
}

async function printTable(){
  const data = await getInfoPerson();

  if (!data) return;

  data.forEach(data => {
    const row = document.createElement('tr');
    const fields = ['id','name', 'email'];

    fields.forEach(field =>{
      const content = document.createElement('td');

      content.textContent = data[field];

      console.log(content)

      row.appendChild(content);
    })
    tBody.appendChild(row);
  })
}

printTable();
