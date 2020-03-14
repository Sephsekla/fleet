class ui{
    constructor(){

    }

    static setBar(id,percent){
        let elem = document.querySelector(`#${id} span`);
        elem.style.width = `${percent}%`;
    }

    static setShieldBar(percent){
        this.setBar('shields',percent)
    }
    static setHullBar(percent){
        this.setBar('hull',percent)
    }
    static setEngineBar(percent){
        this.setBar('engines',percent)
    }

    static setWeaponBar(percent){
        this.setBar('weapons',percent);
    }

    static log(content){
        document.getElementById('log').innerHTML += `<br>${content}`;

    }


}

export default ui;