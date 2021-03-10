/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, HandleFunction, Request, Resource, XmlNode } from '../structure';

/**
 * This function retrieves a resource's GUI element. The resource's GUI element is the element in
 * the element tree which is the default parent of all GUI elements that belong to a particular
 * resource. It has a predefined variable called '''guiRoot''', and each resource has one of these. You can
 * attach event handlers to this element to easily capture events that originate from your resource (and
 * global events that originate from the root element).
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceGUIElement|MTASA Wiki}
 * @param theResource the resource whose GUI element we are getting. If not specified, assumes the
 * current resource.
 * @default getThisResource(
 * @return Returns the root GUI element that contains all the other GUI elements.
 */
export function getResourceGUIElement(theResource: Resource): Element;

/**
 * This function allows you to post and receive data from HTTP servers. The calls are asynchronous
 * so you do not get an immediate result from the call, instead a callback function you specify is
 * called when the download completes.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing
 * the error reason will be passed to the callback function. The reason for failure will be similar to
 * errors found with websites - file not found, server not found and timeouts.
 * If you are using fetchRemote to connect to a PHP script, you can use
 * ''file_get_contents("php://input")'' to read the '''postData''' sent from this function.
 * @see {@link https://wiki.multitheftauto.com/wiki/fetchRemote|MTASA Wiki}
 * @param URL A full URL in the format <nowiki>http://hostname/path/file.ext</nowiki>. A port can
 * be specified with a colon followed by a port number appended to the hostname.
 * @param queueName Name of the queue to use. Any name can be used. If not set, the queue name is
 * default. Requests in the same queue are processed in order, one at a time.  }}
 * @default "default"
 * @param connectionAttempts Number of times to retry if the remote host does not respond. In the
 * case of a non-responding remote server, each connection attempt will timeout after 10 seconds.
 * Therefore, the default setting of 10 connection attempts means it will be 100 seconds before your script
 * gets a callback about the error. Reducing this value to 2 for example, will decrease that period to
 * 20 seconds
 * @default 10
 * @param connectTimeout Number of milliseconds each connection attempt will take before timing out
 * @default 10000
 * @param callbackFunction This is the function that should receive the data returned from the
 * remote server. The callback argument list should be:
 * @param postData A string specifying any data you want to send to the remote HTTP server.
 * @default ""
 * @return {{New items|5.0154|1.5.7-9.20307|
 * * Returns a '''''request''''' value which can be used with
 * [[GetRemoteRequestInfo|getRemoteRequestInfo]] or [[AbortRemoteRequest|abortRemoteRequest]]
 * * }}
 */
export function fetchRemote(
    URL: string,
    queueName: string,
    connectionAttempts: number,
    connectTimeout: number,
    callbackFunction: HandleFunction,
    postData: string,
    postIsBinary: boolean,
    ...args: any[]
): boolean;

/**
 * This function is used to return the root node of a configuration file. Config files must be
 * predefined in a resource's [[Meta.xml|meta file]].  An alternative way to load XML files is to use
 * [[xmlLoadFile]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceConfig|MTASA Wiki}
 * @param filePath The filepath of the file in the following format: :resourceName/path.
 * resourceName is the name of the resource the file is in, and path is the path from the root directory of the
 * resource to the file.  :For example, if there is a file named 'settings.xml' in the resource 'ctf',
 * it can be accessed from another resource this way: ''getResourceConfig(":ctf/settings.xml")''.  :If
 * the file is in the current resource, only the file path is necessary, e.g.
 * ''getResourceConfig("settings.xml")''.
 * @return Returns the root node of the specified configuration file. If the file is corrupted, not
 * defined in the meta file or doesn't exist, returns false.
 */
export function getResourceConfig(filePath: string): XmlNode;

/**
 * This function retrieves the ''dynamic element root'' of a specified [[resource]]. The ''dynamic
 * element root'' is the parent of elements that are created by scripts (e.g. with [[createObject]])
 * unless they specify a different parent.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceDynamicElementRoot|MTASA Wiki}
 * @param theResource the resource of which dynamic element root we want.
 * {{OOP||[[resource]]:getDynamicElementRoot}}
 * @return Returns an [[element]] of the resource's dynamic element root if the resource specified
 * was valid and active (currently running), ''false'' otherwise.
 */
export function getResourceDynamicElementRoot(theResource: Resource): Element;

/**
 * Returns a table containing the names of the functions that a resource exports. It will return
 * the exports of the current resource if there is no argument passed in.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceExportedFunctions|MTASA Wiki}
 * @param theResource the resource of which you want to know the call|exported functions.
 * @default getThisResource(
 * @return Returns a [[table]] of function names if successful, ''false'' otherwise.
 */
