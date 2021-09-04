// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    TextDisplay,
    Account,
    ACL,
    ACLGroup,
    Ban,
    XML,
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
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/**
 * This function will add a ban for the specified IP/username/serial to the server.
 * @see https://wiki.multitheftauto.com/wiki/AddBan
 * @param IP The IP to be banned. If you dont want to ban by IP, set this to nil.
 * '''or'''
 * @param Username The http://community.mtasa.com/ MTA Community username to be banned (now obsolete). If
 * you dont want to ban by username, set this to nil.
 * '''or'''
 * @param Serial The serial to be banned. If you dont want to ban by serial, set this to nil.
 * ''' or any combination.'''
 * @param responsibleElement The element that is responsible for banning the IP/username/serial. This can be a player
 * or the root (getRootElement()).
 * @param reason The reason the IP/username/serial will be banned from the server.
 * @param seconds The amount of seconds the player will be banned from the server for. This can be 0 for an
 * infinite amount of time.
 * @return returns the new ban if the ip/username/serial was banned successfully, false if invalid
 * arguments are specified.
 * @noSelf
 */
export declare function addBan(
    IP?: string,
    Username?: string,
    Serial?: string,
    responsibleElement?: Player,
    reason?: string,
    seconds?: number,
): Ban;

/**
 * This function will ban the specified player by either IP, serial or username
 * This function will ban the specified player from the server by IP.
 * @see https://wiki.multitheftauto.com/wiki/BanPlayer
 * @param bannedPlayer The player that will be banned from the server.
 * @param IP Will player be banned by IP?
 * @param Username Will player be banned by username?
 * @param Serial Will player be banned by serial?
 * @param responsibleElement The element that is responsible for banning the player. This can be a player or the root
 * (getRootElement()) (Maximum 30 characters if using a string).
 * @param reason The reason the player will be banned from the server.
 * @param seconds The amount of seconds the player will be banned from the server for. This can be 0 for an
 * infinite amount of time.
 * @return returns a ban object if banned successfully, or false if unsuccessful.
 * @noSelf
 */
export declare function banPlayer(
    bannedPlayer: Player,
    IP?: boolean,
    Username?: boolean,
    Serial?: boolean,
    responsiblePlayer?: Player | string,
    reason?: string,
    seconds?: number,
): Ban;

/**
 * This function will return the responsible admin (nickname of the admin) of the specified
 * ban.
 * @see https://wiki.multitheftauto.com/wiki/GetBanAdmin
 * @param theBan The ban you want to return the admin of.
 * @return returns a string of the admin if everything was successful, false if invalid arguments
 * are specified if there was no admin specified for the ban.
 * @noSelf
 */
export declare function getBanAdmin(theBan: Ban): string;

/**
 * This function will return the IP of the specified ban.
 * @see https://wiki.multitheftauto.com/wiki/GetBanIP
 * @param theBan The ban in which you want to return the IP of.
 * @return returns a string of the ip if everything was successful, false if invalid arguments are
 * specified if there was no ip specified for the ban.
 * @noSelf
 */
export declare function getBanIP(theBan: Ban): string;

/**
 * This function will return the nickname (nickname that the player had when he was banned)
 * of the specified ban.
 * @see https://wiki.multitheftauto.com/wiki/GetBanNick
 * @param theBan The ban element which nickname you want to return.
 * @return returns a string of the nickname if everything was successfull, false if invalid
 * arguments are specified if there was no nickname specified for the ban element.
 * @noSelf
 */
export declare function getBanNick(theBan: Ban): string;

/**
 * This function will return the ban reason of the specified ban.
 * @see https://wiki.multitheftauto.com/wiki/GetBanReason
 * @param theBan The ban in which you want to return the reason of.
 * @return returns a string of the reason if everything was successful, false if invalid arguments
 * are specified if there was no reason specified for the ban.
 * @noSelf
 */
export declare function getBanReason(theBan: Ban): string;

/**
 * This function will return a table containing all the bans present in the servers
 * banlist.xml.
 * @see https://wiki.multitheftauto.com/wiki/GetBans
 * @return returns a table containing all the bans.
 * @noSelf
 */
export declare function getBans(): LuaTable;

/**
 * This function will return the serial of the specified ban.
 * @see https://wiki.multitheftauto.com/wiki/GetBanSerial
 * @param theBan The ban you want to retrieve the serial of.
 * @return returns a string of the serial if everything was successful, false if invalid arguments
 * are specified or if there was no serial specified for the ban.
 * @noSelf
 */
export declare function getBanSerial(theBan: Ban): string;

