/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Player } from '../structure';

/**
 * This function is used to determine whether or not a player's cursor is showing.
 * @see {@link https://wiki.multitheftauto.com/wiki/isCursorShowing|MTASA Wiki}
 * @param thePlayer The player you want to get cursor state of.
 * @return Returns ''true'' if the player's cursor is showing, ''false'' if it isn't or if invalid
 * parameters were passed.
 */
export function isCursorShowing(thePlayer: Player): boolean;

/**
 * This function is used to show or hide a [[player]]'s cursor.
 * @see {@link https://wiki.multitheftauto.com/wiki/showCursor|MTASA Wiki}
 * @param thePlayer The player you want to show or hide the cursor of.
 * @param show A boolean value determining whether to show (true) or hide (false) the cursor.
 * {{OptionalArg}}
 * @param toggleControls A boolean value determining whether to disable controls whilst the cursor
 * is showing.  true implies controls are disabled, false implies controls remain enabled.
 * @default true
 * @return Returns ''true'' if the player's cursor was shown or hidden successfully, ''false''
 * otherwise.
 */
export function showCursor(thePlayer: Player, show: boolean, toggleControls: boolean): boolean;
