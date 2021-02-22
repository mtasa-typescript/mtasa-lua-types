/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Browser, Element, Gui, GuiBrowser, HandleFunction, Table } from '../structure';

/**
 * This function checks if the browser can return to the previous page.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/canBrowserNavigateBack|MTASA Wiki}
 * @param webBrowser The browser you want to check for a previous page.
 * @return Returns ''true'' if the browser can navigate back, ''false'' otherwise.
 */
export function canBrowserNavigateBack(webBrowser: Browser): boolean;

/**
 * This function checks if the browser can go to the next page.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/canBrowserNavigateForward|MTASA Wiki}
 * @param webBrowser The browser you want check for a next page.
 * @return Returns ''true'' if the browser can go to the next page, ''false'' otherwise.
 */
export function canBrowserNavigateForward(webBrowser: Browser): boolean;

/**
 * This function creates a new web [[Element/Browser|browser]] element.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/createBrowser|MTASA Wiki}
 * @param width The browsers native width. This should be greater than or equal to 1.
 * @param height The browsers native height. This should be greater than or equal to 1.
 * @param isLocal Sets whether the browser can only show local content or content from the internet
 * (see examples for more information)  {{New feature/item|3.0160|1.6||Invalid sizes will be a hard
 * error.}}
 * @param transparent true if you want the browser transparent, false for opaque.
 * @default false
 * @return Returns a [[texture]] of the [[browser]] if it was created successfully, ''false''
 * otherwise. Returns also ''false'', if the user disabled remote pages and ''isLocal'' was set to ''false''.
 */
export function createBrowser(width: number, height: number, isLocal: boolean, transparent?: boolean): Element;

/**
 * This function executes a Javascript string to the specified [[Element/Browser|browser]]. Works
 * only with local browsers.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/executeBrowserJavascript|MTASA Wiki}
 * @param webBrowser The web browser which will execute the Javascript code
 * @param jsCode The Javascript code string
 * @return Returns ''true'' if executing Javascript is allowed in the current context, ''false''
 * otherwise.
 */
export function executeBrowserJavascript(webBrowser: Browser, jsCode: string): boolean;

/**
 * This function will attempt to focus the [[Element/Browser|browser]] or unfocus all browsers. The
 * browser that is focused will retrieve keyboard input.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/focusBrowser|MTASA Wiki}
 * @param webBrowser The web browser to be focused - if this is nil, it will unfocus all browsers.
 * @return Returns ''true'' if the browser was focused or if nil was passed, ''false'' if it failed
 * to focus or the browser does not exist.
 */
export function focusBrowser(webBrowser: Browser): boolean;

/**
 * This function gets a given property of a specified browser.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserProperty|MTASA Wiki}
 * @param theBrowser browser element to get the property value of
 * @param key The browser property key. It can be:
 * @return Returns the value if the property was successfully found, ''false'' otherwise.
 */
export function getBrowserProperty(theBrowser: Browser, key: string): boolean;

/**
 * This function returns a table containing the browser settings.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserSettings|MTASA Wiki}
 * @return A table having the following keys:
 * * * '''RemoteEnabled''': ''true'' if remote websites are enabled, ''false'' otherwise
 * * * '''RemoteJavascript''': ''true'' if Javascript is enabled on remote websites, ''false''
 * otherwise
 * * * '''PluginsEnabled''': ''true'' if plugins such as Flash, Silverlight (but not Java) are
 * enabled, ''false'' otherwise. This setting is ''false'' by default.
 */
export function getBrowserSettings(): Table;

/**
 * This function can be used to retrieve the source code of a website (asynchronously). The size of
 * the source code is limited to 2 MiB (remaining bytes are cut).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserSource|MTASA Wiki}
 * @param webBrowser The browser element you want to get the source of
 * @param callback a callback function with syntax as described below
 * @return Returns ''true'' if valid arguments have been passed, ''false'' otherwise.
 */
export function getBrowserSource(webBrowser: Browser, callback: HandleFunction): boolean;

/**
 * This function returns the title of the passed [[Element/Browser|browser]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserTitle|MTASA Wiki}
 * @param webBrowser The browser
 * @return Returns the title as a [[string]]. Returns false if invalid arguments were passed.
 */
export function getBrowserTitle(webBrowser: Browser): string;

/**
 * This function returns the URL of the specified [[Element/Browser|browser]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserURL|MTASA Wiki}
 * @param webBrowser The browser
 * @return Returns the web browser URL.
 */
export function getBrowserURL(webBrowser: Browser): string;

/**
 * This function injects a mouse click (state: down).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseDown|MTASA Wiki}
 * @param webBrowser The web browser
 * @param mouseButton The mouse button (Possible values: left, middle, right)
 * @return Returns ''true'' if the click was successfully injected, ''false'' otherwise.
 */
export function injectBrowserMouseDown(webBrowser: Browser, mouseButton: string): boolean;

