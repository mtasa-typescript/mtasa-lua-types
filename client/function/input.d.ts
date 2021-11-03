// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    DxTexture,
    ObjectGroup,
    Browser,
    Light,
    Effect,
    Searchlight,
    Weapon,
    GuiBrowser,
    GuiMemo,
    GuiElement,
    GuiEdit,
    GuiScrollBar,
    GuiWindow,
    Projectile,
    Material,
    Userdata,
    TextItem,
    Pickup,
    Request,
    Player,
    Blip,
    ColShape,
    Element,
    Ped,
    Resource,
    Team,
    Vehicle,
    XmlNode,
    File,
    Marker,
    MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/**
 * This function will attach a scripting function (handler) to a console command, so that
 * whenever a player or administrator uses the command the function is called.
 * Multiple command handlers can be attached to a single command, and they will be called in
 * the order that the handlers were attached. Equally, multiple commands can be handled by a
 * single function, and the commandName parameter used to decide the course of action.
 * For users, a command is in the format:
 * commandName argument1 argument2
 * This can be triggered from the players console or directly from the chat box by prefixing
 * the message with a forward slash (/). For server side handlers, the server admin is also
 * able to trigger these directly from the servers console in the same way as they are
 * triggered from a players console.
 * @see https://wiki.multitheftauto.com/wiki/AddCommandHandler
 * @param commandName This is the name of the command you wish to attach a handler to. This is what must be
 * typed into the console to trigger the function.
 * @param handlerFunction This is the function that you want the command to trigger, which has to be defined before
 * you add the handler. This function can take commandName parameter, followed by as many
 * parameters as you expect after your command (see below). These are all optional.
 * @param caseSensitive Specifies if the command handler will ignore the case for this command name.
 * @noSelf
 */
export declare function addCommandHandler(
    commandName: string,
    handlerFunction: CommandHandler,
    caseSensitive?: boolean,
): boolean;

/**
 * Binds a players key to a handler function or command, which will be called when the key
 * is pressed.
 * @see https://wiki.multitheftauto.com/wiki/BindKey
 * @param key The key that was pressed
 * @param keyState The state of the key that was pressed, down if it was pressed, up if it was released.
 * @param up If the bound key should trigger the function when the key is released
 * @param down If the bound key should trigger the function when the key is pressed
 * @param both If the bound key should trigger the function when the key is pressed or released
 * @param handlerFunction The function that will be triggered when the players key is pressed. This function should
 * have the form:
 * :<syntaxhighlight lang="lua">function functionName ( string key, string keyState, [ var
 * arguments, ... ] )</syntaxhighlight>
 * :The values passed to this function are:
 * @param arguments The optional arguments you specified when calling bindKey (see below).
 * @noSelf
 */
export declare function bindKey<
    CallbackType extends BindKeyCallback<any[]> = BindKeyCallback,
>(
    key: ControlName | KeyName,
    keyState: KeyState,
    handlerFunction: CallbackType,
    ...args: BindKeyCallbackVarArgs<CallbackType>
): boolean;

/**
 * This function will call all the attached functions of an existing console command, for a
 * specified player.
 * @see https://wiki.multitheftauto.com/wiki/ExecuteCommandHandler
 * @param commandName The name of the command you wish to execute. This is what must be typed into the console
 * to trigger the function.
 * @param args Additional parameters that will be passed to the handler function(s) of the command that
 * is called, separated by spaces.
 * @noSelf
 */
export declare function executeCommandHandler(
    commandName: string,
    args?: string,
): boolean;

/**
 * This retrieves the analog control state of a control.  This is useful for detecting
 * sensitive controls, such as those used on a joypad.
 * To get the analog control state for a ped, please use getPedAnalogControlState.
 * @see https://wiki.multitheftauto.com/wiki/GetAnalogControlState
 * @param control The control that you want to get the state of. See control names for a list of possible
 * controls.
 * @param rawValue A bool indicating if it should return the raw player input value.
 * @return returns a float between 0 and 1 indicating the amount the control is pressed.
 * @noSelf
 */
export declare function getAnalogControlState(
    control: string,
    rawValue?: boolean,
): number;

/**
 * Returns a list of key names that are bound to the specified game Control names|control or
 * console command.
 * @see https://wiki.multitheftauto.com/wiki/GetBoundKeys
 * @param command/control the name of a game control or a console command. See the control names page for valid
 * controls.
 * @return if one or more keys are bound to the specified control or console command, a table is
 * returned indexed by the names of the keys and containing key states as values. if no keys
 * are bound or an invalid name was passed, returns false.
 * @noSelf
 */
export declare function getBoundKeys(command_control: string): LuaTable;

/**
 * This function is used to retrieve a list of all the registered command handlers of a
 * given resource (or of all resources).
 * @see https://wiki.multitheftauto.com/wiki/GetCommandHandlers
 * @param theResource The resource from which you wish to retrieve all command handlers. Or leave it empty to
 * retrieve command handlers of all resources.
 * @return returns a table containing all the commands of the given resource or a table with
 * subtables containing the command and theresource pointer ( { command, theresource } ).
 * see examples below if you dont understand it.
 * @noSelf
 */
