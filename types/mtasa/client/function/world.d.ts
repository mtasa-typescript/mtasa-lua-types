/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

/**
 * Creates a SWAT rope like that of the rope in single player used by SWAT Teams abseiling from the
 * Police Maverick.
 * @see {@link https://wiki.multitheftauto.com/wiki/createSWATRope|MTASA Wiki}
 * @param duration the amount in miliseconds the rope will be there before falling to the ground.
 * @return
 */
export function createSWATRope(fx: number, fy: number, fZ: number, duration: number): boolean;

/**
 * This function will tell you if the birds are enabled or disabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBirdsEnabled|MTASA Wiki}
 * @return Returns ''true'' if the birds are enabled or ''false'' if the birds are disabled.
 */
export function getBirdsEnabled(): boolean;

/**
 * This function outputs the bounding box of a garage.
 * @see {@link https://wiki.multitheftauto.com/wiki/getGarageBoundingBox|MTASA Wiki}
 * @param garageID The Garage|garage ID that represents the garage door that is being checked.
 * @return Returns four ''float''s indicating the bounding box of the garage.
 * * ''Western X position, Eastern X position, Southern Y position, Northern Y position,, false
 * when invalid garageID was provided.''
 */
export function getGarageBoundingBox(garageID: number): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function outputs X, Y and Z position of given garage.
 * @see {@link https://wiki.multitheftauto.com/wiki/getGaragePosition|MTASA Wiki}
 * @param garageID The Garage|garage ID that represents the garage door that is being checked.
 * @return Returns three ''float''s indicating the position of the garage, ''x'', ''y'' and ''z''
 * respectively, false when garageID was invalid.
 */
export function getGaragePosition(garageID: number): LuaMultiReturn<[number, number, number]>;

/**
 * This function outputs the size of garage.
 * @see {@link https://wiki.multitheftauto.com/wiki/getGarageSize|MTASA Wiki}
 * @param garageID The Garage|garage ID that represents the garage door that is being checked.
 * @return Returns three ''float''s indicating the size of the garage, false if an invalid garageID
 * has been provided
 */
export function getGarageSize(garageID: number): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the Z level of the highest ground below a point.
 * It is required that the point is near enough to the local player so that it's within the area
 * where collision data is loaded. If this is not the case, an incorrect position will be returned.
 * @see {@link https://wiki.multitheftauto.com/wiki/getGroundPosition|MTASA Wiki}
 * @param x A floating point number representing the X world coordinate of the point.
 * @param y A floating point number representing the Y world coordinate of the point.
 * @param z A floating point number representing the Z world coordinate of the point.
 * @return Returns a float with the highest ground-level Z coord if parameters are valid, ''0'' if
 * the point you tried to test is outside the loaded world map, ''false'' otherwise.
 */
export function getGroundPosition(x: number, y: number, z: number): number;

/**
 * This function will tell you if interior furniture are enabled or disabled in a specified room ID.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getInteriorFurnitureEnabled|MTASA Wiki}
 * @return Returns ''true'' if interior furniture is enabled or ''false'' if interior furniture is
 * disabled.
 */
export function getInteriorFurnitureEnabled(roomID: number): boolean;

/**
 * This function checks to see if the music played by default in clubs is disabled or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/getInteriorSoundsEnabled|MTASA Wiki}
 * @return Returns true if music is playing, returns false if music is not playing.
 */
export function getInteriorSoundsEnabled(): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getNearClipDistance|MTASA Wiki}
 * @return This function returns a ''[[float]]'' containing the actual near clip distance.
 */
export function getNearClipDistance(): number;

/**
 * This function resets near clip distance set by [[setNearClipDistance]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetNearClipDistance|MTASA Wiki}
 * @return *'''boolean:''' always returns '''true'''
 */
export function resetNearClipDistance(): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getPedsLODDistance|MTASA Wiki}
 * @return This function returns a ''[[float]]'' containing the peds LOD distance.
 */
export function getPedsLODDistance(): number;

/**
 * [[File:Peds Lod Distance = 60.png|200px|thumb|right|60 units]]
 * [[File:Peds Lod Distance = 100.png|200px|thumb|right|100 units]]
 * [[File:Peds Lod Distance = 500.png|200px|thumb|right|500 units]]
 * @see {@link https://wiki.multitheftauto.com/wiki/setPedsLODDistance|MTASA Wiki}
 * @param distance the new peds LOD distance. It must be between 0 and 500. (Default for
 * high_detail_peds on is 500, when off, it is 60).
 * @return This function returns ''true'' if the argument is valid. Returns ''false'' otherwise.
 */
export function setPedsLODDistance(distance: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/resetPedsLODDistance|MTASA Wiki}
 * @return Returns ''true'' if the peds LOD distance was reset, ''false'' otherwise.
 */
export function resetPedsLODDistance(): boolean;

/**
 * This function gets the Z level of the lowest roof above a point.
 * It is required that the point is near enough to the local player so that it's within the area
 * where collision data is loaded.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/getRoofPosition|MTASA Wiki}
 * @param x : A floating point number representing the X world coordinate of the point.
 * @param y : A floating point number representing the Y world coordinate of the point.
 * @param z : A floating point number representing the Z world coordinate of the point.
 * @return Returns a [[float]] with the lowest roof-level Z coord if parameters are valid,
 * ''false'' if the point you tried to test is outside the loaded world map.
 */
export function getRoofPosition(x: number, y: number, z: number): number;

