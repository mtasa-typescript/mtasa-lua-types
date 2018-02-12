/**
 * 
 * 
 * 
 * 
 */

declare function createPickup(x: number, y: number, z: number, theType: number, amount_weapon_model: number, respawnTime?: 30000, ammo?: 50): Pickup

declare function getPickupAmmo(thePickup: Pickup): number

declare function getPickupAmount(thePickup: Pickup): number

declare function getPickupType(thePickup: Pickup): number

declare function getPickupWeapon(thePickup: Pickup): number

declare function setPickupType(thePickup: Pickup, theType: number, amount_weapon_model: number, ammo?: number): boolean

declare function getPickupRespawnnumbererval(thePickup: Pickup): number

declare function isPickupSpawned(thePickup: Pickup): boolean

declare function setPickupRespawnnumbererval(thePickup: Pickup, ms: number): boolean

declare function usePickup(thePickup: Pickup, thePlayer: Player): boolean