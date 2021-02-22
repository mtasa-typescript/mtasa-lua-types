/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Player, Table } from '../structure';

export class Vehicle {
    /**
     * @see {@link areVehicleLightsOn}
     */
    lightsOn: boolean;
    /**
     * @see {@link getHeliBladeCollisionsEnabled}
     */
    heliBladeCollisionsEnabled: boolean;
    /**
     * @see {@link getHelicopterRotorSpeed}
     */
    helicopterRotorSpeed: number;
    /**
     * @see {@link getVehicleComponents}
     */
    components: Table;
    /**
     * @see {@link getVehicleWheelScale}
     */
    wheelScale: number;
    /**
     * @see {@link isTrainChainEngine}
     */
    chainEngine: boolean;
    /**
     * @see {@link getTrainDirection}
     */
    direction: boolean;
    /**
     * @see {@link getTrainPosition}
     */
    trainPosition: number;
    /**
     * @see {@link getTrainSpeed}
     */
    trainSpeed: number;
    /**
     * @see {@link getVehicleCompatibleUpgrades}
     */
    compatibleUpgrades: Table;
    /**
     * @see {@link getVehicleController}
     */
    controller: Player;
    /**
     * @see {@link getVehicleEngineState}
     */
    engineState: boolean;
    /**
     * @see {@link getVehicleHandling}
     */
    handling: Table;
    /**
     * @see {@link getVehicleLandingGearDown}
     */
    landingGearDown: boolean;
    /**
     * @see {@link getVehicleMaxPassengers}
     */
    maxPassengers: number;
    /**
     * @see {@link getVehicleName}
     */
    name: string;
    /**
     * @see {@link getVehicleOccupants}
     */
    occupants: Table;
    /**
     * @see {@link getVehicleOverrideLights}
     */
    overrideLights: number;
    /**
     * @see {@link getVehiclePaintjob}
     */
    paintjob: number;
    /**
     * @see {@link getVehiclePlateText}
     */
    plateText: string;
    /**
     * @see {@link getVehicleSirenParams}
     */
    sirenParams: Table;
    /**
     * @see {@link getVehicleSirens}
     */
    sirens: Table;
    /**
     * @see {@link getVehicleSirensOn}
     */
    sirensOn: boolean;
    /**
     * @see {@link getVehicleTowedByVehicle}
     */
    towedByVehicle: Vehicle;
    /**
     * @see {@link getVehicleTowingVehicle}
     */
    towingVehicle: Vehicle;
    /**
     * @see {@link getVehicleTurretPosition}
     */
    turretPosition: LuaMultiReturn<[number, number]>;
    /**
     * @see {@link getVehicleType}
     */
    vehicleType: string;
    /**
     * @see {@link getVehicleUpgrades}
     */
    upgrades: Table;
    /**
     * @see {@link isTrainDerailable}
     */
    derailable: boolean;
    /**
     * @see {@link isTrainDerailed}
     */
    derailed: boolean;
    /**
     * @see {@link isVehicleBlown}
     */
    blown: boolean;
    /**
     * @see {@link isVehicleDamageProof}
     */
    damageProof: boolean;
    /**
     * @see {@link isVehicleLocked}
     */
    locked: boolean;
    /**
     * @see {@link isVehicleOnGround}
     */
    onGround: boolean;
    /**
     * @see {@link isVehicleTaxiLightOn}
     */
    taxiLightOn: boolean;

    /**
     * @see {@link areVehicleLightsOn}
     */
    areLightsOn(): boolean;

    /**
     * @see {@link getHeliBladeCollisionsEnabled}
     */
    areHeliBladeCollisionsEnabled(): boolean;

    /**
     * @see {@link getHelicopterRotorSpeed}
     */
    getHelicopterRotorSpeed(): number;

    /**
     * @see {@link getVehicleComponentPosition}
     */
    getComponentPosition(theComponent: string, base?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleComponentRotation}
     */
    getComponentRotation(theComponent: string, base?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleComponentScale}
     */
    getComponentScale(theComponent: string, base?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleComponentVisible}
     */
    getComponentVisible(theComponent: string): boolean;

    /**
     * @see {@link getVehicleComponents}
     */
    getComponents(): Table;

