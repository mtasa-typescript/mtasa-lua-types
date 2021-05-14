// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    Texture,
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
    HandleFunction
} from '../structure';

/**
 * This function applies a shader to one or more world textures.
 * * The resource Shader_examples#Texture_names|shader_tex_names can help in finding the
 * names of world textures.
 * * When replacing the texture for a ped using the CJ skin, set textureName to CJ
 * * The shader inherits the render states of the original when it is drawn, so texture
 * stage 0 will already be set to the original texture.
 * * When using with a ped, ensure you have set ped or all in the elementTypes when calling
 * dxCreateShader
 * * CJ body parts textures can be replaced by using: cj_ped_head, cj_ped_hat, cj_ped_torso,
 * cj_ped_legs, cj_ped_feet, cj_ped_glasses, cj_ped_necklace, cj_ped_watch and
 * cj_ped_extra1. Latest version of
 * http://wiki.multitheftauto.com/wiki/Shader_examples#Texture_names shader_tex_names will
 * show what is being used.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineApplyShaderToWorldTexture Wiki, engineApplyShaderToWorldTexture }
 * @param shader The shader which is to be applied
 * @param textureName The name of the world texture to apply the shader to. Wildcard matching e.g. ro?ds* can
 * be used to apply to more than one texture at a time.
 * @param targetElement The element to restrict applying the shader to. If this is not set the shader will be
 * applied to everything using the texture name. Valid element types for targetElement are
 * vehicle|vehicles, Object|objects and Ped|peds.
 * @param appendLayers allows two or more layered shaders to be applied in the same texture. You may want to
 * modify the DepthBias in the technique pass to avoid Z-fighting artifacts when using this.
 * @return returns true if the shader was successfully applied, false otherwise.
 */
export function engineApplyShaderToWorldTexture(
    shader: Element,
    textureName: string,
    targetElement?: Element,
    appendLayers?: boolean
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineFreeModel Wiki, engineFreeModel }
 * @param modelID : the model ID you want to have un-assigned.
 * @return returns true if the model was successfully freed, false otherwise.
 */
export function engineFreeModel(
    modelID: number
): boolean;

/**
 * This function gets the model ID of an object model from object name. This function is the
 * counterpart of engineGetModelNameFromID.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelIDFromName Wiki, engineGetModelIDFromName }
 * @param modelName The model name of the object
 * @return returns an int with the id of the object model, false otherwise.
 */
export function engineGetModelIDFromName(
    modelName: string
): number;

/**
 * This function gets the LOD distance for any object / model ID.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelLODDistance Wiki, engineGetModelLODDistance }
 * @param model The model / object ID number you want to get the LOD distance of.
 * @return returns a float representing the lod distance of the model, or false if the model
 * argument is incorrect.
 */
export function engineGetModelLODDistance(
    model: number
): number;

/**
 * This function gets the model name of an object model from model ID. This function is the
 * counterpart of engineGetModelIDFromName.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelNameFromID Wiki, engineGetModelNameFromID }
 * @param modelID The model ID of the object
 * @return returns a string with the name of the object model, false otherwise.
 */
export function engineGetModelNameFromID(
    modelID: number
): string;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelPhysicalPropertiesGroup Wiki, engineGetModelPhysicalPropertiesGroup }
 * @param modelID : the id of model which you wish to get physical properties group of.
 * @return returns id of physical properties group that requested model uses, in range of 0-160, if
 * the object doesnt have a group assigned, -1 is returned. if passed arguments were wrong,
 * error is triggered.
 */
export function engineGetModelPhysicalPropertiesGroup(
    modelID: number
): number;

/**
 * This function returns a table of the world textures which are applied to the specified
 * model.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelTextureNames Wiki, engineGetModelTextureNames }
 * @param modelId You can either use the model id or the model name.
 * @return returns a table if this function succeeds, false if it fails for some reason.
 */
export function engineGetModelTextureNames(
    modelId: string
): LuaTable;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelTextures Wiki, engineGetModelTextures }
 * @param model : either the model ID or model name.
 * @param textureNames : Only return textures with specified name(s). You can provide a single string or a table
 * of strings. Wildcard matching e.g. ro?ds* can be used.
 * @return returns a table of texture elements texturename, texture, false otherwise.
 */
export function engineGetModelTextures(
    modelName_modelID: string | number,
    textureNames?: string | LuaTable
): LuaTable;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelVisibleTime Wiki, engineGetModelVisibleTime }
 * @param modelID : ID of the model
 * @return returns timeon, timeoff
 */
