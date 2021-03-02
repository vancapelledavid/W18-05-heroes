const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// opdracht1
const superheroesNames = superheroes.map(superheroes => superheroes.name);
console.log(superheroesNames);

//opdracht2
const superheroesLight = superheroes.filter(superheroes => superheroes.weight < 190);
console.log(superheroesLight);

//opdracht3
const superheroesNames200 = superheroes
    .filter(superheroes => superheroes.weight == 200)
    .map(superheroes => superheroes.name);
console.log(superheroesNames200);

//opdracht4
const superheroesFirstApp = superheroes.map(superheroes => superheroes.first_appearance);
console.log(superheroesFirstApp);

//opdracht5
const superheroesDCCom = superheroes.filter(x => x.publisher === "DC Comics");
console.log(superheroesDCCom);

const superheroesMarvel = superheroes.filter(x => x.publisher === "Marvel Comics");
console.log(superheroesMarvel);

//opdracht6
const superheroesDCWeight = superheroesDCCom
    .map(x => Number(x.weight))
    .reduce((acc, curr) => acc + curr);
console.log(superheroesDCWeight);

//opdracht7
const superheroesMarvelWeight = superheroesMarvel
    .map(x => Number(x.weight))
    .filter(n => isNaN(n) === false)
    .reduce((acc, curr) => acc + curr);
console.log(superheroesMarvelWeight);

//opdracht8
const superheroesMostHeavy = superheroes
    .map(x => Number(x.weight))
    .filter(n => isNaN(n) === false)
//.reduce(superheroes => Math.max(superheroes));
console.log(Math.max(...superheroesMostHeavy));

//test for github
// and another test   