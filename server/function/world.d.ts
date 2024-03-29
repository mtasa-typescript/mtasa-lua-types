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

/**
 * Gets whether the traffic lights are currently locked or not. If the lights are locked, it
 * means they wont change unless you do setTrafficLightState.
 * @see https://wiki.multitheftauto.com/wiki/AreTrafficLightsLocked
 * @return returns true the traffic lights are currently locked, false otherwise.
 * @noSelf
 */
export declare function areTrafficLightsLocked(): boolean;

/**
 * This function gets the maximum height at which aircraft can fly without their engines
 * turning off.
 * @see https://wiki.multitheftauto.com/wiki/GetAircraftMaxHeight
 * @return returns a float containing the max aircraft height.
 * @noSelf
 */
export declare function getAircraftMaxHeight(): number;

/**
 * This function returns the maximum velocity at which aircrafts could fly. Using this
 * function server-side will return the server-side value, not necessarily the same that is
 * set client-side.
 * @see https://wiki.multitheftauto.com/wiki/GetAircraftMaxVelocity
 * @return returns a float being the max velocity that is currently set, depending on which side it
 * is used.
 * @noSelf
 */
export declare function getAircraftMaxVelocity(): number;

/**
 * This function will tell you if clouds are enabled or disabled.
 * @see https://wiki.multitheftauto.com/wiki/GetCloudsEnabled
 * @return returns true if the clouds are enabled or false if clouds are disabled.
 * @noSelf
 */
export declare function getCloudsEnabled(): boolean;

/**
 * This function will tell you what is the current render distance.
 * @see https://wiki.multitheftauto.com/wiki/GetFarClipDistance
 * @return returns a float with the current render distance, false if the operation could not be
 * completed.
 * @noSelf
 */
export declare function getFarClipDistance(): number;

/**
 * This function will tell you what is the current fog render distance.
 * @see https://wiki.multitheftauto.com/wiki/GetFogDistance
 * @return returns a float with the current fog render distance, false if the operation could not be
 * completed.
 * @noSelf
 */
export declare function getFogDistance(): number;

/**
 * This function gets the current game speed value.
 * @see https://wiki.multitheftauto.com/wiki/GetGameSpeed
 * @return returns a float representing the speed of the game.
 * @noSelf
 */
export declare function getGameSpeed(): number;

/**
 * This function returns the current gravity level for the context in which it is called
 * (server or client).
 * @see https://wiki.multitheftauto.com/wiki/GetGravity
 * @return returns a float with the current server or client (depending on where you call the
 * function) gravity level.
 * @noSelf
 */
export declare function getGravity(): number;

/**
 * This function will return the current heat haze effect settings.
 * Note: The server can only return the heat haze settings if it has actually been set by
 * script.
 * @see https://wiki.multitheftauto.com/wiki/GetHeatHaze
 * @return returns 9 values, which are the same used as arguments in setheathaze:
 * @noSelf
 */
export declare function getHeatHaze(): LuaMultiReturn<
    [number, number, number, number, number, number, number, number, boolean]
>;

/**
 * This function gets the maximum height at which your jetpack can fly without failing to go
 * higher.
 * @see https://wiki.multitheftauto.com/wiki/GetJetpackMaxHeight
 * @return returns a float containing the max jetpack height.
 * @noSelf
 */
export declare function getJetpackMaxHeight(): number;

/**
 * This function checks if a weapon is usable while on a Jetpack.
 * @see https://wiki.multitheftauto.com/wiki/GetJetpackWeaponEnabled
 * @param weapon The weapon thats being checked if its usable on a Jetpack.
 * @return returns true if the weapon is enabled, else false if the weapon isnt or invalid arguments
 * are passed.
 * @noSelf
 */
export declare function getJetpackWeaponEnabled(weapon: string): boolean;

/**
 * Tells you how long an ingame minute takes in real-world milliseconds. The default GTA
 * value is 1000.
 * @see https://wiki.multitheftauto.com/wiki/GetMinuteDuration
 * @return returns the number of real-world milliseconds that go in an ingame minute.
 * @noSelf
 */
export declare function getMinuteDuration(): number;

