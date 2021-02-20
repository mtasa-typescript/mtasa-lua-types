/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Player } from 'types/mtasa/server/structure';

/**
 * This function can be used to detonate a players satchels.
 * @see {@link https://wiki.multitheftauto.com/wiki/detonateSatchels|MTASA Wiki}
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function detonateSatchels(Player: Player): boolean;
