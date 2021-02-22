/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Ped, Table, Vehicle } from '../structure';

/**
 * This function checks if the given ped can fall off bikes.
 * @see {@link https://wiki.multitheftauto.com/wiki/canPedBeKnockedOffBike|MTASA Wiki}
 * @param thePed the ped you want to check.
 * @return Returns ''true'' if the ped can be knocked off bikes, ''false'' if he cannot or an
 * invalid element was passed.
 */
export function canPedBeKnockedOffBike(thePed: Ped): boolean;

/**
 * This function retrieves the analog control state of a ped, as set by
 * [[setPedAnalogControlState]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedAnalogControlState|MTASA Wiki}
 * @param thePed The ped you wish to retrieve the control state of.
 * @param controlName The control. See control names for a list of possible controls.  {{New
 * feature/item|3.0160|1.5.7|20383|
 * @param rawValue A bool indicating if it should return the raw player input value (will always
 * return script value for non-player peds).  }}
 * @return Returns a float between 0 ( full release ) and 1 ( full push ) indicating the amount the
 * control is pushed.
 * * <section name="Client-side example" class="client" show="true">
 * * <syntaxhighlight lang="lua">
 * * x, y, z = getElementPosition(localPlayer)
 * * rotX, rotY, rotZ = getElementRotation(localPlayer)
 * * CJ = createPed(0, x, y, z)
 * * CJ2 = createPed(0, x, y, z)
 * * copcar = createVehicle(597, x, y+5, z+2)
 * * copcar2 = createVehicle(597, x+2, y+10, z+4)
 * * warpPedIntoVehicle(CJ2, copcar2, 0)
 * * warpPedIntoVehicle(CJ, copcar, 0)
 * * function onGetCJAnalogControlState()
 * * setPedAnalogControlState(CJ, "accelerate", 0.90)
 * * if getPedAnalogControlState(CJ, "accelerate", 0.90) then
 * * setPedAnalogControlState(CJ2, "brake_reverse", 0.90)
 * * end
 * * end
 * * addEventHandler("onClientRender", getRootElement(), onGetCJAnalogControlState)
 * * </syntaxhighlight>
 * * </section>
 * * <br /><br />
 * * * This example was created by '''Hydra'''.
 */
export function getPedAnalogControlState(thePed: Ped, controlName: string, rawValue?: boolean): number;

/**
 * Gets the animation of a player or ped that was set using [[setPedAnimation]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedAnimation|MTASA Wiki}
 * @param thePed the player or ped you want to get the animations|animation of.
 * @return Returns two [[string|strings]]: the first is the name of the block, the second is the
 * name of the animation. Returns ''false'' if there was an error or if the ped is not doing an animation.
 * * {{New feature/item|3.0160|1.5.7|20450|<syntaxhighlight lang="lua"> string, string, int, int,
 * bool, bool, bool, int, bool getPedAnimation ( ped thePed )</syntaxhighlight>
 * * '''The function now returns 9 values in the same order as required by setPedAnimation:'''
 * * <syntaxhighlight lang="lua">string anim, string block, int time, bool loop, bool
 * updatePosition, bool interruptable, bool freezeLastFrame, int blendTime, bool
 * restoreTaskOnAnimEnd</syntaxhighlight>
 * * }}
 */
export function getPedAnimation(thePed: Ped): LuaMultiReturn<[string, string]>;

/**
 * Returns the 3D world coordinates of a specific bone of a given ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedBonePosition|MTASA Wiki}
 * @param thePed the ped you want to inspect.
 * @param bone the number of the bone to get the position of.  [[Image:Bones.jpg|thumb|Bone
 * numbers]]  <div style="border: 3px red solid; margin-bottom:3px; padding-left:5px;">
 * @return Returns the x, y, z world position of the bone.
 */
export function getPedBonePosition(thePed: Ped, bone: number): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the current camera rotation of a [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedCameraRotation|MTASA Wiki}
 * @param thePed the ped to retrieve the camera rotation of.
 * @return Returns the camera rotation of the [[ped]] in degrees if successful. Returns ''false''
 * if an invalid element was passed.
 */
export function getPedCameraRotation(thePed: Ped): number;

/**
 * Checks whether a ped or the localplayer has a certain control pressed.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedControlState|MTASA Wiki}
 * @param thePed the ped you want to check.
 * @param control the control to get the status of. See control names for a list of valid names.
 * @return Returns ''true'' if the ped is pressing the specified control, ''false'' if not or an
 * invalid argument was passed.
 */