/**
 * This function gets the screen position of a point in the world. This is useful for attaching 2D
 * gui elements to parts of the world (e.g. players) or detecting if a point is on the screen (though
 * it does not check if it is actually visible, you should use [[processLineOfSight]] for that).
 * @see {@link https://wiki.multitheftauto.com/wiki/getScreenFromWorldPosition|MTASA Wiki}
 * @param x A float value indicating the x position in the world.
 * @param y A float value indicating the y position in the world.
 * @param z A float value indicating the z position in the world.  {{OptionalArg}}  {{New
 * feature/item|3|1.0||
 * @param edgeTolerance A float value indicating the distance the position can be off screen before
 * the function returns false. Note: its clamped down on both axies to the size of screen at the given
 * axis*10
 * @default 0.0
 * @param relative A boolean value that indicates if edgeTolerance is in pixels false, or relative
 * to the screen size true.  }}
 * @default true
 * @return Returns two ''x'', ''y'' [[float]]s indicating the screen position and [[float]]
 * distance between screen and given position if successful, ''false'' otherwise.
 */
export function getScreenFromWorldPosition(
    x: number,
    y: number,
    z: number,
    edgeTolerance?: number,
    relative?: boolean,
): LuaMultiReturn<[number, number, number]>;

/**
 * Returns the distance of vehicles LOD.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclesLODDistance|MTASA Wiki}
 * @return
 */
export function getVehiclesLODDistance(): LuaMultiReturn<[number, number]>;

/**
 * This function allows you to retrieve the world position corresponding to a 2D position on the
 * screen, at a certain depth.
 * If you want to detect what element is at a particular point on the screen, use
 * [[processLineOfSight]] between the camera position and the position returned from this function when passed a high
 * depth value (100 or so, depending how far away you want to detect elements at).
 * As expected, setting 0 as the distance will cause the point retrived to be within the camera
 * itself. That means that drawing any 3D thing in that point would result in it not being visible.
 * Depending on the camera near clip distance, however, the minimum distance to be able to view it can vary.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWorldFromScreenPosition|MTASA Wiki}
 * @param x A float value indicating the x position on the screen, in pixels.
 * @param y A float value indicating the y position on the screen, in pixels.
 * @param depth A float value indicating the distance from the camera of the point whose
 * coordinates we are retrieving, in units.
 * @return Returns three ''x'', ''y'', ''z'' [[float]]s indicating the world position if
 * successful, ''false'' otherwise.
 */
export function getWorldFromScreenPosition(
    x: number,
    y: number,
    depth: number,
): LuaMultiReturn<[number, number, number]>;

/**
 * This function allows you to check if some background sound effects are enabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/isAmbientSoundEnabled|MTASA Wiki}
 * @param theType The type of ambient sound to test. Can be either gunfire or general.
 * @return Returns ''true'' if the ambient sound is enabled, ''false'' if it is disabled or invalid
 * values were passed.
 */
export function isAmbientSoundEnabled(theType: string): boolean;

/**
 * This function checks if there are obstacles between two points of the game world, optionally
 * ignoring certain kinds of elements. Use [[processLineOfSight]] if you want more information about what
 * the ray hits.
 * @see {@link https://wiki.multitheftauto.com/wiki/isLineOfSightClear|MTASA Wiki}
 * @param startX The first points world X coordinate.
 * @param startY The first points world Y coordinate.
 * @param startZ The first points world Z coordinate.
 * @param endX The second points world X coordinate.
 * @param endY The second points world Y coordinate.
 * @param endZ The second points world Z coordinate.  {{OptionalArg}}
 * @param checkBuildings Allow the line of sight to be blocked by GTAs internally placed buildings,
 * i.e. the world map.
 * @default true
 * @param checkVehicles Allow the line of sight to be blocked by Vehicle|vehicles.
 * @default true
 * @param checkPeds Allow the line of sight to be blocked by peds, i.e. Player|players.
 * @default true
 * @param checkObjects Allow the line of sight to be blocked by Object|objects.
 * @default true
 * @param checkDummies Allow the line of sight to be blocked by GTAs internal dummies.  These are
 * not used in the current MTA version so this argument can be set to false.
 * @default true
 * @param seeThroughStuff Allow the line of sight to pass through collision materials that have
 * this flag enabled (By default material IDs 52, 55 and 66 which are some fences). This flag originally
 * allows some objects to be walked on but you can shoot throug them.
 * @default false
 * @param ignoreSomeObjectsForCamera Allow the line of sight to pass through objects that have (K)
 * property enabled in object.dat data file. (i.e. Most dynamic objects like boxes or barrels)
 * @default false
 * @param ignoredElement Allow the line of sight to pass through a certain specified element.
 * @default nil
 * @return Returns ''true'' if the line between the specified points is clear, ''false'' if there's
 * an obstacle or if invalid parameters are passed.
 */
export function isLineOfSightClear(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    checkBuildings: boolean,
    checkVehicles: boolean,
    checkPeds: boolean,
    checkObjects: boolean,
    checkDummies: boolean,
    seeThroughStuff: boolean,
    ignoreSomeObjectsForCamera: boolean,
    ignoredElement: Element,
): boolean;

/**
 * This function allows you to check if certain world sound effects have not been disabled by
 * [[setWorldSoundEnabled]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isWorldSoundEnabled|MTASA Wiki}
 * @return Returns ''true'' if the world sounds are enabled, ''false'' if they are disabled or
 * invalid values were passed.
 */
export function isWorldSoundEnabled(group: number, index: number): boolean;