export declare function getCommandHandlers(theResource?: Resource): LuaTable;

/**
 * Gets the commands bound to a key.
 * @see https://wiki.multitheftauto.com/wiki/GetCommandsBoundToKey
 * @param theKey See key names for a list of possible keys
 * @param keyState A string that has one of the following values:
 * @param up If the bound key should trigger the function when the key is released
 * @param down If the bound key should trigger the function when the key is pressed
 * @param both If the bound key should trigger the function when the key is pressed or released
 * @return returns a table of the commands bound on that key.
 * @noSelf
 */
export declare function getCommandsBoundToKey(
    theKey: string,
    keyState: string,
): LuaTable;

/**
 * Gets the functions bound to a key. To bind a function to a key use the bindKey function
 * @see https://wiki.multitheftauto.com/wiki/GetFunctionsBoundToKey
 * @param theKey The key you wish to check the functions from.
 * @param keyState A string that has one of the following values:
 * @param up If the bound key should trigger the function when the key is released
 * @param down If the bound key should trigger the function when the key is pressed
 * @param both If the bound key should trigger the function when the key is pressed or released
 * @noSelf
 */
export declare function getFunctionsBoundToKey(
    key: string,
    keyState: string,
): LuaTable;

/**
 * This function allow you get first key bound to command.
 * @see https://wiki.multitheftauto.com/wiki/GetKeyBoundToCommand
 * @param command command what you need check.
 * @return returns a string of first key binded to current command.
 * @noSelf
 */
export declare function getKeyBoundToCommand(command: string): string;

/**
 * getKeyBoundToFunction allows retrieval of the first key bound to a function.
 * @see https://wiki.multitheftauto.com/wiki/GetKeyBoundToFunction
 * @param theFunction The function in which you would like to check the bound key
 * @return returns a string of the first key the function was bound to.
 * @noSelf
 */
export declare function getKeyBoundToFunction(
    theFunction: HandleFunction,
): string;

/**
 * This function determines if a certain key is pressed or not.
 * Note: ralt may trigger both ralt and lctrl, this is due to AltGr
 * @see https://wiki.multitheftauto.com/wiki/GetKeyState
 * @param keyName The name of the key youre checking state of. See Key names.
 * @return returns true if the specified key is pressed, false if it isnt or if an invalid key name
 * is passed.
 * @noSelf
 */
export declare function getKeyState(keyName: string): boolean;

/**
 * Checks whether a GTA control is enabled or disabled for a certain player.
 * @see https://wiki.multitheftauto.com/wiki/IsControlEnabled
 * @param control The control you wish to check. See control names for a list of possible controls.
 * @noSelf
 */
export declare function isControlEnabled(control: string): boolean;

/**
 * This function removes a command handler, that is one that has been added using
 * addCommandHandler. This function can only remove command handlers that were added by the
 * resource that it is called in.
 * @see https://wiki.multitheftauto.com/wiki/RemoveCommandHandler
 * @param commandName the name of the command you wish to remove.
 * @param handler the specific handler function to remove. If not specified, all handler functions for the
 * command (from the calling resource) will be removed. This argument is only available in
 * the server.
 * @return returns true if the command handler was removed successfully, false if the command doesnt
 * exist.
 * @noSelf
 */
export declare function removeCommandHandler(
    commandName: string,
    handler?: CommandHandler,
): boolean;

/**
 * Enables or disables the use of all GTA controls for a specified player.
 * @see https://wiki.multitheftauto.com/wiki/ToggleAllControls
 * @param enabled A boolean value representing whether or not the controls will be usable.
 * @param gtaControls A boolean deciding whether the enabled parameter will affect GTAs internal controls.
 * @param mtaControls A boolean deciding whether the enabled parameter will affect MTAs own controls., e.g.
 * chatbox.
 * @noSelf
 */
export declare function toggleAllControls(
    enabled: boolean,
    gtaControls?: boolean,
    mtaControls?: boolean,
): boolean;

/**
 * Enables or disables the use of a GTA control for a specific player.
 * @see https://wiki.multitheftauto.com/wiki/ToggleControl
 * @param control The control that you want to toggle the ability of. See control names for a list of
 * possible controls.
 * @param enabled A boolean value representing whether or not the key will be usable or not.
 * @noSelf
 */
export declare function toggleControl(
    control: string,
    enabled: boolean,
): boolean;

/**
 * Removes an existing key bind from the specified player.
 * @see https://wiki.multitheftauto.com/wiki/UnbindKey
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState is optional in Syntax 2.
 * @param up If the bound key triggered a function when the key was released
 * @param down If the bound key triggered a function when the key was pressed
 * @param both If the bound key triggered a function when the key was pressed and released
 * @param command (Syntax 1) The command you wish to unbind.
 * @param handler (Syntax 2) The function you wish to unbind.
 * Note: If you do not specify ''handler'', any instances of ''key'' being bound will be
 * unbound, whatever function they are bound to.
 * @return returns true if the key was unbound, false if it was not previously bound or invalid
 * arguments were passed to the function.
 * @noSelf
 */
export declare function unbindKey(
    key: string,
    keyState: string,
    command: string,
): boolean;