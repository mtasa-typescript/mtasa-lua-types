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
} from '../structure';

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/IsTransferBoxVisible Wiki, isTransferBoxVisible }
 * @return on server this returns a boolean, whether the transfer box should be visible during
 * downloads or not.
 * on client this returns a boolean, whether the transfer box should be visible or not at
 * the time of invocation.
 */
export function isTransferBoxVisible(): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SetTransferBoxVisible Wiki, setTransferBoxVisible }
 * @param visible The new visibility state.
 * @return returns true if the visibility was set successfully, false otherwise.
 */
export function setTransferBoxVisible(
    visible: boolean
): boolean;
