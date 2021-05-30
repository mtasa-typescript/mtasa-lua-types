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

/** @customConstructor QueryHandle */
export class QueryHandle {
    /**
     * This function frees a database query handle. dbFree only needs to be used if a result has
     * not been obtained with dbPoll
     * @see {@link https://wiki.multitheftauto.com/wiki/DbFree Wiki, dbFree }
     * @return returns true if the handle was successfully freed, false otherwise.
     */
    free(): boolean;

    /**
     * This function checks the progress of a database query.
     * @see {@link https://wiki.multitheftauto.com/wiki/DbPoll Wiki, dbPoll }
     * @param timeout How many milliseconds to wait for a result. Use 0 for an instant response (which may
     * return nil). Use -1 to wait until a result is ready. Note: A wait here will freeze the
     * entire server just like executeSQLQuery
     * @param multipleResults Set to true to enable the return values from multiple queries
     * |7972}}
     * @return *nil: returns nil if the query results are not yet ready. you should try again in a
     * little while. (if you give up waiting for a result, be sure to call dbfree)
     * *false: returns false if the query string contained an error, the connection has been
     * lost or the query handle is incorrect. this automatically frees the query handle, so you
     * do not have to call dbfree.
     * ** this also returns two extra values: (see the example on how the retrieve them)
     * ***int: error code
     * ***string error message
     * *table: returns a table with the result of the query when the query has successfully
     * completed. this automatically frees the query handle, so you do not have to call dbfree.
     * if multipleresults is set to true, it will first return a table pertaining to one query,
     * followed by the results for that query and so on for the next queries.
     * ** this also returns extra values (only when multipleresults is set to true):
     * ***int: number of affected rows
     * ***int: last insert id
     * the table is of the format:
     * <syntaxhighlight lang=lua>
     * {
     * { colname1=value1, colname2=value2, ... },
     * { colname1=value3, colname2=value4, ... },
     * ...
     * }
     * </syntaxhighlight>
     * a subsequent table represents the next row.
     */
    poll(
        timeout: number,
        multipleResults?: boolean
    ): LuaTable;
}
