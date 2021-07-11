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
    FetchRemoteCallback
} from '../structure';

/**
 * This function adds an account to the list of registered accounts of the current server.
 * @see {@link https://wiki.multitheftauto.com/wiki/AddAccount Wiki, addAccount }
 * @param name The name of the account you wish to make, this normally is the players name.
 * @param pass The password to set for this account for future logins.
 * @param allowCaseVariations Whether the username is case sensitive (if this is set to true, usernames Bob and bob
 * will refer to different accounts)
 * @return returns an account or false if the account already exists or an error occured.
 * @noSelf
 */
export declare function addAccount(
    name: string,
    pass: string,
    allowCaseVariations?: boolean
): Account;

/**
 * This function copies all of the data from one account to another.
 * @see {@link https://wiki.multitheftauto.com/wiki/CopyAccountData Wiki, copyAccountData }
 * @param theAccount The account you wish to copy the data to.
 * @param fromAccount The account you wish to copy the data from.
 * @return returns a true if the accounts were valid, false otherwise.
 * @noSelf
 */
export declare function copyAccountData(
    theAccount: Account,
    fromAccount: Account
): boolean;

/**
 * This function returns an account for a specific user.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccount Wiki, getAccount }
 * @param username The username of the account you want to retrieve
 * @param password The password for the account. If this argument is not specified, you can get the account
 * whatever password it is, otherwise the password must match the accounts.
 * @param caseSensitive : Specifies whether to ignore the case when searching for an account.
 * |16257}}
 * @return returns an account or false if an account matching the username specified (and password,
 * if specified) could not be found.
 * @noSelf
 */
export declare function getAccount(
    username: string,
    password?: string,
    caseSensitive?: boolean
): Account;

/**
 * This function returns the account with the specific ID.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountByID Wiki, getAccountByID }
 * @param id The ID to get account from
 * @return returns account associated with specified id. returns false if invalid arguments were
 * specified or there is no account with this id.
 * @noSelf
 */
export declare function getAccountByID(
    id: number
): Account;

/**
 * This function retrieves a string that has been stored using setAccountData. Data stored
 * as account data is persistent across users sessions and maps, unless they are logged into
 * a guest account.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountData Wiki, getAccountData }
 * @param theAccount The account you wish to retrieve the data from.
 * @param key The key under which the data is stored
 * @return returns a string containing the stored data or false if no data was stored under that key.
 * @noSelf
 */
export declare function getAccountData(
    theAccount: Account,
    key: string
): string;

/**
 * This function retrieves the ID of an account.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountID Wiki, getAccountID }
 * @param theAccount The account you wish to get the ID of.
 * @return returns a int containing the accounts id, false if the account does not exist or an
 * invalid argument was passed to the function.
 * @noSelf
 */
export declare function getAccountID(
    theAccount: Account
): number;

/**
 * This function retrieves the IP address of an account.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountIP Wiki, getAccountIP }
 * @param theAccount The account you wish to get the IP of.
 * @return returns a string containing the accounts ip, false if the account does not exist or an
 * invalid argument was passed to the function.
 * @noSelf
 */
export declare function getAccountIP(
    theAccount: Account
): string;

/**
 * This function retrieves the name of an account.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountName Wiki, getAccountName }
 * @param theAccount The account you wish to get the name of.
 * @return returns a string containing the accounts name, false if the account does not exist or an
 * invalid argument was passed to the function.
 * @noSelf
 */
export declare function getAccountName(
    theAccount: Account
): string;

/**
 * This function returns the player element that is currently using a specified account,
 * i.e. is logged into it. Only one player can use an account at a time.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountPlayer Wiki, getAccountPlayer }
 * @param theAccount The account you wish to get the player of.
 * @return returns a player element if the account is currently in use, false otherwise.
 * @noSelf
 */
export declare function getAccountPlayer(
    theAccount: Account
): Player;

/**
 * This function returns a table over all the accounts that exist in the server internal.db
 * file. (Note: accounts.xml is no longer used after version 1.0.4)
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccounts Wiki, getAccounts }
 * @return a table over the accounts that exist in the server internal.db file. this table might be
 * empty.
 * @noSelf
 */
export declare function getAccounts(): LuaTable;

/**
 * This function returns a table containing all accounts with specified dataName and value
 * (set with setAccountData).
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountsByData Wiki, getAccountsByData }
 * @param dataName The name of the data
 * @param value The value the dataName should have
 * @return returns table containing the accounts associated with specified value at dataname.
 * returns false if invalid arguments were specified.
 * @noSelf
 */
export declare function getAccountsByData(
    dataName: string,
    value: string
): LuaTable;

/**
 * This function returns a table containing all accounts that were logged onto from
 * specified IP-address.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountsByIP Wiki, getAccountsByIP }
 * @param ip The IP to get accounts from
 * @return returns table containing the accounts associated with specified ip-address. returns false
 * if invalid arguments were specified.
 * @noSelf
 */
export declare function getAccountsByIP(
    ip: string
): LuaTable;

