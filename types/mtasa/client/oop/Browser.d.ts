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
    FetchRemoteCallback
} from '../structure';

/** @customConstructor Browser */
export class Browser extends Element {
    /**
     * This function returns the title of the passed Element/Browser|browser.
     */
    title: string;

    /**
     * This function returns the URL of the specified Element/Browser|browser.
     */
    url: string;

    /**
     * This function checks if a browser is currently loading a website.
     */
    loading: boolean;

    /**
     * This function sets the rendering state of a browser.
     */
    renderingPaused: boolean;

    /**
     * This function sets either a specific Element/Browser|browsers volume, or the overall
     * volume for browsers.
     */
    volume: boolean;

    /**
     * This function toggles the visibility of the developer tools pane.
     */
    devTools: boolean;

    /**
     * This function creates a new web Element/Browser|browser element.
     * @see {@link https://wiki.multitheftauto.com/wiki/CreateBrowser Wiki, createBrowser }
     * @param width The browsers native width. This should be greater than or equal to 1.
     * @param height The browsers native height. This should be greater than or equal to 1.
     * @param isLocal Sets whether the browser can only show local content or content from the internet (see
     * examples for more information)
     * @param transparent true if you want the browser transparent, false for opaque.
     * @return returns a texture of the browser if it was created successfully, false otherwise. returns
     * also false, if the user disabled remote pages and islocal was set to false.
     */
    constructor(
        width: number,
        height: number,
        isLocal: boolean,
        transparent?: boolean
    );

    /**
     * This function executes a Javascript string to the specified Element/Browser|browser.
     * Works only with local browsers.
     * @see {@link https://wiki.multitheftauto.com/wiki/ExecuteBrowserJavascript Wiki, executeBrowserJavascript }
     * @param jsCode The Javascript code string
     * @return returns true if executing javascript is allowed in the current context, false otherwise.
     */
    executeJavascript(
        jsCode: string
    ): boolean;

    /**
     * This function will attempt to focus the Element/Browser|browser or unfocus all browsers.
     * The browser that is focused will retrieve keyboard input.
     * @see {@link https://wiki.multitheftauto.com/wiki/FocusBrowser Wiki, focusBrowser }
     * @return returns true if the browser was focused or if nil was passed, false if it failed to focus
     * or the browser does not exist.
     */
    focus(): boolean;

    /**
     * This function gets a given property of a specified browser.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetBrowserProperty Wiki, getBrowserProperty }
     * @param key The browser property key. It can be:
     * @param mobile Surfing the web as mobile
     * @return returns the value if the property was successfully found, false otherwise.
     */
    getProperty(
        key: string
    ): boolean;

    /**
     * This function returns a table containing the browser settings.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetBrowserSettings Wiki, getBrowserSettings }
     * @return a table having the following keys:
     * * remoteenabled: true if remote websites are enabled, false otherwise
     * * remotejavascript: true if javascript is enabled on remote websites, false otherwise
     * * pluginsenabled: true if plugins such as flash, silverlight (but not java) are enabled,
     * false otherwise. this setting is false by default.
     */
    static getSettings(): LuaTable;

    /**
     * This function can be used to retrieve the source code of a website (asynchronously). The
     * size of the source code is limited to 2 MiB (remaining bytes are cut).
     * @see {@link https://wiki.multitheftauto.com/wiki/GetBrowserSource Wiki, getBrowserSource }
     * @param callback a callback function with syntax as described below
     * <syntaxhighlight lang="lua">
     * function ( string code )
     * </syntaxhighlight>
     * @return returns true if valid arguments have been passed, false otherwise.
     */
    getSource(
        callback: HandleFunction
    ): boolean;

    /**
     * This function returns the title of the passed Element/Browser|browser.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetBrowserTitle Wiki, getBrowserTitle }
     * @return returns the title as a string. returns false if invalid arguments were passed.
     */
    getTitle(): string;

    /**
     * This function returns the URL of the specified Element/Browser|browser.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetBrowserURL Wiki, getBrowserURL }
     * @return returns the web browser url.
     */
    getURL(): string;

    /**
     * This function injects a mouse click (state: down).
     * @see {@link https://wiki.multitheftauto.com/wiki/InjectBrowserMouseDown Wiki, injectBrowserMouseDown }
     * @param mouseButton The mouse button (Possible values: left, middle, right)
     * @return returns true if the click was successfully injected, false otherwise.
     */
    injectMouseDown(
        mouseButton: string
    ): boolean;

    /**
     * This function injects a mouse movement.
     * @see {@link https://wiki.multitheftauto.com/wiki/InjectBrowserMouseMove Wiki, injectBrowserMouseMove }
     * @param posX Absolute X screen coordinate
     * @param posY Absolute Y screen coordinate
     * @return returns true if the movement was injected successfully, false otherwise.
     */
    injectMouseMove(
        posX: number,
        posY: number
    ): boolean;

    /**
     * This function injects a mouse click (state: up).
     * @see {@link https://wiki.multitheftauto.com/wiki/InjectBrowserMouseUp Wiki, injectBrowserMouseUp }
     * @param mouseButton The mouse button (Possible values: left, middle, right)
     * @return returns true if the click was successfully injected, false otherwise.
     */
    injectMouseUp(
        mouseButton: string
    ): boolean;

