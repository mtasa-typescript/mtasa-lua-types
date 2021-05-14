// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    TextDisplay,
    Account,
    ACL,
    ACLGroup,
    Ban,
    XML,
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
 * This function is used to set the current clothes on a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/AddPedClothes Wiki, addPedClothes }
 * @param thePed : The ped whose clothes you want to change.
 * @param clothesTexture : A string determining the clothes texture that will be added. See the CJ Clothes|clothes
 * catalog.
 * @param clothesModel : A string determining the clothes model that will be added. See the CJ Clothes|clothes
 * catalog.
 * @param clothesType : A integer representing the clothes slot/type the clothes should be added to. See the CJ
 * Clothes|clothes catalog.
 * @return this function returns true if the clothes were successfully added to the ped, false
 * otherwise.
 */
export function addPedClothes(
    thePed: Ped,
    clothesTexture: string,
    clothesModel: string,
    clothesType: number
): boolean;

/**
 * Creates a Ped in the GTA world.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreatePed Wiki, createPed }
 * @param modelid A whole integer specifying the Character_Skins|GTASA skin ID.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param rot A floating point number representing the rotation in degrees.
 * @param synced A boolean value representing whether or not the ped will be synced. Disabling the sync
 * might be useful for frozen or static peds to increase the server performance.
 */
export function createPed(
    modelid: number,
    x: number,
    y: number,
    z: number,
    rot?: number,
    synced?: boolean
): Ped;

/**
 * This function returns an integer that contains the ammo in a specified peds weapon. See
 * weapon|Weapon Info
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedAmmoInClip Wiki, getPedAmmoInClip }
 * @param thePed The ped whose ammo you want to check.
 * @param weaponSlot an integer representing the weapon slot (set to the peds currently selected slot if not
 * specified).
 * @return returns an int containing the amount of ammo in the specified peds currently selected or
 * specified clip, or 0 if the ped specified is invalid.
 */
export function getPedAmmoInClip(
    thePed: Ped,
    weaponSlot?: number
): number;

/**
 * This function returns the current armor of the specified ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedArmor Wiki, getPedArmor }
 * @param thePed The ped whose armor you want to check
 * @return a float with the armor, false if an invalid ped was given.
 */
export function getPedArmor(
    thePed: Ped
): number;

/**
 * This function is used to get the current clothes texture and model of a certain type on a
 * ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedClothes Wiki, getPedClothes }
 * @param thePed The ped whose clothes you want to retrieve.
 * @param clothesType The type/slot of clothing you want to get.
 * @return this function returns 2 string|strings, the clothes texture and model. the first return
 * value will be false if this players clothes type is empty or an invalid player was
 * specified.
 */
export function getPedClothes(
    thePed: Ped,
    clothesType: number
): LuaMultiReturn<[
    string,
    string
]>;

/**
 * This function detects the element a ped is standing on. This can be a vehicle or an
 * object.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedContactElement Wiki, getPedContactElement }
 * @param thePed The ped of which you want to get the element he is standing on.
 * @return returns an object or a vehicle if the ped is standing on one, false if he is touching
 * none or an invalid element was passed.
 */
export function getPedContactElement(
    thePed: Ped
): Element;

/**
 * Retrieves the fighting style a player/ped is currently using.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedFightingStyle Wiki, getPedFightingStyle }
 * @param thePed the ped whose current fighting style ID you wish to retrieve.
 * @return returns the peds current fighting style as an integer id, false if it fails to retrieve a
 * value.
 */
export function getPedFightingStyle(
    thePed: Ped
): number;

/**
 * This function returns the current gravity for the specified ped. The default gravity is
 * 0.008.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedGravity Wiki, getPedGravity }
 * @param thePed The ped whose gravity you want to check.
 * @return returns a float indicating the peds gravity, or false if the ped is invalid. default
 * value is 0.008.
 */
export function getPedGravity(
    thePed: Ped
): number;

/**
 * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedOccupiedVehicle Wiki, getPedOccupiedVehicle }
 * @param thePed : The ped whose vehicle youre looking up.
 * @return returns the vehicle that the specified ped is in, or false if the ped is not in a vehicle
 * or is an invalid ped.
 */
