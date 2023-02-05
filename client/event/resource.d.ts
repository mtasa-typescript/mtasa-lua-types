// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import { EventNames } from './all_event_names';
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
    SvgCallback,
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

export interface OnClientResourceFileDownload extends GenericEventHandler {
    name: EventNames.OnClientResourceFileDownload;
    function: (
        this: void,
        fileResource: Resource,
        fileName: string,
        fileSize: number,
        state: string,
    ) => void;
}

export interface OnClientResourceStart extends GenericEventHandler {
    name: EventNames.OnClientResourceStart;
    function: (this: void, startedResource: Resource) => void;
}

export interface OnClientResourceStop extends GenericEventHandler {
    name: EventNames.OnClientResourceStop;
    function: (this: void, stoppedResource: Resource) => void;
}
