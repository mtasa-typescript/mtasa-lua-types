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
} from '../structure';

/** @customConstructor DxRenderTarget */
export class DxRenderTarget {
    /**
     * This function creates a render target element, which is a special type of texture that
     * can be drawn on with the dx functions. Successful render target creation is not
     * guaranteed, and may fail due to hardware or memory limitations.
     * To see if creation is likely to fail, use dxGetStatus. (When VideoMemoryFreeForMTA is
     * zero, failure is guaranteed.)
     * @see https://wiki.multitheftauto.com/wiki/DxCreateRenderTarget
     * @param width The width of the texture in pixels.
     * @param height The height of the texture in pixels.
     * @param withAlpha The render target will be created with an alpha channel. false will turn images alpha
     * channels to black color
     * @return returns a texture element if successful, false if the system is unable to create a render
     * target.
     * you should always check to see if this function has returned false.
     */
    constructor(width: number, height: number, withAlpha?: boolean);
}
