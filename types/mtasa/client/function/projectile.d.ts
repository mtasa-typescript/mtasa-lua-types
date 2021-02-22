/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Projectile } from '../structure';

/**
 * This function creates a projectile of the specified type on the specified coordinates.
 * *'''Model''' argument is not synchronized between clients. Clients differs from local player see
 * always standard projectile model.
 * *'''Target''' argument can only be defined as a player or another projectile.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/createProjectile|MTASA Wiki}
 * @param creator The element representing creator of the projectile. In case you want the
 * projectile to be synced for everybody creator must be the local player or his vehicle.
 * @param weaponType int representing the projectile weaponType (characteristics). Valid IDs are:
 * {{Projectiles}}  {{OptionalArg}}
 * @param posX , posY, posZ: float starting coordinates for the projectile. They are coordinates of
 * creator by default.
 * @param force : float representing the starting force for throwable projectiles.
 * @default 1.0
 * @param target : element target used for heat seeking rockets.
 * @default nil
 * @param rotX , rotY, rotZ: float starting rotation for the projectile.
 * @param velX , velY, velZ: float starting velocity for the projectile.
 * @param model : Integer representing the projectiles model, uses default model for weaponType if
 * not specified.
 * @return Returns a ''[[projectile]]'' element if [[projectile]] creation was successful. Returns
 * ''false'' if unable to create a [[projectile]] (wrong weapon ID or projectiles limit was reached).
 */
export function createProjectile(
    creator: Element,
    weaponType: number,
    posX?: number,
    posY?: number,
    posZ?: number,
    force?: number,
    target?: Element,
    rotX?: number,
    rotY?: number,
    rotZ?: number,
    velX?: number,
    velY?: number,
    velZ?: number,
    model?: number,
): Projectile;

/**
 * Get the time left before a projectile detonates.
 * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileCounter|MTASA Wiki}
 * @return Returns the the time in milliseconds to detonation which depending on the projectile
 * type will do different things:
 * * * Grenades will explode when it hits 0
 * * * Teargas may be a duration timer
 * * * Both types of rockets will explode when it hits 0
 * * * Satchels restarts so I do not think it does anything
 */
export function getProjectileCounter(projectile: Projectile): number;

/**
 * This function returns the creator of the specified projectile.
 * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileCreator|MTASA Wiki}
 * @param theProjectile The projectiles| projectile element which creator you want to retrieve.
 * @return Returns the element which created the projectile if successful, ''false'' otherwise.
 */
export function getProjectileCreator(theProjectile: Projectile): Element;

/**
 * This function returns the force of the specified projectile.
 * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileForce|MTASA Wiki}
 * @param theProjectile The projectiles| projectile element which force you want to retrieve.
 * @return Returns a [[float]] if successful, ''false'' otherwise.
 */
export function getProjectileForce(theProjectile: Projectile): number;

/**
 * This function returns the target of the specified projectile.
 * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileTarget|MTASA Wiki}
 * @param theProjectile The projectiles| projectile element which target you want to retrieve.
 * @return Returns the [[element]] which is the projectile's target if the projectile is valid and
 * can have a target (like a heat-seeking rocket), ''false'' otherwise.
 * * {{New feature/item|3.0141|1.4.0|6990|If the projectile is a satchel charge, returns the
 * [[element]] at which it is glued to (or ''nil'' if it isn't glued to any).}}
 */
export function getProjectileTarget(theProjectile: Projectile): Element;

/**
 * This function returns the type of the specified projectile.
 * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileType|MTASA Wiki}
 * @param theProjectile The Element/Projectile|projectile element which type you want to retrieve.
 * @return Returns an [[int]]eger over the type of the projectile or ''false'' if invalid arguments
 * were passed.
 * * {{Projectiles}}
 */
export function getProjectileType(theProjectile: Projectile): number;

/**
 * Will change the projectile counter timer which depending on the projectile type will do
 * different things:
 * * Rockets and Grenades will explode when it hits 0
 * * Teargas may be a duration timer
 * * Satchels restart (we currently assume it doesn't cause an effect)
 * * Molotov will explode with search ground level when it hits 0
 * @see {@link https://wiki.multitheftauto.com/wiki/setProjectileCounter|MTASA Wiki}
 * @param projectile The projectile to edit the timer of.
 * @param timeToDetonate The time in milliseconds to detonation.
 * @return Returns ''true'' on success, ''false'' otherwise.
 */
export function setProjectileCounter(projectile: Projectile, timeToDetonate: number): boolean;

/**
 * This function can be used to detonate a players satchels.
 * @see {@link https://wiki.multitheftauto.com/wiki/detonateSatchels|MTASA Wiki}
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function detonateSatchels(): boolean;
