import systems from './systems/systems';
import ui from 'UI/ui';


class starship{


    constructor(name){
        this.name = name;
        this.shields = new systems.shields;
        this.hull = new systems.hull;
        this.engines = new systems.engines;
    }

    hail(){
        console.log(`This is the Starship ${this.name}`);
    }

    report(){
        this.shields.readStatus();
        this.hull.readStatus();
        this.engines.readStatus();
        this.updateUI();
    }

    updateUI(){
            ui.setShieldBar(this.shields.getStatus());
            ui.setHullBar(this.hull.getStatus());
            ui.setEngineBar(this.engines.getStatus());

    }
}


export default starship;