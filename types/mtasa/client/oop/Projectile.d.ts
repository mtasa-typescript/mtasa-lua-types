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
    ControlName,
    KeyName,
    KeyState
} from '../structure';

/** @customConstructor Projectile */
export class Projectile {
    /**
     * Get the time left before a projectile detonates.
     */
    counter: number;

    /**
     * This function returns the creator of the specified projectile.
     */
    creator: Element;

    /**
     * This function returns the force of the specified projectile.
     */
    force: number;

    /**
     * This function returns the target of the specified projectile.
     */
    target: Element;

    /**
     * This function returns the type of the specified projectile.
     */
    type: number;

    /**
     * This function creates a projectile of the specified type on the specified coordinates.
     * *Model argument is not synchronized between clients. Clients differs from local player
     * see always standard projectile model.
     * *Target argument can only be defined as a player or another projectile.
     * @see https://wiki.multitheftauto.com/wiki/CreateProjectile
     * @param weaponType int representing the projectile weaponType (characteristics). Valid IDs are:
     * @param posX , posY, posZ: float starting coordinates for the projectile. They are coordinates of
     * creator by default.
     * @param force : float representing the starting force for throwable projectiles.
     * @param target : element target used for heat seeking rockets.
     * @param rotX , rotY, rotZ: float starting rotation for the projectile.
     * @param velX , velY, velZ: float starting velocity for the projectile.
     * @param model : Integer representing the projectiles model, uses default model for weaponType if not
     * specified.
     * @return returns a projectile element if projectile creation was successful. returns false if
     * unable to create a projectile (wrong weapon id or projectiles limit was reached).
     */
    constructor(
        weaponType: number,
        posX?: number,
        posY?: number,
        posZ?: number,
        force?: number,
        target?: Element,
        rotX?: number,
        rotY?: number,
        rotZ?: number,
        velX?: number,
        velY?: number,
        velZ?: number,
        model?: number
    );

    /**
     * Get the time left before a projectile detonates.
     * @see https://wiki.multitheftauto.com/wiki/GetProjectileCounter
     * @return returns the the time in milliseconds to detonation which depending on the projectile type
     * will do different things:
     * * grenades will explode when it hits 0
     * * teargas may be a duration timer
     * * both types of rockets will explode when it hits 0
     * * satchels restarts so i do not think it does anything
     */
    getCounter(): number;

    /**
     * This function returns the creator of the specified projectile.
     * @see https://wiki.multitheftauto.com/wiki/GetProjectileCreator
     * @return returns the element which created the projectile if successful, false otherwise.
     */
    getCreator(): Element;

    /**
     * This function returns the force of the specified projectile.
     * @see https://wiki.multitheftauto.com/wiki/GetProjectileForce
     * @return returns a float if successful, false otherwise.
     */
    getForce(): number;

    /**
     * This function returns the target of the specified projectile.
     * @see https://wiki.multitheftauto.com/wiki/GetProjectileTarget
     * @return returns the element which is the projectiles target if the projectile is valid and can
     * have a target (like a heat-seeking rocket), false otherwise.
     */
    getTarget(): Element;

    /**
     * This function returns the type of the specified projectile.
     * @see https://wiki.multitheftauto.com/wiki/GetProjectileType
     * @return returns an integer over the type of the projectile or false if invalid arguments were
     * passed.
     */
    getType(): number;

    /**
     * Will change the projectile counter timer which depending on the projectile type will do
     * different things:
     * * Rockets and Grenades will explode when it hits 0
     * * Teargas may be a duration timer
     * * Satchels restart (we currently assume it doesnt cause an effect)
     * * Molotov will explode with search ground level when it hits 0
     * @see https://wiki.multitheftauto.com/wiki/SetProjectileCounter
     * @param timeToDetonate The time in milliseconds to detonation.
     * @return returns true on success, false otherwise.
     */
    setCounter(
        timeToDetonate: number
    ): boolean;
}