export function engineGetModelVisibleTime(
    modelID: number
): LuaMultiReturn<[
    number,
    number
]>;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetObjectGroupPhysicalProperty Wiki, engineGetObjectGroupPhysicalProperty }
 * @param groupID : the id of physical properties group which you wish to get a property from.
 * @param objectgroup-modifiable : the property which you wish to get, as per table below.
 * @return returns the value contained in given property if everything went well, error is raised
 * otherwise.
 */
export function engineGetObjectGroupPhysicalProperty(
    groupID: number,
    property: string
): unknown;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetSurfaceProperties Wiki, engineGetSurfaceProperties }
 * @param surfaceID Material IDs|Material ID from 0 to 178
 * @param property Property name
 * @return returns the current property value. see the table below for possible values.
 */
export function engineGetSurfaceProperties(
    surfaceID: number,
    property: string
): any;

/**
 * This function returns a list of the world textures which are being used to draw the
 * current scene.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetVisibleTextureNames Wiki, engineGetVisibleTextureNames }
 * @param nameFilter Only include textures that match the wildcard string.
 * @param modelId Only include textures that are used by the model id (or model name)
 * @return returns a table of texture names.
 */
export function engineGetVisibleTextureNames(
    nameFilter?: string,
    modelId?: string
): LuaTable;

/**
 * This function imports (adds) a loaded RenderWare Texture Dictionary into a specific
 * model. This is necessary in order for the DFF loader to find any new textures. Please
 * call this function before loading the DFF model file, in order to allow the DFF loading
 * process to find the new textures. This function can also replace default GTA textures, so
 * that it becomes possible to e.g. put custom images on existing billboards. Ped and weapon
 * textures are also supported.
 * See here for Optimize_Custom_TXD|tips on reducing the size of TXD files.
 * * CJ clothing component textures can be replaced by using the ids listed on Clothing
 * Component IDs|this page
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineImportTXD Wiki, engineImportTXD }
 * @param texture The TXD that was loaded with engineLoadTXD
 * @param model_id The model id to import the TXD into
 * @return returns true if the function executed succesfully, false otherwise.
 */
export function engineImportTXD(
    texture: EngineTXD,
    model_id: number
): boolean;

/**
 * This function loads a RenderWare Collision (COL 1/2/3) file into GTA. The collisions can
 * then be used to provide collisions for in-game objects.
 * For vehicles, please omit this function by embedding your COL file into your DFF file.
 * This way, you can be sure that the COL file is correctly (and automatically) loaded when
 * calling engineLoadDFF.
 * This is a client side function. Be sure to transfer your COL file by including it in the
 * meta file.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineLoadCOL Wiki, engineLoadCOL }
 * @param col_file / raw_data The filepath to the COL file you want to load or whole data buffer of the COL file.
 * @return returns a col if the file was loaded, false otherwise.
 */
export function engineLoadCOL(
    col_file: string | string
): EngineCOL;

/**
 * This function loads a RenderWare Model (DFF) file into GTA.
 * To successfully load your model with textures, be sure to use engineLoadTXD and
 * engineImportTXD before calling this function. If some error occurs while loading the DFF,
 * MTA will output a message - check out DFF error messages to know what they mean.
 * This is a client side function. Be sure to transfer your DFF file by including it in the
 * meta file.
 * The returned DFF element is an element in the element tree, just like vehicles and
 * objects. When the dff is destroyed, ie on resource unload or using destroyElement, any
 * elements that use the DFF, such as vehicles or objects will be reset.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineLoadDFF Wiki, engineLoadDFF }
 * @param dff_file / raw_data The filepath to the DFF file you want to load or whole data buffer of the DFF file.
 * @return returns a dff element if the dff file loaded, false otherwise.
 */
export function engineLoadDFF(
    dff_file: string | string
): EngineDFF;

/**
 * This function loads an animation library (IFP) file into GTA with a custom block name.
 * All three IFP formats are supported ANPK, ANP2, and ANP3. Unfortunately, GTA 3 animations
 * are not supported, however, you can load GTA:VC IFP files using this function. You dont
 * have to replace any animation to play a custom one, to play a custom animation, load the
 * IFP file using this function, then use SetPedAnimation|setPedAnimation.
 * If you wish to replace a GTA internal animation with a custom one, you can use
 * EngineReplaceAnimation|engineReplaceAnimation. To unload the IFP file, use
 * DestroyElement|destroyElement, restarting or stopping the resource can also unload the
 * IFP file automatically.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineLoadIFP Wiki, engineLoadIFP }
 * @param ifp_file / raw_data the filepath|filepath to the IFP file you want to load or whole data buffer of the IFP
 * file.
 * @param custom_block_name the new block name for the IFP file. You cannot use the GTA default Animations|internal
 * block names. You should namespace this name using a string like resource.blockname
 * @return returns an ifp element if the ifp file loaded, false otherwise.
 */