/**
 * Checks if a special world property (cheat) is enabled or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isWorldSpecialPropertyEnabled|MTASA Wiki}
 * @param propname the name of the property to retrieve. Possible values are listed on
 * SetWorldSpecialPropertyEnabled.
 * @return Returns ''true'' if the property is enabled, ''false'' if it is disabled or the
 * specified property name is invalid.
 */
export function isWorldSpecialPropertyEnabled(propname: string): boolean;

/**
 * This function casts a ray between two points in the world, and tells you information about the
 * point that was hit, if any. The two positions '''must''' be within the local player's draw distance
 * as the collision data is not loaded outside this area, and the call will just fail as if the ray
 * didn't hit.
 * This function is relatively expensive to call, so over use of this in scripts may have a
 * detrimental effect on performance.
 * This function is useful for checking for collisions and for editor-style scripts. If you wish to
 * find what element is positioned at a particular point on the screen, use this function combined
 * with [[getWorldFromScreenPosition]]. If you wish to just know if something is hit, and don't care about
 * what or where was hit, use [[isLineOfSightClear]].
 * @see {@link https://wiki.multitheftauto.com/wiki/processLineOfSight|MTASA Wiki}
 * @param startX The start x position
 * @param startY The start y position
 * @param startZ The start z position
 * @param endX The end x position
 * @param endY The end y position
 * @param endZ The end z position  {{OptionalArg}}
 * @param checkBuildings Allow the line of sight to be blocked by GTAs internally placed buildings,
 * i.e. the world map.
 * @default true
 * @param checkVehicles Allow the line of sight to be blocked by Vehicle|vehicles.
 * @default true
 * @param checkPlayers Allow the line of sight to be blocked by Player|players.
 * @default true
 * @param checkObjects Allow the line of sight to be blocked by Object|objects.
 * @default true
 * @param checkDummies Allow the line of sight to be blocked by GTAs internal dummies.  These are
 * not used in the current MTA version so this argument can be set to false.
 * @default true
 * @param seeThroughStuff Allow the line of sight pass through collision materials that have this
 * flag enabled (By default material IDs 52, 55 and 66 which are some fences that you can shoot throug
 * but still walk on them).
 * @default false
 * @param ignoreSomeObjectsForCamera Allow the line of sight to pass through objects that have (K)
 * property enabled in object.dat data file. (i.e. Most dynamic objects like boxes or barrels)
 * @default false
 * @param shootThroughStuff Allow the line of sight to pass through collision materials that have
 * this flag enabled (By default material IDs 28, 29, 31, 32, 33, 74, 75, 76, 77, 78, 79, 96, 97, 98,
 * 99, 100 which are exclusively sand / beach or underwater objects).
 * @default false
 * @param ignoredElement Allow the line of sight to pass through a certain specified element. This
 * is usually set to the object you are tracing from so it does not interfere with the results.
 * @default nil
 * @return *'''hit:''' ''true'' if there is a collision, ''false'' otherwise
 * * The other values are only filled if there is a collision, they contain ''nil'' otherwise
 * * *'''hitX, hitY, hitZ:''' collision position
 * * *'''hitElement:''' the MTA element hit if any, ''nil'' otherwise
 * * *'''normalX, normalY, normalZ:''' the normal of the surface hit
 * * *'''material:''' an integer representing the [[Material IDs|GTASA material ID]] of the surface
 * hit when applicable (world, objects)
 * * *'''lighting:''' a float between 0 (fully dark) and 1 (bright) representing the amount of
 * light that the hit building surface will transfer to peds or vehicles that are in contact with it. The
 * value can be affected by the game time of day, usually with a lower (darker) value being returned
 * during the night.
 * * *'''piece:''' an integer representing the part of the element hit if hitElement is a vehicle
 * or a ped/player, ''0'' otherwise.
 * * **For a ped/player, piece represents the body part hit:
 * * {{BodyParts}}
 * * **For vehicles, piece represents the vehicle part hit:
 * * {{VehicleParts}}
 * * *'''worldModelID:''' If includeWorldModelInformation was set to ''true'' and a world model was
 * hit, this will contain the model ID.
 * * *'''worldModelPositionX,Y,Z:''' If worldModelID is set, this will contain the world model
 * position.
 * * *'''worldModelRotationX,Y,Z:''' If worldModelID is set, this will contain the world model
 * rotation.
 * * *'''worldLODModelID:''' If worldModelID is set, this will contain the LOD model ID if
 * applicable.
 */
export function processLineOfSight(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    checkBuildings: boolean,
    checkVehicles: boolean,
    checkPlayers: boolean,
    checkObjects: boolean,
    checkDummies: boolean,
    seeThroughStuff: boolean,
    ignoreSomeObjectsForCamera: boolean,
    shootThroughStuff: boolean,
    ignoredElement: Element,
    includeWorldModelInformation: boolean,
    bIncludeCarTyres: boolean,
): LuaMultiReturn<
    [
        boolean,
        number,
        number,
        number,
        Element,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ]
>;

/**
 * This function is used to reset the background sounds to the default setting.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetAmbientSounds|MTASA Wiki}
 * @return Returns true if the ambient sounds were reset, false otherwise.
 */
export function resetAmbientSounds(): boolean;

/**
 * Resets the motion blur level on the clients screen to default value (36).
 * @see {@link https://wiki.multitheftauto.com/wiki/resetBlurLevel|MTASA Wiki}
 * @return Returns ''true'' if the blur level was reset successfully. Returns ''false'' otherwise.
 */
