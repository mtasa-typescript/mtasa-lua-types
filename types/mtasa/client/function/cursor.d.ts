/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * This function is used to get alpha (transparency) from the client's cursor.
 * @see {@link https://wiki.multitheftauto.com/wiki/getCursorAlpha|MTASA Wiki}
 * @return Returns a int, 0-255, where 255 is fully opaque and 0 is fully transparent.
 */
export function getCursorAlpha(): number;

/**
 * This function gets the current position of the mouse cursor. Note that for performance reasons,
 * the world position returned is always 300 units away. If you want the exact world point (similar to
 * [[onClientClick]]), use [[processLineOfSight]] between the camera position and the worldX/Y/Z result
 * of this function. (See example below)
 * @see {@link https://wiki.multitheftauto.com/wiki/getCursorPosition|MTASA Wiki}
 * @return Returns 5 values: ''cursorX'', ''cursorY'', ''worldX'', ''worldY'', ''worldZ''. The
 * first two values are the 2D relative screen coordinates of the cursor: ''cursorX'' goes from 0 (left
 * side of the screen) to 1 (right side), ''cursorY'' goes from 0 (top) to 1 (bottom). The 3 values that
 * follow are the 3D world map coordinates that the cursor points at. If the cursor isn't showing,
 * returns ''false'' as the first value.
 */
export function getCursorPosition(): LuaMultiReturn<[number, number, number, number, number]>;

/**
 * This function is used to change alpha (transparency) from the client's cursor.
 * @see {@link https://wiki.multitheftauto.com/wiki/setCursorAlpha|MTASA Wiki}
 * @return Returns ''true'' if the new alpha value was set, or ''false'' otherwise.
 */
export function setCursorAlpha(alpha: number): boolean;

/**
 * This function sets the current position of the mouse cursor.
 * @see {@link https://wiki.multitheftauto.com/wiki/setCursorPosition|MTASA Wiki}
 * @param cursorX Position over the X axis
 * @param cursorY Position over the Y axis
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the position has been successfully set, ''false'' otherwise.
 */
export function setCursorPosition(cursorX: number, cursorY: number): boolean;

/**
 * This function is used to determine whether or not a player's cursor is showing.
 * @see {@link https://wiki.multitheftauto.com/wiki/isCursorShowing|MTASA Wiki}
 * @return Returns ''true'' if the player's cursor is showing, ''false'' if it isn't.
 */
export function isCursorShowing(): boolean;

/**
 * This function is used to show or hide a [[player]]'s cursor.
 * @see {@link https://wiki.multitheftauto.com/wiki/showCursor|MTASA Wiki}
 * @param show A boolean value determining whether to show (true) or hide (false) the cursor.
 * {{OptionalArg}}
 * @param toggleControls A boolean value determining whether to disable controls whilst the cursor
 * is showing.  true implies controls are disabled, false implies controls remain enabled.
 * @default true
 * @return Returns ''true'' if the player's cursor was shown or hidden successfully, ''false''
 * otherwise.
 */
export function showCursor(show: boolean, toggleControls: boolean): boolean;
