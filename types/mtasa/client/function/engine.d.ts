/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Col, Dff, Element, Ifp, ObjectGroup, Ped, Txd } from '../structure';

/**
 * This function applies a [[shader]] to one or more world textures.
 * * The resource [[Shader_examples#Texture_names|shader_tex_names]] can help in finding the names
 * of world textures.
 * * When replacing the texture for a ped using the CJ skin, set '''textureName''' to "CJ"
 * * The shader inherits the render states of the original when it is drawn, so texture stage 0
 * will already be set to the original texture.
 * * When using with a 'ped', ensure you have set 'ped' or 'all' in the elementTypes when calling
 * [[dxCreateShader]]
 * * CJ body parts textures can be replaced by using: "cj_ped_head", "cj_ped_hat", "cj_ped_torso",
 * "cj_ped_legs", "cj_ped_feet", "cj_ped_glasses", "cj_ped_necklace", "cj_ped_watch" and
 * "cj_ped_extra1". Latest version of [http://wiki.multitheftauto.com/wiki/Shader_examples#Texture_names
 * shader_tex_names] will show what is being used.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineApplyShaderToWorldTexture|MTASA Wiki}
 * @param shader The shader which is to be applied
 * @param textureName The name of the world texture to apply the shader to. Wildcard matching e.g.
 * ro?ds* can be used to apply to more than one texture at a time.  {{New
 * feature/item|3.0130|1.3.0|4140|
 * @param targetElement The element to restrict applying the shader to. If this is not set the
 * shader will be applied to everything using the texture name. Valid element types for targetElement are
 * vehicle|vehicles, Object|objects and Ped|peds.  }}
 * @default nil
 * @param appendLayers allows two or more layered shaders to be applied in the same texture. You
 * may want to modify the DepthBias in the technique pass to avoid Z-fighting artifacts when using this.
 * @default true
 * @return Returns ''true'' if the shader was successfully applied, ''false'' otherwise.
 */
export function engineApplyShaderToWorldTexture(
    shader: Element,
    textureName: string,
    targetElement?: Element,
    appendLayers?: boolean,
): boolean;

/**
 * This function gets the model ID of an object model from object name. This function is the
 * counterpart of [[engineGetModelNameFromID]].
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelIDFromName|MTASA Wiki}
 * @param modelName The model name of the object
 * @return Returns an ''int'' with the ID of the object model, false otherwise.
 */
export function engineGetModelIDFromName(modelName: string): number;

/**
 * This function gets the LOD distance for any object / model ID.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelLODDistance|MTASA Wiki}
 * @param model The model / object ID number you want to get the LOD distance of.
 * @return Returns a float representing the LOD distance of the model, or ''false'' if the model
 * argument is incorrect.
 */
export function engineGetModelLODDistance(model: number): number;

/**
 * This function gets the model name of an object model from model ID. This function is the
 * counterpart of [[engineGetModelIDFromName]].
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelNameFromID|MTASA Wiki}
 * @param modelID The model ID of the object
 * @return Returns a ''string'' with the name of the object model, false otherwise.
 */
export function engineGetModelNameFromID(modelID: number): string;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelPhysicalPropertiesGroup|MTASA
 * Wiki}
 * @param modelID : the id of model which you wish to get physical properties group of.
 * @return Returns '''id''' of physical properties group that requested model uses, in range of
 * ''0-160'', if the object doesn't have a group assigned, ''-1'' is returned. If passed arguments were
 * wrong, error is triggered.
 */
export function engineGetModelPhysicalPropertiesGroup(modelID: number): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreModelPhysicalPropertiesGroup|MTASA
 * Wiki}
 * @param modelID : the id of model which you wish to restore original physical properties group of.
 * @return Returns '''true''' if there were no issues, if passed arguments were invalid an error is
 * raised.
 */
export function engineRestoreModelPhysicalPropertiesGroup(modelID: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineSetModelPhysicalPropertiesGroup|MTASA
 * Wiki}
 * @param modelID : the id of model which you wish to set physical properties group of.
 * @param groupID : the id of new physical properties group to be used by given model.
 * @return Returns '''true''' if there were no issues with group change, otherwise an error is
 * raised
 */
