import ui from 'UI/ui';

class system{
    constructor(level){
        this.status = 100;
        this.name = 'System Name';
        this.level = level;
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

    getLevel(){
        return this.level;
    }

    readLevel(){
        ui.log(`${this.name} level ${this.level} Captain`);
    }

}

export default system;