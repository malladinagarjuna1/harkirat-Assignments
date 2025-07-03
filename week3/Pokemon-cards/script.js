
async function loadPokemon(){
    const num = document.getElementById("num").value;
    const type= document.getElementById("type").value;
    const  container= document.getElementById("cards");

    container.innerHTML=" ";
    const typeData = await  fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeJson= await typeData.json();
    const pokemonList = typeJson.pokemon();

  for(let pkm of selected){
    const res= await fetch(pkm.pokemonList.url);
    const data = await res.json();
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML=`
    <h3>${data.name}</h3>
     <img src="${data.sprites.front_default}" alt="${data.name}"/>`;
     container.appendChild(card);

        
  }
}