export function engineLoadIFP(
    ifp_file: string | string,
    custom_block_name: string
): EngineIFP;

/**
 * This function loads a RenderWare Texture Dictionary (TXD) file into GTA. The texture
 * dictionary can then be used to provide textures.
 * This is a client side function. Be sure to transfer your TXD file by including it in the
 * meta file.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineLoadTXD Wiki, engineLoadTXD }
 * @param txd_file / raw_data The filepath to the TXD file you want to load or whole data buffer of the TXD file.
 * @param filteringEnabled Whether to enable texture filtering.
 * @return returns a txd if the file was loaded, false otherwise.
 */
export function engineLoadTXD(
    txd_file: string | string,
    filteringEnabled?: boolean
): EngineTXD;

/**
 * This function removes a shader from one or more world textures.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRemoveShaderFromWorldTexture Wiki, engineRemoveShaderFromWorldTexture }
 * @param shader The shader which is to be removed
 * @param textureName The name of the world texture to remove the shader from. It should be exactly the same
 * string as used with engineApplyShaderToWorldTexture when the shader was initially applied.
 * @param targetElement The element to remove the shader from. It should be the same element as used with
 * engineApplyShaderToWorldTexture when the shader was initially applied.
 * @return returns true if the shader was successfully removed, false otherwise.
 */
export function engineRemoveShaderFromWorldTexture(
    shader: Element,
    textureName: string,
    targetElement?: Element
): boolean;

/**
 * This function replaces a specific internal (default) animation with a custom one that has
 * been loaded using EngineLoadIFP|engineLoadIFP function. This function only affects a
 * specific player or ped, the Animations|internal animation is not replaced for everyone,
 * for instance, different players and peds are able to have completely different crouching,
 * walking, and fighting etc., animations running simultaneously at the same time. Also, its
 * not synchronized, youll need to execute this function on every client in Lua to
 * synchronize it.
 * Internal animations replaced using this function can still be played with
 * SetPedAnimation|setPedAnimation. You can restore replaced animations back with
 * EngineRestoreAnimation|engineRestoreAnimation.
 * It should be noted that partial animations are not supported, you can still replace them,
 * but they wont work as intended, for example, FightA_block animation from ped block is a
 * partial animation, you cant replace it properly, only a few animations are partial, rest
 * of them are not, so it shouldnt be a problem.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineReplaceAnimation Wiki, engineReplaceAnimation }
 * @param thePed the player or ped you want to replace an animation for.
 * @param InternalBlockName the Animations|internal block name.
 * @param InternalAnimName the Animations|internal animation name inside InternalBlockName.
 * @param CustomBlockName the custom block name of the loaded IFP file that you passed to
 * EngineLoadIFP|engineLoadIFP as second parameter.
 * @param CustomAnimName the custom animation name inside the loaded IFP file with CustomBlockName.
 * @return returns true on success, false in case of failure.
 */
export function engineReplaceAnimation(
    thePed: Ped,
    InternalBlockName: string,
    InternalAnimName: string,
    CustomBlockName: string,
    CustomAnimName: string
): boolean;

/**
 * This function replaces the collision file of the given model id to the collision file
 * passed. Use engineLoadCOL to load the collision file first.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineReplaceCOL Wiki, engineReplaceCOL }
 * @param theCol The collision file to replace with
 * @param modelID The model ID whose collision file you want to replace
 * @return returns true if the collision was successfully replaced, false or nil if the collision
 * could not be replaced for a reason.
 */
export function engineReplaceCOL(
    theCol: EngineCOL,
    modelID: number
): boolean;

