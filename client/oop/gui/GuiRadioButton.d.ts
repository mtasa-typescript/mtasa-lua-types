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

/** @customConstructor GuiRadioButton */
export class GuiRadioButton {
    /**
     * This function gets a radio buttons selection state.
     */
    selected: boolean;

    /**
     * This function creates a Element/GUI/Radio button|radio button.
     * @see https://wiki.multitheftauto.com/wiki/GuiCreateRadioButton
     * @param x A float of the 2D x position of the radio button on a players screen. This is affected by
     * the relative argument.
     * @param y A float of the 2D y position of the radio button on a players screen. This is affected by
     * the relative argument.
     * @param width A float of the width of the text field next to the radio button. This is affected by the
     * relative argument.
     * @param height A float of the height of the text field next to the radio button. This is affected by the
     * relative argument.
     * @param text The text to be displayed next to the radio button.
     * @param relative This is whether sizes and positioning are relative. If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing measures relative to the
     * parent.
     * @param parent This is the parent that the radio button is attached to. If the relative argument is
     * true, sizes and positioning will be made relative to this parent. If the relative
     * argument is false, positioning will be the number of offset pixels from the parents
     * origin. If no parent is passed, the parent will become the screen - causing positioning
     * and sizing according to screen positioning.
     * ''NOTE:'' All radio buttons become grouped together with their parent item.  Only ONE
     * radio button per group/parent will be able to be selected at the same time.
     * @return returns element of the radio button if it was created succesfully, false otherwise.
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
     * This function gets a radio buttons selection state.
     * @see https://wiki.multitheftauto.com/wiki/GuiRadioButtonGetSelected
     * @return returns true if the radio button is selected, false if it is not.
     */
    getSelected(): boolean;

    /**
     * This function selects or unselects a radio button.
     * @see https://wiki.multitheftauto.com/wiki/GuiRadioButtonSetSelected
     * @param state The state of the radio button, where true indicates selected, and false indicates
     * unselected.
     * @return returns true if the radio buttons selection state was successfully set, false otherwise.
     */
    setSelected(state: boolean): boolean;
}