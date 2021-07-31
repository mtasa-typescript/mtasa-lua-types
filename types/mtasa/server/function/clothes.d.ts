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

/**
 * This function is used to get the clothes type and index from the texture and model.
 * (Scans through the list of clothes for the specific type).
 * @see {@link https://wiki.multitheftauto.com/wiki/GetTypeIndexFromClothes Wiki, getTypeIndexFromClothes }
 * @param clothesTexture : A string determining the clothes texture that you wish to retrieve the type and index
 * from. See the CJ Clothes|clothes catalog.
 * @param clothesModel : A string determining the corresponding clothes model that you wish to retrieve the type
 * and index from. See the CJ Clothes|clothes catalog.
 * @return this function returns two integers, type and index respectively, false if invalid
 * arguments were passed to the function.
 * @noSelf
 */
export declare function getTypeIndexFromClothes(
    clothesTexture: string,
    clothesModel: string
): LuaMultiReturn<[
    number,
    number
]>;

/**
 * This function is used to get the name of a body part on a player.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetBodyPartName Wiki, getBodyPartName }
 * @param bodyPartID : An integer representing the body part ID you wish to retrieve the name of.
 * @return this function returns a string containing the body part name if the id is valid, false
 * otherwise.
 * @noSelf
 */
export declare function getBodyPartName(
    bodyPartID: number
): string;

/**
 * This function is used to get the name of a certain clothes type.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetClothesTypeName Wiki, getClothesTypeName }
 * @param clothesType : An integer determining the type of clothes you want to get the clothes of.
 * @return this function returns a string (the name of the clothes type) if found, false otherwise.
 * @noSelf
 */
export declare function getClothesTypeName(
    clothesType: number
): string;

/**
 * This function is used to get the texture and model of clothes by the clothes type and
 * index.
 * (Scans through the list of clothes for the specific type).
 * @see {@link https://wiki.multitheftauto.com/wiki/GetClothesByTypeIndex Wiki, getClothesByTypeIndex }
 * @param clothesType : An integer representing the clothes slot/type to scan through.
 * @param clothesIndex : An integer representing the index (0 based) set of clothes in the list you wish to
 * retrieve. Each type has a different number of valid indexes.
 * @return this function returns 2 strings, a texture and model respectively, false if invalid
 * arguments were passed to the function.
 * @noSelf
 */
export declare function getClothesByTypeIndex(
    clothesType: number,
    clothesIndex: number
): LuaMultiReturn<[
    string,
    string
]>;