export function engineSetModelPhysicalPropertiesGroup(modelID: number, groupID: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetObjectGroupPhysicalProperty|MTASA Wiki}
 * @param groupID : the id of physical properties group which you wish to get a property from.
 * @return Returns the value contained in given property if everything went well, error is raised
 * otherwise.
 */
export function engineGetObjectGroupPhysicalProperty(groupID: number, modifiable: ObjectGroup): any;

/**
 *
 * @see {@link
 * https://wiki.multitheftauto.com/wiki/engineRestoreObjectGroupPhysicalProperties|MTASA Wiki}
 * @param groupID : the id of physical properties group which you wish to restore a property of.
 * @return Returns '''true''' if everything went well, error is raised otherwise.
 */
export function engineRestoreObjectGroupPhysicalProperties(groupID: number, modifiable: ObjectGroup): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineSetObjectGroupPhysicalProperty|MTASA Wiki}
 * @param groupID : the id of physical properties group which you wish to set a property of.
 * @param newValue : new value of the property, with proper type as specified in table below
 * @return Returns '''true''' if everything went well, error is raised otherwise.
 */
export function engineSetObjectGroupPhysicalProperty(groupID: number, modifiable: ObjectGroup, newValue: any): boolean;

/**
 * *before release 1.5.8-20716 this must be "ped".
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineRequestModel|MTASA Wiki}
 * @param elementType : ped, vehicle and object.
 * @param parentID : The Vehicle IDs|vehicle ID of the vehicle being allocated. (By default this
 * is: 1337 - objects, 400 - vehicles, 7 or PSYCHO for peds)
 * @return {{New feature/item|3.0158|1.5.7|20147| Returns an ''integer'' of the model ID that was
 * available to be assigned to the element type, ''false'' if no free model ID available or invalid
 * element type.}}
 * * Do not rely on the model numbers returned being consistent across multiple clients or multiple
 * runs of resources. There is no guarantee for the order of the numbers or that the same numbers will
 * always correspond to the same element type. Any patterns are coincidental
 */
export function engineRequestModel(elementType: string, parentID?: number): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineFreeModel|MTASA Wiki}
 * @param modelID : the model ID you want to have un-assigned.
 * @return Returns ''true'' if the model was successfully freed, ''false'' otherwise.
 */
export function engineFreeModel(modelID: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelTextures|MTASA Wiki}
 * @return Returns a table of texture elements [textureName, texture], '''false''' otherwise.
 */
export function engineGetModelTextures(int: string, table?: string): LuaTable;

/**
 * This function returns a table of the world textures which are applied to the specified model.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelTextureNames|MTASA Wiki}
 * @return Returns a table if this function succeeds, false if it fails for some reason.
 */
export function engineGetModelTextureNames(modelId: string): LuaTable;

/**
 * This function returns a list of the world textures which are being used to draw the current
 * scene.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetVisibleTextureNames|MTASA Wiki}
 * @param nameFilter Only include textures that match the wildcard string.
 * @default "*"
 * @return Returns a table of texture names.
 */
export function engineGetVisibleTextureNames(nameFilter: string, modelId: string): LuaTable;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelVisibleTime|MTASA Wiki}
 * @param modelID : ID of the model
 * @return Returns '''timeOn''', '''timeOff'''
 */
export function engineGetModelVisibleTime(modelID: number): LuaMultiReturn<[number, number]>;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineSetModelVisibleTime|MTASA Wiki}
 * @param modelID : ID of the model
 * @param timeOn : value between 23 and 0 that states when the model should appear
 * @param timeOff : value between 23 and 0 that states when the model should disappear
 * @return Returns '''true''' if the change was successful, '''false''' otherwise.
 */
export function engineSetModelVisibleTime(modelID: number, timeOn: number, timeOff: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineRestreamWorld|MTASA Wiki}
 * @return Returns ''true'' if the world was restreamed successfully, ''false'' otherwise.
 */
export function engineRestreamWorld(): boolean;

/**
 * This function imports (adds) a loaded RenderWare Texture Dictionary into a specific model. This
 * is necessary in order for the DFF loader to find any new textures. Please '''call this function
 * before loading the DFF model file''', in order to allow the DFF loading process to find the new
 * textures. This function can also replace default GTA textures, so that it becomes possible to e.g. put
 * custom images on existing billboards. Ped and weapon textures are also supported.
 * See here for [[Optimize_Custom_TXD|tips on reducing the size of TXD files]].
 * * CJ clothing component textures can be replaced by using the ids listed on [[Clothing Component
 * IDs|this page]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineImportTXD|MTASA Wiki}
 * @param texture The TXD that was loaded with engineLoadTXD
 * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
 */
