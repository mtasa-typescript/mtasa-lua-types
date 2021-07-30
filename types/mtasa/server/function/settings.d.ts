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
    CommandHandler
} from '../structure';

/**
 * This function gets a settings value, or a group of settings values, from the settings
 * system|settings registry.
 * @see {@link https://wiki.multitheftauto.com/wiki/Get Wiki, get }
 * @return returns the value of the setting if a single setting was specified and found, or a table
 * (in associative-array form) containing:
 * *the list of global setting name/value pairs if . is passed as a setting name,
 * *the list of resource settings if a resource name followed by a . is passed,
 * *the list of the scripts resource settings if an empty string is passed.
 * it returns false if the specified setting or settings group doesnt exist, or if the
 * settings group you are trying to retrieve doesnt have any public or protected settings.
 * @noSelf
 */
export declare function get(
    settingName: string
): unknown;

/**
 * This function is used to save arbitrary data under a certain name on the settings
 * system|settings registry.
 * Its important to note that set always writes to the settings.xml file, even if get read
 * the value from a resources meta.xml. This means that the admin can specify settings in
 * the settings.xml that override the resources defaults, but that the defaults can still be
 * retrieved if need be. As a general principle, resources should not be designed so that
 * the admin is required to modify them, they should be black boxes.
 * @see {@link https://wiki.multitheftauto.com/wiki/Set Wiki, set }
 * @param settingName The name of the setting you want to set. See settings system#Setting names|setting names
 * for information on settings names.
 * @param value The value to set the setting to. This can be any Lua data type, except for functions,
 * most userdata (only resources cant be stored) and threads.
 * @return returns true if the setting has been set, false if you do not have access to the setting
 * or invalid arguments were passed.
 * @noSelf
 */
export declare function set(
    settingName: string,
    value: unknown
): boolean;
