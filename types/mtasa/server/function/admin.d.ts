/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Ban, Player } from '../structure';

/**
 * This function will add a [[ban]] for the specified IP/username/serial to the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/addBan|MTASA Wiki}
 * @param IP The IP to be banned. If you dont want to ban by IP, set this to nil.  '''or'''
 * @param Username The http://community.mtasa.com/ MTA Community username to be banned (now
 * obsolete). If you dont want to ban by username, set this to nil.  '''or'''
 * @param Serial The serial to be banned. If you dont want to ban by serial, set this to nil.  '''
 * or any combination.'''  {{OptionalArg}}
 * @param responsibleElement The element that is responsible for banning the IP/username/serial.
 * This can be a player or the root (getRootElement()).
 * @param reason The reason the IP/username/serial will be banned from the server.
 * @param seconds The amount of seconds the player will be banned from the server for. This can be
 * 0 for an infinite amount of time.
 * @default 0
 * @return Returns the new [[ban]] if the IP/username/serial was banned successfully, ''false'' if
 * invalid arguments are specified.
 */
export function addBan(
    IP: string,
    Username: string,
    Serial: string,
    responsibleElement: Player,
    reason: string,
    seconds: number,
): Ban;

/**
 * This function will ban the specified player by either IP, [[serial]] or username
 * }}
 * This function will ban the specified player from the server by IP.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/banPlayer|MTASA Wiki}
 * @param bannedPlayer The player that will be banned from the server.  {{OptionalArg}}   {{New
 * feature|3|1.0|
 * @param IP Will player be banned by IP?
 * @default true
 * @param Username Will player be banned by username?
 * @default false
 * @param Serial Will player be banned by serial?  }}
 * @default false
 * @param reason The reason the player will be banned from the server.
 * @default nil
 * @param seconds The amount of seconds the player will be banned from the server for. This can be
 * 0 for an infinite amount of time.
 * @default 0
 * @return Returns a [[ban]] object if banned successfully, or ''false'' if unsuccessful.
 */
export function banPlayer(
    bannedPlayer: Player,
    IP: boolean,
    Username: boolean,
    Serial: boolean,
    string: Player,
    reason: string,
    seconds: number,
): Ban;

/**
 * This function will return the responsible admin (nickname of the admin) of the specified [[ban]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getBanAdmin|MTASA Wiki}
 * @param theBan The ban you want to return the admin of.
 * @return Returns a ''string'' of the admin if everything was successful, ''false'' if invalid
 * arguments are specified if there was no admin specified for the [[ban]].
 */
export function getBanAdmin(theBan: Ban): string;

/**
 * This function will return the IP of the specified [[ban]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getBanIP|MTASA Wiki}
 * @param theBan The ban in which you want to return the IP of.
 * @return Returns a ''string'' of the IP if everything was successful, ''false'' if invalid
 * arguments are specified if there was no IP specified for the [[ban]].
 */
export function getBanIP(theBan: Ban): string;

/**
 * This function will return the nickname (nickname that the player had when he was banned) of the
 * specified [[ban]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getBanNick|MTASA Wiki}
 * @param theBan The ban element which nickname you want to return.
 * @return Returns a ''string'' of the nickname if everything was successfull, ''false'' if invalid
 * arguments are specified if there was no nickname specified for the [[ban]] element.
 */
export function getBanNick(theBan: Ban): string;

/**
 * This function will return the ban reason of the specified [[ban]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getBanReason|MTASA Wiki}
 * @param theBan The ban in which you want to return the reason of.
 * @return Returns a ''string'' of the reason if everything was successful, ''false'' if invalid
 * arguments are specified if there was no reason specified for the [[ban]].
 */
export function getBanReason(theBan: Ban): string;

/**
 * This function will return the [[serial]] of the specified [[ban]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getBanSerial|MTASA Wiki}
 * @param theBan The ban you want to retrieve the serial of.
 * @return Returns a ''string'' of the serial if everything was successful, ''false'' if invalid
 * arguments are specified or if there was no serial specified for the [[ban]].
 */
export function getBanSerial(theBan: Ban): string;

/**
 * This function will return the time the specified [[ban]] was created, in '''seconds'''.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBanTime|MTASA Wiki}
 * @param theBan The ban of which you wish to retrieve the time of.
 * @return * Returns an integer of the banning time in the format of seconds from the year 1970.
 * Use in conjunction with [[getRealTime]] in order to retrieve detailed information.
 * * * Returns '''false''' if invalid arguments were specified or if there was no banning time
 * specified for the [[ban]].
 */