export function getPedControlState(thePed: Ped, control: string): boolean;

/**
 * This function returns the current move state for the specified [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedMoveState|MTASA Wiki}
 * @param thePed The ped whose move state you want to know
 * @return Returns a [[string]] indicating the ped's move state, or ''false'' if the ped is not
 * streamed in, the movement type is unknown, the ped is in a vehicle or the ped is invalid.
 * * {{Ped move states}}
 */
export function getPedMoveState(thePed: Ped): string;

/**
 * This function returns the current oxygen level of the specified [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedOxygenLevel|MTASA Wiki}
 * @param thePed The ped whose oxygen level you want to check
 * @return A ''float'' with the oxygen level, ''false'' if an invalid ped was given.
 */
export function getPedOxygenLevel(thePed: Ped): number;

/**
 * This function is used to get the name of a specified ped's current simplest [[task]].<br>
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedSimplestTask|MTASA Wiki}
 * @param thePed : The ped whose task you want to retrieve.
 * @return Returns a string representing the name of the ped's simplest, active [[task]].
 */
export function getPedSimplestTask(thePed: Ped): string;

/**
 * This function allows retrieval of where a ped's target is blocked. It will only be blocked if
 * there is an obstacle within a ped's target range.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedTargetCollision|MTASA Wiki}
 * @param targetingPed This is the ped whose target collision you wish to retrieve
 * @return Returns three floats, ''x'',''y'',''z'', representing the position where the ped's
 * target collides, or ''false'' if it was unsuccessful.
 */
export function getPedTargetCollision(targetingPed: Ped): LuaMultiReturn<[number, number, number]>;

/**
 * This function allows retrieval of the position where a ped's target range ends, when he is
 * aiming with a weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedTargetEnd|MTASA Wiki}
 * @param targetingPed the ped who is targeting whose target end you wish to retrieve
 * @return Returns three floats, ''x'',''y'',''z'', representing the position where the ped's
 * target ends according to his range, or ''false'' if it was unsuccessful.
 */
export function getPedTargetEnd(targetingPed: Ped): LuaMultiReturn<[number, number, number]>;

/**
 * This function allows retrieval of the position a ped's target range begins, when he is aiming
 * with a weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedTargetStart|MTASA Wiki}
 * @param targetingPed The ped whose target start you wish to retrieve
 * @return Returns three floats, x,y,z, representing the position where the ped's target starts, or
 * ''false'' if it was unsuccessful.
 */
export function getPedTargetStart(targetingPed: Ped): LuaMultiReturn<[number, number, number]>;

/**
 * This function is used to get any simple or complex [[task]] of a certain type for a ped.
 * It can provide feedback on all tasks relating to a ped. For example, while jumping,
 * [[getPedSimplestTask]] will return TASK_SIMPLE_IN_AIR. If you wanted to know specifically if the player has
 * jumped, you would use this function. If you did you will discover that while jumping Primary task 3 is
 * TASK_COMPLEX_JUMP.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedTask|MTASA Wiki}
 * @param thePed : The ped whose task you want to retrieve.
 * @param priority : A string determining which set of tasks you want to retrieve it from. This
 * must be either primary or secondary.
 * @param taskType : An integer value representing the task type (or slot) you want to get the task
 * from. Types can be:
 * @return Returns the name of the most complex task. See [[list of player tasks]] for valid
 * strings. Returns ''false'' if invalid arguments are specified or if there is no task of the type specified.
 * * <br>
 * * {{New feature|3.0110|1.1|
 * * Returns between 1 and 4 strings. The first string contains the name of the most complex task,
 * with simpler sub-tasks being named in the following strings. See [[list of player tasks]] for valid
 * strings. Returns ''false'' if invalid arguments are specified or if there is no task of the type
 * specified.
 * * }}
 */
export function getPedTask(
    thePed: Ped,
    priority: string,
    taskType: number,
): LuaMultiReturn<[string, string, string, string]>;

/**
 * Gets the current voice of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedVoice|MTASA Wiki}
 * @param thePed the ped to get the voice of.
 * @return If successul, returns the current voice type name and the voice name of the ped (see
 * [[ped voices]] for possible names). Returns ''false'' in case of failure.
 */
export function getPedVoice(thePed: Ped): LuaMultiReturn<[string, string]>;

