// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    DxTexture,
    ObjectGroup,
    Matrix,
    Browser,
    Light,
    Effect,
    Searchlight,
    Weapon,
    GuiBrowser,
    GuiMemo,
    GuiElement,
    GuiEdit,
    GuiScrollBar,
    GuiWindow,
    Projectile,
    Material,
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
    FetchRemoteCallback,
    GenericEventHandler
} from '../structure';

/**
 * Aborts a FetchRemote|fetchRemote or CallRemote|callRemote request.
 * @see {@link https://wiki.multitheftauto.com/wiki/AbortRemoteRequest Wiki, abortRemoteRequest }
 * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or
 * GetRemoteRequests|getRemoteRequests
 * @return returns true on success, false when invalid request was provided
 * @noSelf
 */
export declare function abortRemoteRequest(
    theRequest: Request
): boolean;

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
 * @noSelf
 */
export declare function call(
    theResource: Resource,
    theFunction: string,
    ...varargs: any[]
): LuaMultiReturn<[
    ...any[]
]>;

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
 * @noSelf
 */
export declare function fetchRemote(
    URL: string,
    queueName: string,
    connectionAttempts: number,
    connectTimeout: number,
    callbackFunction: FetchRemoteCallback,
    postData?: string,
    postIsBinary?: boolean,
    ...varargs: any[]
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/FetchRemote Wiki, fetchRemote }
 * @noSelf
 */
export declare function fetchRemote(
    URL: string,
    callbackFunction: FetchRemoteCallback,
    postData?: string,
    postIsBinary?: boolean,
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
 * @noSelf
 */
export declare function getRemoteRequestInfo(
    theRequest: Request,
    postDataLength?: number,
    includeHeaders?: boolean
): LuaTable;

/**
 * Gets all FetchRemote|fetchRemote and CallRemote|callRemote requests currently running.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetRemoteRequests Wiki, getRemoteRequests }
 * @param theResource : the resource to get all requests from
 * @return returns a table with all requests, false if an invalid resource was provided
 * @noSelf
 */
export declare function getRemoteRequests(
    theResource?: Resource
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
 * @noSelf
 */
export declare function getResourceConfig(
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
 * @noSelf
 */
export declare function getResourceDynamicElementRoot(
    theResource: Resource
): Element;

/**
 * Returns a table containing the names of the functions that a resource exports. It will
 * return the exports of the current resource if there is no argument passed in.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceExportedFunctions Wiki, getResourceExportedFunctions }
 * @param theResource the resource of which you want to know the call|exported functions.
 * @return returns a table of function names if successful, false otherwise.
 * @noSelf
 */
export declare function getResourceExportedFunctions(
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
 * @noSelf
 */
export declare function getResourceFromName(
    resourceName: string
): Resource;

/**
 * This function retrieves a resources GUI element. The resources GUI element is the element
 * in the element tree which is the default parent of all GUI elements that belong to a
 * particular resource. It has a predefined variable called guiRoot, and each resource has
 * one of these. You can attach event handlers to this element to easily capture events that
 * originate from your resource (and global events that originate from the root element).
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceGUIElement Wiki, getResourceGUIElement }
 * @param theResource the resource whose GUI element we are getting. If not specified, assumes the current
 * resource.
 * @return returns the root gui element that contains all the other gui elements.
 * @noSelf
 */
export declare function getResourceGUIElement(
    theResource?: Resource
): Element;

/**
 * This function gets the name of the specified resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceName Wiki, getResourceName }
 * @param res The resource you wish to get the name of.
 * @return returns a string with the resource name in it, or false if the resource does not exist.
 * @noSelf
 */
export declare function getResourceName(
    res: Resource
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
 * @noSelf
 */
export declare function getResourceRootElement(
    theResource?: Resource
): Element;

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
 * @noSelf
 */
export declare function getResourceState(
    theResource: Resource
): string;

/**
 * This function retrieves the resource from which the function call was made.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetThisResource Wiki, getThisResource }
 * @return returns the resource in which the current script is.
 * @noSelf
 */
export declare function getThisResource(): Resource;