export function resetBlurLevel(): boolean;

/**
 * Resets the distance of vehicles LOD to default. Default values depends on client setting. If
 * client has enabled ''high detail vehicles'' in video options, value will be reset to (500, 500) -
 * otherwise to (70, 150). You can check value of this option using [[dxGetStatus]]
 * (''SettingHighDetailVehicles'').
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetVehiclesLODDistance|MTASA Wiki}
 * @return Returns true if the vehicles LOD distance was reset, false otherwise.
 */
export function resetVehiclesLODDistance(): boolean;

/**
 * This function is used to reset the world sounds to the default setting.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetWorldSounds|MTASA Wiki}
 * @return Returns true if the world sounds were reset, false otherwise.
 */
export function resetWorldSounds(): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/resetColorFilter|MTASA Wiki}
 * @return Returns true if the color filtering was reset, false otherwise.
 */
export function resetColorFilter(): boolean;

/**
 * This function allows you to disable some background sound effects. See also:
 * [[setWorldSoundEnabled]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setAmbientSoundEnabled|MTASA Wiki}
 * @param theType The type of ambient sound to toggle. Can be either gunfire or general.
 * @return Returns ''true'' if the ambient sound was set correctly, ''false'' if invalid values
 * were passed.
 */
export function setAmbientSoundEnabled(theType: string, enable: boolean): boolean;

/**
 * This function allows you to disable the flying birds.
 * @see {@link https://wiki.multitheftauto.com/wiki/setBirdsEnabled|MTASA Wiki}
 * @return Returns ''true'' if the birds state was changed succesfully, ''false'' if an invalid
 * argument was specified.
 */
export function setBirdsEnabled(enable: boolean): boolean;

/**
 * This function toggles furniture generation in interiors with the specified room ID.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setInteriorFurnitureEnabled|MTASA Wiki}
 * @param roomID The room type which you want disable or enable the furniture in:
 * @param enabled : A bool representing whether the interior furniture is enabled or disabled.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setInteriorFurnitureEnabled(roomID: number, enabled: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setNearClipDistance|MTASA Wiki}
 * @param distance the new near clip distance. It must be between 0.1 and 20 for the function to do
 * any effect. Default value is 0.3.
 * @return This function returns ''true'' if the argument is valid. Returns ''false'' otherwise.
 */
export function setNearClipDistance(distance: number): boolean;

/**
 * Sets the distance of vehicles LOD.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclesLODDistance|MTASA Wiki}
 * @param vehiclesDistance general distance used for most vehicles, this value is clamped to 0 – 500
 * @param trainsAndPlanesDistance distance used for trains and planes, this value is clamped to 0 –
 * 500
 * @default vehiclesDistance * 2.14
 * @return
 */
export function setVehiclesLODDistance(vehiclesDistance: number, trainsAndPlanesDistance: number): boolean;

/**
 * This function allows you to disable world sounds. A world sound is a sound effect which has
 * '''''not''''' been caused by [[playSound]] or [[playSound3D]].
 * *The values for ''group'' and ''index'' can be determined by using the client command
 * [[Client_Commands#showsound|showsound]] in conjunction with [[setDevelopmentMode]]
 * *This function does not affect sounds which are already playing, such as the wind sound that can
 * only be stopped by entering an interior.
 * * See also: [[setAmbientSoundEnabled]]}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setWorldSoundEnabled|MTASA Wiki}
 * @param group An int|integer representing the World sound groups|world sound group
 * @param index An int|integer representing an individual sound within the group  {{New
 * feature/item|3.0156|1.5.5|11860|
 * @default -1
 * @param enable Set to false to disable, true to enable
 * @param immediate A boolean if set to true will cancel the sound if its already playing. This
 * parameter only works for stopping the sound.  }}
 * @default false
 * @return Returns ''true'' if the world sound was correctly enabled/disabled, ''false'' if invalid
 * values were passed.
 */
export function setWorldSoundEnabled(group: number, index: number, enable: boolean, immediate?: boolean): boolean;

/**
 * Enables or disables a special world property.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWorldSpecialPropertyEnabled|MTASA Wiki}
 * @param propname the name of the property to set. Possible values are:
 * @param enable whether or not to enable the property.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setWorldSpecialPropertyEnabled(propname: string, enable: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setColorFilter|MTASA Wiki}
 * @param aRed The amount of red (0-255).
 * @param aGreen The amount of green (0-255).
 * @param aBlue The amount of blue (0-255).
 * @param aAlpha The amount of alpha (0-255).
 * @param bRed The amount of red (0-255).
 * @param bGreen The amount of green (0-255).
 * @param bBlue The amount of blue (0-255).
 * @param bAlpha The amount of alpha (0-255).
 * @return Returns true if the color filter was set, false otherwise.
 */
export function setColorFilter(
    aRed: number,
    aGreen: number,
    aBlue: number,
    aAlpha: number,
    bRed: number,
    bGreen: number,
    bBlue: number,
    bAlpha: number,
): boolean;

/**
 * This function checks to see if a line between two points collides with the water. This is
 * similar to [[processLineOfSight]], but only collides with water. Waves are taken into account when testing
 * the line.
 * @see {@link https://wiki.multitheftauto.com/wiki/testLineAgainstWater|MTASA Wiki}
 * @return Returns ''true'' and the position of the intersection point of the line and the water
 * surface if there is a collision, or ''false'' if there is no collision.
 */
export function testLineAgainstWater(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
): LuaMultiReturn<[boolean, number, number, number]>;

