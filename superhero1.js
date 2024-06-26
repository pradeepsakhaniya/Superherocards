
       
        const superheroes = [
            {
                
                id: 1,
                name: "Iron Man",
                team: "Avengers",
                image: "images.jpeg",
                
                gender: "Male",
                race: "Human",
                height: ["6'8", "203 cm"],
                weight: ["980 lb", "441 kg"],
                eyeColor: "Yellow",
                hairColor: "Brown Hair",
                intelligence: 38,
                strength: 100,
                speed: 17,
                durability: 80,
                power: 24,
                combat: 64,
                
            },
           
            {
                id: 2,
                name: "Captain America",
                team: "Avengers",
                image: "captin amercia.jpeg",
                gender: "Male",
                race: "Human",
                height: ["6'1", "185 cm"],
                weight: ["195 lb", "88 kg"],
                eyeColor: "Blue",
                hairColor: "Blond",
                intelligence: 69,
                strength: 10,
                speed: 33,
                durability: 40,
                power: 37,
                combat: 50,
            },
            {
                id: 3,
                name: "Spider-man",
                team: "Avengers",
                image: "spiderman.jpg",
                gender: "Male",
                race: "Human",
                height: ["5'10", "178 cm"],
                weight: ["181 lb", "81 kg"],
                eyeColor: "Brown",
                hairColor: "Brown",
                intelligence: 10,
                strength: 8,
                speed: 13,
                durability: 5,
                power: 5,
                combat: 20,
            },
            {
                id: 4,
                name: "Batman",
                team: "Justice League",
                image: "batman.jpg",
                gender: "Male",
                race: null,
                height: ["6'3", "191 cm"],
                weight: ["230 lb", "104 kg"],
                eyeColor: "brown",
                hairColor: "black",
                intelligence: 75,
                strength: 28,
                speed: 38,
                durability: 80,
                power: 72,
                combat: 95,

       

            },
            {
                id: 5,
                name: "Superman",
                team: "Justice League",
                image: "super-man.jpg",
                gender: "Male",
                race: "Human",
                height: ["6'1", "185 cm"],
                weight: ["195 lb", "88 kg"],
                eyeColor: "Blue",
                hairColor: "Blond",
                intelligence: 50,
                strength: 85,
                speed: 100,
                durability: 85,
                power: 100,
                combat: 40,
            },
            {
                id: 6,
                name: "Wonder Woman",
                team: "Justice League",
                image: "wonderwoman.jpeg",
                gender: "Feamle",
                race: null,
                height: ["6'2", "188 cm"],
                weight: ["240 lb", "108 kg"],
                eyeColor: "Blue",
                hairColor: "White",
                intelligence: 30,
                strength: 28,
                speed: 42,
                durability: 90,
                power: 57,
                combat: 60,
            }
        ];
    


const cardContainer = document.getElementById("card-container");
const searchInput = document.getElementById("search-input");
const filterButton = document.getElementById("filter-button");

//  superhero cards
superheroes.forEach((superhero) => {
    const cardHTML = `
        <div class="card">
            <img src="${superhero.image}" alt="${superhero.name}">
            <h2>${superhero.name}</h2>
            <p>Team: ${superhero.team}</p>
            <p>Gender: ${superhero.gender}</p>
            <p>Race: ${superhero.race}</p>
            <p>Height: ${superhero.height}</p>
            <p>Weight: ${superhero.weight}</p>
            <p>Eye Color: ${superhero.eyeColor}</p>
            <p>Hair Color: ${superhero.hairColor}</p>
            <p>intelligence:${superhero.intelligence}</p>
            <p>strength:${superhero.strength}</p>
            <p>speed:${superhero.speed}</p>
            <p>durability:${superhero.durability}</p>
            <p>power:${superhero.power}</p>
            <p>combat:${superhero.combat}</p>
            
        </div>
    `;
    cardContainer.innerHTML += cardHTML;
});

// search functionality
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = cardContainer.children;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const name = card.querySelector("h2").textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
});

// filter functionality
filterButton.addEventListener("click", () => {
    const teamFilter = prompt("Enter a name to filter by:");
    const cards = cardContainer.children;
    for (let i = 0; i < cards.length; i++) {
        const
         card = cards[i];
        const team = card.querySelector("p").textContent.split(": ")[1];
        if (team === teamFilter);
        }
    })