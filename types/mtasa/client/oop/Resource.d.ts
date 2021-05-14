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
    Texture,
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
    Team,
    Vehicle,
    XmlNode,
    File,
    Marker,
    MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction
} from '../structure';

/** @customConstructor Resource */
export class Resource {
    /**
     * This function gets the name of the specified resource.
     */
    name: string;

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
    call(
        ...varargs: any[]
    ): LuaMultiReturn<[
        ...any[]
    ]>;

    /**
     * This function is used to retrieve a resource from its name. A resources name is the same
     * as its folder or file archive name on the server (without the extension).
     * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceFromName Wiki, getResourceFromName }
     * @param resourceName the name of the resource you wish to get.
     * @return returns the resource with the specified name, or false if no resource of that name
     * exists. note that clientside this will also return false for resources that are in the
     * loaded state, since the client is unaware of resources that have not been started.
     */
    static getFromName(
        resourceName: string
    ): Resource;

    /**
     * This function gets the name of the specified resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceName Wiki, getResourceName }
     * @return returns a string with the resource name in it, or false if the resource does not exist.
     */
    getName(): string;

    /**
     * This function retrieves a resources root element. The resources root element is the
     * element in the element tree which is the parent of all elements that belong to a
     * particular resource (except for elements specifically created elsewhere). You can attach
     * event handlers to this element to easily capture events that originate from your resource
     * (and global events that originate from the root element).
     * Note: every resource has a Predefined_variables_list|predefined global variable called
     * resourceRoot whose value is the root element of that resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetResourceRootElement Wiki, getResourceRootElement }
     * @return returns an element representing the resources root, false if the specified resource
     * doesnt exist.
     */
    getRootElement(): Element;
}
