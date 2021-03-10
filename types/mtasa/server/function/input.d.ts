/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { HandleFunction, Player, Resource } from '../structure';

/**
 * This function will check if a player is pressing a particular control. Controls are those that
 * affect GTA. If you wish to get the state of another key, use [[bindKey]] and a command function.
 * Note: Not all control states are sent to the server at all times, as such their state may be
 * given incorrectly. As a rule, keys that move or affect the player or their vehicle are most likely to
 * be accurate. For increased accuracy (and also increased bandwidth usage) use bindKey instead to bind
 * a GTA control name to a function.
 * @see {@link https://wiki.multitheftauto.com/wiki/getControlState|MTASA Wiki}
 * @param thePlayer The player you wish to get the control state of. Do not use this parameter when
 * scripting for client.
 * @param controlName The control that you want to get the state of. See control names for a list
 * of possible controls.  '''Note:''' several controls are not synched with the server, therefore the
 * function will always return ''false'' for these controls serverside. These controls are:  *next_weapon
 *  *previous_weapon  *jump  *zoom_in  *zoom_out  *look_behind  *change_camera  *conversation_yes
 * *conversation_no  *group_control_forwards  *group_control_back  *sub_mission  *radio_next
 * *radio_previous  *vehicle_look_left  *vehicle_look_right  *vehicle_look_behind  *vehicle_mouse_look
 * *special_control_*
 * @return Returns the state of the control, ''false'' if the control doesn't exist or if the
 * player is dead.
 */
export function getControlState(thePlayer: Player, controlName: string): boolean;

/**
 * This function can be used to find out if a key has already been bound. If you do not specify a
 * keyState or handler, any instances of key being bound will cause isKeyBound to return true.
 * @see {@link https://wiki.multitheftauto.com/wiki/isKeyBound|MTASA Wiki}
 * @param thePlayer The player youre checking.
 * @param key The key youre checking. See Key names for a list of valid key names.
 * @param keyState Is the state of the key when it calls the function, Can be either:
 * @param handler The function youre checking against
 * @return Returns ''true'' if the key is bound, ''false'' otherwise.
 */
export function isKeyBound(thePlayer: Player, key: string, keyState: string, handler: HandleFunction): boolean;

/**
 * Sets a state of a specified player's control, as if they pressed or released it.
 * @see {@link https://wiki.multitheftauto.com/wiki/setControlState|MTASA Wiki}
 * @param thePlayer The player you wish to set the control state of.
 * @param control The control that you want to set the state of. See control names for a list of
 * possible controls.
 * @param state A boolean value representing whether or not the key will be set to pressed or not.
 * @return Returns ''true'' if the control state was successfully set, ''false'' otherwise.
 */
export function setControlState(thePlayer: Player, control: string, state: boolean): boolean;

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
 * be defined before you add the handler. This function can take two parameters, playerSource and
 * commandName, followed by as many parameters as you expect after your command (see below). These are all
 * optional.  {{OptionalArg}}
 * @param restricted Specify whether or not this command should be restricted by default. Use this
 * on commands that should be inaccessible to everyone as default except special users specified in the
 * ACL (Access Control List). This is to make sure admin commands such as ie. punish wont be available
 * to everyone if a server administrator forgets masking it in ACL. Make sure to add the command to
 * your ACL under the proper group for it to be usefull (i.e <right name=command.killEveryone
 * access=true></right>). This argument defaults to false if nothing is specified.  {{New feature|3|1.0|
 * @default false
 * @param caseSensitive Specifies if the command handler will ignore the case for this command
 * name.  }}
 * @default true
 * @return Returns ''true'' if the command handler was added successfully, ''false'' otherwise.
 */
export function addCommandHandler(
    commandName: string,
    handlerFunction: HandleFunction,
    restricted?: boolean,
    caseSensitive?: boolean,
): boolean;