/**
 * This function returns the moon size.
 * @see https://wiki.multitheftauto.com/wiki/GetMoonSize
 * @return returns a integer being the moon size that is currently set, depending on which side it
 * is used.
 * @noSelf
 */
export declare function getMoonSize(): number;

/**
 * This function is used to get occlusions enabled state.
 * @see https://wiki.multitheftauto.com/wiki/GetOcclusionsEnabled
 * @return returns true if occlusions are enabled, or false otherwise.
 * @noSelf
 */
export declare function getOcclusionsEnabled(): boolean;

/**
 * This function is used to get the current rain level.
 * @see https://wiki.multitheftauto.com/wiki/GetRainLevel
 * @return returns the rain level as a number.
 * @noSelf
 */
export declare function getRainLevel(): number;

/**
 * This function will return the current sky color.
 * Note: The server can only return the sky color if it has actually been set by script.
 * @see https://wiki.multitheftauto.com/wiki/GetSkyGradient
 * @return returns 6 int|ints, of which the first 3 represent the skys top color, (in rgb) and the
 * last 3 represent the bottom colors.
 * @noSelf
 */
export declare function getSkyGradient(): LuaMultiReturn<
    [number, number, number, number, number, number]
>;

/**
 * This function is used to get the color of the sun.
 * @see https://wiki.multitheftauto.com/wiki/GetSunColor
 * @return returns the color of the sun as six numbers, false if its default.
 * @noSelf
 */
export declare function getSunColor(): LuaMultiReturn<
    [number, number, number, number, number, number]
>;

/**
 * This function is used to get the size of the sun.
 * @see https://wiki.multitheftauto.com/wiki/GetSunSize
 * @return returns the size of the sun as a number, false if the size of the sun is at its default.
 * @noSelf
 */
export declare function getSunSize(): number;

/**
 * This function is used to get the current time in the game. If you want to get the real
 * server time, use getRealTime.
 * @see https://wiki.multitheftauto.com/wiki/GetTime
 * @return returns two ints that represent hours and minutes.
 * @noSelf
 */
export declare function getTime(): LuaMultiReturn<[number, number]>;

/**
 * Gets the current traffic light state. This state controls the traffic light colors. For
 * instance, state 1 will cause the north and south traffic lights to be amber, and the ones
 * left and east will turn red.
 * @see https://wiki.multitheftauto.com/wiki/GetTrafficLightState
 * @return returns the current traffic_light_states|state of the traffic lights.
 * @noSelf
 */
export declare function getTrafficLightState(): number;

/**
 * This function returns the current Weather ID.
 * @see https://wiki.multitheftauto.com/wiki/GetWeather
 * @return returns two integers indicating the weather type that is currently active. the first
 * integer says what weather is currently considered to be active. the second integer is the
 * weather id that is being blended into if any, otherwise it is nil.
 * @noSelf
 */
export declare function getWeather(): LuaMultiReturn<[number, number]>;

/**
 * This function gets the wind velocity in San Andreas.
 * @see https://wiki.multitheftauto.com/wiki/GetWindVelocity
 * @return *velocityx: the velocity on the x-coordinate or false if the wind velocity is default.
 * *velocityy: the velocity on the y-coordinate or nil if the wind velocity is default.
 * *velocityz: the velocity on the z-coordinate or nil if the wind velocity is default.
 * @noSelf
 */
export declare function getWindVelocity(): LuaMultiReturn<
    [number, number, number]
>;

/**
 * This function allows you to retrieve the zone name of a certain location.
 * @see https://wiki.multitheftauto.com/wiki/GetZoneName
 * @param x The X axis position
 * @param y The Y axis position
 * @param z The Z axis position
 * @param citiesonly : An optional argument to choose if you want to return one of the following city names:
 * ** Tierra Robada
 * ** Bone County
 * ** Las Venturas
 * ** San Fierro
 * ** Red County
 * ** Whetstone
 * ** Flint County
 * ** Los Santos
 * @return returns the string of the zone name.
 * @noSelf
 */
export declare function getZoneName(
    x: number,
    y: number,
    z: number,
    citiesonly?: boolean,
): string;

