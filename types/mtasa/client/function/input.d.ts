/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import {
    Account,
    ACL,
    ACLGroup,
    Player,
    Table,
    Ban,
    Blip,
    ColShape,
    Element,
    Ped,
    Pickup,
    Resource,
    Team,
    TextDisplay,
    Vehicle,
    XmlNode,
    TextItem,
    HandleFunction,
    File,
    Marker,
    RadarArea,
    Request,
    Userdata,
    Timer,
    Water,
    Browser,
    ProgressBar,
    Light,
    Effect,
    Gui,
    Searchlight,
    Weapon,
    GuiBrowser,
    Txd,
    Dff,
    Col,
    Ifp,
    PrimitiveType,
    GuiScrollBar,
    GuiMemo,
    Texture,
    ObjectGroup,
    Projectile,
    Matrix
} from "types/mtasa/client/structure";

/**
 * This retrieves the analog control state of a control.  This is useful for detecting sensitive
 * controls, such as those used on a joypad.
 * To get the analog control state for a [[ped]], please use [[getPedAnalogControlState]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getAnalogControlState|MTASA Wiki}
 * @param control The control that you want to get the state of. See control names for a list of
 * possible controls.  {{New feature/item|3.0157|1.5.7|20383|
 * @param rawValue A bool indicating if it should return the raw player input value.  }}
 * @return Returns a [[float]] between 0 and 1 indicating the amount the control is pressed.
 */
export function getAnalogControlState(control: string, rawValue?: boolean): number;

/**
 * Returns a list of key names that are bound to the specified game [[Control names|control]] or
 * console command.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBoundKeys|MTASA Wiki}
 * @return If one or more keys are bound to the specified control or console command, a table is
 * returned indexed by the names of the keys and containing key states as values. If no keys are bound or
 * an invalid name was passed, returns ''false''.
 */
export function getBoundKeys(command: string): Table;

/**
 * Gets the commands bound to a key.
 * @see {@link https://wiki.multitheftauto.com/wiki/getCommandsBoundToKey|MTASA Wiki}
 * @param theKey See key names for a list of possible keys
 * @param keyState A string that has one of the following values:
 * @return Returns a table of the commands bound on that key.
 */
export function getCommandsBoundToKey(theKey: string, keyState: string): Table;

/**
 * This function allow you get first key bound to command.
 * @see {@link https://wiki.multitheftauto.com/wiki/getKeyBoundToCommand|MTASA Wiki}
 * @param command command what you need check.
 * @return Returns a string of first key binded to current command.
 */
export function getKeyBoundToCommand(command: string): string;

/**
 * This function determines if a certain key is pressed or not.
 * '''Note:''' 'ralt' may trigger both 'ralt' and 'lctrl', this is due to AltGr
 * @see {@link https://wiki.multitheftauto.com/wiki/getKeyState|MTASA Wiki}
 * @param keyName The name of the key youre checking state of. See Key names.
 * @return Returns ''true'' if the specified key is pressed, ''false'' if it isn't or if an invalid
 * key name is passed.
 */
export function getKeyState(keyName: string): boolean;

/**
 * This function will attach a scripting function (handler) to a console command, so that whenever
 * a player or administrator uses the command the function is called.
 * Multiple command handlers can be attached to a single command, and they will be called in the
 * order that the handlers were attached. Equally, multiple commands can be handled by a single function,
 * and the ''commandName'' parameter used to decide the course of action.
 * For users, a command is in the format:
 * ''commandName'' ''argument1'' ''argument2''
 * This can be triggered from the player's console or directly from the chat box by prefixing the
 * message with a forward slash (''/''). For server side handlers, the server admin is also able to
 * trigger these directly from the server's console in the same way as they are triggered from a player's
 * console.
 * @see {@link https://wiki.multitheftauto.com/wiki/addCommandHandler|MTASA Wiki}
 * @param commandName This is the name of the command you wish to attach a handler to. This is what
 * must be typed into the console to trigger the function.
 * @param handlerFunction This is the function that you want the command to trigger, which has to
 * be defined before you add the handler. This function can take commandName parameter, followed by as
 * many parameters as you expect after your command (see below). These are all optional.
 * {{OptionalArg}}   {{New feature|3|1.0|
 * @param caseSensitive Specifies if the command handler will ignore the case for this command
 * name.  }}
 * @default true
 * @return Returns ''true'' if the command handler was added successfully, ''false'' otherwise.
 */
export function addCommandHandler(commandName: string, handlerFunction: HandleFunction, caseSensitive?: boolean): boolean;

/**
 * Binds a player's key to a handler function or command, which will be called when the key is
 * pressed.
 * @see {@link https://wiki.multitheftauto.com/wiki/bindKey|MTASA Wiki}
 * @param key The key that was pressed
 * @param keyState The state of the key that was pressed, down if it was pressed, up if it was
 * released.
 * @param handlerFunction The function that will be triggered when the players key is pressed. This
 * function should have the form:  :<syntaxhighlight lang="lua">function functionName ( string key,
 * string keyState, [ var arguments, ... ] )</syntaxhighlight>  :The values passed to this function are:
 * @param arguments The optional arguments you specified when calling bindKey (see below).
 * @return Returns ''true'' if the key was bound, ''false'' otherwise.
 */
