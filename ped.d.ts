declare function getPedFightingStyle(thePed: Ped): number

declare function getPedAmmoInClip(thePed: Ped, weaponSlot?: number): number

declare function getPedGravity(thePed: Ped): number

declare function isPedFrozen(thePed: Ped): boolean

declare function getPedOccupiedVehicle(thePed: Ped): Vehicle

declare function setPedStat(thePed: Ped, stat: number, value: number): boolean

declare function addPedClothes(thePed: Ped, clothesTexture: string, clothesModel: string, clothesType: number): boolean

declare function isPedDucked(thePed: Ped): boolean

declare function isPedHeadless(thePed: Ped): boolean

declare function getPedContactElement(thePed: Ped): element

declare function createPed(modelid: number, x: number, y: number, z: number, rot?: 0.0, synced?: true): Ped
declare function createPed(modelid: number, x: number, y: number, z: number, rot?: 0.0): Ped

declare function getPedArmor(thePed: Ped): number

declare function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean

declare function getPedClothes(thePed: Ped, clothesType: number): string

declare function isPedInVehicle(thePed: Ped): boolean

declare function isPedInWater(thePed: Ped): boolean

declare function isPedOnFire(thePed: Ped): boolean

declare function doesPedHaveJetPack(thePed: Ped): boolean

declare function getValidPedModels(): table

declare function getPedWeaponSlot(thePed: Ped): number

declare function killPed(thePed: Ped, theKiller?: Ped, weapon?: 255, bodyPart?: 255, stealth?: false): boolean

declare function reloadPedWeapon(thePed: Ped): boolean

declare function isPedOnGround(thePed: Ped): boolean

declare function getPedWeapon(thePed: Ped, weaponSlot?: number): number

declare function getPedTarget(thePed: Ped): element

declare function isPedDoingGangDriveby(thePed: Ped): boolean

declare function givePedJetPack(thePed: Ped): boolean

declare function getPedWalkingStyle(thePed: Ped): number

declare function getPedStat(thePed: Ped, stat: number): number

declare function isPedChoking(thePed: Ped): boolean

declare function removePedJetPack(thePed: Ped): boolean

declare function getPedOccupiedVehicleSeat(thePed: Ped): number

declare function isPedDead(thePed: Ped): boolean

declare function setPedAnalogControlState(thePed: Ped, control: string, state: number): boolean

declare function setPedWeaponSlot(thePed: Ped, weaponSlot: number): boolean

declare function setPedDoingGangDriveby(thePed: Ped, state: boolean): boolean

declare function setPedFightingStyle(thePed: Ped, style: number): boolean

declare function setPedChoking(thePed: Ped, choking: boolean): boolean

declare function getPedTotalAmmo(thePed: Ped, weaponSlot?: number): number

declare function setPedArmor(thePed: Ped, armor: number): boolean

declare function setPedAnimation(thePed: Ped, block?: string, anim?: string, time?: -1, loop?: true, updatePosition?: true, numbererruptable?: true, freezeLastFrame?: true, blendTime?: 250): boolean

declare function removePedFromVehicle(thePed: Ped): boolean

declare function setPedFrozen(thePed: Ped, frozen: boolean): boolean

declare function setPedGravity(thePed: Ped, gravity: number): boolean

declare function setPedHeadless(thePed: Ped, headState: boolean): boolean

declare function removePedClothes(thePed: Ped, clothesType: number, clothesTexture?: string, clothesModel?: string): boolean

declare function setPedAnimationProgress(thePed: Ped, anim?: string, progress?: number): boolean
