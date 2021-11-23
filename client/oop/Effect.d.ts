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

/** @customConstructor Effect */
export class Effect extends Element {
    /**
     * This function gets the density of certain effect.
     */
    density: number;

    /**
     * This function gets the speed of a specified effect.
     */
    speed: number;

    /**
     * Creates an Element/Effect|effect on specified position.
     * @see https://wiki.multitheftauto.com/wiki/CreateEffect
     * @param name A string contains Element/Effect#Effects_list|effect name.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.
     * @param rX A floating point number representing the rotation about the X axis in degrees.
     * @param rY A floating point number representing the rotation about the Y axis in degrees.
     * @param rZ A floating point number representing the rotation about the Z axis in degrees.
     * @param drawDistance A floating point number between 1 and 8191 which represents the draw distance of the
     * effect, or 0 to use the default draw distance.
     * @param soundEnable to enable the sound of the effect.
     * @return returns the element/effect|effect element if creation was successful, false otherwise.
     */
    constructor(
        name: string,
        x: number,
        y: number,
        z: number,
        rX?: number,
        rY?: number,
        rZ?: number,
        drawDistance?: number,
        soundEnable?: boolean,
    );

    /**
     * Creates a blood splatter particle effect.
     * @see https://wiki.multitheftauto.com/wiki/FxAddBlood
     * @param posX, posY, posZ the world coordinates where the effect originates.
     * @param dirX, dirY, dirZ a direction vector indicating where the blood flies to.
     * @param count the number of flying droplets to create.
     * @param brightness the brightness. Ranges from 0 (almost black) to 1 (normal color).
     */
    static addBlood(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
        count?: number,
        brightness?: number,
    ): boolean;

