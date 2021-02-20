/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Effect } from 'types/mtasa/client/structure';

/**
 * Creates an [[Element/Effect|effect]] on specified position.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/createEffect|MTASA Wiki}
 * @param name A string contains Element/Effect#Effects_list|effect name.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
 * @param rX A floating point number representing the rotation about the X axis in degrees.
 * @param rY A floating point number representing the rotation about the Y axis in degrees.
 * @param rZ A floating point number representing the rotation about the Z axis in degrees.
 * @param drawDistance A floating point number between 1 and 8191 which represents the draw
 * distance of the effect, or 0 to use the default draw distance.  {{New feature/item|3.0155|1.5.5||
 * @default 0
 * @param soundEnable to enable the sound of the effect.  }}
 * @default false
 * @return
 */
export function createEffect(
    name: string,
    x: number,
    y: number,
    z: number,
    rX?: number,
    rY?: number,
    rZ?: number,
    drawDistance?: number,
    soundEnable?: boolean,
): Effect;

/**
 * [[Image:Fxblood.png|thumb|200px|Blood splatter]]
 * Creates a blood splatter particle effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddBlood|MTASA Wiki}
 * @param count the number of flying droplets to create.
 * @default 1
 * @param brightness the brightness. Ranges from 0 (almost black) to 1 (normal color).
 * @default 1.0
 * @return
 */
export function fxAddBlood(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
    count?: number,
    brightness?: number,
): boolean;

