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
    CommandHandler
} from '../structure';

export interface OnPlayerACInfo extends GenericEventHandler {
    name: EventNames.OnPlayerACInfo;
    function: (
        this: void,
        detectedACList: LuaTable,
        d3d9Size: number,
        d3d9MD5: string,
        d3d9SHA256: string
    ) => void;
}

export interface OnPlayerBan extends GenericEventHandler {
    name: EventNames.OnPlayerBan;
    function: (
        this: void,
        banPointer: Ban,
        responsibleElement: Player
    ) => void;
}

export interface OnPlayerChangeNick extends GenericEventHandler {
    name: EventNames.OnPlayerChangeNick;
    function: (
        this: void,
        oldNick: string,
        newNick: string,
        changedByUser: boolean
    ) => void;
}

export interface OnPlayerChat extends GenericEventHandler {
    name: EventNames.OnPlayerChat;
    function: (
        this: void,
        message: string,
        messageType: number
    ) => void;
}

export interface OnPlayerClick extends GenericEventHandler {
    name: EventNames.OnPlayerClick;
    function: (
        this: void,
        mouseButton: string,
        buttonState: string,
        clickedElement: Element,
        worldPosX: number,
        worldPosY: number,
        worldPosZ: number,
        screenPosX: number,
        screenPosY: number
    ) => void;
}

export interface OnPlayerCommand extends GenericEventHandler {
    name: EventNames.OnPlayerCommand;
    function: (
        this: void,
        command: string
    ) => void;
}

export interface OnPlayerConnect extends GenericEventHandler {
    name: EventNames.OnPlayerConnect;
    function: (
        this: void,
        playerNick: string,
        playerIP: string,
        playerUsername: string,
        playerSerial: string,
        playerVersionNumber: number,
        playerVersionString: string
    ) => void;
}

export interface OnPlayerContact extends GenericEventHandler {
    name: EventNames.OnPlayerContact;
    function: (
        this: void,
        previousElement: Element,
        currentElement: Element
    ) => void;
}

export interface OnPlayerDamage extends GenericEventHandler {
    name: EventNames.OnPlayerDamage;
    function: (
        this: void,
        attacker: Player,
        damage_causing: number,
        bodypart: number,
        loss: number
    ) => void;
}

export interface OnPlayerJoin extends GenericEventHandler {
    name: EventNames.OnPlayerJoin;
    function: (
        this: void
    ) => void;
}

export interface OnPlayerLogin extends GenericEventHandler {
    name: EventNames.OnPlayerLogin;
    function: (
        this: void,
        thePreviousAccount: Account,
        theCurrentAccount: Account
    ) => void;
}

export interface OnPlayerLogout extends GenericEventHandler {
    name: EventNames.OnPlayerLogout;
    function: (
        this: void,
        thePreviousAccount: Account,
        theCurrentAccount: Account
    ) => void;
}

export interface OnPlayerMarkerHit extends GenericEventHandler {
    name: EventNames.OnPlayerMarkerHit;
    function: (
        this: void,
        markerHit: Marker,
        matchingDimension: boolean
    ) => void;
}

export interface OnPlayerMarkerLeave extends GenericEventHandler {
    name: EventNames.OnPlayerMarkerLeave;
    function: (
        this: void,
        markerLeft: Marker,
        matchingDimension: boolean
    ) => void;
}

export interface OnPlayerModInfo extends GenericEventHandler {
    name: EventNames.OnPlayerModInfo;
    function: (
        this: void,
        filename: string,
        itemlist: LuaTable
    ) => void;
}

export interface OnPlayerMute extends GenericEventHandler {
    name: EventNames.OnPlayerMute;
    function: (
        this: void
    ) => void;
}

export interface OnPlayerNetworkStatus extends GenericEventHandler {
    name: EventNames.OnPlayerNetworkStatus;
    function: (
        this: void,
        status: number,
        ticks: number
    ) => void;
}

