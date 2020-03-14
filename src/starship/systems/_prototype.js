class system{
    constructor(){
        this.status = 100;
        this.name = 'System Name';
    }

    getStatus(){
        return this.status;
    }

    readStatus(){
        console.log(`${this.name} at ${this.status}% Captain`);
    }

    setStatus(value){

        this.status = value;
    }

}

export default system;