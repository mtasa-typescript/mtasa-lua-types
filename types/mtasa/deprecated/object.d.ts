/**
 *
 *
 *
 *
 */
import { _Object } from "./element";

export function createObject(
    modelid: number,
    x: number,
    y: number,
    z: number,
    rx?: number,
    ry?: number,
    rz?: number,
    isLowLOD?: false,
): _Object;

export function moveObject(
    theObject: _Object,
    time: number,
    targetx: number,
    targety: number,
    targetz: number,
    moverx?: number,
    movery?: number,
    moverz?: number,
    strEasingType?: string,
    fEasingPeriod?: number,
    fEasingAmplitude?: number,
    fEasingOvershoot?: number,
): boolean;

export function stopObject(theobject: _Object): boolean;

export function getObjectScale(theObject: _Object): number;

export function setObjectScale(theObject: _Object, scale: number, scaleY?: number, scaleZ?: number): boolean;
