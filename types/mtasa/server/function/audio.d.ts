/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Player } from '../structure';

/**
 * This function plays a frontend sound for the specified player.
 * @see {@link https://wiki.multitheftauto.com/wiki/playSoundFrontEnd|MTASA Wiki}
 * @param thePlayer the player you want the sound to play for.
 * @param sound a whole int specifying the sound id to play. Valid values are:  {{Sounds}}
 * @return Returns ''true'' if the sound was successfully played, ''false'' otherwise.
 */
export function playSoundFrontEnd(thePlayer: Player, sound: number): boolean;
