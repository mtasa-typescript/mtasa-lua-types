/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Player, Table, TextDisplay, TextItem } from 'types/mtasa/server/structure';

/**
 * A [[textdisplay|text display]] is like a canvas that can contain many [[textitem|items of
 * text]]. Each display can be seen by multiple observers (players) and each player can see multiple displays.
 * @see {@link https://wiki.multitheftauto.com/wiki/textCreateDisplay|MTASA Wiki}
 * @return
 */
export function textCreateDisplay(): TextDisplay;

/**
 * This function creates a text item. A text item represents a single area of text, much like a
 * label does in standard GUI programming. A text item can only be seen by players if it is added to a
 * [[textdisplay]] using [[textDisplayAddText]]. Each text item can be added to multiple displays, if need
 * be.
 * @see {@link https://wiki.multitheftauto.com/wiki/textCreateTextItem|MTASA Wiki}
 * @param text : A string of text you want to display
 * @param x : A floating point number between 0.0 and 1.0 indicating how far across the screen the
 * text should be shown, as a percentage of the width, from the left hand side.
 * @param y : A floating point number between 0.0 and 1.0 indicating how far down the screen the
 * text should be shown, as a percentage of the height, from the top.  {{OptionalArg}}
 * @param priority : How important it is that this text should be up to date on clients screens.
 * Valid values are: low, medium, high which are aliases for 0, 1 and 2 respectively.
 * @param red : A value between 0 and 255 indicating how red the text should be.
 * @default 255
 * @param green : A value between 0 and 255 indicating how green the text should be.
 * @default 255
 * @param blue : A value between 0 and 255 indicating how blue the text should be.
 * @default 255
 * @param alpha : A value between 0 and 255 indicating how transparent the text should be, with 0
 * being fully transparent, and 255 being opaque.
 * @default 255
 * @param scale : A floating point value indicating the scale of the text. The default is 1.0,
 * which is around 12pt.
 * @default 1
 * @param alignX : A string representing the X-alignment of the text. (left, center, right)
 * @default "left"
 * @param alignY : A string representing the Y-alignment of the text. (top, center, bottom)
 * @default "top"
 * @param shadowAlpha : A value between 0 and 255 indicating how dark the drop shadow should be.
 * @default 0
 * @return Returns a [[textitem]] object.
 */
export function textCreateTextItem(
    text: string,
    x: number,
    y: number,
    priority: string,
    red: number,
    green: number,
    blue: number,
    alpha: number,
    scale: number,
    alignX: string,
    alignY: string,
    shadowAlpha: number,
): TextItem;

/**
 * This function destroys a text display and will unlink all the [[textitem]]s on it. This does not
 * stop the textitems existing, but anyone who was observing the textitems through this display will
 * stop seeing them.
 * @see {@link https://wiki.multitheftauto.com/wiki/textDestroyDisplay|MTASA Wiki}
 * @param display This is the textdisplay that you wish to have destroyed.
 * @return
 */
export function textDestroyDisplay(display: TextDisplay): boolean;

/**
 * This function destroys a [[textitem]] object.
 * @see {@link https://wiki.multitheftauto.com/wiki/textDestroyTextItem|MTASA Wiki}
 * @param theTextitem The text item you wish to destroy.
 * @return
 */
export function textDestroyTextItem(theTextitem: TextItem): void;

/**
 * This function adds a [[player]] as an observer of a [[textdisplay]]. This allows the [[player]]
 * to see any [[textitem]]s that the [[textdisplay]] contains.
 * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayAddObserver|MTASA Wiki}
 * @param display : The textdisplay to add the player to as an observer.
 * @param playerToAdd : The player that should observe the textdisplay.
 * @return
 */
export function textDisplayAddObserver(display: TextDisplay, playerToAdd: Player): void;

/**
 * This function adds a [[textitem]] to a [[textdisplay]]. This allows any observers of the
 * [[textdisplay]] to see the [[textitem]].
 * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayAddText|MTASA Wiki}
 * @param displayToAddTo : The textdisplay to add the textitem to.
 * @param itemToAdd : The textitem to add to the display.
 * @return
 */
export function textDisplayAddText(displayToAddTo: TextDisplay, itemToAdd: TextItem): void;

/**
 * This function can be used to retrieve all the [[player]]s  currently observing a specified
 * [[textdisplay]].
 * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayGetObservers|MTASA Wiki}
 * @param theDisplay : The textdisplay of which observers you want to get.
 * @return Returns a [[table]] of players that are observers of the display or ''false'' if invalid
 * textdisplay is passed.
 */
export function textDisplayGetObservers(theDisplay: TextDisplay): Table;

/**
 * This function checks if a player can see the specified [[textdisplay]].
 * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayIsObserver|MTASA Wiki}
 * @param display : The textdisplay.
 * @param thePlayer : The player.
 * @return Return true if [[textdisplay]] is showing, or false if not.
 */
export function textDisplayIsObserver(display: TextDisplay, thePlayer: Player): boolean;

