// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineDFF,
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

/** @customConstructor EngineTXD */
export class EngineTXD {
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
     * @see https://wiki.multitheftauto.com/wiki/EngineImportTXD
     * @param model_id The model id to import the TXD into
     * @return returns true if the function executed succesfully, false otherwise.
     */
    import(model_id: number): boolean;

    /**
     * This function loads a RenderWare Texture Dictionary (TXD) file into GTA. The texture
     * dictionary can then be used to provide textures.
     * This is a client side function. Be sure to transfer your TXD file by including it in the
     * meta file.
     * @see https://wiki.multitheftauto.com/wiki/EngineLoadTXD
     * @param txd_file / raw_data The filepath to the TXD file you want to load or whole data buffer of the TXD file.
     * @param filteringEnabled Whether to enable texture filtering.
     * @return returns a txd if the file was loaded, false otherwise.
     */
    constructor(txd_file: string | string, filteringEnabled?: boolean);
}
