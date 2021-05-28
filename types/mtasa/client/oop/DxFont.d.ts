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
    Matrix,
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
    HandleFunction
} from '../structure';

/** @customConstructor DxFont */
export class DxFont {
    /**
     * <br/>
     * This function creates a DX font element that can be used in dxDrawText. Successful font
     * creation is not guaranteed, and may fail due to hardware or memory limitations.
     * To see if creation is likely to fail, use dxGetStatus. (When VideoMemoryFreeForMTA is
     * zero, failure is guaranteed.)
     * @see {@link https://wiki.multitheftauto.com/wiki/DxCreateFont Wiki, dxCreateFont }
     * @param filepath the name of the file containing the font
     * @param size size of the font
     * @param bold flag to indicate if the font should be bold
     * @param quality the font quality
     * ** "default": not the actual default
     * ** "draft"
     * ** "proof": the default
     * ** "nonantialiased"
     * ** "antialiased"
     * ** "cleartype"
     * ** "cleartype_natural"
     * @return returns a dx font element if successful, false if invalid arguments were passed to the
     * function, or there is insufficient resources available.
     * you should always check to see if this function has returned false.
     */
    constructor(
        filepath: string,
        size?: number,
        bold?: boolean,
        quality?: string
    );

    /**
     * This function retrieves the theoretical height of a certain piece of text, if it were to
     * be drawn using dxDrawText.
     * @see {@link https://wiki.multitheftauto.com/wiki/DxGetFontHeight Wiki, dxGetFontHeight }
     * @param font Either a custom DX font element or the name of a built-in dx font:
     * @return returns an integer of the height of the text.
     */
    getHeight(
        font?: any
    ): number;

    /**
     * NOTE: This function already takes the clients screen resolution into account.
     * @see {@link https://wiki.multitheftauto.com/wiki/DxGetTextSize Wiki, dxGetTextSize }
     * @param width The width of the text. Use with wordBreak = true.
     * @param scaleX The scale of the text. Scale can also be inputted as a Vector2.
     * @param scaleY The scale of the text.
     * @param font Either a custom DX font element or the name of a built-in dx font:
     * @param wordBreak If set to true, the text will wrap to a new line whenever it reaches the right side of
     * the bounding box. If false, the text will always be completely on one line.
     * @param colorCoded Should we exclude color codes from the width? False will include the hex in the length.
     * Returns two floats representing the width and height of the text in pixels.
     * @return returns two floats representing the width and height of the text in pixels.
     */
    getSize(
        width?: number,
        scaleX?: number,
        scaleY?: number,
        font?: any,
        wordBreak?: boolean,
        colorCoded?: boolean
    ): LuaMultiReturn<[
        number,
        number
    ]>;

    /**
     * This function retrieves the theoretical width (in pixels) of a certain piece of text, if
     * it were to be drawn using dxDrawText.
     * NOTE: This function already takes the clients screen resolution into account.
     * @see {@link https://wiki.multitheftauto.com/wiki/DxGetTextWidth Wiki, dxGetTextWidth }
     * @param scale The size of the text.
     * @param font Either a custom DX font element or the name of a built-in dx font:
     * @param bColorCoded Should we exclude color codes from the width? (false will include the hex in the length)
     * Returns the float of the width of the text (in pixels).
     * @return returns the float of the width of the text (in pixels).
     */
    getTextWidth(
        scale?: number,
        font?: any,
        bColorCoded?: boolean
    ): number;
}