/**
 * Returns the world position of the muzzle of the weapon that a ped is currently carrying. The
 * weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out.
 * The position may not be accurate if the ped is off screen.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedWeaponMuzzlePosition|MTASA Wiki}
 * @param thePed the ped whose weapon muzzle position to retrieve.
 * @return If successful, returns the x/y/z coordinates of the weapon muzzle. Returns ''false''
 * otherwise.
 */
export function getPedWeaponMuzzlePosition(thePed: Ped): LuaMultiReturn<[number, number, number]>;

/**
 * This function gives the specified weapon to the specified ped. This function can't be used on
 * players, use [[giveWeapon]] for that.
 * This function is mainly useful for client side created peds however you can use it on a server
 * side ped, though note that the weapon wouldn't be synced between clients unless your script gives the
 * weapon to the ped on every client.
 * There is an optional argument to specify ammunition and whether to set as the current weapon. If
 * you don't specify an ammo value it will give 30 ammo by default and for a melee weapon you can
 * specify just 1 or above.
 * }}
 * *When setting ammo for [[Weapon|weapons in slot]] 0,1,10,11 or 12 the maximum ammo is 1
 * *When setting ammo for [[Weapon|weapons in slot]] 3,4,5 the ammo is added
 * *When setting ammo for [[Weapon|weapons in slot]] 2,6,7,8,9 and the slot weapon is changing, the
 * ammo is replaced
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/givePedWeapon|MTASA Wiki}
 * @param thePed A ped element.
 * @param weapon A whole number integer that refers to a Weapon ID. Click Weapon|here for a list of
 * possible weapon IDs.  {{OptionalArg}}
 * @param ammo A whole number integer serving as the ammo amount for the given weapon. For weapons
 * that do not require ammo, such as melee, this should be at least 1.
 * @default 30
 * @param setAsCurrent A boolean value determining whether or not the weapon will be set as the
 * peds currently selected weapon.
 * @default false
 * @return Returns ''true'' if weapon was successfully given to the ped, ''false'' otherwise.
 */