/**
 * This function injects a mouse movement.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseMove|MTASA Wiki}
 * @param webBrowser The browser which will retrieve the mouse movement
 * @param posX Absolute X screen coordinate
 * @param posY Absolute Y screen coordinate
 * @return Returns ''true'' if the movement was injected successfully, ''false'' otherwise.
 */
export function injectBrowserMouseMove(webBrowser: Browser, posX: number, posY: number): boolean;

/**
 * This function injects a mouse click (state: up).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseUp|MTASA Wiki}
 * @param webBrowser The web browser
 * @param mouseButton The mouse button (Possible values: left, middle, right)
 * @return Returns ''true'' if the click was successfully injected, ''false'' otherwise.
 */
export function injectBrowserMouseUp(webBrowser: Browser, mouseButton: string): boolean;

/**
 * This function injects mouse wheel events.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseWheel|MTASA Wiki}
 * @param webBrowser The web browser
 * @param verticalScroll : Amount of units you want the browser to scroll along the Y-axe.
 * @param horizontalScroll : Amount of units you want the browser to scroll along the X-axe.
 * @return Returns ''true'' if the mouse action was successfully injected, ''false'' otherwise.
 */
export function injectBrowserMouseWheel(webBrowser: Browser, verticalScroll: number, horizontalScroll: number): boolean;

/**
 * This function checks if the specified URL is blocked from being loaded.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isBrowserDomainBlocked|MTASA Wiki}
 * @param address A website URL
 * @param isURL true if address should be parsed as URL, false otherwise.
 * @default false
 * @return Returns ''false'' if the URL is able to be loaded, ''true'' if it is blocked and ''nil''
 * if an invalid domain/URL was passed.
 */
export function isBrowserDomainBlocked(address: string, isURL?: boolean): boolean;

/**
 * This function checks if a browser is focused.
 * @see {@link https://wiki.multitheftauto.com/wiki/isBrowserFocused|MTASA Wiki}
 * @param webBrowser The browser
 * @return Returns ''true'' if the browser is focused, ''false'' otherwise and ''nil'' if invalid
 * arguments were passed.
 */
export function isBrowserFocused(webBrowser: Browser): boolean;

/**
 * This function checks if a browser is currently loading a website.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isBrowserLoading|MTASA Wiki}
 * @param webBrowser The browser
 * @return Returns ''true'' if the browser is loading a website, ''false'' otherwise and ''nil'' if
 * invalid arguments were passed.
 */
export function isBrowserLoading(webBrowser: Browser): boolean;

/**
 * This function loads the specified URL.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/loadBrowserURL|MTASA Wiki}
 * @param webBrowser The Element/Browser|browser element which will load the URL
 * @param url The url you want to load. It can either contain a remote website (http:// prefix) or
 * a website stored within a local resource (http://mta/local/gui.html for example, see
 * Local_Scheme_Handler|Local Scheme Handler for details).
 * @param postData The post data passed to the website. Its content type can be any type (e.g.
 * JSON) if urlEncoded is set to false
 * @default ""
 * @param urlEncoded If set to true, it will be available f.e. in PHPs $_POST variable (the content
 * type is: application/x-www-form-urlencoded)
 * @default true
 * @return Returns ''true'' if the URL was successfully loaded.
 */
export function loadBrowserURL(webBrowser: Browser, url: string, postData?: string, urlEncoded?: boolean): boolean;

/**
 * Returns the browser to the previous page.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/navigateBrowserBack|MTASA Wiki}
 * @param webBrowser The browser that you want return to the previous page.
 * @return Returns ''true'' if the browser has returned to the previous page, ''false'' otherwise.
 */
export function navigateBrowserBack(webBrowser: Browser): boolean;

/**
 * This function takes the browser to the next page.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/navigateBrowserForward|MTASA Wiki}
 * @param webBrowser The browser that you want to take to the next page.
 * @return Returns ''true'' if the browser has gone to the next page, ''false'' otherwise.
 */
export function navigateBrowserForward(webBrowser: Browser): boolean;

/**
 * This function reloads the current browser's page.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/reloadBrowserPage|MTASA Wiki}
 * @param webBrowser The browser that you want to reload.
 * @return Returns ''true'' if the browser has reloaded, ''false'' otherwise.
 */
export function reloadBrowserPage(webBrowser: Browser): boolean;

/**
 * This function opens a request window in order to accept the requested remote URLs.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/requestBrowserDomains|MTASA Wiki}
 * @param pages A table containing all domains
 * @param parseAsURL true if the passed addresses should be converted from URLs, false otherwise.
 * @default false
 * @param callback A callback function that is called as soon as the result is available  Syntax:
 * <syntaxhighlight lang="lua">function(bool wasAccepted, table new_domains)</syntaxhighlight>
 * @return Returns '''true''', if the string was successfully read, '''false''' otherwise.
 */
export function requestBrowserDomains(pages: Table, parseAsURL?: boolean, callback?: HandleFunction): boolean;

