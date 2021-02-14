/**
 * @description This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon. 
 * amount: This is an integer representing the amount of Health points or Armour points a pickup has.
 * weapon: If the type is a Weapon pickup, then it represents the weapon ID of the weapon pickup. When used with the weapon pickup type set, the ammo parameter can be used.
 * model: If the pickup is a custom model, this is the model id to use. Many non-pickup models can be used, though some may cause crashes. The following is a list of models designed to be used as pickups.
 * - 1212: Money (wad of cash)
 * - 1240: Health (heart)
 * - 1242: Armour
 * - 1239: Info icon
 * - 1272: House (blue)
 * - 1273: House (green)
 * - 1241: Adrenaline
 * - 1247: Bribe
 * - 1248: GTA III sign
 * - 1252: Bomb from GTA III
 * - 1253: Photo op
 * - 1254: Skull
 * - 1274: Money icon
 * - 1275: Blue t-shirt
 * - 1277: Save disk
 * - 1313: 2 Skulls
 * - 1314: 2 Players icon
 * - 1276: Tiki statue
 * - 1310: Parachute (with leg straps)
 * - 1318: Down arrow
 * - 1279: Drug bundle
 * - OR Other ID Object
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param theType This is an integer representing the type of pickup, representing the following types: **0: Health Pickup**, **1: Armour Pickup**, **2: Weapon Pickup**, **3: Custom Pickup**
 * @param amount_weapon_model see Description.
 * @param respawnTime How long before the pickup respawns in milliseconds (This parameter is ignored on the client!)
 * @param ammo An integer representing the amount of ammo a pickup contains. This is only valid when the pickup type is a weapon pickup.
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