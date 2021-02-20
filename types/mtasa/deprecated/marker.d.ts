/**
 *
 *
 *
 *
 *
 */
import { element } from "./dx";
import { Marker } from "./element";

export function createMarker(
    x: number,
    y: number,
    z: number,
    theType?: 'checkponumber',
    size?: 4.0,
    r?: 0,
    g?: 0,
    b?: 255,
    a?: 255,
    visibleTo?: element,
): Marker;

export function getMarkerColor(theMarker: Marker): [number, number, number, number];

export function getMarkerCount(): number;

export function getMarkerIcon(theMarker: Marker): string;

export function getMarkerSize(theMarker: Marker): number;

export function getMarkerTarget(theMarker: Marker): [number, number, number];

export function getMarkerType(theMarker: Marker): string;

export function setMarkerColor(theMarker: Marker, r: number, g: number, b: number, a: number): boolean;

export function setMarkerIcon(theMarker: Marker, icon: string): boolean;

export function setMarkerSize(theMarker: Marker, size: number): boolean;

export function setMarkerTarget(theMarker: Marker, x: number, y: number, z: number): boolean;

export function setMarkerType(theMarker: Marker, markerType: string): boolean;
