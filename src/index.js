import './sass/index.scss';

import starship from "./starship/starship";

let ship = new starship('SS Enterprise');

ship.hail();
ship.shields.setStatus(80);
ship.report();