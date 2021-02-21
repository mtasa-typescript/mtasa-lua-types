/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * This function checks if a weapon is usable while on a Jetpack.
 * @see {@link https://wiki.multitheftauto.com/wiki/getJetpackWeaponEnabled|MTASA Wiki}
 * @param weapon The weapon thats being checked if its usable on a Jetpack.
 * @return Returns true if the weapon is enabled, else false if the weapon isn't or invalid
 * arguments are passed.
 */
export function getJetpackWeaponEnabled(weapon: string): boolean;

/**
 * This function sets a weapon usable while using the Jetpack.
 * @see {@link https://wiki.multitheftauto.com/wiki/setJetpackWeaponEnabled|MTASA Wiki}
 * @param weapon The weapon thats being set usable on a Jetpack. Names can be: (Case is ignored)
 * {{All Weapon Types}}
 * @param enabled A bool representing whether the weapon is enabled or disabled.
 * @return Returns true, else false if invalid arguments are passed.
 */
export function setJetpackWeaponEnabled(weapon: string, enabled: boolean): boolean;

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
