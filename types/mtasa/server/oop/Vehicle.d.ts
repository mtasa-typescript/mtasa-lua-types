/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Player, Table } from 'types/mtasa/server/structure';

export class Vehicle {
    /**
     * @see {@link getVehicleRespawnPosition}
     */
    respawnPosition: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getVehicleRespawnRotation}
     */
    respawnRotation: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link setVehicleIdleRespawnDelay}
     */
    idleRespawnDelay: boolean;
    /**
     * @see {@link setVehicleRespawnDelay}
     */
    respawnDelay: boolean;
    /**
     * @see {@link blowVehicle}
     */
    blown: boolean;
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
     * @see {@link setVehicleDoorsUndamageable}
     */
    doorsUndamageable: boolean;

    /**
     * @see {@link getVehicleRespawnPosition}
     */
    getRespawnPosition(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getVehicleRespawnRotation}
     */
    getRespawnRotation(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link setVehicleIdleRespawnDelay}
     */
    setIdleRespawnDelay(timeDelay: number): boolean;

    /**
     * @see {@link setVehicleRespawnDelay}
     */
    setRespawnDelay(timeDelay: number): boolean;

    /**
     * @see {@link setVehicleRespawnPosition}
     */
    setRespawnPosition(x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean;

    /**
     * @see {@link setVehicleRespawnRotation}
     */
    setRespawnRotation(rx: number, ry: number, rz: number): boolean;

    /**
     * @see {@link blowVehicle}
     */
    blow(vehicleToBlow: Vehicle, explode: boolean): boolean;

    /**
     * @see {@link detachTrailerFromVehicle}
     */
    detachTrailer(theTrailer?: Vehicle): boolean;

    /**
     * @see {@link getTrainDirection}
     */
    getDirection(train: Vehicle): boolean;

    /**
     * @see {@link getTrainPosition}
     */
    getTrainPosition(train: Vehicle): number;

    /**
     * @see {@link getTrainSpeed}
     */
    getSpeed(train: Vehicle): number;

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
    getHandling(theVehicle: Element): Table;

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
