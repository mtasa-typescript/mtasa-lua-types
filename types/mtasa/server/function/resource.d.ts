/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, HandleFunction, Request, Resource, Table, XmlNode } from "../structure";

/**
 * This function adds a new empty config file to an existing resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/addResourceConfig|MTASA Wiki}
 * @param filePath The filepath of the file to be created in the following format:
 * :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root
 * directory of the resource to the file.  :For example, if you want to create a config named
 * 'settings.xml' in the resource 'ctf', it can be created from another resource this way:
 * ''addResourceConfig(":ctf/settings.xml", "server")''.  :If you want to create the file in the current resource, only the file
 * path is necessary, e.g. ''addResourceConfig("settings.xml", "server")''.  {{OptionalArg}}
 * @param filetype a string indicating whether the file is serverside (server) or clientside
 * (client).
 * @default "server"
 * @return Returns the new config's root [[xmlnode]] if the config was added successfully,
 * ''false'' otherwise.
 */
export function addResourceConfig(filePath: string, filetype: string): XmlNode;

/**
 * This function adds a new empty mapfile to an existing resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/addResourceMap|MTASA Wiki}
 * @param filePath The filepath of the resource map in the following format: :resourceName/path.
 * resourceName is the name of the resource the map file will be in, and path is the path from the root
 * directory of the resource to the file.  :For example, if you want to create a map file named
 * 'manycars.map' in the resource 'cdm', it can be created from another resource this way:
 * ''addResourceMap(":cdm/manycars.map")''.  :If you want to create the map file in the current resource, only the file
 * path is necessary, e.g. ''addResourceMap("manycars.map")''.  {{OptionalArg}}
 * @param dimension the dimension in which the maps objects will be placed.
 * @default 0
 * @return Returns the new map's root [[xmlnode]] if the map was added successfully, ''false''
 * otherwise.
 */
