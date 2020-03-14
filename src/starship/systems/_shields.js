import ui from 'UI/ui';
import system from './_prototype';

class shields extends system{

    constructor(){
        super(status);
        this.name = 'Shields';
    }

    setStatus(value){

        this.status = value;
        this.getStatus();
        ui.setShieldBar(value);
    }
}

export default shields;