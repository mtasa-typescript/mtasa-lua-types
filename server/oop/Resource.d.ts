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

/** @customConstructor Resource */
export class Resource {
    /**
     * This function retrieves the ACL request section from the meta.xml file of the given
     * resource.
     */
    aclRequests: LuaTable;

    /**
     * This function retrieves the dynamic element root of a specified resource. The dynamic
     * element root is the parent of elements that are created by scripts (e.g. with
     * createObject) unless they specify a different parent.
     */
    dynamicElementRoot: Element;

    /**
     * Returns a table containing the names of the functions that a resource exports. It will
     * return the exports of the current resource if there is no argument passed in.
     */
    exportedFunctions: LuaTable;

    /**
     * Used to check the last starting time and date of a resource
     */
    lastStartTime: number;

    /**
     * This function retrieves the reason why a resource failed to start.
     */
    loadFailureReason: string;

    /**
     * Gets the date and time at which a resource was last loaded in the server.
     */
    loadTime: number;

    /**
     * This function gets the name of the specified resource.
     */
    name: string;

    /**
     * This function returns the organizational file path (e.g. admin) of a resource.
     */
    organizationalPath: string;

    /**
     * This function retrieves a resources root element. The resources root element is the
     * element in the element tree which is the parent of all elements that belong to a
     * particular resource (except for elements specifically created elsewhere). You can attach
     * event handlers to this element to easily capture events that originate from your resource
     * (and global events that originate from the root element).
     * Note: every resource has a Predefined_variables_list|predefined global variable called
     * resourceRoot whose value is the root element of that resource.
     */
    rootElement: Element;

    /**
     * Checks whether a resource is currently archived (running from within a ZIP file).
     */
    archived: boolean;

    /**
     * This will check if a resource is currently protected, as defined in
     * Server_mtaserver.conf#resource|mtaserver.conf.
     */
    protected: boolean;

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
     * @see https://wiki.multitheftauto.com/wiki/Call
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
    call(theFunction: string, ...varargs: any[]): LuaMultiReturn<[...any[]]>;

    /**
     * This function copies a specified resource with a new name.
     * @see https://wiki.multitheftauto.com/wiki/CopyResource
     * @param newResourceName the name that the copied resource will receive
     * @param organizationalDir : A string containing the path where the resource should be copied to (e.g.
     * gamemodes/amx).
     * @return returns the resource element of the copy. returns false if the arguments are incorrect.
     */
    copy(newResourceName: string, organizationalDir?: string): Resource;

    /**
     * This function creates an new, empty resource. This creates a directory matching the name
     * you specify on disk, then creates an empty meta.xml file with a <meta> element in it.
     * @see https://wiki.multitheftauto.com/wiki/CreateResource
     * @param resourceName The name of the new resource. This should be a valid file name. Its recommended that you
     * do not have spaces or non-ASCII characters in resource names.
     * @param organizationalDir : A string containing the path where the resource should be created (e.g. gamemodes/amx).
     * @return returns the resource element of the new resource if successful, false otherwise. this
     * could fail if the resource name already is in use, if a directory already exists with the
     * name youve specified (but this isnt a valid resource) or if the name you specify isnt
     * valid. it could also fail if the disk was full or for other similar reasons.
     */
    constructor(resourceName: string, organizationalDir?: string);

    /**
     * This function deletes a resource from the MTA memory and moves it to the
     * /resources-cache/trash/ directory.
     * @see https://wiki.multitheftauto.com/wiki/DeleteResource
     * @param resourceName The name of resource to delete.
     * @return returns true if the resource has been deleted successfully, false otherwise.
     */
    static delete(resourceName: string): boolean;

    /**
     * This function retrieves the ACL request section from the meta.xml file of the given
     * resource.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceACLRequests
     * @return returns a table with the acl requests for the given resource, or false if the resource is
     * not valid. a valid resource with no acl requests will return an empty table.
     */
    getACLRequests(): LuaTable;

    /**
     * This function retrieves the dynamic element root of a specified resource. The dynamic
     * element root is the parent of elements that are created by scripts (e.g. with
     * createObject) unless they specify a different parent.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceDynamicElementRoot
     * @return returns an element of the resources dynamic element root if the resource specified was
     * valid and active (currently running), false otherwise.
     */
    getDynamicElementRoot(): Element;

    /**
     * Returns a table containing the names of the functions that a resource exports. It will
     * return the exports of the current resource if there is no argument passed in.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceExportedFunctions
     * @return returns a table of function names if successful, false otherwise.
     */
    getExportedFunctions(): LuaTable;

    /**
     * This function is used to retrieve a resource from its name. A resources name is the same
     * as its folder or file archive name on the server (without the extension).
     * @see https://wiki.multitheftauto.com/wiki/GetResourceFromName
     * @param resourceName the name of the resource you wish to get.
     * @return returns the resource with the specified name, or false if no resource of that name
     * exists. note that clientside this will also return false for resources that are in the
     * loaded state, since the client is unaware of resources that have not been started.
     */
    static getFromName(resourceName: string): Resource;

    /**
     * This function retrieves the value of any attribute in a resource info tag.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceInfo
     * @param attribute the name of the attribute we want info about.
     * @return returns a string with the attribute value if it exists, false otherwise.
     */
    getInfo(attribute: string): string;

    /**
     * Used to check the last starting time and date of a resource
     * @see https://wiki.multitheftauto.com/wiki/GetResourceLastStartTime
     * @return if successful, returns the unix timestamp when the resource was last started, or the
     * string never if the resource has not been started yet, otherwise false. use in
     * conjunction with getrealtime in order to retrieve detailed information.
     * returns a string with the time and date, or false if the resource does not exist.
     */
    getLastStartTime(): number;

