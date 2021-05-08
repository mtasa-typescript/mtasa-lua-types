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
    Object as MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction
} from '../structure';

/**
 * Aborts a FetchRemote|fetchRemote or CallRemote|callRemote request.
 * @see {@link https://wiki.multitheftauto.com/wiki/AbortRemoteRequest Wiki, abortRemoteRequest }
 * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or
 * GetRemoteRequests|getRemoteRequests
 * @return returns true on success, false when invalid request was provided
 */
export function abortRemoteRequest(
    theRequest: Request
): boolean;

/**
 * This function adds a new empty config file to an existing resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/AddResourceConfig Wiki, addResourceConfig }
 * @param filePath The filepath of the file to be created in the following format: :resourceName/path.
 * resourceName is the name of the resource the file is in, and path is the path from the
 * root directory of the resource to the file.
 * :For example, if you want to create a config named 'settings.xml' in the resource 'ctf',
 * it can be created from another resource this way:
 * ''addResourceConfig(":ctf/settings.xml", "server")''.
 * :If you want to create the file in the current resource, only the file path is necessary,
 * e.g. ''addResourceConfig("settings.xml", "server")''.
 * @param filetype a string indicating whether the file is serverside (server) or clientside (client).
 * @return returns the new configs root xmlnode if the config was added successfully, false
 * otherwise.
 */
export function addResourceConfig(
    filePath: string,
    filetype?: string
): XmlNode;

/**
 * This function adds a new empty mapfile to an existing resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/AddResourceMap Wiki, addResourceMap }
 * @param filePath The filepath of the resource map in the following format: :resourceName/path.
 * resourceName is the name of the resource the map file will be in, and path is the path
 * from the root directory of the resource to the file.
 * :For example, if you want to create a map file named 'manycars.map' in the resource
 * 'cdm', it can be created from another resource this way:
 * ''addResourceMap(":cdm/manycars.map")''.
 * :If you want to create the map file in the current resource, only the file path is
 * necessary, e.g. ''addResourceMap("manycars.map")''.
 * @param dimension the dimension in which the maps objects will be placed.
 * @return returns the new maps root xmlnode if the map was added successfully, false otherwise.
 */
export function addResourceMap(
    filePath: string,
    dimension?: number
): XmlNode;

/**
 * This function is used to call a function from another resource (which must be running).
 * The function which you wish to call must first be exported within the resources meta.
 * For example:
 * <syntaxhighlight lang=xml><meta>
 * <info author=jbeta type=script description=Scoreboard resource />
 * <script src=scoreboard_client.lua type=client/>
 * <script src=scoreboard_exports.lua type=server/>
 * <script src=scoreboard_http.lua type=server/>
 * <export function=getScoreboardColumns http=true />
 * <export function=getScoreboardRows http=true />
 * <export function=addScoreboardColumn type=server/>
 * <export function=removeScoreboardColumn type=server/>
 * <export function=setPlayerScoreboardForced type=server/>
 * <export function=setScoreboardForced type=client/>
 * </meta></syntaxhighlight>
 * This enables other resources to call a function from this resource.
 * You cannot call a server function from the client or vice versa. See triggerServerEvent
 * and triggerClientEvent for possibilities to do that.
 * There is an easier syntax replacing this function. For example, you can instead of:<br>
 * <syntaxhighlight lang=lua>call ( getResourceFromName ( resource ), exportedFunction, 1,
 * 2, three )</syntaxhighlight>
 * do much like a normal call:<br>
 * <syntaxhighlight lang=lua>exports.resource:exportedFunction ( 1, 2, three
 * )</syntaxhighlight>
 * If the resource name contains illegal characters (such as hyphens), you can also do:<br>
 * <syntaxhighlight lang=lua>exportsresource-name:exportedFunction ( 1, 2, three
 * )</syntaxhighlight>
 * Two extra hidden variables are passed to the exported function:
 * * sourceResource - The resource that called the exported function
 * * sourceResourceRoot - The resource root element of the resource which called the
 * exported function.
 * @see {@link https://wiki.multitheftauto.com/wiki/Call Wiki, call }
 * @param theResource This is a resource pointer which refers to the resource you are calling a function from.
 * @param theFunction This is a string with the name of the function which you want to call.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of
 * arguments of can be specified, each being passed to the designated function.
 * @param resource_name Resource name
 * @param exportedFunction The name of the function you want to call. Its not a string.
 * @return returns anything that the designated function has returned, if the function has no
 * return, nil is returned. if the function does not exist, is not exported, or the call was
 * not successful it will return false.
 * returns anything that the designated function has returned, if the function has no
 * return, nil is returned. if the function does not exist, is not exported, or the call was
 * not successful it will return false.
 */
