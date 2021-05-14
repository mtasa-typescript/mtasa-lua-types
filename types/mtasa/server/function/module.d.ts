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
    HandleFunction
} from '../structure';

/**
 * This function returns all the currently loaded modules of the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetLoadedModules Wiki, getLoadedModules }
 * @return returns a table of all the currently loaded modules. if no modules are loaded, the table
 * will be empty.
 */
export function getLoadedModules(): LuaTable;

/**
 * This function returns information about the specified Modules|module.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetModuleInfo Wiki, getModuleInfo }
 * @param moduleName A string containing the module you wish to get information of e.g. hashing.dll
 * @return returns a table containing information about module. these keys are present in the table:
 * *version: module version in format x.xx
 * *name: module name
 * *author: module author
 * if invalid name for module is passed, it will return false.
 */
export function getModuleInfo(
    moduleName: string
): LuaTable;
