/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Ped, Vehicle } from '../structure';

/**
 * This function returns the current gravity for the specified [[ped]]. The default gravity is
 * 0.008.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedGravity|MTASA Wiki}
 * @param thePed The ped whose gravity you want to check.
 * @return Returns a [[float]] indicating the ped's gravity, or ''false'' if the ped is invalid.
 * Default value is 0.008.
 */
export function getPedGravity(thePed: Ped): number;

/**
 * This function makes a pedestrian reload their weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/reloadPedWeapon|MTASA Wiki}
 * @param thePed The ped who will reload their weapon.
 * @return Returns ''true'' if the pedestrian was made to reload, or ''false'' if invalid arguments
 * were passed or that pedestrian has a weapon which cannot be reloaded.
 * * '''Note:''' this will fail but return true if
 * * 1) the ped is crouched and moving
 * * 2) the ped is using a weapon without clip ammo (or minigun/flamethrower/fire
 * * extinguisher)
 * * 3) the ped is using his weapon (shooting/aiming)
 * * 4) the ped moved while crouching recently
 * * Due to these circumstances causing problems with this function
 */
export function reloadPedWeapon(thePed: Ped): boolean;

/**
 * This function can be used to force the ped to do the choking (coughing) animation until he
 * respawns or toggled off using this function. The animation can not be cancelled by a player it's applied
 * to, and he will not loose health.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedChoking|MTASA Wiki}
 * @param thePed The ped whose choking status to toggle
 * @param choking true to make the ped choke, false to no longer force his choking animation
 * @return Returns ''true'' if successful, ''false'' otherwise (e.g. player handle is invalid)
 */
export function setPedChoking(thePed: Ped, choking: boolean): boolean;

/**
 * This function sets the gravity level of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedGravity|MTASA Wiki}
 * @param thePed : The ped whose gravity to change.
 * @return Returns ''true'' if the gravity was successfully set, ''false'' otherwise
 */
export function setPedGravity(thePed: Ped, gravity: number): boolean;

/**
 * This function is used to give or take a jetpack from a ped, it won't work if the ped is in a
 * vehicle.
 * As such, you should either expect it to fail sometimes, or repeatedly try to give a jetpack
 * every second or so until [[isPedWearingJetpack]] returns true. Alternatively, you can force the ped into
 * a 'safe' position (e.g. standing on the ground) before giving the jetpack, or use a [[pickup]] to
 * handle it.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedWearingJetpack|MTASA Wiki}
 * @param thePed The ped you want to give a jetpack to.
 * @param state A boolean representing whether to give or take the jetpack.
 * @return Returns ''true'' if a jetpack was successfully set for the ped, ''false'' if setting it
 * failed.
 */
export function setPedWearingJetpack(thePed: Ped, state: boolean): boolean;

/**
 * This function is used to set the current clothes on a [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/addPedClothes|MTASA Wiki}
 * @param thePed : The ped whose clothes you want to change.
 * @param clothesTexture : A string determining the clothes texture that will be added. See the CJ
 * Clothes|clothes catalog.
 * @param clothesModel : A string determining the clothes model that will be added. See the CJ
 * Clothes|clothes catalog.
 * @param clothesType : A integer representing the clothes slot/type the clothes should be added
 * to. See the CJ Clothes|clothes catalog.
 * @return This function returns ''true'' if the clothes were successfully added to the ped,
 * ''false'' otherwise.
 */
export function addPedClothes(thePed: Ped, clothesTexture: string, clothesModel: string, clothesType: number): boolean;

/**
 * Creates a Ped in the GTA world.
 * @see {@link https://wiki.multitheftauto.com/wiki/createPed|MTASA Wiki}
 * @param modelid A whole integer specifying the Character_Skins|GTASA skin ID.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
 * @param rot A floating point number representing the rotation in degrees.
 * @default 0.0
 * @param synced A boolean value representing whether or not the ped will be synced. Disabling the
 * sync might be useful for frozen or static peds to increase the server performance.
 * @default true
 * @return Returns a ped element if it was successfully created.
 */
export function createPed(modelid: number, x: number, y: number, z: number, rot?: number, synced?: boolean): Ped;

/**
 * This function returns an integer that contains the ammo in a specified [[ped]]'s weapon. See
 * [[weapon|Weapon Info]]
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedAmmoInClip|MTASA Wiki}
 * @param thePed The ped whose ammo you want to check.
 * @param weaponSlot an integer representing the weapon slot (set to the peds currently selected
 * slot if not specified).
 * @default current
 * @return Returns an [[int]] containing the amount of ammo in the specified ped's currently
 * selected or specified clip, or 0 if the ped specified is invalid.
 */