/**
 * This function returns a table containing all accounts that were logged onto from
 * specified serial. If the serial is empty string, it will return all accounts that were
 * never logged onto.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountsBySerial Wiki, getAccountsBySerial }
 * @param serial The serial to get accounts from
 * @return returns table containing the accounts associated with specified serial. returns false if
 * invalid arguments were specified.
 * @noSelf
 */
export declare function getAccountsBySerial(
    serial: string
): LuaTable;

/**
 * This function returns the last serial that logged onto the specified account.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAccountSerial Wiki, getAccountSerial }
 * @param theAccount The account to get serial from
 * @return returns string containing the serial, the string is empty if the account was never used.
 * returns false if invalid arguments were specified.
 * @noSelf
 */
export declare function getAccountSerial(
    theAccount: Account
): string;

/**
 * This function returns a table containing all the user data for the account provided
 * @see {@link https://wiki.multitheftauto.com/wiki/GetAllAccountData Wiki, getAllAccountData }
 * @param theAccount The account you wish to retrieve all data from.
 * @return a table containing all the user data. this table might be empty.
 * @noSelf
 */
export declare function getAllAccountData(
    theAccount: Account
): LuaTable;

/**
 * This function returns the specified players account object.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerAccount Wiki, getPlayerAccount }
 * @param thePlayer The player element you want to get the account of.
 * @return returns the players account object, or false if the player passed to the function is
 * invalid.
 * @noSelf
 */
export declare function getPlayerAccount(
    thePlayer: Player
): Account;

/**
 * This function checks to see if an account is a guest account. A guest account is an
 * account automatically created for a user when they join the server and deleted when they
 * quit or login to another account. Data stored in a guest account is not stored after the
 * player has left the server. As a consequence, this function will check if a player is
 * logged in or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsGuestAccount Wiki, isGuestAccount }
 * @param theAccount The account you want to check to see if it is a guest account.
 * @return returns true if the account is a guest account, false otherwise.
 * @noSelf
 */
export declare function isGuestAccount(
    theAccount: Account
): boolean;

/**
 * This functions logs the given player in to the given account. You need to provide the
 * password needed to log into that account.
 * @see {@link https://wiki.multitheftauto.com/wiki/LogIn Wiki, logIn }
 * @param thePlayer The player to log into an account
 * @param theAccount The account to log the player into
 * @param thePassword The password needed to sign into this account
 * @return returns true if the player was successfully logged into the given account. returns false
 * or nil if the log in failed for some reason, ie. the player was already logged in to some
 * account (use logout first), if the account was already in use or if it failed for some
 * other reason.
 * @noSelf
 */
export declare function logIn(
    thePlayer: Player,
    theAccount: Account,
    thePassword: string
): boolean;

/**
 * This function logs the given player out of his current account.
 * @see {@link https://wiki.multitheftauto.com/wiki/LogOut Wiki, logOut }
 * @param thePlayer The player to log out of his current account
 * @return returns true if the player was successfully logged out, false or nil if it failed for
 * some reason, ie. the player was never logged in.
 * @noSelf
 */
export declare function logOut(
    thePlayer: Player
): boolean;

/**
 * This function is used to delete existing player accounts.
 * @see {@link https://wiki.multitheftauto.com/wiki/RemoveAccount Wiki, removeAccount }
 * @param theAccount The account you wish to remove
 * @return returns true if account was successfully removed, false if the account does not exist.
 * @noSelf
 */
export declare function removeAccount(
    theAccount: Account
): boolean;

/**
 * This function sets a string to be stored in an account. This can then be retrieved using
 * getAccountData. Data stored as account data is persistent across users sessions and maps,
 * unless they are logged into a guest account. Even if logged into a guest account, account
 * data can be useful as a way to store a reference to your own account system, though its
 * persistence is equivalent to that of using setElementData on the players element.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetAccountData Wiki, setAccountData }
 * @param theAccount The account you wish to retrieve the data from.
 * @param key The key under which you wish to store the data
 * @param value The value you wish to store. Set to false to remove the data. NOTE: you cannot store
 * tables as values, but you can use toJSON strings.
 * @return returns a true if the account data was set, false if an invalid argument was specified.
 * @noSelf
 */
export declare function setAccountData(
    theAccount: Account,
    key: string,
    value: unknown
): boolean;

/**
 * This function sets the name of an account.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetAccountName Wiki, setAccountName }
 * @param theAccount The account you wish to change the name.
 * @param name The new name.
 * @param allowCaseVariations Whether the username is case sensitive (if this is set to true, usernames Bob and bob
 * will refer to different accounts)
 * @return returns a true if the account name was set, false if an invalid argument was specified.
 * @noSelf
 */
export declare function setAccountName(
    theAccount: Account,
    name: string,
    allowCaseVariations?: boolean
): boolean;

/**
 * This function sets the password of the specified account.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetAccountPassword Wiki, setAccountPassword }
 * @param theAccount the account whose password you want to set
 * @param password the password
 * @return returns true if the password was set correctly, false otherwise.
 * @noSelf
 */
export declare function setAccountPassword(
    theAccount: Account,
    password: string
): boolean;
