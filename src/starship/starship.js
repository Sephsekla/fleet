import systems from './systems/systems';
import ui from '../ui/ui';


class starship{


    constructor(name){
        this.name = name;
        this.shields = new systems.shields;
    }

    hail(){
        alert(`This is the Starship ${this.name}`);
    }

    report(){
        this.shields.getStatus();
    }
}


export default starship;