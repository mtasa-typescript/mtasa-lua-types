/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Player, Table, Vehicle } from "types/mtasa/client/structure";

/**
 * *This is different to [[getVehicleOverrideLights]] because this function will return '''true'''
 * if the lights were turned on by natural causes.
 * * Unless [[setVehicleOverrideLights]] is used, vehicles always automatically disable their
 * lights at 06:25 and enable them at 20:26.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/areVehicleLightsOn|MTASA Wiki}
 * @param theVehicle : the vehicle you wish to retrieve the lights state of.
 * @return Returns ''true'' if the lights are on, ''false'' otherwise.
 */
export function areVehicleLightsOn(theVehicle: Vehicle): boolean;

/**
 * This function gets the state of the helicopter blades collisions on the specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getHeliBladeCollisionsEnabled|MTASA Wiki}
 * @param theVehicle The vehicle that will be checked.
 * @return Returns ''true'' if the collisions are enabled for specified vehicle, ''false'' if the
 * collisions aren't enabled for the specified vehicle, if the vehicle is not a helicopter or if invalid
 * arguments are specified.
 */
export function getHeliBladeCollisionsEnabled(theVehicle: Vehicle): boolean;

/**
 * Retrieves the speed at which the rotor of a helicopter rotates.
 * @see {@link https://wiki.multitheftauto.com/wiki/getHelicopterRotorSpeed|MTASA Wiki}
 * @param heli the helicopter element to get the rotor speed of.
 * @return Returns the rotor speed if successful. This is 0 when the helicopter is parked, and
 * about 0.2 when it is fully spun up. It can be negative if the rotor rotates counter-clockwise. Returns
 * ''false'' in case of failure (an invalid element or a vehicle element that is not a helicopter was
 * passed).
 */
export function getHelicopterRotorSpeed(heli: Vehicle): number;

/**
 * Use this to get the value of a vehicles adjustable property. This property relates to movable
 * parts of a model, for example hydra jets or dump truck tray.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleAdjustableProperty|MTASA Wiki}
 * @param theVehicle The vehicle you want to get the adjustable property of.
 * @return Returns a value from 0 upwards representing adjustment. 0 is default position. Maximum
 * varies per vehicle, for example hydra horizontal flight is 5000, while dump truck tray max tilt is
 * 2500. Or returns ''false'' if the vehicle passed to the function is invalid.
 */
export function getVehicleAdjustableProperty(theVehicle: Vehicle): number;

/**
 * This function gets the component position of a [[vehicle]]. The vehicle must be streamed in.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentPosition|MTASA Wiki}
 * @param theVehicle The vehicle you wish to get component position of.
 * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the
 * model file of the component you wish to modify)  {{New feature/item|3.0141|1.4.0|7013|
 * @param base A string representing what the returned position is relative to. It can be one of
 * the following values:
 * @default "root"
 * @return Returns three ''floats'' indicating the position of the component, ''x'', ''y'' and
 * ''z'' respectively.
 */
export function getVehicleComponentPosition(
    theVehicle: Vehicle,
    theComponent: string,
    base?: string
): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the component rotation of a [[vehicle]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentRotation|MTASA Wiki}
 * @param theVehicle The vehicle you wish to get component rotation of.
 * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the
 * model file of the component you wish to modify)  {{New feature/item|3.0141|1.4.0|7013|
 * @param base A string representing what the returned rotation is relative to. It can be one of
 * the following values:
 * @default "parent"
 * @return Returns three ''floats'' indicating the rotation of the component, ''x'', ''y'' and
 * ''z'' respectively.
 */
export function getVehicleComponentRotation(
    theVehicle: Vehicle,
    theComponent: string,
    base?: string
): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the component scale of a [[vehicle]].}}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentScale|MTASA Wiki}
 * @param theVehicle The vehicle you wish to get component scale of.
 * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the
 * model file of the component you wish to modify)
 * @param base A string representing what the returned scale is relative to. It can be one of the
 * following values:
 * @default "root"
 * @return Returns three ''floats'' indicating the scale of the component, ''x'', ''y'' and ''z''
 * respectively.
 */
export function getVehicleComponentScale(
    theVehicle: Vehicle,
    theComponent: string,
    base?: string
): LuaMultiReturn<[number, number, number]>;

/**
 * This function get component visibility for [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentVisible|MTASA Wiki}
 * @param theVehicle The vehicle you wish to get component visibility of.
 * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the
 * model file of the component you wish to modify)
 * @return Returns a ''bool'' indicating the visible state of the component.
 */
export function getVehicleComponentVisible(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * This function gets a table of the components currently on a [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponents|MTASA Wiki}
 * @param theVehicle The vehicle you wish to get the Vehicle_Components|components of.
 * @return Returns a ''table'' containing the name of the component as the key and visibility flag
 * of that component as the value
 */
export function getVehicleComponents(theVehicle: Vehicle): Table;

/**
 * Gets the specified vehicle's current gear.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleCurrentGear|MTASA Wiki}
 * @param theVehicle the vehicle to get the gear of
 * @return Returns the gear if successful, ''false'' otherwise.
 */
export function getVehicleCurrentGear(theVehicle: Vehicle): number;

/**
 * This function returns the position of the dummy for the given vehicle.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleDummyPosition|MTASA Wiki}
 * @param theVehicle The vehicle you want to get the dummy positions from
 * @param dummy The dummy whose position you want to get
 * @return Returns three floats indicating the position ''x'', ''y'' and ''z'' of the vehicle's
 * dummy. It returns ''false'' otherwise.
 * * This is a command to get the position of the player's vehicle dummy position specified as an
 * argument.
 * * <syntaxhighlight lang="lua">
 * * function getDummyPosition(cmd, dummy)
 * *     if (not dummy) then
 * *         return false
 * *     end
 * *     local veh = getPedOccupiedVehicle(localPlayer)
 * *     if (not veh) then
 * *         outputChatBox("You should be in a vehicle to use this command", 255, 25, 25)
 * *         return false
 * *     end
 * *     local x, y, z = getVehicleDummyPosition(veh, dummy)
 * *     outputChatBox("X: "..x..", Y: "..y..", Z: "..z, 0, 255, 0)
 * * end
 * * addCommandHandler("getdummy", getDummyPosition)
 * * </syntaxhighlight>
 */
export function getVehicleDummyPosition(theVehicle: Vehicle, dummy: string): LuaMultiReturn<[number, number, number]>;

/**
 * Retrieves the current gravity vector of a vehicle. This is the direction in which the vehicle
 * falls, also the cameras of any passengers will be rotated to match it.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleGravity|MTASA Wiki}
 * @param theVehicle the vehicle to retrieve the gravity vector of.
 * @return Returns the x, y and z components of the gravity vector if successful, ''false''
 * otherwise.
 */
export function getVehicleGravity(theVehicle: Vehicle): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets position of the dummies contained in a vehicle model.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelDummyPosition|MTASA Wiki}
 * @param modelID : The model ID which you want to apply the change to
 * @param dummy : The dummy whose position you want to get
 * @return Returns three floats indicating the position ''x'', ''y'' and ''z'' of given dummy. It
 * returns ''false'' otherwise.
 */
export function getVehicleModelDummyPosition(modelID: number, dummy: string): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the default position of the dummies contained in a vehicle model.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelDummyDefaultPosition|MTASA Wiki}
 * @param modelID : The model ID which you want to apply the change to
 * @param dummy : The dummy whose position you want to get
 * @return Returns three floats indicating the default position ''x'', ''y'' and ''z'' of the given
 * dummy. It returns ''false'' otherwise.
 */
export function getVehicleModelDummyDefaultPosition(
    modelID: number,
    dummy: string
): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the position of the exhaust fumes the vehicle model emits.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelExhaustFumesPosition|MTASA Wiki}
 * @param modelID : The vehicle model ID.
 * @return Returns the position of the exhaust fumes if everything went fine or ''false'' otherwise.
 */