export function engineImportTXD(texture: Txd, model: number): boolean;

/**
 * This function loads a RenderWare Collision (COL 1/2/3) file into GTA. The collisions can then be
 * used to provide collisions for in-game objects.
 * For vehicles, please omit this function by embedding your [[COL]] file into your [[DFF]] file.
 * This way, you can be sure that the COL file is correctly (and automatically) loaded when calling
 * [[engineLoadDFF]].
 * This is a client side function. Be sure to transfer your COL file by including it in the meta
 * file.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadCOL|MTASA Wiki}
 * @return Returns a [[COL]] if the file was loaded, ''false'' otherwise.
 */
export function engineLoadCOL(col: string): Col;

/**
 * This function loads a RenderWare Model (DFF) file into GTA.
 * To successfully load your model with textures, be sure to use [[engineLoadTXD]] and
 * [[engineImportTXD]] before calling this function. If some error occurs while loading the DFF, MTA will output a
 * message - check out [[DFF error messages]] to know what they mean.
 * This is a client side function. Be sure to transfer your DFF file by including it in the meta
 * file.
 * The returned [[DFF]] element is an element in the element tree, just like vehicles and objects.
 * When the dff is destroyed, ie on resource unload or using [[destroyElement]], any elements that use
 * the DFF, such as vehicles or objects will be reset.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadDFF|MTASA Wiki}
 * @return Returns a [[DFF]] element if the dff file loaded, ''false'' otherwise.
 */
export function engineLoadDFF(dff: string): Dff;

/**
 * This function loads an animation library (IFP) file into GTA with a custom block name. All three
 * IFP formats are supported ANPK, ANP2, and ANP3. Unfortunately, GTA 3 animations are not supported,
 * however, you can load GTA:VC IFP files using this function. You don't have to replace any animation
 * to play a custom one, to play a custom animation, load the IFP file using this function, then use
 * [[SetPedAnimation|setPedAnimation]].
 * If you wish to replace a GTA internal animation with a custom one, you can use
 * [[EngineReplaceAnimation|engineReplaceAnimation]]. To unload the IFP file, use [[DestroyElement|destroyElement]],
 * restarting or stopping the resource can also unload the IFP file automatically.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadIFP|MTASA Wiki}
 * @return Returns an [[IFP]] element if the IFP file loaded, ''false'' otherwise.
 * * {{Tip|If you want to synchronize animations, you can check
 * [[https://drive.google.com/open?id=1L2NkQYuLS0YdoHECvxVRMdPBbEgaYUfH ifp_demo]] resource}}
 */
export function engineLoadIFP(ifp: string, custom: string): Ifp;

/**
 * This function loads a RenderWare Texture Dictionary (TXD) file into GTA. The texture dictionary
 * can then be used to provide textures.
 * This is a client side function. Be sure to transfer your TXD file by including it in the meta
 * file.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadTXD|MTASA Wiki}
 * @param filteringEnabled Whether to enable texture filtering.
 * @default true
 * @return Returns a [[TXD]] if the file was loaded, ''false'' otherwise.
 */
export function engineLoadTXD(txd: string, filteringEnabled?: boolean): Txd;

/**
 * This function removes a [[shader]] from one or more world textures.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineRemoveShaderFromWorldTexture|MTASA Wiki}
 * @param shader The shader which is to be removed
 * @param textureName The name of the world texture to remove the shader from. It should be exactly
 * the same string as used with engineApplyShaderToWorldTexture when the shader was initially applied.
 *  {{New feature/item|3.0130|1.3.0|4140|
 * @param targetElement The element to remove the shader from. It should be the same element as
 * used with engineApplyShaderToWorldTexture when the shader was initially applied.  }}
 * @default nil
 * @return Returns ''true'' if the shader was successfully removed, ''false'' otherwise.
 */
export function engineRemoveShaderFromWorldTexture(
    shader: Element,
    textureName: string,
    targetElement?: Element,
): boolean;