export function getPedOccupiedVehicle(
    thePed: Ped
): Vehicle;

/**
 * This function gets the seat that a specific ped is sitting in in a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedOccupiedVehicleSeat Wiki, getPedOccupiedVehicleSeat }
 * @param thePed : The ped whose vehicle seat youre looking up.
 * @return * returns an integer containing the number of the seat that the ped is currently in:
 * ** 0: front-left
 * ** 1: front-right
 * ** 2: rear-left
 * ** 3: rear-right
 * returns false if the ped is on foot, or the ped doesnt exist.
 */
export function getPedOccupiedVehicleSeat(
    thePed: Ped
): number;

/**
 * This function returns the value of the specified statistic of a specific ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedStat Wiki, getPedStat }
 * @param thePed : The ped whose stat you want to retrieve.
 * @param stat : A whole number determining the stat ID.
 * @return returns the value of the requested statistic.
 */
export function getPedStat(
    thePed: Ped,
    stat: number
): number;

/**
 * This function is used to get the element a ped is currently targeting.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedTarget Wiki, getPedTarget }
 * @param thePed The ped whose target you want to retrieve.
 * @return returns the element thats being targeted, or false if there isnt one.
 * this is only effective on physical gta elements, namely:
 * * players
 * * peds
 * * vehicles
 * * objects
 */
export function getPedTarget(
    thePed: Ped
): Element;

/**
 * This function returns an integer that contains the total ammo in a specified peds weapon.
 * See weapon|Weapon Info
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedTotalAmmo Wiki, getPedTotalAmmo }
 * @param thePed : The ped whose ammo you want to check.
 * @param weaponSlot : an integer representing the weapon slot (set to the peds current slot if not given)
 * @return returns an int containing the total amount of ammo for the specified peds weapon, or 0 if
 * the ped specified is invalid.
 */
export function getPedTotalAmmo(
    thePed: Ped,
    weaponSlot?: number
): number;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedWalkingStyle Wiki, getPedWalkingStyle }
 * @param thePed the ped whose walking style to retrieve.
 * @return returns the walking style id if successful, false otherwise. the possible walking styles
 * are as follows:
 */
export function getPedWalkingStyle(
    thePed: Ped
): number;

/**
 * This function tells you which weapon type is in a certain weapon|weapon slot of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedWeapon Wiki, getPedWeapon }
 * @param thePed : the ped you want to get the weapon type from.
 * @param weaponSlot : an integer representing the weapon|weapon slot (set to the peds current slot if not
 * given).
 * @return returns an int indicating the type of the weapon the ped has in the specified slot. if
 * the slot is empty, it returns 0.
 * it should be noted that if a ped runs out of ammo for a weapon, it will still return the
 * id of that weapon in the slot (even if it appears as if the ped does not have a weapon at
 * all), though getpedtotalammo will return 0.  therefore, getpedtotalammo should be used in
 * conjunction with getpedweapon in order to check if a ped has a weapon.
 */
export function getPedWeapon(
    thePed: Ped,
    weaponSlot?: number
): number;

/**
 * This function gets a peds selected weapon slot.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPedWeaponSlot Wiki, getPedWeaponSlot }
 * @param thePed the ped to get the current weapon slot of.
 * @return returns the selected weapon slot id on success, false otherwise.
 */
export function getPedWeaponSlot(
    thePed: Ped
): number;

/**
 * This function returns all valid ped models.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetValidPedModels Wiki, getValidPedModels }
 * @return returns a table with all valid ped models.
 */
export function getValidPedModels(): LuaTable;

/**
 * This function checks if the specified ped is choking (coughing) or not. This happens as a
 * result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray
 * can.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedChoking Wiki, isPedChoking }
 * @param thePed : The ped you wish to check
 * @return returns true if the ped is choking, false otherwise.
 */
export function isPedChoking(
    thePed: Ped
): boolean;

/**
 * This function checks if the specified ped is dead or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedDead Wiki, isPedDead }
 * @param thePed : the ped you want to check up on.
 * @return returns true if the ped is dead, false otherwise.
 */
