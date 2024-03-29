// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    DxTexture,
    ObjectGroup,
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
    Svg,
    SvgCallback,
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
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/** @customConstructor EngineDFF */
export class EngineDFF {
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
     * @see https://wiki.multitheftauto.com/wiki/EngineLoadDFF
     * @param dff_file / raw_data The filepath to the DFF file you want to load or whole data buffer of the DFF file.
     * @return returns a dff element if the dff file loaded, false otherwise.
     */
    constructor(dff_file: string | string);

    /**
     * This function replaces the given model ID with the model contained in a DFF file loaded
     * by engineLoadDFF. This function supports vehicle|vehicles, object|objects, ped|peds and
     * player|players but not CJ clothing and body parts.
     * To replace weapon models you must use their object IDs, not weapon IDs. There is a weapon
     * model list available at weapons.
     * * Please note the loading order that is used in the examples as other orders can cause
     * collisions, textures or the DFF not to load due to technical limitations.
     * * Default GTA map objects behave inconsistently when using this function on them. If you
     * want to replace models in the original GTA map, use one of the EngineReplaceModel
     * notes|methods shown here.
     * * A raw data DFF element can only be used once, because the underlying memory for the
     * model is released after replacement.
     * * If the replacement model is broken and the original model is not loaded/streamed-in at
     * the time of replacement, this function will succeed and you wont see any error message,
     * neither when the model replacement fails once the original model starts to
     * load/stream-in.}}
     * @see https://wiki.multitheftauto.com/wiki/EngineReplaceModel
     * @param modelID The model it to replace the model of
     * @param alphaTransparency Set to true if model uses semi-transparent textures, e.g. windows. This will ensure other
     * objects behind the semi-transparent textures are rendered correctly. (Can slightly impact
     * performance, so only set when required)
     * @return returns true if the model was successfully replaced, false if it failed for some reason,
     * ie. the dff or the model id is not valid.
     */
    replace(modelID: number, alphaTransparency?: boolean): boolean;
}