    /**
     * @see {@link getVehicleDummyPosition}
     */
    getDummyPosition(dummy: string): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleModelDummyPosition}
     */
    getVehicleModelDummyPosition(modelID: number, dummy: string): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleModelExhaustFumesPosition}
     */
    getModelExhaustFumesPosition(modelID: number): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleModelWheelSize}
     */
    getModelWheelSize(vehicleModel: number, wheelGroup?: string): number | Table;

    /**
     * @see {@link getVehicleWheelScale}
     */
    getWheelScale(): number;

    /**
     * @see {@link isTrainChainEngine}
     */
    isTrainChainEngine(): boolean;

    /**
     * @see {@link resetVehicleDummyPositions}
     */
    resetDummyPositions(): boolean;

    /**
     * @see {@link setHeliBladeCollisionsEnabled}
     */
    setHeliBladeCollisionsEnabled(collisions: boolean): boolean;

    /**
     * @see {@link setHelicopterRotorSpeed}
     */
    setHelicopterRotorSpeed(speed: number): boolean;

    /**
     * @see {@link setVehicleComponentPosition}
     */
    setComponentPosition(theComponent: string, posX: number, posY: number, posZ: number, base?: string): boolean;

    /**
     * @see {@link setVehicleComponentRotation}
     */
    setComponentRotation(theComponent: string, rotX: number, rotY: number, rotZ: number, base?: string): boolean;

    /**
     * @see {@link setVehicleComponentScale}
     */
    setComponentScale(theComponent: string, scaleX: number, scaleY: number, scaleZ: number, base?: string): boolean;

    /**
     * @see {@link setVehicleComponentVisible}
     */
    setComponentVisible(theComponent: string, visible: boolean): boolean;

    /**
     * @see {@link setVehicleDummyPosition}
     */
    setDummyPosition(dummy: string, x: number, y: number, z: number): boolean;

    /**
     * @see {@link setVehicleModelDummyPosition}
     */
    setVehicleModelDummyPosition(modelID: number, dummy: string, x: number, y: number, z: number): boolean;

    /**
     * @see {@link setVehicleModelExhaustFumesPosition}
     */
    setModelExhaustFumesPosition(modelID: number, posX: number, posY: number, posZ: number): boolean;

    /**
     * @see {@link setVehicleModelWheelSize}
     */
    setModelWheelSize(vehicleModel: number, wheelGroup: string, wheelSize: number): boolean;

    /**
     * @see {@link setVehicleWheelScale}
     */
    setWheelScale(wheelScale: number): boolean;

    /**
     * @see {@link detachTrailerFromVehicle}
     */
    detachTrailer(theTrailer?: Vehicle): boolean;

    /**
     * @see {@link getTrainDirection}
     */
    getDirection(): boolean;

    /**
     * @see {@link getTrainPosition}
     */
    getTrainPosition(): number;

    /**
     * @see {@link getTrainSpeed}
     */
    getSpeed(): number;

    /**
     * @see {@link getVehicleColor}
     */
    getColor(
        bRGB: boolean,
    ): LuaMultiReturn<[number, number, number, number, number, number, number, number, number, number, number, number]>;

    /**
     * @see {@link getVehicleCompatibleUpgrades}
     */
    getCompatibleUpgrades(slot?: number): Table;

    /**
     * @see {@link getVehicleController}
     */
    getController(): Player;

    /**
     * @see {@link getVehicleDoorOpenRatio}
     */
    getDoorOpenRatio(door: number): number;

    /**
     * @see {@link getVehicleDoorState}
     */
    getDoorState(door: number): number;

    /**
     * @see {@link getVehicleEngineState}
     */
    getEngineState(): boolean;

    /**
     * @see {@link getVehicleHandling}
     */
    getHandling(): Table;

    /**
     * @see {@link getVehicleHeadLightColor}
     */
    getHeadLightColor(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleLandingGearDown}
     */
    getLangingGearDown(): boolean;

    /**
     * @see {@link getVehicleLightState}
     */
    getLightState(light: number): number;

    /**
     * @see {@link getVehicleMaxPassengers}
     */
    getMaxPassengers(): number;

    /**
     * @see {@link getVehicleName}
     */
    getName(): string;

    /**
     * @see {@link getVehicleOccupants}
     */
    getOccupants(): Table;

    /**
     * @see {@link getVehicleOverrideLights}
     */
    getOverrideLights(): number;

    /**
     * @see {@link getVehiclePaintjob}
     */
    getPaintjob(): number;

    /**
     * @see {@link getVehiclePanelState}
     */
    getPanelState(panel: number): number;

    /**
     * @see {@link getVehiclePlateText}
     */
    getPlateText(): string;

    /**
     * @see {@link getVehicleSirenParams}
     */
    getSirenParams(): Table;

    /**
     * @see {@link getVehicleSirens}
     */
    getSirens(): Table;

    /**
     * @see {@link getVehicleSirensOn}
     */
    areSirensOn(): boolean;

    /**
     * @see {@link getVehicleTowedByVehicle}
     */
    getTowedByVehicle(): Vehicle;

    /**
     * @see {@link getVehicleTowingVehicle}
     */
    getTowingVehicle(): Vehicle;

    /**
     * @see {@link getVehicleTurretPosition}
     */
    getTurretPosition(): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link getVehicleType}
     */
    getVehicleType(): string;

    /**
     * @see {@link getVehicleUpgrades}
     */
    getUpgrades(): Table;

    /**
     * @see {@link getVehicleVariant}
     */
    getVariant(): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link getVehicleWheelStates}
     */
    getWheelStates(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * @see {@link isTrainDerailable}
     */
    isDerailable(): boolean;

    /**
     * @see {@link isTrainDerailed}
     */
    isDerailed(): boolean;

    /**
     * @see {@link isVehicleBlown}
     */
    isBlown(): boolean;

    /**
     * @see {@link isVehicleDamageProof}
     */
    isDamageProof(): boolean;

    /**
     * @see {@link isVehicleLocked}
     */
    isLocked(): boolean;

    /**
     * @see {@link isVehicleOnGround}
     */
    isOnGround(): boolean;

    /**
     * @see {@link isVehicleTaxiLightOn}
     */
    isTaxiLightOn(): boolean;

    /**
     * @see {@link setTrainDerailable}
     */
    setDerailable(derailable: boolean): boolean;

    /**
     * @see {@link setTrainDerailed}
     */
    setDerailed(derailed: boolean): boolean;

    /**
     * @see {@link setTrainDirection}
     */
    setDirection(clockwise: boolean): boolean;

    /**
     * @see {@link setTrainPosition}
     */
    setTrainPosition(position: number): boolean;

    /**
     * @see {@link setTrainSpeed}
     */
    setSpeed(speed: number): boolean;

    /**
     * @see {@link setVehicleColor}
     */
    setColor(
        r1: number,
        g1: number,
        b1: number,
        r2: number,
        g2: number,
        b2: number,
        r3: number,
        g3: number,
        b3: number,
        r4: number,
        g4: number,
        b4: number,
    ): boolean;

    /**
     * @see {@link setVehicleDamageProof}
     */
    setDamageProof(damageProof: boolean): boolean;

    /**
     * @see {@link setVehicleDoorOpenRatio}
     */
    setDoorOpenRatio(door: number, ratio: number, time?: number): boolean;

    /**
     * @see {@link setVehicleDoorState}
     */
    setDoorState(door: number, state: number): boolean;

    /**
     * @see {@link setVehicleDoorsUndamageable}
     */
    setDoorsUndamageable(state: boolean): boolean;

    /**
     * @see {@link setVehicleEngineState}
     */
    setEngineState(engineState: boolean): boolean;

    /**
     * @see {@link setVehicleHeadLightColor}
     */
    setHeadLightColor(red: number, green: number, blue: number): boolean;

    /**
     * @see {@link setVehicleLightState}
     */
    setLightState(light: number, state: number): boolean;

    /**
     * @see {@link setVehicleLocked}
     */
    setLocked(locked: boolean): boolean;

    /**
     * @see {@link setVehicleOverrideLights}
     */
    setOverrideLights(value: number): boolean;

    /**
     * @see {@link setVehiclePanelState}
     */
    setPanelState(panelID: number, state: number): boolean;

    /**
     * @see {@link setVehiclePlateText}
     */
    setPlateText(theVehicle: Element, numberplate: string): boolean;

    /**
     * @see {@link setVehicleSirens}
     */
    setSirens(
        sirenPoint: number,
        posX: number,
        posY: number,
        posZ: number,
        red: number,
        green: number,
        blue: number,
        alpha: number,
        minAlpha: number,
    ): boolean;

    /**
     * @see {@link setVehicleSirensOn}
     */
    setSirensOn(sirensOn: boolean): boolean;

    /**
     * @see {@link setVehicleTaxiLightOn}
     */
    setTaxiLightOn(LightState: boolean): boolean;

    /**
     * @see {@link setVehicleTurretPosition}
     */
    setTurretPosition(positionX: number, positionY: number): boolean;

    /**
     * @see {@link setVehicleVariant}
     */
    setVariant(variant1?: number, variant2?: number): boolean;

    /**
     * @see {@link setVehicleWheelStates}
     */
    setWheelStates(frontLeft: number, rearLeft: number, frontRight: number, rearRight: number): boolean;
}