export function getPedAmmoInClip(thePed: Ped, weaponSlot?: number): number;

/**
 * This function returns the current armor of the specified [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedArmor|MTASA Wiki}
 * @param thePed The ped whose armor you want to check
 * @return A ''float'' with the armor, ''false'' if an invalid ped was given.
 */
export function getPedArmor(thePed: Ped): number;

/**
 * This function is used to get the current clothes texture and model of a certain type on a
 * [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedClothes|MTASA Wiki}
 * @param thePed The ped whose clothes you want to retrieve.
 * @param clothesType The type/slot of clothing you want to get.  {{Clothes Textures}}
 * @return This function returns 2 [[string|strings]], the clothes texture and model. The first
 * return value will be ''false'' if this player's clothes type is empty or an invalid player was
 * specified.
 */
export function getPedClothes(thePed: Ped, clothesType: number): LuaMultiReturn<[string, string]>;

/**
 * This function detects the element a ped is standing on. This can be a vehicle or an object.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedContactElement|MTASA Wiki}
 * @param thePed The ped of which you want to get the element he is standing on.
 * @return Returns an [[object]] or a [[vehicle]] if the ped is standing on one, ''false'' if he is
 * touching none or an invalid element was passed.
 */
export function getPedContactElement(thePed: Ped): Element;

/**
 * Retrieves the fighting style a player/ped is currently using.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedFightingStyle|MTASA Wiki}
 * @param thePed the ped whose current fighting style ID you wish to retrieve.
 * @return Returns the ped's current fighting style as an integer ID, ''false'' if it fails to
 * retrieve a value.
 * * {{Fighting Styles}}
 */
export function getPedFightingStyle(thePed: Ped): number;

/**
 * This function gets the [[vehicle]] that the ped is currently in or is trying to enter, if any.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedOccupiedVehicle|MTASA Wiki}
 * @param thePed : The ped whose vehicle youre looking up.
 * @return Returns the vehicle that the specified ped is in, or ''false'' if the ped is not in a
 * vehicle or is an invalid ped.
 */
export function getPedOccupiedVehicle(thePed: Ped): Vehicle;

/**
 * This function gets the seat that a specific ped is sitting in in a vehicle.
 * [[File:vehicle seat ids.png|200px|thumb|right|Vehicle seat ids]]
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedOccupiedVehicleSeat|MTASA Wiki}
 * @param thePed : The ped whose vehicle seat youre looking up.
 * @return * Returns an integer containing the number of the seat that the ped is currently in:
 * * ** '''0:''' Front-left
 * * ** '''1:''' Front-right
 * * ** '''2:''' Rear-left
 * * ** '''3:''' Rear-right
 * * Returns ''false'' if the ped is on foot, or the ped doesn't exist.
 */
export function getPedOccupiedVehicleSeat(thePed: Ped): number;

/**
 * This function returns the value of the specified statistic of a specific [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedStat|MTASA Wiki}
 * @param thePed : The ped whose stat you want to retrieve.
 * @param stat : A whole number determining the stat ID.  {{Stats}}
 * @return Returns the value of the requested statistic.
 */
export function getPedStat(thePed: Ped, stat: number): number;

/**
 * This function is used to get the element a [[ped]] is currently targeting.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedTarget|MTASA Wiki}
 * @param thePed The ped whose target you want to retrieve.
 * @return Returns the [[element]] that's being targeted, or ''false'' if there isn't one.
 * * This is only effective on physical GTA elements, namely:
 * * * Players
 * * * Peds
 * * * Vehicles
 * * * Objects
 */
export function getPedTarget(thePed: Ped): Element;

/**
 * This function returns an integer that contains the total ammo in a specified [[ped]]'s weapon.
 * See [[weapon|Weapon Info]]
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedTotalAmmo|MTASA Wiki}
 * @param thePed : The ped whose ammo you want to check.
 * @param weaponSlot : an integer representing the weapon slot (set to the peds current slot if not
 * given)
 * @default current
 * @return Returns an [[int]] containing the total amount of ammo for the specified ped's weapon,
 * or 0 if the ped specified is invalid.
 */
export function getPedTotalAmmo(thePed: Ped, weaponSlot: number): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedWalkingStyle|MTASA Wiki}
 * @param thePed the ped whose walking style to retrieve.
 * @return Returns the walking style ID if successful, ''false'' otherwise. The possible walking
 * styles are as follows:
 * * {{Ped walking styles}}
 */
export function getPedWalkingStyle(thePed: Ped): number;

