import systems from './systems/systems';
import ui from 'UI/ui';


class starship{


    constructor(name){
        this.name = name;
        this.shields = new systems.shields;
    }

    hail(){
        console.log(`This is the Starship ${this.name}`);
    }

    report(){
        this.shields.readStatus();
        this.updateUI();
    }

    updateUI(){
            ui.setShieldBar(this.shields.getStatus());
    }
}


export default starship;