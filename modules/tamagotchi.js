class Tamagotchi {

    #currentFood
    #currentHappy
    #idHunger
    #idHappy


    constructor() {

        this.#currentFood = 10
        this.#currentHappy = 10

    }

    //Hunger methods

    currHunger(hungerH1) {
        if (this.#currentFood < 10 && this.#currentFood > 0) {
            this.#currentFood++;
            hungerH1.innerText = this.#currentFood + '/10';
        }

    }
    startHunger(h1Hap, con, h1Hun, imgAnimal) {
        this.#updateHunger(h1Hap, con, h1Hun, imgAnimal);
        this.#idHunger = setInterval(() => {
            this.#updateHunger(h1Hap, con, h1Hun, imgAnimal);

        }, 1500)

    }
    #stopHunger() {
        clearInterval(this.#idHunger);
    }

    #updateHunger(h1Hap, con, h1Hun, imgAnimal) {

        this.#currentFood--;
        h1Hun.innerText = this.#currentFood + '/10';

        if (this.#currentFood == 0) {
            con.style.backgroundImage = "url('./img/backdead.png')";
            con.style.backgroundSize = "280px";
            con.style.backgroundRepeat = "no-repeat";
            this.#stopHunger();
            clearInterval(this.#idHappy);
            this.#currentHappy = 0;
            h1Hap.innerText = this.#currentHappy + '/10';
            imgAnimal.src = "./img/skull.png";
        }
    }

    //Play methods
    
    currHappiness(happy) {
        if (this.#currentHappy < 10 && this.#currentHappy > 0) {
            this.#currentHappy++;
            happy.innerText = this.#currentHappy + '/10';
        }
    }
    startSad(h1Hap, con, h1Hun, imgAnimal) {
        this.#updateSad(h1Hap, con, h1Hun, imgAnimal);
        this.#idHappy = setInterval(() => {
            this.#updateSad(h1Hap, con, h1Hun, imgAnimal);
        }, 2000)
    }
    #stopSad() {

        clearInterval(this.#idHappy);
    }

    #updateSad(h1Hap, con, h1Hun, imgAnimal) {
        this.#currentHappy--;

        h1Hap.innerText = this.#currentHappy + '/10';
        if (this.#currentHappy == 0) {
            this.#stopSad();
            con.style.backgroundImage = "url('./img/backdead.png')";
            con.style.backgroundSize = "280px";
            con.style.backgroundRepeat = "no-repeat";
            clearInterval(this.#idHunger);

            this.#currentFood = 0;
            h1Hun.innerText = this.#currentFood + '/10';
            imgAnimal.src = "./img/skull.png";
        }
    }


}

export { Tamagotchi }