/**
 * Gets whether the traffic lights are currently locked or not. If the lights are locked, it means
 * they won't change unless you do [[setTrafficLightState]].
 * @see {@link https://wiki.multitheftauto.com/wiki/areTrafficLightsLocked|MTASA Wiki}
 * @return Returns ''true'' the traffic lights are currently locked, ''false'' otherwise.
 */
export function areTrafficLightsLocked(): boolean;

/**
 * This function returns the maximum velocity at which aircrafts could fly. Using this function
 * server-side will return the server-side value, not necessarily the same that is set client-side.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAircraftMaxVelocity|MTASA Wiki}
 * @return Returns a float being the max velocity that is currently set, depending on which side it
 * is used.
 */
export function getAircraftMaxVelocity(): number;

/**
 * This function will tell you if clouds are enabled or disabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/getCloudsEnabled|MTASA Wiki}
 * @return Returns ''true'' if the clouds are enabled or ''false'' if clouds are disabled.
 */
export function getCloudsEnabled(): boolean;

/**
 * This function will tell you what is the current render distance.
 * @see {@link https://wiki.multitheftauto.com/wiki/getFarClipDistance|MTASA Wiki}
 * @return Returns a ''float'' with the current render distance, ''false'' if the operation could
 * not be completed.
 */
export function getFarClipDistance(): number;

/**
 * This function will tell you what is the current fog render distance.
 * @see {@link https://wiki.multitheftauto.com/wiki/getFogDistance|MTASA Wiki}
 * @return Returns a ''float'' with the current fog render distance, ''false'' if the operation
 * could not be completed.
 */
export function getFogDistance(): number;

/**
 * This function gets the current game speed value.
 * @see {@link https://wiki.multitheftauto.com/wiki/getGameSpeed|MTASA Wiki}
 * @return Returns a ''float'' representing the speed of the game.
 */
export function getGameSpeed(): number;

/**
 * This function returns the current gravity level for the context in which it is called (server or
 * client).
 * @see {@link https://wiki.multitheftauto.com/wiki/getGravity|MTASA Wiki}
 * @return Returns a float with the current server or client (depending on where you call the
 * function) gravity level.
 */
export function getGravity(): number;

/**
 * This function will return the current heat haze effect settings.
 * '''Note:''' The server can only return the heat haze settings if it has actually been set by
 * script.
 * @see {@link https://wiki.multitheftauto.com/wiki/getHeatHaze|MTASA Wiki}
 * @return Returns 9 values, which are the same used as arguments in [[SetHeatHaze]]:
 * * {{HeatHazeValues}}
 */
export function getHeatHaze(): LuaMultiReturn<
    [number, number, number, number, number, number, number, number, boolean]
>;

/**
 * This function gets the maximum height at which your jetpack can fly without failing to go higher.
 * @see {@link https://wiki.multitheftauto.com/wiki/getJetpackMaxHeight|MTASA Wiki}
 * @return Returns a float containing the max jetpack height.
 */
export function getJetpackMaxHeight(): number;

/**
 * Tells you how long an ingame minute takes in real-world milliseconds. The default GTA value is
 * 1000.
 * @see {@link https://wiki.multitheftauto.com/wiki/getMinuteDuration|MTASA Wiki}
 * @return Returns the number of real-world milliseconds that go in an ingame minute.
 */
export function getMinuteDuration(): number;

/**
 * This function returns the moon size.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getMoonSize|MTASA Wiki}
 * @return Returns a integer being the moon size that is currently set, depending on which side it
 * is used.
 */
export function getMoonSize(): number;

/**
 * This function is used to get "occlusions enabled" state.
 * @see {@link https://wiki.multitheftauto.com/wiki/getOcclusionsEnabled|MTASA Wiki}
 * @return Returns ''true'' if occlusions are enabled, or ''false'' otherwise.
 */
export function getOcclusionsEnabled(): boolean;

/**
 * This function is used to get the current rain level.
 * @see {@link https://wiki.multitheftauto.com/wiki/getRainLevel|MTASA Wiki}
 * @return Returns the rain level as a number.
 */
export function getRainLevel(): number;

/**
 * This function will return the current sky color.
 * '''Note:''' The server can only return the sky color if it has actually been set by script.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSkyGradient|MTASA Wiki}
 * @return Returns 6 [[int|ints]], of which the first 3 represent the sky's "top" color, (in RGB)
 * and the last 3 represent the bottom colors.
 */
export function getSkyGradient(): LuaMultiReturn<[number, number, number, number, number, number]>;

/**
 * This function is used to get the color of the sun.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSunColor|MTASA Wiki}
 * @return Returns the color of the sun as six numbers, false if its default.
 */
export function getSunColor(): LuaMultiReturn<[number, number, number, number, number, number]>;

/**
 * This function is used to get the size of the sun.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSunSize|MTASA Wiki}
 * @return Returns the size of the sun as a number, false if the size of the sun is at its default.
 */
export function getSunSize(): number;

/**
 * This function is used to get the current time in the game. If you want to get the real server
 * time, use [[getRealTime]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getTime|MTASA Wiki}
 * @return Returns two ''ints'' that represent hours and minutes.
 */
export function getTime(): LuaMultiReturn<[number, number]>;

/**
 * Gets the current traffic light state. This state controls the traffic light colors. For
 * instance, state '''1''' will cause the north and south traffic lights to be amber, and the ones left and
 * east will turn red.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTrafficLightState|MTASA Wiki}
 * @return Returns the current [[Traffic_light_states|state]] of the traffic lights.
 */
