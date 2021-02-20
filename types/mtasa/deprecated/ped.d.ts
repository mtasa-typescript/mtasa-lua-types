import { Ped, Vehicle } from "./element";
import { element } from "./dx";
import { table } from "./MTA";

export function getPedFightingStyle(thePed: Ped): number;

export function getPedAmmoInClip(thePed: Ped, weaponSlot?: number): number;

export function getPedGravity(thePed: Ped): number;

export function isPedFrozen(thePed: Ped): boolean;

export function getPedOccupiedVehicle(thePed: Ped): Vehicle;

export function setPedStat(thePed: Ped, stat: number, value: number): boolean;

export function addPedClothes(thePed: Ped, clothesTexture: string, clothesModel: string, clothesType: number): boolean;

export function isPedDucked(thePed: Ped): boolean;

export function isPedHeadless(thePed: Ped): boolean;

export function getPedContactElement(thePed: Ped): element;

export function createPed(modelid: number, x: number, y: number, z: number, rot?: 0.0, synced?: true): Ped;

export function getPedArmor(thePed: Ped): number;

export function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean;

export function getPedClothes(thePed: Ped, clothesType: number): string;

export function isPedInVehicle(thePed: Ped): boolean;

export function isPedInWater(thePed: Ped): boolean;

export function isPedOnFire(thePed: Ped): boolean;

export function doesPedHaveJetPack(thePed: Ped): boolean;

export function getValidPedModels(): table;

export function getPedWeaponSlot(thePed: Ped): number;

export function killPed(thePed: Ped, theKiller?: Ped, weapon?: 255, bodyPart?: 255, stealth?: false): boolean;

export function reloadPedWeapon(thePed: Ped): boolean;

export function isPedOnGround(thePed: Ped): boolean;

export function getPedWeapon(thePed: Ped, weaponSlot?: number): number;

export function getPedTarget(thePed: Ped): element;

export function isPedDoingGangDriveby(thePed: Ped): boolean;

export function givePedJetPack(thePed: Ped): boolean;

export function getPedWalkingStyle(thePed: Ped): number;

export function getPedStat(thePed: Ped, stat: number): number;

export function isPedChoking(thePed: Ped): boolean;

export function removePedJetPack(thePed: Ped): boolean;

export function getPedOccupiedVehicleSeat(thePed: Ped): number;

export function isPedDead(thePed: Ped): boolean;

export function setPedAnalogControlState(thePed: Ped, control: string, state: number): boolean;

export function setPedWeaponSlot(thePed: Ped, weaponSlot: number): boolean;

export function setPedDoingGangDriveby(thePed: Ped, state: boolean): boolean;

export function setPedFightingStyle(thePed: Ped, style: number): boolean;

export function setPedChoking(thePed: Ped, choking: boolean): boolean;

export function getPedTotalAmmo(thePed: Ped, weaponSlot?: number): number;

export function setPedArmor(thePed: Ped, armor: number): boolean;

export function setPedAnimation(
    thePed: Ped,
    block?: string,
    anim?: string,
    time?: -1,
    loop?: true,
    updatePosition?: true,
    numbererruptable?: true,
    freezeLastFrame?: true,
    blendTime?: 250,
): boolean;

export function removePedFromVehicle(thePed: Ped): boolean;

export function setPedFrozen(thePed: Ped, frozen: boolean): boolean;

export function setPedGravity(thePed: Ped, gravity: number): boolean;

export function setPedHeadless(thePed: Ped, headState: boolean): boolean;

export function removePedClothes(
    thePed: Ped,
    clothesType: number,
    clothesTexture?: string,
    clothesModel?: string,
): boolean;

export function setPedAnimationProgress(thePed: Ped, anim?: string, progress?: number): boolean;
