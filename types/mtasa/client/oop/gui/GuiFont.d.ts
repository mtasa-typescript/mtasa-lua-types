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
    HandleFunction,
    FetchRemoteCallback,
    GenericEventHandler
} from '../../structure';

/** @customConstructor GuiFont */
export class GuiFont {
    /**
     * This function creates a GUI font element that can be used in guiSetFont. Successful font
     * creation is not guaranteed, and may fail due to hardware or memory limitations.
     * To see if creation is likely to fail, use dxGetStatus. (When VideoMemoryFreeForMTA is
     * zero, failure is guaranteed.)
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiCreateFont Wiki, guiCreateFont }
     * @param filepath the name of the file containing the font
     * @param size size of the font
     * @return returns a gui font element if successful, false if invalid arguments were passed to the
     * function, or there is insufficient resources available.
     * you should always check to see if this function has returned false.
     */
    constructor(
        filepath: string,
        size?: number
    );
}