/**
 * This function tells you which weapon type is in a certain weapon slot of a ped. See
 * [[weapon|Weapon Info]]
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedWeapon|MTASA Wiki}
 * @param thePed : the ped you want to get the weapon type from.
 * @param weaponSlot : an integer representing the weapon slot (set to the peds current slot if not
 * given).
 * @default current
 * @return Returns an [[int]] indicating the type of the weapon the ped has in the specified slot.
 * If the slot is empty, it returns 0.
 * * It should be noted that if a ped runs out of ammo for a weapon, it will still return the ID of
 * that weapon in the slot (even if it appears as if the ped does not have a weapon at all), though
 * [[getPedTotalAmmo]] will return '''0'''.  Therefore, [[getPedTotalAmmo]] should be used in conjunction
 * with [[getPedWeapon]] in order to check if a ped has a weapon.
 */
export function getPedWeapon(thePed: Ped, weaponSlot: number): number;

/**
 * This function gets a ped's selected weapon slot.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedWeaponSlot|MTASA Wiki}
 * @param thePed the ped to get the current weapon slot of.
 * @return Returns the selected weapon slot ID on success, ''false'' otherwise.
 * * {{Weapon_Slots}}
 */
export function getPedWeaponSlot(thePed: Ped): number;

/**
 * This function returns all valid ped models.
 * @see {@link https://wiki.multitheftauto.com/wiki/getValidPedModels|MTASA Wiki}
 * @return Returns a [[table]] with all valid ped models.
 */
export function getValidPedModels(): LuaTable;

/**
 * This function checks if the specified [[ped]] is choking (coughing) or not. This happens as a
 * result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedChoking|MTASA Wiki}
 * @param thePed : The ped you wish to check
 * @return Returns ''true'' if the ped is choking, ''false'' otherwise.
 */
export function isPedChoking(thePed: Ped): boolean;

/**
 * This function checks if the specified [[ped]] is dead or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedDead|MTASA Wiki}
 * @param thePed : the ped you want to check up on.
 * @return Returns ''true'' if the ped is dead, ''false'' otherwise.
 */
export function isPedDead(thePed: Ped): boolean;

/**
 * This function checks if the ped is in the driveby state.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedDoingGangDriveby|MTASA Wiki}
 * @param thePed The ped element whose state is to be checked.
 * @return Returns '''true''' if the driveby state is enabled, '''false''' otherwise.
 */
export function isPedDoingGangDriveby(thePed: Ped): boolean;

/**
 * This function checks if the specified [[ped]] is ducked (crouched) or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedDucked|MTASA Wiki}
 * @param thePed : The ped to check.
 * @return Returns ''true'' if the ped is ducked, ''false'' otherwise.
 */
export function isPedDucked(thePed: Ped): boolean;

/**
 * With this function, you can check if a ped has a head or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedHeadless|MTASA Wiki}
 * @param thePed : The ped to check.
 * @return Returns ''true'' if the ped is headless, ''false'' otherwise.
 */
export function isPedHeadless(thePed: Ped): boolean;

/**
 * Checks whether or not a given ped is currently in a vehicle. This also returns true if they're
 * trying to enter a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedInVehicle|MTASA Wiki}
 * @param thePed the ped you want to check.
 * @return Returns ''true'' if the ped is in a vehicle, ''false'' if he is on foot or an invalid
 * element was passed.
 */
export function isPedInVehicle(thePed: Ped): boolean;

/**
 * This function checks if the specified [[ped]] is on fire or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedOnFire|MTASA Wiki}
 * @param thePed : The ped to check.
 * @return Returns ''true'' if the ped is on fire, ''false'' otherwise.
 */
export function isPedOnFire(thePed: Ped): boolean;

/**
 * This function is used to determine whether or not a ped is on the ground. This is for on-foot
 * usage only.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedOnGround|MTASA Wiki}
 * @param thePed The ped you are checking.
 * @return Returns ''true'' if the ped is on foot and on the ground, ''false'' otherwise, even if
 * he is in a car that stands still or on object outside world map.
 */
export function isPedOnGround(thePed: Ped): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedWearingJetpack|MTASA Wiki}
 * @param thePed the ped you want to check
 * @return Returns ''true'' if the ped is carrying a jetpack, ''false'' if he is not or an invalid
 * element was passed.
 */
export function isPedWearingJetpack(thePed: Ped): boolean;

