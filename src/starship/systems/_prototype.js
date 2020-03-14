class system{
    constructor(){
        this.status = 100;
        this.name = 'System Name';
    }



    getStatus(){
        console.log(`${this.name} at ${this.status}% Captain`);
    }

}

export default system;