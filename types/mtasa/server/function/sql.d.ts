/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, HandleFunction, Table } from '../structure';

/**
 * This function executes an arbitrary SQL query and returns the result rows if there are any. It
 * allows parameter binding for security (SQL injection is rendered impossible).
 * @see {@link https://wiki.multitheftauto.com/wiki/executeSQLQuery|MTASA Wiki}
 * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?.
 * @return Returns a table with the result of the query if it was a SELECT query, or ''false'' if
 * otherwise. In case of a SELECT query the result table may be empty (if there are no result rows). The
 * table is of the form:
 * * <syntaxhighlight lang="lua">
 * * {
 * *     { colname1=value1, colname2=value2, ... },
 * *     { colname1=value3, colname2=value4, ... },
 * *     ...
 * * }
 * * </syntaxhighlight>
 * * A subsequent table represents the next row.
 */
export function executeSQLQuery(query: string, param1?: any, ...args: any[]): Table;

/**
 * This function opens a connection to a database and returns an element that can be used with
 * [[dbQuery]]. To disconnect use [[destroyElement]].
 * @see {@link https://wiki.multitheftauto.com/wiki/dbConnect|MTASA Wiki}
 * @param databaseType The type of database. This can be either sqlite or mysql
 * @param host : Host address e.g. host=127.0.0.1
 * @param username Usually required for MySQL, ignored by SQLite
 * @default ""
 * @param password Usually required for MySQL, ignored by SQLite
 * @default ""
 * @return Returns a database connection element unless there are problems, in which case it return
 * ''false''.
 */
export function dbConnect(
    databaseType: string,
    host: string,
    username?: string,
    password?: string,
    options?: string,
): Element;

/**
 * This function executes a database query using the supplied connection. No result is returned.
 * @see {@link https://wiki.multitheftauto.com/wiki/dbExec|MTASA Wiki}
 * @param databaseConnection A database connection element previously returned from dbConnect
 * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
 * @return Returns ''true'' unless the connection is incorrect, in which case it returns ''false''.
 */
export function dbExec(databaseConnection: Element, query: string, param1?: any, ...args: any[]): boolean;

/**
 * This function frees a database query handle. dbFree only needs to be used if a result has not
 * been obtained with [[dbPoll]]
 * @see {@link https://wiki.multitheftauto.com/wiki/dbFree|MTASA Wiki}
 * @param queryHandle A query handle previously returned from dbQuery
 * @return Returns ''true'' if the handle was successfully freed, ''false'' otherwise.
 */
export function dbFree(queryHandle: HandleFunction): boolean;

/**
 * This function checks the progress of a database query.
 * @see {@link https://wiki.multitheftauto.com/wiki/dbPoll|MTASA Wiki}
 * @param queryHandle A query handle previously returned from dbQuery
 * @param timeout How many milliseconds to wait for a result. Use 0 for an instant response (which
 * may return nil). Use -1 to wait until a result is ready. Note: A wait here will freeze the entire
 * server just like executeSQLQuery  {{Important Note|It is strongly recommended to use this function in
 * callback, as presented in "This example shows how to obtain data without server freeze."}}  {{New
 * items|3.0152|1.5.2|
 * @param multipleResults Set to true to enable the return values from multiple queries  |7972}}
 * @default false
 * @return *''nil:'' Returns nil if the query results are not yet ready. You should try again in a
 * little while. (If you give up waiting for a result, be sure to call [[dbFree]])
 * * *''false:'' Returns false if the query string contained an error, the connection has been lost
 * or the query handle is incorrect. This automatically frees the query handle, so you do not have to
 * call [[dbFree]].
 * * ** This also returns two extra values: (See the example on how the retrieve them)
 * * ***''int:'' error code
 * * ***''string'' error message
 * * *''table:'' Returns a table with the result of the query when the query has successfully
 * completed. This automatically frees the query handle, so you do not have to call [[dbFree]]. If
 * multipleResults is set to true, it will first return a table pertaining to one query, followed by the results
 * for that query and so on for the next queries.
 * * ** This also returns extra values (only when multipleResults is set to true):
 * * ***''int:'' number of affected rows
 * * ***''int:'' last insert id
 * * The table is of the format:
 * * <syntaxhighlight lang="lua">
 * * {
 * *     { colname1=value1, colname2=value2, ... },
 * *     { colname1=value3, colname2=value4, ... },
 * *     ...
 * * }
 * * </syntaxhighlight>
 * * A subsequent table represents the next row.
 * * {{Note|If a column contained a number it is returned as a number, this includes things which
 * were stored as string but are numbers such as "1" would be returned as 1.}}
 */
export function dbPoll(queryHandle: HandleFunction, timeout: number, multipleResults?: boolean): Table;

/**
 * This function escapes arguments in the same way as [[dbQuery]], except dbPrepareString returns
 * the query string instead of processing the query. This allows you to safely build complex query
 * strings from component parts and help prevent (one class of) SQL injection.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/dbPrepareString|MTASA Wiki}
 * @param databaseConnection A database connection element previously returned from dbConnect
 * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
 * @return Returns a prepare SQL query string, or ''false'' if an error occurred.
 */
export function dbPrepareString(databaseConnection: Element, query: string, param1?: any, ...args: any[]): string;

/**
 * This function starts a database query using the supplied connection. Use the returned query
 * handle with [[dbPoll]] to get the result, or [[dbFree]] if you don't want the result.
 * @see {@link https://wiki.multitheftauto.com/wiki/dbQuery|MTASA Wiki}
 * @param callbackFunction An optional function to be called when a result is ready. The function
 * will only be called if the result has not already been read with dbPoll. The function is called with
 * the query handle as the first argument.
 * @param callbackArguments An optional table containing extra arguments to be sent to the callback
 * function.
 * @param databaseConnection A database connection element previously returned from dbConnect
 * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
 * @return Returns a query handle unless the connection is incorrect, in which case it return
 * ''false''.
 */
export function dbQuery(
    callbackFunction: HandleFunction,
    callbackArguments: Table,
    databaseConnection: Element,
    query: string,
    param1?: any,
    ...args: any[]
): HandleFunction;