export function addResourceMap(filePath: string, dimension: number): XmlNode;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA
 * servers. The calls are asynchronous so you do not get an immediate result from the call, instead a
 * callback function you specify is called when the call returns.
 * You can also use this function to access a standard web page on a server you own by specifying
 * the URL. The arguments you specify to callRemote are passed to the web page using HTTP POST as a
 * [[JSON]] array. This will always have an array as the root element. The page must return a JSON formated
 * *array* in the page's body with the results of the call (or an empty array if there are no results).
 * You can use the [[PHP SDK]] to create PHP pages that can be called by this function. See the PHP
 * SDK page for an example.
 * In addition, it is possible to use this function to get information about a resource in the MTA
 * community, besides other things. Check out the [[Community Resources]] article.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing
 * the error reason will be passed to the callback function. The reason for failure will be similar to
 * errors found with websites - file not found, server not found and timeouts.
 * @see {@link https://wiki.multitheftauto.com/wiki/callRemote|MTASA Wiki}
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param queueName Name of the queue to use. Any name can be used. If not set, the queue name is
 * default. Requests in the same queue are processed in order, one at a time.  }}
 * {{New_feature|3.0139|1.3.1|
 * @default "default"
 * @param connectionAttempts Number of times to retry if the remote host does not respond. In the
 * case of a non-responding remote server, each connection attempt will timeout after 6 seconds.
 * Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script
 * gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12
 * seconds
 * @default 10
 * @param connectTimeout Number of milliseconds each connection attempt will take before timing out
 *  }}
 * @default 10000
 * @param resourceName This is a name of the resource that contains the exported function you want
 * to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the
 * remote function call. The argument list should match the format of the data returned. The callback
 * function will be passed a string containing ERROR followed by an integer indicating the error code when
 * an error occurs calling the function. A list of error codes
 * Template:Error_codes_for_callRemote_and_fetchRemote |can be found here.  {{OptionalArg}}   {{New items|4.0153|1.5.3-9.11270|
 * @return Returns ''true'' if the function has been called, ''false'' otherwise.
 */
export function callRemote(
    host: string,
    queueName?: string,
    connectionAttempts?: number,
    connectTimeout?: number,
    resourceName?: string,
    functionName?: string,
    callbackFunction?: HandleFunction,
    ...args: any[]
): boolean;

/**
 * This function copies a specified [[resource]] with a new name.
 * @see {@link https://wiki.multitheftauto.com/wiki/copyResource|MTASA Wiki}
 * @param theResource the resource which is going to be copied
 * @param newResourceName the name that the copied resource will receive  {{OptionalArg}}
 * @param organizationalDir : A string containing the path where the resource should be copied to
 * (e.g. gamemodes/amx).
 * @return Returns the [[resource]] element of the copy. Returns ''false'' if the arguments are
 * incorrect.
 */
export function copyResource(theResource: Resource, newResourceName: string, organizationalDir?: string): Resource;

/**
 * This function creates an new, empty resource. This creates a directory matching the name you
 * specify on disk, then creates an empty meta.xml file with a <meta> element in it.
 * @see {@link https://wiki.multitheftauto.com/wiki/createResource|MTASA Wiki}
 * @param resourceName The name of the new resource. This should be a valid file name. Its
 * recommended that you do not have spaces or non-ASCII characters in resource names.  {{OptionalArg}}
 * @param organizationalDir : A string containing the path where the resource should be created
 * (e.g. gamemodes/amx).
 * @return Returns the [[resource]] element of the new resource if successful, ''false'' otherwise.
 * This could fail if the resource name already is in use, if a directory already exists with the name
 * you've specified (but this isn't a valid resource) or if the name you specify isn't valid. It could
 * also fail if the disk was full or for other similar reasons.
 */
export function createResource(resourceName: string, organizationalDir?: string): Resource;

/**
 * This function deletes a resource from the MTA memory and moves it to the
 * '''/resources-cache/trash/''' directory.
 * @see {@link https://wiki.multitheftauto.com/wiki/deleteResource|MTASA Wiki}
 * @param resourceName The name of resource to delete.
 * @return Returns ''true'' if the resource has been deleted successfully, ''false'' otherwise.
 */
export function deleteResource(resourceName: string): boolean;

/**
 * This function retrieves the ACL request section from the meta.xml file of the given resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceACLRequests|MTASA Wiki}
 * @param theResource the resource to get the ACL requests for.
 * @return Returns a ''table'' with the ACL requests for the given resource, or ''false'' if the
 * resource is not valid. A valid resource with no ACL requests will return an empty table.
 */
export function getResourceACLRequests(theResource: Resource): Table;

/**
 * This function retrieves the value of any attribute in a resource info tag.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceInfo|MTASA Wiki}
 * @param theResource the resource we are getting the info from.
 * @param attribute the name of the attribute we want info about.
 * @return Returns a ''string'' with the attribute value if it exists, ''false'' otherwise.
 */
export function getResourceInfo(theResource: Resource, attribute: string): string;

/**
 * Used to check the last starting time and date of a resource
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceLastStartTime|MTASA Wiki}
 * @param theResource The resource of which youd like to check the last starting time.
 * @return {{New feature/item|3|1.0|840|
 * * If successful, returns the UNIX timestamp when the resource was last started, or the string
 * "never" if the resource has not been started yet, otherwise false. Use in conjunction with
 * [[getRealTime]] in order to retrieve detailed information.
 * * }}
 * * {{Deprecated_feature|3|1.0|
 * * Returns a string with the time and date, or false if the resource does not exist.
 * * }}
 */
export function getResourceLastStartTime(theResource: Resource): number;

/**
 * This function retrieves the reason why a resource failed to start.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceLoadFailureReason|MTASA Wiki}
 * @param theResource The resource you wish to check.
 * @return If the resource failed to load, returns a string with the failure reason in it. If it
 * loaded successfully, returns an empty string. Returns ''false'' if the resource doesn't exist.
 */
export function getResourceLoadFailureReason(theResource: Resource): string;

/**
 * Gets the date and time at which a resource was last loaded in the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceLoadTime|MTASA Wiki}
 * @param res the resource you want to know the load time of.
 * @return {{New feature|3|1.0 r840|
 * * If successful, returns the UNIX timestamp when the resource was loaded, otherwise false. Use
 * in conjunction with [[getRealTime]] in order to retrieve detailed information.
 * * }}
 * * {{Deprecated_feature|3|1.0|
 * * If successful, returns a string with the date and time that the resource was last loaded into
 * memory (for example when the server started, or when the resource was changed and reloaded). Returns
 * ''false'' on failure.
 * * An example string is "Fri Mar 28 13:51:04 2008".
 * * }}
 */
export function getResourceLoadTime(res: Resource): number;

/**
 * This function retrieves the root element of a certain [[map]] in a specified [[resource]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceMapRootElement|MTASA Wiki}
 * @param theResource the resource where the map is located
 * @param mapName name of the maps which root element we want to retrieve, file extension is
 * required
 * @return Returns an the resource's map root [[element]] if the map exists and resource specified
 * was valid and active (currently running), ''false'' otherwise.
 */
export function getResourceMapRootElement(theResource: Resource, mapName: string): Element;

/**
 * This function returns the organizational file path (e.g. ''[admin]'') of a resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResourceOrganizationalPath|MTASA Wiki}
 * @param theResource the resource of which you want to know the organizational path
 * @return Returns the organizational folder name of the [[resource]]. It returns empty string if
 * the resource is on root ''resources'' folder. It returns '''false''' if the resource could not be
 * found.
 */
export function getResourceOrganizationalPath(theResource: Resource): string;

/**
 * This function retrieves a table of all the resources that exist on the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/getResources|MTASA Wiki}
 * @return Returns a table of resources.
 */
export function getResources(): Table;

/**
 * Checks whether a resource is currently archived (running from within a ZIP file).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isResourceArchived|MTASA Wiki}
 * @return Returns ''true'' if a resource is archived, ''false'' if it is not archived, or ''nil''
 * if there is problem with resource.
 */
export function isResourceArchived(resourceElement: Resource): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This will check if a resource is currently protected, as defined in
 * [[Server_mtaserver.conf#resource|mtaserver.conf]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isResourceProtected|MTASA Wiki}
 * @param theResource the resource to check
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the resource is 'protected', ''false'' otherwise.
 */
export function isResourceProtected(theResource: Resource): boolean;

/**
 * This function finds new resources and checks for changes to the current ones.
 * @see {@link https://wiki.multitheftauto.com/wiki/refreshResources|MTASA Wiki}
 * @param refreshAll : If true MTA will check for changes in all resources. If false, MTA will only
 * check for new resources and try to reload resources with errors  {{New items|5.0155|1.5.5-9.11718|
 * @default false
 * @param targetResource : If set, the refresh is restricted to the supplied resource only  }}
 * '''Note:''' Checking for changes in all resources can result in lag for a short period of time. It
 * should generally be avoided to set refreshAll to ''true''.
 * @default nil
 * @return Returns true if refresh was successful, false otherwise.
 */
export function refreshResources(refreshAll: boolean, targetResource: Resource): boolean;

/**
 * This function removes a file from the resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/removeResourceFile|MTASA Wiki}
 * @param theResource The resource element.
 * @param fileName The filename what you want to delete.
 * @return Returns ''true'' if file was deleted, otherwise ''false'' if the resource is in use or
 * the file doesn't exist.
 */
export function removeResourceFile(theResource: Resource, fileName: string): boolean;

/**
 * This function renames a resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/renameResource|MTASA Wiki}
 * @param newResourceName The name of what the resource should be renamed to.
 * @param organizationalPath If you want to store the new resource inside a category.
 * @return Returns ''true'' if the resource has been renamed successfully, ''false'' otherwise.
 * This could fail if the resource name already is in use, if a directory already exists with the name
 * you've specified (but this isn't a valid resource) or if the name you specify isn't valid. It could
 * also fail if the disk was full or for other similar reasons. Won't work on a started resource or if the
 * resource is not loaded (not known by MTA (use /refresh))
 */
export function renameResource(resource: string, newResourceName: string, organizationalPath: string): boolean;

/**
 * This function restarts a running resource. Restarting will destroy all the elements that the
 * resource has created (as stopping the resource does).
 * *Don't forget to give admin rights to the resource, in which you are using restartResource
 * function or it won't work.
 * *This function does not restart the resource immediately. Restarts are queued up until the end
 * of the server's frame to ensure that they occur in the correct order (and that dependent resources
 * can start and stop correctly). The resource being restarted will have an [[onResourceStop]] event
 * triggered and the restarted instance will receive an [[onResourceStart]] event. Remember that the
 * element and resource variables will be invalidated during the restart, though of course, the resource's
 * name will not.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/restartResource|MTASA Wiki}
 * @param theResource the resource you want to restart.
 * @param persistent Unused
 * @default false
 * @param configs Reload configs?
 * @default true
 * @param maps Reload maps?
 * @default true
 * @param scripts Reload (server) scripts?
 * @default true
 * @param html Reload html files (for resource web access)?
 * @default true
 * @param clientConfigs Reload client configs?
 * @default true
 * @param clientScripts Reload client scripts?
 * @default true
 * @param clientFiles Reload files?
 * @default true
 * @return Returns ''true'' if the resource was restarted, ''false'' if the resource wasn't
 * running, or an invalid resource was passed.
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
 * @see {@link https://wiki.multitheftauto.com/wiki/setResourceInfo|MTASA Wiki}
 * @param theResource the resource we are setting info to.
 * @param attribute the name of the attribute that is to be set.
 * @param value the value of this attribute
 * @return Returns ''true'' if the info was successfully set, ''false'' otherwise
 */
export function setResourceInfo(theResource: Resource, attribute: string, value: string): boolean;

/**
 * This function starts a resource either persistently or as a dependency of the current resource.
 * If you start the resource persistently, the resource will run until stopped either using
 * [[stopResource]] or by the server admin. A resource started as a dependency will stop when your resource stops,
 * if no other resources have it as a depdendency. This is the same effect as using an ''include'' in
 * your [[meta.xml]] file.
 * The function also allows you to specify a number of boolean options. These allow you to disable
 * the loading of various aspects of the resource. This is generally useful for editors rather than for
 * actual gamemodes. It could also be used as a way to preview a resource before enabling the
 * scripting aspects, though this could produce unreliable results. There is no way for a resource to tell if
 * it is being run with any of these booleans set.
 * @see {@link https://wiki.multitheftauto.com/wiki/startResource|MTASA Wiki}
 * @param resourceToStart The resource that should be started.  {{OptionalArg}}
 * @param persistent A boolean specifying if the resource should continue to run even after the
 * current resource has been stopped or not. If this is true then the resource will run until another
 * resource or user terminates it or the server shuts down. If this is false then resourceToStart will stop
 * when thisResource stops.
 * @default false
 * @param startIncludedResources A boolean specifying if the resources included/dependant resources
 * will be started.
 * @default true
 * @param loadServerConfigs A boolean specifying if server side config (XML) files should be loaded
 * with the resource.
 * @default true
 * @param loadMaps A boolean specifying if any .map files will be started with the resource.
 * @default true
 * @param loadServerScripts A boolean specifying if server side script files should be started
 * alongside the resource.
 * @default true
 * @param loadHTML A boolean specifying if HTML files should be started alongside the resource.
 * @default true
 * @param loadClientConfigs A boolean specifying if client configs should be loaded alongside the
 * resource.
 * @default true
 * @param loadClientScripts A boolean specifying if client scripts should be loaded and started
 * alongside the resource.
 * @default true
 * @param loadFiles A boolean specifying if client-side files should be loaded alongside the
 * resource.
 * @default true
 * @return Returns ''true'' if the resource has been started successfully, ''false'' otherwise.
 */
export function startResource(
    resourceToStart: Resource,
    persistent: boolean,
    startIncludedResources: boolean,
    loadServerConfigs: boolean,
    loadMaps: boolean,
    loadServerScripts: boolean,
    loadHTML: boolean,
    loadClientConfigs: boolean,
    loadClientScripts: boolean,
    loadFiles: boolean
): boolean;

/**
 * This function stops a running resource.<br>
 * @see {@link https://wiki.multitheftauto.com/wiki/stopResource|MTASA Wiki}
 * @param theResource the resource that should be stopped.
 * @return Returns ''true'' if the resource was stopped, ''false'' if the stopping failed, or an
 * invalid resource was passed.
 */
export function stopResource(theResource: Resource): boolean;

/**
 * This function changes the access for one ACL request of the given resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/updateResourceACLRequest|MTASA Wiki}
 * @param theResource the resource to set the ACL request for.
 * @param rightName a string with the name of the right to set the access for. This has to match an
 * existing ACL request.
 * @param access a boolean value setting the access. True is for allow, and false for deny.
 * @param byWho a string value to identity who is changing the setting.
 * @default ""
 * @return Returns true if the setting was changed, or ''false'' if no change was required or there
 * was a problem with the arguments.
 */
export function updateResourceACLRequest(
    theResource: Resource,
    rightName: string,
    access: boolean,
    byWho?: string
): boolean;

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
export function getResourceExportedFunctions(theResource: Resource): Table;

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
export function getRemoteRequests(theResource: Resource): Table;

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
export function getRemoteRequestInfo(theRequest: Request, postDataLength?: number, includeHeaders?: boolean): Table;

/**
 * Aborts a [[FetchRemote|fetchRemote]] or [[CallRemote|callRemote]] request.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/abortRemoteRequest|MTASA Wiki}
 * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or
 * GetRemoteRequests|getRemoteRequests
 * @return Returns true on success, false when invalid request was provided
 */
export function abortRemoteRequest(theRequest: Request): boolean;