export function isPedDead(
    thePed: Ped
): boolean;

/**
 * This function checks if the ped is in the driveby state.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedDoingGangDriveby Wiki, isPedDoingGangDriveby }
 * @param thePed The ped element whose state is to be checked.
 * @return returns true if the driveby state is enabled, false otherwise.
 */
export function isPedDoingGangDriveby(
    thePed: Ped
): boolean;

/**
 * This function checks if the specified ped is ducked (crouched) or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedDucked Wiki, isPedDucked }
 * @param thePed : The ped to check.
 * @return returns true if the ped is ducked, false otherwise.
 */
export function isPedDucked(
    thePed: Ped
): boolean;

/**
 * With this function, you can check if a ped has a head or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedHeadless Wiki, isPedHeadless }
 * @param thePed : The ped to check.
 * @return returns true if the ped is headless, false otherwise.
 */
export function isPedHeadless(
    thePed: Ped
): boolean;

/**
 * Checks whether or not a given ped is currently in a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedInVehicle Wiki, isPedInVehicle }
 * @param thePed the ped you want to check.
 * @return returns true if the ped is in a vehicle, false if he is on foot or an invalid element was
 * passed.
 */
export function isPedInVehicle(
    thePed: Ped
): boolean;

/**
 * This function checks if the specified ped is on fire or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedOnFire Wiki, isPedOnFire }
 * @param thePed : The ped to check.
 * @return returns true if the ped is on fire, false otherwise.
 */
export function isPedOnFire(
    thePed: Ped
): boolean;

/**
 * This function is used to determine whether or not a ped is on the ground. This is for
 * on-foot usage only.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedOnGround Wiki, isPedOnGround }
 * @param thePed The ped you are checking.
 * @return returns true if the ped is on foot and on the ground, false otherwise, even if he is in a
 * car that stands still or on object outside world map.
 */
export function isPedOnGround(
    thePed: Ped
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/IsPedWearingJetpack Wiki, isPedWearingJetpack }
 * @param thePed the ped you want to check
 * @return returns true if the ped is carrying a jetpack, false if he is not or an invalid element
 * was passed.
 */
export function isPedWearingJetpack(
    thePed: Ped
): boolean;

/**
 * This function kills the specified ped.
 * From v1.5.3 onwards this function is now available client side. Only works on client side
 * peds.
 * @see {@link https://wiki.multitheftauto.com/wiki/KillPed Wiki, killPed }
 * @param thePed The ped to kill
 * @param theKiller The ped responsible for the kill
 * @param weapon The ID of the weapon or Damage Types that should appear to have killed the ped (doesnt
 * affect how they die)
 * @param bodyPart The ID of the body part that should appear to have been hit by the weapon (doesnt affect
 * how they die)
 * @param stealth Boolean value, representing whether or not this a stealth kill
 * @return returns true if the ped was killed, false if the ped specified could not be killed or is
 * invalid.
 */
export function killPed(
    thePed: Ped,
    theKiller?: Ped,
    weapon?: number,
    bodyPart?: number,
    stealth?: boolean
): boolean;

/**
 * This function makes a pedestrian reload their weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/ReloadPedWeapon Wiki, reloadPedWeapon }
 * @param thePed The ped who will reload their weapon.
 * @return returns true if the pedestrian was made to reload, or false if invalid arguments were
 * passed or that pedestrian has a weapon which cannot be reloaded.
 * note: this will fail but return true if
 * 1) the ped is crouched and moving
 * 2) the ped is using a weapon without clip ammo (or minigun/flamethrower/fire
 * extinguisher)
 * 3) the ped is using his weapon (shooting/aiming)
 * 4) the ped moved while crouching recently
 * due to these circumstances causing problems with this function
 */
export function reloadPedWeapon(
    thePed: Ped
): boolean;

