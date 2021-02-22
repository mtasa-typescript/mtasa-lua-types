/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Player } from '../structure';

/**
 * Creates an explosion of a certain type at a specified point in the world. If creator is
 * specified, the explosion will occur only in its dimension.
 * @see {@link https://wiki.multitheftauto.com/wiki/createExplosion|MTASA Wiki}
 * @param x a float value that specifies the X world coordinate where the explosion is created at.
 * @param y a float value that specifies the Y world coordinate where the explosion is created at.
 * @param z a float value that specifies the Z world coordinate where the explosion is created at.
 * @param theType an integer specifying the explosion type. Valid types are:  {{Explosions}}
 * @param creator the explosions simulated creator, the player responsible for it.
 * @default nil
 * @return *''true'' if the explosion was created.
 * * * ''false'' if invalid parameters were passed.
 */
export function createExplosion(x: number, y: number, z: number, theType: number, creator?: Player): boolean;
