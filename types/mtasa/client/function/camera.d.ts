/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Player } from '../structure';

/**
 * This function returns an [[element]] that corresponds to the game camera
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getCamera|MTASA Wiki}
 * @return Returns an [[element]] that corresponds to the game camera
 */
export function getCamera(): Element;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraClip|MTASA Wiki}
 * @return *'''objects:''' if you want the camera to clip on objects.
 * * *'''vehicles:''' if you want the camera to clip on vehicles.
 */
export function getCameraClip(): LuaMultiReturn<[boolean, boolean]>;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraFieldOfView|MTASA Wiki}
 * @param cameraMode the camera mode to get the field of view of  ** "player": whilst
 * walking/running  ** "vehicle": whilst in vehicle  ** "vehicle_max": the max the field of view can go to when the
 * vehicle is moving at a high speed (must be higher than "vehicle")
 * @return Returns one float - the field of view angle
 */
export function getCameraFieldOfView(cameraMode: string): number;

/**
 * This function returns what goggle effect is currently affecting the camera.
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraGoggleEffect|MTASA Wiki}
 * @return * [[String]] indicating the current camera goggle effect. Their meanings can be seen
 * below.
 * * {{Camera goggle modes}}
 */
export function getCameraGoggleEffect(): string;

/**
 * This function gets the camera shake level set by [[setCameraShakeLevel]].}}
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraShakeLevel|MTASA Wiki}
 * @return Returns an integer representing the camera shake level, from 0 (no shaking effect) to
 * 255 (maximum shaking effect). By default, the camera has no shaking effect.
 */
export function getCameraShakeLevel(): number;

/**
 * This function allows you to get the camera's view mode. This indicates at what distance the
 * camera will follow the player.
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraViewMode|MTASA Wiki}
 * @return Returns an [[int]] indicating the current camera view mode. Their meanings can be seen
 * below.
 * * {{Camera view modes}}
 */
export function getCameraViewMode(): number;

/**
 * This function sets if the camera will "collide" with any objects or vehicles in its way. This
 * means that if object clip is enabled an object is in the way of where the camera actually wants to be,
 * the camera will try to be in front of it. This function can disable that.
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraClip|MTASA Wiki}
 * @param objects Sets if you want the camera to clip on objects.
 * @default true
 * @param vehicles Sets if you want the camera to clip on vehicles.
 * @default true
 * @return Always returns ''true''.
 */
export function setCameraClip(objects: boolean, vehicles: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraFieldOfView|MTASA Wiki}
 * @param cameraMode the camera mode to get the field of view of  ** "player": whilst
 * walking/running  ** "vehicle": whilst in vehicle  ** "vehicle_max": the max the field of view can go to when the
 * vehicle is moving at a high speed (must be higher than "vehicle")
 * @param fieldOfView The field of view angle, 0 to 179.
 * @return Returns ''true'' if the arguments are valid, ''false'' otherwise.
 */
export function setCameraFieldOfView(cameraMode: string, fieldOfView: number): boolean;

/**
 * This function allows you to set the camera's current goggle effect. This means you can activate
 * nightvision or infrared effects by script
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraGoggleEffect|MTASA Wiki}
 * @param goggleEffect : the goggle effect you wish to set  {{Camera goggle modes}}  {{New
 * feature/item|3.0156|1.5.5|13999|
 * @param noiseEnabled : whether or not there should be a fuzzy noise effect  }}
 * @default true
 * @return * ''true'' if the effect was set correctly.
 * * * ''false'' otherwise.
 */
export function setCameraGoggleEffect(goggleEffect: string, noiseEnabled?: boolean): boolean;

/**
 * This function sets the camera shake level (as seen on the ''Are you going to San Fierro?''
 * singleplayer mission).}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraShakeLevel|MTASA Wiki}
 * @param shakeLevel : an integer between 0 and 255, which represents the camera shake intensity
 * level.
 * @return Returns ''true'' if the camera shake level was changed, ''false'' if the required
 * argument is incorrect or missing.
 */
export function setCameraShakeLevel(shakeLevel: number): boolean;

