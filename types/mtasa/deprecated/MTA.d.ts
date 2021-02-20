/**
 * Workaround...
 */
import { element } from "./dx";

export type table = any;

/**
 * returns a table of resource names containing all export functions
 */
export const exports: table;

/**
 * returns a resource element of the resource the snippet was executed in
 */
export const resource: element;

/**
 * returns a resource root element of the resource the snippet was executed in
 */
export const resourceRoot: element;

/**
 * returns the root element of the server
 */
export const root: element;

/**
 * returns the root element of all GUI elements.
 */
export const guiRoot: element;

/**
 * returns the player element of the local player.
 */
export const localPlayer: element;

/**
 * The player or element the event was attached to
 */
export const source: element;

/**
 * the name of the event ("onResourceStart", "onPlayerWasted" etc.)
 */
export const eventName: string;

/**
 * the client that called the event
 */
export const client: element;

/**
 * the root of the resource that called the event
 */
export const sourceResourceRoot: element;

/**
 * the resource that called the event
 */
export const sourceResource: element;

/**
 * current timer in callback function.
 */
export const sourceTimer: element;

export function addCommandHandler(
    commandName: string,
    handlerFunction: (...args: any[]) => void,
    restricted?: false,
    caseSensitive?: true,
): boolean;

export function addCommandHandler(
    commandName: string,
    handlerFunction: (...args: any[]) => void,
    caseSensitive?: true,
): boolean;

/**
 * **SERVER SIDE**
 */
export function outputChatBox(
    text: string,
    visibleTo?: element,
    r?: 231,
    g?: 217,
    b?: 176,
    colorCoded?: false,
): boolean;

/**
 * **CLIENT SIDE**
 */
export function outputChatBox(text: string, r?: 231, g?: 217, b?: 176, colorCoded?: false): boolean;
