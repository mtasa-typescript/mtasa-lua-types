/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Account, Player, Table } from '../structure';

/**
 * This function adds an account to the list of registered accounts of the current server.
 * @see {@link https://wiki.multitheftauto.com/wiki/addAccount|MTASA Wiki}
 * @param name The name of the account you wish to make, this normally is the players name.
 * @param pass The password to set for this account for future logins.
 * @param allowCaseVariations Whether the username is case sensitive (if this is set to true,
 * usernames Bob and bob will refer to different accounts)
 * @default false
 * @return Returns an [[account]] or ''false'' if the account already exists or an error occured.
 */
export function addAccount(name: string, pass: string, allowCaseVariations?: boolean): Account;

/**
 * This function copies all of the data from one [[account]] to another.
 * @see {@link https://wiki.multitheftauto.com/wiki/copyAccountData|MTASA Wiki}
 * @param theAccount The account you wish to copy the data to.
 * @param fromAccount The account you wish to copy the data from.
 * @return Returns a ''true'' if the accounts were valid, ''false'' otherwise.
 */
export function copyAccountData(theAccount: Account, fromAccount: Account): boolean;

/**
 * This function returns an [[account]] for a specific user.
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccount|MTASA Wiki}
 * @param username The username of the account you want to retrieve  {{OptionalArg}}
 * @param password The password for the account. If this argument is not specified, you can get the
 * account whatever password it is, otherwise the password must match the accounts.  {{New
 * items|3.0157|1.5.6|
 * @param caseSensitive : Specifies whether to ignore the case when searching for an account.
 * |16257}}
 * @default true
 * @return Returns an [[account]] or ''false'' if an account matching the username specified (and
 * password, if specified) could not be found.
 */
export function getAccount(username: string, password?: string, caseSensitive?: boolean): Account;

/**
 * This function retrieves a string that has been stored using [[setAccountData]]. Data stored as
 * account data is persistent across user's sessions and maps, unless they are logged into a guest
 * account.
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountData|MTASA Wiki}
 * @param theAccount The account you wish to retrieve the data from.
 * @param key The key under which the data is stored
 * @return Returns a [[string]] containing the stored data or ''false'' if no data was stored under
 * that key.
 */
export function getAccountData(theAccount: Account, key: string): string;

/**
 * This function retrieves the name of an [[account]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountName|MTASA Wiki}
 * @param theAccount The account you wish to get the name of.
 * @return Returns a string containing the account's name, ''false'' if the account does not exist
 * or an invalid argument was passed to the function.
 */
export function getAccountName(theAccount: Account): string;

/**
 * This function returns the [[player]] element that is currently using a specified [[account]],
 * i.e. is logged into it. Only one player can use an account at a time.
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountPlayer|MTASA Wiki}
 * @param theAccount The account you wish to get the player of.
 * @return Returns a [[player]] element if the account is currently in use, ''false'' otherwise.
 */
export function getAccountPlayer(theAccount: Account): Player;

/**
 * This function returns the last [[serial]] that logged onto the specified [[account]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountSerial|MTASA Wiki}
 * @param theAccount The account to get serial from
 * @return Returns ''string'' containing the serial, the string is empty if the account was never
 * used. Returns ''false'' if invalid arguments were specified.
 */
export function getAccountSerial(theAccount: Account): string;

/**
 * This function returns a table over all the [[account]]s that exist in the server internal.db
 * file. (Note: accounts.xml is no longer used after version 1.0.4)
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccounts|MTASA Wiki}
 * @return A [[table]] over the accounts that exist in the server internal.db file. This table
 * might be empty.
 */
export function getAccounts(): Table;

/**
 * This function returns a [[table]] containing all accounts that were logged onto from specified
 * [[serial]]. If the serial is empty string, it will return all accounts that were never logged onto.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountsBySerial|MTASA Wiki}
 * @param serial The serial to get accounts from
 * @return Returns ''[[table]]'' containing the accounts associated with specified serial. Returns
 * ''false'' if invalid arguments were specified.
 */
export function getAccountsBySerial(serial: string): Table;

/**
 * This function returns a table containing all the user data for the [[account]] provided
 * @see {@link https://wiki.multitheftauto.com/wiki/getAllAccountData|MTASA Wiki}
 * @param theAccount The account you wish to retrieve all data from.
 * @return A [[table]] containing all the user data. This table might be empty.
 */
export function getAllAccountData(theAccount: Account): Table;

/**
 * This function returns the specified player's [[account]] object.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerAccount|MTASA Wiki}
 * @param thePlayer The player element you want to get the account of.
 * @return Returns the player's account object, or ''false'' if the player passed to the function
 * is invalid.
 */
export function getPlayerAccount(thePlayer: Player): Account;

/**
 * This function checks to see if an [[account]] is a guest account. A guest account is an account
 * automatically created for a user when they join the server and deleted when they quit or login to
 * another account. Data stored in a guest account is not stored after the player has left the server. As
 * a consequence, this function will check if a player is logged in or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isGuestAccount|MTASA Wiki}
 * @param theAccount The account you want to check to see if it is a guest account.
 * @return Returns ''true'' if the account is a guest account, ''false'' otherwise.
 */
