/**
 * 
 * 
 * 
 * 
 * 
 */

declare function createMarker(x: number, y: number, z: number, theType?: "checkponumber", size?: 4.0, r?: 0, g?: 0, b?: 255, a?: 255, visibleTo?: element): Marker

declare function getMarkerColor(theMarker: Marker): [number, number, number, number]

declare function getMarkerCount(): number

declare function getMarkerIcon(theMarker: Marker): string

declare function getMarkerSize(theMarker: Marker): number

declare function getMarkerTarget(theMarker: Marker): [number, number, number]

declare function getMarkerType(theMarker: Marker): string

declare function setMarkerColor(theMarker: Marker, r: number, g: number, b: number, a: number): boolean

declare function setMarkerIcon(theMarker: Marker, icon: string): boolean

declare function setMarkerSize(theMarker: Marker, size: number): boolean

declare function setMarkerTarget(theMarker: Marker, x: number, y: number, z: number): boolean

declare function setMarkerType(theMarker: Marker, markerType: string): boolean