/**
 * This function checks whether or not a specific garage door is open.
 * @see https://wiki.multitheftauto.com/wiki/IsGarageOpen
 * @param garageID The Garage|garage ID that represents the garage door that is being checked.
 * @return returns true if the garage is open, false if it is closed or an invalid garage id was
 * given.
 * @noSelf
 */
export declare function isGarageOpen(garageID: number): boolean;

/**
 * This function is used to remove a world object.
 * @see https://wiki.multitheftauto.com/wiki/RemoveWorldModel
 * @param modelID A whole integer specifying the GTASA object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param interior The interior ID to apply the removal to. Some objects in interior 13 show in all
 * interiors so if you want to remove everything in interior 0 also remove everything in
 * interior 13. A value of -1 here will affect all interiors.}}
 * @return returns true if the object was removed, false if invalid arguments were passed.
 * @noSelf
 */
export declare function removeWorldModel(
    modelID: number,
    radius: number,
    x: number,
    y: number,
    z: number,
    interior?: number,
): boolean;

/**
 * This function resets the far clip distance to its default state.
 * @see https://wiki.multitheftauto.com/wiki/ResetFarClipDistance
 * @return returns true if operation was successful, false otherwise.
 * @noSelf
 */
export declare function resetFarClipDistance(): boolean;

/**
 * This function resets the fog render distance to its default state.
 * @see https://wiki.multitheftauto.com/wiki/ResetFogDistance
 * @return returns true if operation was successful, false otherwise.
 * @noSelf
 */
export declare function resetFogDistance(): boolean;

/**
 * This function restores the default heat haze.
 * @see https://wiki.multitheftauto.com/wiki/ResetHeatHaze
 * @return returns true if the heat haze was reset correctly, false otherwise.
 * @noSelf
 */
export declare function resetHeatHaze(): boolean;

/**
 * This function is used to reset the size of the moon to its normal size.
 * @see https://wiki.multitheftauto.com/wiki/ResetMoonSize
 * @return returns true if the size of the moon was reset, false otherwise.
 * @noSelf
 */
export declare function resetMoonSize(): boolean;

/**
 * This function resets the rain level of the current weather to its default.
 * @see https://wiki.multitheftauto.com/wiki/ResetRainLevel
 * @return returns true if the rain level was reset.
 * @noSelf
 */
export declare function resetRainLevel(): boolean;

/**
 * This function allows restoring of a changed sky gradient as a result of setSkyGradient.
 * @see https://wiki.multitheftauto.com/wiki/ResetSkyGradient
 * @return returns true if sky color was reset correctly, false otherwise.
 * @noSelf
 */
export declare function resetSkyGradient(): boolean;

/**
 * This function is used to reset the color of the sun to its normal color.
 * @see https://wiki.multitheftauto.com/wiki/ResetSunColor
 * @return returns true if the color of the sun was reset, false otherwise.
 * @noSelf
 */
export declare function resetSunColor(): boolean;

/**
 * This function is used to reset the size of the sun to its normal size.
 * @see https://wiki.multitheftauto.com/wiki/ResetSunSize
 * @return returns true if the size of the sun was reset, false otherwise.
 * @noSelf
 */
export declare function resetSunSize(): boolean;

/**
 * This function resets the wind velocity in San Andreas to its default state.
 * @see https://wiki.multitheftauto.com/wiki/ResetWindVelocity
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function resetWindVelocity(): boolean;

/**
 * This function allows restoring of all world objects,which were removed with
 * RemoveWorldModel.
 * @see https://wiki.multitheftauto.com/wiki/RestoreAllWorldModels
 * @return returns true if the world objects were restored, false otherwise.
 * @noSelf
 */
export declare function restoreAllWorldModels(): boolean;

/**
 * This function allows restoring of world object,which was removed with RemoveWorldModel.
 * @see https://wiki.multitheftauto.com/wiki/RestoreWorldModel
 * @param modelID A whole integer specifying the GTASA object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param iInterior
 * @return returns true if the world object was restored, false otherwise.
 * @noSelf
 */
export declare function restoreWorldModel(
    modelID: number,
    radius: number,
    x: number,
    y: number,
    z: number,
    iInterior?: number,
): boolean;

