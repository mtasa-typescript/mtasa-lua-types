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
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler
} from '../structure';

export interface OnClientCharacter extends GenericEventHandler {
    name: EventNames.OnClientCharacter;
    function: (
        this: void,
        character: string
    ) => void;
}

export interface OnClientClick extends GenericEventHandler {
    name: EventNames.OnClientClick;
    function: (
        this: void,
        button: string,
        state: string,
        absoluteX: number,
        absoluteY: number,
        worldX: number,
        worldY: number,
        worldZ: number,
        clickedWorld: Element
    ) => void;
}

export interface OnClientCursorMove extends GenericEventHandler {
    name: EventNames.OnClientCursorMove;
    function: (
        this: void,
        cursorX: number,
        cursorY: number,
        absoluteX: number,
        absoluteY: number,
        worldX: number,
        worldY: number,
        worldZ: number
    ) => void;
}

export interface OnClientDoubleClick extends GenericEventHandler {
    name: EventNames.OnClientDoubleClick;
    function: (
        this: void,
        button: string,
        absoluteX: number,
        absoluteY: number,
        worldX: number,
        worldY: number,
        worldZ: number,
        clickedWorld: Element
    ) => void;
}

export interface OnClientGUIAccepted extends GenericEventHandler {
    name: EventNames.OnClientGUIAccepted;
    function: (
        this: void,
        editBox: Element
    ) => void;
}

export interface OnClientGUIBlur extends GenericEventHandler {
    name: EventNames.OnClientGUIBlur;
    function: (
        this: void
    ) => void;
}

export interface OnClientGUIChanged extends GenericEventHandler {
    name: EventNames.OnClientGUIChanged;
    function: (
        this: void,
        theElement: Element
    ) => void;
}

export interface OnClientGUIClick extends GenericEventHandler {
    name: EventNames.OnClientGUIClick;
    function: (
        this: void,
        button: string,
        state: string,
        absoluteX: number,
        absoluteY: number
    ) => void;
}

export interface OnClientGUIComboBoxAccepted extends GenericEventHandler {
    name: EventNames.OnClientGUIComboBoxAccepted;
    function: (
        this: void,
        theElement: Element
    ) => void;
}

export interface OnClientGUIDoubleClick extends GenericEventHandler {
    name: EventNames.OnClientGUIDoubleClick;
    function: (
        this: void,
        button: string,
        state: string,
        absoluteX: number,
        absoluteY: number
    ) => void;
}

export interface OnClientGUIFocus extends GenericEventHandler {
    name: EventNames.OnClientGUIFocus;
    function: (
        this: void
    ) => void;
}

export interface OnClientGUIMouseDown extends GenericEventHandler {
    name: EventNames.OnClientGUIMouseDown;
    function: (
        this: void,
        button: string,
        absoluteX: number,
        absoluteY: number
    ) => void;
}

export interface OnClientGUIMouseUp extends GenericEventHandler {
    name: EventNames.OnClientGUIMouseUp;
    function: (
        this: void,
        button: string,
        absoluteX: number,
        absoluteY: number
    ) => void;
}

export interface OnClientGUIMove extends GenericEventHandler {
    name: EventNames.OnClientGUIMove;
    function: (
        this: void
    ) => void;
}

export interface OnClientGUIScroll extends GenericEventHandler {
    name: EventNames.OnClientGUIScroll;
    function: (
        this: void,
        scrolled: Element
    ) => void;
}

export interface OnClientGUISize extends GenericEventHandler {
    name: EventNames.OnClientGUISize;
    function: (
        this: void
    ) => void;
}

export interface OnClientGUITabSwitched extends GenericEventHandler {
    name: EventNames.OnClientGUITabSwitched;
    function: (
        this: void,
        theElement: Element
    ) => void;
}

export interface OnClientKey extends GenericEventHandler {
    name: EventNames.OnClientKey;
    function: (
        this: void,
        button: string,
        pressOrRelease: boolean
    ) => void;
}

export interface OnClientMouseEnter extends GenericEventHandler {
    name: EventNames.OnClientMouseEnter;
    function: (
        this: void,
        absoluteX: number,
        absoluteY: number,
        leftGUI: Element
    ) => void;
}

export interface OnClientMouseLeave extends GenericEventHandler {
    name: EventNames.OnClientMouseLeave;
    function: (
        this: void,
        absoluteX: number,
        absoluteY: number,
        enteredGUI: Element
    ) => void;
}

export interface OnClientMouseMove extends GenericEventHandler {
    name: EventNames.OnClientMouseMove;
    function: (
        this: void,
        absoluteX: number,
        absoluteY: number
    ) => void;
}

export interface OnClientMouseWheel extends GenericEventHandler {
    name: EventNames.OnClientMouseWheel;
    function: (
        this: void,
        upOrDown: number
    ) => void;
}

export interface OnClientPaste extends GenericEventHandler {
    name: EventNames.OnClientPaste;
    function: (
        this: void,
        clipboardText: string
    ) => void;
}
