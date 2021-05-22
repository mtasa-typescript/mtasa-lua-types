import { Element } from './oop/Element';
import { Resource } from './oop/Resource';
import { Player } from './oop/Player';
import { Timer } from './oop/Timer';

/**
 * A table of resource names containing all export functions
 */
export const exports: LuaTable;

/**
 * A resource element of the resource the snippet was executed in
 */
export const resource: Resource;

/**
 * A resource root element of the resource the snippet was executed in
 */
export const resourceRoot: Element;

/**
 * The root element of the server
 */
export const root: Element;

/**
 * The root element of all GUI elements.
 */
export const guiRoot: Element;

/**
 * The player element of the local player.
 */
export const localPlayer: Player;

/**
 * The player or element the event was attached to
 */
export const source: Element;

/**
 * The name of the event ("onResourceStart", "onPlayerWasted" etc.)
 */
export const eventName: string;

/**
 * Current timer in callback function.
 */
export const sourceTimer: Timer;
