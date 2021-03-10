/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { ColShape, Marker } from "../structure";

export class Element {
    /**
     * @see {@link getElementDistanceFromCentreOfMassToBaseOfModel}
     */
    distanceFromCentreOfMassToBaseOfModel: number;
    /**
     * @see {@link isElementLocal}
     */
    localElement: boolean;
    /**
     * @see {@link isElementOnScreen}
     */
    onScreen: boolean;
    /**
     * @see {@link isElementStreamable}
     */
    streamable: boolean;
    /**
     * @see {@link isElementSyncer}
     */
    syncedByLocalPlayer: boolean;
    /**
     * @see {@link isElementWaitingForGroundToLoad}
     */
    waitingForGroundToLoad: boolean;
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
    matrix: LuaTable;
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
     * @see {@link getElementDistanceFromCentreOfMassToBaseOfModel}
     */
    getDistanceFromCentreOfMassToBaseOfModel(): number;

    /**
     * @see {@link getElementRadius}
     */
    getRadius(): number;

    /**
     * @see {@link isElementCallPropagationEnabled}
     */
    isCallPropagationEnabled(): boolean;

    /**
     * @see {@link isElementCollidableWith}
     */
    isCollidableWith(withElement: Element): boolean;

    /**
     * @see {@link isElementLocal}
     */
    isLocal(): boolean;

    /**
     * @see {@link isElementOnScreen}
     */
    isOnScreen(): boolean;

    /**
     * @see {@link isElementStreamable}
     */
    isStreamable(): boolean;

    /**
     * @see {@link isElementSyncer}
     */
    isSyncer(): boolean;

    /**
     * @see {@link isElementWaitingForGroundToLoad}
     */
    isWaitingForGroundToLoad(): boolean;

    /**
     * @see {@link setElementCallPropagationEnabled}
     */
    setCallPropagationEnabled(enabled: boolean): boolean;

    /**
     * @see {@link setElementCollidableWith}
     */
    setCollidableWith(withElement: Element, enabled: boolean): boolean;

    /**
     * @see {@link setElementStreamable}
     */
    setStreamable(streamable: boolean): boolean;

    /**
     * @see {@link attachElements}
     */
    attach(
        theAttachToElement: Element,
        xPosOffset: number,
        yPosOffset: number,
        zPosOffset: number,
        xRotOffset: number,
        yRotOffset: number,
        zRotOffset: number
    ): boolean;

    /**
     * @see {@link destroyElement}
     */
    destroy(): boolean;

    /**
     * @see {@link detachElements}
     */
    detach(theAttachToElement: Element): boolean;

    /**
     * @see {@link getAttachedElements}
     */
    getAttachedElements(): LuaTable;

    /**
     * @see {@link getElementAlpha}
     */
    getAlpha(): number;

    /**
     * @see {@link getElementAttachedOffsets}
     */
    getAttachedOffsets(): LuaMultiReturn<[number, number, number, number, number, number]>;

    /**
     * @see {@link getElementAttachedTo}
     */
    getAttachedTo(): Element;

    /**
     * @see {@link getElementCollisionsEnabled}
     */
    getCollisionsEnabled(): boolean;

    /**
     * @see {@link getElementByID}
     */
    getByID(id: string, index?: number): Element;

    /**
     * @see {@link getElementChild}
     */
    getChild(index: number): Element;

    /**
     * @see {@link getElementChildren}
     */
    getChildren(theType?: string): LuaTable;

    /**
     * @see {@link getElementChildrenCount}
     */
    getChildrenCount(): number;

    /**
     * @see {@link getElementColShape}
     */
    getColShape(): ColShape;

    /**
     * @see {@link getElementData}
     */
    getData(key: string, inherit?: boolean): any;

    /**
     * @see {@link getElementDimension}
     */
    getDimension(): number;

    /**
     * @see {@link getElementHealth}
     */
    getHealth(): number;

    /**
     * @see {@link getElementID}
     */
    getID(): string;

    /**
     * @see {@link getElementInterior}
     */
    getInterior(): number;

    /**
     * @see {@link getElementMatrix}
     */
    getMatrix(legacy?: boolean): LuaTable;

    /**
     * @see {@link getElementModel}
     */
    getModel(): number;

    /**
     * @see {@link getElementParent}
     */
    getParent(): Element;

    /**
     * @see {@link getElementPosition}
     */
    getPosition(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getElementRotation}
     */
    getRotation(rotOrder?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getElementType}
     */
    getType(): string;

    /**
     * @see {@link getElementVelocity}
     */
    getVelocity(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getLowLODElement}
     */
    getLowLOD(): Element;

    /**
     * @see {@link isElementAttached}
     */
    isAttached(): boolean;

    /**
     * @see {@link isElementDoubleSided}
     */
    isDoubleSided(): boolean;

    /**
     * @see {@link isElementFrozen}
     */
    isFrozen(): boolean;

    /**
     * @see {@link isElementInWater}
     */
    isInWater(): boolean;

    /**
     * @see {@link isElementLowLOD}
     */
    isLowLOD(): boolean;

    /**
     * @see {@link isElementWithinMarker}
     */
    isWithinMarker(theMarker: Marker): boolean;

    /**
     * @see {@link setElementAlpha}
     */
    setAlpha(alpha: number): boolean;

    /**
     * @see {@link setElementAngularVelocity}
     */
    setAngularVelocity(rx: number, ry: number, rz: number): boolean;

    /**
     * @see {@link getElementAngularVelocity}
     */
    getAngularVelocity(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link setElementAttachedOffsets}
     */
    setAttachedOffsets(
        xPosOffset: number,
        yPosOffset: number,
        zPosOffset: number,
        xRotOffset: number,
        yRotOffset: number,
        zRotOffset: number
    ): boolean;

    /**
     * @see {@link setElementCollisionsEnabled}
     */
    setCollisionsEnabled(enabled: boolean): boolean;

    /**
     * @see {@link setElementData}
     */
    setData(key: string, value: any, synchronize?: boolean): boolean;

    /**
     * @see {@link setElementDimension}
     */
    setDimension(dimension: number): boolean;

    /**
     * @see {@link setElementDoubleSided}
     */
    setDoubleSided(enable: boolean): boolean;

    /**
     * @see {@link setElementFrozen}
     */
    setFrozen(freezeStatus: boolean): boolean;

    /**
     * @see {@link setElementHealth}
     */
    setHealth(newHealth: number): boolean;

    /**
     * @see {@link setElementID}
     */
    setID(name: string): boolean;

    /**
     * @see {@link setElementInterior}
     */
    setInterior(interior: number, x?: number, y?: number, z?: number): boolean;

    /**
     * @see {@link setElementModel}
     */
    setModel(model: number): boolean;

    /**
     * @see {@link setElementParent}
     */
    setParent(parent: Element): boolean;

    /**
     * @see {@link setElementPosition}
     */
    setPosition(x: number, y: number, z: number, warp?: boolean): boolean;

    /**
     * @see {@link setElementRotation}
     */
    setRotation(rotX: number, rotY: number, rotZ: number, rotOrder?: string, conformPedRotation?: boolean): boolean;

    /**
     * @see {@link setElementVelocity}
     */
    setVelocity(speedX: number, speedY: number, speedZ: number): boolean;

    /**
     * @see {@link setLowLODElement}
     */
    setLowLOD(lowLODElement: Element): boolean;
}
