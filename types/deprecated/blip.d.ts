/**
 * 
 * 
 * 
 * 
 * 
 */

declare function createBlip(x: number, y: number, z: number, icon?: 0, size?: 2, r?: 255, g?: 0, b?: 0, a?: 255, ordering?: 0, visibleDistance?: 99999.0, visibleTo?: element): Blip

declare function createBlipAttachedTo(elementToAttachTo: element, icon?: 0, size?: 2, r?: 255, g?: 0, b?: 0, a?: 255, ordering?: 0, visibleDistance?: 99999.0, visibleTo?: element): Blip

declare function getBlipColor(theBlip: Blip): [number, number, number, number]

declare function getBlipIcon(theBlip: Blip): number

declare function getBlipSize(theBlip: Blip): number

declare function setBlipColor(theBlip: Blip, red: number, green: number, blue: number, alpha: number): boolean

declare function setBlipIcon(theBlip: Blip, icon: number): boolean

declare function setBlipSize(theBlip: Blip, iconSize: number): boolean

declare function getBlipOrdering(theBlip: Blip): number

declare function setBlipOrdering(theBlip: Blip, ordering: number): boolean

declare function getBlipVisibleDistance(theBlip: Blip): number

declare function setBlipVisibleDistance(theBlip: Blip, theDistance: number): boolean