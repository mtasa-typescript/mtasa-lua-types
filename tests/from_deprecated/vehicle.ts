import { mtasa as server } from '../../types/mtasa/server';
import { mtasa as client } from '../../types/mtasa/client';

const serverVehicle = 0 as unknown as server.Vehicle;
const clientVehicle = 0 as unknown as client.Vehicle;

const setVehicleColor1: boolean = server.setVehicleColor(
    serverVehicle,
    255,
    255,
    255,
);

const setVehicleColor2: boolean = server.setVehicleColor(
    serverVehicle,
    255,
    255,
    255,
    200,
    126,
    190,
    65,
    64,
    63,
);

const setTrainSpeed: boolean = server.setTrainSpeed(serverVehicle, 200);

const setVehiclePanelState: boolean = server.setVehiclePanelState(
    serverVehicle,
    40,
    50,
);

const detachTrailerFromVehicle: boolean =
    server.detachTrailerFromVehicle(serverVehicle);

const setVehicleTurretPosition: boolean = server.setVehicleTurretPosition(
    serverVehicle,
    45,
    46,
);

const setVehicleDoorOpenRatio1: boolean = server.setVehicleDoorOpenRatio(
    serverVehicle,
    4,
    3,
    100,
);

const setVehicleDoorOpenRatio2: boolean = server.setVehicleDoorOpenRatio(
    serverVehicle,
    4,
    3,
    100,
);

const setVehicleRespawnPosition: boolean = server.setVehicleRespawnPosition(
    serverVehicle,
    45,
    0,
    -9,
);

const setVehicleRespawnDelay: boolean = server.setVehicleRespawnDelay(
    serverVehicle,
    90,
);

const setVehicleHandling: boolean = server.setVehicleHandling(
    serverVehicle,
    'property',
    90,
);

const setVehiclePlateText: boolean = server.setVehiclePlateText(
    serverVehicle,
    'platetext',
);

const setVehicleHeadLightColor: boolean = server.setVehicleHeadLightColor(
    serverVehicle,
    65,
    70,
    255,
);

const setTrainDirection: boolean = server.setTrainDirection(
    serverVehicle,
    false,
);

const setTrainDerailable: boolean = server.setTrainDerailable(
    serverVehicle,
    true,
);

const fixVehicle: boolean = server.fixVehicle(serverVehicle);

const addVehicleUpgrade: boolean = server.addVehicleUpgrade(serverVehicle, 60);

const createVehicle: server.Vehicle = server.createVehicle(411, 67, 68, 69);

const setVehicleSirensOn: boolean = server.setVehicleSirensOn(
    serverVehicle,
    true,
);

const getVehicleSirens: LuaTable = server.getVehicleSirens(serverVehicle);

const setVehicleWheelStates2: boolean = server.setVehicleWheelStates(
    serverVehicle,
    4,
    3,
    2,
    4,
);

const setVehicleWheelStates1: boolean = server.setVehicleWheelStates(
    serverVehicle,
    4,
);

const isVehicleDamageProof: boolean =
    server.isVehicleDamageProof(serverVehicle);

const getVehiclePlateText: string = server.getVehiclePlateText(serverVehicle);

const isTrainChainEngine: boolean = client.isTrainChainEngine(clientVehicle);

const respawnVehicle: boolean = server.respawnVehicle(serverVehicle);

const isTrainDerailable: boolean = server.isTrainDerailable(serverVehicle);

const getTrainDirection: boolean = server.getTrainDirection(serverVehicle);

const getVehicleTowedByVehicle: server.Vehicle =
    server.getVehicleTowedByVehicle(serverVehicle);

const resetVehicleExplosionTime: boolean =
    server.resetVehicleExplosionTime(serverVehicle);

const isTrainDerailed: boolean = server.isTrainDerailed(serverVehicle);

const resetVehicleIdleTime: boolean =
    server.resetVehicleIdleTime(serverVehicle);

const spawnVehicle: boolean = server.spawnVehicle(serverVehicle, 56, 57, 58);

const isVehicleFuelTankExplodable: boolean =
    server.isVehicleFuelTankExplodable(serverVehicle);

const setVehicleOverrideLights: boolean = server.setVehicleOverrideLights(
    serverVehicle,
    40,
);

const setTrainPosition: boolean = server.setTrainPosition(serverVehicle, 3);

const setModelHandling: boolean = server.setModelHandling(411, 'prop', 50);

const addVehicleSirens1: boolean = server.addVehicleSirens(
    serverVehicle,
    56,
    57,
);

const addVehicleSirens2: boolean = server.addVehicleSirens(
    serverVehicle,
    56,
    57,
    false,
    true,
    true,
    false,
);

const removeVehicleUpgrade: boolean = server.removeVehicleUpgrade(
    serverVehicle,
    65,
);

const blowVehicle: boolean = server.blowVehicle(serverVehicle);

const attachTrailerToVehicle: boolean = server.attachTrailerToVehicle(
    serverVehicle,
    serverVehicle,
);

const getVehiclesOfType: LuaTable = server.getVehiclesOfType(411);

const setVehicleSirens: boolean = server.setVehicleSirens(
    serverVehicle,
    5,
    13,
    15,
    16,
    255,
    255,
    13,
);

const setTrainDerailed: boolean = server.setTrainDerailed(serverVehicle, true);

