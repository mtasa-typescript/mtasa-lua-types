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
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/** @customConstructor connection */
export class connection {
    /**
     * This function opens a connection to a database and returns an element that can be used
     * with dbQuery. To disconnect use destroyElement.
     * @see https://wiki.multitheftauto.com/wiki/DbConnect
     * @param databaseType The type of database. This can be either sqlite or mysql
     * @param host : Host address e.g. host=127.0.0.1
     * @param dbname : Name of the database to use e.g. dbname=test
     * @param port : Host port e.g. port=1234 (optional, defaults to standard MySQL port if not used)
     * @param unix_socket : Unix socket or named pipe to use (optional)
     * @param charset : Communicate with the server using a character which is different from the default e.g.
     * charset<nowiki>=</nowiki>utf8 (optional)
     * @param username Usually required for MySQL, ignored by SQLite
     * @param password Usually required for MySQL, ignored by SQLite
     * @param options List of key=value pairs separated by semicolons. Supported keys are:
     * @param share which can be set to 0 or 1. (Default value for SQLite is share=1, for MySQL is share=0).
     * When set to 1, the connection is shared and will be used by other calls to dbConnect with
     * the same host string. This is usually a good thing for SQLite connections, but not so
     * good for MySQL unless care is taken.
     * @param batch which can be set to 0 or 1. (Default is batch=1). When set to 1, queries called in the
     * same frame are automatically batched together which can significantly speed up
     * inserts/updates. The downside is you lose control of the feature that is used to achieve
     * batching (For SQLite it is transactions, for MySQL it is autocommit mode). Therefore, if
     * you use transactions, lock tables or control autocommit yourself, you may want to disable
     * this feature.
     * @param autoreconnect which can be set to 0 or 1. (Default value autoreconnect=1). When set to 1, dropped
     * connections will automatically be reconnected. Note that session variables (incl. SET
     * NAMES), user variables, table locks and temporary tables will be reset because of the
     * reconnection. So if you use these fancy features, you will need to turn autoreconnect off
     * and cope with dropped connections some other way.
     * @param log which can be set to 0 or 1. (Default value log<nowiki>=</nowiki>1). When set to 0,
     * activity from this connection will not be recorded in the
     * Server_Commands#debugdb|database debug log file.
     * @param tag (Default value tag<nowiki>=</nowiki>script). A string which helps identify activity from
     * this connection in the Server_Commands#debugdb|database debug log file.
     * @param suppress A comma separated list of error codes to ignore. (eg.
     * suppress<nowiki>=</nowiki>1062,1169).
     * @param multi_statements Enable multiple statements (separated by a semi-colon) in one query. Use dbPrepareString
     * when building a multiple statement query to reduce SQL injection risks.
     * @param queue Name of the queue to use. (Default value for SQLite is sqlite, for MySQL default is the
     * host string from the host argument). Asynchronous database queries in the same queue are
     * processed in order, one at a time. Any name can be used.
     * @return returns a database connection element unless there are problems, in which case it return
     * false.
     */
    constructor(
        databaseType: string,
        host: string,
        username?: string,
        password?: string,
        options?: string,
    );

    /**
     * This function executes a database query using the supplied connection. No query result is
     * returned.
     * @see https://wiki.multitheftauto.com/wiki/DbExec
     * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
     * @param paramX A variable number of parameters. These must be strings or numbers - it is important to
     * make sure they are of the correct type. Also, the number of parameters passed must be
     * equal to the number of ? characters in the query string.
     * String parameters are automatically quoted and escaped as required. (If you do not want a
     * string quoted, use '''??''') Make sure that numbers are in number format as a string
     * number is treated differently.
     * @return returns true unless the connection is incorrect, in which case it returns false.
     */
    exec(query: string, param1?: unknown, ...varargs: any[]): boolean;

    /**
     * This function escapes arguments in the same way as dbQuery, except dbPrepareString
     * returns the query string instead of processing the query. This allows you to safely build
     * complex query strings from component parts and help prevent (one class of) SQL
     * injection.}}
     * @see https://wiki.multitheftauto.com/wiki/DbPrepareString
     * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
     * @param paramX A variable number of parameters. These must be strings or numbers - it is important to
     * make sure they are of the correct type. Also, the number of parameters passed must be
     * equal to the number of ? characters in the query string.
     * String parameters are automatically quoted and escaped as required. (If you do not want a
     * string quoted, use '''??''')
     * @return returns a prepare sql query string, or false if an error occurred.
     */
    prepareString(query: string, param1?: unknown, ...varargs: any[]): string;

    /**
     * @see https://wiki.multitheftauto.com/wiki/DbQuery
     */
    query(
        databaseConnection: Element,
        query: string,
        param1?: unknown,
        ...varargs: any[]
    ): HandleFunction;

    /**
     * This function starts a database query using the supplied connection. Use the returned
     * query handle with dbPoll to get the result, or dbFree if you dont want the result.
     * @see https://wiki.multitheftauto.com/wiki/DbQuery
     * @param databaseConnection A database connection element previously returned from dbConnect
     * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
     * @param callbackFunction An optional function to be called when a result is ready. The function will only be
     * called if the result has not already been read with dbPoll. The function is called with
     * the query handle as the first argument.
     * @param callbackArguments An optional table containing extra arguments to be sent to the callback function.
     * @param paramX A variable number of parameters. These must be strings or numbers - it is important to
     * make sure they are of the correct type. Also, the number of parameters passed must be
     * equal to the number of ? characters in the query string.
     * String parameters are automatically quoted and escaped as required. (If you do not want a
     * string quoted, use '''??''')
     * @return returns a query handle unless the connection is incorrect, in which case it return false.
     */
    query(
        callbackFunction: HandleFunction,
        callbackArguments: LuaTable,
        databaseConnection: Element,
        query: string,
        param1?: unknown,
        ...varargs: any[]
    ): HandleFunction;
}
