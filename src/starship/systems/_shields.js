import ui from 'UI/ui';

class shields{
    constructor(){
        this.status = 100;
    }

    getStatus(){
        console.log(`Shields at ${this.status}% Captain`);
    }

    setStatus(value){

        this.status = value;
        this.getStatus();
        ui.setShieldStatus(value);
    }
}

export default shields;