/**
 * This function will return the time the specified ban was created, in seconds.
 * @see https://wiki.multitheftauto.com/wiki/GetBanTime
 * @param theBan The ban of which you wish to retrieve the time of.
 * @return * returns an integer of the banning time in the format of seconds from the year 1970.
 * use in conjunction with getrealtime in order to retrieve detailed information.
 * * returns false if invalid arguments were specified or if there was no banning time
 * specified for the ban.
 * @noSelf
 */
export declare function getBanTime(theBan: Ban): number;

/**
 * This function will return the username of the specified ban.
 * @see https://wiki.multitheftauto.com/wiki/GetBanUsername
 * @param theBan The ban in which you wish to retrieve the username of.
 * @return returns a string of the username if everything was successful, false if invalid arguments
 * are specified if there was no username specified for the ban.
 * @noSelf
 */
export declare function getBanUsername(theBan: Ban): string;

/**
 * This function will return the unbanning time of the specified ban in seconds.
 * @see https://wiki.multitheftauto.com/wiki/GetUnbanTime
 * @param theBan The ban in which you wish to retrieve the unban time of.
 * @return * returns an integer of the unbanning time in the format of seconds from the year 1970.
 * use in conjunction with getrealtime in order to retrieve detailed information.
 * * returns false if invalid arguments are specified or if there was no unbanning time
 * specified for the ban.
 * @noSelf
 */
export declare function getUnbanTime(theBan: Ban): number;

/**
 * This function checks whether the passed value is valid ban or not.
 * @see https://wiki.multitheftauto.com/wiki/IsBan
 * @param theBan The value to check
 * @return returns true if the value is a ban, false otherwise.
 * @noSelf
 */
export declare function isBan(theBan: Ban): boolean;

/**
 * This function will kick the specified player from the server.
 * @see https://wiki.multitheftauto.com/wiki/KickPlayer
 * @param kickedPlayer The player that will be kicked from the server
 * @param responsiblePlayer The player that is responsible for the event. Note: If left out as in the second syntax,
 * responsible player for the kick will be Console (Maximum 30 characters if using a string).
 * @param reason The reason for the kick. (Maximum 64 characters before 1.5.8, Maximum 128 characters
 * after 1.5.8)
 * @return returns true if the player was kicked succesfully, false if invalid arguments are
 * specified.
 * @noSelf
 */
export declare function kickPlayer(
    kickedPlayer: Player,
    responsiblePlayer?: Player | string,
    reason?: string,
): boolean;

/**
 * This function will reload the server ban list file.
 * @see https://wiki.multitheftauto.com/wiki/ReloadBans
 * @return returns true if the ban list was reloaded successfully, false otherwise.
 * @noSelf
 */
export declare function reloadBans(): boolean;

/**
 * This function will remove a specific ban.
 * @see https://wiki.multitheftauto.com/wiki/RemoveBan
 * @param theBan The ban to be removed.
 * @param responsibleElement The element that is responsible for removing the ban element. This can be a player or the
 * root (getRootElement()).
 * @return returns true if the ban was removed succesfully, false if invalid arguments are specified.
 * @noSelf
 */
export declare function removeBan(
    theBan: Ban,
    responsibleElement?: Player,
): boolean;

/**
 * This function sets a new admin for a ban.
 * @see https://wiki.multitheftauto.com/wiki/SetBanAdmin
 * @param theBan The ban you want to change the admin of.
 * @param theAdmin The new admin.
 * @return returns true if changed, false otherwise.
 * @noSelf
 */
export declare function setBanAdmin(theBan: Ban, theAdmin: string): boolean;

/**
 * @see https://wiki.multitheftauto.com/wiki/SetBanNick
 * @param theBan The ban you want to change the nick of.
 * @param theNick A string representing the nick you want to set the ban to.
 * @return returns true if changed, false otherwise.
 * @noSelf
 */
export declare function setBanNick(theBan: Ban, theNick: string): boolean;

/**
 * This function sets the reason for the specified ban.
 * @see https://wiki.multitheftauto.com/wiki/SetBanReason
 * @param theBan The ban that you wish to set the reason of.
 * @param theReason the new reason (max 60 characters).
 * @return returns true if the new reason was set successfully, false otherwise.
 * @noSelf
 */
export declare function setBanReason(theBan: Ban, theReason: string): boolean;

/**
 * This function sets a new unban time of a given ban using unix timestamp (seconds since
 * Jan 01 1970).
 * @see https://wiki.multitheftauto.com/wiki/SetUnbanTime
 * @param theBan The ban of which to change the unban time of
 * @param theTime the new unban time
 * @return returns true if changed successfully, false otherwise.
 * @noSelf
 */
export declare function setUnbanTime(theBan: Ban, theTime: number): boolean;
