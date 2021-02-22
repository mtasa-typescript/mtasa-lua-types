/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Vehicle } from '../structure';

export class Ped {
    /**
     * @see {@link getPedCameraRotation}
     */
    cameraRotation: number;
    /**
     * @see {@link getPedOxygenLevel}
     */
    oxygenLevel: number;
    /**
     * @see {@link getPedTask}
     */
    3.011: LuaMultiReturn<[string, string, string, string]>;
    /**
     * @see {@link isPedDead}
     */
    dead: boolean;
    /**
     * @see {@link isPedReloadingWeapon}
     */
    reloadingWeapon: boolean;
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
     * @see {@link isPedChoking}
     */
    choking: boolean;
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
     * @see {@link canPedBeKnockedOffBike}
     */
    canBeKnockedOffBike(): boolean;

    /**
     * @see {@link getPedAnimation}
     */
    getAnimation(): LuaMultiReturn<[string, string]>;

    /**
     * @see {@link getPedBonePosition}
     */
    getBonePosition(bone: number): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getPedCameraRotation}
     */
    getCameraRotation(): number;

    /**
     * @see {@link getPedOxygenLevel}
     */
    getOxygenLevel(): number;

    /**
     * @see {@link getPedTask}
     */
    getTask(priority: string, taskType: number): LuaMultiReturn<[string, string, string, string]>;

    /**
     * @see {@link isPedDead}
     */
    isDead(): boolean;

    /**
     * @see {@link isPedReloadingWeapon}
     */
    isReloadingWeapon(): boolean;

    /**
     * @see {@link setPedCameraRotation}
     */
    setCameraRotation(cameraRotation: number): boolean;

    /**
     * @see {@link setPedCanBeKnockedOffBike}
     */
    setCanBeKnockedOffBike(canBeKnockedOffBike: boolean): boolean;

    /**
     * @see {@link setPedOxygenLevel}
     */
    setOxygenLevel(oxygen: number): boolean;

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