const removeVehicleSirens: boolean = server.removeVehicleSirens(serverVehicle);

const setVehicleTaxiLightOn: boolean = server.setVehicleTaxiLightOn(
    serverVehicle,
    true,
);

const getVehicleTowingVehicle: server.Vehicle =
    server.getVehicleTowingVehicle(serverVehicle);

const setVehicleDamageProof: boolean = server.setVehicleDamageProof(
    serverVehicle,
    false,
);

const getVehicleOverrideLights: number =
    server.getVehicleOverrideLights(serverVehicle);

const getVehicleType: string = server.getVehicleType(serverVehicle);

const setVehicleVariant: boolean = server.setVehicleVariant(serverVehicle);

const toggleVehicleRespawn: boolean = server.toggleVehicleRespawn(
    serverVehicle,
    false,
);

const isVehicleTaxiLightOn: boolean =
    server.isVehicleTaxiLightOn(serverVehicle);

const getVehicleSirenParams: LuaTable =
    server.getVehicleSirenParams(serverVehicle);

const isVehicleOnGround: boolean = server.isVehicleOnGround(serverVehicle);

const getVehicleOccupant: server.Player =
    server.getVehicleOccupant(serverVehicle);

const isVehicleBlown: boolean = server.isVehicleBlown(serverVehicle);

const getTrainSpeed: number = server.getTrainSpeed(serverVehicle);

const setVehicleLightState: boolean = server.setVehicleLightState(
    serverVehicle,
    4,
    1,
);

const getTrainPosition: number = server.getTrainPosition(serverVehicle);

const getVehicleHandling: LuaTable = server.getVehicleHandling(serverVehicle);

const getVehicleCompatibleUpgrades: LuaTable =
    server.getVehicleCompatibleUpgrades(serverVehicle);

const getVehicleDoorState: number = server.getVehicleDoorState(
    serverVehicle,
    4,
);

const getVehiclePaintjob: number = server.getVehiclePaintjob(serverVehicle);

const getModelHandling: LuaTable = server.getModelHandling(543);

const isVehicleLocked: boolean = server.isVehicleLocked(serverVehicle);

const getVehicleMaxPassengers: number =
    server.getVehicleMaxPassengers(serverVehicle);

const getVehicleHeadLightColor: LuaMultiReturn<[number, number, number]> =
    server.getVehicleHeadLightColor(serverVehicle);

const getVehicleWheelStates: LuaMultiReturn<[number, number, number, number]> =
    server.getVehicleWheelStates(serverVehicle);

const getVehicleName: string = server.getVehicleName(serverVehicle);

const getVehiclePanelState: number = server.getVehiclePanelState(
    serverVehicle,
    6,
);

const getVehicleModelFromName: number =
    server.getVehicleModelFromName('NRG-500');

const getVehicleNameFromModel: string = server.getVehicleNameFromModel(411);

const getOriginalHandling: LuaTable = server.getOriginalHandling(453);

const getVehicleEngineState: boolean =
    server.getVehicleEngineState(serverVehicle);

const getVehicleLandingGearDown: boolean =
    server.getVehicleLandingGearDown(serverVehicle);

const getVehicleLightState: number = server.getVehicleLightState(
    serverVehicle,
    4,
);

const getVehicleColor: LuaMultiReturn<
    [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ]
> = server.getVehicleColor(serverVehicle, true);

const getVehicleController: server.Player =
    server.getVehicleController(serverVehicle);

const getVehicleUpgrades: LuaTable = server.getVehicleUpgrades(serverVehicle);

const getVehicleSirensOn: boolean = server.getVehicleSirensOn(serverVehicle);

const getVehicleTurretPosition: LuaMultiReturn<[number, number]> =
    server.getVehicleTurretPosition(serverVehicle);

const setVehiclePaintJob: boolean = server.setVehiclePaintjob(serverVehicle, 2);

const setVehicleDoorsUndamageable: boolean = server.setVehicleDoorsUndamageable(
    serverVehicle,
    true,
);

const setVehicleLandingGearDown: boolean = server.setVehicleLandingGearDown(
    serverVehicle,
    false,
);

const setVehicleDoorState: boolean = server.setVehicleDoorState(
    serverVehicle,
    3,
    1,
);

const getVehicleOccupants: LuaTable = server.getVehicleOccupants(serverVehicle);

const getVehicleUpgradeOnSlot: number = server.getVehicleUpgradeOnSlot(
    serverVehicle,
    2,
);

const setVehicleLocked: boolean = server.setVehicleLocked(serverVehicle, true);

const getVehicleUpgradeSlotName: string = server.getVehicleUpgradeSlotName(3);

const setVehicleEngineState: boolean = server.setVehicleEngineState(
    serverVehicle,
    false,
);

const setVehicleIdleRespawnDelay: boolean = server.setVehicleIdleRespawnDelay(
    serverVehicle,
    50,
);

const setVehicleFuelTankExplodable: boolean =
    server.setVehicleFuelTankExplodable(serverVehicle, false);

const getVehicleVariant: LuaMultiReturn<[number, number]> =
    server.getVehicleVariant(serverVehicle);

const getVehicleDoorOpenRatio: number = server.getVehicleDoorOpenRatio(
    serverVehicle,
    3,
);
