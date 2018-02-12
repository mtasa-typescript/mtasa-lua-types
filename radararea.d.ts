/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

declare function createRadarArea(startPosX: number, startPosY: number, sizeX: number, sizeY: number, r?: 255, g?: 0, b?: 0, a?: 255, visibleTo?: element): RadarArea

declare function getRadarAreaColor(theRadararea: RadarArea): [number, number, number, number]

declare function getRadarAreaSize(theRadararea: RadarArea): [number, number]

declare function isInsideRadarArea(theArea, posX: number, posY: number): boolean

declare function isRadarAreaFlashing(theRadararea: RadarArea): boolean

declare function setRadarAreaColor(theRadarArea: RadarArea, r: number, g: number, b: number, a: number): boolean

declare function setRadarAreaFlashing(theRadarArea: RadarArea, flash: boolean): boolean

declare function setRadarAreaSize(theRadararea: RadarArea, x: number, y: number): boolean