/**
 * This function kills the specified ped.
 * From v1.5.3 onwards this function is now available client side. Only works on client side peds.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/killPed|MTASA Wiki}
 * @param thePed The ped to kill
 * @param theKiller The ped responsible for the kill
 * @default nil
 * @param weapon The ID of the weapon or Damage Types that should appear to have killed the ped
 * (doesnt affect how they die)
 * @default 255
 * @param bodyPart The ID of the body part that should appear to have been hit by the weapon
 * (doesnt affect how they die)  {{BodyParts}}
 * @default 255
 * @param stealth Boolean value, representing whether or not this a stealth kill
 * @default false
 * @return Returns ''true'' if the ped was killed, ''false'' if the ped specified could not be
 * killed or is invalid.
 */
export function killPed(thePed: Ped, theKiller: Ped, weapon: number, bodyPart: number, stealth: boolean): boolean;

/**
 * This function is used to remove the current clothes of a certain type on a [[ped]]. It will
 * remove them if the clothesTexture and clothesModel aren't specified, or if they match the current
 * clothes on that slot.
 * @see {@link https://wiki.multitheftauto.com/wiki/removePedClothes|MTASA Wiki}
 * @param thePed : The ped you want to remove clothes from.
 * @param clothesType : the clothes slot/type to remove. See the CJ Clothes|clothes catalog.
 * @param clothesTexture : (Server only) A string determining the clothes texture that will be
 * removed. See the CJ Clothes|clothes catalog.
 * @param clothesModel : (Server only) A string determining the clothes model that will be removed.
 * See the CJ Clothes|clothes catalog.
 * @return This function returns ''true'' if the clothes were successfully removed from the ped,
 * ''false'' otherwise.
 */
export function removePedClothes(
    thePed: Ped,
    clothesType: number,
    clothesTexture: string,
    clothesModel: string,
): boolean;

/**
 * This function removes a ped from a vehicle immediately. This works for drivers and passengers.
 * Note that this removes the ped from the vehicle and puts him in the exact position where the command
 * was initiated.
 * '''Available client side from 1.3.1''' (It will only work with client side vehicles and peds)
 * @see {@link https://wiki.multitheftauto.com/wiki/removePedFromVehicle|MTASA Wiki}
 * @param thePed The ped you wish to remove from a vehicle
 * @return Returns ''true'' if the operation was successful, ''false'' if the specified ped is not
 * valid or if it isn't in a vehicle.
 */
export function removePedFromVehicle(thePed: Ped): boolean;

/**
 * Sets the current [[Animations|animation]] of a [[player]] or [[ped]]. Not specifying the type of
 * animation will automatically cancel the current one.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnimation|MTASA Wiki}
 * @param thePed the player or ped you want to apply an Animations|animation to.  {{OptionalArg}}
 * @param block the Animations|animation blocks name.
 * @default nil
 * @param anim the name of the Animations|animation within the block.
 * @default nil
 * @param time how long the animation will run for in milliseconds.
 * @default -1
 * @param loop indicates whether or not the animation will loop.
 * @default true
 * @param updatePosition will change the actual coordinates of the ped according to the animation.
 * Use this for e.g. walking animations.
 * @default true
 * @param interruptable if set to false other tasks wont be able to interupt the animation. Setting
 * this to false also gives this function more power to override other animations that are running.
 * For example, squatting after a jump can be terminated.
 * @default true
 * @param freezeLastFrame if set to true after animation the last frame will be frozen, otherwise
 * the animation will end and controls will return.
 * @default true
 * @param blendTime how long the animation will mixed with the previous one in milliseconds.  {{New
 * items|3.0157|1.5.7|
 * @default 250
 * @param retainPedState will restore the task which was playing before calling this function.
 * Useful for restoring the crouch task after animation ends. This may be extended in the future to support
 * other states/tasks.  |16632}}
 * @default false
 * @return Returns ''true'' if succesful, ''false'' otherwise.
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
    retainPedState?: boolean,
): boolean;

/**
 * Sets the current animation progress of a player or ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnimationProgress|MTASA Wiki}
 * @param thePed the player or ped you want to change animation progress.
 * @param anim the animation name currently applied to ped, if not supplied, the animation will stop
 * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not
 * supplied will default to 0.0
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setPedAnimationProgress(thePed: Ped, anim?: string, progress?: number): boolean;

/**
 * Sets the speed of a currently running animation for a particular player or ped.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnimationSpeed|MTASA Wiki}
 * @param thePed the player or ped you want to change animation speed of.
 * @param anim the animation name it will affect.
 * @default ""
 * @param speed a float containing the speed between 0.0–1.0 you want to apply to the animation.
 * This limitation may be adjusted in the future, so do not provide speeds outside this boundary. {{New
 * feature/item|3.0160|1.5.7|20395|The limit is now 0.0 to 10.0.}} {{Warning|Setting speed higher than 1
 * can cause issues with some animations.}}
 * @default 1.0
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setPedAnimationSpeed(thePed: Ped, anim?: string, speed?: number): boolean;

/**
 * This function allows you to set the armor value of a [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedArmor|MTASA Wiki}
 * @param thePed : the ped whose armor you want to modify.
 * @param armor : the amount of armor you want to set on the ped. Valid values are from 0 to 100.
 * @return Returns ''true'' if the armor was changed succesfully. Returns ''false'' if an invalid
 * ped was specified, or the armor value specified is out of acceptable range.
 */
