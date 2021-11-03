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
} from '../../structure';

/** @customConstructor GuiEdit */
export class GuiEdit extends GuiElement {
    /**
     * This function returns the caret (the text cursor) position within the editbox.
     */
    caretIndex: number;

    /**
     */
    maxLength: number;

    /**
     * This function sets or removes masking (covering up the text being typed) for password
     * text fields.
     */
    masked: boolean;

    /**
     * This function allows you to set or remove read-only status for an edit box. If read-only
     * is set to true, the box is not editable.
     */
    readOnly: boolean;

    /**
     * This function is for creating a new GUI edit box. This is a text box in which the user
     * can input text. Edit boxes only allow a single line of text. If you want to allow
     * multiple lines of text create a memo box using guiCreateMemo.
     * @see https://wiki.multitheftauto.com/wiki/GuiCreateEdit
     * @param x A float of the 2D x position of the GUI edit box on a players screen.  This is affected
     * by the relative argument.
     * @param y A float of the 2D y position of the GUI edit box on a players screen. This is affected by
     * the relative argument.
     * @param width A float of the width of the GUI edit box. This is affected by the relative argument.
     * @param height A float of the height of the GUI edit box. This is affected by the relative argument.
     * @param text A string of the text that will be displayed by default in the edit box.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing measures relative to the
     * parent.
     * @param parent This is the parent that the GUI edit box is attached to.  If the relative argument is
     * true, sizes and positioning will be made relative to this parent. If the relative
     * argument is false, positioning will be the number of offset pixels from the parents
     * origin. If no parent is passed, the parent will become the screen - causing positioning
     * and sizing according to screen positioning.
     * @return returns a gui-edit element of the created edit box if it was successfully created, false
     * otherwise.
     */
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
        relative: boolean,
        parent?: Element,
    );

    /**
     * This function returns the caret (the text cursor) position within the editbox.
     * @see https://wiki.multitheftauto.com/wiki/GuiEditGetCaretIndex
     * @return returns the caret index on success, false otherwise.
     */
    getCaretIndex(): number;

    /**
     * @see https://wiki.multitheftauto.com/wiki/GuiEditGetMaxLength
     * @return returns the maximum text length on success, false otherwise.
     */
    getMaxLength(): number;

    /**
     * This function sets the current position of the caret (the text cursor) within the edit
     * box.
     * @see https://wiki.multitheftauto.com/wiki/GuiEditSetCaretIndex
     * @param index An integer referring to the desired position within the box.
     * @return returns true if the index was successfully set, false otherwise.
     */
    setCaretIndex(index: number): boolean;

    /**
     * This function sets or removes masking (covering up the text being typed) for password
     * text fields.
     * @see https://wiki.multitheftauto.com/wiki/GuiEditSetMasked
     * @param status A boolean value indicating whether masking is to be enabled or disabled.
     * @return returns true if the function is successful, false otherwise.
     */
    setMasked(status: boolean): boolean;

    /**
     * This function sets the maximum text length that can be typed into an edit box.
     * @see https://wiki.multitheftauto.com/wiki/GuiEditSetMaxLength
     * @param theElement The edit box to be changed.
     * @param length An integer indicating the maximum number of characters that can be typed into the box.
     * @return returns true if the max length was set successfully, false otherwise.
     */
    setMaxLength(length: number): boolean;

    /**
     * This function allows you to set or remove read-only status for an edit box. If read-only
     * is set to true, the box is not editable.
     * @see https://wiki.multitheftauto.com/wiki/GuiEditSetReadOnly
     * @param status A boolean value indicating whether read-only is to be enabled or disabled.
     * @return returns true if edit fields read-only status was changed successfully, false otherwise.
     */
    setReadOnly(status: boolean): boolean;
}