export function isGuestAccount(theAccount: Account): boolean;

/**
 * This functions logs the given player in to the given [[account]]. You need to provide the
 * password needed to log into that account.
 * @see {@link https://wiki.multitheftauto.com/wiki/logIn|MTASA Wiki}
 * @param thePlayer The player to log into an account
 * @param theAccount The account to log the player into
 * @param thePassword The password needed to sign into this account
 * @return Returns ''true'' if the player was successfully logged into the given account. Returns
 * ''false'' or ''nil'' if the log in failed for some reason, ie. the player was already logged in to
 * some account (use [[logOut]] first), if the account was already in use or if it failed for some other
 * reason.
 */
export function logIn(thePlayer: Player, theAccount: Account, thePassword: string): boolean;

/**
 * This function logs the given player out of his current [[account]].
 * @see {@link https://wiki.multitheftauto.com/wiki/logOut|MTASA Wiki}
 * @param thePlayer The player to log out of his current account
 * @return Returns ''true'' if the player was successfully logged out, ''false'' or ''nil'' if it
 * failed for some reason, ie. the player was never logged in.
 */
export function logOut(thePlayer: Player): boolean;

/**
 * This function is used to delete existing player [[account]]s.
 * @see {@link https://wiki.multitheftauto.com/wiki/removeAccount|MTASA Wiki}
 * @param theAccount The account you wish to remove
 * @return Returns ''true'' if account was successfully removed, ''false'' if the account does not
 * exist.
 */
export function removeAccount(theAccount: Account): boolean;

/**
 * This function sets a string to be stored in an [[account]]. This can then be retrieved using
 * [[getAccountData]]. Data stored as account data is persistent across user's sessions and maps, unless
 * they are logged into a guest account. Even if logged into a guest account, account data can be useful
 * as a way to store a reference to your own account system, though it's persistence is equivalent to
 * that of using [[setElementData]] on the player's element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setAccountData|MTASA Wiki}
 * @param theAccount The account you wish to retrieve the data from.
 * @param key The key under which you wish to store the data
 * @param value The value you wish to store. Set to false to remove the data. NOTE: you cannot
 * store tables as values, but you can use toJSON strings.
 * @return Returns a ''true'' if the account data was set, ''false'' if an invalid argument was
 * specified.
 */
export function setAccountData(theAccount: Account, key: string, value: any): boolean;

/**
 * This function sets the password of the specified [[account]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setAccountPassword|MTASA Wiki}
 * @param theAccount the account whose password you want to set
 * @param password the password  {{Note|The password will always be encrypted with '''sha256''',
 * other types are no longer supported. See
 * [https://github.com/multitheftauto/mtasa-blue/wiki/CAccountPassword CAccountPassword] for more information.}}
 * @return Returns ''true'' if the password was set correctly, ''false'' otherwise.
 */
export function setAccountPassword(theAccount: Account, password: string): boolean;

/**
 * This function returns the account with the specific ID.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountByID|MTASA Wiki}
 * @param id The ID to get account from
 * @return Returns ''[[account]]'' associated with specified ID. Returns ''false'' if invalid
 * arguments were specified or there is no account with this ID.
 */
export function getAccountByID(id: number): Account;

/**
 * This function retrieves the ID of an [[account]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountID|MTASA Wiki}
 * @param theAccount The account you wish to get the ID of.
 * @return Returns a int containing the account's ID, ''false'' if the account does not exist or an
 * invalid argument was passed to the function.
 */
export function getAccountID(theAccount: Account): number;

/**
 * This function retrieves the IP address of an [[account]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountIP|MTASA Wiki}
 * @param theAccount The account you wish to get the IP of.
 * @return Returns a string containing the account's IP, ''false'' if the account does not exist or
 * an invalid argument was passed to the function.
 */
export function getAccountIP(theAccount: Account): string;

/**
 * This function returns a [[table]] containing all accounts with specified dataName and value (set
 * with setAccountData).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountsByData|MTASA Wiki}
 * @param dataName The name of the data
 * @param value The value the dataName should have
 * @return Returns ''[[table]]'' containing the accounts associated with specified value at
 * dataName. Returns ''false'' if invalid arguments were specified.
 */
export function getAccountsByData(dataName: string, value: string): Table;

/**
 * This function returns a [[table]] containing all accounts that were logged onto from specified
 * IP-address.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getAccountsByIP|MTASA Wiki}
 * @param ip The IP to get accounts from
 * @return Returns ''[[table]]'' containing the accounts associated with specified IP-address.
 * Returns ''false'' if invalid arguments were specified.
 */
export function getAccountsByIP(ip: string): Table;

/**
 * This function sets the name of an [[account]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setAccountName|MTASA Wiki}
 * @param theAccount The account you wish to change the name.
 * @param name The new name.
 * @param allowCaseVariations Whether the username is case sensitive (if this is set to true,
 * usernames Bob and bob will refer to different accounts)
 * @default false
 * @return Returns a ''true'' if the account name was set, ''false'' if an invalid argument was
 * specified.
 */
export function setAccountName(theAccount: Account, name: string, allowCaseVariations?: boolean): boolean;