/**
 * This function replaces the given model ID with the model contained in a DFF file loaded
 * by engineLoadDFF. This function supports vehicle|vehicles, object|objects, ped|peds and
 * player|players but not CJ clothing and body parts.
 * To replace weapon models you must use their object IDs, not weapon IDs. There is a weapon
 * model list available at weapons.
 * * Default GTA map objects behave inconsistently when using this function on them. If you
 * want to replace models in the original GTA map, use one of the EngineReplaceModel
 * notes|methods shown here.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineReplaceModel Wiki, engineReplaceModel }
 * @param theModel The model to replace the given model ID with
 * @param modelID The model it to replace the model of
 * @param alphaTransparency Set to true if model uses semi-transparent textures, e.g. windows. This will ensure other
 * objects behind the semi-transparent textures are rendered correctly. (Can slightly impact
 * performance, so only set when required)
 * @return returns true if the model was successfully replaced, false if it failed for some reason,
 * ie. the dff or the model id is not valid.
 */
export function engineReplaceModel(
    theModel: EngineDFF,
    modelID: number,
    alphaTransparency?: boolean
): boolean;

/**
 * *before release 1.5.8-20716 this must be ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRequestModel Wiki, engineRequestModel }
 * @param elementType : ped, vehicle and object.
 * @param parentID : The Vehicle IDs|vehicle ID of the vehicle being allocated. (By default this is: 1337 -
 * objects, 400 - vehicles, 7 or PSYCHO for peds)
 * @return do not rely on the model numbers returned being consistent across multiple clients or
 * multiple runs of resources. there is no guarantee for the order of the numbers or that
 * the same numbers will always correspond to the same element type. any patterns are
 * coincidental
 */
export function engineRequestModel(
    elementType: string,
    parentID?: number
): number;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineResetModelLODDistance Wiki, engineResetModelLODDistance }
 * @param model The model / object ID number you want to reset the LOD distance of.
 * @return returns true if the lod distance was reset to default, or false if the model argument is
 * incorrect, or the lod distance hasnt been changed.
 */
export function engineResetModelLODDistance(
    model: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineResetSurfaceProperties Wiki, engineResetSurfaceProperties }
 * @param surfaceID Material IDs|Material ID from 0 to 178
 * @return returns true if the function executed succesfully, false otherwise.
 */
export function engineResetSurfaceProperties(
    surfaceID?: number
): any;

/**
 * This function restores internal (default) animations that were replaced using
 * EngineReplaceAnimation|engineReplaceAnimation function. This function only affects a
 * specific player or ped just like EngineReplaceAnimation|engineReplaceAnimation.
 * If only 1st parameter (Ped|ped) is provided to this function, all replaced animations are
 * restored.
 * If block name is also provided for 2nd parameter, then replaced animations within that
 * block are restored.
 * If 3rd parameter (animation name) is provided, then only that specific animation within
 * that specific block is restored.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRestoreAnimation Wiki, engineRestoreAnimation }
 * @param thePed the player or ped you want to restore an animation(s) for.
 * @param InternalBlockName the Animations|internal block name.
 * @param InternalAnimName the Animations|internal animation name inside InternalBlockName.
 * @return returns true on success, false in case of failure.
 */
export function engineRestoreAnimation(
    thePed: Ped,
    InternalBlockName?: string,
    InternalAnimName?: string
): boolean;

/**
 * This function restores the original collision model of the given model ID. Reverses the
 * effect of engineReplaceCOL.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRestoreCOL Wiki, engineRestoreCOL }
 * @param modelID The ID of the model to restore the model of
 * @return returns true if this function succeeds, false or nil if it fails for some reason.
 */
export function engineRestoreCOL(
    modelID: number
): boolean;

/**
 * This function restores the visual DFF model of the given model ID. This restores the
 * result of engineReplaceModel.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRestoreModel Wiki, engineRestoreModel }
 * @param modelID The model ID to restore the visuals of
 * @return returns true if the model was successfully restored, false or nil if it failed for some
 * reason.
 */
export function engineRestoreModel(
    modelID: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRestoreModelPhysicalPropertiesGroup Wiki, engineRestoreModelPhysicalPropertiesGroup }
 * @param modelID : the id of model which you wish to restore original physical properties group of.
 * @return returns true if there were no issues, if passed arguments were invalid an error is raised.
 */
export function engineRestoreModelPhysicalPropertiesGroup(
    modelID: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRestoreObjectGroupPhysicalProperties Wiki, engineRestoreObjectGroupPhysicalProperties }
 * @param groupID : the id of physical properties group which you wish to restore a property of.
 * @param objectgroup-modifiable : the property which you wish to restore, as per table below.
 * @return returns true if everything went well, error is raised otherwise.
 */