/**
 * This function replaces a specific internal (default) animation with a custom one that has been
 * loaded using [[EngineLoadIFP|engineLoadIFP]] function. This function only affects a specific
 * [[player]] or [[ped]], the [[Animations|internal animation]] is not replaced for everyone, for instance,
 * different players and peds are able to have completely different crouching, walking, and fighting etc.,
 * animations running simultaneously at the same time. Also, it's not synchronized, you'll need to
 * execute this function on every client in Lua to synchronize it.
 * Internal animations replaced using this function can still be played with
 * [[SetPedAnimation|setPedAnimation]]. You can restore replaced animations back with
 * [[EngineRestoreAnimation|engineRestoreAnimation]].
 * It should be noted that partial animations are not supported, you can still replace them, but
 * they won't work as intended, for example, "FightA_block" animation from "ped" block is a partial
 * animation, you can't replace it properly, only a few animations are partial, rest of them are not, so it
 * shouldn't be a problem.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineReplaceAnimation|MTASA Wiki}
 * @param thePed the player or ped you want to replace an animation for.
 * @param InternalBlockName the Animations|internal block name.
 * @param InternalAnimName the Animations|internal animation name inside InternalBlockName.
 * @param CustomBlockName the custom block name of the loaded IFP file that you passed to
 * EngineLoadIFP|engineLoadIFP as second parameter.
 * @param CustomAnimName the custom animation name inside the loaded IFP file with CustomBlockName.
 * @return Returns ''true'' on success, ''false'' in case of failure.
 */
export function engineReplaceAnimation(
    thePed: Ped,
    InternalBlockName: string,
    InternalAnimName: string,
    CustomBlockName: string,
    CustomAnimName: string,
): boolean;

/**
 * This function replaces the collision file of the given model id to the collision file passed.
 * Use [[engineLoadCOL]] to load the collision file first.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineReplaceCOL|MTASA Wiki}
 * @param theCol The collision file to replace with
 * @param modelID The model ID whose collision file you want to replace
 * @return Returns ''true'' if the collision was successfully replaced, ''false'' or ''nil'' if the
 * collision could not be replaced for a reason.
 */
export function engineReplaceCOL(theCol: Col, modelID: number): boolean;

/**
 * This function replaces the given model ID with the model contained in a DFF file loaded by
 * [[engineLoadDFF]]. This function supports [[vehicle|vehicles]], [[object|objects]], [[ped|peds]] and
 * [[player|players]] but not CJ clothing and body parts.
 * To replace weapon models you must use their object IDs, not weapon IDs. There is a weapon model
 * list available at [[weapons]].
 * * Default GTA map objects behave inconsistently when using this function on them. If you want to
 * replace models in the original GTA map, use one of the [[EngineReplaceModel notes|methods shown
 * here]].}}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineReplaceModel|MTASA Wiki}
 * @param theModel The model to replace the given model ID with
 * @param modelID The model it to replace the model of
 * @param alphaTransparency Set to true if model uses semi-transparent textures, e.g. windows. This
 * will ensure other objects behind the semi-transparent textures are rendered correctly. (Can
 * slightly impact performance, so only set when required)
 * @default false
 * @return Returns ''true'' if the model was successfully replaced, ''false'' if it failed for some
 * reason, ie. the DFF or the model ID is not valid.
 */
export function engineReplaceModel(theModel: Dff, modelID: number, alphaTransparency?: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineResetModelLODDistance|MTASA Wiki}
 * @param model The model / object ID number you want to reset the LOD distance of.
 * @return Returns ''true'' if the LOD distance was reset to default, or ''false'' if the model
 * argument is incorrect, or the LOD distance hasn't been changed.
 */
export function engineResetModelLODDistance(model: number): boolean;

/**
 * This function restores internal (default) animations that were replaced using
 * [[EngineReplaceAnimation|engineReplaceAnimation]] function. This function only affects a specific [[player]] or
 * [[ped]] just like [[EngineReplaceAnimation|engineReplaceAnimation]].
 * If only 1st parameter ([[Ped|ped]]) is provided to this function, all replaced animations are
 * restored.
 * If block name is also provided for 2nd parameter, then replaced animations within that block are
 * restored.
 * If 3rd parameter (animation name) is provided, then only that specific animation within that
 * specific block is restored.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreAnimation|MTASA Wiki}
 * @param thePed the player or ped you want to restore an animation(s) for.  {{OptionalArg}}
 * @param InternalBlockName the Animations|internal block name.
 * @param InternalAnimName the Animations|internal animation name inside InternalBlockName.
 * @return Returns ''true'' on success, ''false'' in case of failure.
 */
