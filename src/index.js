import './sass/index.scss';

import * as ship from "./starship/starship";

import * as person from "./person/person";

let myShip = new ship.playerShip('SS Enterprise',1,1,1,1);

let pc = new person.player("Jean-Luc Picard");

pc.identify();

pc.assign(myShip);

pc.identify();

myShip.hail();
myShip.shields.setStatus(80);
myShip.weapons.setStatus(0);
myShip.report();

let enemyShip = new ship.starship("LXS Destroyer",1,1,2,4);
enemyShip.hail();
enemyShip.report();
enemyShip.reportSystems();
myShip.attack(enemyShip);