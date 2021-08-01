// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

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
    KeyState
} from '../structure';

/** @customConstructor Weapon */
export class Weapon extends Element {
    /**
     * This function gets a weapon property of the specified Element/Weapon|custom weapon
     * (clientside only) or specified Weapons|player-held weapon (both client and server).
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponProperty Wiki, getWeaponProperty }
     * @param weaponID or weaponName The ID or name of the weapon you want to get info of. Names can be:
     * @param weaponSkill Either: pro, std or poor
     * @param property The property you want to get the value of:
     * The following properties are get only:
     * @return on success:
     * int: the weapon property
     * on failure:
     * bool: false if the passed arguments were invalid
     */
    getProperty(
        weaponSkill: string,
        property: string
    ): number;
}
