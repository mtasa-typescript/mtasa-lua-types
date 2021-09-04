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
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../../structure';

/** @customConstructor GuiButton */
export class GuiButton {
    /**
     * This function allows creation of a GUI Button, which is a clickable item as part of GUI.
     * @see https://wiki.multitheftauto.com/wiki/GuiCreateButton
     * @param x A float of the 2D x position of the GUI button on a players screen.  This is affected by
     * the relative argument.
     * @param y A float of the 2D y position of the GUI button on a players screen. This is affected by
     * the relative argument.
     * @param width A float of the width of the GUI button. This is affected by the relative argument.
     * @param height A float of the height of the GUI button. This is affected by the relative argument.
     * @param text A string of the text that will be displayed as a label on the button.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x, y,
     * width and height floats must be between 0 and 1, representing sizes relative to the
     * parent.
     * @param parent This is the parent that the gui button is attached to.  If the relative argument is true,
     * sizes and positioning will be made relative to this parent. If the relative argument is
     * false, positioning will be the number of offset pixels from the parents origin. If no
     * parent is passed, the parent will become the screen - causing positioning and sizing
     * according to screen positioning.
     * @return returns an element of the created element/gui/button|button if it was successfully
     * created, false otherwise.
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
}