export function getTrafficLightState(): number;

/**
 * This function returns the current [[Weather]] ID.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeather|MTASA Wiki}
 * @return Returns two integers indicating the weather type that is currently active. The first
 * integer says what weather is currently considered to be active. The second integer is the weather id
 * that is being blended into if any, otherwise it is ''nil''.
 */
export function getWeather(): LuaMultiReturn<[number, number]>;

/**
 * This function gets the wind velocity in San Andreas.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWindVelocity|MTASA Wiki}
 * @return *'''velocityX''': The velocity on the x-coordinate or false if the wind velocity is
 * default.
 * * *'''velocityY''': The velocity on the y-coordinate or nil if the wind velocity is default.
 * * *'''velocityZ''': The velocity on the z-coordinate or nil if the wind velocity is default.
 */
export function getWindVelocity(): LuaMultiReturn<[number, number, number]>;

/**
 * This function allows you to retrieve the zone name of a certain location.
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getZoneName|MTASA Wiki}
 * @param x The X axis position
 * @param y The Y axis position
 * @param z The Z axis position  {{OptionalArg}}
 * @param citiesonly : An optional argument to choose if you want to return one of the following
 * city names:  ** Tierra Robada  ** Bone County  ** Las Venturas  ** San Fierro  ** Red County  **
 * Whetstone  ** Flint County  ** Los Santos
 * @default false
 * @return Returns the string of the zone name
 */
export function getZoneName(x: number, y: number, z: number, citiesonly: boolean): string;

/**
 * This function checks whether or not a specific garage door is open.
 * @see {@link https://wiki.multitheftauto.com/wiki/isGarageOpen|MTASA Wiki}
 * @param garageID The Garage|garage ID that represents the garage door that is being checked.
 * @return Returns ''true'' if the garage is open, ''false'' if it is closed or an invalid garage
 * ID was given.
 */
export function isGarageOpen(garageID: number): boolean;

/**
 * <!--
 * -->
 * This function is used to remove a world object.
 * <!--
 * -->
 * @see {@link https://wiki.multitheftauto.com/wiki/removeWorldModel|MTASA Wiki}
 * @param modelID A whole integer specifying the GTASA object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.  {{New
 * items|3.0132|1.3.2|
 * @param interior The interior ID to apply the removal to. Some objects in interior 13 show in all
 * interiors so if you want to remove everything in interior 0 also remove everything in interior 13.
 * A value of -1 here will affect all interiors.}}
 * @default -1
 * @return Returns ''true'' if the [[object]] was removed, ''false'' if invalid arguments were
 * passed.
 */
export function removeWorldModel(
    modelID: number,
    radius: number,
    x: number,
    y: number,
    z: number,
    interior?: number,
): boolean;

/**
 * This function resets the far clip distance to its default state.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetFarClipDistance|MTASA Wiki}
 * @return Returns ''true'' if operation was successful, ''false'' otherwise.
 */
export function resetFarClipDistance(): boolean;

/**
 * This function resets the fog render distance to its default state.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetFogDistance|MTASA Wiki}
 * @return Returns ''true'' if operation was successful, ''false'' otherwise.
 */
export function resetFogDistance(): boolean;

/**
 * This function restores the default heat haze.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetHeatHaze|MTASA Wiki}
 * @return Returns ''true'' if the heat haze was reset correctly, ''false'' otherwise.
 */
export function resetHeatHaze(): boolean;

/**
 * This function is used to reset the size of the moon to its normal size.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resetMoonSize|MTASA Wiki}
 * @return Returns true if the size of the moon was reset, false otherwise.
 */
export function resetMoonSize(): boolean;

/**
 * This function resets the rain level of the current weather to its default.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetRainLevel|MTASA Wiki}
 * @return Returns true if the rain level was reset.
 */
export function resetRainLevel(): boolean;

/**
 * This function allows restoring of a changed sky gradient as a result of [[setSkyGradient]].
 * @see {@link https://wiki.multitheftauto.com/wiki/resetSkyGradient|MTASA Wiki}
 * @return Returns ''true'' if sky color was reset correctly, ''false'' otherwise.
 */
export function resetSkyGradient(): boolean;

/**
 * This function is used to reset the color of the sun to its normal color.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetSunColor|MTASA Wiki}
 * @return Returns true if the color of the sun was reset, false otherwise.
 */
export function resetSunColor(): boolean;

/**
 * This function is used to reset the size of the sun to its normal size.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetSunSize|MTASA Wiki}
 * @return Returns true if the size of the sun was reset, false otherwise.
 */
export function resetSunSize(): boolean;

/**
 * This function resets the wind velocity in San Andreas to its default state.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetWindVelocity|MTASA Wiki}
 * @return Returns true if successful, false otherwise.
 */
export function resetWindVelocity(): boolean;

/**
 * This function allows restoring of all world objects,which were removed with [[RemoveWorldModel]].
 * @see {@link https://wiki.multitheftauto.com/wiki/restoreAllWorldModels|MTASA Wiki}
 * @return Returns ''true'' if the world objects were restored, ''false'' otherwise.
 */
export function restoreAllWorldModels(): boolean;

/**
 * This function allows restoring of world object,which was removed with [[RemoveWorldModel]].
 * @see {@link https://wiki.multitheftauto.com/wiki/restoreWorldModel|MTASA Wiki}
 * @param modelID A whole integer specifying the GTASA object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.  {{New
 * items|3.0132|1.3.2|
 * @param iInterior   }}
 * @default -1
 * @return Returns ''true'' if the world object was restored, ''false'' otherwise.
 */