    /**
     * This function retrieves the reason why a resource failed to start.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceLoadFailureReason
     * @return if the resource failed to load, returns a string with the failure reason in it. if it
     * loaded successfully, returns an empty string. returns false if the resource doesnt exist.
     */
    getLoadFailureReason(): string;

    /**
     * Gets the date and time at which a resource was last loaded in the server.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceLoadTime
     * @return if successful, returns the unix timestamp when the resource was loaded, otherwise false.
     * use in conjunction with getrealtime in order to retrieve detailed information.
     * if successful, returns a string with the date and time that the resource was last loaded
     * into memory (for example when the server started, or when the resource was changed and
     * reloaded). returns false on failure.
     * an example string is fri mar 28 13:51:04 2008.
     */
    getLoadTime(): number;

    /**
     * This function retrieves the root element of a certain map in a specified resource.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceMapRootElement
     * @param mapName name of the maps which root element we want to retrieve, file extension is required
     * @return returns an the resources map root element if the map exists and resource specified was
     * valid and active (currently running), false otherwise.
     */
    getMapRootElement(mapName: string): Element;

    /**
     * This function gets the name of the specified resource.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceName
     * @return returns a string with the resource name in it, or false if the resource does not exist.
     */
    getName(): string;

    /**
     * This function returns the organizational file path (e.g. admin) of a resource.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceOrganizationalPath
     * @return returns the organizational folder name of the resource. it returns empty string if the
     * resource is on root resources folder. it returns false if the resource could not be found.
     */
    getOrganizationalPath(): string;

    /**
     * This function retrieves a resources root element. The resources root element is the
     * element in the element tree which is the parent of all elements that belong to a
     * particular resource (except for elements specifically created elsewhere). You can attach
     * event handlers to this element to easily capture events that originate from your resource
     * (and global events that originate from the root element).
     * Note: every resource has a Predefined_variables_list|predefined global variable called
     * resourceRoot whose value is the root element of that resource.
     * @see https://wiki.multitheftauto.com/wiki/GetResourceRootElement
     * @return returns an element representing the resources root, false if the specified resource
     * doesnt exist.
     */
    getRootElement(): Element;

    /**
     * This function retrieves a table of all the resources that exist on the server.
     * @see https://wiki.multitheftauto.com/wiki/GetResources
     * @return returns a table of resources.
     */
    static getAll(): LuaTable;

    /**
     * This function retrieves the resource from which the function call was made.
     * @see https://wiki.multitheftauto.com/wiki/GetThisResource
     * @return returns the resource in which the current script is.
     */
    static getThis(): Resource;

    /**
     * Checks whether a resource is currently archived (running from within a ZIP file).
     * @see https://wiki.multitheftauto.com/wiki/IsResourceArchived
     * @param resource the resource to check
     * @return returns true if a resource is archived, false if it is not archived, or nil if there is
     * problem with resource.
     */
    isArchived(): boolean;

    /**
     * This will check if a resource is currently protected, as defined in
     * Server_mtaserver.conf#resource|mtaserver.conf.
     * @see https://wiki.multitheftauto.com/wiki/IsResourceProtected
     * @return returns true if the resource is protected, false otherwise.
     */
    isProtected(): boolean;

    /**
     * This function removes a file from the resource.
     * @see https://wiki.multitheftauto.com/wiki/RemoveResourceFile
     * @param fileName The filename what you want to delete.
     * @return returns true if file was deleted, otherwise false if the resource is in use or the file
     * doesnt exist.
     */
    removeFile(fileName: string): boolean;

    /**
     * This function renames a resource.
     * @see https://wiki.multitheftauto.com/wiki/RenameResource
     * @param theResource The name of resource or the resource you want to rename.
     * @param newResourceName The name of what the resource should be renamed to.
     * @param organizationalPath If you want to store the new resource inside a category.
     * @return returns true if the resource has been renamed successfully, false otherwise. this could
     * fail if the resource name already is in use, if a directory already exists with the name
     * youve specified (but this isnt a valid resource) or if the name you specify isnt valid.
     * it could also fail if the disk was full or for other similar reasons. wont work on a
     * started resource or if the resource is not loaded (not known by mta (use /refresh))
     */
    rename(
        theResource: string | Resource,
        newResourceName: string,
        organizationalPath?: string,
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
     * @see https://wiki.multitheftauto.com/wiki/RestartResource
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
    restart(
        persistent?: boolean,
        configs?: boolean,
        maps?: boolean,
        scripts?: boolean,
        html?: boolean,
        clientConfigs?: boolean,
        clientScripts?: boolean,
        clientFiles?: boolean,
    ): boolean;

    /**
     * This function sets the value of any attribute in a resource info tag.
     * @see https://wiki.multitheftauto.com/wiki/SetResourceInfo
     * @param attribute the name of the attribute that is to be set.
     * @param value the value of this attribute
     * @return returns true if the info was successfully set, false otherwise
     */
    setInfo(attribute: string, value: string): boolean;

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
     * @see https://wiki.multitheftauto.com/wiki/StartResource
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
    start(
        persistent?: boolean,
        startIncludedResources?: boolean,
        loadServerConfigs?: boolean,
        loadMaps?: boolean,
        loadServerScripts?: boolean,
        loadHTML?: boolean,
        loadClientConfigs?: boolean,
        loadClientScripts?: boolean,
        loadFiles?: boolean,
    ): boolean;

    /**
     * This function stops a running resource.<br>
     * @see https://wiki.multitheftauto.com/wiki/StopResource
     * @return returns true if the resource was stopped, false if the stopping failed, or an invalid
     * resource was passed.
     */
    stop(): boolean;
}
