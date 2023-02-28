import { Tamagotchi } from "./tamagotchi.js";

export class Gui extends Tamagotchi {

    #name
    #type

    constructor(name, type) {
        super()
        this.#name = name;
        this.#type = type;
        this.#createGUI();

    }

    #createGUI() {

        const container = document.createElement('div');
        document.getElementById("tam-container").append(container);
        const foodDiv = document.createElement('div');
        const happyDiv = document.createElement('div');


        ///////Containern
        container.style.backgroundImage = "url('./img/AssetBack.png')";
        container.style.backgroundSize = "280px";
        container.style.backgroundRepeat = "no-repeat";
        container.style.width = "280px";
        container.style.height = "378px";
        container.style.padding = "20px";

        container.style.display = "flex";
        container.style.flexFlow = "column wrap";

        const name = document.createElement('h1');
        const type = document.createElement('p');
        container.append(name, type);
        name.innerText = this.#name;
        type.innerText = this.#type;
        name.style.margin = "5px";
        type.style.margin = "5px";
        name.style.alignSelf = "center";
        type.style.alignSelf = "center";
        name.style.maxWidth = '96%';
        name.style.maxHeight = '40px';
        name.style.overflow = 'hidden';

        const imgAnimal = document.createElement('img');
        if (this.#type == 'Gorb') {
            imgAnimal.src = "./img/Gorbfin.png";
        }
        else {
            imgAnimal.src = "./img/purp.png";
        }
        container.append(imgAnimal);
        imgAnimal.style.width = "200px";
        imgAnimal.style.alignSelf = "center";
        container.append(foodDiv, happyDiv);

        /////////////foodCounterDiv
        foodDiv.style.display = "flex";
        foodDiv.style.margin = "10px";
        foodDiv.style.width = "90%";
        foodDiv.style.justifyContent = "space-between";
        const imgBone = document.createElement('img');
        imgBone.src = "./img/bone.png";
        imgBone.style.width = "20%";

        /////////////happyCounterDiv
        const imgFace = document.createElement('img');
        imgFace.src = "./img/face.png";
        imgFace.style.width = "20%";
        happyDiv.style.display = "flex";
        happyDiv.style.margin = "10px";
        happyDiv.style.width = "90%";
        happyDiv.style.justifyContent = "space-between";

        const h1Happiness = document.createElement('h1');
        const btnPlay = document.createElement('button');
        btnPlay.innerText = 'PLAY';
        btnPlay.style.borderRadius = "50%";
        btnPlay.style.height = "40px";
        btnPlay.style.width = "40px";
        btnPlay.style.border = "2px solid black";
        happyDiv.append(btnPlay, imgFace);
        happyDiv.append(h1Happiness);

        //////////////HUNGER/////////////////////

        const h1Hunger = document.createElement('h1');

        const btnFeed = document.createElement('button');
        btnFeed.innerText = 'FEED';
        btnFeed.style.borderRadius = "50%";
        btnFeed.style.border = "2px solid black";
        btnFeed.style.height = "40px";
        btnFeed.style.width = "40px";
        foodDiv.append(btnFeed, imgBone);
        foodDiv.append(h1Hunger);
        super.startHunger(h1Happiness, container, h1Hunger, imgAnimal);
        btnFeed.addEventListener('click', () => {
            super.currHunger(h1Hunger)

        })

        ////////////////HAPPINESS///////////////


        super.startSad(h1Happiness, container, h1Hunger, imgAnimal);
        btnPlay.addEventListener('click', () => {

            super.currHappiness(h1Happiness)


        })

    }

}