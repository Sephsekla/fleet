import npc from './_prototype';

class player extends npc{
    constructor(name){
        super(name);
        this.rank = "Captain"
    }
}

export default player;