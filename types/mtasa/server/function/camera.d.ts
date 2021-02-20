/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Player } from 'types/mtasa/server/structure';

/**
 * This function will fade a player's camera to a color or back to normal over a specified time
 * period. This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no
 * sound). For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside
 * scripts you must use one then the other.
 * @see {@link https://wiki.multitheftauto.com/wiki/fadeCamera|MTASA Wiki}
 * @param thePlayer The player whose camera you wish to fade.
 * @param fadeIn Should the camera be faded in or out? Pass true to fade the camera in, false to
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
export function fadeCamera(
    thePlayer: Player,
    fadeIn: boolean,
    timeToFade: number,
    red: number,
    green: number,
    blue: number,
): boolean;

/**
 * Returns the interior of the local camera (independent of the interior of the local player).
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraInterior|MTASA Wiki}
 * @param thePlayer : The player whose camera interior you want to get.
 * @return Returns an ''integer'' indicating the camera's interior, ''false'' if the argument is
 * invalid.
 */
export function getCameraInterior(thePlayer: Player): number;

/**
 * This function gets the position of the camera and the position of the point it is facing.
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraMatrix|MTASA Wiki}
 * @param thePlayer The player whose camera matrix is to be returned.
 * @return This function returns 8 [[float|floats]] if the argument is valid (when applicable); the
 * first three indicate the position of the camera, the next three indicate the position of the point
 * it's facing, and the last two are the roll and field of view. Returns ''false'' if the argument is
 * invalid.
 */
export function getCameraMatrix(
    thePlayer: Player,
): LuaMultiReturn<[number, number, number, number, number, number, number, number]>;

/**
 * This function returns an [[element]] that corresponds to the current target of the specified
 * player's camera (i.e. what it is following).
 * @see {@link https://wiki.multitheftauto.com/wiki/getCameraTarget|MTASA Wiki}
 * @param thePlayer The player whose camera you wish to receive the target of.
 * @return * Returns an [[element]] of the target if the function was successful, or ''false'' if
 * bad arguments were specified
 * * {{New feature|3|1.0|
 * * * Returns ''false'' if the camera is in Fixed mode and has no target.
 * * }}
 */
export function getCameraTarget(thePlayer: Player): Element;

/**
 * Sets the interior of the local camera. Only the interior of the camera is changed, the local
 * player stays in the interior he was in.
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraInterior|MTASA Wiki}
 * @param thePlayer the player whose camera interior will be set.
 * @param interior the interior to place the camera in.
 * @return Returns ''true'' if the camera's interior was changed successfully, ''false'' otherwise.
 */
export function setCameraInterior(thePlayer: Player, interior: number): boolean;

/**
 * This function sets the camera's position and direction. The first three arguments are the point
 * at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
 * @see {@link https://wiki.multitheftauto.com/wiki/setCameraMatrix|MTASA Wiki}
 * @param thePlayer The player whose camera is to be changed.
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
    thePlayer: Player,
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
 * @param thePlayer The player whose camera you wish to modify.
 * @param target The player who you want the camera to follow. If none is specified, the camera
 * will target the player.
 * @default nil
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function setCameraTarget(thePlayer: Player, target?: Player): boolean;
