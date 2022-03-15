const fetchPokemon = () => {
    const pokeInputName = document.getElementById('poke-input');
    let pokeInput = pokeInputName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != 200){
            console.log(res);
            pokeImage('./img/pokeNotFound.png');
        }else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other.dream_world.front_default;
        let pokename = data.name;
        let pokeid = data.id;
        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let defense = data.stats[2].base_stat;
        let spAttack = data.stats[3].base_stat;
        let spDefense = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;
        console.log(spDefense);
        pokeImage(pokeImg);
        pokeName(pokename);
        pokeId(pokeid);
        pokeHeight(data.height);
        pokeWeight(data.weight);
        pokeStats(hp, attack, defense, spAttack, spDefense, speed)
        
        
    })
}

//fetchPokemon();

const pokeImage = (url) =>{
    const pokeImg = document.getElementById('poke-img');
    pokeImg.src = url;
}
const pokeName = (name) =>{
    const pokename = document.getElementById('poke-name');
    pokename.innerHTML = name;
}
const pokeId = (id) =>{
    const pokenumber = document.getElementById('poke-id');
    pokenumber.innerHTML = '#' + id;
}
const pokeHeight = (height) =>{
    const pokeheight = document.getElementById('poke-height');
    pokeheight.innerHTML = height/10 + ' m';
}
const pokeWeight = (weight) =>{
    const pokeweight = document.getElementById('poke-weight');
    pokeweight.innerHTML = weight/10 + ' kg';
}
const pokeStats = (hp, attack, defense, spAttack, spDefense, speed) =>{
    const pokeHp = document.getElementById('hp-stat');
    const pokeAttack = document.getElementById('attack-stat');
    const pokeDefense = document.getElementById('defense-stat');
    const pokeSpAttack = document.getElementById('sp-attack-stat');
    const pokeSpDefense = document.getElementById('sp-defense-stat');
    const pokeSpeed = document.getElementById('speed-stat');
    pokeHp.innerHTML = hp;
    pokeAttack.innerHTML = attack;
    pokeDefense.innerHTML = defense;
    pokeSpAttack.innerHTML = spAttack;
    pokeSpDefense.innerHTML = spDefense;
    pokeSpeed.innerHTML = speed;
}
//pokeImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png')
