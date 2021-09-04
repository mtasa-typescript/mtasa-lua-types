import { mtasa as server } from 'server';
import { mtasa as client } from 'client';

// Workaround to get some arguments
const clientElement = 0 as unknown as client.Element;
const serverElement = 0 as unknown as server.Element;

// Tests (for linter)
const attachElements1: boolean = client.attachElements(
    clientElement,
    clientElement,
);

const attachElements2: boolean = client.attachElements(
    clientElement,
    clientElement,
    -10,
    11,
    14,
    3,
    4,
    5,
);

const createElement1 = client.createElement('flag');
const createElement2 = client.createElement('flag', 'flag-1');

const destroyElement: boolean = client.destroyElement(clientElement);

const detachElements: boolean = client.detachElements(
    clientElement,
    clientElement,
);

const getAttachedElements: LuaTable = client.getAttachedElements(clientElement);

const getElementAttachedOffsets: LuaMultiReturn<
    [number, number, number, number, number, number]
> = client.getElementAttachedOffsets(clientElement);

const getElementAlpha: number = client.getElementAlpha(clientElement);

const getElementCollisionsEnabled: boolean =
    client.getElementCollisionsEnabled(clientElement);

const getElementAttachedTo: client.Element =
    client.getElementAttachedTo(clientElement);

const getElementBoundingBox: LuaMultiReturn<
    [number, number, number, number, number, number]
> = client.getElementBoundingBox(clientElement);

const getElementByID1: client.Element = client.getElementByID('id');
const getElementByID2: client.Element = client.getElementByID('id', 10);

const getElementChild: client.Element = client.getElementChild(
    clientElement,
    2,
);

const getElementChildren1: LuaTable = client.getElementChildren(clientElement);

const getElementChildren2: LuaTable = client.getElementChildren(clientElement);

const getElementChildrenCount: number =
    client.getElementChildrenCount(clientElement);

const getElementColShape: client.ColShape =
    client.getElementColShape(clientElement);

const getElementData1: any = client.getElementData(clientElement, 'key', false);

const getElementData2: any = client.getElementData(clientElement, 'key');

const getElementDimension: number = client.getElementDimension(clientElement);

const getElementDistanceFromCentreOfMassToBaseOfModel: number =
    client.getElementDistanceFromCentreOfMassToBaseOfModel(clientElement);

const getElementHealth: number = client.getElementHealth(clientElement);

const getElementID: string = client.getElementID(clientElement);

const getElementInterior: number = client.getElementInterior(clientElement);

const getElementMatrix1: LuaTable = client.getElementMatrix(clientElement);

const getElementMatrix2: LuaTable = client.getElementMatrix(
    clientElement,
    false,
);

const getElementModel: number = client.getElementModel(clientElement);

const getElementParent: client.Element = client.getElementParent(clientElement);

const getElementRotation1: LuaMultiReturn<[number, number, number]> =
    client.getElementRotation(clientElement, 'ZYX');

const getElementRotation2: LuaMultiReturn<[number, number, number]> =
    client.getElementRotation(clientElement, 'ZYX');

const getElementRadius: number = client.getElementRadius(clientElement);

const getElementsByType1: LuaTable = client.getElementsByType('flag');

const getElementsByType2: LuaTable = client.getElementsByType(
    'flag',
    clientElement,
);

const getElementsByType3: LuaTable = client.getElementsByType(
    'flag',
    clientElement,
    true,
);

const getElementsWithinColShape1: LuaTable = client.getElementsWithinColShape(
    client.ColShape.Circle(0, 0, 0),
);

const getElementsWithinColShape2: LuaTable = client.getElementsWithinColShape(
    client.ColShape.Circle(0, 0, 0),
    'flag',
);

const getElementType = client.getElementType(clientElement);

const getElementVelocity: LuaMultiReturn<[number, number, number]> =
    client.getElementVelocity(clientElement);

const getLowLODElement: client.Element = client.getLowLODElement(clientElement);

const getRootElement: client.Element = client.getRootElement();

const getResourceRootElement: client.Element = client.getResourceRootElement(
    client.getThisResource(),
);

const isElement1: boolean = client.isElement('a');

const isElement2: boolean = client.isElement(clientElement);

const isElementAttached: boolean = client.isElementAttached(clientElement);

const isElementCallPropagationEnabled: boolean =
    client.isElementCallPropagationEnabled(clientElement);

