class npc{
    constructor(name,rank){
        this.name = name;
        this.rank = rank;
        this.assignment = ' - currently unassigned';
    }

    identify(){
        console.log(`${this.rank} ${this.name} ${this.assignment}`)
    }

    assign(ship){
        this.ship = ship;

        this.assignment = ` of the Starship ${this.ship.name}`
    }
}

export default npc;