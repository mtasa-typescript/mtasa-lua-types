import { Player, Vehicle } from "./element";
import { element } from "./dx";
import { table } from "./MTA";

export function setVehicleColor(
    theVehicle: Vehicle,
    r1: number,
    g1: number,
    b1: number,
    r2?: number,
    g2?: number,
    b2?: number,
    r3?: number,
    g3?: number,
    b3?: number,
    r4?: number,
    g4?: number,
    b4?: number,
): boolean;

export function setTrainSpeed(train: Vehicle, speed: number): boolean;

export function setVehiclePanelState(theVehicle: Vehicle, panelID: number, state: number): boolean;

export function detachTrailerFromVehicle(theVehicle: Vehicle, theTrailer?: Vehicle): boolean;

export function setVehicleTurretPosition(turretVehicle: Vehicle, positionX: number, positionY: number): boolean;

export function setVehicleDoorOpenRatio(theVehicle: Vehicle, door: number, ratio: number, time?: 0): boolean;

export function setVehicleRespawnPosition(
    theVehicle: Vehicle,
    x: number,
    y: number,
    z: number,
    rx?: number,
    ry?: number,
    rz?: number,
): boolean;

export function setVehicleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean;

export function setVehicleHandling(theVehicle: element, property: string, value: object): boolean;

export function setVehiclePlateText(theVehicle: element, numberplate: string): boolean;

export function setVehicleHeadLightColor(theVehicle: Vehicle, red: number, green: number, blue: number): boolean;

export function setTrainDirection(train: Vehicle, clockwise: boolean): boolean;

export function setTrainDerailable(derailableVehicle: Vehicle, derailable: boolean): boolean;

export function fixVehicle(theVehicle: Vehicle): boolean;

export function addVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

export function createVehicle(
    model: number,
    x: number,
    y: number,
    z: number,
    rx?: number,
    ry?: number,
    rz?: number,
    numberplate?: string,
    bDirection?: boolean,
    variant1?: number,
    variant2?: number,
): Vehicle;

export function setVehicleSirensOn(theVehicle: Vehicle, sirensOn: boolean): boolean;

export function getVehicleSirens(theVehicle: Vehicle): table;

export function setVehicleWheelStates(
    theVehicle: Vehicle,
    frontLeft: number,
    rearLeft?: -1,
    frontRight?: -1,
    rearRight?: -1,
): boolean;

export function isVehicleDamageProof(theVehicle: Vehicle): boolean;

export function getVehiclePlateText(theVehicle: Vehicle): string;

export function isTrainChainEngine(theTrain: Vehicle): boolean;

export function getVehicleTurnVelocity(theVehicle?: Vehicle): [number, number, number];

export function respawnVehicle(theVehicle: Vehicle): boolean;

export function isTrainDerailable(vehicleToCheck: Vehicle): boolean;

export function getTrainDirection(train: Vehicle): boolean;

export function getVehicleTowedByVehicle(theVehicle: Vehicle): Vehicle;

export function resetVehicleExplosionTime(theVehicle: Vehicle): boolean;

export function isTrainDerailed(vehicleToCheck: Vehicle): boolean;

export function resetVehicleIdleTime(theVehicle: Vehicle): boolean;

export function spawnVehicle(
    theVehicle: Vehicle,
    x: number,
    y: number,
    z: number,
    rx?: number,
    ry?: number,
    rz?: number,
): boolean;

export function isVehicleFuelTankExplodable(theVehicle: Vehicle): boolean;

export function setVehicleOverrideLights(theVehicle: Vehicle, value: number): boolean;

export function setTrainPosition(train: Vehicle, position: number): boolean;

export function setModelHandling(modelId: number, property: string, value: object): boolean;

export function addVehicleSirens(
    theVehicle: Vehicle,
    sirenCount: number,
    sirenType: number,
    visible360flag?: false,
    checkLosFlag?: true,
    useRandomiser?: true,
    silentFlag?: false,
): boolean;

export function removeVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

export function blowVehicle(vehicleToBlow: Vehicle, explode?: true): boolean;

export function attachTrailerToVehicle(theVehicle: Vehicle, theTrailer: Vehicle): boolean;

export function getVehiclesOfType(model: number): table;

