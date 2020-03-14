import ui from 'UI/ui';

class npc{
    constructor(name,rank){
        this.name = name;
        this.rank = rank;
        this.assignment = '- currently unassigned';
    }

    identify(){
        ui.log(`${this.rank} ${this.name} ${this.assignment}`)
    }

    assign(ship){
        this.ship = ship;

        this.assignment = `of the Starship ${this.ship.name}`
    }
}

export default npc;