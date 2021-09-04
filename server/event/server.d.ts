// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import { EventNames } from './all_event_names';
import {
    TextDisplay,
    Account,
    ACL,
    ACLGroup,
    Ban,
    XML,
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

export interface OnBan extends GenericEventHandler {
    name: EventNames.OnBan;
    function: (this: void, theBan: Ban) => void;
}

export interface OnChatMessage extends GenericEventHandler {
    name: EventNames.OnChatMessage;
    function: (
        this: void,
        theMessage: string,
        theElement: Resource | Element,
    ) => void;
}

export interface OnDebugMessage extends GenericEventHandler {
    name: EventNames.OnDebugMessage;
    function: (
        this: void,
        message: string,
        level: number,
        file: string,
        line: number,
    ) => void;
}

export interface OnSettingChange extends GenericEventHandler {
    name: EventNames.OnSettingChange;
    function: (
        this: void,
        setting: string,
        oldValue: string,
        newValue: string,
    ) => void;
}

export interface OnUnban extends GenericEventHandler {
    name: EventNames.OnUnban;
    function: (this: void, theBan: Ban, responsibleElement: Player) => void;
}
