/**
 *
 *
 *
 *
 *
 */
import { element } from "./dx";
import { Blip } from "./element";

export function createBlip(
    x: number,
    y: number,
    z: number,
    icon?: 0,
    size?: 2,
    r?: 255,
    g?: 0,
    b?: 0,
    a?: 255,
    ordering?: 0,
    visibleDistance?: 99999.0,
    visibleTo?: element,
): Blip;

export function createBlipAttachedTo(
    elementToAttachTo: element,
    icon?: 0,
    size?: 2,
    r?: 255,
    g?: 0,
    b?: 0,
    a?: 255,
    ordering?: 0,
    visibleDistance?: 99999.0,
    visibleTo?: element,
): Blip;

export function getBlipColor(theBlip: Blip): [number, number, number, number];

export function getBlipIcon(theBlip: Blip): number;

export function getBlipSize(theBlip: Blip): number;

export function setBlipColor(theBlip: Blip, red: number, green: number, blue: number, alpha: number): boolean;

export function setBlipIcon(theBlip: Blip, icon: number): boolean;

export function setBlipSize(theBlip: Blip, iconSize: number): boolean;

export function getBlipOrdering(theBlip: Blip): number;

export function setBlipOrdering(theBlip: Blip, ordering: number): boolean;

export function getBlipVisibleDistance(theBlip: Blip): number;

export function setBlipVisibleDistance(theBlip: Blip, theDistance: number): boolean;