export function getBanTime(theBan: Ban): number;

/**
 * This function will return the username of the specified [[ban]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getBanUsername|MTASA Wiki}
 * @param theBan The ban in which you wish to retrieve the username of.
 * @return Returns a ''string'' of the username if everything was successful, ''false'' if invalid
 * arguments are specified if there was no username specified for the [[ban]].
 */
export function getBanUsername(theBan: Ban): string;

/**
 * This function will return a table containing all the [[ban]]s present in the server's
 * banlist.xml.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBans|MTASA Wiki}
 * @return Returns a [[table]] containing all the [[ban]]s.
 */
export function getBans(): LuaTable;

/**
 * This function will return the unbanning time of the specified [[ban]] in '''seconds'''.
 * @see {@link https://wiki.multitheftauto.com/wiki/getUnbanTime|MTASA Wiki}
 * @param theBan The ban in which you wish to retrieve the unban time of.
 * @return * Returns an integer of the unbanning time in the format of seconds from the year 1970.
 * Use in conjunction with [[getRealTime]] in order to retrieve detailed information.
 * * * Returns '''false''' if invalid arguments are specified or if there was no unbanning time
 * specified for the [[ban]].
 */
export function getUnbanTime(theBan: Ban): number;

/**
 * This function checks whether the passed value is valid [[ban]] or not.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isBan|MTASA Wiki}
 * @param theBan The value to check
 * @return Returns ''true'' if the value is a ban, ''false'' otherwise.
 */
export function isBan(theBan: Ban): boolean;

/**
 * This function will kick the specified player from the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/kickPlayer|MTASA Wiki}
 * @param kickedPlayer The player that will be kicked from the server
 * @param reason The reason for the kick. (Maximum 64 characters)
 * @default ""
 * @return Returns ''true'' if the player was kicked succesfully, ''false'' if invalid arguments
 * are specified.
 */
export function kickPlayer(kickedPlayer: Player, string: Player, reason: string): boolean;

/**
 * This function sets a new admin for a [[ban]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setBanAdmin|MTASA Wiki}
 * @param theBan The ban you want to change the admin of.
 * @param theAdmin The new admin.
 * @return Returns ''true'' if changed, ''false'' otherwise.
 */
export function setBanAdmin(theBan: Ban, theAdmin: string): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setBanNick|MTASA Wiki}
 * @param theBan The ban you want to change the nick of.
 * @param theNick A string representing the nick you want to set the ban to.
 * @return
 */
export function setBanNick(theBan: Ban, theNick: string): boolean;

/**
 * This function sets the reason for the specified [[ban]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setBanReason|MTASA Wiki}
 * @param theBan The ban that you wish to set the reason of.
 * @param theReason the new reason (max 60 characters).
 * @return Returns ''true'' if the new reason was set successfully, ''false'' otherwise.
 */
export function setBanReason(theBan: Ban, theReason: string): boolean;

/**
 * This function sets a new unban time of a given [[ban]] using unix timestamp (seconds since Jan
 * 01 1970).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setUnbanTime|MTASA Wiki}
 * @param theBan The ban of which to change the unban time of
 * @param theTime the new unban time
 * @return Returns ''true'' if changed successfully, ''false'' otherwise.
 */
export function setUnbanTime(theBan: Ban, theTime: number): boolean;

/**
 * This function will reload the server ban list file.
 * @see {@link https://wiki.multitheftauto.com/wiki/reloadBans|MTASA Wiki}
 * @return Returns ''true'' if the ban list was reloaded successfully, ''false'' otherwise.
 */
export function reloadBans(): boolean;

/**
 * This function will remove a specific [[ban]].
 * @see {@link https://wiki.multitheftauto.com/wiki/removeBan|MTASA Wiki}
 * @param theBan The ban to be removed.  {{OptionalArg}}
 * @param responsibleElement The element that is responsible for removing the ban element. This can
 * be a player or the root (getRootElement()).
 * @default nil
 * @return Returns ''true'' if the [[ban]] was removed succesfully, ''false'' if invalid arguments
 * are specified.
 */
export function removeBan(theBan: Ban, responsibleElement?: Player): boolean;