export function engineRestoreObjectGroupPhysicalProperties(
    groupID: number,
    property: string
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineRestreamWorld Wiki, engineRestreamWorld }
 * @return returns true if the world was restreamed successfully, false otherwise.
 */
export function engineRestreamWorld(): boolean;

/**
 * This function enables or disables asynchronous model loading. Enabling asynchronous model
 * loading may reduce the small pauses that occur when a new model is displayed for the
 * first time. However, it can cause the new models to appear slightly later than they might
 * have otherwise.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineSetAsynchronousLoading Wiki, engineSetAsynchronousLoading }
 * @param enable Set to true/false to enable/disable asynchronous loading. Only works if the clients
 * preferences has Asynchronous Loading set to Auto.
 * @param force If set to true, ignores the clients preferences.
 * @return returns true if the function executed successfully, false otherwise.
 */
export function engineSetAsynchronousLoading(
    enable: boolean,
    force: boolean
): boolean;

/**
 * This function sets a custom LOD distance for any object / model ID. This is the distance
 * at which objects of that model ID are switched to their LOD model, or (if there is no LOD
 * model) become invisible.
 * Notes:
 * The actual draw distance used is modified by the draw distance slider in the settings
 * Video tab of the MTA client.
 * *When the Video tab draw distance slider is 0%, the engineSetModelLODDistance setting
 * approximately matches the draw distance used.
 * :e.g. engineSetModelLODDistance(1337,100) will mean model 1337 will be visible up to a
 * distance of 100 units.
 * *When the Video tab draw distance slider is 100%, the engineSetModelLODDistance setting
 * is approximately doubled before use.
 * :e.g. engineSetModelLODDistance(1337,100) will mean model 1337 will be visible up to a
 * distance of 200 units.
 * However, there is a general draw distance limit of 300 units. So
 * engineSetModelLODDistance(1337,400) will mean model 1337 will be visible up to a distance
 * of 300 units no matter what the Video tab says.
 * Therefore, unless its really important, engineSetModelLODDistance should not be set to
 * anything greater than 170.<br>
 * 170 will still give the maximum draw distance (of 300 units) on clients that have a Video
 * tab draw distance setting of 100%, and it will help reduce lag for players who chose a
 * lower draw distance in their settings.
 * For low LOD elements, engineSetModelLODDistance still has a limit of 300 units, but the
 * actual draw distance used is 5 times the setting value. Also, low LOD elements ignore the
 * Video tab draw distance slider. So a setting of 200 will mean a low LOD element will
 * always have a draw distance of 1000 units.
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineSetModelLODDistance Wiki, engineSetModelLODDistance }
 * @param model The model / object ID number you want to change the LOD distance of.
 * @param distance New LOD distance value in San Andreas units.
 * @return returns true if the function executed succesfully, false otherwise.
 */
export function engineSetModelLODDistance(
    model: number,
    distance: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineSetModelPhysicalPropertiesGroup Wiki, engineSetModelPhysicalPropertiesGroup }
 * @param modelID : the id of model which you wish to set physical properties group of.
 * @param groupID : the id of new physical properties group to be used by given model.
 * @return returns true if there were no issues with group change, otherwise an error is raised
 */
export function engineSetModelPhysicalPropertiesGroup(
    modelID: number,
    groupID: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineSetModelVisibleTime Wiki, engineSetModelVisibleTime }
 * @param modelID : ID of the model
 * @param timeOn : value between 0 and 24 that states when the model should appear
 * @param timeOff : value between 0 and 24 that states when the model should disappear
 * @return returns true if the change was successful, false otherwise.
 */
export function engineSetModelVisibleTime(
    modelID: number,
    timeOn: number,
    timeOff: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineSetObjectGroupPhysicalProperty Wiki, engineSetObjectGroupPhysicalProperty }
 * @param groupID : the id of physical properties group which you wish to set a property of.
 * @param objectgroup-modifiable : the property which you wish to set, as per table below.
 * @param newValue : new value of the property, with proper type as specified in table below
 * @return returns true if everything went well, error is raised otherwise.
 */
export function engineSetObjectGroupPhysicalProperty(
    groupID: number,
    property: string,
    newValue: unknown
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/EngineSetSurfaceProperties Wiki, engineSetSurfaceProperties }
 * @param surfaceID Material IDs|Material ID from 0 to 178
 * @param property Property name
 * @param value New value from table below
 * @return returns true if the function executed succesfully, false otherwise.
 */
export function engineSetSurfaceProperties(
    surfaceID: number,
    property: string,
    value: any
): boolean;