export function call(
    theResource: Resource,
    theFunction: string,
    ...varargs: any[]
): LuaMultiReturn<[
    ...any[]
]>;

/**
 * This function allows you to call functions that have been exported with HTTP access by
 * other MTA servers. The calls are asynchronous so you do not get an immediate result from
 * the call, instead a callback function you specify is called when the call returns.
 * You can also use this function to access a standard web page on a server you own by
 * specifying the URL. The arguments you specify to callRemote are passed to the web page
 * using HTTP POST as a JSON array. This will always have an array as the root element. The
 * page must return a JSON formated *array* in the pages body with the results of the call
 * (or an empty array if there are no results).
 * You can use the PHP SDK to create PHP pages that can be called by this function. See the
 * PHP SDK page for an example.
 * In addition, it is possible to use this function to get information about a resource in
 * the MTA community, besides other things. Check out the Community Resources article.
 * In the case when the call fails, a string containing ERROR followed by an integer
 * containing the error reason will be passed to the callback function. The reason for
 * failure will be similar to errors found with websites - file not found, server not found
 * and timeouts.
 * @see {@link https://wiki.multitheftauto.com/wiki/CallRemote Wiki, callRemote }
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param URL A full URL in the format <nowiki>http://hostname/path/file.ext</nowiki>. A port can be
 * specified with a colon followed by a port number appended to the hostname.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call.
 * The argument list should match the format of the data returned. The callback function
 * will be passed a string containing ERROR followed by an integer indicating the error code
 * when an error occurs calling the function. A list of error codes
 * Template:Error_codes_for_callRemote_and_fetchRemote |can be found here.
 * @param queueName Name of the queue to use. Any name can be used. If not set, the queue name is default.
 * Requests in the same queue are processed in order, one at a time.
 * @param connectionAttempts Number of times to retry if the remote host does not respond. In the case of a
 * non-responding remote server, each connection attempt will timeout after 6 seconds.
 * Therefore, the default setting of 10 connection attempts means it will be 60 seconds
 * before your script gets a callback about the error. Reducing this value to 2 for example,
 * will decrease that period to 12 seconds
 * @param connectTimeout Number of milliseconds each connection attempt will take before timing out
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of
 * arguments of can be specified, each being passed to the designated function. Most data
 * types can be passed, including tables. The only values that cannot be passed are userdata
 * values such as xmlnodes - elements and resources can be passed though may be
 * misinterpreted on other game servers (or cause warnings).
 * @return returns true if the function has been called, false otherwise.
 */
export function callRemote(
    host: string,
    queueName: string,
    connectionAttempts: number,
    connectTimeout: number,
    resourceName: string,
    functionName: string,
    callbackFunction: HandleFunction,
    ...varargs: any[]
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/CallRemote Wiki, callRemote }
 */
export function callRemote(
    host: string,
    resourceName: string,
    functionName: string,
    callbackFunction: HandleFunction,
    ...varargs: any[]
): boolean;

/**
 * This function copies a specified resource with a new name.
 * @see {@link https://wiki.multitheftauto.com/wiki/CopyResource Wiki, copyResource }
 * @param theResource the resource which is going to be copied
 * @param newResourceName the name that the copied resource will receive
 * @param organizationalDir : A string containing the path where the resource should be copied to (e.g.
 * gamemodes/amx).
 * @return returns the resource element of the copy. returns false if the arguments are incorrect.
 */
export function copyResource(
    theResource: Resource,
    newResourceName: string,
    organizationalDir?: string
): Resource;

