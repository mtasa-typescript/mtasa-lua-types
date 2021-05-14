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
    Texture,
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
} from '../../structure';

/** @customConstructor GuiLabel */
export class GuiLabel extends GuiElement {
    /**
     * This function returns the height of the font currently used in a GUI text label.
     */
    fontHeight: number;

    /**
     * This function returns the extent, or width, of the current text inside a GUI text label.
     */
    textExtent: number;

    /**
     * This function sets the horizontal alignment of a text label.
     */
    horizontalAlign: boolean;

    /**
     * This function sets the vertical alignment of a text label.
     */
    verticalAlign: boolean;

    /**
     * <table><tr><td valign=top height=100>
     * This function is for creating a new GUI label.  A label is simply a piece of text that
     * cannot be edited by the user. If you would like to have a bigger text youd have to change
     * its font because font size is not supported.
     * </td></tr></table>
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiCreateLabel Wiki, guiCreateLabel }
     * @param x A float of the 2D x position of the GUI label on a players screen.  This is affected by
     * the relative argument.
     * @param y A float of the 2D y position of the GUI label on a players screen. This is affected by
     * the relative argument.
     * @param width A float of the width of the GUI label. This is affected by the relative argument.
     * @param height A float of the height of the GUI label. This is affected by the relative argument.
     * @param text A string of the text that will be displayed by the label.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing sizes relative to the
     * parent.
     * @param parent This is the parent that the gui label is attached to.  If the relative argument is true,
     * sizes and positioning will be made relative to this parent. If the relative argument is
     * false, positioning will be the number of offset pixels from the parents origin. If no
     * parent is passed, the parent will become the screen - causing positioning and sizing
     * according to screen positioning.
     * @return returns an gui_widgets|element of the created label if it was successfully created, false
     * otherwise.
     */
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
        relative: boolean,
        parent?: Element
    );

    /**
     * This function gets the color of a label.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiLabelGetColor Wiki, guiLabelGetColor }
     * @return returns three int values, representing the amount of red, green, blue if successful.
     * false otherwise.
     */
    getColor(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function returns the height of the font currently used in a GUI text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiLabelGetFontHeight Wiki, guiLabelGetFontHeight }
     * @return returns the absolute height of the font currently used in the text label if the function
     * is successful, false otherwise.
     */
    getFontHeight(): number;

    /**
     * This function returns the extent, or width, of the current text inside a GUI text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiLabelGetTextExtent Wiki, guiLabelGetTextExtent }
     * @return returns the absolute width of the current text inside the text label if the function is
     * successful, false otherwise.
     */
    getTextExtent(): number;

    /**
     * This function allows you to set the color of a GUI label.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiLabelSetColor Wiki, guiLabelSetColor }
     * @param red An integer specifying the amount of red (0 to 255).
     * @param green An integer specifying the amount of green (0 to 255).
     * @param blue An integer specifying the amount of blue (0 to 255).
     * @return returns true if the the color of the gui label was successfully changed, false otherwise.
     */
    setColor(
        red: number,
        green: number,
        blue: number
    ): boolean;

    /**
     * This function sets the horizontal alignment of a text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiLabelSetHorizontalAlign Wiki, guiLabelSetHorizontalAlign }
     * @param align The alignment type. Valid type strings are:
     * **"left"
     * **"center"
     * **"right"
     * @param wordwrap Whether or not to enable wordwrap for the gui-label.
     * @return returns true on success, false otherwise.
     */
    setHorizontalAlign(
        align: string,
        wordwrap?: boolean
    ): boolean;

    /**
     * This function sets the vertical alignment of a text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiLabelSetVerticalAlign Wiki, guiLabelSetVerticalAlign }
     * @param align The alignment type. Valid type strings are:
     * **"top"
     * **"center"
     * **"bottom"
     * @return returns true on success, false otherwise.
     */
    setVerticalAlign(
        align: string
    ): boolean;
}
