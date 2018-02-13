//https://wiki.multitheftauto.com/wiki/Element

//type Colshape = object;
type Var = object;
//type Player = object;

type Player = object;
type Ped = object;
type Vehicle = object;
type _Object = object;
type Pickup = object;
type Marker = object;
type Colshape = object;
type Blip = object;
type RadarArea = object;
type Projectile = object;
type Team = object;
type Serverconsole = object;
type Button = object;
type Checkbox = object;
type Combobox = object;
type Editfield = object;
type Gridlist = object;
type Memo = object;
type Progressbar = object;
type Radiobutton = object;
type Scrollbar = object;
type Scrollpane = object;
type Staticimage = object;
type Tabpanel = object;
type Tab = object;
type Textlabel = object;
type _Window = object;
type TXD = object;
type DFF = object;
type COL = object;
type Sound = object;
type Texture = object;
type Shader = object;
type DXfont = object;
type GUIfont = object;
type Weapon = object;
type Camera = object;
type Effect = object;
type Browser = object;
type Light = object;
type Searchlight = object;

declare function attachElements(theElement: element, theAttachToElement: element, xPosOffset?: 0, yPosOffset?: 0, zPosOffset?: 0, xRotOffset?: 0, yRotOffset?: 0, zRotOffset?: 0): boolean

declare function createElement(elementType: string, elementID: string): element

declare function destroyElement(elementToDestroy: element): boolean

declare function detachElements(theElement: element, theAttachToElement: element): boolean

declare function getAttachedElements(theElement: element): table

declare function getElementAttachedOffsets(theElement: element): [number, number, number, number, number, number]

declare function getElementAlpha(theElement: element): number

declare function getElementCollisionsEnabled(theElement: element): boolean

declare function getElementAttachedTo(theElement: element): element

declare function getElementBoundingBox(theElement: element): [number, number, number, number, number, number]

declare function getElementByID(id: string, index?: 0): element

declare function getElementChild(parent: element, index: number): element

declare function getElementChildren(parent: element, theType: string): table

declare function getElementChildrenCount(parent: element): number

declare function getElementColShape(theElement: element): Colshape

declare function getElementData(theElement: element, key: string, inherit: true): Var

declare function getElementDimension(theElement: element): number

declare function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: element): number

declare function getElementHealth(theElement: element): number

declare function getElementID(theElement: element): string

declare function getElementInterior(theElement: element): number

declare function getElementMatrix(theElement: element, legacy: true): table

declare function getElementModel(theElement: element): number

declare function getElementParent(theElement: element): element

declare function getElementPosition(theElement: element): [number, number, number]

declare function getElementRotation(theElement: element, rotOrder?: "default"): [number, number, number]

declare function getElementRadius(theElement: element): number

declare function getElementsByType(theType: string, startat?: element): table

declare function getElementsByType(theType: string, startat?: element, streamedIn?: false): table

declare function getElementsWithinColShape(shape: Colshape, elemType?: string): table

declare function getElementType(theElement: element): string

declare function getElementVelocity(theElement: element): [number, number, number]

declare function getLowLODElement(theElement: element): element

declare function getRootElement(): element

declare function getResourceRootElement(theResource?: object): element

declare function isElement(theValue: object): boolean

declare function isElementAttached(theElement: element): boolean

declare function isElementCallPropagationEnabled(theElement: element): boolean

declare function isElementCollidableWith(theElement: element, withElement: element): boolean

declare function isElementDoubleSided(theElement: element): boolean

declare function isElementFrozen(theElement: element): boolean

declare function isElementLocal(theElement: element): boolean

declare function isElementLowLOD(theElement: element): boolean

declare function isElementInWater(theElement: element): boolean

declare function isElementOnScreen(theElement: element): boolean

declare function isElementStreamable(theElement: element): boolean

declare function isElementStreamedIn(theElement: element): boolean

declare function isElementSyncer(theElement: element): boolean

declare function isElementWaitingForGroundToLoad(theElement: element): boolean

declare function isElementWithinColShape(theElement: element, theShape: Colshape): boolean

declare function isElementWithinMarker(theElement: element, theMarker: Marker): boolean

declare function setElementAlpha(theElement: element, alpha: number): boolean

declare function setElementAttachedOffsets(theElement: element, xPosOffset?: number, yPosOffset?: number, zPosOffset?: number, xRotOffset?: number, yRotOffset?: number, zRotOffset?: number): boolean

declare function setElementCallPropagationEnabled(theElement: element, enabled: boolean): boolean

declare function setElementCollidableWith(theElement: element, withElement: element, enabled: boolean): boolean

declare function setElementCollisionsEnabled(theElement: element, enabled: boolean): boolean

declare function setElementData(theElement: element, key: string, value: Var, synchronize?: true): boolean

declare function setElementDimension(theElement: element, dimension: number): boolean

declare function setElementDoubleSided(theElement: element, enable: boolean): boolean

declare function setElementFrozen(theElement: element, freezeStatus: boolean): boolean

declare function setElementHealth(theElement: element, newHealth: number): boolean

declare function setElementID(theElement: element, name: string): boolean

declare function setElementInterior(theElement: element, interior: number, x?: number, y?: number, z?: number): boolean

declare function setElementMatrix(theElement: element, theMatrix: table): boolean

declare function setElementModel(theElement: element, model: number): boolean

declare function setElementParent(theElement: element, parent: element): boolean

declare function setElementPosition(theElement: element, x: number, y: number, z: number, warp?: true): boolean

declare function setElementRotation(theElement: element, rotX: number, rotY: number, rotZ: number, rotOrder?: "default", conformPedRotation?: false): boolean

declare function setElementStreamable(theElement: element, streamable: boolean): boolean

declare function setElementVelocity(theElement: element, speedX: number, speedY: number, speedZ: number): boolean

declare function setLowLODElement(theElement: element, lowLODElement: element): boolean

////////// SERVER ONLY

declare function clearElementVisibleTo(theElement: element): boolean

declare function cloneElement(theElement: element, xPos?: 0, yPos?: 0, zPos?: 0, cloneChildren?: false): element

declare function getElementByIndex(theType: string, index: number): element

declare function getElementZoneName(theElement: element, citiesonly?: false): string

declare function isElementVisibleTo(theElement: element, visibleTo: element): boolean

declare function removeElementData(theElement: element, key: string): boolean

declare function setElementSyncer(theElement: element, thePlayer: Player): boolean

declare function setElementVisibleTo(theElement: element, visibleTo: element, visible: boolean): boolean

declare function getElementSyncer(theElement: element): element