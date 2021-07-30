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

/** @customConstructor Engine */
export class Engine {
    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/EngineResetModelLODDistance Wiki, engineResetModelLODDistance }
     * @param model The model / object ID number you want to reset the LOD distance of.
     * @return returns true if the lod distance was reset to default, or false if the model argument is
     * incorrect, or the lod distance hasnt been changed.
     */
    static resetModelLODDistance(
        model: number
    ): boolean;

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
    static setAsynchronousLoading(
        enable: boolean,
        force: boolean
    ): boolean;

    /**
     * This function gets the LOD distance for any object / model ID.
     * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelLODDistance Wiki, engineGetModelLODDistance }
     * @param model The model / object ID number you want to get the LOD distance of.
     * @return returns a float representing the lod distance of the model, or false if the model
     * argument is incorrect.
     */
    static getModelLODDistance(
        model: number
    ): number;

    /**
     * This function gets the model ID of an object model from object name. This function is the
     * counterpart of engineGetModelNameFromID.
     * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelIDFromName Wiki, engineGetModelIDFromName }
     * @param modelName The model name of the object
     * @return returns an int with the id of the object model, false otherwise.
     */
    static getModelIDFromName(
        modelName: string
    ): number;

    /**
     * This function gets the model name of an object model from model ID. This function is the
     * counterpart of engineGetModelIDFromName.
     * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelNameFromID Wiki, engineGetModelNameFromID }
     * @param modelID The model ID of the object
     * @return returns a string with the name of the object model, false otherwise.
     */
    static getModelNameFromID(
        modelID: number
    ): string;

    /**
     * This function restores the original collision model of the given model ID. Reverses the
     * effect of engineReplaceCOL.
     * @see {@link https://wiki.multitheftauto.com/wiki/EngineRestoreCOL Wiki, engineRestoreCOL }
     * @param modelID The ID of the model to restore the model of
     * @return returns true if this function succeeds, false or nil if it fails for some reason.
     */
    static restoreCOL(
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
    static restoreModel(
        modelID: number
    ): boolean;

    /**
     * This function returns a list of the world textures which are being used to draw the
     * current scene.
     * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetVisibleTextureNames Wiki, engineGetVisibleTextureNames }
     * @param nameFilter Only include textures that match the wildcard string.
     * @param modelId Only include textures that are used by the model id (or model name)
     * @return returns a table of texture names.
     */
    static getVisibleTextureNames(
        nameFilter?: string,
        modelId?: string
    ): LuaTable;

    /**
     * This function returns a table of the world textures which are applied to the specified
     * model.
     * @see {@link https://wiki.multitheftauto.com/wiki/EngineGetModelTextureNames Wiki, engineGetModelTextureNames }
     * @param modelId You can either use the model id or the model name.
     * @return returns a table if this function succeeds, false if it fails for some reason.
     */
    static getModelTextureNames(
        modelId: string
    ): LuaTable;

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
    static setModelLODDistance(
        model: number,
        distance: number
    ): boolean;
}