export function restoreWorldModel(
    modelID: number,
    radius: number,
    x: number,
    y: number,
    z: number,
    iInterior?: number,
): boolean;

/**
 * This function sets the maximum velocity at which aircrafts could fly. Using this function
 * server-side will overwrite the value that was previously set client-side.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setAircraftMaxVelocity|MTASA Wiki}
 * @param velocity The max velocity, can be 0 or any positive value. Default is 1.5.
 * @return Returns true if the max velocity was set correctly, false otherwise.
 */
export function setAircraftMaxVelocity(velocity: number): boolean;

/**
 * This function will enable or disable clouds. This is useful for race maps which are placed high
 * up as clouds can cause low FPS.
 * @see {@link https://wiki.multitheftauto.com/wiki/setCloudsEnabled|MTASA Wiki}
 * @param enabled A boolean value determining if clouds should be shown. Use true to show clouds
 * and false to hide them.
 * @return Returns ''true'' if the cloud state was changed succesfully, ''false'' if an invalid
 * argument was specified.
 */
export function setCloudsEnabled(enabled: boolean): boolean;

/**
 * This function is used to set the distance of render. Areas beyond the specified distance will
 * not be rendered.
 * @see {@link https://wiki.multitheftauto.com/wiki/setFarClipDistance|MTASA Wiki}
 * @param distance A float specifying the distance of render. Setting this less than 5 will cause
 * problems to the client.
 * @return Returns ''true'' if the distance was set correctly, ''false'' if invalid arguments were
 * passed.
 */
export function setFarClipDistance(distance: number): boolean;

/**
 * This function changes the distance at which fog appears. Keep in mind that this function doesn't
 * change the distance of render.
 * @see {@link https://wiki.multitheftauto.com/wiki/setFogDistance|MTASA Wiki}
 * @param distance distance in GTA units at which fog will appear. Very short or negative distances
 * will cause graphical bugs to the players.
 * @return Returns ''true'' if the distance changed successfully, ''false'' if bad arguments were
 * passed.
 */
export function setFogDistance(distance: number): boolean;

/**
 * This function sets the game speed to the given value.
 * @see {@link https://wiki.multitheftauto.com/wiki/setGameSpeed|MTASA Wiki}
 * @param value : The float value of the game speed (Range 0 - 10)
 * @return Returns ''true'' if the gamespeed was set successfully, ''false'' otherwise.
 * * The normal game speed is '1'.
 */
export function setGameSpeed(value: number): boolean;

/**
 * This function opens or closes the specified garage door in the world.
 * @see {@link https://wiki.multitheftauto.com/wiki/setGarageOpen|MTASA Wiki}
 * @param garageID The Garage|garage ID that represents the garage door being opened or closed.
 * @return Returns ''true'' if successful, ''false'' if an invalid garage id was given.
 */
export function setGarageOpen(garageID: number, open: boolean): boolean;

/**
 * This function sets the server's gravity level.
 * *This will override [[setPedGravity]] applied to peds/players.
 * *Setting the gravity level to different values on clients can cause animation bugs (players
 * floating across ground because players see different fall animation.)}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setGravity|MTASA Wiki}
 * @param level : The level of gravity (default is 0.008).
 * @return Returns ''true'' if gravity was changed, ''false'' otherwise.
 */
export function setGravity(level: number): boolean;

/**
 * This function changes the heat haze effect.
 * @see {@link https://wiki.multitheftauto.com/wiki/setHeatHaze|MTASA Wiki}
 * @return Returns ''true'' if the heat haze effect was set correctly, ''false'' if invalid values
 * were passed.
 */
export function setHeatHaze(
    intensity: number,
    randomShift: number,
    speedMin: number,
    speedMax: number,
    scanSizeX: number,
    scanSizeY: number,
    renderSizeX: number,
    renderSizeY: number,
    bShowInside: boolean,
): boolean;

/**
 * This function disables or enables the ambient sounds played by GTA in most interiors, like
 * restaurants, casinos, clubs, houses, etc.
 * @see {@link https://wiki.multitheftauto.com/wiki/setInteriorSoundsEnabled|MTASA Wiki}
 * @return If a boolean was passed to the function, it always succeeds and returns ''true''.
 */
export function setInteriorSoundsEnabled(enabled: boolean): boolean;

/**
 * Sets the real-world duration of an ingame minute. The GTA default is 1000.
 * @see {@link https://wiki.multitheftauto.com/wiki/setMinuteDuration|MTASA Wiki}
 * @param milliseconds : the new duration of an ingame minute, accepted values 0 - 2147483647.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setMinuteDuration(milliseconds: number): boolean;

/**
 * This function sets the moon size. Using this function server-side will overwrite the value that
 * was previously set client-side.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setMoonSize|MTASA Wiki}
 * @param size The size, can be 0 or any positive value. Default is 3.
 * @return Returns true if the moon size was set correctly, false otherwise.
 */
export function setMoonSize(size: number): boolean;

/**
 * This function is used to enable or disable occlusions. Occlusions are used by GTA to enhance
 * performance by hiding objects that are (normally) obscured by certain large buildings. However when
 * [[removeWorldModel]] is used they may also have the undesired effect of making parts of the map
 * disappear. Disabling occlusions will fix that.
 * @see {@link https://wiki.multitheftauto.com/wiki/setOcclusionsEnabled|MTASA Wiki}
 * @param enabled A bool specifying if GTA occlusions should be enabled
 * @return Returns ''true'' if the setting was set correctly, ''false'' if invalid arguments were
 * passed.
 */