/**
 * This function changes the maximum flying height of aircraft.
 * @see https://wiki.multitheftauto.com/wiki/SetAircraftMaxHeight
 * @param Height The height you want aircraft to be able to go.
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function setAircraftMaxHeight(Height: number): boolean;

/**
 * This function sets the maximum velocity at which aircrafts could fly. Using this function
 * server-side will overwrite the value that was previously set client-side.
 * @see https://wiki.multitheftauto.com/wiki/SetAircraftMaxVelocity
 * @param velocity The max velocity, can be 0 or any positive value. Default is 1.5.
 * @return returns true if the max velocity was set correctly, false otherwise.
 * @noSelf
 */
export declare function setAircraftMaxVelocity(velocity: number): boolean;

/**
 * This function will enable or disable clouds. This is useful for race maps which are
 * placed high up as clouds can cause low FPS.
 * @see https://wiki.multitheftauto.com/wiki/SetCloudsEnabled
 * @param enabled A boolean value determining if clouds should be shown. Use true to show clouds and false
 * to hide them.
 * @return returns true if the cloud state was changed succesfully, false if an invalid argument was
 * specified.
 * @noSelf
 */
export declare function setCloudsEnabled(enabled: boolean): boolean;

/**
 * This function is used to set the distance of render. Areas beyond the specified distance
 * will not be rendered.
 * @see https://wiki.multitheftauto.com/wiki/SetFarClipDistance
 * @param distance A float specifying the distance of render. Setting this less than 5 will cause problems
 * to the client.
 * @return returns true if the distance was set correctly, false if invalid arguments were passed.
 * @noSelf
 */
export declare function setFarClipDistance(distance: number): boolean;

/**
 * This function changes the distance at which fog appears. Keep in mind that this function
 * doesnt change the distance of render.
 * @see https://wiki.multitheftauto.com/wiki/SetFogDistance
 * @param distance distance in GTA units at which fog will appear. Very short or negative distances will
 * cause graphical bugs to the players.
 * @return returns true if the distance changed successfully, false if bad arguments were passed.
 * @noSelf
 */
export declare function setFogDistance(distance: number): boolean;

/**
 * This function sets the game speed to the given value.
 * @see https://wiki.multitheftauto.com/wiki/SetGameSpeed
 * @param value : The float value of the game speed (Range 0 - 10)
 * @return returns true if the gamespeed was set successfully, false otherwise.
 * the normal game speed is 1.
 * @noSelf
 */
export declare function setGameSpeed(value: number): boolean;

/**
 * This function opens or closes the specified garage door in the world.
 * @see https://wiki.multitheftauto.com/wiki/SetGarageOpen
 * @param garageID The Garage|garage ID that represents the garage door being opened or closed.
 * @param isOpen A boolean indicating whether or not to open the door.
 * @return returns true if successful, false if an invalid garage id was given.
 * @noSelf
 */
export declare function setGarageOpen(garageID: number, open: boolean): boolean;

/**
 * This function sets the servers gravity level.
 * *This will override setPedGravity applied to peds/players.
 * *Setting the gravity level to different values on clients can cause animation bugs
 * (players floating across ground because players see different fall animation.)}}
 * @see https://wiki.multitheftauto.com/wiki/SetGravity
 * @param level : The level of gravity (default is 0.008).
 * @return returns true if gravity was changed, false otherwise.
 * @noSelf
 */
export declare function setGravity(level: number): boolean;

/**
 * This function changes the heat haze effect.
 * @see https://wiki.multitheftauto.com/wiki/SetHeatHaze
 * @return returns true if the heat haze effect was set correctly, false if invalid values were
 * passed.
 * @noSelf
 */
export declare function setHeatHaze(
    intensity: number,
    randomShift?: number,
    speedMin?: number,
    speedMax?: number,
    scanSizeX?: number,
    scanSizeY?: number,
    renderSizeX?: number,
    renderSizeY?: number,
    bShowInside?: boolean,
): boolean;

/**
 * This function disables or enables the ambient sounds played by GTA in most interiors,
 * like restaurants, casinos, clubs, houses, etc.
 * @see https://wiki.multitheftauto.com/wiki/SetInteriorSoundsEnabled
 * @return if a boolean was passed to the function, it always succeeds and returns true.
 * @noSelf
 */
