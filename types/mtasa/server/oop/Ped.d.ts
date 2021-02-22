/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Vehicle } from '../structure';

export class Ped {
    /**
     * @see {@link getPedGravity}
     */
    gravity: number;
    /**
     * @see {@link setPedChoking}
     */
    choking: boolean;
    /**
     * @see {@link getPedAmmoInClip}
     */
    ammoInClip: number;
    /**
     * @see {@link getPedArmor}
     */
    armor: number;
    /**
     * @see {@link getPedContactElement}
     */
    contactElement: Element;
    /**
     * @see {@link getPedFightingStyle}
     */
    fightingStyle: number;
    /**
     * @see {@link getPedOccupiedVehicle}
     */
    vehicle: Vehicle;
    /**
     * @see {@link getPedOccupiedVehicleSeat}
     */
    vehicleSeat: number;
    /**
     * @see {@link getPedWalkingStyle}
     */
    walkingStyle: number;
    /**
     * @see {@link getPedWeaponSlot}
     */
    weaponSlot: number;
    /**
     * @see {@link isPedDead}
     */
    dead: boolean;
    /**
     * @see {@link isPedDoingGangDriveby}
     */
    doingGangDriveby: boolean;
    /**
     * @see {@link isPedDucked}
     */
    ducked: boolean;
    /**
     * @see {@link isPedInVehicle}
     */
    inVehicle: boolean;
    /**
     * @see {@link isPedOnFire}
     */
    onFire: boolean;
    /**
     * @see {@link isPedOnGround}
     */
    onGround: boolean;
    /**
     * @see {@link isPedWearingJetpack}
     */
    jetpack: boolean;
    /**
     * @see {@link setPedHeadless}
     */
    headless: boolean;

    /**
     * @see {@link getPedGravity}
     */
    getGravity(): number;

    /**
     * @see {@link setPedChoking}
     */
    setChoking(choking: boolean): boolean;

    /**
     * @see {@link setPedGravity}
     */
    setGravity(gravity: number): boolean;

    /**
     * @see {@link setPedWearingJetpack}
     */
    setWearingJetpack(state: boolean): boolean;

    /**
     * @see {@link addPedClothes}
     */
    addClothes(clothesTexture: string, clothesModel: string, clothesType: number): boolean;

    /**
     * @see {@link getPedAmmoInClip}
     */
    getAmmoInClip(weaponSlot?: number): number;

    /**
     * @see {@link getPedArmor}
     */
    getArmor(): number;

    /**
     * @see {@link getPedClothes}
     */
    getClothes(clothesType: number): LuaMultiReturn<[string, string]>;

    /**
     * @see {@link getPedContactElement}
     */
    getContactElement(): Element;

    /**
     * @see {@link getPedFightingStyle}
     */
    getFightingStyle(): number;

    /**
     * @see {@link getPedOccupiedVehicle}
     */
    getOccupiedVehicle(): Vehicle;

    /**
     * @see {@link getPedOccupiedVehicleSeat}
     */
    getOccupiedVehicleSeat(): number;

    /**
     * @see {@link getPedWalkingStyle}
     */
    getWalkingStyle(): number;

    /**
     * @see {@link getPedWeaponSlot}
     */
    getWeaponSlot(): number;

    /**
     * @see {@link isPedChoking}
     */
    isChoking(): boolean;

    /**
     * @see {@link isPedDead}
     */
    isDead(): boolean;

    /**
     * @see {@link isPedDoingGangDriveby}
     */
    isDoingGangDriveby(): boolean;

    /**
     * @see {@link isPedDucked}
     */
    isDucked(): boolean;

    /**
     * @see {@link isPedInVehicle}
     */
    isInVehicle(): boolean;

    /**
     * @see {@link isPedOnFire}
     */
    isOnFire(): boolean;

    /**
     * @see {@link isPedOnGround}
     */
    isOnGround(): boolean;

    /**
     * @see {@link isPedWearingJetpack}
     */
    isWearingJetpack(): boolean;

    /**
     * @see {@link removePedClothes}
     */
    removeClothes(clothesType: number, clothesTexture: string, clothesModel: string): boolean;

    /**
     * @see {@link removePedFromVehicle}
     */
    removeFromVehicle(): boolean;

    /**
     * @see {@link setPedAnimation}
     */
    setAnimation(
        block?: string,
        anim?: string,
        time?: number,
        loop?: boolean,
        updatePosition?: boolean,
        interruptable?: boolean,
        freezeLastFrame?: boolean,
        blendTime?: number,
        retainPedState?: boolean,
    ): boolean;

    /**
     * @see {@link setPedAnimationSpeed}
     */
    setAnimationSpeed(anim?: string, speed?: number): boolean;

    /**
     * @see {@link setPedArmor}
     */
    setArmor(armor: number): boolean;

    /**
     * @see {@link setPedHeadless}
     */
    setHeadless(headState: boolean): boolean;

    /**
     * @see {@link setPedOnFire}
     */
    setOnFire(isOnFire: boolean): boolean;

    /**
     * @see {@link setPedWalkingStyle}
     */
    setWalkingStyle(style: number): boolean;

    /**
     * @see {@link setPedWeaponSlot}
     */
    setWeaponSlot(weaponSlot: number): boolean;

    /**
     * @see {@link warpPedIntoVehicle}
     */
    warpIntoVehicle(theVehicle: Vehicle, seat: number): boolean;
}
