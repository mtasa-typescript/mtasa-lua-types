/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

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