const isElementCollidableWith: boolean = client.isElementCollidableWith(
    clientElement,
    clientElement,
);

const isElementDoubleSided: boolean =
    client.isElementDoubleSided(clientElement);

const isElementFrozen: boolean = client.isElementFrozen(clientElement);

const isElementLocal: boolean = client.isElementLocal(clientElement);

const isElementLowLOD: boolean = client.isElementLowLOD(clientElement);

const isElementInWater = client.isElementInWater(clientElement);

const isElementOnScreen: boolean = client.isElementOnScreen(clientElement);

const isElementStreamable: boolean = client.isElementStreamable(clientElement);

const isElementStreamedIn: boolean = client.isElementStreamedIn(clientElement);

const isElementSyncer: boolean = client.isElementSyncer(clientElement);

const isElementWaitingForGroundToLoad: boolean =
    client.isElementWaitingForGroundToLoad(clientElement);

const isElementWithinColShape: boolean = client.isElementWithinColShape(
    clientElement,
    client.ColShape.Circle(0, 0, 0),
);

const isElementWithinMarker: boolean = client.isElementWithinMarker(
    clientElement,
    new client.Marker(0, 0, 0),
);

const setElementAlpha: boolean = client.setElementAlpha(clientElement, 56);

const setElementAttachedOffsets1: boolean =
    client.setElementAttachedOffsets(clientElement);

const setElementAttachedOffsets2: boolean = client.setElementAttachedOffsets(
    clientElement,
    15,
    15,
    16,
    17,
    18,
    19,
);

const setElementCallPropagationEnabled: boolean =
    client.setElementCallPropagationEnabled(clientElement, true);

const setElementCollidableWith: boolean = client.setElementCollidableWith(
    clientElement,
    clientElement,
    false,
);

const setElementCollisionsEnabled = client.setElementCollisionsEnabled(
    clientElement,
    true,
);

const setElementData: boolean = client.setElementData(clientElement, 'a', []);

const setElementDimension: boolean = client.setElementDimension(
    clientElement,
    7,
);

const setElementDoubleSided: boolean = client.setElementDoubleSided(
    clientElement,
    false,
);

const setElementFrozen: boolean = client.setElementFrozen(clientElement, false);

const setElementHealth: boolean = client.setElementHealth(clientElement, 170);

const setElementID: boolean = client.setElementID(clientElement, 'id');

const setElementInterior: boolean = client.setElementInterior(clientElement, 9);

const setElementMatrix: boolean = client.setElementMatrix(
    clientElement,
    new LuaTable(),
);

const setElementModel: boolean = client.setElementModel(clientElement, 133);

const setElementParent = client.setElementParent(clientElement, clientElement);

const setElementPosition1: boolean = client.setElementPosition(
    clientElement,
    6,
    7,
    8,
);

const setElementPosition2: boolean = client.setElementPosition(
    clientElement,
    6,
    7,
    8,
    false,
);

const setElementRotation: boolean = client.setElementRotation(
    clientElement,
    10,
    12,
    13,
);

const setElementStreamable: boolean = client.setElementStreamable(
    clientElement,
    false,
);

const setElementVelocity: boolean = client.setElementVelocity(
    clientElement,
    60,
    0,
    0,
);

const setLowLODElement: boolean = client.setLowLODElement(
    clientElement,
    clientElement,
);

const clearElementVisibleTo: boolean =
    server.clearElementVisibleTo(serverElement);

const cloneElement1: server.Element = server.cloneElement(serverElement);

const cloneElement2: server.Element = server.cloneElement(
    serverElement,
    4,
    5,
    6,
    true,
);

const getElementByIndex: server.Element = server.getElementByIndex('flag', 15);

const getElementZoneName1: string = server.getElementZoneName(
    serverElement,
    true,
);

const getElementZoneName2: string = server.getElementZoneName(
    serverElement,
    true,
);

const isElementVisibleTo: boolean = server.isElementVisibleTo(
    serverElement,
    serverElement,
);

const removeElementData: boolean = server.removeElementData(serverElement, 'a');

const setElementSyncer: boolean = server.setElementSyncer(
    serverElement,
    server.getRandomPlayer(),
);

const setElementVisibleTo: boolean = server.setElementVisibleTo(
    serverElement,
    serverElement,
    false,
);

const getElementSyncer: server.Element = server.getElementSyncer(serverElement);