/**
 * This function creates an new, empty resource. This creates a directory matching the name
 * you specify on disk, then creates an empty meta.xml file with a <meta> element in it.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateResource Wiki, createResource }
 * @param resourceName The name of the new resource. This should be a valid file name. Its recommended that you
 * do not have spaces or non-ASCII characters in resource names.
 * @param organizationalDir : A string containing the path where the resource should be created (e.g. gamemodes/amx).
 * @return returns the resource element of the new resource if successful, false otherwise. this
 * could fail if the resource name already is in use, if a directory already exists with the
 * name youve specified (but this isnt a valid resource) or if the name you specify isnt
 * valid. it could also fail if the disk was full or for other similar reasons.
 */
export function createResource(
    resourceName: string,
    organizationalDir?: string
): Resource;

/**
 * This function deletes a resource from the MTA memory and moves it to the
 * /resources-cache/trash/ directory.
 * @see {@link https://wiki.multitheftauto.com/wiki/DeleteResource Wiki, deleteResource }
 * @param resourceName The name of resource to delete.
 * @return returns true if the resource has been deleted successfully, false otherwise.
 */
export function deleteResource(
    resourceName: string
): boolean;

/**
 * This function allows you to post and receive data from HTTP servers. The calls are
 * asynchronous so you do not get an immediate result from the call, instead a callback
 * function you specify is called when the download completes.
 * In the case when the call fails, a string containing ERROR followed by an integer
 * containing the error reason will be passed to the callback function. The reason for
 * failure will be similar to errors found with websites - file not found, server not found
 * and timeouts.
 * If you are using fetchRemote to connect to a PHP script, you can use
 * file_get_contents(php://input) to read the postData sent from this function.
 * @see {@link https://wiki.multitheftauto.com/wiki/FetchRemote Wiki, fetchRemote }
 * @param URL A full URL in the format <nowiki>http://hostname/path/file.ext</nowiki>. A port can be
 * specified with a colon followed by a port number appended to the hostname.
 * @param callbackFunction This is the function that should receive the data returned from the remote server. The
 * callback argument list should be:
 * @param responseData - A string containing the remote response
 * @param error - A number containing the error number or zero if there was no error. A list of possible
 * error values are:
 * <div style="padding-left:19px;">
 * @param arguments... - The arguments that were passed into fetchRemote
 * @param queueName Name of the queue to use. Any name can be used. If not set, the queue name is default.
 * Requests in the same queue are processed in order, one at a time.
 * @param connectionAttempts Number of times to retry if the remote host does not respond. (Defaults to 10)
 * @param connectTimeout Number of milliseconds each connection attempt will take before timing out. (Defaults to
 * 10000)
 * @param postData A string specifying any data you want to send to the remote HTTP server.
 * @param postIsBinary A boolean specifying if the data is text, or binary. (Defaults to false)
 * @param arguments A table containing arguments you may want to pass to the callback.
 * @param responseInfo - A table containing:
 * @param success - A boolean indicating if the request was successful.
 * @param statusCode - An integer status/error code
 * @param headers A table containing HTTP request headers. e.g.{ Pragma&#61;no-cache }
 * @param options A table containing any request options:
 * @param method A string specifying the request method. (Defaults to GET or POST)
 * @param maxRedirects An integer limiting the number of HTTP redirections to automatically follow. (Defaults to
 * 8)
 * @param username A string specifying the username for protected pages.
 * @param password A string specifying the password for protected pages.
 * @param formFields A table containing form items to submit. (for POST method only)  e.g.{ name&#61;bob,
 * email&#61;bob@example.com }
 * @return returns a request value which can be used with getremoterequestinfo|getremoterequestinfo
 * or abortremoterequest|abortremoterequest
 */
export function fetchRemote(
    URL: string,
    queueName: string,
    connectionAttempts: number,
    connectTimeout: number,
    callbackFunction: HandleFunction,
    postData: string,
    postIsBinary: boolean,
    ...varargs: any[]
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/FetchRemote Wiki, fetchRemote }
 */
export function fetchRemote(
    URL: string,
    callbackFunction: HandleFunction,
    postData: string,
    postIsBinary: boolean,
    ...varargs: any[]
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/FetchRemote Wiki, fetchRemote }
 */
