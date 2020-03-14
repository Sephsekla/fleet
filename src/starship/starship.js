import systems from './systems/systems';


class starship{


    constructor(name){
        this.name = name;
        this.shields = new systems.shields;
    }

    hail(){
        console.log(`This is the Starship ${this.name}`);
    }

    report(){
        this.shields.getStatus();
    }
}


export default starship;