/**
 * [[Image:Fxbulletimpact.png|thumb|200px|Bullet impact]]
 * Creates a bullet impact particle effect, consisting of a small smoke cloud and a number of
 * sparks.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddBulletImpact|MTASA Wiki}
 * @param smokeSize the size of the smoke cloud.
 * @default 1
 * @param sparkCount the number of sparks to create.
 * @default 1
 * @param smokeIntensity the amount/transparency of smoke, ranges from 0 to 1.
 * @default 1.0
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddBulletImpact(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
    smokeSize?: number,
    sparkCount?: number,
    smokeIntensity?: number,
): boolean;

/**
 * [[Image:Fxbulletsplash.png|thumb|200px|Bullet splash]]
 * This function creates a bullet splash particle effect, normally created when shooting into water.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddBulletSplash|MTASA Wiki}
 * @param posX A float representing the x position of the splash
 * @param posY A float representing the y position of the splash
 * @param posZ A float representing the z position of the splash
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddBulletSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * [[Image:Fxdebris.png|thumb|200px|Debris]]
 * Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddDebris|MTASA Wiki}
 * @param scale the size of the chunks.
 * @default 1.0
 * @param count the number of chunks to create.
 * @default 1
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddDebris(
    posX: number,
    posY: number,
    posZ: number,
    colorR?: number,
    colorG?: number,
    colorB?: number,
    colorA?: number,
    scale?: number,
    count?: number,
): boolean;

/**
 * [[Image:Fxfootsplash.png|thumb|200px|Foot splash]]
 * This function creates a foot splash particle effect, normally created when walking into water.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddFootSplash|MTASA Wiki}
 * @param posX A float representing the x position of the splash
 * @param posY A float representing the y position of the splash
 * @param posZ A float representing the z position of the splash
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddFootSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * [[Image:Fxglass.png|thumb|200px|Glass]]
 * This function creates a glass particle effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddGlass|MTASA Wiki}
 * @param posX A float representing the x position of the glass
 * @param posY A float representing the y position of the glass
 * @param posZ A float representing the z position of the glass  {{OptionalArg}}
 * @param scale A float representing the size of the particle effect, where 1 is the standard size.
 * @default 1.0
 * @param count The density of the particle effect.
 * @default 1
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddGlass(
    posX: number,
    posY: number,
    posZ: number,
    colorR?: number,
    colorG?: number,
    colorB?: number,
    colorA?: number,
    scale?: number,
    count?: number,
): boolean;

/**
 * [[Image:Fxgunshot.png|thumb|200px|Gunshot]]
 * This function creates a gunshot particle effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddGunshot|MTASA Wiki}
 * @param includeSparks A bool representing whether the particle effect will generate sparks.
 * @default true
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddGunshot(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
    includeSparks?: boolean,
): boolean;

/**
 * [[Image:Fxpunchimpact.png|thumb|200px|Punch impact]]
 * Creates a punch impact particle effect (a small dust cloud).
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddPunchImpact|MTASA Wiki}
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddPunchImpact(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
): boolean;

/**
 * [[Image:Fxsparks.png|thumb|200px|Sparks]]
 * Creates a number of sparks originating from a point or along a line.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddSparks|MTASA Wiki}
 * @param force speed factor: the higher this value, the faster and further the sparks fly.
 * @default 1.0
 * @param count the number of effects to create.
 * @default 1
 * @param blur if false, creates standard bullet impact-like sparks. If true, adds motion blur to
 * the sparks.
 * @default false
 * @param spread determines how strongly the particles deviate from each other. With low values the
 * particles will stay quite close together, high values will make them fly in all directions. Also
 * affects their speed.
 * @default 1.0
 * @param life the higher this value, the longer the sparks survive before they disappear.
 * @default 1.0
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddSparks(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
    force?: number,
    count?: number,
    acrossLineX?: number,
    acrossLineY?: number,
    acrossLineZ?: number,
    blur?: boolean,
    spread?: number,
    life?: number,
): boolean;

/**
 * [[Image:Fxtankfire.png|thumb|200px|Tank fire]]
 * This function creates a tank firing particle effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddTankFire|MTASA Wiki}
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddTankFire(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
): boolean;

/**
 * [[Image:Fxtyreburst.png|thumb|200px|Tyre burst]]
 * Creates a tyre burst particle effect (a small white smoke puff).
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddTyreBurst|MTASA Wiki}
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddTyreBurst(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
): boolean;

/**
 * [[Image:Fxwaterhydrant.png|thumb|200px|Water hydrant]]
 * This function creates a water hydrant particle effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddWaterHydrant|MTASA Wiki}
 * @param posX A float representing the x position of the hydrant
 * @param posY A float representing the y position of the hydrant
 * @param posZ A float representing the z position of the hydrant
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddWaterHydrant(posX: number, posY: number, posZ: number): boolean;

/**
 * [[Image:Fxwatersplash.png|thumb|200px|Water splash]]
 * This function creates a water splash particle effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddWaterSplash|MTASA Wiki}
 * @param posX A float representing the x position of the splash
 * @param posY A float representing the y position of the splash
 * @param posZ A float representing the z position of the splash
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddWaterSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * [[Image:Fxwood.png|thumb|200px|Wood]]
 * Creates a wood splinter particle effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/fxAddWood|MTASA Wiki}
 * @param count the number of splinters to create.
 * @default 1
 * @param brightness the brightness. Ranges from 0 (black) to 1 (normal color).
 * @default 1.0
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function fxAddWood(
    posX: number,
    posY: number,
    posZ: number,
    dirX: number,
    dirY: number,
    dirZ: number,
    count?: number,
    brightness?: number,
): boolean;

/**
 * This function gets the density of certain [[effect]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getEffectDensity|MTASA Wiki}
 * @param theEffect The effect to get density of.
 * @return
 */
export function getEffectDensity(theEffect: Effect): number;

/**
 * This function gets the speed of a specified [[effect]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getEffectSpeed|MTASA Wiki}
 * @param theEffect The effect to get the speed of.
 * @return Returns [[float]] containing the effect's speed, ''false'' if invalid arguments were
 * specified.
 */
export function getEffectSpeed(theEffect: Effect): number;

/**
 * This function sets the density of a specified [[effect]].
 * }}
 * The limit is 1 for Low, 1.5 for Medium, and 2 for High/Very high.|true}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setEffectDensity|MTASA Wiki}
 * @param theEffect The effect to change the speed of.
 * @param density The level of density (from 0 to 2).
 * @return Returns ''true'' if the density was succesfully changed, ''false'' otherwise.
 */
export function setEffectDensity(theEffect: Effect, density: number): boolean;

/**
 * This function sets the speed of a specified [[effect]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setEffectSpeed|MTASA Wiki}
 * @param theEffect The effect to change the speed of.
 * @param speed The speed to set.
 * @return Returns ''true'' if the effect speed was succesfuly changed, ''false'' otherwise.
 */
export function setEffectSpeed(theEffect: Effect, speed: number): boolean;
