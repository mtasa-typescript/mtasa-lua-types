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

export interface OnClientSoundBeat extends GenericEventHandler {
    name: EventNames.OnClientSoundBeat;
    function: (this: void, theTime: number) => void;
}

export interface OnClientSoundChangedMeta extends GenericEventHandler {
    name: EventNames.OnClientSoundChangedMeta;
    function: (this: void, streamTitle: string) => void;
}

export interface OnClientSoundFinishedDownload extends GenericEventHandler {
    name: EventNames.OnClientSoundFinishedDownload;
    function: (this: void, length: number) => void;
}

export interface OnClientSoundStarted extends GenericEventHandler {
    name: EventNames.OnClientSoundStarted;
    function: (this: void, reason: string) => void;
}

export interface OnClientSoundStopped extends GenericEventHandler {
    name: EventNames.OnClientSoundStopped;
    function: (this: void, reason: string) => void;
}

export interface OnClientSoundStream extends GenericEventHandler {
    name: EventNames.OnClientSoundStream;
    function: (
        this: void,
        success: boolean,
        length: number,
        streamName: string,
        errorMessage: string,
    ) => void;
}
