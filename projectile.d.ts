/**
 * 
 * 
 * 
 * 
 * 
 */

declare function createProjectile(creator: element, weaponType: number, posX?: number, posY?: number, posZ?: number, force?: 1.0, target?: element, rotX?: number, rotY?: number, rotZ?: number, velX?: number, velY?: number, velZ?: number, model?: number): Projectile

declare function getProjectileCreator(theProjectile: Projectile): element

declare function getProjectileForce(theProjectile: Projectile): number

declare function getProjectileTarget(theProjectile: Projectile): element

declare function getProjectileType(theProjectile: Projectile): number

declare function detonateSatchels(): boolean

declare function detonateSatchels(player: Player): boolean

declare function getProjectileCounter(theProjectile: Projectile): number

declare function setProjectileCounter(theProjectile: Projectile, timeToDetonate: number): boolean