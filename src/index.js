import './sass/index.scss';

import starship from "./starship/starship";

let ship = new starship('SS Enterprise');

ship.hail();
ship.report();
ship.shields.setStatus(80);