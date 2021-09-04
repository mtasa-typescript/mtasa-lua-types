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
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/**
 * This function creates a projectile of the specified type on the specified coordinates.
 * *Model argument is not synchronized between clients. Clients differs from local player
 * see always standard projectile model.
 * *Target argument can only be defined as a player or another projectile.
 * @see https://wiki.multitheftauto.com/wiki/CreateProjectile
 * @param creator The element representing creator of the projectile. In case you want the projectile to be
 * synced for everybody creator must be the local player or his vehicle.
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
 * @noSelf
 */
export declare function createProjectile(
    creator: Element,
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
    model?: number,
): Projectile;

/**
 * This function can be used to detonate a players satchels.
 * @see https://wiki.multitheftauto.com/wiki/DetonateSatchels
 * @noSelf
 */
export declare function detonateSatchels(): boolean;

/**
 * Get the time left before a projectile detonates.
 * @see https://wiki.multitheftauto.com/wiki/GetProjectileCounter
 * @param projectile : the projectile to get the timer of.
 * @return returns the the time in milliseconds to detonation which depending on the projectile type
 * will do different things:
 * * grenades will explode when it hits 0
 * * teargas may be a duration timer
 * * both types of rockets will explode when it hits 0
 * * satchels restarts so i do not think it does anything
 * @noSelf
 */
export declare function getProjectileCounter(projectile: Projectile): number;

/**
 * This function returns the creator of the specified projectile.
 * @see https://wiki.multitheftauto.com/wiki/GetProjectileCreator
 * @param theProjectile The projectiles| projectile element which creator you want to retrieve.
 * @return returns the element which created the projectile if successful, false otherwise.
 * @noSelf
 */
export declare function getProjectileCreator(
    theProjectile: Projectile,
): Element;

/**
 * This function returns the force of the specified projectile.
 * @see https://wiki.multitheftauto.com/wiki/GetProjectileForce
 * @param theProjectile The projectiles| projectile element which force you want to retrieve.
 * @return returns a float if successful, false otherwise.
 * @noSelf
 */
export declare function getProjectileForce(theProjectile: Projectile): number;

/**
 * This function returns the target of the specified projectile.
 * @see https://wiki.multitheftauto.com/wiki/GetProjectileTarget
 * @param theProjectile The projectiles| projectile element which target you want to retrieve.
 * @return returns the element which is the projectiles target if the projectile is valid and can
 * have a target (like a heat-seeking rocket), false otherwise.
 * @noSelf
 */
export declare function getProjectileTarget(theProjectile: Projectile): Element;

/**
 * This function returns the type of the specified projectile.
 * @see https://wiki.multitheftauto.com/wiki/GetProjectileType
 * @param theProjectile The Element/Projectile|projectile element which type you want to retrieve.
 * @return returns an integer over the type of the projectile or false if invalid arguments were
 * passed.
 * @noSelf
 */
export declare function getProjectileType(theProjectile: Projectile): number;

/**
 * Will change the projectile counter timer which depending on the projectile type will do
 * different things:
 * * Rockets and Grenades will explode when it hits 0
 * * Teargas may be a duration timer
 * * Satchels restart (we currently assume it doesnt cause an effect)
 * * Molotov will explode with search ground level when it hits 0
 * @see https://wiki.multitheftauto.com/wiki/SetProjectileCounter
 * @param projectile The projectile to edit the timer of.
 * @param timeToDetonate The time in milliseconds to detonation.
 * @return returns true on success, false otherwise.
 * @noSelf
 */
export declare function setProjectileCounter(
    projectile: Projectile,
    timeToDetonate: number,
): boolean;