export function setVehicleSirens(
    theVehicle: Vehicle,
    sirenPonumber: number,
    posX: number,
    posY: number,
    posZ: number,
    red: number,
    green: number,
    blue: number,
    alpha?: 255,
    minAlpha?: 0.0,
): boolean;

export function setTrainDerailed(vehicleToDerail: Vehicle, derailed: boolean): boolean;

export function removeVehicleSirens(theVehicle: Vehicle): boolean;

export function setVehicleTaxiLightOn(taxi: Vehicle, LightState: boolean): boolean;

export function getVehicleTowingVehicle(theVehicle: Vehicle): Vehicle;

export function setVehicleDamageProof(theVehicle: Vehicle, damageProof: boolean): boolean;

export function getVehicleOverrideLights(theVehicle: Vehicle): number;

export function getVehicleType(theVehicle: Vehicle): string;

export function setVehicleVariant(theVehicle: Vehicle, variant1?: number, variant2?: number): boolean;

export function toggleVehicleRespawn(theVehicle: Vehicle, Respawn: boolean): boolean;

export function isVehicleTaxiLightOn(taxi: Vehicle): boolean;

export function getVehicleSirenParams(theVehicle: Vehicle): table;

export function isVehicleOnGround(theVehicle: Vehicle): boolean;

export function getVehicleOccupant(theVehicle: Vehicle, seat?: 0): Player;

export function isVehicleBlown(theVehicle: Vehicle): boolean;

export function getTrainSpeed(train: Vehicle): number;

export function setVehicleLightState(theVehicle: Vehicle, light: number, state: number): boolean;

export function getTrainPosition(train: Vehicle): number;

export function getVehicleHandling(theVehicle: element): table;

export function getVehicleCompatibleUpgrades(theVehicle: Vehicle, slot?: number): table;

export function getVehicleDoorState(theVehicle: Vehicle, door: number): number;

export function getVehiclePanumberjob(theVehicle: Vehicle): number;

export function getModelHandling(modelId: number): table;

export function isVehicleLocked(theVehicle: Vehicle): boolean;

export function getVehicleMaxPassengers(theVehicleOrModel: Vehicle | number): number;

export function getVehicleHeadLightColor(theVehicle: Vehicle): [number, number, number];

export function getVehicleWheelStates(theVehicle: Vehicle): [number, number, number, number];

export function getVehicleName(theVehicle: Vehicle): string;

export function getVehiclePanelState(theVehicle: Vehicle, panel: number): number;

export function getVehicleModelFromName(name: string): number;

export function getVehicleNameFromModel(model: number): string;

export function getOriginalHandling(modelID: number): table;

export function getVehicleEngineState(theVehicle: Vehicle): boolean;

export function getVehicleLandingGearDown(theVehicle: Vehicle): boolean;

export function getVehicleLightState(theVehicle: Vehicle, light: number): number;

export function getVehicleColor(theVehicle: Vehicle): [number, number, number, number];

export function getVehicleController(theVehicle: Vehicle): Player;

export function getVehicleUpgrades(theVehicle: Vehicle): table;

export function getVehicleSirensOn(theVehicle: Vehicle): boolean;

export function getVehicleTurretPosition(turretVehicle: Vehicle): [number, number];

export function setVehiclePanumberjob(theVehicle: Vehicle, value: number): boolean;

export function setVehicleDoorsUndamageable(theVehicle: Vehicle, state: boolean): boolean;

export function setVehicleLandingGearDown(theVehicle: Vehicle, gearState: boolean): boolean;

export function setVehicleDoorState(theVehicle: Vehicle, door: number, state: number): boolean;

export function getVehicleOccupants(theVehicle: Vehicle): table;

export function getVehicleUpgradeOnSlot(theVehicle: Vehicle, slot: number): number;

export function setVehicleLocked(theVehicle: Vehicle, locked: boolean): boolean;

export function getVehicleUpgradeSlotName(slot_or_upgrade: number): string;

export function setVehicleEngineState(theVehicle: Vehicle, engineState: boolean): boolean;

export function setVehicleIdleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean;

export function setVehicleFuelTankExplodable(theVehicle: Vehicle, explodable: boolean): boolean;

export function getVehicleVariant(theVehicle: Vehicle): [number, number];

export function setVehicleTurnVelocity(theVehicle: Vehicle, rx: number, ry: number, rz: number): boolean;

export function getVehicleDoorOpenRatio(theVehicle: Vehicle, door: number): number;
