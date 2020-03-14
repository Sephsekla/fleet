import './sass/index.scss';

import starship from "./starship/starship";

import * as person from "./person/person";

let ship = new starship('SS Enterprise');

let player = new person.player("Jean-Luc Picard");

player.identify();

player.assign(ship);

player.identify();

ship.hail();
ship.shields.setStatus(80);
ship.report();