export interface OnPlayerPickupHit extends GenericEventHandler {
    name: EventNames.OnPlayerPickupHit;
    function: (
        this: void,
        pickupHit: Pickup
    ) => void;
}

export interface OnPlayerPickupLeave extends GenericEventHandler {
    name: EventNames.OnPlayerPickupLeave;
    function: (
        this: void,
        pickupLeft: Pickup
    ) => void;
}

export interface OnPlayerPickupUse extends GenericEventHandler {
    name: EventNames.OnPlayerPickupUse;
    function: (
        this: void,
        thePickupToUse: Pickup
    ) => void;
}

export interface OnPlayerPrivateMessage extends GenericEventHandler {
    name: EventNames.OnPlayerPrivateMessage;
    function: (
        this: void,
        message: string,
        recipient: Player
    ) => void;
}

export interface OnPlayerQuit extends GenericEventHandler {
    name: EventNames.OnPlayerQuit;
    function: (
        this: void,
        quitType: string,
        reason: string,
        responsibleElement: Element
    ) => void;
}

export interface OnPlayerScreenShot extends GenericEventHandler {
    name: EventNames.OnPlayerScreenShot;
    function: (
        this: void,
        theResource: Resource,
        status: string,
        imageData: string,
        timestamp: number,
        tag: string
    ) => void;
}

export interface OnPlayerSpawn extends GenericEventHandler {
    name: EventNames.OnPlayerSpawn;
    function: (
        this: void,
        posX: number,
        posY: number,
        posZ: number,
        spawnRotation: number,
        theTeam: Team,
        theSkin: number,
        theInterior: number,
        theDimension: number
    ) => void;
}

export interface OnPlayerStealthKill extends GenericEventHandler {
    name: EventNames.OnPlayerStealthKill;
    function: (
        this: void,
        targetPlayer: Element
    ) => void;
}

export interface OnPlayerTarget extends GenericEventHandler {
    name: EventNames.OnPlayerTarget;
    function: (
        this: void,
        targettedElement: Element
    ) => void;
}

export interface OnPlayerUnmute extends GenericEventHandler {
    name: EventNames.OnPlayerUnmute;
    function: (
        this: void
    ) => void;
}

export interface OnPlayerVehicleEnter extends GenericEventHandler {
    name: EventNames.OnPlayerVehicleEnter;
    function: (
        this: void,
        theVehicle: Vehicle,
        seat: number,
        jacked: Ped
    ) => void;
}

export interface OnPlayerVehicleExit extends GenericEventHandler {
    name: EventNames.OnPlayerVehicleExit;
    function: (
        this: void,
        theVehicle: Vehicle,
        seat: number,
        jacker: Ped,
        forcedByScript: boolean
    ) => void;
}

export interface OnPlayerVoiceStart extends GenericEventHandler {
    name: EventNames.OnPlayerVoiceStart;
    function: (
        this: void
    ) => void;
}

export interface OnPlayerVoiceStop extends GenericEventHandler {
    name: EventNames.OnPlayerVoiceStop;
    function: (
        this: void
    ) => void;
}

export interface OnPlayerWasted extends GenericEventHandler {
    name: EventNames.OnPlayerWasted;
    function: (
        this: void,
        totalAmmo: number,
        killer: Element,
        killerWeapon: number,
        bodypart: number,
        stealth: boolean
    ) => void;
}

export interface OnPlayerWeaponFire extends GenericEventHandler {
    name: EventNames.OnPlayerWeaponFire;
    function: (
        this: void,
        weapon: number,
        endX: number,
        endY: number,
        endZ: number,
        hitElement: Element,
        startX: number,
        startY: number,
        startZ: number
    ) => void;
}

export interface OnPlayerWeaponSwitch extends GenericEventHandler {
    name: EventNames.OnPlayerWeaponSwitch;
    function: (
        this: void,
        previousWeaponID: number,
        currentWeaponID: number
    ) => void;
}