export function fetchRemote(
    URL: string,
    queueName: string,
    connectionAttempts: number,
    connectTimeout: number,
    callbackFunction: HandleFunction,
    ...varargs: any[]
): boolean;

/**
 * Gets informations of an FetchRemote|fetchRemote or CallRemote|callRemote request info.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetRemoteRequestInfo Wiki, getRemoteRequestInfo }
 * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or
 * GetRemoteRequests|getRemoteRequests
 * @return returns a table when valid, false otherwise
 * the table contains:
 * *bytesreceived: a number specifying the amount of data received so far. zero means the
 * download is queued
 * *bytestotal: a number specifying the final download size. will be zero if the remote http
 * server has not set the content-length header
 * *currentattempt: a number specifying the current connection attempt
 * *type: a string specifying either fetch or call
 * *url: a string specifying the url
 * *resource: the resource which started the request, or false if the resource has since
 * been stopped/restarted
 * *queue: a string specifying the queue name
 * *method: a string specifying the http method. e.g. get or post
 * *connectionattempts: a number specifying max number connection attempts as declared in
 * the fetchremote call
 * *connectiontimeout: a number specifying connection attempt timeout as declared in the
 * fetchremote call
 * *postdata: a string containing the request post data as declared in the fetchremote call
 * *headers: a table containing the request http headers as declared in the fetchremote call
 */
export function getRemoteRequestInfo(
    theRequest: Request,
    postDataLength?: number,
    includeHeaders?: boolean
): LuaTable;

/**
 * Gets all FetchRemote|fetchRemote and CallRemote|callRemote requests currently running.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetRemoteRequests Wiki, getRemoteRequests }
 * @param theResource : the resource to get all requests from
 * @return returns a table with all requests, false if an invalid resource was provided
 */
export function getRemoteRequests(
    theResource?: Resource
): LuaTable;

/**
 * This function retrieves the ACL request section from the meta.xml file of the given
 * resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceACLRequests Wiki, getResourceACLRequests }
 * @param theResource the resource to get the ACL requests for.
 * @return returns a table with the acl requests for the given resource, or false if the resource is
 * not valid. a valid resource with no acl requests will return an empty table.
 */
export function getResourceACLRequests(
    theResource: Resource
): LuaTable;

/**
 * This function is used to return the root node of a configuration file. Config files must
 * be predefined in a resources Meta.xml|meta file.  An alternative way to load XML files is
 * to use xmlLoadFile.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceConfig Wiki, getResourceConfig }
 * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the
 * name of the resource the file is in, and path is the path from the root directory of the
 * resource to the file.
 * :For example, if there is a file named 'settings.xml' in the resource 'ctf', it can be
 * accessed from another resource this way: ''getResourceConfig(":ctf/settings.xml")''.
 * :If the file is in the current resource, only the file path is necessary, e.g.
 * ''getResourceConfig("settings.xml")''.
 * @return returns the root node of the specified configuration file. if the file is corrupted, not
 * defined in the meta file or doesnt exist, returns false.
 */
export function getResourceConfig(
    filePath: string
): XmlNode;

/**
 * This function retrieves the dynamic element root of a specified resource. The dynamic
 * element root is the parent of elements that are created by scripts (e.g. with
 * createObject) unless they specify a different parent.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceDynamicElementRoot Wiki, getResourceDynamicElementRoot }
 * @param theResource the resource of which dynamic element root we want.
 * @return returns an element of the resources dynamic element root if the resource specified was
 * valid and active (currently running), false otherwise.
 */
export function getResourceDynamicElementRoot(
    theResource: Resource
): Element;

/**
 * Returns a table containing the names of the functions that a resource exports. It will
 * return the exports of the current resource if there is no argument passed in.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceExportedFunctions Wiki, getResourceExportedFunctions }
 * @param theResource the resource of which you want to know the call|exported functions.
 * @return returns a table of function names if successful, false otherwise.
 */
export function getResourceExportedFunctions(
    theResource?: Resource
): LuaTable;