export function engineRestoreAnimation(thePed: Ped, InternalBlockName?: string, InternalAnimName?: string): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function restores the original collision model of the given model ID. Reverses the effect
 * of [[engineReplaceCOL]].
 * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreCOL|MTASA Wiki}
 * @param modelID The ID of the model to restore the model of
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if this function succeeds, ''false'' or ''nil'' if it fails for some reason.
 */
export function engineRestoreCOL(modelID: number): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function restores the visual DFF model of the given model ID. This restores the result of
 * [[engineReplaceModel]].
 * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreModel|MTASA Wiki}
 * @param modelID The model ID to restore the visuals of
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the model was successfully restored, ''false'' or ''nil'' if it failed for
 * some reason.
 */
export function engineRestoreModel(modelID: number): boolean;

/**
 * This function enables or disables asynchronous model loading. Enabling asynchronous model
 * loading may reduce the small pauses that occur when a new model is displayed for the first time. However,
 * it can cause the new models to appear slightly later than they might have otherwise.
 * @see {@link https://wiki.multitheftauto.com/wiki/engineSetAsynchronousLoading|MTASA Wiki}
 * @param enable Set to true/false to enable/disable asynchronous loading. Only works if the
 * clients preferences has Asynchronous Loading set to Auto.
 * @param force If set to true, ignores the clients preferences.
 * @return Returns ''true'' if the function executed successfully, ''false'' otherwise.
 */
export function engineSetAsynchronousLoading(enable: boolean, force: boolean): boolean;

/**
 * This function sets a custom LOD distance for any object / model ID. This is the distance at
 * which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become
 * invisible.
 * '''Notes:'''
 * The actual draw distance used is modified by the draw distance slider in the settings 'Video'
 * tab of the MTA client.
 * *When the 'Video' tab draw distance slider is 0%, the engineSetModelLODDistance setting
 * approximately matches the draw distance used.
 * :''e.g. engineSetModelLODDistance(1337,100) will mean model 1337 will be visible up to a
 * distance of '''100''' units.''
 * *When the 'Video' tab draw distance slider is 100%, the engineSetModelLODDistance setting is
 * approximately doubled before use.
 * :''e.g. engineSetModelLODDistance(1337,100) will mean model 1337 will be visible up to a
 * distance of '''200''' units.''
 * However, there is a general draw distance limit of 300 units. So
 * engineSetModelLODDistance(1337,400) will mean model 1337 will be visible up to a distance of 300 units no matter what the 'Video'
 * tab says.
 * Therefore, unless it's really important, engineSetModelLODDistance should not be set to anything
 * greater than 170.<br>
 * 170 will still give the maximum draw distance (of 300 units) on clients that have a 'Video' tab
 * draw distance setting of 100%, and it will help reduce lag for players who chose a lower draw
 * distance in their settings.
 * For low LOD elements, engineSetModelLODDistance still has a limit of 300 units, but the actual
 * draw distance used is 5 times the setting value. Also, low LOD elements ignore the 'Video' tab draw
 * distance slider. So a setting of 200 will mean a low LOD element will always have a draw distance of
 * '''1000''' units.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/engineSetModelLODDistance|MTASA Wiki}
 * @param model The model / object ID number you want to change the LOD distance of.
 * @param distance New LOD distance value in San Andreas units.
 * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
 */
export function engineSetModelLODDistance(model: number, distance: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineSetSurfaceProperties|MTASA Wiki}
 * @param surfaceID Material IDs|Material ID from 0 to 178
 * @param property Property name
 * @param value New value from table below
 * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
 */
export function engineSetSurfaceProperties(surfaceID: number, property: string, value: string): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineGetSurfaceProperties|MTASA Wiki}
 * @param surfaceID Material IDs|Material ID from 0 to 178
 * @param property Property name
 * @return Returns the current property value. See the table below for possible values.
 */
export function engineGetSurfaceProperties(surfaceID: number, property: string): string;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/engineResetSurfaceProperties|MTASA Wiki}
 * @param surfaceID Material IDs|Material ID from 0 to 178
 * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
 */
export function engineResetSurfaceProperties(surfaceID: number): string;
