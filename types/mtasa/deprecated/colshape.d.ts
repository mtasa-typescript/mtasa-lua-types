/**
 *
 *
 *
 *
 *
 *
 */
import { Colshape } from "./element";

export function createColCircle(fX: number, fY: number, radius: number): Colshape;

export function createColCuboid(
    fX: number,
    fY: number,
    fZ: number,
    fWidth: number,
    fDepth: number,
    fHeight: number,
): Colshape;

export function createColRectangle(fX: number, fY: number, fWidth: number, fHeight: number): Colshape;

export function createColSphere(fX: number, fY: number, fZ: number, fRadius: number): Colshape;

export function createColTube(fX: number, fY: number, fZ: number, fRadius: number, fHeight: number): Colshape;

export function createColPolygon(
    fX: number,
    fY: number,
    fX1: number,
    fY1: number,
    fX2: number,
    fY2: number,
    ...args: number[]
): Colshape;