/**
 * This function removes a [[player]] observer of a [[textdisplay]]. This stops the [[player]] from
 * being able to see [[textitem]]s that the [[textdisplay]] contains.
 * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayRemoveObserver|MTASA Wiki}
 * @param display : The textdisplay to remove the player from as an observer.
 * @param playerToRemove : The player that should be removed from the textdisplay.
 * @return
 */
export function textDisplayRemoveObserver(display: TextDisplay, playerToRemove: Player): boolean;

/**
 * This function removes a [[textitem]] from a [[textdisplay]]. This stops any observers of the
 * [[textdisplay]] from being able to see the [[textitem]].
 * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayRemoveText|MTASA Wiki}
 * @param displayToRemoveFrom : The textdisplay to remove the textitem from.
 * @param itemToRemove : The textitem to remove from the display.
 * @return
 */
export function textDisplayRemoveText(displayToRemoveFrom: TextDisplay, itemToRemove: TextItem): void;

/**
 * This function allows you to retrieve the color of a text item.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetColor|MTASA Wiki}
 * @param theTextItem The text item you wish to retrieve the color of.
 * @return Returns four integers in RGBA format, with a maximum value of 255 for each. The values
 * are, in order, ''red'', ''green'', ''blue'', and ''alpha''. Alpha decides transparency where 255 is
 * opaque and 0 is transparent. ''false'' is returned if the text item is invalid.
 */
export function textItemGetColor(theTextItem: TextItem): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function allows retrieval of the position of a text item.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetPosition|MTASA Wiki}
 * @param theTextItem The textitem you wish to retrieve the position of
 * @return Returns two floats of the ''x'' and ''y'' position on the screen, where the maximum
 * value is 1.0.
 */
export function textItemGetPosition(theTextItem: TextItem): LuaMultiReturn<[number, number]>;

/**
 * This function retrieves the priority of a text item.  Priority defines the rate at whihc a text
 * item is updated
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetPriority|MTASA Wiki}
 * @param textitemToCheck The text item you wish to retrieve the priority of.
 * @return Returns a integer of the priority of a text item, 0 = low, 1 = medium, 2 = high.
 */
export function textItemGetPriority(textitemToCheck: TextItem): number;

/**
 * This function allows retrieval of the scale or size of a text item.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetScale|MTASA Wiki}
 * @param theTextitem The text item you wish to retrieve the scale of
 * @return Returns a floating point of the scale of the text. 1.0 is around 12pt.
 */
export function textItemGetScale(theTextitem: TextItem): number;

/**
 * This function returns the current text of the specified [[textitem]].
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetText|MTASA Wiki}
 * @param theTextitem A valid textitem.
 * @return Returns a [[string]] containing the text if the function was successful, ''false''
 * otherwise.
 */
export function textItemGetText(theTextitem: TextItem): string;

/**
 * This function sets the color of a text item.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetColor|MTASA Wiki}
 * @param theTextItem The textitem you wish to set the color of.
 * @return Returns ''true'' if the color was successfully set, ''false'' otherwise.
 */
export function textItemSetColor(theTextItem: TextItem, r: number, g: number, b: number, a: number): boolean;

/**
 * This function allows the setting of the position of a text item.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetPosition|MTASA Wiki}
 * @param theTextItem The text item that you want to move
 * @param x A floating point number between 0.0 and 1.0 indicating how far across the screen the
 * text should be shown, as a percentage of the width, from the left hand side.
 * @param y A floating point number between 0.0 and 1.0 indicating how far down the screen the text
 * should be shown, as a percentage of the height, from the top.
 * @return Returns ''true'' if the position was successfully set, ''false'' otherwise.
 */
export function textItemSetPosition(theTextItem: TextItem, x: number, y: number): boolean;

/**
 * This function sets the priority for a text item.  Priority is the importance of sending updated
 * text to the client. The system is implemented as 3 queues, with the ''high'' queue being emptied
 * before the ''medium'' queue is processed, and with one update sent per server frame. Hence, if you set
 * all your text items to ''medium'' priority it has the same effect as if you set them all to ''high''
 * or ''low''.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetPriority|MTASA Wiki}
 * @param theTextItem The text item you wish to set priority to.
 * @param priority The priority you wish to set to the item, which can be high, medium, or low
 * respective of their priority.
 * @return
 */
export function textItemSetPriority(theTextItem: TextItem, priority: string): void;

/**
 * This function allows the setting of the scale of a text item.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetScale|MTASA Wiki}
 * @param theTextitem The text item you wish to set the scale of.
 * @param scale A floating point value indicating the scale of the text you wish to set to. 1.0 is
 * around 12pt.
 * @return Returns ''true'' if the scale was successfully set, ''false'' otherwise.
 */
export function textItemSetScale(theTextitem: TextItem, scale: number): boolean;

/**
 * Overwrites a previously created text item with the specified text.
 * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetText|MTASA Wiki}
 * @param theTextitem An existing text item that was previously created with textCreateTextItem
 * @param text The new text for the text item
 * @return
 */
export function textItemSetText(theTextitem: TextItem, text: string): void;