    /**
     * Creates a bullet impact particle effect, consisting of a small smoke cloud and a number
     * of sparks.
     * @see https://wiki.multitheftauto.com/wiki/FxAddBulletImpact
     * @param posX, posY, posZ the world coordinates where the effect originates.
     * @param dirX, dirY, dirZ a vector indicating the direction of the effect.
     * @param smokeSize the size of the smoke cloud.
     * @param sparkCount the number of sparks to create.
     * @param smokeIntensity the amount/transparency of smoke, ranges from 0 to 1.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addBulletImpact(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
        smokeSize?: number,
        sparkCount?: number,
        smokeIntensity?: number,
    ): boolean;

    /**
     * This function creates a bullet splash particle effect, normally created when shooting
     * into water.
     * @see https://wiki.multitheftauto.com/wiki/FxAddBulletSplash
     * @param posX A float representing the x position of the splash
     * @param posY A float representing the y position of the splash
     * @param posZ A float representing the z position of the splash
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addBulletSplash(posX: number, posY: number, posZ: number): boolean;

    /**
     * Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).
     * @see https://wiki.multitheftauto.com/wiki/FxAddDebris
     * @param posX, posY, posZ the world coordinates where the debris originates.
     * @param colorR, colorG, colorB, colorA the color and alpha (transparency) of the debris effect.
     * @param scale the size of the chunks.
     * @param count the number of chunks to create.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addDebris(
        posX: number,
        posY: number,
        posZ: number,
        colorR?: number,
        colorG?: number,
        colorB?: number,
        colorA?: number,
        scale?: number,
        count?: number,
    ): boolean;

    /**
     * This function creates a foot splash particle effect, normally created when walking into
     * water.
     * @see https://wiki.multitheftauto.com/wiki/FxAddFootSplash
     * @param posX A float representing the x position of the splash
     * @param posY A float representing the y position of the splash
     * @param posZ A float representing the z position of the splash
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addFootSplash(posX: number, posY: number, posZ: number): boolean;

    /**
     * This function creates a glass particle effect.
     * @see https://wiki.multitheftauto.com/wiki/FxAddGlass
     * @param posX A float representing the x position of the glass
     * @param posY A float representing the y position of the glass
     * @param posZ A float representing the z position of the glass
     * @param colorR, colorG, colorB, colorA the color and alpha (transparency) of the glass effect.
     * @param scale A float representing the size of the particle effect, where 1 is the standard size.
     * @param count The density of the particle effect.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addGlass(
        posX: number,
        posY: number,
        posZ: number,
        colorR?: number,
        colorG?: number,
        colorB?: number,
        colorA?: number,
        scale?: number,
        count?: number,
    ): boolean;

    /**
     * This function creates a gunshot particle effect.
     * @see https://wiki.multitheftauto.com/wiki/FxAddGunshot
     * @param posX, posY, posZ the world coordinates where the effect originates.
     * @param dirX, dirY, dirZ a direction vector indicating where the bullet is fired.
     * @param includeSparks A bool representing whether the particle effect will generate sparks.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addGunshot(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
        includeSparks?: boolean,
    ): boolean;

    /**
     * Creates a punch impact particle effect (a small dust cloud).
     * @see https://wiki.multitheftauto.com/wiki/FxAddPunchImpact
     * @param posX, posY, posZ the world coordinates where the effect originates.
     * @param dirX, dirY, dirZ a vector indicating the movement direction of the effect.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addPunchImpact(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
    ): boolean;

    /**
     * Creates a number of sparks originating from a point or along a line.
     * @see https://wiki.multitheftauto.com/wiki/FxAddSparks
     * @param posX, posY, posZ the world coordinates where the sparks originate.
     * @param dirX, dirY, dirZ a direction vector indicating where the sparks fly to. The longer this vector is, the
     * faster the sparks fly.
     * @param force speed factor: the higher this value, the faster and further the sparks fly.
     * @param count the number of effects to create.
     * @param acrossLineX, acrossLineY, acrossLineZ a vector starting at the pos coordinates. If specified, the sparks will be created along
     * a line going from pos to pos - acrossLine. If not specified, all sparks originate from
     * the point at pos.
     * @param blur if false, creates standard bullet impact-like sparks. If true, adds motion blur to the
     * sparks.
     * @param spread determines how strongly the particles deviate from each other. With low values the
     * particles will stay quite close together, high values will make them fly in all
     * directions. Also affects their speed.
     * @param life the higher this value, the longer the sparks survive before they disappear.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addSparks(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
        force?: number,
        count?: number,
        acrossLineX?: number,
        acrossLineY?: number,
        acrossLineZ?: number,
        blur?: boolean,
        spread?: number,
        life?: number,
    ): boolean;

    /**
     * This function creates a tank firing particle effect.
     * @see https://wiki.multitheftauto.com/wiki/FxAddTankFire
     * @param posX, posY, posZ the world coordinates where the effect originates.
     * @param dirX, dirY, dirZ a direction vector indicating where the tank fire is directed to.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addTankFire(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
    ): boolean;

    /**
     * Creates a tyre burst particle effect (a small white smoke puff).
     * @see https://wiki.multitheftauto.com/wiki/FxAddTyreBurst
     * @param posX, posY, posZ the world coordinates where the puff originates.
     * @param dirX, dirY, dirZ a vector indicating the movement direction of the effect.
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addTyreBurst(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
    ): boolean;

    /**
     * This function creates a water hydrant particle effect.
     * @see https://wiki.multitheftauto.com/wiki/FxAddWaterHydrant
     * @param posX A float representing the x position of the hydrant
     * @param posY A float representing the y position of the hydrant
     * @param posZ A float representing the z position of the hydrant
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addWaterHydrant(posX: number, posY: number, posZ: number): boolean;

    /**
     * This function creates a water splash particle effect.
     * @see https://wiki.multitheftauto.com/wiki/FxAddWaterSplash
     * @param posX A float representing the x position of the splash
     * @param posY A float representing the y position of the splash
     * @param posZ A float representing the z position of the splash
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addWaterSplash(posX: number, posY: number, posZ: number): boolean;

    /**
     * Creates a wood splinter particle effect.
     * @see https://wiki.multitheftauto.com/wiki/FxAddWood
     * @param posX, posY, posZ the world coordinates where the effect originates.
     * @param dirX, dirY, dirZ a direction vector indicating where the wood splinters fly to.
     * @param count the number of splinters to create.
     * @param brightness the brightness. Ranges from 0 (black) to 1 (normal color).
     * @return returns a true if the operation was successful, false otherwise.
     */
    static addWood(
        posX: number,
        posY: number,
        posZ: number,
        dirX: number,
        dirY: number,
        dirZ: number,
        count?: number,
        brightness?: number,
    ): boolean;

    /**
     * This function gets the density of certain effect.
     * @see https://wiki.multitheftauto.com/wiki/GetEffectDensity
     */
    getDensity(): number;

    /**
     * This function gets the speed of a specified effect.
     * @see https://wiki.multitheftauto.com/wiki/GetEffectSpeed
     * @return returns float containing the effects speed, false if invalid arguments were specified.
     */
    getSpeed(): number;

    /**
     * This function sets the density of a specified effect.
     * The limit is 1 for Low, 1.5 for Medium, and 2 for High/Very high.|true}}
     * @see https://wiki.multitheftauto.com/wiki/SetEffectDensity
     * @param density The level of density (from 0 to 2).
     * @return returns true if the density was succesfully changed, false otherwise.
     */
    setDensity(density: number): boolean;

    /**
     * This function sets the speed of a specified effect.
     * @see https://wiki.multitheftauto.com/wiki/SetEffectSpeed
     * @param speed The speed to set.
     * @return returns true if the effect speed was succesfuly changed, false otherwise.
     */
    setSpeed(speed: number): boolean;
}
