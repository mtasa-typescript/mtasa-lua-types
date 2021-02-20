/**
 *
 *
 *
 *
 *
 *
 *
 */
import { RadarArea } from "./element";
import { element } from "./dx";

export function createRadarArea(
    startPosX: number,
    startPosY: number,
    sizeX: number,
    sizeY: number,
    r?: 255,
    g?: 0,
    b?: 0,
    a?: 255,
    visibleTo?: element,
): RadarArea;

export function getRadarAreaColor(theRadararea: RadarArea): [number, number, number, number];

export function getRadarAreaSize(theRadararea: RadarArea): [number, number];

export function isInsideRadarArea(theArea: any, posX: number, posY: number): boolean;

export function isRadarAreaFlashing(theRadararea: RadarArea): boolean;

export function setRadarAreaColor(theRadarArea: RadarArea, r: number, g: number, b: number, a: number): boolean;

export function setRadarAreaFlashing(theRadarArea: RadarArea, flash: boolean): boolean;

export function setRadarAreaSize(theRadararea: RadarArea, x: number, y: number): boolean;