/**
 * This function is used to retrieve a resource from its name. A resources name is the same
 * as its folder or file archive name on the server (without the extension).
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceFromName Wiki, getResourceFromName }
 * @param resourceName the name of the resource you wish to get.
 * @return returns the resource with the specified name, or false if no resource of that name
 * exists. note that clientside this will also return false for resources that are in the
 * loaded state, since the client is unaware of resources that have not been started.
 */
export function getResourceFromName(
    resourceName: string
): Resource;

/**
 * This function retrieves the value of any attribute in a resource info tag.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceInfo Wiki, getResourceInfo }
 * @param theResource the resource we are getting the info from.
 * @param attribute the name of the attribute we want info about.
 * @return returns a string with the attribute value if it exists, false otherwise.
 */
export function getResourceInfo(
    theResource: Resource,
    attribute: string
): string;

/**
 * Used to check the last starting time and date of a resource
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceLastStartTime Wiki, getResourceLastStartTime }
 * @param theResource The resource of which youd like to check the last starting time.
 * @return if successful, returns the unix timestamp when the resource was last started, or the
 * string never if the resource has not been started yet, otherwise false. use in
 * conjunction with getrealtime in order to retrieve detailed information.
 * returns a string with the time and date, or false if the resource does not exist.
 */
export function getResourceLastStartTime(
    theResource: Resource
): number;

/**
 * This function retrieves the reason why a resource failed to start.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceLoadFailureReason Wiki, getResourceLoadFailureReason }
 * @param theResource The resource you wish to check.
 * @return if the resource failed to load, returns a string with the failure reason in it. if it
 * loaded successfully, returns an empty string. returns false if the resource doesnt exist.
 */
export function getResourceLoadFailureReason(
    theResource: Resource
): string;

/**
 * Gets the date and time at which a resource was last loaded in the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceLoadTime Wiki, getResourceLoadTime }
 * @param res the resource you want to know the load time of.
 * @return if successful, returns the unix timestamp when the resource was loaded, otherwise false.
 * use in conjunction with getrealtime in order to retrieve detailed information.
 * if successful, returns a string with the date and time that the resource was last loaded
 * into memory (for example when the server started, or when the resource was changed and
 * reloaded). returns false on failure.
 * an example string is fri mar 28 13:51:04 2008.
 */
export function getResourceLoadTime(
    res: Resource
): number;

/**
 * This function retrieves the root element of a certain map in a specified resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceMapRootElement Wiki, getResourceMapRootElement }
 * @param theResource the resource where the map is located
 * @param mapName name of the maps which root element we want to retrieve, file extension is required
 * @return returns an the resources map root element if the map exists and resource specified was
 * valid and active (currently running), false otherwise.
 */
export function getResourceMapRootElement(
    theResource: Resource,
    mapName: string
): Element;

/**
 * This function gets the name of the specified resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceName Wiki, getResourceName }
 * @param res The resource you wish to get the name of.
 * @return returns a string with the resource name in it, or false if the resource does not exist.
 */
export function getResourceName(
    res: Resource
): string;

/**
 * This function returns the organizational file path (e.g. admin) of a resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceOrganizationalPath Wiki, getResourceOrganizationalPath }
 * @param theResource the resource of which you want to know the organizational path
 * @return returns the organizational folder name of the resource. it returns empty string if the
 * resource is on root resources folder. it returns false if the resource could not be found.
 */
export function getResourceOrganizationalPath(
    theResource: Resource
): string;

/**
 * This function retrieves a resources root element. The resources root element is the
 * element in the element tree which is the parent of all elements that belong to a
 * particular resource (except for elements specifically created elsewhere). You can attach
 * event handlers to this element to easily capture events that originate from your resource
 * (and global events that originate from the root element).
 * Note: every resource has a Predefined_variables_list|predefined global variable called
 * resourceRoot whose value is the root element of that resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceRootElement Wiki, getResourceRootElement }
 * @param theResource the resource whose root element we are getting. If not specified, assumes the current
 * resource. (the resource returned from getThisResource)
 * @return returns an element representing the resources root, false if the specified resource
 * doesnt exist.
 */
export function getResourceRootElement(
    theResource?: Resource
): Element;

