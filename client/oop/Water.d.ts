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

/** @customConstructor Water */
export class Water extends Element {
    /**
     * Sets the height of some or all the water in the game world.
     */
    level: boolean;

    /**
     * Creates an area of water.
     * The largest possible size of a water area is 5996&#0215;5996. Also be aware that the
     * function will change all x and y coordinates you specify into even integer numbers if
     * necessary: this is because of a limitation of San Andreas.
     * You are able to give the water a shallow water effect, which practically changes the
     * water invisible to the eye. However, all elements still work the same way as without the
     * shallow effect - allowing swimming, diving, vehicles to sink, etc.
     * @see https://wiki.multitheftauto.com/wiki/CreateWater
     * @param x1, y1, z1 position of bottom left (south-west) corner.
     * @param x2, y2, z2 position of bottom right (south-east) corner.
     * @param x3, y3, z3 position of top left (north-west) corner.
     * ''Note: Only 3 coords creates a triangle''
     * @param x4, y4, z4 position of top right (north-east) corner.
     * @param bShallow gives the water a shallow water effect.
     * @return returns a water element if successful, false otherwise. the water element can be
     * repositioned with setelementposition and destroyed with destroyelement.
     */
    constructor(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4?: number,
        y4?: number,
        z4?: number,
        bShallow?: boolean,
    );

    /**
     * This function returns the water color of the GTA world.
     * Note: The server can only return the water color, if it has actually been set by script.
     * @see https://wiki.multitheftauto.com/wiki/GetWaterColor
     * @return returns 4 int|ints, indicating the color of the water. (rgba)
     */
    getColor(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * Gets the world position of a vertex (i.e. corner) of a water area. Each water area is
     * either a triangle or quad (rectangle) so each has 3 or 4 corners.
     * @see https://wiki.multitheftauto.com/wiki/GetWaterVertexPosition
     * @param vertexIndex the index of the vertex whose position to get. Values range from 1 to 4 for a water quad,
     * or 1 to 3 for a triangle.
     * @return returns the x, y and z coordinates of the specified vertex if successful, false otherwise.
     */
    getVertexPosition(
        vertexIndex: number,
    ): LuaMultiReturn<[number, number, number]>;

    /**
     * This function returns the current wave height.
     * @see https://wiki.multitheftauto.com/wiki/GetWaveHeight
     * @return returns the height as a float, false otherwise.
     */
    static getWaveHeight(): number;

    /**
     * This function reset the water color of the GTA world to default.
     * @see https://wiki.multitheftauto.com/wiki/ResetWaterColor
     * @return returns true if water color was reset correctly, false otherwise.
     */
    static resetColor(): boolean;

    /**
     * This function resets the water of the GTA world back to its default level. water|Water
     * elements are not affected.
     * @see https://wiki.multitheftauto.com/wiki/ResetWaterLevel
     * @return returns true if water level was reset correctly, false otherwise.
     */
    static resetLevel(): boolean;

    /**
     * This function changes the water color of the GTA world.
     * @see https://wiki.multitheftauto.com/wiki/SetWaterColor
     * @param red The red value of the water, from 0 to 255.
     * @param green The green value of the water, from 0 to 255.
     * @param blue The blue value of the water, from 0 to 255.
     * @param alpha The alpha (visibility) value of the water, from 0 to 255. Defaults to 200 if not declared.
     * @return returns true if water color was set correctly, false if invalid values were passed.
     */
    setColor(red: number, green: number, blue: number, alpha?: number): boolean;

    /**
     * Sets the height of some or all the water in the game world.
     * @see https://wiki.multitheftauto.com/wiki/SetWaterLevel
     * @param level the new Z coordinate of the water surface. All water in the game world is set to this
     * height.
     * @param includeWaterFeatures a boolean indicating whether to also set the level of water features such as ponds and
     * pools.
     * @param includeWaterElements a boolean indicating whether to also set the level of all water elements.
     * @param includeWorldSea a boolean indicating whether to set the level of the sea water
     * @param includeOutsideWorldSea a boolean indicating whether to also set the level of sea water outside the world area,
     * ie. outside -3000, 3000.
     * @return returns true if successful, false in case of failure.
     */
    setLevel(level: number): boolean;

    /**
     * Sets the world position of a corner point of a water area.
     * @see https://wiki.multitheftauto.com/wiki/SetWaterVertexPosition
     * @param vertexIndex the index of the vertex to move. Values range from 1 to 4 for water quads, and 1 to 3 for
     * triangles.
     * @param x the X coordinate to set for the vertex.
     * @param y the Y coordinate to set for the vertex.
     * @param z the Z coordinate to set for the vertex.
     * @return returns true if successful, false otherwise.
     */
    setVertexPosition(
        vertexIndex: number,
        x: number,
        y: number,
        z: number,
    ): boolean;

    /**
     * This function sets the wave height to the desired value, the default is 0.
     * @see https://wiki.multitheftauto.com/wiki/SetWaveHeight
     * @param height A float between 0 and 100.
     * @return returns a boolean value true or false that tells you if it was successful or not.
     */
    static setWaveHeight(height: number): boolean;
}
