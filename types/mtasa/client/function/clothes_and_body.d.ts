/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * This function is used to get the name of a body part on a player.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBodyPartName|MTASA Wiki}
 * @param bodyPartID : An integer representing the body part ID you wish to retrieve the name of.
 * {{BodyParts}}
 * @return This function returns a string containing the body part name if the ID is valid,
 * ''false'' otherwise.
 */
export function getBodyPartName(bodyPartID: number): string;

/**
 * This function is used to get the texture and model of clothes by the clothes type and index.
 * (Scans through the list of clothes for the specific type).
 * @see {@link https://wiki.multitheftauto.com/wiki/getClothesByTypeIndex|MTASA Wiki}
 * @param clothesType : An integer representing the clothes slot/type to scan through.  {{Clothes
 * Textures}}
 * @param clothesIndex : An integer representing the index (0 based) set of clothes in the list you
 * wish to retrieve. Each type has a different number of valid indexes.
 * @return This function returns 2 strings, a texture and model respectively, ''false'' if invalid
 * arguments were passed to the function.
 */
export function getClothesByTypeIndex(clothesType: number, clothesIndex: number): LuaMultiReturn<[string, string]>;

/**
 * This function is used to get the name of a certain clothes type.
 * @see {@link https://wiki.multitheftauto.com/wiki/getClothesTypeName|MTASA Wiki}
 * @param clothesType : An integer determining the type of clothes you want to get the clothes of.
 * {{Clothes Textures}}
 * @return This function returns a string (the name of the clothes type) if found, ''false''
 * otherwise.
 */
export function getClothesTypeName(clothesType: number): string;

/**
 * This function is used to get the clothes type and index from the texture and model.
 * (Scans through the list of clothes for the specific type).
 * @see {@link https://wiki.multitheftauto.com/wiki/getTypeIndexFromClothes|MTASA Wiki}
 * @param clothesTexture : A string determining the clothes texture that you wish to retrieve the
 * type and index from. See the CJ Clothes|clothes catalog.
 * @param clothesModel : A string determining the corresponding clothes model that you wish to
 * retrieve the type and index from. See the CJ Clothes|clothes catalog.
 * @return This function returns two integers, type and index respectively, ''false'' if invalid
 * arguments were passed to the function.
 */
export function getTypeIndexFromClothes(clothesTexture: string, clothesModel: string): LuaMultiReturn<[number, number]>;