/**
 * This function retrieves a table of all the resources that exist on the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResources Wiki, getResources }
 * @return returns a table of resources.
 */
export function getResources(): LuaTable;

/**
 * This function returns the state of a given resource
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceState Wiki, getResourceState }
 * @param theResource The resource you wish to get the state of.
 * @return if successful returns a string with the resource state in it, false otherwise.
 * the state can be one of:
 * *loaded
 * *running
 * *starting
 * *stopping
 * *failed to load - use getresourceloadfailurereason to find out why it failed.
 */
export function getResourceState(
    theResource: Resource
): string;

/**
 * This function retrieves the resource from which the function call was made.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetThisResource Wiki, getThisResource }
 * @return returns the resource in which the current script is.
 */
export function getThisResource(): Resource;

/**
 * Checks whether a resource is currently archived (running from within a ZIP file).
 * @see {@link https://wiki.multitheftauto.com/wiki/IsResourceArchived Wiki, isResourceArchived }
 * @param resource the resource to check
 * @return returns true if a resource is archived, false if it is not archived, or nil if there is
 * problem with resource.
 */
export function isResourceArchived(
    resourceElement: Resource
): boolean;

/**
 * This will check if a resource is currently protected, as defined in
 * Server_mtaserver.conf#resource|mtaserver.conf.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsResourceProtected Wiki, isResourceProtected }
 * @param theResource the resource to check
 * @return returns true if the resource is protected, false otherwise.
 */
export function isResourceProtected(
    theResource: Resource
): boolean;

/**
 * This function finds new resources and checks for changes to the current ones.
 * @see {@link https://wiki.multitheftauto.com/wiki/RefreshResources Wiki, refreshResources }
 * @param refreshAll : If true MTA will check for changes in all resources. If false, MTA will only check for
 * new resources and try to reload resources with errors
 * @param targetResource : If set, the refresh is restricted to the supplied resource only
 * '''Note:''' Checking for changes in all resources can result in lag for a short period of
 * time. It should generally be avoided to set refreshAll to ''true''.
 * @return returns true if refresh was successful, false otherwise.
 */
export function refreshResources(
    refreshAll?: boolean,
    targetResource?: Resource
): boolean;

/**
 * This function removes a file from the resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/RemoveResourceFile Wiki, removeResourceFile }
 * @param theResource The resource element.
 * @param fileName The filename what you want to delete.
 * @return returns true if file was deleted, otherwise false if the resource is in use or the file
 * doesnt exist.
 */
export function removeResourceFile(
    theResource: Resource,
    fileName: string
): boolean;

/**
 * This function renames a resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/RenameResource Wiki, renameResource }
 * @param theResource The name of resource or the resource you want to rename.
 * @param newResourceName The name of what the resource should be renamed to.
 * @param organizationalPath If you want to store the new resource inside a category.
 * @return returns true if the resource has been renamed successfully, false otherwise. this could
 * fail if the resource name already is in use, if a directory already exists with the name
 * youve specified (but this isnt a valid resource) or if the name you specify isnt valid.
 * it could also fail if the disk was full or for other similar reasons. wont work on a
 * started resource or if the resource is not loaded (not known by mta (use /refresh))
 */
export function renameResource(
    theResource: string | Resource,
    newResourceName: string,
    organizationalPath?: string
): boolean;

/**
 * This function restarts a running resource. Restarting will destroy all the elements that
 * the resource has created (as stopping the resource does).
 * *Dont forget to give admin rights to the resource, in which you are using restartResource
 * function or it wont work.
 * *This function does not restart the resource immediately. Restarts are queued up until
 * the end of the servers frame to ensure that they occur in the correct order (and that
 * dependent resources can start and stop correctly). The resource being restarted will have
 * an onResourceStop event triggered and the restarted instance will receive an
 * onResourceStart event. Remember that the element and resource variables will be
 * invalidated during the restart, though of course, the resources name will not.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/RestartResource Wiki, restartResource }
 * @param theResource the resource you want to restart.
 * @param persistent Unused
 * @param configs Reload configs?
 * @param maps Reload maps?
 * @param scripts Reload (server) scripts?
 * @param html Reload html files (for resource web access)?
 * @param clientConfigs Reload client configs?
 * @param clientScripts Reload client scripts?
 * @param clientFiles Reload files?
 * @return returns true if the resource was restarted, false if the resource wasnt running, or an
 * invalid resource was passed.
 */
