// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
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

/** @customConstructor EngineCOL */
export class EngineCOL {
    /**
     * This function loads a RenderWare Collision (COL 1/2/3) file into GTA. The collisions can
     * then be used to provide collisions for in-game objects.
     * For vehicles, please omit this function by embedding your COL file into your DFF file.
     * This way, you can be sure that the COL file is correctly (and automatically) loaded when
     * calling engineLoadDFF.
     * This is a client side function. Be sure to transfer your COL file by including it in the
     * meta file.
     * @see https://wiki.multitheftauto.com/wiki/EngineLoadCOL
     * @param col_file / raw_data The filepath to the COL file you want to load or whole data buffer of the COL file.
     * @return returns a col if the file was loaded, false otherwise.
     */
    constructor(col_file: string | string);

    /**
     * This function replaces the collision file of the given model id to the collision file
     * passed. Use engineLoadCOL to load the collision file first.
     * @see https://wiki.multitheftauto.com/wiki/EngineReplaceCOL
     * @param modelID The model ID whose collision file you want to replace
     * @return returns true if the collision was successfully replaced, false or nil if the collision
     * could not be replaced for a reason.
     */
    replace(modelID: number): boolean;
}
