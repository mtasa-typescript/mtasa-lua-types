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

/** @customConstructor Ped */
export class Ped extends Element {
    /**
     * This function returns an integer that contains the ammo in a specified peds weapon. See
     * weapon|Weapon Info
     */
    ammoInClip: number;

    /**
     * This function returns the current armor of the specified ped.
     */
    armor: number;

    /**
     * This function gets the current camera rotation of a ped.
     */
    cameraRotation: number;

    /**
     * This function detects the element a ped is standing on. This can be a vehicle or an
     * object.
     */
    contactElement: Element;

    /**
     * Retrieves the fighting style a player/ped is currently using.
     */
    fightingStyle: number;

    /**
     * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
     */
    vehicle: Vehicle;

    /**
     * This function gets the seat that a specific ped is sitting in in a vehicle.
     */
    vehicleSeat: number;

    /**
     * This function returns the current oxygen level of the specified ped.
     */
    oxygenLevel: number;

    /**
     */
    walkingStyle: number;

    /**
     * This function gets a peds selected weapon slot.
     */
    weaponSlot: number;

    /**
     * This function checks if the specified ped is choking (coughing) or not. This happens as a
     * result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray
     * can.
     */
    choking: boolean;

    /**
     * This function checks if the specified ped is dead or not.
     */
    dead: boolean;

    /**
     * This function checks if the ped is in the driveby state.
     */
    doingGangDriveby: boolean;

    /**
     * This function checks if the specified ped is ducked (crouched) or not.
     */
    ducked: boolean;

    /**
     * Checks whether or not a given ped is currently in a vehicle.
     */
    inVehicle: boolean;

    /**
     * This function checks if the specified ped is on fire or not.
     */
    onFire: boolean;

    /**
     * This function is used to determine whether or not a ped is on the ground. This is for
     * on-foot usage only.
     */
    onGround: boolean;

    /**
     * This function is used to determine whether or not a ped is currently reloading their
     * weapon. Useful to stop certain quick reload exploits.}}
     */
    reloadingWeapon: boolean;

    /**
     */
    jetpack: boolean;

    /**
     * With this function, you can set if a ped has a head or not.
     */
    headless: boolean;

    /**
     * This function is used to set the current clothes on a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/AddPedClothes Wiki, addPedClothes }
     * @param clothesTexture : A string determining the clothes texture that will be added. See the CJ Clothes|clothes
     * catalog.
     * @param clothesModel : A string determining the clothes model that will be added. See the CJ Clothes|clothes
     * catalog.
     * @param clothesType : A integer representing the clothes slot/type the clothes should be added to. See the CJ
     * Clothes|clothes catalog.
     * @return this function returns true if the clothes were successfully added to the ped, false
     * otherwise.
     */
    addClothes(
        clothesTexture: string,
        clothesModel: string,
        clothesType: number
    ): boolean;

    /**
     * This function checks if the given ped can fall off bikes.
     * @see {@link https://wiki.multitheftauto.com/wiki/CanPedBeKnockedOffBike Wiki, canPedBeKnockedOffBike }
     * @return returns true if the ped can be knocked off bikes, false if he cannot or an invalid
     * element was passed.
     */
    canBeKnockedOffBike(): boolean;

    /**
     * This function returns an integer that contains the ammo in a specified peds weapon. See
     * weapon|Weapon Info
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedAmmoInClip Wiki, getPedAmmoInClip }
     * @param weaponSlot an integer representing the weapon slot (set to the peds currently selected slot if not
     * specified).
     * @return returns an int containing the amount of ammo in the specified peds currently selected or
     * specified clip, or 0 if the ped specified is invalid.
     */
    getAmmoInClip(
        weaponSlot?: number
    ): number;

    /**
     * Gets the animation of a player or ped that was set using setPedAnimation.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedAnimation Wiki, getPedAnimation }
     * @return <syntaxhighlight lang=lua>string anim, string block, int time, bool loop, bool
     * updateposition, bool interruptable, bool freezelastframe, int blendtime, bool
     * restoretaskonanimend</syntaxhighlight>
     */
    getAnimation(): LuaMultiReturn<[
        string,
        string
    ]>;