export function setPedArmor(thePed: Ped, armor: number): boolean;

/**
 * This function sets the driveby state of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedDoingGangDriveby|MTASA Wiki}
 * @param thePed The ped element whose state is to be changed.
 * @param state A boolean value representing the drive-by state, true meaning enabled and false
 * disabled.
 * @return Returns ''true'' if the driveby state could be changed, ''false'' otherwise.
 */
export function setPedDoingGangDriveby(thePed: Ped, state: boolean): boolean;

/**
 * Changes a ped's fighting style. Most styles only change the 'special attack' which is done using
 * the Aim and Enter keys.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedFightingStyle|MTASA Wiki}
 * @param thePed The ped whose fighting style to change.
 * @param style The fighting style ID to apply.  {{Fighting Styles}}
 * @return Returns ''true'' in case of success, ''false'' otherwise.
 */
export function setPedFightingStyle(thePed: Ped, style: number): boolean;

/**
 * With this function, you can set if a ped has a head or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedHeadless|MTASA Wiki}
 * @param thePed : The ped to check.
 * @param headState : head state, use true if you want the ped be headless, use false to give back
 * the head.
 * @return Returns ''true'' if successful, ''false'' otherwise
 */
export function setPedHeadless(thePed: Ped, headState: boolean): boolean;

/**
 * This function can be used to set a ped on fire or extinguish a fire on it.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedOnFire|MTASA Wiki}
 * @param thePed The ped that we want to set/unset
 * @param isOnFire true to set the ped on fire, false to extinguish any fire on him
 * @return Returns ''true'' if successful, ''false'' otherwise
 */
export function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean;

/**
 * *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They need a
 * way to be triggered on/off.
 * }}
 * This function allows you to set the value of a specific statistic for a [[ped]]. '''Visual stats
 * (FAT and BODY_MUSCLE) can only be used on the CJ skin''', they have no effect on other skins.
 * When this function is used client side, it can only be used on client side created peds.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedStat|MTASA Wiki}
 * @param thePed : the ped whose statistic you want to modify.
 * @param stat : the stat ID.  {{Stats}}
 * @param value : the new value of the stat. It must be between 0 and 1000.
 * @return Returns ''true'' if the statistic was changed succesfully. Returns ''false'' if an
 * invalid player is specified, if the stat-id/value is out of acceptable range or if the FAT or BODY_MUSCLE
 * stats are used on non-CJ players.
 */
export function setPedStat(thePed: Ped, stat: number, value: number): boolean;

/**
 * Sets the walking style of a ped. A walking style consists of a set of animations that are used
 * for walking, running etc.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedWalkingStyle|MTASA Wiki}
 * @param thePed the ped whose walking style to change.
 * @param style the walking style to set.  The possible walking styles are:  {{Ped walking styles}}
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setPedWalkingStyle(thePed: Ped, style: number): boolean;

/**
 * This function changes the selected weapon slot of a [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedWeaponSlot|MTASA Wiki}
 * @param thePed the ped whose weapon slot you want to set. In a clientside script, this cannot be
 * used on remote players.
 * @param weaponSlot the weapon slot to set.  {{Weapon_Slots}}
 * @return Returns ''true'' if successful in setting the ped's equipped weapon slot, ''false''
 * otherwise.
 */
export function setPedWeaponSlot(thePed: Ped, weaponSlot: number): boolean;

/**
 * This function is used to warp or force a ped into a vehicle.  There are no animations involved
 * when this happens.
 * [[File:vehicle seat ids.png|200px|thumb|right|Vehicle seat ids]]
 * '''Available client side from 1.3.1''' (It will only work with client side vehicles and peds)
 * @see {@link https://wiki.multitheftauto.com/wiki/warpPedIntoVehicle|MTASA Wiki}
 * @param thePed The ped which you wish to force inside the vehicle
 * @param theVehicle The vehicle you wish to force the ped into  {{OptionalArg}}
 * @param seat An integer representing the seat ID.
 * @default 0
 * @return Returns ''true'' if the operation is successful, ''false'' otherwise.
 */
export function warpPedIntoVehicle(thePed: Ped, theVehicle: Vehicle, seat: number): boolean;