export function setOcclusionsEnabled(enabled: boolean): boolean;

/**
 * This function sets the rain level to any weather available in GTA. Use [[resetRainLevel]] to
 * undo the changes.
 * @see {@link https://wiki.multitheftauto.com/wiki/setRainLevel|MTASA Wiki}
 * @param level A floating point number representing the rain level. 1 represents the maximum rain
 * level usually available in GTA, but higher values are accepted.
 * @return Returns ''true'' if the rain level was set, ''false'' otherwise.
 */
export function setRainLevel(level: number): boolean;

/**
 * This function changes the sky color to a two-color gradient.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSkyGradient|MTASA Wiki}
 * @param topRed The red value of the upper part of the sky, from 0 to 255.
 * @default 0
 * @param topGreen The green value of the upper part of the sky, from 0 to 255.
 * @default 0
 * @param topBlue The blue value of the upper part of the sky, from 0 to 255.
 * @default 0
 * @param bottomRed The red value of the lower part of the sky, from 0 to 255.
 * @default 0
 * @param bottomGreen The green value of the lower part of the sky, from 0 to 255.
 * @default 0
 * @param bottomBlue The blue value of the lower part of the sky, from 0 to 255.
 * @default 0
 * @return Returns ''true'' if sky color was set correctly, ''false'' if invalid values were passed.
 */
export function setSkyGradient(
    topRed: number,
    topGreen: number,
    topBlue: number,
    bottomRed: number,
    bottomGreen: number,
    bottomBlue: number,
): boolean;

/**
 * This function is used to set the color of the sun.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSunColor|MTASA Wiki}
 * @param aRed The amount of red (0-255) you want the sun to be.
 * @param aGreen The amount of green (0-255) you want the sun to be.
 * @param aBlue The amount of blue (0-255) you want the sun to be.
 * @param bRed The amount of red (0-255) you want the sun to be.
 * @param bGreen The amount of green (0-255) you want the sun to be.
 * @param bBlue The amount of blue (0-255) you want the sun to be.
 * @return Returns true if the color of the sun was set, false otherwise.
 */
export function setSunColor(
    aRed: number,
    aGreen: number,
    aBlue: number,
    bRed: number,
    bGreen: number,
    bBlue: number,
): boolean;

/**
 * This function is used to set the size of the sun.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSunSize|MTASA Wiki}
 * @param Size The size you want the sun to be in the sky.
 * @return Returns true if the size of the sun was set, false otherwise.
 */
export function setSunSize(Size: number): boolean;

/**
 * This function sets the current GTA time to the given time.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTime|MTASA Wiki}
 * @param hour : The hour of the new time (range 0-23).
 * @param minute : The minute of the new time (range 0-59).
 * @return Returns ''true'' if the new time was successfully set, ''false'' otherwise.
 */
export function setTime(hour: number, minute: number): boolean;

/**
 * Sets the current traffic light state. This state controls the traffic light colors. For
 * instance, state '''1''' will cause the north and south traffic lights to be amber, and the ones left and
 * east will turn red.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTrafficLightState|MTASA Wiki}
 * @param state : If an integer is provided, the Traffic_light_states|state you wish to use
 * (possible values: 0-9). Else, one of the following strings:
 * @return Returns ''true'' if the state was successfully set, ''false'' otherwise.
 */
export function setTrafficLightState(state: number): boolean;

/**
 * Toggles whether you want the traffic lights to be locked. If the lights are locked, it means
 * they won't change unless you do [[setTrafficLightState]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setTrafficLightsLocked|MTASA Wiki}
 * @param toggle : A bool indicating whether you want the traffic lights to change automatically,
 * or not
 * @return Returns ''true'' if the successful, ''false'' otherwise.
 */
export function setTrafficLightsLocked(toggle: boolean): boolean;

/**
 * This function sets the current [[weather]] to the given valid value. To change the weather
 * gradually, see [[setWeatherBlended]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeather|MTASA Wiki}
 * @param weatherID : The ID of new weather. Valid values are 0 to 255 inclusive.
 * @return Returns ''true'' if the weather was set succesfully, ''false'' if an invalid
 * ''weatherID'' was specified.
 */
export function setWeather(weatherID: number): boolean;

/**
 * This function will change the current [[weather]] to another in a smooth manner, over the period
 * of 1-2 in-game hours (unlike [[setWeather]], which sets a new weather instantly). To ensure this
 * transition performs as expected, you should not call this function until [[getWeather]] indicates that
 * no transition is already being done.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeatherBlended|MTASA Wiki}
 * @param weatherID The ID of the weather state you wish to set. Valid values are 0 to 255
 * inclusive.
 * @return Returns ''true'' if successful, ''false'' if an invalid ''weatherID'' is passed.
 */
export function setWeatherBlended(weatherID: number): boolean;

/**
 * This function changes the wind velocity. The wind shakes the vegetation and makes particles fly
 * in a direction. The intensity and direction of the effect deppends of the wind velocity in each axis.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWindVelocity|MTASA Wiki}
 * @param velocityX : The velocity of the wind along the x axis.
 * @param velocityY : The velocity of the wind along the y axis.
 * @param velocityZ : The velocity of the wind along the z axis.
 * @return Returns ''true'' if successful, ''false'' if bad arguments were passed.
 */
export function setWindVelocity(velocityX: number, velocityY: number, velocityZ: number): boolean;
