import $ from 'jquery';

class ui{
    constructor(){

    }

    static setShieldBar(percent){
        $('#shields span').css('width',`${percent}%`);
    }
}

export default ui;