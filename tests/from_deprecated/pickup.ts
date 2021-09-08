import { mtasa as client } from 'client';
import { mtasa as server } from 'server';

// Workaround to get some arguments
const clientElement = 0 as unknown as client.Element;
const clientPickup = 0 as unknown as client.Pickup;

// Workaround to get some arguments
const serverElement = 0 as unknown as server.Element;
const serverPickup = 0 as unknown as server.Pickup;

const createPickup1: client.Pickup = client.createPickup(
    5,
    6,
    7,
    45,
    60,
    100,
    300,
);

const createPickup2: client.Pickup = client.createPickup(5, 6, 7, 45, 6);

const getPickupAmmo: number = client.getPickupAmmo(clientPickup);

const getPickupAmount: number = client.getPickupAmount(clientPickup);

const getPickupType: number = client.getPickupType(clientPickup);

const getPickupWeapon: number = client.getPickupWeapon(clientPickup);

const setPickupType: boolean = client.setPickupType(clientPickup, 400, 300);

const getPickupRespawnInterval: number = server.getPickupRespawnInterval(6);

const isPickupSpawned: boolean = server.isPickupSpawned(serverPickup);

const setPickupRespawnInterval: boolean = server.setPickupRespawnInterval(
    serverPickup,
    66,
);

const usePickup: boolean = server.usePickup(
    serverPickup,
    server.getRandomPlayer(),
);
