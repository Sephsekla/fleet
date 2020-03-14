import ui from 'UI/ui';

class system{
    constructor(){
        this.status = 100;
        this.name = 'System Name';
    }

    getStatus(){
        return this.status;
    }

    readStatus(){
        ui.log(`${this.name} at ${this.status}% Captain`);
    }

    setStatus(value){

        this.status = value;
    }

}

export default system;