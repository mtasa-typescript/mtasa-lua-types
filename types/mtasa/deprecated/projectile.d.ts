/**
 *
 *
 *
 *
 *
 */
import { Player, Projectile } from "./element";
import { element } from "./dx";

export function createProjectile(
    creator: element,
    weaponType: number,
    posX?: number,
    posY?: number,
    posZ?: number,
    force?: 1.0,
    target?: element,
    rotX?: number,
    rotY?: number,
    rotZ?: number,
    velX?: number,
    velY?: number,
    velZ?: number,
    model?: number,
): Projectile;

export function getProjectileCreator(theProjectile: Projectile): element;

export function getProjectileForce(theProjectile: Projectile): number;

export function getProjectileTarget(theProjectile: Projectile): element;

export function getProjectileType(theProjectile: Projectile): number;

export function detonateSatchels(player?: Player): boolean;

export function getProjectileCounter(theProjectile: Projectile): number;

export function setProjectileCounter(theProjectile: Projectile, timeToDetonate: number): boolean;