export function givePedWeapon(thePed: Ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

/**
 * This function checks if the specified [[ped]] is dead or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedDead|MTASA Wiki}
 * @param thePed : the ped you want to check up on.
 * @return Returns ''true'' if the ped is dead, ''false'' otherwise.
 */
export function isPedDead(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is carrying out a certain [[List of player
 * tasks|task]].
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedDoingTask|MTASA Wiki}
 * @param thePed : The ped you want to check.
 * @param taskName : A string containing the name of the List of player tasks|task youre checking
 * for.
 * @return Returns ''true'' if the player is currently doing the task, ''false'' otherwise.
 */
export function isPedDoingTask(thePed: Ped, taskName: string): boolean;

/**
 * This function is used to determine whether or not a ped is currently reloading their weapon.
 * Useful to stop certain quick reload exploits.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedReloadingWeapon|MTASA Wiki}
 * @param thePed The ped you are checking.
 * @return Returns ''true'' if the ped is currently reloading a weapon, ''false'' otherwise.
 */
export function isPedReloadingWeapon(thePed: Ped): boolean;

/**
 * [[Image:Targetingmarker.png|thumb|200px|Targeting marker]]
 * This function checks whether health target markers are drawn as set by
 * [[setPedTargetingMarkerEnabled]] or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedTargetingMarkerEnabled|MTASA Wiki}
 * @return Returns ''true'' if the health target markers are enabled, ''false'' if not.
 */
export function isPedTargetingMarkerEnabled(): boolean;

/**
 * This sets the analog control state of a control for the local player.
 * To change the analog controls for a [[ped]], please use [[setPedAnalogControlState]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setAnalogControlState|MTASA Wiki}
 * @param control The control that you want to set the state of. See control names for a list of
 * possible controls.
 * @param state A float between 0 and 1 indicating the amount the control is pressed. If no value
 * is provided, the analog control is removed.  <noinclude>{{New feature/item|3.0300|1.5.8|20756|
 * *'''forceOverrideNextFrame: ''' A [[bool]] indicating if the player input should force fully overriden
 * for the next frame.  }}</noinclude>
 * @return Returns ''true'' if the control state was successfully set, ''false'' otherwise.
 */
export function setAnalogControlState(control: string, state?: number, forceOverrideNextFrame?: boolean): boolean;

/**
 * This function allows you to set a ped's aim target to a specific point. If a ped is within a
 * certain range defined by [[getPedTargetStart]] and [[getPedTargetEnd]] he will be targeted and shot.
 * ''Note: If you wish to make a ped shoot you must use this in conjunction with an equipped weapon
 * and [[setPedControlState]].''
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedAimTarget|MTASA Wiki}
 * @param thePed The ped whose target you want to set. Only peds and remote players will work; this
 * function has no effect on the local player.
 * @param x The x coordinate of the aim target point.
 * @param y The y coordinate of the aim target point.
 * @param z The z coordinate of the aim target point.
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function setPedAimTarget(thePed: Ped, x: number, y: number, z: number): boolean;

/**
 * Sets an analog state of a specified [[ped]]'s control, as if they pressed or released it.
 * This function only works on [[ped]]s, to change the analog control state for a player, please
 * use [[setAnalogControlState]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnalogControlState|MTASA Wiki}
 * @param thePed The ped you wish to set the control state of.
 * @param control The control that you want to set the state of. See control names for a list of
 * possible controls.
 * @param state A float between 0 and 1 indicating the amount the control is pressed.
 * @return Returns ''true'' if the control state was successfully set, ''false'' otherwise.
 */
export function setPedAnalogControlState(thePed: Ped, control: string, state: number): boolean;

/**
 * This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't
 * confuse this with [[getCameraMatrix]], because that function is designed for fixed (scripted) camera
 * moves.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedCameraRotation|MTASA Wiki}
 * @param thePed The ped whose camera rotation is to be changed.
 * @param cameraRotation The new direction that the ped will walk if you set their forwards control
 * state. If the ped is the local player, it will also change where his camera is looking at if it
 * isnt fixed (i.e. camera target is the local player).
 * @return Returns ''true'' if the camera rotation was changed, ''false'' otherwise.
 */
export function setPedCameraRotation(thePed: Ped, cameraRotation: number): boolean;

/**
 * This function controls if a ped can fall of his bike by accident - namely by banging into a wall.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedCanBeKnockedOffBike|MTASA Wiki}
 * @param thePed the ped whose knockoffstatus is being changed
 * @param canBeKnockedOffBike true or false
 * @return
 */
export function setPedCanBeKnockedOffBike(thePed: Ped, canBeKnockedOffBike: boolean): boolean;

/**
 * This function makes a [[ped]] or [[player]] press or release a certain control.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedControlState|MTASA Wiki}
 * @param thePed the ped you want to press or release a control.
 * @param control the name of the control of which to change the state. See control names for a
 * list of valid names.
 * @param state the new control state. true means pressed, false is released.
 * @return Returns ''true'' if successful, ''false'' if otherwise.
 */
export function setPedControlState(thePed: Ped, control: string, state: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedEnterVehicle|MTASA Wiki}
 * @param thePed The player or ped to enter the vehicle.  **''Note: The player must be the local
 * player.''  **''Note: The ped must be synced by the client. Use [[isElementSyncer]] clientside to check
 * if the client is syncing. Use [[setElementSyncer]] serverside to change the syncer manually.''
 * @param passenger If set to true, the ped will enter as passenger in the nearest available seat,
 * otherwise he will enter as driver.
 * @default false
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 * * When this function returns ''true'', the client will ask server for permission to enter a
 * vehicle. Actually entering can still fail in the following cases
 * * *The function is used on a ped, but another client is not on version '''1.5.8 r20740''' or
 * newer.
 * * *Another player or ped is already entering, exiting or jacking the same vehicle and seat.
 * * *Movement input or damage can interrupt the task. Use [[getPedTask]] to monitor what the ped
 * is doing.
 * * This function returns ''false'' in the following cases
 * * *Invalid arguments were parsed.
 * * *The function is used on a ped, but the server is not on version '''1.5.8 r20740''' or newer.
 * * *Time passed since last enter/exit for this ped is less than 1500 ms.
 * * *[[onClientVehicleStartEnter]] was cancelled by a script.
 * * *The ped has an active TASK_PRIMARY [[task]]. Use [[getPedTask]] to monitor what the ped is
 * doing.
 */
export function setPedEnterVehicle(thePed: Ped, theVehicle?: Vehicle, passenger?: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedExitVehicle|MTASA Wiki}
 * @param thePed The player or ped to exit the vehicle.
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 * * When this function returns ''true'', the client will ask server for permission to exit a
 * vehicle. Exiting can still fail in the following cases
 * * *The function is used on a ped, but another client is not on version '''1.5.8 r20740''' or
 * newer.
 * * This function returns ''false'' in the following cases
 * * *Invalid arguments were parsed.
 * * *The function is used on a ped but the server is not on version '''1.5.8 r20740''' or newer.
 * * *Time passed since last enter/exit for this ped is less than 1500 ms.
 * * *The ped is getting jacked.
 */
export function setPedExitVehicle(thePed: Ped): boolean;

/**
 * This function makes a players foot prints bloody.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedFootBloodEnabled|MTASA Wiki}
 * @param thePlayer The player to give bloody foot prints to.
 * @param enabled Boolean specifying whether or not to have bloody feet.
 * @return Returns ''true'' if changing the players bloody feet status worked.
 */
export function setPedFootBloodEnabled(thePlayer: Element, enabled: boolean): boolean;

/**
 * This function checks if player feets are bleeding.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedFootBloodEnabled|MTASA Wiki}
 * @param thePlayer The player to give bloody foot prints to.
 * @return Returns ''true'' if feets are bleeding, '''false''' otherwise
 */
export function isPedFootBloodEnabled(thePlayer: Element): boolean;

/**
 * Makes a ped turn his head and look at a specific world position or element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedLookAt|MTASA Wiki}
 * @param thePed the ped to change the lookat of.
 * @param x the x coordinate of the world position to look at.
 * @param y the y coordinate of the world position to look at.
 * @param z the z coordinate of the world position to look at.
 * @param time the time, in milliseconds, during which the ped will look at the target. Once this
 * time has elapsed, he will look ahead again like before the function was applied. A time of 0 will
 * immediately stop any lookat. A negative time will make the ped look at the target indefinitely.
 * @default 3000 [
 * @param blend the time, in milliseconds, during which the look will blend.
 * @default 1000
 * @param target if this argument is specified, the position arguments will be ignored and the peds
 * gaze will follow the specified element instead. Can be a player, a vehicle, another ped etc.
 * @default nil
 * @return
 */
export function setPedLookAt(
    thePed: Ped,
    x: number,
    y: number,
    z: number,
    time?: number,
    blend?: number,
    target?: Element,
): boolean;

/**
 * This function allows you to set the oxygen level of a [[ped]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedOxygenLevel|MTASA Wiki}
 * @param thePed : the ped whose oxygen level you want to modify.
 * @param oxygen : the amount of oxygen you want to set on the ped. Native values are from 0 to
 * 1000. Each of the stamina (22) and underwater stamina (225) Template:Stats|stat maximum adds a bonus of
 * 1500. So the maximum oxygen level is 4000.
 * @return Returns ''true'' if the oxygen level was changed succesfully. Returns ''false'' if an
 * invalid ped and/or oxygen level was specified.
 */
export function setPedOxygenLevel(thePed: Ped, oxygen: number): boolean;

/**
 * [[Image:Targetingmarker.png|thumb|200px|Targeting marker]]
 * This function is used to toggle the health target marker on top of all pedestrians.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedTargetingMarkerEnabled|MTASA Wiki}
 * @param enabled A boolean denoting whether we want to enable (true) or disable (false) the
 * markers.
 * @return Returns ''true'' if the markers were enabled, ''false'' if weren't or if invalid
 * arguments are passed.
 */
export function setPedTargetingMarkerEnabled(enabled: boolean): boolean;

/**
 * Changes the voice of a ped.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedVoice|MTASA Wiki}
 * @param thePed the ped whose voice to change.
 * @param voiceType the voice type. See ped voices for possible types.
 * @param voiceName the voice name within the specified type. See ped voices for possible voices.
 * @return Returns ''true'' when the voice was successfully set, ''false'' otherwise.
 */
export function setPedVoice(thePed: Ped, voiceType: string, voiceName: string): boolean;

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
 * @return Returns a ped element if it was successfully created.
 */
export function createPed(modelid: number, x: number, y: number, z: number, rot?: number): Ped;

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
export function getValidPedModels(): Table;

/**
 * This function checks if the specified [[ped]] is choking (coughing) or not. This happens as a
 * result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPedChoking|MTASA Wiki}
 * @param thePed : The ped you wish to check
 * @return Returns ''true'' if the ped is choking, ''false'' otherwise.
 */
export function isPedChoking(thePed: Ped): boolean;

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