export function restartResource(
    theResource: Resource,
    persistent?: boolean,
    configs?: boolean,
    maps?: boolean,
    scripts?: boolean,
    html?: boolean,
    clientConfigs?: boolean,
    clientScripts?: boolean,
    clientFiles?: boolean
): boolean;

/**
 * This function sets the value of any attribute in a resource info tag.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetResourceInfo Wiki, setResourceInfo }
 * @param theResource the resource we are setting info to.
 * @param attribute the name of the attribute that is to be set.
 * @param value the value of this attribute
 * @return returns true if the info was successfully set, false otherwise
 */
export function setResourceInfo(
    theResource: Resource,
    attribute: string,
    value: string
): boolean;

/**
 * This function starts a resource either persistently or as a dependency of the current
 * resource. If you start the resource persistently, the resource will run until stopped
 * either using stopResource or by the server admin. A resource started as a dependency will
 * stop when your resource stops, if no other resources have it as a depdendency. This is
 * the same effect as using an include in your meta.xml file.
 * The function also allows you to specify a number of boolean options. These allow you to
 * disable the loading of various aspects of the resource. This is generally useful for
 * editors rather than for actual gamemodes. It could also be used as a way to preview a
 * resource before enabling the scripting aspects, though this could produce unreliable
 * results. There is no way for a resource to tell if it is being run with any of these
 * booleans set.
 * @see {@link https://wiki.multitheftauto.com/wiki/StartResource Wiki, startResource }
 * @param resourceToStart The resource that should be started.
 * @param persistent A boolean specifying if the resource should continue to run even after the current
 * resource has been stopped or not. If this is true then the resource will run until
 * another resource or user terminates it or the server shuts down. If this is false then
 * resourceToStart will stop when thisResource stops.
 * @param startIncludedResources A boolean specifying if the resources included/dependant resources will be started.
 * @param loadServerConfigs A boolean specifying if server side config (XML) files should be loaded with the resource.
 * @param loadMaps A boolean specifying if any .map files will be started with the resource.
 * @param loadServerScripts A boolean specifying if server side script files should be started alongside the resource.
 * @param loadHTML A boolean specifying if HTML files should be started alongside the resource.
 * @param loadClientConfigs A boolean specifying if client configs should be loaded alongside the resource.
 * @param loadClientScripts A boolean specifying if client scripts should be loaded and started alongside the
 * resource.
 * @param loadFiles A boolean specifying if client-side files should be loaded alongside the resource.
 * @return returns true if the resource has been started successfully, false otherwise.
 */
export function startResource(
    resourceToStart: Resource,
    persistent?: boolean,
    startIncludedResources?: boolean,
    loadServerConfigs?: boolean,
    loadMaps?: boolean,
    loadServerScripts?: boolean,
    loadHTML?: boolean,
    loadClientConfigs?: boolean,
    loadClientScripts?: boolean,
    loadFiles?: boolean
): boolean;

/**
 * This function stops a running resource.<br>
 * @see {@link https://wiki.multitheftauto.com/wiki/StopResource Wiki, stopResource }
 * @param theResource the resource that should be stopped.
 * @return returns true if the resource was stopped, false if the stopping failed, or an invalid
 * resource was passed.
 */
export function stopResource(
    theResource: Resource
): boolean;

/**
 * This function changes the access for one ACL request of the given resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/UpdateResourceACLRequest Wiki, updateResourceACLRequest }
 * @param theResource the resource to set the ACL request for.
 * @param rightName a string with the name of the right to set the access for. This has to match an existing
 * ACL request.
 * @param access a boolean value setting the access. True is for allow, and false for deny.
 * @param byWho a string value to identity who is changing the setting.
 * @return returns true if the setting was changed, or false if no change was required or there was
 * a problem with the arguments.
 */
export function updateResourceACLRequest(
    theResource: Resource,
    rightName: string,
    access: boolean,
    byWho?: string
): boolean;
