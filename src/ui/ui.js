import $ from 'jquery';
class ui{
    constructor(){

    }

    static setShieldBar(percent){
        $('#shields span').css('width',`${percent}%`);
    }
    static setHullBar(percent){
        $('#hull span').css('width',`${percent}%`);
    }
    static setEngineBar(percent){
        $('#engines span').css('width',`${percent}%`);
    }
}

export default ui;