import systems from './systems/systems';
import ui from 'UI/ui';


class starship {


    constructor(name,s = 0,h = 1,e = 1, w = 0) {
        this.name = name;
        this.shields = new systems.shields(s);
        this.hull = new systems.hull(h);
        this.engines = new systems.engines(e);
        this.weapons = new systems.weapons(w);
    }

    hail() {
        ui.log(`This is the Starship ${this.name}`);
    }

    report(){
        ui.log("Our scans cannot penetrate their shields");
    }

    reportSystems(){
        ui.log(`------Systems Report------`)
        this.shields.readLevel();
        this.hull.readLevel();
        this.engines.readLevel();
        this.weapons.readLevel();
        ui.log(`--------------------------`);
    }

    attack(enemyShip){
        
    }

    
}

class playerShip extends starship {

    updateUI() {
        ui.setShieldBar(this.shields.getStatus());
        ui.setHullBar(this.hull.getStatus());
        ui.setEngineBar(this.engines.getStatus());
        ui.setWeaponBar(this.weapons.getStatus());

    }

    report() {
        ui.log(`------Systems Status------`)
        this.shields.readStatus();
        this.hull.readStatus();
        this.engines.readStatus();
        this.weapons.readStatus();
        this.updateUI();
        ui.log(`--------------------------`);
    }
}


export {
    starship,
    playerShip
};