const pokebackground = document.querySelector(".poke-background");
// constant
const TYPES = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
];
const resetBody = () =>{
    pokebackground.classList.remove('hide');
    for(const type of TYPES){
        pokebackground.classList.remove(type);
    }
}

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("poke-name-input");
    let pokeName = pokeNameInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
    fetch(url)
        .then((res) => {
            if (res.status != 200) {
                console.log(res);
                pokeImage("./img/pokeNotFound.png");
            } else {
                return res.json();
            }
        })
        .then((data) => {
            console.log(data);
            resetBody();
            let pokeImg = data.sprites.other["official-artwork"].front_default;
            let pokename = data.name;
            let pokeid = data.id;
            let hp = data.stats[0].base_stat;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let spAttack = data.stats[3].base_stat;
            let spDefense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            let types = data.types;
            let type1 = types[0].type.name;
            if (types[1]) {
                let type2 = types[1].type.name;
                pokeTypes(type1, type2);
            } else {
                pokeTypes(type1);
            }
            pokeImage(pokeImg);
            poke_Name(pokename.charAt(0).toUpperCase() + pokename.slice(1));
            pokeId(pokeid);
            pokeRegion(pokeid);
            pokeHeight(data.height);
            pokeWeight(data.weight);
            pokeStats(hp, attack, defense, spAttack, spDefense, speed);
            pokeBackground(type1);
        });
};

const pokeRegion = (id) => {
    const pokeregion = document.getElementById("pkm-region");
    if (id >= 1 && id <= 151) {
        pokeregion.innerHTML = "Kanto";
    } else if (id >= 152 && id <= 251) {
        pokeregion.innerHTML = "Johto";
    } else if (id >= 252 && id <= 386) {
        pokeregion.innerHTML = "Hoenn";
    } else if (id >= 387 && id <= 493) {
        pokeregion.innerHTML = "Sinnoh";
    } else if (id >= 494 && id <= 649) {
        pokeregion.innerHTML = "Teselia";
    } else if (id >= 650 && id <= 721) {
        pokeregion.innerHTML = "Kalos";
    } else if (id >= 722 && id <= 809) {
        pokeregion.innerHTML = "Alola ";
    } else if (id >= 810 && id <= 898) {
        pokeregion.innerHTML = "Galar";
    }
};

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokemon-image");
    pokeImg.src = url;
};
const poke_Name = (name) => {
    const pokename = document.getElementById("pkm-name");
    pokename.innerHTML = name;
};

const pokeId = (id) => {
    const pokenumber = document.getElementById("pkm-number");
    if (id < 10) {
        pokenumber.innerHTML = "#00" + id;
    } else if (id >= 10 && id < 100) {
        pokenumber.innerHTML = "#0" + id;
    } else if (id >= 100) {
        pokenumber.innerHTML = "#" + id;
    }
};

const pokeHeight = (height) => {
    const pokeheight = document.getElementById("pkm-height");
    pokeheight.innerHTML = height / 10 + " m";
};
const pokeWeight = (weight) => {
    const pokeweight = document.getElementById("pkm-weight");
    pokeweight.innerHTML = weight / 10 + " kg";
};

const pokeStats = (hp, attack, defense, spAttack, spDefense, speed) => {
    const pokeHp = document.getElementById("hp-stat");
    const pokeAttack = document.getElementById("attack-stat");
    const pokeDefense = document.getElementById("defense-stat");
    const pokeSpAttack = document.getElementById("sp-attack-stat");
    const pokeSpDefense = document.getElementById("sp-defense-stat");
    const pokeSpeed = document.getElementById("speed-stat");
    pokeHp.innerHTML = hp;
    pokeAttack.innerHTML = attack;
    pokeDefense.innerHTML = defense;
    pokeSpAttack.innerHTML = spAttack;
    pokeSpDefense.innerHTML = spDefense;
    pokeSpeed.innerHTML = speed;
};

const pokeTypes = (type1, type2 = "") => {
    const poketype1 = document.getElementById("type1");
    const poketype2 = document.getElementById("type2");
    poketype1.innerHTML = `<img src="./img/types/${type1}.png">`;
    if (type2) {
        poketype2.innerHTML = `<img src="./img/types/${type2}.png">`;
    } else {
        poketype2.innerHTML = "";
    }

    /*
      const poketype = document.getElementById('container-type');
      let poketypes = [];
      for(type in types){
          poketypes.push(`<img src="./img/types/${types[type].type.name}.png">`);
          console.log(poketypes);
      }
      poketype.innerHTML = poketypes;
      */
};

const pokeBackground = (type) => {
    pokebackground.classList.add(type);
    console.log(pokebackground);
};
