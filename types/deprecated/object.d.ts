/**
 * 
 * 
 * 
 * 
 */


declare function createObject(modelid: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, isLowLOD?: false): _Object

declare function moveObject(theObject: _Object, time: number, targetx: number, targety: number, targetz: number, moverx?: number, movery?: number, moverz?: number, strEasingType?: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number): boolean

declare function stopObject(theobject: _Object): boolean

declare function getObjectScale(theObject: _Object): number

declare function setObjectScale(theObject: _Object, scale: number, scaleY?: number, scaleZ?: number): boolean