/**
 * Binds a player's key to a handler function or command, which will be called when the key is
 * pressed.
 * @see {@link https://wiki.multitheftauto.com/wiki/bindKey|MTASA Wiki}
 * @param thePlayer The player you wish to bind the key of.
 * @param key The key that was pressed
 * @param keyState The state of the key that was pressed, down if it was pressed, up if it was
 * released.
 * @param handlerFunction The function that will be triggered when the players key is pressed. This
 * function should have the form:  :<syntaxhighlight lang="lua">function functionName ( player
 * keyPresser, string key, string keyState, [ var arguments, ... ] )</syntaxhighlight>  :The values passed to
 * this function are:
 * @param arguments The optional arguments you specified when calling bindKey (see below).
 * @return Returns ''true'' if the key was bound, ''false'' otherwise.
 */
export function bindKey(
    thePlayer: Player,
    key: string,
    keyState: string,
    handlerFunction: HandleFunction,
    arguments: any,
    ...args: any[]
): boolean;

/**
 * This function will call all the attached functions of an existing console command, for a
 * specified player.
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/executeCommandHandler|MTASA Wiki}
 * @param commandName The name of the command you wish to execute. This is what must be typed into
 * the console to trigger the function.
 * @param thePlayer The player that will be presented as executer of the command to the handler
 * function(s) of the command.  {{OptionalArg}}
 * @param args Additional parameters that will be passed to the handler function(s) of the command
 * that is called, separated by spaces.
 * @return Returns ''true'' if the command handler was called successfully, ''false'' otherwise.
 */
export function executeCommandHandler(commandName: string, thePlayer: Player, args: string): boolean;

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
export function getCommandHandlers(theResource: Resource): LuaTable;

/**
 * Gets the functions bound to a key. To bind a function to a key use the [[bindKey]] function
 * @see {@link https://wiki.multitheftauto.com/wiki/getFunctionsBoundToKey|MTASA Wiki}
 * @param thePlayer The player to get the functions from a key.
 * @param keyState A string that has one of the following values:
 * @return Returns a table of the key function(s).
 */
export function getFunctionsBoundToKey(thePlayer: Player, key: string, keyState: string): LuaTable;

/**
 * getKeyBoundToFunction allows retrieval of the first key bound to a function.
 * @see {@link https://wiki.multitheftauto.com/wiki/getKeyBoundToFunction|MTASA Wiki}
 * @param thePlayer The player you are checking the function bound to a key
 * @param theFunction The function in which you would like to check the bound key
 * @return Returns a string of the first key the function was bound to.
 */
export function getKeyBoundToFunction(thePlayer: Player, theFunction: HandleFunction): string;

/**
 * Checks whether a GTA control is enabled or disabled for a certain player.
 * @see {@link https://wiki.multitheftauto.com/wiki/isControlEnabled|MTASA Wiki}
 * @param thePlayer The player you wish the control status of.
 * @param control The control you wish to check. See control names for a list of possible controls.
 * @return Returns ''true'' if control is enabled, ''false'' otherwise.
 */
export function isControlEnabled(thePlayer: Player, control: string): boolean;

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
 * @param thePlayer The player you wish to toggle the control ability of.
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
export function toggleAllControls(
    thePlayer: Player,
    enabled: boolean,
    gtaControls: boolean,
    mtaControls: boolean,
): boolean;

/**
 * Enables or disables the use of a GTA control for a specific player.
 * @see {@link https://wiki.multitheftauto.com/wiki/toggleControl|MTASA Wiki}
 * @param thePlayer The player you wish to toggle the control ability of.
 * @param control The control that you want to toggle the ability of. See control names for a list
 * of possible controls.
 * @param enabled A boolean value representing whether or not the key will be usable or not.
 * @return This function ''true'' if the control was set successfully, ''false'' otherwise.
 */
export function toggleControl(thePlayer: Player, control: string, enabled: boolean): boolean;

/**
 * Removes an existing key bind from the specified player.
 * @see {@link https://wiki.multitheftauto.com/wiki/unbindKey|MTASA Wiki}
 * @param thePlayer The player you wish to unbind the key of.
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState is optional in Syntax 2.
 * @return Returns '''true'' if the key was unbound, ''false'' if it was not previously bound or
 * invalid arguments were passed to the function.
 */
export function unbindKey(thePlayer: Player, key: string, keyState: string, command: string): boolean;
