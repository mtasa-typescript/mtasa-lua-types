import { mtasa as client } from '../../types/mtasa/client';
import { mtasa as server } from '../../types/mtasa/server';

// Workaround to get some arguments
const serverElement = 0 as unknown as client.Element;
const clientPed = 0 as unknown as client.Ped;
const serverPed = 0 as unknown as server.Ped;

const getPedFightingStyle: number = client.getPedFightingStyle(clientPed);

const getPedAmmoInClip: number = client.getPedAmmoInClip(clientPed);

const getPedGravity: number = server.getPedGravity(serverPed);

const getPedOccupiedVehicle: client.Vehicle =
    client.getPedOccupiedVehicle(clientPed);

const setPedStat: boolean = server.setPedStat(serverPed, 15, 16);

const addPedClothes: boolean = server.addPedClothes(
    serverPed,
    'texture',
    'model',
    14,
);

const isPedDucked: boolean = client.isPedDucked(clientPed);

const isPedHeadless: boolean = client.isPedHeadless(clientPed);

const getPedContactElement: client.Element =
    client.getPedContactElement(clientPed);

const createPed: client.Ped = client.createPed(50, 5, 6, 7);

const getPedArmor: number = client.getPedArmor(clientPed);

const setPedOnFire: boolean = client.setPedOnFire(clientPed, true);

const getPedClothes: LuaMultiReturn<[string, string]> = client.getPedClothes(
    clientPed,
    56,
);

const isPedInVehicle: boolean = client.isPedInVehicle(clientPed);

const isPedOnFire: boolean = client.isPedOnFire(clientPed);

const getValidPedModels: LuaTable = client.getValidPedModels();

const getPedWeaponSlot: number = client.getPedWeaponSlot(clientPed);

const killPed: boolean = client.killPed(clientPed);

const reloadPedWeapon: boolean = server.reloadPedWeapon(serverPed);

const isPedOnGround: boolean = client.isPedOnGround(clientPed);

const getPedWeapon: number = client.getPedWeapon(clientPed);

const getPedTarget: client.Element = client.getPedTarget(clientPed);

const isPedDoingGangDriveby: boolean = client.isPedDoingGangDriveby(clientPed);

const getPedWalkingStyle: number = client.getPedWalkingStyle(clientPed);

const getPedStat: number = client.getPedStat(clientPed, 40);

const isPedChoking: boolean = client.isPedChoking(clientPed);

const getPedOccupiedVehicleSeat: number =
    client.getPedOccupiedVehicleSeat(clientPed);

const isPedDead: boolean = client.isPedDead(clientPed);

const setPedAnalogControlState: boolean = client.setPedAnalogControlState(
    clientPed,
    'control',
    10,
);

const setPedWeaponSlot: boolean = client.setPedWeaponSlot(clientPed, 5);

const setPedDoingGangDriveby: boolean = client.setPedDoingGangDriveby(
    clientPed,
    false,
);

const setPedFightingStyle: boolean = client.setPedFightingStyle(clientPed, 2);

const setPedChoking: boolean = server.setPedChoking(serverPed, true);

const getPedTotalAmmo: number = client.getPedTotalAmmo(clientPed);

const setPedArmor: boolean = client.setPedArmor(clientPed, 50);

const setPedAnimation: boolean = client.setPedAnimation(clientPed);

const removePedFromVehicle: boolean = client.removePedFromVehicle(clientPed);

const setPedHeadless: boolean = client.setPedHeadless(clientPed, true);

const removePedClothes: boolean = client.removePedClothes(clientPed, 10);

const setPedAnimationProgress: boolean =
    client.setPedAnimationProgress(clientPed);
