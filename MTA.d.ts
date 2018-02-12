type table = {
    [key: number]: any;
    [key: string]: any;
};

/**
 * returns a table of resource names containing all export functions
 */
declare const exports: table;

/**
 * returns a resource element of the resource the snippet was executed in
 */
declare const resource: element;

/**
 * returns a resource root element of the resource the snippet was executed in
 */
declare const resourceRoot: element;
/**
 * returns the root element of the server
 */
declare const root: element;

/**
 * returns the root element of all GUI elements.
 */
declare const guiRoot: element;

/**
 * returns the player element of the local player.
 */
declare const localPlayer: element;

/**
 * The player or element the event was attached to
 */
declare const source: element;

/**
 * the name of the event ("onResourceStart", "onPlayerWasted" etc.)
 */
declare const eventName: string;

/**
 * the client that called the event
 */
declare const client: element;

/**
 * the root of the resource that called the event
 */
declare const sourceResourceRoot: element;

/**
 * the resource that called the event 
 */
declare const sourceResource: element;

/**
 * current timer in callback function.
 */
declare const sourceTimer: element; 