export function getVehicleModelExhaustFumesPosition(modelID: number): LuaMultiReturn<[number, number, number]>;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelWheelSize|MTASA Wiki}
 * @param vehicleModel : The Vehicle IDs|vehicle model ID.
 * @param wheelGroup : The group of wheels of the vehicle model to retrieve their size value. If
 * not specified, it defaults to all_wheels. The following values are supported:
 * @return Returns a decimal number or a table, depending on the specified wheel group. If the
 * specified vehicle model ID or wheel group are not valid, an error is raised instead. The meaning of the
 * wheel size values is documented in [[setVehicleModelWheelSize]].
 */
export function getVehicleModelWheelSize(vehicleModel: number, wheelGroup?: string): number | Table;

/**
 * This function gets the nitro count of the [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleNitroCount|MTASA Wiki}
 * @param theVehicle The vehicle which you want to get a nitro count.
 * @return Returns ''an integer'' determining the amount of nitro counts of the vehicle, ''false''
 * if there is no nitro in the vehicle.
 */
export function getVehicleNitroCount(theVehicle: Vehicle): number;

/**
 * This function gets the nitro level of the [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleNitroLevel|MTASA Wiki}
 * @param theVehicle The vehicle, which you want to get a nitro level.
 * @return Returns ''a float'' determining the nitro level (ranges from 0.0001 to 1.0) of the
 * vehicle, ''false'' if there is no nitro in the vehicle.
 */
export function getVehicleNitroLevel(theVehicle: Vehicle): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleWheelFrictionState|MTASA Wiki}
 * @param theVehicle The vehicle that you wish to get the wheel friction state.
 * @param wheel The wheel you want to check. (0: front left, 1: rear left, 2: front right, 3: rear
 * right)
 * @return Returns a [[int]] indicating the wheel friction state. This value can be:
 * * * '''0:''' Normal friction
 * * * '''1:''' Slip with acceleration (only for driving wheels)
 * * * '''2:''' Slip without acceleration
 * * * '''3:''' Locked wheel (on brake on handbrake).
 */
export function getVehicleWheelFrictionState(theVehicle: Vehicle, wheel: number): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleWheelScale|MTASA Wiki}
 * @param theVehicle : The vehicle to get its wheel scale of.
 * @return Returns the wheel scale of the specified vehicle as a decimal number, or an error if the
 * vehicle is invalid. For more information about the returned number, see [[setVehicleWheelScale]].
 */
export function getVehicleWheelScale(theVehicle: Vehicle): number;

/**
 * This function checks if a [[Element/Vehicle|train]] is a chain engine (moves the rest of the
 * chain's carriages) or not.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isTrainChainEngine|MTASA Wiki}
 * @param theTrain a Element/Vehicle|train to check if its a chain engine or not.
 * @return * ''true'' if a [[Element/Vehicle|train]] was passed to the function and if it's a chain
 * engine.
 * * * ''false'' otherwise.
 */
export function isTrainChainEngine(theTrain: Vehicle): boolean;

/**
 * This function checks if nitro is activated on the [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleNitroActivated|MTASA Wiki}
 * @param theVehicle The vehicle, which you want to check for an activation.
 * @return Returns ''true'' if the nitro is currently activated on the vehicle, ''false'' otherwise.
 */
export function isVehicleNitroActivated(theVehicle: Vehicle): boolean;

/**
 * This function checks if nitro is recharging on the [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleNitroRecharging|MTASA Wiki}
 * @param theVehicle The vehicle, which you want to check for recharging.
 * @return Returns ''true'' if the nitro is currently recharging on the vehicle, ''false''
 * otherwise.
 */
export function isVehicleNitroRecharging(theVehicle: Vehicle): boolean;

/**
 * This function returns a [[boolean]] whether the [[vehicle]]'s wheel is on ground (true) or in
 * air (false).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleWheelOnGround|MTASA Wiki}
 * @param theVehicle The vehicle, which you want to check.
 * @return Returns ''true'' if the vehicle wheel is on ground/collided, ''false'' otherwise.
 */
export function isVehicleWheelOnGround(theVehicle: Vehicle, int: string): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleWindowOpen|MTASA Wiki}
 * @return
 */
export function isVehicleWindowOpen(theVehicle: Vehicle, window: number): boolean;

/**
 * This function reset to default component position for [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleComponentPosition|MTASA Wiki}
 * @param theVehicle The vehicle you wish to reset component position.
 * @param theComponent A vehicle component (this is the frame name from the model file of the
 * component you wish to modify)
 * @return Returns ''true'' if the position of the component was reset, ''false'' otherwise.
 */