    /**
     * This function returns the current armor of the specified ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedArmor Wiki, getPedArmor }
     * @return a float with the armor, false if an invalid ped was given.
     */
    getArmor(): number;

    /**
     * Returns the 3D world coordinates of a specific bone of a given ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedBonePosition Wiki, getPedBonePosition }
     * @param bone the number of the bone to get the position of.
     * <div style="border: 3px red solid; margin-bottom:3px; padding-left:5px;">
     * @param 1 BONE_PELVIS1
     * @param 2 BONE_PELVIS
     * @param 3 BONE_SPINE1
     * @param 4 BONE_UPPERTORSO
     * @param 5 BONE_NECK
     * @param 6 BONE_HEAD2
     * @param 7 BONE_HEAD1
     * @param 8 BONE_HEAD
     * @param 21 BONE_RIGHTUPPERTORSO
     * @param 22 BONE_RIGHTSHOULDER
     * @param 23 BONE_RIGHTELBOW
     * @param 24 BONE_RIGHTWRIST
     * @param 25 BONE_RIGHTHAND
     * @param 26 BONE_RIGHTTHUMB
     * @param 31 BONE_LEFTUPPERTORSO
     * @param 32 BONE_LEFTSHOULDER
     * @param 33 BONE_LEFTELBOW
     * @param 34 BONE_LEFTWRIST
     * @param 35 BONE_LEFTHAND
     * @param 36 BONE_LEFTTHUMB
     * @param 41 BONE_LEFTHIP
     * @param 42 BONE_LEFTKNEE
     * @param 43 BONE_LEFTANKLE
     * @param 44 BONE_LEFTFOOT
     * @param 51 BONE_RIGHTHIP
     * @param 52 BONE_RIGHTKNEE
     * @param 53 BONE_RIGHTANKLE
     * @param 54 BONE_RIGHTFOOT
     * </div>
     * @return returns the x, y, z world position of the bone.
     */
    getBonePosition(
        bone: number
    ): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function gets the current camera rotation of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedCameraRotation Wiki, getPedCameraRotation }
     * @return returns the camera rotation of the ped in degrees if successful. returns false if an
     * invalid element was passed.
     */
    getCameraRotation(): number;

    /**
     * This function is used to get the current clothes texture and model of a certain type on a
     * ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedClothes Wiki, getPedClothes }
     * @param clothesType The type/slot of clothing you want to get.
     * @return this function returns 2 string|strings, the clothes texture and model. the first return
     * value will be false if this players clothes type is empty or an invalid player was
     * specified.
     */
    getClothes(
        clothesType: number
    ): LuaMultiReturn<[
        string,
        string
    ]>;

    /**
     * This function detects the element a ped is standing on. This can be a vehicle or an
     * object.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedContactElement Wiki, getPedContactElement }
     * @return returns an object or a vehicle if the ped is standing on one, false if he is touching
     * none or an invalid element was passed.
     */
    getContactElement(): Element;

    /**
     * Checks whether a ped or the localplayer has a certain control pressed.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedControlState Wiki, getPedControlState }
     * @param control the control to get the status of. See control names for a list of valid names.
     * @return returns true if the ped is pressing the specified control, false if not or an invalid
     * argument was passed.
     */
    getControlState(
        control: string
    ): boolean;

    /**
     * Retrieves the fighting style a player/ped is currently using.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedFightingStyle Wiki, getPedFightingStyle }
     * @return returns the peds current fighting style as an integer id, false if it fails to retrieve a
     * value.
     */
    getFightingStyle(): number;

    /**
     * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedOccupiedVehicle Wiki, getPedOccupiedVehicle }
     * @return returns the vehicle that the specified ped is in, or false if the ped is not in a vehicle
     * or is an invalid ped.
     */
    getOccupiedVehicle(): Vehicle;

    /**
     * This function gets the seat that a specific ped is sitting in in a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedOccupiedVehicleSeat Wiki, getPedOccupiedVehicleSeat }
     * @return * returns an integer containing the number of the seat that the ped is currently in:
     * ** 0: front-left
     * ** 1: front-right
     * ** 2: rear-left
     * ** 3: rear-right
     * returns false if the ped is on foot, or the ped doesnt exist.
     */
    getOccupiedVehicleSeat(): number;

    /**
     * This function returns the current oxygen level of the specified ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedOxygenLevel Wiki, getPedOxygenLevel }
     * @return a float with the oxygen level, false if an invalid ped was given.
     */
    getOxygenLevel(): number;

    /**
     * This function returns the value of the specified statistic of a specific ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedStat Wiki, getPedStat }
     * @param stat : A whole number determining the stat ID.
     * @return returns the value of the requested statistic.
     */
    getStat(
        stat: number
    ): number;

    /**
     * This function is used to get the element a ped is currently targeting.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedTarget Wiki, getPedTarget }
     * @return returns the element thats being targeted, or false if there isnt one.
     * this is only effective on physical gta elements, namely:
     * * players
     * * peds
     * * vehicles
     * * objects
     */
    getTarget(): Element;

    /**
     * This function allows retrieval of the position where a peds target range ends, when he is
     * aiming with a weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedTargetEnd Wiki, getPedTargetEnd }
     * @return returns three floats, x,y,z, representing the position where the peds target ends
     * according to his range, or false if it was unsuccessful.
     */
    getTargetEnd(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function is used to get any simple or complex task of a certain type for a ped.
     * It can provide feedback on all tasks relating to a ped. For example, while jumping,
     * getPedSimplestTask will return TASK_SIMPLE_IN_AIR. If you wanted to know specifically if
     * the player has jumped, you would use this function. If you did you will discover that
     * while jumping Primary task 3 is TASK_COMPLEX_JUMP.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedTask Wiki, getPedTask }
     * @param priority : A string determining which set of tasks you want to retrieve it from. This must be
     * either primary or secondary.
     * @param taskType : An integer value representing the task type (or slot) you want to get the task from.
     * Types can be:
     * @param PRIMARY TASKS
     * @param 0 TASK_SECONDARY_ATTACK
     * @param 1 TASK_SECONDARY_DUCK
     * @param 2 TASK_SECONDARY_SAY
     * @param 3 TASK_SECONDARY_FACIAL_COMPLEX
     * @param 4 TASK_SECONDARY_PARTIAL_ANIM
     * @param SECONDARY TASKS
     * @param 5 TASK_SECONDARY_IK
     * @return returns the name of the most complex task. see list of player tasks for valid strings.
     * returns false if invalid arguments are specified or if there is no task of the type
     * specified.
     * <br>
     * returns between 1 and 4 strings. the first string contains the name of the most complex
     * task, with simpler sub-tasks being named in the following strings. see list of player
     * tasks for valid strings. returns false if invalid arguments are specified or if there is
     * no task of the type specified.
     */
    getTask(
        priority: string,
        taskType: number
    ): LuaMultiReturn<[
        string,
        string,
        string,
        string
    ]>;

    /**
     * This function returns an integer that contains the total ammo in a specified peds weapon.
     * See weapon|Weapon Info
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedTotalAmmo Wiki, getPedTotalAmmo }
     * @param weaponSlot : an integer representing the weapon slot (set to the peds current slot if not given)
     * @return returns an int containing the total amount of ammo for the specified peds weapon, or 0 if
     * the ped specified is invalid.
     */
    getTotalAmmo(
        weaponSlot?: number
    ): number;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedWalkingStyle Wiki, getPedWalkingStyle }
     * @return returns the walking style id if successful, false otherwise. the possible walking styles
     * are as follows:
     */
    getWalkingStyle(): number;

    /**
     * This function tells you which weapon type is in a certain weapon|weapon slot of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedWeapon Wiki, getPedWeapon }
     * @param weaponSlot : an integer representing the weapon|weapon slot (set to the peds current slot if not
     * given).
     * @return returns an int indicating the type of the weapon the ped has in the specified slot. if
     * the slot is empty, it returns 0.
     * it should be noted that if a ped runs out of ammo for a weapon, it will still return the
     * id of that weapon in the slot (even if it appears as if the ped does not have a weapon at
     * all), though getpedtotalammo will return 0.  therefore, getpedtotalammo should be used in
     * conjunction with getpedweapon in order to check if a ped has a weapon.
     */
    getWeapon(
        weaponSlot?: number
    ): number;

    /**
     * This function gets a peds selected weapon slot.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPedWeaponSlot Wiki, getPedWeaponSlot }
     * @return returns the selected weapon slot id on success, false otherwise.
     */
    getWeaponSlot(): number;

    /**
     * This function checks if the specified ped is choking (coughing) or not. This happens as a
     * result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray
     * can.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedChoking Wiki, isPedChoking }
     * @return returns true if the ped is choking, false otherwise.
     */
    isChoking(): boolean;

    /**
     * This function checks if the specified ped is dead or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedDead Wiki, isPedDead }
     * @return returns true if the ped is dead, false otherwise.
     */
    isDead(): boolean;

    /**
     * This function checks if the ped is in the driveby state.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedDoingGangDriveby Wiki, isPedDoingGangDriveby }
     * @return returns true if the driveby state is enabled, false otherwise.
     */
    isDoingGangDriveby(): boolean;

    /**
     * This function checks if the specified ped is ducked (crouched) or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedDucked Wiki, isPedDucked }
     * @return returns true if the ped is ducked, false otherwise.
     */
    isDucked(): boolean;

    /**
     * Checks whether or not a given ped is currently in a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedInVehicle Wiki, isPedInVehicle }
     * @return returns true if the ped is in a vehicle, false if he is on foot or an invalid element was
     * passed.
     */
    isInVehicle(): boolean;

    /**
     * This function checks if the specified ped is on fire or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedOnFire Wiki, isPedOnFire }
     * @return returns true if the ped is on fire, false otherwise.
     */
    isOnFire(): boolean;

    /**
     * This function is used to determine whether or not a ped is on the ground. This is for
     * on-foot usage only.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedOnGround Wiki, isPedOnGround }
     * @return returns true if the ped is on foot and on the ground, false otherwise, even if he is in a
     * car that stands still or on object outside world map.
     */
    isOnGround(): boolean;

    /**
     * This function is used to determine whether or not a ped is currently reloading their
     * weapon. Useful to stop certain quick reload exploits.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedReloadingWeapon Wiki, isPedReloadingWeapon }
     * @return returns true if the ped is currently reloading a weapon, false otherwise.
     */
    isReloadingWeapon(): boolean;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPedWearingJetpack Wiki, isPedWearingJetpack }
     * @return returns true if the ped is carrying a jetpack, false if he is not or an invalid element
     * was passed.
     */
    isWearingJetpack(): boolean;

    /**
     * This function kills the specified ped.
     * From v1.5.3 onwards this function is now available client side. Only works on client side
     * peds.
     * @see {@link https://wiki.multitheftauto.com/wiki/KillPed Wiki, killPed }
     * @param theKiller The ped responsible for the kill
     * @param weapon The ID of the weapon or Damage Types that should appear to have killed the ped (doesnt
     * affect how they die)
     * @param bodyPart The ID of the body part that should appear to have been hit by the weapon (doesnt affect
     * how they die)
     * @param stealth Boolean value, representing whether or not this a stealth kill
     * @return returns true if the ped was killed, false if the ped specified could not be killed or is
     * invalid.
     */
    kill(
        theKiller?: Ped,
        weapon?: number,
        bodyPart?: number,
        stealth?: boolean
    ): boolean;

    /**
     * This function is used to remove the current clothes of a certain type on a ped. It will
     * remove them if the clothesTexture and clothesModel arent specified, or if they match the
     * current clothes on that slot.
     * @see {@link https://wiki.multitheftauto.com/wiki/RemovePedClothes Wiki, removePedClothes }
     * @param clothesType : the clothes slot/type to remove. See the CJ Clothes|clothes catalog.
     * @param clothesTexture : (Server only) A string determining the clothes texture that will be removed. See the CJ
     * Clothes|clothes catalog.
     * @param clothesModel : (Server only) A string determining the clothes model that will be removed. See the CJ
     * Clothes|clothes catalog.
     * @return this function returns true if the clothes were successfully removed from the ped, false
     * otherwise.
     */
    removeClothes(
        clothesType: number,
        clothesTexture?: string,
        clothesModel?: string
    ): boolean;

    /**
     * This function removes a ped from a vehicle immediately. This works for drivers and
     * passengers. Note that this removes the ped from the vehicle and puts him in the exact
     * position where the command was initiated.
     * Available client side from 1.3.1 (It will only work with client side vehicles and peds)
     * @see {@link https://wiki.multitheftauto.com/wiki/RemovePedFromVehicle Wiki, removePedFromVehicle }
     * @return returns true if the operation was successful, false if the specified ped is not valid or
     * if it isnt in a vehicle.
     */
    removeFromVehicle(): boolean;

    /**
     * Sets the current Animations|animation of a player or ped. Not specifying the type of
     * animation will automatically cancel the current one.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedAnimation Wiki, setPedAnimation }
     * @param block the Animations|animation blocks name.
     * @param anim the name of the Animations|animation within the block.
     * @param time how long the animation will run for in milliseconds.
     * @param loop indicates whether or not the animation will loop.
     * @param updatePosition will change the actual coordinates of the ped according to the animation. Use this for
     * e.g. walking animations.
     * @param interruptable if set to false other tasks wont be able to interupt the animation. Setting this to false
     * also gives this function more power to override other animations that are running. For
     * example, squatting after a jump can be terminated.
     * @param freezeLastFrame if set to true after animation the last frame will be frozen, otherwise the animation
     * will end and controls will return.
     * @param blendTime how long the animation will mixed with the previous one in milliseconds.
     * @param retainPedState will restore the task which was playing before calling this function. Useful for
     * restoring the crouch task after animation ends. This may be extended in the future to
     * support other states/tasks.
     * |16632}}
     * @return returns true if succesful, false otherwise.
     */
    setAnimation(
        block?: string,
        anim?: string,
        time?: number,
        loop?: boolean,
        updatePosition?: boolean,
        interruptable?: boolean,
        freezeLastFrame?: boolean,
        blendTime?: number,
        retainPedState?: boolean
    ): boolean;

    /**
     * Sets the current animation progress of a player or ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedAnimationProgress Wiki, setPedAnimationProgress }
     * @param anim the animation name currently applied to ped, if not supplied, the animation will stop
     * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will
     * default to 0.0
     * @return returns true if successful, false otherwise.
     */
    setAnimationProgress(
        anim?: string,
        progress?: number
    ): boolean;

    /**
     * Sets the speed of a currently running animation for a particular player or ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedAnimationSpeed Wiki, setPedAnimationSpeed }
     * @param anim the animation name it will affect.
     * @param speed a float containing the speed between 0.0–1.0 you want to apply to the animation. This
     * limitation may be adjusted in the future, so do not provide speeds outside this boundary.
     * {{New feature/item|3.0158|1.5.7|20395|The limit is now 0.0 to 10.0.}} {{Warning|Setting
     * speed higher than 1 can cause issues with some animations.}}
     * @return returns true if successful, false otherwise.
     */
    setAnimationSpeed(
        anim?: string,
        speed?: number
    ): boolean;

    /**
     * This function allows you to set the armor value of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedArmor Wiki, setPedArmor }
     * @param armor : the amount of armor you want to set on the ped. Valid values are from 0 to 100.
     * @return returns true if the armor was changed succesfully. returns false if an invalid ped was
     * specified, or the armor value specified is out of acceptable range.
     */
    setArmor(
        armor: number
    ): boolean;

    /**
     * This function sets the camera rotation of a ped, e.g. where its camera will look at. Dont
     * confuse this with getCameraMatrix, because that function is designed for fixed (scripted)
     * camera moves.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedCameraRotation Wiki, setPedCameraRotation }
     * @param cameraRotation The new direction that the ped will walk if you set their forwards control state. If the
     * ped is the local player, it will also change where his camera is looking at if it isnt
     * fixed (i.e. camera target is the local player).
     * @return returns true if the camera rotation was changed, false otherwise.
     */
    setCameraRotation(
        cameraRotation: number
    ): boolean;

    /**
     * This function controls if a ped can fall of his bike by accident - namely by banging into
     * a wall.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedCanBeKnockedOffBike Wiki, setPedCanBeKnockedOffBike }
     * @param canBeKnockedOffBike true or false
     */
    setCanBeKnockedOffBike(
        canBeKnockedOffBike: boolean
    ): boolean;

    /**
     * This function makes a ped or player press or release a certain control.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedControlState Wiki, setPedControlState }
     * @param control the name of the control of which to change the state. See control names for a list of
     * valid names.
     * @param state the new control state. true means pressed, false is released.
     * @return returns true if successful, false if otherwise.
     */
    setControlState(
        control: string,
        state: boolean
    ): boolean;

    /**
     * With this function, you can set if a ped has a head or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedHeadless Wiki, setPedHeadless }
     * @param headState : head state, use true if you want the ped be headless, use false to give back the head.
     * @return returns true if successful, false otherwise
     */
    setHeadless(
        headState: boolean
    ): boolean;

    /**
     * This function can be used to set a ped on fire or extinguish a fire on it.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedOnFire Wiki, setPedOnFire }
     * @param isOnFire true to set the ped on fire, false to extinguish any fire on him
     * @return returns true if successful, false otherwise
     */
    setOnFire(
        isOnFire: boolean
    ): boolean;

    /**
     * This function allows you to set the oxygen level of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedOxygenLevel Wiki, setPedOxygenLevel }
     * @param oxygen : the amount of oxygen you want to set on the ped. Native values are from 0 to 1000. Each
     * of the stamina (22) and underwater stamina (225) Template:Stats|stat maximum adds a bonus
     * of 1500. So the maximum oxygen level is 4000.
     * @return returns true if the oxygen level was changed succesfully. returns false if an invalid ped
     * and/or oxygen level was specified.
     */
    setOxygenLevel(
        oxygen: number
    ): boolean;

    /**
     * Changes the voice of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedVoice Wiki, setPedVoice }
     * @param voiceType the voice type. See ped voices for possible types.
     * @param voiceName the voice name within the specified type. See ped voices for possible voices.
     * @return returns true when the voice was successfully set, false otherwise.
     */
    setVoice(
        voiceType: string,
        voiceName: string
    ): boolean;

    /**
     * Sets the walking style of a ped. A walking style consists of a set of animations that are
     * used for walking, running etc.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedWalkingStyle Wiki, setPedWalkingStyle }
     * @param style the walking style to set.
     * The possible walking styles are:
     * @return returns true if successful, false otherwise.
     */
    setWalkingStyle(
        style: number
    ): boolean;

    /**
     * This function changes the selected weapon slot of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPedWeaponSlot Wiki, setPedWeaponSlot }
     * @param weaponSlot the weapon slot to set.
     * @return returns true if successful in setting the peds equipped weapon slot, false otherwise.
     */
    setWeaponSlot(
        weaponSlot: number
    ): boolean;

    /**
     * This function is used to warp or force a ped into a vehicle.  There are no animations
     * involved when this happens.
     * Available client side from 1.3.1 (It will only work with client side vehicles and peds)
     * @see {@link https://wiki.multitheftauto.com/wiki/WarpPedIntoVehicle Wiki, warpPedIntoVehicle }
     * @param theVehicle The vehicle you wish to force the ped into
     * @param seat An integer representing the seat ID.
     * @param 0 Front-left
     * @param 1 Front-right
     * @param 2 Rear-left
     * @param 3 Rear-right
     * @return returns true if the operation is successful, false otherwise.
     */
    warpIntoVehicle(
        theVehicle: Vehicle,
        seat?: number
    ): boolean;
}