    /**
     * This function injects mouse wheel events.
     * @see {@link https://wiki.multitheftauto.com/wiki/InjectBrowserMouseWheel Wiki, injectBrowserMouseWheel }
     * @param verticalScroll : Amount of units you want the browser to scroll along the Y-axe.
     * @param horizontalScroll : Amount of units you want the browser to scroll along the X-axe.
     * @return returns true if the mouse action was successfully injected, false otherwise.
     */
    injectMouseWheel(
        verticalScroll: number,
        horizontalScroll: number
    ): boolean;

    /**
     * This function checks if the specified URL is blocked from being loaded.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsBrowserDomainBlocked Wiki, isBrowserDomainBlocked }
     * @param address A website URL
     * @param isURL true if address should be parsed as URL, false otherwise.
     * @return returns false if the url is able to be loaded, true if it is blocked and nil if an
     * invalid domain/url was passed.
     */
    static isDomainBlocked(
        address: string,
        isURL?: boolean
    ): boolean;

    /**
     * This function checks if a browser is focused.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsBrowserFocused Wiki, isBrowserFocused }
     * @return returns true if the browser is focused, false otherwise and nil if invalid arguments were
     * passed.
     */
    isFocused(): boolean;

    /**
     * This function checks if a browser is currently loading a website.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsBrowserLoading Wiki, isBrowserLoading }
     * @return returns true if the browser is loading a website, false otherwise and nil if invalid
     * arguments were passed.
     */
    isLoading(): boolean;

    /**
     * This function loads the specified URL.
     * @see {@link https://wiki.multitheftauto.com/wiki/LoadBrowserURL Wiki, loadBrowserURL }
     * @param url The url you want to load. It can either contain a remote website (http:// prefix) or a
     * website stored within a local resource (http://mta/local/gui.html for example, see
     * Local_Scheme_Handler|Local Scheme Handler for details).
     * @param postData The post data passed to the website. Its content type can be any type (e.g. JSON) if
     * urlEncoded is set to false
     * @param urlEncoded If set to true, it will be available f.e. in PHPs $_POST variable (the content type is:
     * application/x-www-form-urlencoded)
     * @return returns true if the url was successfully loaded.
     */
    loadURL(
        url: string,
        postData?: string,
        urlEncoded?: boolean
    ): boolean;

    /**
     * This function opens a request window in order to accept the requested remote URLs.
     * @see {@link https://wiki.multitheftauto.com/wiki/RequestBrowserDomains Wiki, requestBrowserDomains }
     * @param pages A table containing all domains
     * @param parseAsURL true if the passed addresses should be converted from URLs, false otherwise.
     * @param callback A callback function that is called as soon as the result is available
     * Syntax:
     * <syntaxhighlight lang="lua">function(bool wasAccepted, table
     * new_domains)</syntaxhighlight>
     * @return returns true, if the string was successfully read, false otherwise.
     */
    static requestDomains(
        pages: LuaTable,
        parseAsURL?: boolean,
        callback?: HandleFunction
    ): boolean;

    /**
     * This function provides a requestable ajax resource for Lua/Javascript communication for a
     * Element/Browser|browser.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetBrowserAjaxHandler Wiki, setBrowserAjaxHandler }
     * @param url The URL endpoint to handle
     * @param handler The function to call if the webBrowser attempts to open the ajax endpoint. If this
     * parameter is nil or omitted, the ajax handler for the url will be deleted.
     */
    setAjaxHandler(
        url: string,
        handler?: HandleFunction
    ): boolean;

    /**
     * This function sets a given property of a specified browser.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetBrowserProperty Wiki, setBrowserProperty }
     * @param key The browser property key. It can be:
     * @param mobile Surfing the web as mobile
     * @param value A value indicating whether to enable (1) the property or not (0)
     * @return returns true if the property was successfully set, false otherwise.
     */
    setProperty(
        key: string,
        value: string
    ): boolean;

    /**
     * This function sets the rendering state of a browser.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetBrowserRenderingPaused Wiki, setBrowserRenderingPaused }
     * @param paused true to pause rendering, false to continue
     * @return returns true if the state was successfully changed
     */
    setRenderingPaused(
        paused: boolean
    ): boolean;

    /**
     * This function sets either a specific Element/Browser|browsers volume, or the overall
     * volume for browsers.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetBrowserVolume Wiki, setBrowserVolume }
     * @param volume A float|floating point number representing the desired volume level. Range is from 0.0 to
     * 1.0
     */
    setVolume(
        volume: number
    ): boolean;

    /**
     * This function toggles the visibility of the developer tools pane.
     * @see {@link https://wiki.multitheftauto.com/wiki/ToggleBrowserDevTools Wiki, toggleBrowserDevTools }
     * @param visible true to show the tools, false to hide
     * @return returns true if the visibility was successfully toggled, false if an error occurred
     */
    toggleDevTools(
        visible: boolean
    ): boolean;
}
