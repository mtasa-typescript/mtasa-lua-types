// https://wiki.multitheftauto.com/wiki/Element

// type Colshape = object;
import { element } from "./dx";
import { table } from "./MTA";

export type Var = object;
// type Player = object;

export type Player = object;
export type Ped = object;
export type Vehicle = object;
export type _Object = object;
export type Pickup = object;
export type Marker = object;
export type Colshape = object;
export type Blip = object;
export type RadarArea = object;
export type Projectile = object;
export type Team = object;
export type Serverconsole = object;
export type Button = object;
export type Checkbox = object;
export type Combobox = object;
export type Editfield = object;
export type Gridlist = object;
export type Memo = object;
export type Progressbar = object;
export type Radiobutton = object;
export type Scrollbar = object;
export type Scrollpane = object;
export type Staticimage = object;
export type Tabpanel = object;
export type Tab = object;
export type Textlabel = object;
export type _Window = object;
export type TXD = object;
export type DFF = object;
export type COL = object;
export type Sound = object;
export type Texture = object;
export type Shader = object;
export type DXfont = object;
export type GUIfont = object;
export type Weapon = object;
export type Camera = object;
export type Effect = object;
export type Browser = object;
export type Light = object;
export type Searchlight = object;

export function attachElements(
    theElement: element,
    theAttachToElement: element,
    xPosOffset?: 0,
    yPosOffset?: 0,
    zPosOffset?: 0,
    xRotOffset?: 0,
    yRotOffset?: 0,
    zRotOffset?: 0,
): boolean;

export function createElement(elementType: string, elementID: string): element;

export function destroyElement(elementToDestroy: element): boolean;

export function detachElements(theElement: element, theAttachToElement: element): boolean;

export function getAttachedElements(theElement: element): table;

export function getElementAttachedOffsets(theElement: element): [number, number, number, number, number, number];

export function getElementAlpha(theElement: element): number;

export function getElementCollisionsEnabled(theElement: element): boolean;

export function getElementAttachedTo(theElement: element): element;

export function getElementBoundingBox(theElement: element): [number, number, number, number, number, number];

export function getElementByID(id: string, index?: 0): element;

export function getElementChild(parent: element, index: number): element;

export function getElementChildren(parent: element, theType: string): table;

export function getElementChildrenCount(parent: element): number;

export function getElementColShape(theElement: element): Colshape;

export function getElementData(theElement: element, key: string, inherit: true): Var;

export function getElementDimension(theElement: element): number;

export function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: element): number;

export function getElementHealth(theElement: element): number;

export function getElementID(theElement: element): string;

export function getElementInterior(theElement: element): number;

export function getElementMatrix(theElement: element, legacy: true): table;

export function getElementModel(theElement: element): number;

export function getElementParent(theElement: element): element;

export function getElementRotation(theElement: element, rotOrder?: 'default'): [number, number, number];

export function getElementRadius(theElement: element): number;

export function getElementsByType(theType: string, startat?: element, streamedIn?: false): table;

export function getElementsWithinColShape(shape: Colshape, elemType?: string): table;

export function getElementType(theElement: element): string;

export function getElementVelocity(theElement: element): [number, number, number];

export function getLowLODElement(theElement: element): element;

export function getRootElement(): element;

export function getResourceRootElement(theResource?: object): element;

export function isElement(theValue: object): boolean;

export function isElementAttached(theElement: element): boolean;

export function isElementCallPropagationEnabled(theElement: element): boolean;

export function isElementCollidableWith(theElement: element, withElement: element): boolean;

export function isElementDoubleSided(theElement: element): boolean;

export function isElementFrozen(theElement: element): boolean;

export function isElementLocal(theElement: element): boolean;

export function isElementLowLOD(theElement: element): boolean;

export function isElementInWater(theElement: element): boolean;

export function isElementOnScreen(theElement: element): boolean;

export function isElementStreamable(theElement: element): boolean;

export function isElementStreamedIn(theElement: element): boolean;

export function isElementSyncer(theElement: element): boolean;

export function isElementWaitingForGroundToLoad(theElement: element): boolean;

export function isElementWithinColShape(theElement: element, theShape: Colshape): boolean;

export function isElementWithinMarker(theElement: element, theMarker: Marker): boolean;

export function setElementAlpha(theElement: element, alpha: number): boolean;

export function setElementAttachedOffsets(
    theElement: element,
    xPosOffset?: number,
    yPosOffset?: number,
    zPosOffset?: number,
    xRotOffset?: number,
    yRotOffset?: number,
    zRotOffset?: number,
): boolean;

export function setElementCallPropagationEnabled(theElement: element, enabled: boolean): boolean;

export function setElementCollidableWith(theElement: element, withElement: element, enabled: boolean): boolean;

export function setElementCollisionsEnabled(theElement: element, enabled: boolean): boolean;

export function setElementData(theElement: element, key: string, value: Var, synchronize?: true): boolean;

export function setElementDimension(theElement: element, dimension: number): boolean;

export function setElementDoubleSided(theElement: element, enable: boolean): boolean;

export function setElementFrozen(theElement: element, freezeStatus: boolean): boolean;

export function setElementHealth(theElement: element, newHealth: number): boolean;

export function setElementID(theElement: element, name: string): boolean;

export function setElementInterior(theElement: element, interior: number, x?: number, y?: number, z?: number): boolean;

export function setElementMatrix(theElement: element, theMatrix: table): boolean;

export function setElementModel(theElement: element, model: number): boolean;

export function setElementParent(theElement: element, parent: element): boolean;

export function setElementPosition(theElement: element, x: number, y: number, z: number, warp?: true): boolean;

export function setElementRotation(
    theElement: element,
    rotX: number,
    rotY: number,
    rotZ: number,
    rotOrder?: 'default',
    conformPedRotation?: false,
): boolean;

export function setElementStreamable(theElement: element, streamable: boolean): boolean;

export function setElementVelocity(theElement: element, speedX: number, speedY: number, speedZ: number): boolean;

export function setLowLODElement(theElement: element, lowLODElement: element): boolean;

////////// SERVER ONLY

export function clearElementVisibleTo(theElement: element): boolean;

export function cloneElement(theElement: element, xPos?: 0, yPos?: 0, zPos?: 0, cloneChildren?: false): element;

export function getElementByIndex(theType: string, index: number): element;

export function getElementZoneName(theElement: element, citiesonly?: false): string;

export function isElementVisibleTo(theElement: element, visibleTo: element): boolean;

export function removeElementData(theElement: element, key: string): boolean;

export function setElementSyncer(theElement: element, thePlayer: Player): boolean;

export function setElementVisibleTo(theElement: element, visibleTo: element, visible: boolean): boolean;

export function getElementSyncer(theElement: element): element;