/**
 * This function is used to remove the current clothes of a certain type on a ped. It will
 * remove them if the clothesTexture and clothesModel arent specified, or if they match the
 * current clothes on that slot.
 * @see {@link https://wiki.multitheftauto.com/wiki/RemovePedClothes Wiki, removePedClothes }
 * @param thePed : The ped you want to remove clothes from.
 * @param clothesType : the clothes slot/type to remove. See the CJ Clothes|clothes catalog.
 * @param clothesTexture : (Server only) A string determining the clothes texture that will be removed. See the CJ
 * Clothes|clothes catalog.
 * @param clothesModel : (Server only) A string determining the clothes model that will be removed. See the CJ
 * Clothes|clothes catalog.
 * @return this function returns true if the clothes were successfully removed from the ped, false
 * otherwise.
 */
export function removePedClothes(
    thePed: Ped,
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
 * @param thePed The ped you wish to remove from a vehicle
 * @return returns true if the operation was successful, false if the specified ped is not valid or
 * if it isnt in a vehicle.
 */
export function removePedFromVehicle(
    thePed: Ped
): boolean;

/**
 * Sets the current Animations|animation of a player or ped. Not specifying the type of
 * animation will automatically cancel the current one.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedAnimation Wiki, setPedAnimation }
 * @param thePed the player or ped you want to apply an Animations|animation to.
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
export function setPedAnimation(
    thePed: Ped,
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
 * @param thePed the player or ped you want to change animation progress.
 * @param anim the animation name currently applied to ped, if not supplied, the animation will stop
 * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will
 * default to 0.0
 * @return returns true if successful, false otherwise.
 */
export function setPedAnimationProgress(
    thePed: Ped,
    anim?: string,
    progress?: number
): boolean;

/**
 * Sets the speed of a currently running animation for a particular player or ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedAnimationSpeed Wiki, setPedAnimationSpeed }
 * @param thePed the player or ped you want to change animation speed of.
 * @param anim the animation name it will affect.
 * @param speed a float containing the speed between 0.0–1.0 you want to apply to the animation. This
 * limitation may be adjusted in the future, so do not provide speeds outside this boundary.
 * {{New feature/item|3.0158|1.5.7|20395|The limit is now 0.0 to 10.0.}} {{Warning|Setting
 * speed higher than 1 can cause issues with some animations.}}
 * @return returns true if successful, false otherwise.
 */
export function setPedAnimationSpeed(
    thePed: Ped,
    anim?: string,
    speed?: number
): boolean;

/**
 * This function allows you to set the armor value of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedArmor Wiki, setPedArmor }
 * @param thePed : the ped whose armor you want to modify.
 * @param armor : the amount of armor you want to set on the ped. Valid values are from 0 to 100.
 * @return returns true if the armor was changed succesfully. returns false if an invalid ped was
 * specified, or the armor value specified is out of acceptable range.
 */
export function setPedArmor(
    thePed: Ped,
    armor: number
): boolean;

/**
 * This function can be used to force the ped to do the choking (coughing) animation until
 * he respawns or toggled off using this function. The animation can not be cancelled by a
 * player its applied to, and he will not loose health.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedChoking Wiki, setPedChoking }
 * @param thePed The ped whose choking status to toggle
 * @param choking true to make the ped choke, false to no longer force his choking animation
 * @return returns true if successful, false otherwise (e.g. player handle is invalid)
 */
export function setPedChoking(
    thePed: Ped,
    choking: boolean
): boolean;

/**
 * This function sets the driveby state of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedDoingGangDriveby Wiki, setPedDoingGangDriveby }
 * @param thePed The ped element whose state is to be changed.
 * @param state A boolean value representing the drive-by state, true meaning enabled and false disabled.
 * @return returns true if the driveby state could be changed, false otherwise.
 */
export function setPedDoingGangDriveby(
    thePed: Ped,
    state: boolean
): boolean;

/**
 * Changes a peds fighting style. Most styles only change the special attack which is done
 * using the Aim and Enter keys.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedFightingStyle Wiki, setPedFightingStyle }
 * @param thePed The ped whose fighting style to change.
 * @param style The fighting style ID to apply.
 * @return returns true in case of success, false otherwise.
 */
export function setPedFightingStyle(
    thePed: Ped,
    style: number
): boolean;

/**
 * This function sets the gravity level of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedGravity Wiki, setPedGravity }
 * @param thePed : The ped whose gravity to change.
 * @param level : The level of gravity (default is 0.008).
 * @return returns true if the gravity was successfully set, false otherwise
 */
export function setPedGravity(
    thePed: Ped,
    gravity: number
): boolean;

/**
 * With this function, you can set if a ped has a head or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedHeadless Wiki, setPedHeadless }
 * @param thePed : The ped to check.
 * @param headState : head state, use true if you want the ped be headless, use false to give back the head.
 * @return returns true if successful, false otherwise
 */
export function setPedHeadless(
    thePed: Ped,
    headState: boolean
): boolean;

/**
 * This function can be used to set a ped on fire or extinguish a fire on it.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedOnFire Wiki, setPedOnFire }
 * @param thePed The ped that we want to set/unset
 * @param isOnFire true to set the ped on fire, false to extinguish any fire on him
 * @return returns true if successful, false otherwise
 */
export function setPedOnFire(
    thePed: Ped,
    isOnFire: boolean
): boolean;

/**
 * *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They
 * need a way to be triggered on/off.
 * This function allows you to set the value of a specific statistic for a ped. Visual stats
 * (FAT and BODY_MUSCLE) can only be used on the CJ skin, they have no effect on other skins.
 * When this function is used client side, it can only be used on client side created peds.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedStat Wiki, setPedStat }
 * @param thePed : the ped whose statistic you want to modify.
 * @param stat : the stat ID.
 * @param value : the new value of the stat. It must be between 0 and 1000.
 * @return returns true if the statistic was changed succesfully. returns false if an invalid player
 * is specified, if the stat-id/value is out of acceptable range or if the fat or
 * body_muscle stats are used on non-cj players.
 */
export function setPedStat(
    thePed: Ped,
    stat: number,
    value: number
): boolean;

/**
 * Sets the walking style of a ped. A walking style consists of a set of animations that are
 * used for walking, running etc.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedWalkingStyle Wiki, setPedWalkingStyle }
 * @param thePed the ped whose walking style to change.
 * @param style the walking style to set.
 * The possible walking styles are:
 * @return returns true if successful, false otherwise.
 */
export function setPedWalkingStyle(
    thePed: Ped,
    style: number
): boolean;

/**
 * This function changes the selected weapon slot of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedWeaponSlot Wiki, setPedWeaponSlot }
 * @param thePed the ped whose weapon slot you want to set. In a clientside script, this cannot be used on
 * remote players.
 * @param weaponSlot the weapon slot to set.
 * @return returns true if successful in setting the peds equipped weapon slot, false otherwise.
 */
export function setPedWeaponSlot(
    thePed: Ped,
    weaponSlot: number
): boolean;

/**
 * This function is used to give or take a jetpack from a ped, it wont work if the ped is in
 * a vehicle.
 * As such, you should either expect it to fail sometimes, or repeatedly try to give a
 * jetpack every second or so until isPedWearingJetpack returns true. Alternatively, you can
 * force the ped into a safe position (e.g. standing on the ground) before giving the
 * jetpack, or use a pickup to handle it.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPedWearingJetpack Wiki, setPedWearingJetpack }
 * @param thePed The ped you want to give a jetpack to.
 * @param state A boolean representing whether to give or take the jetpack.
 * @return returns true if a jetpack was successfully set for the ped, false if setting it failed.
 */
export function setPedWearingJetpack(
    thePed: Ped,
    state: boolean
): boolean;

/**
 * This function is used to warp or force a ped into a vehicle.  There are no animations
 * involved when this happens.
 * Available client side from 1.3.1 (It will only work with client side vehicles and peds)
 * @see {@link https://wiki.multitheftauto.com/wiki/WarpPedIntoVehicle Wiki, warpPedIntoVehicle }
 * @param thePed The ped which you wish to force inside the vehicle
 * @param theVehicle The vehicle you wish to force the ped into
 * @param seat An integer representing the seat ID.
 * @param 0 Front-left
 * @param 1 Front-right
 * @param 2 Rear-left
 * @param 3 Rear-right
 * @return returns true if the operation is successful, false otherwise.
 */
export function warpPedIntoVehicle(
    thePed: Ped,
    theVehicle: Vehicle,
    seat?: number
): boolean;