export function getResourceExportedFunctions(theResource: Resource): LuaTable;

/**
 * This function is used to retrieve a resource from its name. A resource's name is the same as its
 * folder or file archive name on the server (without the extension).
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceFromName|MTASA Wiki}
 * @param resourceName the name of the resource you wish to get.
 * @return Returns the [[resource]] with the specified name, or ''false'' if no resource of that
 * name exists. Note that clientside this will also return ''false'' for resources that are in the
 * ''loaded'' state, since the client is unaware of resources that have not been started.
 */
export function getResourceFromName(resourceName: string): Resource;

/**
 * This function gets the name of the specified resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceName|MTASA Wiki}
 * @param res The resource you wish to get the name of.
 * @return Returns a string with the resource name in it, or ''false'' if the resource does not
 * exist.
 */
export function getResourceName(res: Resource): string;

/**
 * This function retrieves a resource's root element. The resource's root element is the element in
 * the element tree which is the parent of all elements that belong to a particular resource (except
 * for elements specifically created elsewhere). You can attach event handlers to this element to easily
 * capture events that originate from your resource (and global events that originate from the root
 * element).
 * Note: every resource has a [[Predefined_variables_list|predefined global variable]] called
 * ''resourceRoot'' whose value is the root element of that resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceRootElement|MTASA Wiki}
 * @param theResource the resource whose root element we are getting. If not specified, assumes the
 * current resource. (the resource returned from getThisResource)
 * @default getThisResource(
 * @return Returns an ''element'' representing the resource's root, ''false'' if the specified
 * resource doesn't exist.
 */
export function getResourceRootElement(theResource: Resource): Element;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function returns the state of a given resource
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceState|MTASA Wiki}
 * @param theResource The resource you wish to get the state of.
 * {{OOP||[[resource]]:getState|state}}
 * @return If successful returns a string with the resource state in it, ''false'' otherwise.
 * * The state can be one of:
 * * *'''loaded'''
 * * *'''running'''
 * * {{New feature|3|1.0|
 * * *'''starting'''
 * * *'''stopping'''
 * * *'''failed to load''' - Use [[getResourceLoadFailureReason]] to find out why it failed.
 * * }}
 */
export function getResourceState(theResource: Resource): string;

/**
 * This function retrieves the resource from which the function call was made.
 * @see {@link https://wiki.multitheftauto.com/wiki/getThisResource|MTASA Wiki}
 * @return Returns the resource in which the current script is.
 */
export function getThisResource(): Resource;

/**
 * Gets all [[FetchRemote|fetchRemote]] and [[CallRemote|callRemote]] requests currently running.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getRemoteRequests|MTASA Wiki}
 * @param theResource : the resource to get all requests from
 * @default nil
 * @return Returns a table with all requests, false if an invalid resource was provided
 */
export function getRemoteRequests(theResource: Resource): LuaTable;

/**
 * Gets informations of an [[FetchRemote|fetchRemote]] or [[CallRemote|callRemote]] request info.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getRemoteRequestInfo|MTASA Wiki}
 * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or
 * GetRemoteRequests|getRemoteRequests
 * @return Returns a table when valid, false otherwise
 * * The table contains:
 * * *'''bytesReceived:''' A number specifying the amount of data received so far. Zero means the
 * download is queued
 * * *'''bytesTotal:''' A number specifying the final download size. Will be zero if the remote
 * HTTP server has not set the 'Content-Length' header
 * * *'''currentAttempt:''' A number specifying the current connection attempt
 * * *'''type:''' A string specifying either "fetch" or "call"
 * * *'''url:''' A string specifying the URL
 * * *'''resource:''' The resource which started the request, or false if the resource has since
 * been stopped/restarted
 * * *'''queue:''' A string specifying the queue name
 * * *'''method:''' A string specifying the HTTP method. e.g. "GET" or "POST"
 * * *'''connectionAttempts:''' A number specifying max number connection attempts as declared in
 * the fetchRemote call
 * * *'''connectionTimeout:''' A number specifying connection attempt timeout as declared in the
 * fetchRemote call
 * * *'''postData:''' A string containing the request post data as declared in the fetchRemote call
 * * *'''headers:''' A table containing the request HTTP headers as declared in the fetchRemote call
 */
export function getRemoteRequestInfo(theRequest: Request, postDataLength?: number, includeHeaders?: boolean): LuaTable;

/**
 * Aborts a [[FetchRemote|fetchRemote]] or [[CallRemote|callRemote]] request.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/abortRemoteRequest|MTASA Wiki}
 * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or
 * GetRemoteRequests|getRemoteRequests
 * @return Returns true on success, false when invalid request was provided
 */
export function abortRemoteRequest(theRequest: Request): boolean;