export declare function setInteriorSoundsEnabled(enabled: boolean): boolean;

/**
 * This function changes the maximum flying height of jetpack.
 * @see https://wiki.multitheftauto.com/wiki/SetJetpackMaxHeight
 * @param Height : The max height starting at approximately -20.
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function setJetpackMaxHeight(Height: number): boolean;

/**
 * This function sets a weapon usable while using the Jetpack.
 * @see https://wiki.multitheftauto.com/wiki/SetJetpackWeaponEnabled
 * @param weapon The weapon thats being set usable on a Jetpack. Names can be: (Case is ignored)
 * @param enabled A bool representing whether the weapon is enabled or disabled.
 * @return returns true, else false if invalid arguments are passed.
 * @noSelf
 */
export declare function setJetpackWeaponEnabled(
    weapon: string,
    enabled: boolean,
): boolean;

/**
 * Sets the real-world duration of an ingame minute. The GTA default is 1000.
 * @see https://wiki.multitheftauto.com/wiki/SetMinuteDuration
 * @param milliseconds : the new duration of an ingame minute, accepted values 0 - 2147483647.
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function setMinuteDuration(milliseconds: number): boolean;

/**
 * This function sets the moon size. Using this function server-side will overwrite the
 * value that was previously set client-side.
 * @see https://wiki.multitheftauto.com/wiki/SetMoonSize
 * @param size The size, can be 0 or any positive value. Default is 3.
 * @return returns true if the moon size was set correctly, false otherwise.
 * @noSelf
 */
export declare function setMoonSize(size: number): boolean;

/**
 * This function is used to enable or disable occlusions. Occlusions are used by GTA to
 * enhance performance by hiding objects that are (normally) obscured by certain large
 * buildings. However when removeWorldModel is used they may also have the undesired effect
 * of making parts of the map disappear. Disabling occlusions will fix that.
 * @see https://wiki.multitheftauto.com/wiki/SetOcclusionsEnabled
 * @param enabled A bool specifying if GTA occlusions should be enabled
 * @return returns true if the setting was set correctly, false if invalid arguments were passed.
 * @noSelf
 */
export declare function setOcclusionsEnabled(enabled: boolean): boolean;

/**
 * This function sets the rain level to any weather available in GTA. Use resetRainLevel to
 * undo the changes.
 * @see https://wiki.multitheftauto.com/wiki/SetRainLevel
 * @param level A floating point number representing the rain level. 1 represents the maximum rain level
 * usually available in GTA, but higher values are accepted.
 * @param Note The level value is clamped between 0.0 and 10.0 to avoid gameplay issues.
 * @return returns true if the rain level was set, false otherwise.
 * @noSelf
 */
export declare function setRainLevel(level: number): boolean;

/**
 * This function changes the sky color to a two-color gradient.
 * @see https://wiki.multitheftauto.com/wiki/SetSkyGradient
 * @param topRed The red value of the upper part of the sky, from 0 to 255.
 * @param topGreen The green value of the upper part of the sky, from 0 to 255.
 * @param topBlue The blue value of the upper part of the sky, from 0 to 255.
 * @param bottomRed The red value of the lower part of the sky, from 0 to 255.
 * @param bottomGreen The green value of the lower part of the sky, from 0 to 255.
 * @param bottomBlue The blue value of the lower part of the sky, from 0 to 255.
 * @return returns true if sky color was set correctly, false if invalid values were passed.
 * @noSelf
 */
export declare function setSkyGradient(
    topRed?: number,
    topGreen?: number,
    topBlue?: number,
    bottomRed?: number,
    bottomGreen?: number,
    bottomBlue?: number,
): boolean;

/**
 * This function is used to set the color of the sun.
 * @see https://wiki.multitheftauto.com/wiki/SetSunColor
 * @param aRed The amount of red (0-255) you want the sun to be.
 * @param aGreen The amount of green (0-255) you want the sun to be.
 * @param aBlue The amount of blue (0-255) you want the sun to be.
 * @param bRed The amount of red (0-255) you want the sun to be.
 * @param bGreen The amount of green (0-255) you want the sun to be.
 * @param bBlue The amount of blue (0-255) you want the sun to be.
 * @return returns true if the color of the sun was set, false otherwise.
 * @noSelf
 */
