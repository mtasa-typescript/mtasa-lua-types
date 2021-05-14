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
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiCreateEdit Wiki, guiCreateEdit }
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
        width: number,
        height: number,
        text: string,
        relative: boolean,
        parent?: Element
    );

    /**
     * This function returns the caret (the text cursor) position within the editbox.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiEditGetCaretIndex Wiki, guiEditGetCaretIndex }
     * @return returns the caret index on success, false otherwise.
     */
    getCaretIndex(): number;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiEditGetMaxLength Wiki, guiEditGetMaxLength }
     * @return returns the maximum text length on success, false otherwise.
     */
    getMaxLength(): number;

    /**
     * This function sets the current position of the caret (the text cursor) within the edit
     * box.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiEditSetCaretIndex Wiki, guiEditSetCaretIndex }
     * @return returns true if the index was successfully set, false otherwise.
     */
    setCaretIndex(): boolean;

    /**
     * This function sets or removes masking (covering up the text being typed) for password
     * text fields.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiEditSetMasked Wiki, guiEditSetMasked }
     * @return returns true if the function is successful, false otherwise.
     */
    setMasked(): boolean;

    /**
     * This function sets the maximum text length that can be typed into an edit box.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiEditSetMaxLength Wiki, guiEditSetMaxLength }
     * @param theElement The edit box to be changed.
     * @return returns true if the max length was set successfully, false otherwise.
     */
    setMaxLength(): boolean;

    /**
     * This function allows you to set or remove read-only status for an edit box. If read-only
     * is set to true, the box is not editable.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiEditSetReadOnly Wiki, guiEditSetReadOnly }
     * @return returns true if edit fields read-only status was changed successfully, false otherwise.
     */
    setReadOnly(): boolean;
}
