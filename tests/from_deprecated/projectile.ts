import { mtasa as client } from '../../types/mtasa/client';

// Workaround to get some arguments
const clientElement = 0 as unknown as client.Element;
const clientProjectile = 0 as unknown as client.Projectile;

const createProjectile1: client.Projectile = client.createProjectile(
    clientElement,
    10,
);

const createProjectile2: client.Projectile = client.createProjectile(
    clientElement,
    10,
    10,
    15,
    20,
    2,
    clientElement,
    10,
    15,
    350,
    0.01,
    0,
    0,
    100,
);

const getProjectileCreator: client.Element =
    client.getProjectileCreator(clientProjectile);

const getProjectileForce: number = client.getProjectileForce(clientProjectile);

const getProjectileTarget: client.Element =
    client.getProjectileTarget(clientProjectile);

const getProjectileType: number = client.getProjectileType(clientProjectile);

const detonateSatchels: boolean = client.detonateSatchels();

const getProjectileCounter: number =
    client.getProjectileCounter(clientProjectile);

const setProjectileCounter: boolean = client.setProjectileCounter(
    clientProjectile,
    4,
);
