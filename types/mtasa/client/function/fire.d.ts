/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * [[Image:Fire.png|thumb|200px|Fire with default size (1.8)]]
 * Creates a patch of fire that will spread a bit and die out after a while. Because it's a client
 * side only function, other players won't see it, so custom events or custom objects will be needed to
 * make a fire visible to some players.
 * @see {@link https://wiki.multitheftauto.com/wiki/createFire|MTASA Wiki}
 * @param size a float value indicating the size of the initial patch of fire. It will also make
 * the fire to stay alive more or less time.
 * @default 1.8
 * @return Returns ''true'' if successful, ''false'' if bad arguments were passed or the limit of
 * active fires was reached. There can be a maximum of 60 active fires.
 */
export function createFire(x: number, y: number, z: number, size?: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/extinguishFire|MTASA Wiki}
 * @param radius a float value indicating the radius in which to extinguish fire.
 * @default 1.0
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function extinguishFire(x: number, y: number, z: number, radius?: number): boolean;
