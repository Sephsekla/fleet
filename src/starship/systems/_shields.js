class shields{
    constructor(){
        this.status = 100;
    }

    getStatus(){
        alert(`Shields at ${this.status}% Captain`);
    }

    setStatus(value){

        this.status = value;
        this.getStatus();
        ui.setShieldStatus(value);
    }
}

export default shields;