export function bindKey(key: string, keyState: string, handlerFunction: HandleFunction, arguments: any, ...args: any[]): boolean;

/**
 * This function will call all the attached functions of an existing console command, for a
 * specified player.
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/executeCommandHandler|MTASA Wiki}
 * @param commandName The name of the command you wish to execute. This is what must be typed into
 * the console to trigger the function.  {{OptionalArg}}
 * @param args Additional parameters that will be passed to the handler function(s) of the command
 * that is called, separated by spaces.
 * @return Returns ''true'' if the command handler was called successfully, ''false'' otherwise.
 */
export function executeCommandHandler(commandName: string, args: string): boolean;

/**
 * This function is used to retrieve a list of all the registered command handlers of a given
 * resource (or of all resources).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getCommandHandlers|MTASA Wiki}
 * @param theResource The resource from which you wish to retrieve all command handlers. Or leave
 * it empty to retrieve command handlers of all resources.
 * @return Returns a ''table'' containing all the commands of the given resource or a table with
 * subtables containing the command and theResource pointer ( { "command", theResource } ). See examples
 * below if you don't understand it.
 */
export function getCommandHandlers(theResource: Resource): Table;

/**
 * Gets the functions bound to a key. To bind a function to a key use the [[bindKey]] function
 * @see {@link https://wiki.multitheftauto.com/wiki/getFunctionsBoundToKey|MTASA Wiki}
 * @param keyState A string that has one of the following values:
 * @return Returns a table of the key function(s).
 */
export function getFunctionsBoundToKey(key: string, keyState: string): Table;

/**
 * getKeyBoundToFunction allows retrieval of the first key bound to a function.
 * @see {@link https://wiki.multitheftauto.com/wiki/getKeyBoundToFunction|MTASA Wiki}
 * @param theFunction The function in which you would like to check the bound key
 * @return Returns a string of the first key the function was bound to.
 */
export function getKeyBoundToFunction(theFunction: HandleFunction): string;

/**
 * Checks whether a GTA control is enabled or disabled for a certain player.
 * @see {@link https://wiki.multitheftauto.com/wiki/isControlEnabled|MTASA Wiki}
 * @param control The control you wish to check. See control names for a list of possible controls.
 * @return Returns ''true'' if control is enabled, ''false'' otherwise.
 */
export function isControlEnabled(control: string): boolean;

/**
 * This function removes a command handler, that is one that has been added using
 * [[addCommandHandler]]. This function can only remove command handlers that were added by the resource that it is
 * called in.
 * @see {@link https://wiki.multitheftauto.com/wiki/removeCommandHandler|MTASA Wiki}
 * @param commandName the name of the command you wish to remove.
 * @param handler the specific handler function to remove. If not specified, all handler functions
 * for the command (from the calling resource) will be removed. This argument is only available in the
 * server.
 * @return Returns ''true'' if the command handler was removed successfully, ''false'' if the
 * command doesn't exist.
 */
export function removeCommandHandler(commandName: string, handler?: HandleFunction): boolean;

/**
 * Enables or disables the use of all GTA controls for a specified player.
 * @see {@link https://wiki.multitheftauto.com/wiki/toggleAllControls|MTASA Wiki}
 * @param enabled A boolean value representing whether or not the controls will be usable.
 * {{OptionalArg}}
 * @param gtaControls A boolean deciding whether the enabled parameter will affect GTAs internal
 * controls.
 * @default true
 * @param mtaControls A boolean deciding whether the enabled parameter will affect MTAs own
 * controls., e.g. chatbox.
 * @default true
 * @return This function returns ''true'' if controls were toggled successfully, false otherwise.
 */
export function toggleAllControls(enabled: boolean, gtaControls: boolean, mtaControls: boolean): boolean;

/**
 * Enables or disables the use of a GTA control for a specific player.
 * @see {@link https://wiki.multitheftauto.com/wiki/toggleControl|MTASA Wiki}
 * @param control The control that you want to toggle the ability of. See control names for a list
 * of possible controls.
 * @param enabled A boolean value representing whether or not the key will be usable or not.
 * @return This function ''true'' if the control was set successfully, ''false'' otherwise.
 */
export function toggleControl(control: string, enabled: boolean): boolean;

/**
 * Removes an existing key bind from the specified player.
 * @see {@link https://wiki.multitheftauto.com/wiki/unbindKey|MTASA Wiki}
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState is optional in Syntax 2.
 * @return Returns '''true'' if the key was unbound, ''false'' if it was not previously bound or
 * invalid arguments were passed to the function.
 */
export function unbindKey(key: string, keyState: string, command: string): boolean;