export function resetVehicleComponentPosition(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * This function reset to default component rotation for [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleComponentRotation|MTASA Wiki}
 * @param theVehicle The vehicle you wish to reset component rotation.
 * @param theComponent A vehicle component (this is the frame name from the model file of the
 * component you wish to modify)
 * @return Returns ''true'' if the rotation of the component was reset, ''false'' otherwise.
 */
export function resetVehicleComponentRotation(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * This function reset to default component scale for [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleComponentScale|MTASA Wiki}
 * @param theVehicle The vehicle you wish to reset component scale.
 * @param theComponent A vehicle component (this is the frame name from the model file of the
 * component you wish to modify)
 * @return Returns ''true'' if the scale of the component was reset, ''false'' otherwise.
 */
export function resetVehicleComponentScale(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * This function resets the vehicle dependent dummy positions to the vehicle's current model dummy
 * positions.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleDummyPositions|MTASA Wiki}
 * @param theVehicle The vehicle to reset
 * @return Returns ''true'' for success, ''false'' otherwise.
 */
export function resetVehicleDummyPositions(theVehicle: Vehicle): boolean;

/**
 * This function changes the state of the helicopter blades collisions on the specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setHeliBladeCollisionsEnabled|MTASA Wiki}
 * @param theVehicle The helicopter that will have the blades collisions set.
 * @param collisions The state of the helicopter blades collisions.
 * @return Returns ''true'' if the collisions are set for the specified vehicle, ''false'' if the
 * collisions can't be set for the specified vehicle, if the vehicle is not a helicopter or if invalid
 * arguments are specified.
 */
export function setHeliBladeCollisionsEnabled(theVehicle: Vehicle, collisions: boolean): boolean;

/**
 * Sets the rotor speed of a helicopter.
 * @see {@link https://wiki.multitheftauto.com/wiki/setHelicopterRotorSpeed|MTASA Wiki}
 * @param heli the helicopter to adjust the rotor of.
 * @param speed the new rotor speed. Usual values are 0 if the helicopter stands still, or 0.2 if
 * the rotor is fully spun up. Higher values than normal will not affect the helicopters handling.
 * Negative values are allowed and will make the rotor spin in the opposite direction (pushing the
 * helicopter down).
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setHelicopterRotorSpeed(heli: Vehicle, speed: number): boolean;

/**
 * This function is used for adjusting the movable parts of a model, for example hydra jets or dump
 * truck tray.
 * This function only works on vehicles with adjustable properties.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleAdjustableProperty|MTASA Wiki}
 * @param theVehicle : The vehicle you wish to change the adjustable property of.
 * @param value : A value from 0 between ?. (Set the adjustable value between 0 and N. 0 is the
 * default value. It is possible to force the setting beyond default maximum, for example setting above
 * 5000 on the dump truck (normal max 2500) will cause the tray to be fully vertical.)
 * @return Returns true if the adjustable property was set, ''false'' otherwise.
 */
export function setVehicleAdjustableProperty(theVehicle: Element, value: number): boolean;

/**
 * This function sets the component position of a [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentPosition|MTASA Wiki}
 * @param theVehicle The vehicle you wish to set component position.
 * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the
 * model file of the component you wish to modify)
 * @param posX The new x position of this component.
 * @param posY The new y position of this component.
 * @param posZ The new z position of this component.  {{New feature/item|3.0141|1.4.0|7013|
 * @param base : A string representing what the supplied position (posX, posY, posZ) is relative
 * to. It can be one of the following values:
 * @default "root"
 * @return Returns ''true'' if component position was set successfully, ''false'' otherwise.
 */
export function setVehicleComponentPosition(
    theVehicle: Vehicle,
    theComponent: string,
    posX: number,
    posY: number,
    posZ: number,
    base?: string
): boolean;

/**
 * This function sets the component rotation of a [[vehicle]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentRotation|MTASA Wiki}
 * @param theVehicle The vehicle you wish to set component rotation of.
 * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the
 * model file of the component you wish to modify)
 * @param rotX The components rotation around the x axis in degrees.
 * @param rotY The components rotation around the y axis in degrees.
 * @param rotZ The components rotation around the z axis in degrees.  {{New
 * feature/item|3.0141|1.4.0|7013|
 * @param base A string representing what the supplied rotation (rotX, rotY, rotZ) is relative to.
 * It can be one of the following values:
 * @default "parent"
 * @return Returns ''true'' if the component rotation was set successfully, ''false'' otherwise.
 */
export function setVehicleComponentRotation(
    theVehicle: Vehicle,
    theComponent: string,
    rotX: number,
    rotY: number,
    rotZ: number,
    base?: string
): boolean;

/**
 * This function sets the component scale of a [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentScale|MTASA Wiki}
 * @param theVehicle The vehicle you wish to set component scale.
 * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the
 * model file of the component you wish to modify)
 * @param scaleX The new x scale of this component.
 * @param scaleY The new y scale of this component.
 * @param scaleZ The new z scale of this component.
 * @param base : A string representing what the supplied scale (scaleX, scaleY, scaleZ) is relative
 * to. It can be one of the following values:
 * @default "root"
 * @return Returns ''true'' if component scale was set successfully, ''false'' otherwise.
 */
export function setVehicleComponentScale(
    theVehicle: Vehicle,
    theComponent: string,
    scaleX: number,
    scaleY: number,
    scaleZ: number,
    base?: string
): boolean;

/**
 * This function sets component visibility for [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentVisible|MTASA Wiki}
 * @param theVehicle The vehicle you wish to set component visibility of.
 * @param theComponent A Vehicle_Components|vehicle component (this is the components frame name
 * (also called dummy) from the vehicle models DFF file of which you want to manipulate components)
 * @param visible a bool which determines if the component should be visible
 * @return Returns a ''bool'' indicating if the visiblity was changed successfully.
 */
export function setVehicleComponentVisible(theVehicle: Vehicle, theComponent: string, visible: boolean): boolean;

/**
 * This function sets the position of the dummy for the given vehicle.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDummyPosition|MTASA Wiki}
 * @param theVehicle The vehicle you want to set the dummy position for
 * @param dummy The dummy whose position you want to set
 * @param x , y, z The new dummy position
 * @return Returns ''true'' for success, ''false'' otherwise.
 */
export function setVehicleDummyPosition(theVehicle: Vehicle, dummy: string, x: number, y: number, z: number): boolean;

/**
 * Sets the gravity vector of a vehicle. The vehicle will fall in this direction, and the camera of
 * any occupants will also be rotated to match it. Can be used for e.g. driving on walls or upside
 * down on ceilings.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleGravity|MTASA Wiki}
 * @param theVehicle the vehicle of which to change the gravity.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setVehicleGravity(theVehicle: Vehicle, x: number, y: number, z: number): boolean;

/**
 * This function sets the position of the dummies contained in a vehicle model. Use
 * [[setVehicleComponentPosition]] to adjust the vehicle component positions.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleModelDummyPosition|MTASA Wiki}
 * @param modelID : The model ID which you want to apply the change to
 * @param dummy : The dummy whose position you want to change
 * @return Returns ''true'' if everything went fine, ''false'' otherwise.
 */
export function setVehicleModelDummyPosition(modelID: number, dummy: string, x: number, y: number, z: number): boolean;

/**
 * This function sets the position of the exhaust fumes the vehicle model emits. Use
 * [[setVehicleComponentPosition]] to adjust the exhaust position.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleModelExhaustFumesPosition|MTASA Wiki}
 * @param modelID : The model ID which you want to apply the change to
 * @param posX , posY, posZ: The desired position
 * @return Returns ''true'' if everything went fine, ''false'' otherwise.
 */
export function setVehicleModelExhaustFumesPosition(modelID: number, posX: number, posY: number, posZ: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleModelWheelSize|MTASA Wiki}
 * @param vehicleModel : The Vehicle IDs|vehicle model ID.
 * @param wheelGroup : The group of wheels of the vehicle model that will have its size set by this
 * function. The following values are supported:
 * @param wheelSize : The wheel size value to set. Default GTA values for automobiles usually are
 * around 0.7. It must be greater than 0.
 * @return Returns ''true'' if the size for the specified wheel group and vehicle model has been
 * set successfully, or an error if some parameter is invalid.
 */
export function setVehicleModelWheelSize(vehicleModel: number, wheelGroup: string, wheelSize: number): boolean;

/**
 * This function activates or deactivates the nitro on the specified [[vehicle]], like if a player
 * pressed the button for activating nitro.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleNitroActivated|MTASA Wiki}
 * @param theVehicle The vehicle to activate or deactivate the nitro on.
 * @param state true if you want to activate the nitro, false if you want to disable it.
 * @return Returns ''true'' if the nitro activation state was modified successfully, ''false''
 * otherwise.
 */
export function setVehicleNitroActivated(theVehicle: Vehicle, state: boolean): boolean;

/**
 * This function sets how many times a player can activate the nitro on a specified [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleNitroCount|MTASA Wiki}
 * @param theVehicle : the vehicle which you want to modify how many times a player can use its
 * nitro.
 * @param count : how many times should the player be able to use the nitro of this vehicle (from
 * 0-100 times; 0 means that it cant be used and 101 means that it can be used infinite times).
 * @return Returns ''true'' if the nitro count was set successfully to the vehicle, ''false''
 * otherwise.
 */
export function setVehicleNitroCount(theVehicle: Vehicle, count: number): boolean;

/**
 * This function sets the nitro level of the [[vehicle]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleNitroLevel|MTASA Wiki}
 * @param theVehicle The vehicle, which you want to set.
 * @param level Nitro level you want to set (ranges from 0.0001 to 1.0).
 * @return Returns ''true'' if the nitro level was set successfully to the vehicle, ''false''
 * otherwise.
 */
export function setVehicleNitroLevel(theVehicle: Vehicle, level: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleWheelScale|MTASA Wiki}
 * @param theVehicle : The vehicle whose wheel scale you wish to modify.
 * @param wheelScale : The wheel scale value to set.
 * @return Returns ''true'' if the wheel scale has been set successfully, or an error if some
 * parameter is invalid.
 */
export function setVehicleWheelScale(theVehicle: Vehicle, wheelScale: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleWindowOpen|MTASA Wiki}
 * @return
 */
export function setVehicleWindowOpen(theVehicle: Vehicle, window: number, open: boolean): boolean;

/**
 * This function adds an upgrade to a [[vehicle]], e.g. nitrous, hydraulics.
 * @see {@link https://wiki.multitheftauto.com/wiki/addVehicleUpgrade|MTASA Wiki}
 * @param theVehicle : The element representing the vehicle you wish to add the upgrade to.
 * @param upgrade : The id of the upgrade you wish to add. (1000 to 1193), see Vehicle Upgrades
 * '''Note:''' setCameraTarget will behave strangely if you use hydraulics (upgrade id: 1087) server
 * sided and when your camera target is the player inside the vehicle with hydraulics and if the player is
 * not you.
 * @return Returns ''true'' if the upgrade was successfully added to the vehicle, otherwise
 * ''false''.
 */
export function addVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

/**
 * This function attaches a trailer type vehicle to a trailer-towing-type vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/attachTrailerToVehicle|MTASA Wiki}
 * @param theVehicle : the vehicle you wish to attach a trailer to.
 * @param theTrailer : the trailer you wish to be attached.
 * @return Returns ''true'' if the vehicle's were successfully attached, ''false'' otherwise.
 */
export function attachTrailerToVehicle(theVehicle: Vehicle, theTrailer: Vehicle): boolean;

/**
 * This function will blow up a vehicle. This will cause an explosion and will kill the driver and
 * any passengers inside it.
 * @see {@link https://wiki.multitheftauto.com/wiki/blowVehicle|MTASA Wiki}
 * @param vehicleToBlow the vehicle that you wish to blow up.
 * @return Returns ''true'' if the vehicle was blown up, ''false'' if invalid arguments were passed
 * to the function.
 */
export function blowVehicle(vehicleToBlow: Vehicle): boolean;

/**
 * This function creates a vehicle at the specified location.
 * Its worth nothing that the position of the vehicle is the center point of the vehicle, not its
 * base. As such, you need to ensure that the z value (vertical axis) is some height above the ground.
 * You can find the exact height using the client side function
 * [[getElementDistanceFromCentreOfMassToBaseOfModel]], or you can estimate it yourself and just spawn the vehicle so it drops to the ground.
 * @see {@link https://wiki.multitheftauto.com/wiki/createVehicle|MTASA Wiki}
 * @param model : The Vehicle IDs|vehicle ID of the vehicle being created.
 * @param x : A floating point number representing the X coordinate on the map.
 * @param y : A floating point number representing the Y coordinate on the map.
 * @param z : A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
 * @param rx : A floating point number representing the rotation about the X axis in degrees.
 * @param ry : A floating point number representing the rotation about the Y axis in degrees.
 * @param rz : A floating point number representing the rotation about the Z axis in degrees.
 * @param numberplate : A string that will go on the number plate of the vehicle (max 8 characters).
 * @param bDirection (serverside only): Placeholder boolean which provides backward compatibility
 * with some scripts. It never had any effect, but it is read by the code. It is recommended to ignore
 * this argument, passing false or the variant1 argument in its place.  {{New feature/item|3.0120|1.2||
 * @param variant1 : An integer for the first vehicle variant. See vehicle variants.
 * @param variant2 : An integer for the second vehicle variant. See vehicle variants.  }}
 * @return Returns the [[vehicle]] element that was created. Returns ''false'' if the arguments are
 * incorrect, or if the vehicle limit of 65535 is exceeded.
 */
export function createVehicle(
    model: number,
    x: number,
    y: number,
    z: number,
    rx?: number,
    ry?: number,
    rz?: number,
    numberplate?: string,
    bDirection?: boolean,
    variant1?: number,
    variant2?: number
): Vehicle;

/**
 * This function detaches an already attached trailer from a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/detachTrailerFromVehicle|MTASA Wiki}
 * @param theVehicle : The vehicle you wish to detach a trailer from.
 * @param theTrailer : The trailer you wish to be detached.  {{Note|If 'theTrailer' is specified,
 * it will only detach if this matches. If it is not specified, any trailer attached to 'theVehicle'
 * will be detached.}}
 * @default nil
 * @return Returns 'true' if the vehicle's were successfully detached, 'false' otherwise.
 */
export function detachTrailerFromVehicle(theVehicle: Vehicle, theTrailer?: Vehicle): boolean;

/**
 * This function will set a [[vehicle]]'s health to full and fix its damage model. If you wish to
 * only change the vehicle's health, without affecting its damage model, use [[setElementHealth]].
 * @see {@link https://wiki.multitheftauto.com/wiki/fixVehicle|MTASA Wiki}
 * @param theVehicle the vehicle you wish to fix
 * @return Returns ''true'' if the vehicle was fixed, ''false'' if '''theVehicle''' is invalid.
 */
export function fixVehicle(theVehicle: Vehicle): boolean;

/**
 * This function returns a table of the original vehicle handling. Use [[getVehicleHandling]] if
 * you wish to get the current handling of a vehicle, or [[getModelHandling]] for a specific vehicle
 * model.
 * @see {@link https://wiki.multitheftauto.com/wiki/getOriginalHandling|MTASA Wiki}
 * @param modelID The vehicle ID you wish to get the original handling from.
 * @return Returns a ''table'' containing all the handling data, ''false'' otherwise. Here a list
 * of valid table properties and what they return:
 * * {{Handling Properties}}
 */
export function getOriginalHandling(modelID: number): Table;

/**
 * Gets the direction in which a train is driving (clockwise or counterclockwise).
 * @see {@link https://wiki.multitheftauto.com/wiki/getTrainDirection|MTASA Wiki}
 * @param train the train of which to get the driving direction.
 * @return Returns ''true'' if the train is driving clockwise on the train track, ''false'' if it
 * is going counterclockwise or a failure occured.
 */
export function getTrainDirection(train: Vehicle): boolean;

/**
 * Gets the position the train is currently on the track
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getTrainPosition|MTASA Wiki}
 * @param train the train to get the position of
 * @return Returns a float that represents how along the track it is, ''false'' if there is problem
 * with train element.
 */
export function getTrainPosition(train: Vehicle): number;

/**
 * Gets the speed at which a train is traveling on the rails.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTrainSpeed|MTASA Wiki}
 * @param train the train of which to retrieve the speed.
 * @return Returns the train's speed if successful, ''false'' otherwise.
 */
export function getTrainSpeed(train: Vehicle): number;

/**
 * This function returns the color of the specified vehicle. A vehicle can have up to four colors.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleColor|MTASA Wiki}
 * @param theVehicle The vehicle that you wish to get the color of.
 * @return *Returns 12 [[int|ints]] (if bRGB is ''true'') indicating the red, green and blue
 * components of each of the 4 vehicle colors.
 * * *Returns 4 [[int|ints]] (if bRGB is ''false'') indicating the color ids of each of the 4
 * vehicle colors.
 * * *Returns ''false'' if the vehicle doesn't exist.
 * * Valid color ids if bRGB is set to false:
 * * {{Vehicle_colors}}
 * * <br>
 */
export function getVehicleColor(
    theVehicle: Vehicle,
    bRGB: boolean
): LuaMultiReturn<[number, number, number, number, number, number, number, number, number, number, number, number]>;

/**
 * This function returns a table of all the compatible upgrades (or all for a specified slot,
 * optionally) for a specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleCompatibleUpgrades|MTASA Wiki}
 * @param theVehicle the vehicle you wish to retrieve the list of compatible upgrades of.
 * @param slot the upgrade slot number for which youre getting the list (from 0 to 16). Compatible
 * upgrades for all slots are listed if this is not specified.
 * @return Returns a ''table'' with all the compatible upgrades, or ''false'' if invalid arguments
 * are passed.
 */
export function getVehicleCompatibleUpgrades(theVehicle: Vehicle, slot?: number): Table;

/**
 * This function is used to get the player in control of the specified vehicle which includes
 * somebody who is trying to enter the drivers seat.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleController|MTASA Wiki}
 * @param theVehicle the vehicle you want to get the controller of.
 * @return Returns a [[player]] object, if there isn't a driver, it will search the 'trailer chain'
 * for the front driver, ''false'' otherwise.
 */
export function getVehicleController(theVehicle: Vehicle): Player;

/**
 * This function tells you how open a door is (the 'open ratio'). Doors include boots/trunks and
 * bonnets on vehicles that have them.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleDoorOpenRatio|MTASA Wiki}
 * @param theVehicle The vehicle that you wish to get the door open ratio of.
 * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left),
 * 5 (rear right)
 * @return Returns a number between 0 and 1 that indicates how open the door is. 0 is closed, and 1
 * is fully open. Returns ''false'' if invalid arguments are passed.
 */
export function getVehicleDoorOpenRatio(theVehicle: Vehicle, door: number): number;

/**
 * This function returns the current state of the specifed door on the vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleDoorState|MTASA Wiki}
 * @param theVehicle the vehicle you want to get the door status of.
 * @param door a whole number representing which door to get the status of. Valid values are:
 * @return If successful, one of the following integers will be returned:
 * * * '''0:''' Shut, intact (also returned if the door does not exist)
 * * * '''1:''' Ajar, intact
 * * * '''2:''' Shut, damaged
 * * * '''3:''' Ajar, damaged
 * * * '''4:''' Missing
 */
export function getVehicleDoorState(theVehicle: Vehicle, door: number): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleEngineState|MTASA Wiki}
 * @param theVehicle : the vehicle you wish to get the engine state of.
 * @return Returns '''true''' if the vehicle's engine is started, '''false''' otherwise.
 */
export function getVehicleEngineState(theVehicle: Vehicle): boolean;

/**
 * This function returns a table of the current vehicle handling data.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleHandling|MTASA Wiki}
 * @param theVehicle the vehicle you wish to get the handling data of.
 * @return Returns a ''table'' containing all the handling data, ''false'' otherwise. Here's a list
 * of valid table properties and what they return:
 * * {{Handling Properties}}
 */
export function getVehicleHandling(theVehicle: Element): Table;

/**
 * This function will get the headlight color of a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleHeadLightColor|MTASA Wiki}
 * @param theVehicle The vehicle that you wish to set the headlight color of.
 * @return Returns three ''integers'' for the red, green and blue of the headlight color for the
 * specified vehicle, ''false'' if an invalid vehicle was specified.
 */
export function getVehicleHeadLightColor(theVehicle: Vehicle): LuaMultiReturn<[number, number, number]>;

/**
 * This function is used to check whether a vehicle's landing gear is down or not. Only planes can
 * be used with this function.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleLandingGearDown|MTASA Wiki}
 * @param theVehicle the vehicle of which you wish to check the landing gear state.
 * @return Returns ''true'' if landing gear is down, ''false'' if the landing gear is up.<br />
 * * Returns ''nil'' if the vehicle has no landing gear, or is invalid.
 */
export function getVehicleLandingGearDown(theVehicle: Vehicle): boolean;

/**
 * This function returns the current state of the specified light on the vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleLightState|MTASA Wiki}
 * @param theVehicle the vehicle that you wish to know the light state of.
 * @param light A whole number determining the individual light:
 * @return Returns 0 (working) or 1 (broken)
 */
export function getVehicleLightState(theVehicle: Vehicle, light: number): number;

/**
 * This function returns the maximum number of passengers that a specified vehicle can hold. Only
 * passenger seats are counted, the driver seat is excluded.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleMaxPassengers|MTASA Wiki}
 * @param theVehicle the vehicle that you wish to know the maximum capacity of.  OR
 * @return Returns an [[int]] indicating the maximum number of passengers that can enter a vehicle.
 */
export function getVehicleMaxPassengers(theVehicle: Vehicle): number;

/**
 * This function retrieves the model ID of a vehicle as an [[int]]eger value from its name.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelFromName|MTASA Wiki}
 * @param name A string containing the name of the vehicle.  {{All Vehicle Types}}
 * @return Returns an [[int]]eger if the name exists, ''false'' otherwise.
 * * If you use this function on vehicles with shared names, such as "police", it will return the
 * earliest occurrence of that vehicle's ID.
 */
export function getVehicleModelFromName(name: string): number;

/**
 * This function returns a string containing the name of the vehicle
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleName|MTASA Wiki}
 * @param theVehicle the vehicle you want to get the name of.
 * @return Returns a string containing the requested vehicle's name, or ''false'' if the vehicle
 * passed to the function is invalid.
 */
export function getVehicleName(theVehicle: Vehicle): string;

/**
 * Gets the name of a vehicle by its model ID.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleNameFromModel|MTASA Wiki}
 * @param model This is the vehicle model ID. See vehicle IDs to see what values will return names.
 * @return Returns the name of the vehicle if the model ID was valid, empty string
 * otherwise<ref>https://bugs.multitheftauto.com/view.php?id=8523</ref>.
 */
export function getVehicleNameFromModel(model: number): string;

/**
 * This function gets the player sitting/trying to enter the specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleOccupant|MTASA Wiki}
 * @param theVehicle the vehicle of which you wish to retrieve the driver or a passenger.
 * {{OptionalArg}}
 * @param seat the seat where the player is sitting (0 for driver, 1+ for passengers).
 * @default 0
 * @return Returns the [[player]] sitting in the vehicle, or ''false'' if the seat is unoccupied or
 * doesn't exist.
 */
export function getVehicleOccupant(theVehicle: Vehicle, seat: number): Player;

/**
 * This function gets all peds sitting in the specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleOccupants|MTASA Wiki}
 * @param theVehicle the vehicle of which you wish to retrieve the occupants.
 * @return Returns a [[table]] with seat ID as an index and the occupant as an element like this:
 * table[seat] = occupant
 * * Returns ''false'' if an invalid vehicle was passed or if the vehicle has no seats (like a
 * trailer)
 * * <div style='font-weight: bold;background:blue;color:white;padding:2px;
 * padding-left:8px;'>COUNTING PLAYERS IN A VEHICLE</div>
 * * <div style='border: 2px solid blue;padding: 5px;'>Don't use an ipairs loop with the table
 * returned by this function. It will skip the driver, as ipairs starts at 1 and the driver seat is ID 0.
 * And if there's an empty seat, ipairs will stop looping. You should use a pairs loop instead.
 * * <syntaxhighlight lang="lua">
 * * local counter = 0
 * * for seat, player in pairs(getVehicleOccupants(pseudoVehicle)) do
 * *     counter = counter + 1
 * * end
 * * outputDebugString("Players in your vehicle: ".. counter)
 * * </syntaxhighlight>
 * * </div>
 */
export function getVehicleOccupants(theVehicle: Vehicle): Table;

/**
 * This function is used to find out the current state of the override-lights setting of a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleOverrideLights|MTASA Wiki}
 * @param theVehicle : the vehicle you wish to retrieve the override lights setting of.
 * @return Returns an integer value: 0 (No override), 1 (Force off) or 2 (Force on).
 */
export function getVehicleOverrideLights(theVehicle: Vehicle): number;

/**
 * This function gets the current paintjob on the specified vehicle. <br />
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclePaintjob|MTASA Wiki}
 * @param theVehicle : the vehicle you wish to get the paintjob of.
 * @return Returns an integer representing the current paintjob on the vehicle. <br />
 * * * '''0''': The first paintjob
 * * * '''1''': The second paintjob
 * * * '''2''': The third paintjob
 * * * '''3''': Default paintjob (no paintjob)
 * * {{Note|Always returns 3 if paintjobs are not supported for the vehicle.}}
 */
export function getVehiclePaintjob(theVehicle: Vehicle): number;

/**
 * This function returns the current state of a specifed panel on the vehicle. A vehicle can have
 * up to 7 panels.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclePanelState|MTASA Wiki}
 * @param theVehicle the vehicle that you wish to know the panel state of.
 * @param panel an integer specifying the panel you want to know the state of. Not every vehicle
 * has every panel. Possible values are:
 * @return Returns an [[int]] indicating the state of the specified the panel. This is a value
 * between 0 and 3, with 0 indicating the panel is undamaged and 3 indicating it is very damaged.
 */
export function getVehiclePanelState(theVehicle: Vehicle, panel: number): number;

/**
 * This function is used to retrieve the text on the number plate of a specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclePlateText|MTASA Wiki}
 * @param theVehicle the vehicle that you wish to retrieve the plate text from.
 * @return Returns a ''string'' that corresponds to the plate on the text, ''false'' if a bad
 * argument was passed or if it is not a vehicle. Every vehicle (including planes, boats, etc.) has a
 * numberplate, even if it's not visible.
 */
export function getVehiclePlateText(theVehicle: Vehicle): string;

/**
 * This function get the parameters of a vehicles siren.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleSirenParams|MTASA Wiki}
 * @param theVehicle The vehicle to get the siren parameters of
 * @return Returns a ''table'' with the siren count, siren type and a sub table for the four flags.
 * False otherwise.
 * * <syntaxhighlight lang="lua">
 * * [int]   SirenParams.SirenCount
 * * [int]   SirenParams.SirenType
 * * [table] SirenParams.Flags
 * *  [bool] SirenParams.Flags["360"]
 * *  [bool] SirenParams.Flags.DoLOSCheck
 * *  [bool] SirenParams.Flags.UseRandomiser
 * *  [bool] SirenParams.Flags.Silent
 * * </syntaxhighlight>
 */
export function getVehicleSirenParams(theVehicle: Vehicle): Table;

/**
 * This function gets the properties of a vehicle's sirens.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleSirens|MTASA Wiki}
 * @param theVehicle The vehicle to get siren information of.
 * @return If the vehicle is invalid, it returns ''false''. Otherwise, returns a ''table'' with sub
 * tables containing the properties of each siren point in the following manner:
 * * <syntaxhighlight lang="lua">
 * * [float]   SirenData[sirenPoint].x
 * * [float]   SirenData[sirenPoint].y
 * * [float]   SirenData[sirenPoint].z
 * * [int]     SirenData[sirenPoint].Red
 * * [int]     SirenData[sirenPoint].Green
 * * [int]     SirenData[sirenPoint].Blue
 * * [int]     SirenData[sirenPoint].Alpha
 * * [int]     SirenData[sirenPoint].Min_Alpha
 * * </syntaxhighlight>
 */
export function getVehicleSirens(theVehicle: Vehicle): Table;

/**
 * This function returns whether the sirens are turned on for the specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleSirensOn|MTASA Wiki}
 * @param theVehicle The vehicle that will be checked.
 * @return Returns ''true'' if the sirens are turned on for the specified vehicle, ''false'' if the
 * sirens are turned off for the specified vehicle, if the vehicle doesn't have sirens or if invalid
 * arguments are specified.
 */
export function getVehicleSirensOn(theVehicle: Vehicle): boolean;

/**
 * This function is used to get the vehicle being towed by another.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleTowedByVehicle|MTASA Wiki}
 * @param theVehicle : The vehicle you wish to get the towed vehicle from.
 * @return Returns the vehicle that ''theVehicle'' is towing, ''false'' if it isn't towing a
 * vehicle.
 */
export function getVehicleTowedByVehicle(theVehicle: Vehicle): Vehicle;

/**
 * This function is used to get the vehicle that is towing another.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleTowingVehicle|MTASA Wiki}
 * @param theVehicle : the vehicle being towed.
 * @return * The vehicle that ''theVehicle'' is being towed by.
 * * * ''false'' if it isn't being towed.
 */
export function getVehicleTowingVehicle(theVehicle: Vehicle): Vehicle;

/**
 * This function gets the position of a vehicle's turret, if it has one. Vehicles with turrets
 * include firetrucks and tanks.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleTurretPosition|MTASA Wiki}
 * @param turretVehicle : The vehicle whose turret position you want to retrieve. This should be a
 * vehicle with a turret.
 * @return Returns two [[float]]s for the X (horizontal) and Y (vertical) axis rotation
 * respectively. These values are in radians. The function will return ''0, 0'' if the vehicle is not a vehicle
 * with a turret.
 */
export function getVehicleTurretPosition(turretVehicle: Vehicle): LuaMultiReturn<[number, number]>;

/**
 * This function retrieves the type of a vehicle (such as if it is a car or a boat).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleType|MTASA Wiki}
 * @return Returns a ''string'' with vehicle type or ''false'' if an invalid modelID has been
 * supplied, or an empty string if the vehicle is blocked internally (some trailers).
 * * Possible strings returned:
 * * {{VehicleTypes}}
 */
export function getVehicleType(theVehicle: Vehicle): string;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleUpgradeOnSlot|MTASA Wiki}
 * @param theVehicle : The vehicle whose upgrade you want to retrieve.
 * @param slot : The slot id of the upgrade. (Upgrade list ordered by slot number)
 * @return Returns an ''integer'' with the upgrade on the slot if correct arguments were passed,
 * ''false'' otherwise.
 */
export function getVehicleUpgradeOnSlot(theVehicle: Vehicle, slot: number): number;

/**
 * This function returns the name of an upgrade slot name (e.g. roof, spoiler).
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleUpgradeSlotName|MTASA Wiki}
 * @return Returns a ''string'' with the slot name if a valid slot or upgrade ID was given,
 * ''false'' otherwise.
 */
export function getVehicleUpgradeSlotName(slot: number): string;

/**
 * This function returns a table of all the upgrades on a specifed vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleUpgrades|MTASA Wiki}
 * @param theVehicle The vehicle you wish to retrieve the upgrades of.
 * @return Returns a ''table'' of all the upgrades on each slot of a vehicle, which may be empty,
 * or ''false'' if a valid vehicle is not passed.
 */
export function getVehicleUpgrades(theVehicle: Vehicle): Table;

/**
 * This function gets the variant of a specified vehicle. In GTA SA some vehicles are different for
 * example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor
 * bike. For the default GTA SA variant list see: [[Vehicle variants]]
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleVariant|MTASA Wiki}
 * @param theVehicle A handle to the vehicle that you want to get the variant of.
 * @return On success:
 * * * '''int''': An integer for the first vehicle variant see [[Vehicle variants]]
 * * * '''int''': An integer for the second vehicle variant see [[Vehicle variants]]
 * * On failure:
 * * * '''bool''': False because the specified vehicle didn't exist
 */
export function getVehicleVariant(theVehicle: Vehicle): LuaMultiReturn<[number, number]>;

/**
 * This function returns the current states of all the wheels on the vehicle.
 * No vehicles have more than 4 wheels, if they appear to they will be duplicating other wheels.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleWheelStates|MTASA Wiki}
 * @param theVehicle A handle to the vehicle that you wish to know the wheel states of.
 * @return Returns 4 [[int]]s indicating the states of the wheels (front left, rear left, front
 * right, rear right). These values can be:
 * * * '''0:''' Inflated
 * * * '''1:''' Flat
 * * * '''2:''' Fallen off
 * * * '''3:''' Collisionless
 */
export function getVehicleWheelStates(theVehicle: Vehicle): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function will check if a train or tram is derailable.
 * @see {@link https://wiki.multitheftauto.com/wiki/isTrainDerailable|MTASA Wiki}
 * @param vehicleToCheck The vehicle you wish to check.
 * @return Returns ''true'' if the train is derailable, ''false'' otherwise.
 */
export function isTrainDerailable(vehicleToCheck: Vehicle): boolean;

/**
 * This function will check if a train or tram is derailed.
 * @see {@link https://wiki.multitheftauto.com/wiki/isTrainDerailed|MTASA Wiki}
 * @param vehicleToCheck the vehicle that you wish to check is derailed.
 * @return Returns ''true'' if the train is derailed, ''false'' if the train is still on the rails
 */
export function isTrainDerailed(vehicleToCheck: Vehicle): boolean;

/**
 * This function allows you to determine whether a vehicle is blown or still intact.
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleBlown|MTASA Wiki}
 * @param theVehicle The vehicle that you want to obtain the blown status of.
 * @return Returns ''true'' if the vehicle specified has blown up, ''false'' if it is still intact
 * or the vehicle specified is invalid.
 */
export function isVehicleBlown(theVehicle: Vehicle): boolean;

/**
 * This function checks if a vehicle is damage proof (set with [[setVehicleDamageProof]]).
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleDamageProof|MTASA Wiki}
 * @param theVehicle the vehicle whose invincibility status we want to check.
 * @return Returns ''true'' if the vehicle is damage proof, ''false'' if it isn't or if invalid
 * arguments were passed.
 */
export function isVehicleDamageProof(theVehicle: Vehicle): boolean;

/**
 * This will tell you if a vehicle's petrol tank is explodable.
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleFuelTankExplodable|MTASA Wiki}
 * @param theVehicle The vehicle that you want to obtain the fuel tank status of.
 * @return Returns ''true'' if the specified vehicle is valid and its fuel tank is explodable,
 * ''false'' otherwise.
 */
export function isVehicleFuelTankExplodable(theVehicle: Vehicle): boolean;

/**
 * This will tell you if a vehicle is locked.
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleLocked|MTASA Wiki}
 * @param theVehicle The vehicle that you want to obtain the locked status of.
 * @return Returns ''true'' if the vehicle specified is locked, ''false'' if is unlocked or the
 * vehicle specified is invalid.
 */
export function isVehicleLocked(theVehicle: Vehicle): boolean;

/**
 * Checks to see if a vehicle has contact with the ground.
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleOnGround|MTASA Wiki}
 * @param theVehicle The vehicle you wish to check.
 * @return Returns ''true'' if vehicle is on the ground, ''false'' if it is not.
 */
export function isVehicleOnGround(theVehicle: Vehicle): boolean;

/**
 * This function will get the taxi light state of a taxi (vehicle IDs 420 and 438)
 * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleTaxiLightOn|MTASA Wiki}
 * @param taxi The vehicle element of the taxi that you wish to get the light state of.
 * @return Returns ''true'' if the light is on, ''false'' otherwise.
 */
export function isVehicleTaxiLightOn(taxi: Vehicle): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/removeVehicleUpgrade|MTASA Wiki}
 * @param theVehicle : The element representing the vehicle you wish to remove the upgrade from
 * @param upgrade : The ID of the upgrade you wish to remove.
 * @return Returns ''true'' if the upgrade was successfully removed from the vehicle, otherwise
 * ''false''.
 */
export function removeVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

/**
 * This function will set a train or tram as derailable. This is, if it can derail when it goes
 * above the maximum speed.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTrainDerailable|MTASA Wiki}
 * @param derailableVehicle The vehicle that you wish to set derailable.
 * @param derailable whether the train or tram is derailable. True as derailable, False as
 * non-derailable.
 * @return Returns ''true'' if the state was successfully set, ''false'' otherwise.
 */
export function setTrainDerailable(derailableVehicle: Vehicle, derailable: boolean): boolean;

/**
 * This function will set a train or tram as derailed.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTrainDerailed|MTASA Wiki}
 * @param vehicleToDerail The vehicle that you wish to derail.
 * @param derailed whether the train is derailed.
 * @return Returns ''true'' if the state was successfully set
 */
export function setTrainDerailed(vehicleToDerail: Vehicle, derailed: boolean): boolean;

/**
 * Sets the direction in which a train or tram drives over the rails (clockwise or
 * counterclockwise).
 * @see {@link https://wiki.multitheftauto.com/wiki/setTrainDirection|MTASA Wiki}
 * @param train the train whose direction to change.
 * @param clockwise if true, will make the train go clockwise. If false, makes it go
 * counterclockwise.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setTrainDirection(train: Vehicle, clockwise: boolean): boolean;

/**
 * Sets the position the train is currently on the track
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setTrainPosition|MTASA Wiki}
 * @param train the train of which to set the track
 * @param position the position along the track (0 - 18107 a complete way round)
 * @return Returns ''true'' if the train position was set, ''false'' otherwise.
 */
export function setTrainPosition(train: Vehicle, position: number): boolean;

/**
 * Sets the on-track speed of a train.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTrainSpeed|MTASA Wiki}
 * @param train the train whose speed to change.
 * @param speed the new on-track speed of the train. A positive value will make it go clockwise, a
 * negative value counter clockwise.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setTrainSpeed(train: Vehicle, speed: number): boolean;

/**
 * This function will set the color of a vehicle using either a RGB format, or the [[Vehicle
 * Colors|standard San Andreas color IDs.]] Vehicles can have up to 4 colors, most of the vehicles have 2
 * colors only.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleColor|MTASA Wiki}
 * @return Returns ''true'' if vehicle's color was set, ''false'' if an invalid vehicle or invalid
 * colors were specified.
 */
export function setVehicleColor(
    veh: Vehicle,
    r1: number,
    g1: number,
    b1: number,
    r2: number,
    g2: number,
    b2: number,
    r3: number,
    g3: number,
    b3: number,
    r4: number,
    g4: number,
    b4: number
): boolean;

/**
 * This functions makes a vehicle damage proof, so it won't take damage from bullets, hits,
 * explosions or fire. A damage proof's vehicle health can still be changed via script.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDamageProof|MTASA Wiki}
 * @param theVehicle The vehicle you wish to make damage proof.
 * @param damageProof true is damage proof, false is damageable.
 * @return Returns ''true'' if the vehicle was set damage proof succesfully, ''false'' if the
 * arguments are invalid or it failed.
 */
export function setVehicleDamageProof(theVehicle: Vehicle, damageProof: boolean): boolean;

/**
 * This function sets how much a vehicle's door is open. Doors include the boot/trunk and the
 * bonnet of the vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDoorOpenRatio|MTASA Wiki}
 * @param theVehicle The vehicle that you wish to change the door open ratio of.
 * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left),
 * 5 (rear right)
 * @param ratio The ratio value, ranging from 0 (fully closed) to 1 (fully open).  {{OptionalArg}}
 * @param time The number of milliseconds the door should take to reach the value you have
 * specified. A value of 0 will change the door open ratio instantly.
 * @default 0
 * @return Returns ''true'' if the door open ratio was successfully set, ''false'' if invalid
 * arguments are passed.
 */
export function setVehicleDoorOpenRatio(theVehicle: Vehicle, door: number, ratio: number, time?: number): boolean;

/**
 * This function sets the state of the specified door on a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDoorState|MTASA Wiki}
 * @param theVehicle The vehicle that you wish to change the door state of.
 * @param door An integer representing which door to set the state of. Valid values are:
 * @param state An integer representing the state to set the door to. Valid values are:
 * @return Returns ''true'' if the door state was successfully set, ''false'' otherwise.
 */
export function setVehicleDoorState(theVehicle: Vehicle, door: number, state: number): boolean;

/**
 * This function makes a vehicle's doors undamageable, so they won't fall off when they're hit.
 * Note that the vehicle '''has''' to be locked using [[setVehicleLocked]] for this setting to have any
 * effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDoorsUndamageable|MTASA Wiki}
 * @param theVehicle The vehicle of which you wish to set the car door damageability.
 * @param state A boolean denoting whether the vehicles doors are undamageable (true) or damageable
 * (false).
 * @return Returns ''true'' if the damageability state was successfully changed, ''false'' if
 * invalid arguments were passed.
 */
export function setVehicleDoorsUndamageable(theVehicle: Vehicle, state: boolean): boolean;

/**
 * This function turns a vehicle's engine on or off. Note that the engine will always be turned on
 * when someone enters the driver seat, unless you override that behaviour with scripts.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleEngineState|MTASA Wiki}
 * @param theVehicle : The vehicle you wish to change the engine state of.
 * @param engineState : A boolean value representing whether the engine will be turned on (true) or
 * off (false).
 * @return Returns ''true'' if the vehicle's engine state was successfully changed, ''false''
 * otherwise.
 */
export function setVehicleEngineState(theVehicle: Vehicle, engineState: boolean): boolean;

/**
 * This function changes the 'explodable state' of a vehicle's fuel tank, which toggles the ability
 * to blow the vehicle up by shooting the tank. This function will have no effect on vehicles with
 * tanks that cannot be shot in single player.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleFuelTankExplodable|MTASA Wiki}
 * @param theVehicle : The vehicle you wish to change the fuel tank explodable state of.
 * @param explodable : A boolean value representing whether or not the fuel tank will be explodable.
 * @return Returns ''true'' if the vehicle's fuel tank explodable state was successfully changed,
 * ''false'' otherwise.
 */
export function setVehicleFuelTankExplodable(theVehicle: Vehicle, explodable: boolean): boolean;

/**
 * This function is used to change the handling data of a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleHandling|MTASA Wiki}
 * @param theVehicle The vehicle you wish to set the handling of.
 * @param property The property you wish to set the handling of the vehicle to.  {{Note|For
 * functionality reasons suspension modification is disabled on monster trucks, trains, boats and trailers.}}
 * {{Handling Properties}}
 * @param value The value of the property you wish to set the handling of the vehicle to.
 * @return Returns ''true'' if the handling was set successfully, ''false'' otherwise. See below a
 * list of valid properties and their required values:
 */
export function setVehicleHandling(theVehicle: Element, property: string, value: any): boolean;

/**
 * This function will set the headlight color of a vehicle. valid Red Green and Blue arguments
 * range from 0-255
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleHeadLightColor|MTASA Wiki}
 * @param theVehicle The vehicle that you wish to set the headlight color of.
 * @param red An integer indicating the amount of red for the vehicles headlights
 * @param green An integer indicating the amount of green for the vehicles headlights
 * @param blue An integer indicating the amount of blue for the vehicles headlights
 * @return Returns ''true'' if vehicle's headlight color was set, ''false'' if an invalid vehicle
 * or invalid color ranges were specified for red,green or blue.
 */
export function setVehicleHeadLightColor(theVehicle: Vehicle, red: number, green: number, blue: number): boolean;

/**
 * This function is used to set the landing gear state of certain vehicles.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleLandingGearDown|MTASA Wiki}
 * @param theVehicle The vehicle of which you wish to set the landing gear state.
 * @param gearState A bool representing the state of the landing gear.  true represents a collapsed
 * landing gear, while false represents a disabled landing gear.
 * @return Returns ''true'' if the landing gear was set successfully, ''false'' otherwise.
 */
export function setVehicleLandingGearDown(theVehicle: Vehicle, gearState: boolean): boolean;

/**
 * This function sets the state of the light on the vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleLightState|MTASA Wiki}
 * @param theVehicle A handle to the vehicle that you wish to change the light state of.
 * @param light A whole number determining the individual light:
 * @param state A whole number determining the new state of the light. 0 represents normal lights,
 * and 1 represents broken lights.
 * @return Returns ''true'' if the light state was set successfully, ''false'' if invalid arguments
 * were passed to the function.
 */
export function setVehicleLightState(theVehicle: Vehicle, light: number, state: number): boolean;

/**
 * This function can be used to set the vehicle's doors to be locked or unlocked.  Locking a
 * vehicle restricts access to the vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleLocked|MTASA Wiki}
 * @param theVehicle The vehicle which you wish to change the lock status of
 * @param locked Boolean for the status you wish to set. Set true to lock, false to unlock
 * @return Returns ''true'' if the operation was successful, ''false'' otherwise.
 */
export function setVehicleLocked(theVehicle: Vehicle, locked: boolean): boolean;

/**
 * This function changes the light overriding setting on a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleOverrideLights|MTASA Wiki}
 * @param theVehicle : The vehicle you wish to change the override lights setting of.
 * @param value : A whole number representing the state of the lights:
 * @return Returns ''true'' if the vehicle's lights setting was changed. Otherwise ''false''.
 */
export function setVehicleOverrideLights(theVehicle: Vehicle, value: number): boolean;

/**
 * This function changes the paintjob on the specified vehicle. <br/>
 * See [[Paintjob|paintjob]] for list of supported vehicles.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclePaintjob|MTASA Wiki}
 * @param theVehicle : The vehicle you wish to change the paintjob of.
 * @param value : A whole number representing the new paintjob id. Ranges from 0 up to 3.
 * @return Returns ''true'' if the vehicle's paintjob was changed. Otherwise ''false''.
 */
export function setVehiclePaintjob(theVehicle: Vehicle, value: number): boolean;

/**
 * This function allows you to change the state of one of the six panels vehicle's can have. When
 * executed on the server-side resources, the damage will be synched for all players, whereas the change
 * is only client-side if the function is used in a client resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclePanelState|MTASA Wiki}
 * @param theVehicle The vehicle you would like to modify the panel of.
 * @param panelID An ID specifying the part of the vehicle. Possible values are:
 * @param state How damaged the part is on the scale of 0 to 3, with 0 being undamaged and 3 being
 * very damaged. How this is manifested depends on the panel and the vehicle.
 * @return Returns ''true'' if the panel state has been updated, ''false'' otherwise
 */
export function setVehiclePanelState(theVehicle: Vehicle, panelID: number, state: number): boolean;

/**
 * This function can be used to set the numberplate text of a car.
 * }}
 * It now also changes the numberplate text of any vehicle that has visual numberplates.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclePlateText|MTASA Wiki}
 * @param theVehicle the vehicle whose numberplate you want to change.
 * @param numberplate a string that will go on the number plate of the car (max 8 characters).
 * @return Returns ''true'' if the numberplate was changed successfully, or ''false'' if invalid
 * arguments were passed
 */
export function setVehiclePlateText(theVehicle: Element, numberplate: string): boolean;

/**
 * This function changes the properties of a vehicles siren point.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleSirens|MTASA Wiki}
 * @param theVehicle The vehicle to modify
 * @param sirenPoint The siren point to modify
 * @param posX The x position of this siren point from the center of the vehicle
 * @param posY The y position of this siren point from the center of the vehicle
 * @param posZ The z position of this siren point from the center of the vehicle
 * @param red The amount of red from 0 to 255
 * @param green The amount of green from 0 to 255
 * @param blue The amount of blue from 0 to 255
 * @param alpha The alpha of the siren from 0 to 255
 * @default 255
 * @param minAlpha The minimum alpha of the light during day time
 * @default 0.0
 * @return Returns ''true'' if the siren point was successfully changed on the vehicle, ''false''
 * otherwise.
 */
export function setVehicleSirens(
    theVehicle: Vehicle,
    sirenPoint: number,
    posX: number,
    posY: number,
    posZ: number,
    red: number,
    green: number,
    blue: number,
    alpha: number,
    minAlpha: number
): boolean;

/**
 * This function changes the state of the sirens on the specified vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleSirensOn|MTASA Wiki}
 * @param theVehicle The vehicle that will have the sirens set
 * @param sirensOn The state to set the sirens to
 * @return Returns ''true'' if the sirens are set for the specified vehicle, ''false'' if the
 * sirens can't be set for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments
 * are specified.
 */
export function setVehicleSirensOn(theVehicle: Vehicle, sirensOn: boolean): boolean;

/**
 * This function will set the taxi light on in a taxi (vehicle ID's 420 and 438)
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleTaxiLightOn|MTASA Wiki}
 * @param taxi The vehicle element of the taxi that you wish to turn the light on.
 * @param LightState whether the light is on. True for on, False for off.
 * @return Returns ''true'' if the state was successfully set, ''false'' otherwise.
 */
export function setVehicleTaxiLightOn(taxi: Vehicle, LightState: boolean): boolean;

/**
 * This function sets the position of a vehicle's turret, if it has one. This can be used to
 * influence the turret's rotation, so it doesn't follow the camera. Vehicles with turrets include firetrucks
 * and tanks.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleTurretPosition|MTASA Wiki}
 * @param turretVehicle : The vehicle whose turret position you want to retrieve. This should be a
 * vehicle with a turret.
 * @param positionX : The horizontal position of the turret. In radians
 * @param positionY : The vertical position of the turret. In radians
 * @return Returns a ''true'' if a valid vehicle element and valid positions were passed, ''false''
 * otherwise.
 */
export function setVehicleTurretPosition(turretVehicle: Vehicle, positionX: number, positionY: number): boolean;

/**
 * This function sets the variant of a specified vehicle. In GTA SA some vehicles are different for
 * example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor
 * bike. For the default GTA SA variant list see: [[Vehicle variants]]
 *  {{Tip|Both variant arguments need to be supplied, otherwise random ones will be picked.}}
 *  {{Tip|If you only want one variant, set ''''variant2'''' to ''255''. If you want no variants,
 * then set both ''''variant1'''' and ''''variant2'''' to ''255''}}
 *  {{Note|The fairings on the NRG-500 and BF-400 are both variants, so unless you explicitly ask
 * for 3 or 4, your bike will have no fairings which some people may find offensive.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleVariant|MTASA Wiki}
 * @param theVehicle A handle to the vehicle that you want to get the variant of.  Both arguments
 * need to be supplied, otherwise random variants will be picked.
 * @param variant1 : An integer for the first variant see Vehicle variants
 * @param variant2 : An integer for the second variant see Vehicle variants
 * @return On success:
 * * * '''bool''': Returns true as the vehicle variants were successfully set.
 * * On failure:
 * * * '''bool''': False because the specified vehicle didn't exist or specified variants were
 * invalid.
 */
export function setVehicleVariant(theVehicle: Vehicle, variant1?: number, variant2?: number): boolean;

/**
 * This function sets the state of wheels on the vehicle.
 * Internally, no vehicles have more than 4 wheels. If they appear to, they will be duplicating
 * other wheels.
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleWheelStates|MTASA Wiki}
 * @param theVehicle A handle to the vehicle that you wish to change the wheel states of.
 * @param frontLeft A whole number representing the wheel state (-1 for no change)
 * @param rearLeft A whole number representing the wheel state (-1 for no change)
 * @default -1
 * @param frontRight A whole number representing the wheel state (-1 for no change)
 * @default -1
 * @param rearRight A whole number representing the wheel state (-1 for no change)
 * @default -1
 * @return Returns a boolean value ''true'' or ''false'' that tells you if it was successful or not.
 */
export function setVehicleWheelStates(
    theVehicle: Vehicle,
    frontLeft: number,
    rearLeft: number,
    frontRight: number,
    rearRight: number,
): boolean;