export declare function setSunColor(
    aRed: number,
    aGreen: number,
    aBlue: number,
    bRed: number,
    bGreen: number,
    bBlue: number,
): boolean;

/**
 * This function is used to set the size of the sun.
 * @see https://wiki.multitheftauto.com/wiki/SetSunSize
 * @param Size The size you want the sun to be in the sky.
 * @return returns true if the size of the sun was set, false otherwise.
 * @noSelf
 */
export declare function setSunSize(Size: number): boolean;

/**
 * This function sets the current GTA time to the given time.
 * @see https://wiki.multitheftauto.com/wiki/SetTime
 * @param hour : The hour of the new time (range 0-23).
 * @param minute : The minute of the new time (range 0-59).
 * @return returns true if the new time was successfully set, false otherwise.
 * @noSelf
 */
export declare function setTime(hour: number, minute: number): boolean;

/**
 * Toggles whether you want the traffic lights to be locked. If the lights are locked, it
 * means they wont change unless you do setTrafficLightState.
 * @see https://wiki.multitheftauto.com/wiki/SetTrafficLightsLocked
 * @param toggle : A bool indicating whether you want the traffic lights to change automatically, or not
 * @return returns true if the successful, false otherwise.
 * @noSelf
 */
export declare function setTrafficLightsLocked(toggle: boolean): boolean;

/**
 * Sets the current traffic light state. This state controls the traffic light colors. For
 * instance, state 1 will cause the north and south traffic lights to be amber, and the ones
 * left and east will turn red.
 * @see https://wiki.multitheftauto.com/wiki/SetTrafficLightState
 * @param state : If an integer is provided, the Traffic_light_states|state you wish to use (possible
 * values: 0-9). Else, one of the following strings:
 * @param auto : Sets the traffic lights default behavior (switches the colors automatically).
 * @param disabled : Turns traffic lights off.
 * Alternatively, you can provide two string parameters ('''colorNS''' and '''colorEW''')
 * with the colors for north-south and east-west traffic lights respectively. Valid colors
 * are:
 * @param green
 * @param yellow
 * @param red
 * @return returns true if the state was successfully set, false otherwise.
 * @noSelf
 */
export declare function setTrafficLightState(state: number): boolean;

/**
 * This function sets the current weather to the given valid value. To change the weather
 * gradually, see setWeatherBlended.
 * @see https://wiki.multitheftauto.com/wiki/SetWeather
 * @param weatherID : The ID of new weather. Valid values are 0 to 255 inclusive.
 * @return returns true if the weather was set succesfully, false if an invalid weatherid was
 * specified.
 * @noSelf
 */
export declare function setWeather(weatherID: number): boolean;

/**
 * This function will change the current weather to another in a smooth manner, over the
 * period of 1-2 in-game hours (unlike setWeather, which sets a new weather instantly). To
 * ensure this transition performs as expected, you should not call this function until
 * getWeather indicates that no transition is already being done.
 * @see https://wiki.multitheftauto.com/wiki/SetWeatherBlended
 * @param weatherID The ID of the weather state you wish to set. Valid values are 0 to 255 inclusive.
 * @return returns true if successful, false if an invalid weatherid is passed.
 * @noSelf
 */
export declare function setWeatherBlended(weatherID: number): boolean;

/**
 * This function changes the wind velocity. The wind shakes the vegetation and makes
 * particles fly in a direction. The intensity and direction of the effect deppends of the
 * wind velocity in each axis.
 * @see https://wiki.multitheftauto.com/wiki/SetWindVelocity
 * @param velocityX : The velocity of the wind along the x axis.
 * @param velocityY : The velocity of the wind along the y axis.
 * @param velocityZ : The velocity of the wind along the z axis.
 * @return returns true if successful, false if bad arguments were passed.
 * @noSelf
 */
export declare function setWindVelocity(
    velocityX: number,
    velocityY: number,
    velocityZ: number,
): boolean;
