/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * This function returns the maximum number of player slots on the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/getMaxPlayers|MTASA Wiki}
 * @return Returns the maximum number of players allowed on the server.
 */
export function getMaxPlayers(): number;

/**
 * This function retrieves the server's HTTP port.
 * @see {@link https://wiki.multitheftauto.com/wiki/getServerHttpPort|MTASA Wiki}
 * @return An integer corresponding to the server's HTTP port.
 */
export function getServerHttpPort(): number;

/**
 * This function retrieves the server's name.
 * @see {@link https://wiki.multitheftauto.com/wiki/getServerName|MTASA Wiki}
 * @return A string containing the server's name.
 */
export function getServerName(): string;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function returns the current password required to join the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/getServerPassword|MTASA Wiki}
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns the current server password as a string if it has a password, if not it returns
 * ''nil''.
 */
export function getServerPassword(): string;

/**
 * This function retrieves the server's port.
 * @see {@link https://wiki.multitheftauto.com/wiki/getServerPort|MTASA Wiki}
 * @return An integer corresponding to the server's port.
 */
export function getServerPort(): number;

/**
 * This function retrieves whether San Andreas game glitches are enabled or not, set by using
 * [[setGlitchEnabled]]
 * @see {@link https://wiki.multitheftauto.com/wiki/isGlitchEnabled|MTASA Wiki}
 * @param glitchName the name of the property to set. Possible values are:  {{Glitches}}
 * @return Returns ''true'' if if the glitch was enabled, or ''false'' if it is disabled.
 */
export function isGlitchEnabled(glitchName: string): boolean;

/**
 * This function enables or disables glitches that are found in the original Single Player game
 * that can be used to gain an advantage in multiplayer.
 * Users of the '''fastmove''' glitch may additionally want to install
 * [https://community.mtasa.com/index.php?p=resources&s=details&id=13368 this resource to disable crouchsliding].
 * @see {@link https://wiki.multitheftauto.com/wiki/setGlitchEnabled|MTASA Wiki}
 * @param glitchName the name of the property to set. Possible values are:  {{Glitches}}
 * @param enable whether or not to enable the glitch.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setGlitchEnabled(glitchName: string, enable: boolean): boolean;

/**
 * This function sets the maximum number of player slots on the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/setMaxPlayers|MTASA Wiki}
 * @param slots Maximum number of player slots on the server.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if number of player slots was successfully changed, ''false'' or ''nil''
 * otherwise.
 */
export function setMaxPlayers(slots: number): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function changes the password required to join the server to the given string.
 * @see {@link https://wiki.multitheftauto.com/wiki/setServerPassword|MTASA Wiki}
 * @param thePassword The new server password you want. Pass nil or an empty string to remove the
 * password.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the password was successfully changed or removed, ''false'' or ''nil''
 * otherwise.
 */
export function setServerPassword(thePassword: string): boolean;

/**
 * This function shuts down the server.
 * Make sure your server ACL setup has function.shutdown object protected.
 * @see {@link https://wiki.multitheftauto.com/wiki/shutdown|MTASA Wiki}
 * @param reason the reason why the server has been shut down.
 * @return Returns ''false'' if it was not possible to shut down the server.
 */
export function shutdown(reason: string): boolean;

/**
 * This function gives you various version information about MTA and the operating system.
 * @see {@link https://wiki.multitheftauto.com/wiki/getVersion|MTASA Wiki}
 * @return Returns a table with version information. Specifically these keys are present in the
 * table:
 * * *'''number:''' the MTA server or client version (depending where the function was called) in
 * pure numerical form, e.g. ''"256"''
 * * *'''mta:''' the MTA server or client version (depending where the function was called) in
 * textual form, e.g. ''"1.0"''
 * * *'''name:''' the full MTA product name, either ''"MTA:SA Server"'' or ''"MTA:SA Client"''.
 * * *'''netcode:''' the netcode version number.
 * * *'''os:''' returns the operating system on which the server or client is running
 * * *'''type:''' the type of build.  can be:
 * * **'''"Nightly rX"''' - A nightly development build.  '''X''' represents the nightly build
 * revision.
 * * **'''"Custom"''' - A build compiled manually
 * * **'''"Release"''' - A build that is publicly released (provisional).
 * * *'''tag:''' the build tag (from 1.0.3 onwards). Contains infomation about the underlying
 * version used. i.e. The final version of 1.0.3 has the build tag of "1.0.3 rc-9". (This can be confirmed
 * by using the console command 'ver'.)
 * * *'''sortable:''' a 15 character sortable version string (from 1.0.4 onwards). Format of the
 * string is described in [[getPlayerVersion]].
 */
export function getVersion(): LuaTable;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/isTransferBoxVisible|MTASA Wiki}
 * @return On '''server''' this returns a boolean, whether the transfer box should be visible
 * during downloads or not.
 * * On '''client''' this returns a boolean, whether the transfer box should be visible or not at
 * the time of invocation.
 */
export function isTransferBoxVisible(): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setTransferBoxVisible|MTASA Wiki}
 * @param visible The new visibility state.
 * @return Returns ''true'' if the visibility was set successfully, ''false'' otherwise.
 */
export function setTransferBoxVisible(visible: boolean): boolean;
