import systems from './systems/systems';
import ui from 'UI/ui';


class starship {


    constructor(name,s = 1,h = 1,e = 1) {
        this.name = name;
        this.shields = new systems.shields(s);
        this.hull = new systems.hull(h);
        this.engines = new systems.engines(e);
    }

    hail() {
        ui.log(`This is the Starship ${this.name}`);
    }

    report(){
        ui.log("Our scans cannot penetrate their shields");
    }

    reportSystems(){
        this.shields.readLevel();
        this.hull.readLevel();
        this.engines.readLevel();
    }

    
}

class playerShip extends starship {

    updateUI() {
        ui.setShieldBar(this.shields.getStatus());
        ui.setHullBar(this.hull.getStatus());
        ui.setEngineBar(this.engines.getStatus());

    }

    report() {
        this.shields.readStatus();
        this.hull.readStatus();
        this.engines.readStatus();
        this.updateUI();
    }
}


export {
    starship,
    playerShip
};