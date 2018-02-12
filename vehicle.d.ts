declare function setVehicleColor(theVehicle: Vehicle, r1: number, g1: number, b1: number, r2?: number, g2?: number, b2?: number, r3?: number, g3?: number, b3?: number, r4?: number, g4?: number, b4?: number): boolean

declare function setTrainSpeed(train: Vehicle, speed: number): boolean
declare function setVehiclePanelState(theVehicle: Vehicle, panelID: number, state: number): boolean
declare function detachTrailerFromVehicle(theVehicle: Vehicle, theTrailer?: Vehicle): boolean
declare function setVehicleTurretPosition(turretVehicle: Vehicle, positionX: number, positionY: number): boolean
declare function setVehicleDoorOpenRatio(theVehicle: Vehicle, door: number, ratio: number, time?: 0): boolean

declare function setVehicleRespawnPosition(theVehicle: Vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean
declare function setVehicleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean
declare function setVehicleHandling(theVehicle: element, property: string, value: object): boolean

declare function setVehiclePlateText(theVehicle: element, numberplate: string): boolean

declare function setVehicleHeadLightColor(theVehicle: Vehicle, red: number, green: number, blue: number): boolean

declare function setTrainDirection(train: Vehicle, clockwise: boolean): boolean
declare function setTrainDerailable(derailableVehicle: Vehicle, derailable: boolean): boolean

declare function fixVehicle(theVehicle: Vehicle): boolean

declare function addVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean
declare function createVehicle(model: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, numberplate?: string, bDirection?: boolean, variant1?: number, variant2?: number): Vehicle

declare function setVehicleSirensOn(theVehicle: Vehicle, sirensOn: boolean): boolean

declare function getVehicleSirens(theVehicle: Vehicle): table

declare function setVehicleWheelStates(theVehicle: Vehicle, frontLeft: number, rearLeft?: -1, frontRight?: -1, rearRight?: -1): boolean
declare function isVehicleDamageProof(theVehicle: Vehicle): boolean

declare function getVehiclePlateText(theVehicle: Vehicle): string

declare function isTrainChainEngine(theTrain: Vehicle): boolean

declare function getVehicleTurnVelocity(theVehicle?: Vehicle): [number, number, number]

declare function respawnVehicle(theVehicle: Vehicle): boolean

declare function isTrainDerailable(vehicleToCheck: Vehicle): boolean

declare function getTrainDirection(train: Vehicle): boolean
declare function getVehicleTowedByVehicle(theVehicle: Vehicle): Vehicle
declare function resetVehicleExplosionTime(theVehicle: Vehicle): boolean

declare function isTrainDerailed(vehicleToCheck: Vehicle): boolean

declare function resetVehicleIdleTime(theVehicle: Vehicle): boolean

declare function spawnVehicle(theVehicle: Vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean

declare function isVehicleFuelTankExplodable(theVehicle: Vehicle): boolean
declare function setVehicleOverrideLights(theVehicle: Vehicle, value: number): boolean
declare function setTrainPosition(train: Vehicle, position: number): boolean
declare function setModelHandling(modelId: number, property: string, value: object): boolean

declare function addVehicleSirens(theVehicle: Vehicle, sirenCount: number, sirenType: number, visible360flag?: false, checkLosFlag?: true, useRandomiser?: true, silentFlag?: false): boolean

declare function removeVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean
declare function blowVehicle(vehicleToBlow: Vehicle, explode?: true): boolean
declare function blowVehicle(vehicleToBlow: Vehicle): boolean

declare function attachTrailerToVehicle(theVehicle: Vehicle, theTrailer: Vehicle): boolean
declare function getVehiclesOfType(model: number): table
declare function setVehicleSirens(theVehicle: Vehicle, sirenPonumber: number, posX: number, posY: number, posZ: number, red: number, green: number, blue: number, alpha?: 255, minAlpha?: 0.0): boolean

declare function setTrainDerailed(vehicleToDerail: Vehicle, derailed: boolean): boolean

declare function removeVehicleSirens(theVehicle: Vehicle): boolean

declare function setVehicleTaxiLightOn(taxi: Vehicle, LightState: boolean): boolean

declare function getVehicleTowingVehicle(theVehicle: Vehicle): Vehicle
declare function setVehicleDamageProof(theVehicle: Vehicle, damageProof: boolean): boolean

declare function getVehicleOverrideLights(theVehicle: Vehicle): number
declare function getVehicleType(theVehicle: Vehicle): string

declare function setVehicleVariant(theVehicle: Vehicle, variant1?: number, variant2?: number): boolean
declare function toggleVehicleRespawn(theVehicle: Vehicle, Respawn: boolean): boolean
declare function isVehicleTaxiLightOn(taxi: Vehicle): boolean

declare function getVehicleSirenParams(theVehicle: Vehicle): table

declare function isVehicleOnGround(theVehicle: Vehicle): boolean

declare function getVehicleOccupant(theVehicle: Vehicle, seat?: 0): Player

declare function isVehicleBlown(theVehicle: Vehicle): boolean
declare function getTrainSpeed(train: Vehicle): number
declare function setVehicleLightState(theVehicle: Vehicle, light: number, state: number): boolean
declare function getTrainPosition(train: Vehicle): number
declare function getVehicleHandling(theVehicle: element): table

declare function getVehicleCompatibleUpgrades(theVehicle: Vehicle, slot?: number): table

declare function getVehicleDoorState(theVehicle: Vehicle, door: number): number
declare function getVehiclePanumberjob(theVehicle: Vehicle): number
declare function getModelHandling(modelId: number): table

declare function isVehicleLocked(theVehicle: Vehicle): boolean

declare function getVehicleMaxPassengers(theVehicle: Vehicle): number
declare function getVehicleMaxPassengers(modelID: number): number

declare function getVehicleHeadLightColor(theVehicle: Vehicle): [number, number, number]

declare function getVehicleWheelStates(theVehicle: Vehicle): [number, number, number, number]
declare function getVehicleName(theVehicle: Vehicle): string

declare function getVehiclePanelState(theVehicle: Vehicle, panel: number): number

declare function getVehicleModelFromName(name: string): number

declare function getVehicleNameFromModel(model: number): string

declare function getOriginalHandling(modelID: number): table

declare function getVehicleEngineState(theVehicle: Vehicle): boolean

declare function getVehicleLandingGearDown(theVehicle: Vehicle): boolean

declare function getVehicleLightState(theVehicle: Vehicle, light: number): number
declare function getVehicleColor(theVehicle: Vehicle): [number, number, number, number]

declare function getVehicleController(theVehicle: Vehicle): Player

declare function getVehicleUpgrades(theVehicle: Vehicle): table

declare function getVehicleSirensOn(theVehicle: Vehicle): boolean

declare function getVehicleTurretPosition(turretVehicle: Vehicle): [number, number]

declare function setVehiclePanumberjob(theVehicle: Vehicle, value: number): boolean
declare function setVehicleDoorsUndamageable(theVehicle: Vehicle, state: boolean): boolean

declare function setVehicleLandingGearDown(theVehicle: Vehicle, gearState: boolean): boolean

declare function setVehicleDoorState(theVehicle: Vehicle, door: number, state: number): boolean

declare function getVehicleOccupants(theVehicle: Vehicle): table

declare function getVehicleUpgradeOnSlot(theVehicle: Vehicle, slot: number): number
declare function setVehicleLocked(theVehicle: Vehicle, locked: boolean): boolean

declare function getVehicleUpgradeSlotName(slot_or_upgrade: number): string

declare function setVehicleEngineState(theVehicle: Vehicle, engineState: boolean): boolean

declare function setVehicleIdleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean
declare function setVehicleFuelTankExplodable(theVehicle: Vehicle, explodable: boolean): boolean

declare function getVehicleVariant(theVehicle: Vehicle): [number, number]

declare function setVehicleTurnVelocity(theVehicle: Vehicle, rx: number, ry: number, rz: number): boolean

declare function getVehicleDoorOpenRatio(theVehicle: Vehicle, door: number): number