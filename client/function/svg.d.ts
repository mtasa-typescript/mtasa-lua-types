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
 * @see https://wiki.multitheftauto.com/wiki/SvgGetDocumentXML
 * @param svgElement The svg element you want to get the XML document of.
 * @return * returns an xmlnode if successful, false otherwise
 * @noSelf
 */
export declare function svgGetDocumentXML(svgElement: Svg): XmlNode;

/**
 * @see https://wiki.multitheftauto.com/wiki/SvgGetSize
 * @param svgElement The svg you want to get the size of.
 * @return * returns two ints, representing width and height
 * @noSelf
 */
export declare function svgGetSize(
    svgElement: Svg,
): LuaMultiReturn<[number, number]>;