/**
 * Allows resizing of CEF browsers at runtime.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resizeBrowser|MTASA Wiki}
 * @param webBrowser The browser you want to resize.
 * @param width The new width of the browser.
 * @param height The new height of the browser.
 * @return Returns ''true'' if the browser is resized successfully, ''false'' if there's something
 * wrong.
 */
export function resizeBrowser(webBrowser: Browser, width: number, height: number): boolean;

/**
 * This function provides a requestable ajax resource for Lua/Javascript communication for a
 * [[Element/Browser|browser]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserAjaxHandler|MTASA Wiki}
 * @param webBrowser The web browser which will execute the Javascript code
 * @param url The URL endpoint to handle  {{Warning|Do not use the same path as an existing file as
 * url parameter. Ajax handlers have a higher priority than regular files, which will lead to
 * inaccesibility of the original file if an ajax handler is attached to the same path. }}
 * @param handler The function to call if the webBrowser attempts to open the ajax endpoint. If
 * this parameter is nil or omitted, the ajax handler for the url will be deleted.
 * @return
 */
export function setBrowserAjaxHandler(webBrowser: Browser, url: string, handler?: HandleFunction): boolean;

/**
 * This function sets a given property of a specified browser.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserProperty|MTASA Wiki}
 * @param theBrowser The browser element you want to set a property of
 * @param key The browser property key. It can be:
 * @param value A value indicating whether to enable (1) the property or not (0)
 * @return Returns ''true'' if the property was successfully set, ''false'' otherwise.
 */
export function setBrowserProperty(theBrowser: Browser, key: string, value: string): boolean;

/**
 * This function sets the rendering state of a browser.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserRenderingPaused|MTASA Wiki}
 * @param webBrowser The browser
 * @param paused true to pause rendering, false to continue
 * @return Returns ''true'' if the state was successfully changed
 */
export function setBrowserRenderingPaused(webBrowser: Browser, paused: boolean): boolean;

/**
 * This function sets either a specific [[Element/Browser|browser]]'s volume, or the overall volume
 * for browsers.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserVolume|MTASA Wiki}
 * @param webBrowser A browser element
 * @param volume A float|floating point number representing the desired volume level. Range is from
 * 0.0 to 1.0
 * @return
 */
export function setBrowserVolume(webBrowser: Browser, volume: number): boolean;

/**
 * This function toggles the visibility of the developer tools pane.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/toggleBrowserDevTools|MTASA Wiki}
 * @param webBrowser The browser
 * @param visible true to show the tools, false to hide
 * @return Returns ''true'' if the visibility was successfully toggled, ''false'' if an error
 * occurred
 */
export function toggleBrowserDevTools(webBrowser: Browser, visible: boolean): boolean;

/**
 * This function creates a new CEGUI web [[Element/Browser|browser]] element.
 * The difference between this, and createBrowser is that, this handles inputs internally, and it
 * can be attached to GUI windows. So this one is more suitable for custom dx based interfaces.
 * You can learn more about the differences
 * [https://forum.mtasa.com/topic/80422-dx-browser-vs-gui-browser/?do=findComment&comment=737334 here].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateBrowser|MTASA Wiki}
 * @param x A float of the 2D x position of the browser on a players screen.  This is affected by
 * the relative argument.
 * @param y A float of the 2D y position of the browser on a players screen. This is affected by
 * the relative argument.
 * @param width The browsers native width. This should be greater than or equal to 1.
 * @param height The browsers native height. This should be greater than or equal to 1.
 * @param isLocal Sets whether the browser can only show local content or content from the internet
 * (see examples over CreateBrowser|here for more information)
 * @param isTransparent true if you want the browser to support transparency, false otherwise
 * @param isRelative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing sizes/positions as a fraction of the
 * screen size. If false, then the size and co-ordinates are based on clients resolution, accessible
 * using guiGetScreenSize.  {{New feature/item|3.0160|1.6||Providing a size of (0,0) will be a hard
 * error.}}
 * @param parent This is the parent that the radio button is attached to. If the relative argument
 * is true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is passed,
 * the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns a [[gui-browser]] element if it was created successfully, ''false'' otherwise.
 * Returns also ''false'', if the user disabled remote pages and ''isLocal'' was set to ''false''.
 */
export function guiCreateBrowser(
    x: number,
    y: number,
    width: number,
    height: number,
    isLocal: boolean,
    isTransparent: boolean,
    isRelative: boolean,
    parent?: Element,
): GuiBrowser;

/**
 * This function gets the browser element behind a gui-browser (a browser that has been created via
 * [[guiCreateBrowser]]).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetBrowser|MTASA Wiki}
 * @return Returns the [[Element/Browser|Browser]] element if a correct
 * [[Element/gui-browser|gui-browser]] has been passed, ''false'' otherwise.
 */
export function guiGetBrowser(browser: Gui): Browser;
