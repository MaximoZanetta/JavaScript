async function getPersonajes(id){
    let personajes = `https://naruto-api.herokuapp.com/api/v1/characters/${id}`
    await fetch(personajes)
    .then((res)=> res.json()
    .then((data)=> console.log(data)))

}
getPersonajes(1);
getPersonajes(2);
getPersonajes(3);
getPersonajes(4);
getPersonajes(5);
getPersonajes(6);
 