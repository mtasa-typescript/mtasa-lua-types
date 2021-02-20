/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { ColShape, Marker, Player, Table } from 'types/mtasa/server/structure';

export class Element {
    /**
     * @see {@link getElementSyncer}
     */
    syncer: Element;
    /**
     * @see {@link getElementAlpha}
     */
    alpha: number;
    /**
     * @see {@link getElementCollisionsEnabled}
     */
    collisions: boolean;
    /**
     * @see {@link getElementColShape}
     */
    colShape: ColShape;
    /**
     * @see {@link getElementDimension}
     */
    dimension: number;
    /**
     * @see {@link getElementHealth}
     */
    health: number;
    /**
     * @see {@link getElementID}
     */
    id: string;
    /**
     * @see {@link getElementInterior}
     */
    interior: number;
    /**
     * @see {@link getElementMatrix}
     */
    matrix: Table;
    /**
     * @see {@link getElementModel}
     */
    model: number;
    /**
     * @see {@link getElementParent}
     */
    parent: Element;
    /**
     * @see {@link getElementPosition}
     */
    position: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getElementRotation}
     */
    rotation: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getElementType}
     */
    type: string;
    /**
     * @see {@link getElementVelocity}
     */
    velocity: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getLowLODElement}
     */
    lowLOD: Element;
    /**
     * @see {@link isElementAttached}
     */
    attached: boolean;
    /**
     * @see {@link isElementDoubleSided}
     */
    doubleSided: boolean;
    /**
     * @see {@link isElementFrozen}
     */
    frozen: boolean;
    /**
     * @see {@link isElementInWater}
     */
    inWater: boolean;
    /**
     * @see {@link getElementAngularVelocity}
     */
    angularVelocity: LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getElementByID}
     */
    static getByID(id: string, index?: number): Element;

    /**
     * @see {@link addElementDataSubscriber}
     */
    addDataSubscriber(theElement: Element, key: string, thePlayer: Player): boolean;

    /**
     * @see {@link clearElementVisibleTo}
     */
    clearVisibility(theElement: Element): boolean;

    /**
     * @see {@link cloneElement}
     */
    clone(theElement: Element, xPos: number, yPos: number, zPos: number, cloneChildren: boolean): Element;

    /**
     * @see {@link getAllElementData}
     */
    getAllData(theElement: Element): Table;

    /**
     * @see {@link getElementByIndex}
     */
    getByIndex(theType: string, index: number): Element;

    /**
     * @see {@link getElementSyncer}
     */
    getSyncer(theElement: Element): Element;

    /**
     * @see {@link getElementZoneName}
     */
    getZoneName(theElement: Element, citiesonly: boolean): string;

    /**
     * @see {@link isElementVisibleTo}
     */
    isVisibleTo(theElement: Element, visibleTo: Element): boolean;

    /**
     * @see {@link removeElementData}
     */
    removeData(theElement: Element, key: string): boolean;

    /**
     * @see {@link removeElementDataSubscriber}
     */
    removeDataSubscriber(theElement: Element, key: string, thePlayer: Player): boolean;

    /**
     * @see {@link setElementSyncer}
     */
    setSyncer(theElement: Element, thePlayer: Player): boolean;

    /**
     * @see {@link setElementVisibleTo}
     */
    setVisibleTo(theElement: Element, visibleTo: Element, visible: boolean): boolean;

    /**
     * @see {@link attachElements}
     */
    attach(
        theElement: Element,
        theAttachToElement: Element,
        xPosOffset: number,
        yPosOffset: number,
        zPosOffset: number,
        xRotOffset: number,
        yRotOffset: number,
        zRotOffset: number,
    ): boolean;

    /**
     * @see {@link destroyElement}
     */
    destroy(elementToDestroy: Element): boolean;

    /**
     * @see {@link detachElements}
     */
    detach(theElement: Element, theAttachToElement: Element): boolean;

    /**
     * @see {@link getAttachedElements}
     */
    getAttachedElements(theElement: Element): Table;

    /**
     * @see {@link getElementAlpha}
     */
    getAlpha(theElement: Element): number;

    /**
     * @see {@link getElementAttachedOffsets}
     */
    getAttachedOffsets(theElement: Element): LuaMultiReturn<[number, number, number, number, number, number]>;

    /**
     * @see {@link getElementAttachedTo}
     */
    getAttachedTo(theElement: Element): Element;

    /**
     * @see {@link getElementCollisionsEnabled}
     */
    getCollisionsEnabled(theElement: Element): boolean;

    /**
     * @see {@link getElementChild}
     */
    getChild(parent: Element, index: number): Element;

    /**
     * @see {@link getElementChildren}
     */
    getChildren(parent: Element, theType?: string): Table;

    /**
     * @see {@link getElementChildrenCount}
     */
    getChildrenCount(parent: Element): number;

    /**
     * @see {@link getElementColShape}
     */
    getColShape(theElement: Element): ColShape;

    /**
     * @see {@link getElementData}
     */
    getData(theElement: Element, key: string, inherit?: boolean): any;

    /**
     * @see {@link getElementDimension}
     */
    getDimension(theElement: Element): number;

    /**
     * @see {@link getElementHealth}
     */
    getHealth(theElement: Element): number;

    /**
     * @see {@link getElementID}
     */
    getID(theElement: Element): string;

    /**
     * @see {@link getElementInterior}
     */
    getInterior(theElement: Element): number;

    /**
     * @see {@link getElementMatrix}
     */
    getMatrix(theElement: Element, legacy?: boolean): Table;

    /**
     * @see {@link getElementModel}
     */
    getModel(theElement: Element): number;

    /**
     * @see {@link getElementParent}
     */
    getParent(theElement: Element): Element;

    /**
     * @see {@link getElementPosition}
     */
    getPosition(theElement: Element): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getElementRotation}
     */
    getRotation(theElement: Element, rotOrder?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getElementType}
     */
    getType(theElement: Element): string;

    /**
     * @see {@link getElementVelocity}
     */
    getVelocity(theElement: Element): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getLowLODElement}
     */
    getLowLOD(theElement: Element): Element;

    /**
     * @see {@link isElementAttached}
     */
    isAttached(theElement: Element): boolean;

    /**
     * @see {@link isElementCallPropagationEnabled}
     */
    isCallPropagationEnabled(theElement: Element): boolean;

    /**
     * @see {@link isElementDoubleSided}
     */
    isDoubleSided(theElement: Element): boolean;

    /**
     * @see {@link isElementFrozen}
     */
    isFrozen(theElement: Element): boolean;

    /**
     * @see {@link isElementInWater}
     */
    isInWater(theElement: Element): boolean;

    /**
     * @see {@link isElementLowLOD}
     */
    isLowLOD(theElement: Element): boolean;

    /**
     * @see {@link isElementWithinMarker}
     */
    isWithinMarker(theElement: Element, theMarker: Marker): boolean;

    /**
     * @see {@link setElementAlpha}
     */
    setAlpha(theElement: Element, alpha: number): boolean;

    /**
     * @see {@link setElementAngularVelocity}
     */
    setAngularVelocity(theElement: Element, rx: number, ry: number, rz: number): boolean;

    /**
     * @see {@link getElementAngularVelocity}
     */
    getAngularVelocity(theElement: Element): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link setElementAttachedOffsets}
     */
    setAttachedOffsets(
        theElement: Element,
        xPosOffset: number,
        yPosOffset: number,
        zPosOffset: number,
        xRotOffset: number,
        yRotOffset: number,
        zRotOffset: number,
    ): boolean;

    /**
     * @see {@link setElementCallPropagationEnabled}
     */
    setCallPropagationEnabled(theElement: Element, enabled: boolean): boolean;

    /**
     * @see {@link setElementCollisionsEnabled}
     */
    setCollisionsEnabled(theElement: Element, enabled: boolean): boolean;

    /**
     * @see {@link setElementData}
     */
    setData(theElement: Element, key: string, value: any, syncMode?: any): boolean;

    /**
     * @see {@link setElementDimension}
     */
    setDimension(theElement: Element, dimension: number): boolean;

    /**
     * @see {@link setElementDoubleSided}
     */
    setDoubleSided(theElement: Element, enable: boolean): boolean;

    /**
     * @see {@link setElementFrozen}
     */
    setFrozen(theElement: Element, freezeStatus: boolean): boolean;

    /**
     * @see {@link setElementHealth}
     */
    setHealth(theElement: Element, newHealth: number): boolean;

    /**
     * @see {@link setElementID}
     */
    setID(theElement: Element, name: string): boolean;

    /**
     * @see {@link setElementInterior}
     */
    setInterior(theElement: Element, interior: number, x?: number, y?: number, z?: number): boolean;

    /**
     * @see {@link setElementModel}
     */
    setModel(theElement: Element, model: number): boolean;

    /**
     * @see {@link setElementParent}
     */
    setParent(theElement: Element, parent: Element): boolean;

    /**
     * @see {@link setElementPosition}
     */
    setPosition(theElement: Element, x: number, y: number, z: number, warp?: boolean): boolean;

    /**
     * @see {@link setElementRotation}
     */
    setRotation(
        theElement: Element,
        rotX: number,
        rotY: number,
        rotZ: number,
        rotOrder?: string,
        conformPedRotation?: boolean,
    ): boolean;

    /**
     * @see {@link setElementVelocity}
     */
    setVelocity(theElement: Element, speedX: number, speedY: number, speedZ: number): boolean;

    /**
     * @see {@link setLowLODElement}
     */
    setLowLOD(theElement: Element, lowLODElement: Element): boolean;
}
