// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    DxTexture,
    ObjectGroup,
    Browser,
    Light,
    Effect,
    Searchlight,
    Weapon,
    GuiBrowser,
    GuiMemo,
    GuiElement,
    GuiEdit,
    GuiScrollBar,
    GuiWindow,
    Projectile,
    Material,
    Svg,
    SvgCallback,
    Userdata,
    TextItem,
    Pickup,
    Request,
    Player,
    Blip,
    ColShape,
    Element,
    Ped,
    Resource,
    Team,
    Vehicle,
    XmlNode,
    File,
    Marker,
    MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/**
 * This function is used to get the clients cursor alpha (transparency).
 * @see https://wiki.multitheftauto.com/wiki/GetCursorAlpha
 * @return returns a int between 0 and 255, where 255 is fully opaque and 0 is fully transparent.
 * @noSelf
 */
export declare function getCursorAlpha(): number;

/**
 * This function gets the current position of the mouse cursor. Note that for performance
 * reasons, the world position returned is always 300 units away. If you want the exact
 * world point (similar to onClientClick), use processLineOfSight between the camera
 * position and the worldX/Y/Z result of this function. (See example below)
 * @see https://wiki.multitheftauto.com/wiki/GetCursorPosition
 * @return returns 5 values: cursorx, cursory, worldx, worldy, worldz. the first two values are the
 * 2d relative screen coordinates of the cursor. the 3 values that follow are the 3d world
 * map coordinates that the cursor points at. if the cursor isnt showing, returns false as
 * the first value.
 * @noSelf
 */
export declare function getCursorPosition(): LuaMultiReturn<
    [number, number, number, number, number]
>;

/**
 * This function is used to determine whether or not a players cursor is showing.
 * @see https://wiki.multitheftauto.com/wiki/IsCursorShowing
 * @return returns true if the players cursor is showing, false if it isnt.
 * @noSelf
 */
export declare function isCursorShowing(): boolean;

/**
 * This function is used to change alpha (transparency) from the clients cursor.
 * @see https://wiki.multitheftauto.com/wiki/SetCursorAlpha
 * @param alpha : The alpha value to set. Value can be 0-255, where 255 is fully opaque and 0 is fully
 * transparent.
 * @return returns true if the new alpha value was set, or false otherwise.
 * @noSelf
 */
export declare function setCursorAlpha(alpha: number): boolean;

/**
 * This function sets the current position of the mouse cursor.
 * @see https://wiki.multitheftauto.com/wiki/SetCursorPosition
 * @param cursorX Position over the X axis
 * @param cursorY Position over the Y axis
 * @return returns true if the position has been successfully set, false otherwise.
 * @noSelf
 */
export declare function setCursorPosition(
    cursorX: number,
    cursorY: number,
): boolean;

/**
 * This function is used to show or hide a players cursor.
 * @see https://wiki.multitheftauto.com/wiki/ShowCursor
 * @param show A boolean value determining whether to show (true) or hide (false) the cursor.
 * @param toggleControls A boolean value determining whether to disable controls whilst the cursor is showing.
 * true implies controls are disabled, false implies controls remain enabled.
 * @noSelf
 */
export declare function showCursor(
    show: boolean,
    toggleControls?: boolean,
): boolean;