/**
 * This function allows you to set the camera's view mode if you are inside a [[vehicle]]. This
 * indicates at what distance the camera will follow the player.
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraViewMode|MTASA Wiki}
 * @param viewMode : The view mode you wish to use  {{Camera view modes}}
 * @return Returns ''true'' if the view was set correctly, ''false'' otherwise.
 */
export function setCameraViewMode(viewMode: number): boolean;

/**
 * This function will fade a player's camera to a color or back to normal over a specified time
 * period. This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no
 * sound). For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside
 * scripts you must use one then the other.
 * @see {@link https://wiki.multitheftauto.com/wiki/fadeCamera|MTASA Wiki}
 * @param fadeIn Should the camera be faded in our out? Pass true to fade the camera in, false to
 * fade it out to a color.
 * @param timeToFade The number of seconds it should take to fade.
 * @default 1.0
 * @param red The amount of red in the color that the camera fades out to (0 - 255). Not required
 * for fading in.
 * @default 0
 * @param green The amount of green in the color that the camera fades out to (0 - 255). Not
 * required for fading in.
 * @default 0
 * @param blue The amount of blue in the color that the camera fades out to (0 - 255). Not required
 * for fading in.
 * @default 0
 * @return Returns ''true'' if the camera was faded successfully, ''false'' if invalid arguments
 * were passed to the function.
 */
export function fadeCamera(fadeIn: boolean, timeToFade: number, red: number, green: number, blue: number): boolean;

/**
 * Returns the interior of the local camera (independent of the interior of the local player).
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraInterior|MTASA Wiki}
 * @return Returns an ''integer'' indicating the camera's interior, ''false'' if the argument is
 * invalid.
 */
export function getCameraInterior(): number;

/**
 * This function gets the position of the camera and the position of the point it is facing.
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraMatrix|MTASA Wiki}
 * @return This function returns 8 [[float|floats]] if the argument is valid (when applicable); the
 * first three indicate the position of the camera, the next three indicate the position of the point
 * it's facing, and the last two are the roll and field of view. Returns ''false'' if the argument is
 * invalid.
 */
export function getCameraMatrix(): LuaMultiReturn<[number, number, number, number, number, number, number, number]>;

/**
 * This function returns an [[element]] that corresponds to the current target of the specified
 * player's camera (i.e. what it is following).
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraTarget|MTASA Wiki}
 * @return * Returns an [[element]] of the target if the function was successful, or ''false'' if
 * bad arguments were specified
 * * {{New feature|3|1.0|
 * * * Returns ''false'' if the camera is in Fixed mode and has no target.
 * * }}
 */
export function getCameraTarget(): Element;

/**
 * Sets the interior of the local camera. Only the interior of the camera is changed, the local
 * player stays in the interior he was in.
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraInterior|MTASA Wiki}
 * @param interior the interior to place the camera in.
 * @return Returns ''true'' if the camera's interior was changed successfully, ''false'' otherwise.
 */
export function setCameraInterior(interior: number): boolean;

/**
 * This function sets the camera's position and direction. The first three arguments are the point
 * at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraMatrix|MTASA Wiki}
 * @param positionX The x coordinate of the cameras position.
 * @param positionY The y coordinate of the cameras position.
 * @param positionZ The z coordinate of the cameras position.
 * @param lookAtX The x coordinate of the point the camera faces.
 * @param lookAtY The y coordinate of the point the camera faces.
 * @param lookAtZ The z coordinate of the point the camera faces.
 * @param roll The camera roll angle, -180 to 180. A value of 0 means the camera sits straight,
 * positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180
 * means the camera is upside down.
 * @default 0
 * @param fov the field of view angle, 0.01 to 180. The higher this value is, the more you will be
 * able to see what is to your sides.
 * @default 70
 * @return Returns ''true'' if the arguments are valid, ''false'' otherwise.
 */
export function setCameraMatrix(
    positionX: number,
    positionY: number,
    positionZ: number,
    lookAtX?: number,
    lookAtY?: number,
    lookAtZ?: number,
    roll?: number,
    fov?: number,
): boolean;

/**
 * This function allows you to set a player's camera to follow other elements instead. Currently
 * supported element type is:
 * *[[Player]]s
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraTarget|MTASA Wiki}
 * @param target The player who you want the local camera to follow.
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function setCameraTarget(target: Player): boolean;
