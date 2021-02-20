/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Gui, GuiMemo, GuiScrollBar, ProgressBar, Table } from 'types/mtasa/client/structure';

/**
 * This function brings a GUI element on top of others.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiBringToFront|MTASA Wiki}
 * @param guiElement the GUI element that you want to move to the front.
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function guiBringToFront(guiElement: Element): boolean;

/**
 * Returns information about how the chatbox looks.
 * These values come from the file called: [[Chatboxpresets.xml]] but it depends on what type of
 * preset you currently have, which is chosen from your settings in the 'Interface' tab.
 * @see {@link https://wiki.multitheftauto.com/wiki/getChatboxLayout|MTASA Wiki}
 * @param CVar the name of the property you want returned. Can be the following values:
 * @return *4 numbers if the CVar contains "color"
 * * *2 numbers if '''chat_scale''' was entered
 * * *1 number if any other CVar was specified
 * * *a table of all CVar values, if CVar was not specified
 * * *''false'' if an invalid CVar was specified
 */
export function getChatboxLayout(CVar: string): boolean | number | Table;

/**
 * This function creates a [[GUI font]] element that can be used in [[guiSetFont]]. Successful font
 * creation is not guaranteed, and may fail due to hardware or memory limitations.
 * To see if creation is likely to fail, use [[dxGetStatus]]. (When '''VideoMemoryFreeForMTA''' is
 * zero, failure ''is'' guaranteed.)
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateFont|MTASA Wiki}
 * @param filepath the name of the file containing the font
 * @param size size of the font
 * @default 9
 * @return Returns a [[GUI font]] element if successful, ''false'' if invalid arguments were passed
 * to the function, or there is insufficient resources available.
 * * '''You should always check to see if this function has returned false.'''
 */
export function guiCreateFont(filepath: string, size?: number): Element;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiBlur|MTASA Wiki}
 * @param guiElement the GUI element that you want to defocus
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function guiBlur(guiElement: Element): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiFocus|MTASA Wiki}
 * @param guiElement the GUI element that you want to focus
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function guiFocus(guiElement: Element): boolean;

/**
 * Alpha represents the transparency of a gui element.  This function allows retrieval of a gui
 * element's current alpha.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetAlpha|MTASA Wiki}
 * @param guiElement The gui element in which you want to retrieve the alpha of.
 * @return This function returns a positive integer in between 0 and 1 of the gui element's current
 * alpha, or false if it could not be retrieved.
 */
export function guiGetAlpha(guiElement: Element): number;

/**
 * This function is used to get the type of the current cursor image.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetCursorType|MTASA Wiki}
 * @return Returns a string containing the cursor type:
 * * * '''"none"'''            // cursor has no image
 * * * '''"arrow"'''           // default cursor
 * * * '''"sizing_ns"'''       // N-S (up-down) sizing cursor
 * * * '''"sizing_ew"'''       // E-W (left-right) sizing cursor
 * * * '''"sizing_nwse"'''     // NW-SE diagonal sizing cursor
 * * * '''"sizing_nesw"'''     // NE-SW diagonal sizing cursor
 * * * '''"sizing_eswe"'''     // ES-WE horizontal sizing cursor
 * * * '''"move"'''            // move cursor
 * * * '''"container_drag"'''  // drag container cursor (note: not in use)
 * * * '''"segment_moving"'''  // segment moving cursor (note: not in use)
 * * * '''"segment_sizing"'''  // segment sizing cursor (note: not in use)
 */
export function guiGetCursorType(): string;

/**
 * This function determines if a GUI element is enabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetEnabled|MTASA Wiki}
 * @param guiElement the GUI element to be checked.
 * @return Returns ''true'' if the element is enabled, ''false'' otherwise.
 */
export function guiGetEnabled(guiElement: Element): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function is used to get the current font that is used to draw text in GUI elements.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetFont|MTASA Wiki}
 * @param guiElement element you wish to get the font of.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * *'''string''' A string containing the name of the element's current font, or false if the gui
 * element passed to the function is invalid.
 * * *'''element ''' The custom [[GUI font]] that is used, or nil otherwise
 */
export function guiGetFont(guiElement: Element): LuaMultiReturn<[string, Element]>;

/**
 * This function checks whether user input is focused on the GUI or the game.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetInputEnabled|MTASA Wiki}
 * @return Returns ''true'' if input is focused on GUI, ''false'' if it's focused on the game.
 */
export function guiGetInputEnabled(): boolean;

/**
 * This function returns the current input mode as set by [[guiSetInputMode]].
 * Default mode is ''"allow_binds"''.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetInputMode|MTASA Wiki}
 * @return Returns a string defining the current input mode, potential values are:
 * * * '''"allow_binds":''' binds are enabled, hence using a key such as t in an editbox will still
 * activate the chatbox
 * * * '''"no_binds":''' binds are disabled, hence using a key such as t in an editbox will not
 * activate the chatbox
 * * * '''"no_binds_when_editing":''' binds are always enabled except when an editable editbox or
 * memo has input focus
 */
export function guiGetInputMode(): string;

/**
 * This function allows retrieval of a GUI element's current position, relative to its parent.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetPosition|MTASA Wiki}
 * @param guiElement The gui element of which you wish to retrieve the position.
 * @param relative A boolean representing whether the position should be relative to the elements
 * parent width, or the number of offset pixels from the parents origin.
 * @return Returns floats representing the ''x'' and ''y'' position of the element, or false if the
 * position could not be retrieved.
 */
export function guiGetPosition(guiElement: Element, relative: boolean): LuaMultiReturn<[number, number]>;

/**
 * This function gets a list of the CEGUI property names and values of a GUI element. To find out
 * what the different properties mean, check out the
 * [http://static.cegui.org.uk/static/WindowsLookProperties.html CEGUI properties page].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetProperties|MTASA Wiki}
 * @param guiElement the GUI element you wish to get the properties of.
 * @return If the function succeeds, the return value is a table. Its keys are property names, the
 * corresponding values are the values of the properties (both names and values are always strings). If
 * the function fails, it returns ''false''.
 */
export function guiGetProperties(guiElement: Element): Table;

/**
 * This function gets the value of a specific CEGUI property of a GUI element. For a list of
 * properties and their meaning, see the [http://static.cegui.org.uk/static/WindowsLookProperties.html CEGUI
 * properties page].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetProperty|MTASA Wiki}
 * @param guiElement the GUI element you wish to get a property of.
 * @param property the name of of property you want the value of.
 * @return If the function succeeds, it returns a string with the value of the property. If it
 * fails, it returns ''false''.
 */
export function guiGetProperty(guiElement: Element, property: string): string;

/**
 * This function retrieves the local screen size according to the resolution they are using.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetScreenSize|MTASA Wiki}
 * @return This returns two floats representing the player's screen resolution, ''width'' and
 * ''height''.
 */
export function guiGetScreenSize(): LuaMultiReturn<[number, number]>;

/**
 * This function gets the size of a GUI element.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetSize|MTASA Wiki}
 * @param theElement The GUI element to get size of.
 * @param relative A boolean representing whether the size should be relative to the elements
 * parent width, or an absolute size in pixels.
 * @return Returns the GUI element size ''x'' and ''y'' if the function has been successful,
 * ''false'' otherwise.
 */
export function guiGetSize(theElement: Element, relative: boolean): LuaMultiReturn<[number, number]>;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function is used to get the text of GUI elements like edit boxes, labels, buttons etc.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetText|MTASA Wiki}
 * @param guiElement element you wish to get text of.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns a string containing the requested element's text, or false if the gui element passed
 * to the function is invalid.
 */
export function guiGetText(guiElement: Element): string;

/**
 * This function determines if a GUI element is visible.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetVisible|MTASA Wiki}
 * @param guiElement the GUI element to be checked
 * @return Returns ''true'' if the element is visible, ''false'' otherwise.
 */
export function guiGetVisible(guiElement: Element): boolean;

/**
 * This function moves a GUI element to the very back of all other GUI elements.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiMoveToBack|MTASA Wiki}
 * @param guiElement the GUI element that you want to move to the back
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function guiMoveToBack(guiElement: Element): boolean;

/**
 * This changes the alpha level (the visibleness/transparency) of a GUI element
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetAlpha|MTASA Wiki}
 * @param alpha The visibility/transparency of the GUI element. Ranges from 0 (fully transparent)
 * to 1 (fully opaque). Default value is 0.80.
 * @return Returns ''true'' if the gui element's alpha was successfully changed, ''false''
 * otherwise.
 */
export function guiSetAlpha(guielement: Element, alpha: number): boolean;

/**
 * This function enables/disables a GUI element. A disabled GUI element can't be used, gets a gray
 * aspect and doesn't receive any events.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetEnabled|MTASA Wiki}
 * @param guiElement the GUI element you wish to enable or disable
 * @param enabled the new state
 * @return If the function succeeds it returns ''true'', if it fails it returns ''false''.
 */
export function guiSetEnabled(guiElement: Element, enabled: boolean): boolean;

/**
 * This function sets the font of a [[GUI_widgets|GUI element]] to be used when drawing text.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetFont|MTASA Wiki}
 * @param guiElement The GUI element you wish to change the font of
 * @param font Either a custom GUI font element or the name of a built-in GUI font. See Standard
 * GUI Font Names
 * @return Returns ''true'' if the font has been successfully set on the gui element, ''false''
 * otherwise.
 */
export function guiSetFont(guiElement: Element, font: string): boolean;

/**
 * This function enables or disables input focus for the GUI.  This means that any keybinds or MTA
 * binds are overidden so that text can be input into an editbox, for example.  In other words, keys
 * such as ''t'' and ''y'' which activate the chatbox are disabled.
 * [[guiSetInputMode]] can be used as an extended version of ''guiSetInputEnabled'' since it
 * provides the same functionality with one added feature.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetInputEnabled|MTASA Wiki}
 * @param enabled true if input should go to GUI, false if it should go to the game.
 * @return Returns ''true'' if input mode could be changed, ''false'' if invalid parameters are
 * passed.
 */
export function guiSetInputEnabled(enabled: boolean): boolean;

/**
 * This function controls the input mode to define whether or not (and when) keybinds or MTA binds
 * are overridden (disabled) so that text can be input into an editbox, for example.
 * The binds can be either:
 * * never disabled (hence using a key such as t in an editbox will still activate the chatbox)
 * * always disabled (hence using a key such as t in an editbox will not activate the chatbox)
 * * only disabled when actually editing an editbox or a memo (binds are always enabled except when
 * an editbox or memo has input focus)
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetInputMode|MTASA Wiki}
 * @param mode a string representing the desired input mode. Accepted values are:
 * @return Returns ''true'' if input mode could be changed, ''false'' if invalid parameters are
 * passed.
 */
export function guiSetInputMode(mode: string): boolean;

/**
 * This function sets the position of a GUI element.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetPosition|MTASA Wiki}
 * @param theElement The GUI element to change position for
 * @param x Position over the X axis
 * @param y Position over the Y axis
 * @param relative Bool that indicates if the x/y positions are relative to the elements parent
 * element.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the position has been successfully set, ''false'' otherwise.
 */
export function guiSetPosition(theElement: Element, x: number, y: number, relative: boolean): boolean;

/**
 * This function sets the value of a specific CEGUI property of a GUI element. For a list of
 * properties and their meaning, see the [http://static.cegui.org.uk/static/WindowsLookProperties.html CEGUI
 * properties page].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetProperty|MTASA Wiki}
 * @param guiElement the GUI element you wish to get a property of.
 * @param property the name of of property you want the value of.
 * @param value the new value for the property.
 * @return If the function succeeds it returns ''true'', if it fails it returns ''false''.
 */
export function guiSetProperty(guiElement: Element, property: string, value: string): boolean;

/**
 * This function sets the dimensions (size) of a GUI element. It refers to the bounding box size
 * for GUI elements. It does not make GUI elements smaller or larger in appearance.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetSize|MTASA Wiki}
 * @param guiElement the GUI element whose visibility is to be changed
 * @param width The desired width setting for the gui element
 * @param height The desired height setting for the gui element
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * @return Returns ''true'' if the gui element's size was set successfully, ''false'' otherwise.
 */
export function guiSetSize(guiElement: Element, width: number, height: number, relative: boolean): boolean;

/**
 * This function sets the text of a GUI element.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetText|MTASA Wiki}
 * @param guiElement The GUI element you wish to change the text of
 * @param text The new text
 * @return Returns ''true'' if text has been successfully set on the gui element, ''false''
 * otherwise.
 */
export function guiSetText(guiElement: Element, text: string): boolean;

/**
 * This function changes the visibility state of a GUI element.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetVisible|MTASA Wiki}
 * @param guiElement the GUI element whose visibility is to be changed
 * @param state the new visibility state
 * @return Returns ''true'' if the element's visibility could be changed, ''false'' otherwise.
 */
export function guiSetVisible(guiElement: Element, state: boolean): boolean;

/**
 * This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isChatBoxInputActive|MTASA Wiki}
 * @return Returns ''true'' if the chatbox is receiving input, ''false'' if not active.
 */
export function isChatBoxInputActive(): boolean;

/**
 * This function returns whether the ingame console window is visible or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isConsoleActive|MTASA Wiki}
 * @return Returns ''true'' if the console is visible, ''false'' if not.
 */
export function isConsoleActive(): boolean;

/**
 * This function returns whether the ingame debug window is visible or not. This is the debugwindow
 * visible using the "debugscript <level>" command.
 * @see {@link https://wiki.multitheftauto.com/wiki/isDebugViewActive|MTASA Wiki}
 * @return Returns ''true'' if the debug view is visible, ''false'' if not.
 */
export function isDebugViewActive(): boolean;

/**
 * This function returns whether the user is in the mainmenu or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isMainMenuActive|MTASA Wiki}
 * @return Returns ''true'' if the mainmenu is visible, ''false'' if not.
 */
export function isMainMenuActive(): boolean;

/**
 * This function returns whether any system windows that take focus are active. This includes:
 * * Chatbox input
 * * Console window
 * * Main menu
 * * Transferbox
 * To get the status of the debug view, see [[isDebugViewActive]].
 * @see {@link https://wiki.multitheftauto.com/wiki/isMTAWindowActive|MTASA Wiki}
 * @return Returns ''true'' if the focus is on the MTA window, ''false'' if it isn't.
 */
export function isMTAWindowActive(): boolean;

/**
 * This function returns whether the file downloading dialog box is active or not. This appears
 * when a resource is started and the client doesn't have all the files that resource requires the client
 * to have.
 * It's important to note that resources aren't started on the client until they're completely
 * downloaded, so a resource cannot use this function to detect if it's own files are downloaded. A
 * client-side resource triggers the [[onClientResourceStart]] event when the files it requires are downloaded.
 * @see {@link https://wiki.multitheftauto.com/wiki/isTransferBoxActive|MTASA Wiki}
 * @return Returns ''true'' if the file transfer box is visible, ''false'' if not.
 */
export function isTransferBoxActive(): boolean;

/**
 * This function enables or disables the debug window.
 * @see {@link https://wiki.multitheftauto.com/wiki/setDebugViewActive|MTASA Wiki}
 * @param enabled true if debug window should be visible, false otherwise.
 * @return Returns ''true'', ''false'' if invalid parameters are passed.
 */
export function setDebugViewActive(enabled: boolean): boolean;

/**
 * This function allows creation of a GUI Button, which is a clickable item as part of GUI.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateButton|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI button on a players screen.  This is affected
 * by the relative argument.
 * @param y A float of the 2D y position of the GUI button on a players screen. This is affected by
 * the relative argument.
 * @param width A float of the width of the GUI button. This is affected by the relative argument.
 * @param height A float of the height of the GUI button. This is affected by the relative argument.
 * @param text A string of the text that will be displayed as a label on the button.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x, y, width and height floats must be between 0 and 1, representing sizes relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the gui button is attached to.  If the relative argument
 * is true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is passed,
 * the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns an [[element]] of the created [[Element/GUI/Button|button]] if it was
 * successfully created, false otherwise.
 */
export function guiCreateButton(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function gets a checkbox's selection state.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCheckBoxGetSelected|MTASA Wiki}
 * @return Returns ''true'' if the checkbox is selected, ''false'' if it is not.
 */
export function guiCheckBoxGetSelected(theCheckbox: Element): boolean;

/**
 * This function selects (ticks) or unselects a checkbox.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCheckBoxSetSelected|MTASA Wiki}
 * @param theCheckbox The GUI element in which you wish to change the selection state of
 * @param state The state of the checkbox, where true indicates selected, and false indicates
 * unselected.
 * @return Returns ''true'' if the checkbox's selection state was successfully set, ''false''
 * otherwise.
 */
export function guiCheckBoxSetSelected(theCheckbox: Element, state: boolean): boolean;

/**
 * This function creates a [[Element/GUI/Checkbox|checkbox]].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateCheckBox|MTASA Wiki}
 * @param x A float of the 2D x position of the checkbox on a players screen. This is affected by
 * the relative argument.
 * @param y A float of the 2D y position of the checkbox on a players screen. This is affected by
 * the relative argument.
 * @param width A float of the width of the text field next to the checkbox. This is affected by
 * the relative argument.
 * @param height A float of the height of the text field next to the checkbox. This is affected by
 * the relative argument.
 * @param text The text to be displayed next to the checkbox.
 * @param selected A boolean representing whether the checkbox created should be selected by
 * default.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the checkbox is attached to. If the relative argument is
 * true, sizes and positioning will be made relative to this parent. If the relative argument is false,
 * positioning will be the number of offset pixels from the parents origin. If no parent is passed, the
 * parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns [[element]] of the checkbox if it was created succesfully, ''false'' otherwise.
 */
export function guiCreateCheckBox(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    selected: boolean,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function creates a combobox GUI element, which you can compare to a gridlist with a
 * dropdown feature.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateComboBox|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI combobox on a players screen.  This is affected
 * by the relative argument.
 * @param y A float of the 2D y position of the GUI combobox on a players screen. This is affected
 * by the relative argument.
 * @param width A float of the width of the GUI combobox. This is affected by the relative argument.
 * @param height A float of the height of the GUI combobox. This is affected by the relative
 * argument. Note: height must be enough to fit the drop down menu, else the drop down wont appear.
 * @param caption A string for what the title of your combobox will be. This will be shown if no
 * item is selected.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the GUI combobox is attached to.  If the relative argument
 * is true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is
 * passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns an element of the created combobox if it was successfully created, false
 * otherwise.
 */
export function guiCreateComboBox(
    x: number,
    y: number,
    width: number,
    height: number,
    caption: string,
    relative: boolean,
    parent: Element,
): Element;

/**
 * Adds an item to a combobox.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxAddItem|MTASA Wiki}
 * @param comboBox The combobox you want to add a row to
 * @param value The text that the item will contain.
 * @return Returns the item ID if it has been created, ''false'' otherwise.
 */
export function guiComboBoxAddItem(comboBox: Element, value: string): number;

/**
 * This function removes all the items from a combobox.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxClear|MTASA Wiki}
 * @param comboBox The combobox element to be cleared
 * @return Returns ''true'' if the combobox element is valid and has been cleared successfully,
 * ''false'' otherwise.
 */
export function guiComboBoxClear(comboBox: Element): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxGetItemCount|MTASA Wiki}
 * @param comboBox The combo box to get the number of items from.
 * @return Returns the number of items if the function is successful, ''false'' otherwise.
 */
export function guiComboBoxGetItemCount(comboBox: Element): number;

/**
 * This function retrieves the text from a specific combobox item.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxGetItemText|MTASA Wiki}
 * @param comboBox The combobox containing the item youre interested in
 * @param itemId The index of the item
 * @return Returns the text of the item if the arguments are right, ''false'' otherwise.
 */
export function guiComboBoxGetItemText(comboBox: Element, itemId: number): string;

/**
 * This function returns the index of the selected combobox item.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxGetSelected|MTASA Wiki}
 * @param comboBox the combobox you want to know the selected item index of
 * @return Returns the index of the selected item if the specified combobox is valid and has a
 * selected item, ''-1'' if no item is selected, ''nil'' otherwise.
 */
export function guiComboBoxGetSelected(comboBox: Element): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxIsOpen|MTASA Wiki}
 * @param comboBox The combo box to get the state.
 * @return Returns ''true'' if combobox is opened, ''false'' if combobox is closed, ''nil''
 * otherwise.
 */
export function guiComboBoxIsOpen(comboBox: Element): boolean;

/**
 * This function removes an item from a combobox.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxRemoveItem|MTASA Wiki}
 * @param comboBox The combobox containing the item youre interested in
 * @param itemId The index of the item to remove
 * @return Returns ''true'' if the item was removes successfully, ''false'' otherwise.
 */
export function guiComboBoxRemoveItem(comboBox: Element, itemId: number): boolean;

/**
 * This function changes the text of a combobox item.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxSetItemText|MTASA Wiki}
 * @param comboBox The combobox containing the item youre interested in
 * @param itemId The index of the item
 * @param text The text you want to put in (does NOT accept numbers, use tostring() for that)
 * @return Returns ''true'' if the text was set successfully, ''false'' otherwise.
 */
export function guiComboBoxSetItemText(comboBox: Element, itemId: number, text: string): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxSetOpen|MTASA Wiki}
 * @param comboBox The combobox to be opened or closed.
 * @param state The state of combobox. true, if the combobox is to be opened. false if the combobox
 * is to be closed.
 * @return Returns true if is successful, ''false'' otherwise.
 */
export function guiComboBoxSetOpen(comboBox: Element, state: boolean): boolean;

/**
 * This function sets the selected item from a combobox.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxSetSelected|MTASA Wiki}
 * @param comboBox the combobox you want to select an item from
 * @param itemIndex the item you want to select (item 0 is the first item). If -1 is specified,
 * then the combo box text is set to its caption.
 * @return Returns ''true'' if the selected item has been changed successfully, ''false'' otherwise.
 */
export function guiComboBoxSetSelected(comboBox: Element, itemIndex: number): boolean;

/**
 * [[Image:Gui-edit.png|frame|Example GUI edit field.]]
 * This function is for creating a new GUI edit box. This is a text box in which the user can input
 * text. Edit boxes only allow a single line of text. If you want to allow multiple lines of text
 * create a memo box using [[guiCreateMemo]].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateEdit|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI edit box on a players screen.  This is affected
 * by the relative argument.
 * @param y A float of the 2D y position of the GUI edit box on a players screen. This is affected
 * by the relative argument.
 * @param width A float of the width of the GUI edit box. This is affected by the relative argument.
 * @param height A float of the height of the GUI edit box. This is affected by the relative
 * argument.
 * @param text A string of the text that will be displayed by default in the edit box.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the GUI edit box is attached to.  If the relative argument
 * is true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is
 * passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns a gui-edit element of the created edit box if it was successfully created, false
 * otherwise.
 */
export function guiCreateEdit(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    relative: boolean,
    parent?: Element,
): Element;

/**
 * This function returns the caret (the text cursor) position within the editbox.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditGetCaretIndex|MTASA Wiki}
 * @param theElement The edit box you want to get the caret position from
 * @return Returns the caret index on success, ''false'' otherwise.
 */
export function guiEditGetCaretIndex(theElement: Element): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditGetMaxLength|MTASA Wiki}
 * @return Returns the maximum text length on success, ''false'' otherwise.
 */
export function guiEditGetMaxLength(edit: Gui): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditIsMasked|MTASA Wiki}
 * @return Returns ''true'' if the edit box is masked, ''false'' if not, ''nil'' if an invalid edit
 * box was provided.
 */
export function guiEditIsMasked(edit: Gui): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditIsReadOnly|MTASA Wiki}
 * @return Returns ''true'' if the edit box is read-only, ''false'' if not, ''nil'' if an invalid
 * edit box was provided.
 */
export function guiEditIsReadOnly(edit: Gui): boolean;

/**
 * This function sets the current position of the caret (the text cursor) within the edit box.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetCaretIndex|MTASA Wiki}
 * @param theElement The edit box to be changed.
 * @param index An integer referring to the desired position within the box.
 * @return Returns ''true'' if the index was successfully set, ''false'' otherwise.
 */
export function guiEditSetCaretIndex(theElement: Element, index: number): boolean;

/**
 * This function sets or removes masking (covering up the text being typed) for password text
 * fields.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetMasked|MTASA Wiki}
 * @param theElement The edit box to be changed.
 * @param status A boolean value indicating whether masking is to be enabled or disabled.
 * @return Returns ''true'' if the function is successful, ''false'' otherwise.
 */
export function guiEditSetMasked(theElement: Element, status: boolean): boolean;

/**
 * This function sets the maximum text length that can be typed into an edit box.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetMaxLength|MTASA Wiki}
 * @param length An integer indicating the maximum number of characters that can be typed into the
 * box.
 * @return Returns ''true'' if the max length was set successfully, ''false'' otherwise.
 */
export function guiEditSetMaxLength(guiEdit: Element, length: number): boolean;

/**
 * This function allows you to set or remove read-only status for an edit box. If read-only is set
 * to ''true'', the box is not editable.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetReadOnly|MTASA Wiki}
 * @param editField The element of the Element/GUI/Edit field|edit field to be modified.
 * @param status A boolean value indicating whether read-only is to be enabled or disabled.
 * @return Returns ''true'' if edit field's read-only status was changed successfully, ''false''
 * otherwise.
 */
export function guiEditSetReadOnly(editField: Element, status: boolean): boolean;

/**
 * This function creates a grid list GUI element.  These are menu's which are designed in lists and
 * can have multiple columns.  A good example of a gridlist element can be found in MTA's settings
 * box, under ''Controls''.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateGridList|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI gridlist on a players screen.  This is affected
 * by the relative argument.
 * @param y A float of the 2D y position of the GUI gridlist on a players screen. This is affected
 * by the relative argument.
 * @param width A float of the width of the GUI gridlist. This is affected by the relative argument.
 * @param height A float of the height of the GUI gridlist. This is affected by the relative
 * argument.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the gui gridlist is attached to.  If the relative argument
 * is true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is
 * passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns an element of the created gridlist if it was successfully created, false
 * otherwise.
 */
export function guiCreateGridList(
    x: number,
    y: number,
    width: number,
    height: number,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function is used to create columns in grid lists.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListAddColumn|MTASA Wiki}
 * @param gridList The grid list you want to add a column to
 * @param title Title of the column
 * @param width Column width, relative to the grid list width
 * @return Returns the column id if it was created, ''false'' otherwise.
 */
export function guiGridListAddColumn(gridList: Element, title: string, width: number): number;

/**
 * Adds a row to a grid list, and optionally add simple text items with your rows.  Use
 * [[guiGridListSetItemText]] to add row headers.
 * ATTENTION: Without [[guiGridListSetItemText]] there is no row added to the grid.
 * Look at the example, first you give the row a name with '''[[row =]]''' guiGridListAddRow (
 * playerList ), and then you use [[guiGridListSetItemText]]. }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListAddRow|MTASA Wiki}
 * @param gridList The grid list you want to add a row to  {{New feature/item|3.0153|1.5.3||
 * @return Returns the row id if it has been created, ''false'' otherwise.
 */
export function guiGridListAddRow(
    gridList: Element,
    itemText1?: number | string,
    itemText2?: number | string,
    ...args: any[]
): number;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This allows you to automatically size a column to display everything in it correctly, with the
 * most minimal width.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListAutoSizeColumn|MTASA Wiki}
 * @param gridList The Element/GUI/Gridlist|grid list element where the column is located.
 * @param columnIndex The ID of the column you want to be auto-sized.
 * @return Returns ''true'' if the column was auto-sized, ''false'' otherwise.
 */
export function guiGridListAutoSizeColumn(gridList: Element, columnIndex: number): boolean;

/**
 * This function clears all the data from a grid list.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListClear|MTASA Wiki}
 * @param gridList The grid list element to be cleared
 * @return Returns ''true'' if the grid list element is valid and has been cleared successfully,
 * ''false'' otherwise.
 */
export function guiGridListClear(gridList: Element): boolean;

/**
 * This allows you to get the count of existing columns in a gridlist.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetColumnCount|MTASA Wiki}
 * @param gridList The grid list you want to add a column to
 * @return Returns an integer with the amount of columns in the gridlist, false otherwise.
 */
export function guiGridListGetColumnCount(gridList: Element): number;

/**
 * This function is used to get the column title of a gridlist column.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetColumnTitle|MTASA Wiki}
 * @param guiGridlist : The grid list you want to get the column title from
 * @param columnIndex : Column ID
 * @return Returns a string containing the column title, or ''false'' otherwise.
 */
export function guiGridListGetColumnTitle(guiGridlist: Element, columnIndex: number): string;

/**
 * This allows you to get the width of an existing column in a gridlist.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetColumnWidth|MTASA Wiki}
 * @param gridList The grid list you want to add a column to
 * @param columnIndex Column ID of the Get size
 * @param relative A boolean defining whether width measurements will be relative to the Gridlist
 * size, or absolute pixels.
 * @return Returns the width of the gridlist column, ''false'' if bad arguments were given.
 */
export function guiGridListGetColumnWidth(gridList: Element, columnIndex: number, relative: boolean): number;

/**
 * This function is used to get the horizontal scroll position from a grid list
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetHorizontalScrollPosition|MTASA
 * Wiki}
 * @param guiGridlist : The grid list you want to get the horizontal scroll position from
 * @return Returns a integer between 0 and 100 indicating the horizontal scroll position, or
 * ''false'' otherwise.
 */
export function guiGridListGetHorizontalScrollPosition(guiGridlist: Element): number;

/**
 * This function gets the color of a gridlist item.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetItemColor|MTASA Wiki}
 * @param gridList The grid list element
 * @param rowIndex Row ID
 * @param columnIndex Column ID
 * @return Returns four ''int'' values, representing the amount of red, green, blue and alpha if
 * successful. ''false'' otherwise.
 */
export function guiGridListGetItemColor(
    gridList: Element,
    rowIndex: number,
    columnIndex: number,
): LuaMultiReturn<[number, number, number, number]>;

/**
 * With this function you can retrieve the [[string]] data associated with an item in a
 * [[Element/GUI/Gridlist|grid list]]. This is not the text that is displayed on the item, but an internal string
 * that you can use to hold extra information about the item.<br/>
 * '''Note:''' This function will only work '''after''' you set the item's text using
 * [[guiGridListSetItemText]]!
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetItemData|MTASA Wiki}
 * @param gridList the grid list containing the item youre interested in
 * @param rowIndex the row index of the item
 * @param columnIndex the column index of the item
 * @return Returns the item data of the specified item if succesful, ''false'' if one of the
 * arguments was invalid.
 */
export function guiGridListGetItemData(gridList: Element, rowIndex: number, columnIndex: number): any;

/**
 * This function retrieves the text from a specific grid list item.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetItemText|MTASA Wiki}
 * @param gridList the gridlist containing the item youre interested in
 * @param rowIndex row id of the item
 * @param columnIndex column id of the item
 * @return Returns the text of the item if the arguments are right, ''false'' otherwise.
 */
export function guiGridListGetItemText(gridList: Element, rowIndex: number, columnIndex: number): string;

/**
 * This function returns the number of rows in a grid list.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetRowCount|MTASA Wiki}
 * @param gridList The grid list to get the number of rows from.
 * @return Returns the number of rows if the function is successful, ''false'' otherwise.
 */
export function guiGridListGetRowCount(gridList: Element): number;

/**
 * This function returns the amount of options selected in the specified
 * [[Element/GUI/Gridlist|grid list]].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectedCount|MTASA Wiki}
 * @param gridList The Element/GUI/Gridlist|grid list which amount of selected items you want to
 * retrieve.
 * @return Returns an [[int]]eger representing the amount of selected options if everything was
 * successful or ''false'' if invalid arguments were passed.
 */
export function guiGridListGetSelectedCount(gridList: Element): number;

/**
 * This function returns the row and column indexes of the selected item in a grid list. First
 * selected row and column is (0, 0).
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectedItem|MTASA Wiki}
 * @param gridList the grid list you want to know the selected row index of
 * @return Returns the row and column indexes of the selected item if the specified grid list is
 * valid and has a selected item, (-1, -1) if no item is selected, ''false'' otherwise.
 */
export function guiGridListGetSelectedItem(gridList: Element): LuaMultiReturn<[number, number]>;

/**
 * This function returns the items selected in the specified [[Element/GUI/Gridlist|grid list]].
 * Note that for some reason the column ID is 1 lower than it should be, for example 0 is returned
 * but if you try and get the text for column 0 there is nothing, but column 1 has what you clicked on.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectedItems|MTASA Wiki}
 * @param gridList The Element/GUI/Gridlist|grid list which selected items you want to retrieve.
 * @return Returns a table over the selected items in the [[Element/GUI/Gridlist|grid list]] in
 * this format:
 * * <syntaxhighlight lang="lua">
 * * table = {
 * *     [1] = {
 * *         ["column"], -- has the first selected item's column ID
 * *         ["row"] -- has the first selected item's row ID
 * *     },
 * *     [2] = {
 * *         ["column"],-- has the second selected item's column ID
 * *         ["row"] -- has the second selected item's row ID
 * *     },
 * *     ...
 * * }
 * * </syntaxhighlight>
 * * if everything was successful or ''false'' if invalid arguments were passed.
 */
export function guiGridListGetSelectedItems(gridList: Element): Table;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectionMode|MTASA Wiki}
 * @return Returns the ID of the current gridlist's selection mode.
 * * {{GUI_gridList_selection_modes_IDs}}
 */
export function guiGridListGetSelectionMode(Element: Gui): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListIsSortingEnabled|MTASA Wiki}
 * @param guiGridlist The GUI gridlist you wish to check if sorting is enabled or not.
 * @return Returns ''true'' if sorting is enabled, ''false'' otherwise.
 */
export function guiGridListIsSortingEnabled(guiGridlist: Element): boolean;

/**
 * This function is used to get the vertical scroll position from a grid list
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetVerticalScrollPosition|MTASA Wiki}
 * @param guiGridlist : The grid list you want to get the vertical scroll position from
 * @return Returns a integer between 0 and 100 indicating the vertical scroll position, or
 * ''false'' otherwise.
 */
export function guiGridListGetVerticalScrollPosition(guiGridlist: Element): number;

/**
 * This allows you to insert a new row after a specified row, and simultaneously set text. Good for
 * inserting new rows in the middle of existing rows. To insert at the top use -1 as row index.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListInsertRowAfter|MTASA Wiki}
 * @param gridList The grid list you want to add a row to
 * @param rowIndex Row ID of the row you want to insert the new row after.  {{New
 * feature/item|3.0153|1.5.3||
 * @return Returns ''true'' if the row was successfully added, ''false'' otherwise.
 */
export function guiGridListInsertRowAfter(gridList: Element, rowIndex: number): number;

/**
 * This allows you to delete columns that exist in grid lists.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListRemoveColumn|MTASA Wiki}
 * @param gridList The grid list you want to remove a column from
 * @param columnIndex Column ID
 * @return Returns ''true'' if the grid list column was successfully removed, ''false'' otherwise.
 */
export function guiGridListRemoveColumn(gridList: Element, columnIndex: number): boolean;

/**
 * This allows you to delete rows that exist in grid lists.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListRemoveRow|MTASA Wiki}
 * @param gridList The grid list you want to remove a row from
 * @param rowIndex The row ID which you want to remove
 * @return Returns ''true'' if the grid list row was successfully removed, ''false'' otherwise.
 */
export function guiGridListRemoveRow(gridList: Element, rowIndex: number): boolean;

/**
 * This function is used to change the column title of a gridlist column.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetColumnTitle|MTASA Wiki}
 * @param guiGridlist : The grid list you want to change the column title from
 * @param columnIndex : Column ID
 * @param title : The title of the column
 * @return Returns ''true'' if the new title was set, or ''false'' otherwise.
 */
export function guiGridListSetColumnTitle(guiGridlist: Element, columnIndex: number, title: string): boolean;

/**
 * This allows you to set the width of an existing column in a gridlist.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetColumnWidth|MTASA Wiki}
 * @param gridList The grid list you want to add a column to
 * @param columnIndex Column ID of the size you want to change
 * @param width A float or integer of the width of the column depending on the relative argument.
 * @param relative A boolean defining whether width measurements will be relative to the Gridlist
 * size, or absolute pixels.
 * @return Returns ''true'' if the gridlist column width was successfully set, ''false'' if bad
 * arguments were given.
 */
export function guiGridListSetColumnWidth(
    gridList: Element,
    columnIndex: number,
    width: number,
    relative: boolean,
): boolean;

/**
 * This function is used to set the horizontal scroll position from a grid list
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetHorizontalScrollPosition|MTASA
 * Wiki}
 * @param guiGridlist : The grid list you want to set the horizontal scroll position from
 * @param fPosition : A float representing the horizontal scroll position (0-100)
 * @return Returns ''true'' if the horizontal scroll position was set, or ''false'' otherwise.
 */
export function guiGridListSetHorizontalScrollPosition(guiGridlist: Element, fPosition: number): boolean;

/**
 * This function changes the color of a gridlist item.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetItemColor|MTASA Wiki}
 * @param gridList The grid list element
 * @param rowIndex Row ID
 * @param columnIndex Column ID
 * @param red The amount of red in the color (0-255)
 * @param green The amount of green in the color (0-255)
 * @param blue The amount of blue in the color (0-255)
 * @param alpha The amount of alpha in the color (0-255).
 * @default 255
 * @return Returns ''true'' if the item color was set successfully, ''false'' otherwise.
 */
export function guiGridListSetItemColor(
    gridList: Element,
    rowIndex: number,
    columnIndex: number,
    red: number,
    green: number,
    blue: number,
    alpha?: number,
): boolean;

/**
 * This function sets a Item Data associated to a grid list item.<br/>
 * '''Note:''' This function will only work '''after''' you set the item's text using
 * [[guiGridListSetItemText]]!
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetItemData|MTASA Wiki}
 * @param gridList A gridlist element of the data you wish to set to
 * @param rowIndex The row of the item you wish to set to
 * @param columnIndex The column of the item you wish to set to
 * @param data The data you wish to set to the item.
 * @return Returns ''true'' if the data was set successfully, false otherwise
 */
export function guiGridListSetItemData(gridList: Element, rowIndex: number, columnIndex: number, data: any): boolean;

/**
 * This function changes the text of a gridlist item.
 * Notice: This function doesn't work well with Sorting. If you are using sorting, please use the
 * optional arguments of [[guiGridListAddRow]] as much as possible.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetItemText|MTASA Wiki}
 * @param gridList The grid list element
 * @param rowIndex Row ID
 * @param columnIndex Column ID
 * @param text The text you want to put in (does NOT accept numbers, use tostring() for that)
 * @param section Determines if the item is a section
 * @param number Tells whether the text item is a number value or not (used for sorting)
 * @return Returns ''true'' if the item text was set successfully, ''false'' otherwise.
 */
export function guiGridListSetItemText(
    gridList: Element,
    rowIndex: number,
    columnIndex: number,
    text: string,
    section: boolean,
    number: boolean,
): boolean;

/**
 * This function allows a gridlist's scrollbar to be forced '''on''', or returned to default.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetScrollBars|MTASA Wiki}
 * @param guiGridlist The GUI gridlist you wish to change the state of scrollbars
 * @param horizontalBar A bool where true forces the horizontal scrollbar on, and false returns
 * them to default.
 * @param verticalBar A bool where true forces the verical scrollbar on, and false returns them to
 * default.
 * @return Returns ''true'' if the scrollbars were successfully set, ''false'' otherwise.
 */
export function guiGridListSetScrollBars(guiGridlist: Element, horizontalBar: boolean, verticalBar: boolean): boolean;

/**
 * This function selects an item from a gridlist. If you wish to deselect whatever item is
 * selected, pass ''0'' as both the ''rowIndex'' and  ''columnIndex'' arguments.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetSelectedItem|MTASA Wiki}
 * @param gridList the grid list you want to select an item from
 * @param rowIndex the row you want to select (index 0 is the first row)
 * @param columnIndex the column you want to select (index 1 is the first column)  {{New
 * feature|3.0111|1.1.1|  {{OptionalArg}}
 * @param bReset set to false for multiple selections  }}
 * @default true
 * @return Returns ''true'' if the passed arguments are correct and the item has been selected,
 * ''false'' otherwise.
 */
export function guiGridListSetSelectedItem(
    gridList: Element,
    rowIndex: number,
    columnIndex: number,
    bReset?: boolean,
): boolean;

/**
 * This function sets the selection mode of a gui gridlist.  For example, the MTA ''server
 * browser'' selects a whole row, while the ''Controls'' dialog selects a single cell. To select multiple items
 * you must be holding down 'ctrl'.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetSelectionMode|MTASA Wiki}
 * @param mode The mode of the selection.  Can be the following values:
 * @return Returns ''true'' if the selection mode was successfully set, false otherwise.
 */
export function guiGridListSetSelectionMode(Element: Gui, mode: number): boolean;

/**
 * This function allows the disabling or enabling of ''sorting'' within a gridlist.  Sorting is
 * achieved by clicking a column header.  Gridlist items will be sorted according to the clicked column.
 * By default, gridlists have sorting enabled.  This function will allow you to toggle this.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetSortingEnabled|MTASA Wiki}
 * @param guiGridlist The GUI gridlist you wish to toggle the sorting of.
 * @param enabled A boolean representing whether the sorting is enabled, or disabled.
 * @return Returns ''true'' if sorting was successfully toggled., ''false'' otherwise.
 */
export function guiGridListSetSortingEnabled(guiGridlist: Element, enabled: boolean): boolean;

/**
 * This function is used to set the vertical scroll position from a grid list
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetVerticalScrollPosition|MTASA Wiki}
 * @param guiGridlist : The grid list you want to set the vertical scroll position from
 * @param fPosition : A float representing the vertical scroll position (0-100)
 * @return Returns ''true'' if the vertical scroll position was set, or ''false'' otherwise.
 */
export function guiGridListSetVerticalScrollPosition(guiGridlist: Element, fPosition: number): boolean;

/**
 * This function creates a new GUI memo.  This is a multiline edit box in which the user can input
 * text.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateMemo|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI memo on a players screen.  This is affected by
 * the relative argument.
 * @param y A float of the 2D y position of the GUI memo on a players screen. This is affected by
 * the relative argument.
 * @param width A float of the width of the GUI memo. This is affected by the relative argument.
 * @param height A float of the height of the GUI memo. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by default in the memo.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the GUI memo is attached to.  If the relative argument is
 * true, sizes and positioning will be made relative to this parent. If the relative argument is false,
 * positioning will be the number of offset pixels from the parents origin. If no parent is passed,
 * the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns a gui-memo element of the created memo if it was successfully created, false
 * otherwise.
 */
export function guiCreateMemo(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    relative: boolean,
    parent?: Element,
): GuiMemo;

/**
 * This function returns the caret (the text cursor) position within the memo box.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoGetCaretIndex|MTASA Wiki}
 * @param theElement The memo box you want to get the caret position from
 * @return Returns the caret index on success, ''false'' otherwise.
 */
export function guiMemoGetCaretIndex(theElement: Element): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoGetVerticalScrollPosition|MTASA Wiki}
 * @return Returns a [[float]] ranging between 0 and 100, or '''false''' otherwise.
 */
export function guiMemoGetVerticalScrollPosition(memo: Gui): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoSetVerticalScrollPosition|MTASA Wiki}
 * @param position : a float ranging between 0 and 100.
 * @return Returns '''true''' if the position was set, '''false''' otherwise.
 */
export function guiMemoSetVerticalScrollPosition(memo: Gui, position: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoIsReadOnly|MTASA Wiki}
 * @return Returns ''true'' if the memo is read only, ''false'' if the memo isn't read only,
 * ''nil'' otherwise.
 */
export function guiMemoIsReadOnly(memo: Gui): boolean;

/**
 * This function sets the current position of the caret (the text cursor) within the memo.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoSetCaretIndex|MTASA Wiki}
 * @param index An integer referring to the desired character position within the box. 0 would be
 * before the first character in the box, 1 before the second, etc.
 * @return Returns ''true'' if the caret was successfully moved, ''false'' otherwise.
 */
export function guiMemoSetCaretIndex(memo: Gui, index: number): boolean;

/**
 * This function allows you to set or remove read-only status for a GUI memo. If read-only is set
 * to ''true'', the contents are not editable.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoSetReadOnly|MTASA Wiki}
 * @param status A boolean value indicating whether read-only is to be enabled or disabled.
 * @return Returns ''true'' if the status was successfully changed, ''false'' otherwise.
 */
export function guiMemoSetReadOnly(memo: Gui, status: boolean): boolean;

/**
 * This function creates a [[Element/GUI/Progress bar|progress bar]].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateProgressBar|MTASA Wiki}
 * @param x A float of the 2D x position of the progress bar on a players screen. This is affected
 * by the relative argument.
 * @param y A float of the 2D y position of the progress bar on a players screen. This is affected
 * by the relative argument.
 * @param width A float of the width of the progress bar. This is affected by the relative argument.
 * @param height A float of the height of the progress bar. This is affected by the relative
 * argument.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the progress bar is attached to. If the relative argument
 * is true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is passed,
 * the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns [[element]] of the progress bar if it was created succesfully, ''false''
 * otherwise.
 */
export function guiCreateProgressBar(
    x: number,
    y: number,
    width: number,
    height: number,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function gets the progress of a progress bar as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiProgressBarGetProgress|MTASA Wiki}
 * @param theProgressbar : The progressbar you want to check.
 * @return Returns a [[float]] ranging between 0 and 100.
 */
export function guiProgressBarGetProgress(theProgressbar: ProgressBar): number;

/**
 * This function is used to set the progress of a progressbar as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiProgressBarSetProgress|MTASA Wiki}
 * @param theProgressbar : The progressbar you want to change the progress of
 * @param progress : a float ranging from 0 - 100
 * @return Returns true if the progress was set, false otherwise.
 */
export function guiProgressBarSetProgress(theProgressbar: ProgressBar, progress: number): boolean;

/**
 * This function creates a [[Element/GUI/Radio button|radio button]].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateRadioButton|MTASA Wiki}
 * @param x A float of the 2D x position of the radio button on a players screen. This is affected
 * by the relative argument.
 * @param y A float of the 2D y position of the radio button on a players screen. This is affected
 * by the relative argument.
 * @param width A float of the width of the text field next to the radio button. This is affected
 * by the relative argument.
 * @param height A float of the height of the text field next to the radio button. This is affected
 * by the relative argument.
 * @param text The text to be displayed next to the radio button.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the radio button is attached to. If the relative argument
 * is true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is passed,
 * the parent will become the screen - causing positioning and sizing according to screen positioning.
 *  ''NOTE:'' All radio buttons become grouped together with their parent item.  Only ONE radio button
 * per group/parent will be able to be selected at the same time.
 * @default nil
 * @return Returns [[element]] of the radio button if it was created succesfully, ''false''
 * otherwise.
 */
export function guiCreateRadioButton(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function gets a radio button's selection state.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiRadioButtonGetSelected|MTASA Wiki}
 * @param guiRadioButton The radio button you wish to retrieve the selection state of.
 * @return Returns ''true'' if the radio button is selected, ''false'' if it is not.
 */
export function guiRadioButtonGetSelected(guiRadioButton: Element): boolean;

/**
 * This function selects or unselects a radio button.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiRadioButtonSetSelected|MTASA Wiki}
 * @param guiRadioButton The GUI radio button in which you wish to change the selection state of
 * @param state The state of the radio button, where true indicates selected, and false indicates
 * unselected.
 * @return Returns ''true'' if the radio button's selection state was successfully set, ''false''
 * otherwise.
 */
export function guiRadioButtonSetSelected(guiRadioButton: Element, state: boolean): boolean;

/**
 * This function creates a GUI scrollbar. You can use the functions
 * [[guiScrollPaneSetHorizontalScrollPosition]], [[guiScrollPaneSetVerticalScrollPosition]],
 * [[guiScrollPaneGetHorizontalScrollPosition]] and [[guiScrollPaneGetVerticalScrollPosition]] to read and modify the scrollbar's scroll.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateScrollBar|MTASA Wiki}
 * @param x the 2D x offset of the GUI scrollbar from its parent.  This is affected by the relative
 * argument.
 * @param y the 2D y offset of the GUI scrollbar from its parent. This is affected by the relative
 * argument.
 * @param width the width of the GUI scrollbar. This is affected by the relative argument.
 * @param height the height of the GUI scrollbar. This is affected by the relative argument.
 * @param horizontal whether this scrollbar is horizontal (true) or vertical (false).
 * @param relative whether sizes and positions are relative to their parents.  If this is true,
 * then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent
 * widgets size.
 * @return Returns a ''gui-scrollbar'' if it was created successfully, ''false'' otherwise.
 */
export function guiCreateScrollBar(
    x: number,
    y: number,
    width: number,
    height: number,
    horizontal: boolean,
    relative: boolean,
    element: Gui,
): GuiScrollBar;

/**
 * This function gets the scroll amount of a scrollbar as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollBarGetScrollPosition|MTASA Wiki}
 * @return Returns a [[float]] ranging between 0 and 100, representing the amount the scrollbar has
 * been scrolled.
 */
export function guiScrollBarGetScrollPosition(scrollBar: Gui): number;

/**
 * This function is used to set the scroll amount of a scrollbar as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollBarSetScrollPosition|MTASA Wiki}
 * @param amount : a float ranging from 0 - 100 representing the amount you wish to set the scroll
 * bar.
 * @return Returns true if the scroll position was successfully set, false otherwise.
 */
export function guiScrollBarSetScrollPosition(scrollBar: Gui, amount: number): boolean;

/**
 * This creates a GUI scroll pane.
 * [[Image:gui-scrollpane.png|frame|Example GUI ScrollPane.]]
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateScrollPane|MTASA Wiki}
 * @param x the 2D x offset of the GUI scrollpane from its parent. This is affected by the relative
 * argument.
 * @param y the 2D y offset of the GUI scrollpane from its parent. This is affected by the relative
 * argument.
 * @param width the width of the GUI scrollpane. This is affected by the relative argument.
 * @param height the height of the GUI scrollpane. This is affected by the relative argument.
 * @param relative whether sizes and positions are relative to their parents. If this is true, then
 * all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent
 * widgets size.
 * @return The gui-element if created, otherwise false.
 */
export function guiCreateScrollPane(
    x: number,
    y: number,
    width: number,
    height: number,
    relative: boolean,
    element: Gui,
): Element;

/**
 * This function is used to get the position of a horizontal scroll pane as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneGetHorizontalScrollPosition|MTASA
 * Wiki}
 * @param horizontalScrollPane : The scroll pane you want to know the position of
 * @return Returns a [[float]] ranging between 0 and 100, or '''false''' otherwise.
 */
export function guiScrollPaneGetHorizontalScrollPosition(horizontalScrollPane: Element): number;

/**
 * This function is used to get the position of a vertical scroll pane as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneGetVerticalScrollPosition|MTASA
 * Wiki}
 * @param verticalScrollPane : The scroll pane you want to know the position of
 * @return Returns a [[float]] ranging between 0 and 100, or '''false''' otherwise.
 */
export function guiScrollPaneGetVerticalScrollPosition(verticalScrollPane: Element): number;

/**
 * This function is used to set the position of a horizontal scroll pane as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneSetHorizontalScrollPosition|MTASA
 * Wiki}
 * @param horizontalScrollPane : The scroll pane you want to change the position of
 * @param position : a float ranging from 0 - 100
 * @return Returns '''true''' if the position was set, '''false''' otherwise.
 */
export function guiScrollPaneSetHorizontalScrollPosition(horizontalScrollPane: Element, position: number): boolean;

/**
 * This function allows a scrollpane's scrollbars to be forced '''on''', or returned to default.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneSetScrollBars|MTASA Wiki}
 * @param scrollPane the GUI scrollpane element you want to set the scrollbars of.
 * @param horizontal A bool where true forces the horizontal scrollbar on, and false returns them
 * to default.
 * @param vertical A bool where true forces the vertical scrollbar on, and false returns them to
 * default.
 * @return Returns ''true'' if the call was successfully, ''false'' otherwise.
 */
export function guiScrollPaneSetScrollBars(scrollPane: Element, horizontal: boolean, vertical: boolean): boolean;

/**
 * This function is used to set the position of a vertical scroll pane as a percentage.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneSetVerticalScrollPosition|MTASA
 * Wiki}
 * @param verticalScrollPane : The scroll pane you want to change the position of
 * @param position : a float ranging from 0 - 100
 * @return Returns '''true''' if the position was set, '''false''' otherwise.
 */
export function guiScrollPaneSetVerticalScrollPosition(verticalScrollPane: Element, position: number): boolean;

/**
 * This function creates a static image using a .png image in the resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateStaticImage|MTASA Wiki}
 * @param x A float of the 2D x position of the image on a players screen. This is affected by the
 * relative argument.
 * @param y A float of the 2D y position of the image on a players screen. This is affected by the
 * relative argument.
 * @param width A float of the width of the image. This is affected by the relative argument.
 * @param height A float of the height of the image. This is affected by the relative argument.
 * @param path The filepath of the image file that is being loaded.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the image is attached to. If the relative argument is
 * true, sizes and positioning will be made relative to this parent. If the relative argument is false,
 * positioning will be the number of offset pixels from the parents origin. If no parent is passed, the
 * parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns [[element]] if image was created successfully, ''false'' otherwise.
 */
export function guiCreateStaticImage(
    x: number,
    y: number,
    width: number,
    height: number,
    path: string,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function gets the native size of image. That means the original size in pixels of the image
 * file.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiStaticImageGetNativeSize|MTASA Wiki}
 * @param theImage The static image element to get the original size of.
 * @return Returns two integers where first is the width and second the height of the image in
 * pixels, ''false'' if the image element was invalid.
 */
export function guiStaticImageGetNativeSize(theImage: Element): LuaMultiReturn<[number, number]>;

/**
 * This function allows you to change the image in GUI static image element to another one.
 * '''Tip''': If you set other images as children you will have to use [[setElementCallPropagationEnabled]] to
 * only affect the parent image.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiStaticImageLoadImage|MTASA Wiki}
 * @param theElement The static image element to be changed.
 * @param filename A string specifying the filepath of the image file being loaded in current
 * resource.
 * @return Returns ''true'' if the the image in the static image element was successfully changed,
 * ''false'' otherwise.
 */
export function guiStaticImageLoadImage(theElement: Element, filename: string): boolean;

/**
 * This function creates a Tab Panel, which acts as a template to create Tabs upon.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateTabPanel|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI tab panel on a players screen.  This is
 * affected by the relative argument.
 * @param y A float of the 2D y position of the GUI tab panel on a players screen. This is affected
 * by the relative argument.
 * @param width A float of the width of the GUI tab panel. This is affected by the relative
 * argument.
 * @param height A float of the height of the GUI tab panel. This is affected by the relative
 * argument.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the tab panel is attached to.  If the relative argument is
 * true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is passed,
 * the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns a GUI tab panel element if successful, ''false'' otherwise.
 */
export function guiCreateTabPanel(
    x: number,
    y: number,
    width: number,
    height: number,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function returns the currently selected tab in the specified [[Element/GUI/Tab panel|tab
 * panel]].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiGetSelectedTab|MTASA Wiki}
 * @param tabPanel The Element/GUI/Tab panel|tab panel which current tab you want to retrieve.
 * @return Returns an [[element]] of the [[Element/GUI/Tab|tab]] if a tab was selected or [[nil]]
 * if no tab was selected. If passed arguments were invalid or something went wrong, the function will
 * return ''false''.
 */
export function guiGetSelectedTab(tabPanel: Element): Element;

/**
 * This function is used to change the currently selected [[Element/GUI/Tab|tab]] in a
 * [[Element/GUI/Tab panel|tab panel]].
 * @see {@link https://wiki.multitheftauto.com/wiki/guiSetSelectedTab|MTASA Wiki}
 * @param tabPanel The Element/GUI/Tab panel|tab panel which current tab you want to change.
 * @param theTab The Element/GUI/Tab|tab which will be the new active tab.
 * @return Returns ''true'' if the selected tab was changed to a new one successfully, ''false''
 * otherwise.
 */
export function guiSetSelectedTab(tabPanel: Element, theTab: Element): boolean;

/**
 * This function creates a tab on a pre-existing tab panel. A tab is a button as well as a
 * 'dimension' that can be used to switch between information by clicking on the tabs.  Tabs are sorted on a
 * tab panel in the order that they are created.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateTab|MTASA Wiki}
 * @param text The caption for the tab
 * @param parent The parent tab panel, as a tab panel element type
 * @return Returns a tab element if successful, ''false'' otherwise.
 */
export function guiCreateTab(text: string, parent: Element): Element;

/**
 * This function deletes a tab from a tab panel.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiDeleteTab|MTASA Wiki}
 * @param tabToDelete This is an element representing the tab that you want to delete.
 * @param tabPanel This is the guiCreateTabPanel|tab panel parent that the tab is attached to.
 * @return Returns ''true'' the tab was successfully deleted, ''false'' otherwise.
 */
export function guiDeleteTab(tabToDelete: Element, tabPanel: Element): boolean;

/**
 * [[Image:gui-label.png|frame|Example GUI label.]]
 * <table><tr><td valign=top height=100>
 * This function is for creating a new GUI label.  A label is simply a piece of text that cannot be
 * edited by the user. If you would like to have a bigger text you'd have to change its font because
 * font size is not supported.
 * </td></tr></table>
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateLabel|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI label on a players screen.  This is affected by
 * the relative argument.
 * @param y A float of the 2D y position of the GUI label on a players screen. This is affected by
 * the relative argument.
 * @param width A float of the width of the GUI label. This is affected by the relative argument.
 * @param height A float of the height of the GUI label. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by the label.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * {{OptionalArg}}
 * @param parent This is the parent that the gui label is attached to.  If the relative argument is
 * true, sizes and positioning will be made relative to this parent. If the relative argument is
 * false, positioning will be the number of offset pixels from the parents origin. If no parent is passed,
 * the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @default nil
 * @return Returns an [[GUI_widgets|element]] of the created label if it was successfully created,
 * false otherwise.
 */
export function guiCreateLabel(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    relative: boolean,
    parent: Element,
): Element;

/**
 * This function gets the color of a label.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelGetColor|MTASA Wiki}
 * @return Returns three ''int'' values, representing the amount of red, green, blue if successful.
 * ''false'' otherwise.
 */
export function guiLabelGetColor(element: Gui): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the height of the font currently used in a GUI text label.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelGetFontHeight|MTASA Wiki}
 * @param theLabel The text label to get the font height from.
 * @return Returns the absolute height of the font currently used in the text label if the function
 * is successful, ''false'' otherwise.
 */
export function guiLabelGetFontHeight(theLabel: Element): number;

/**
 * This function returns the extent, or width, of the current text inside a GUI text label.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelGetTextExtent|MTASA Wiki}
 * @param theLabel The text label to get the text extent from.
 * @return Returns the absolute width of the current text inside the text label if the function is
 * successful, ''false'' otherwise.
 */
export function guiLabelGetTextExtent(theLabel: Element): number;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function allows you to set the color of a GUI label.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelSetColor|MTASA Wiki}
 * @param theElement The label to be changed.
 * @param red An integer specifying the amount of red (0 to 255).
 * @param green An integer specifying the amount of green (0 to 255).
 * @param blue An integer specifying the amount of blue (0 to 255).
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the the color of the gui label was successfully changed, ''false''
 * otherwise.
 */
export function guiLabelSetColor(theElement: Element, red: number, green: number, blue: number): boolean;

/**
 * This function sets the horizontal alignment of a text label.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelSetHorizontalAlign|MTASA Wiki}
 * @param theLabel The text label to set the horizontal alignment on.
 * @param align The alignment type. Valid type strings are:  **"left"  **"center"  **"right"
 * @param wordwrap Whether or not to enable wordwrap for the gui-label.
 * @default false
 * @return Returns ''true'' on success, ''false'' otherwise.
 */
export function guiLabelSetHorizontalAlign(theLabel: Element, align: string, wordwrap: boolean): boolean;

/**
 * This function sets the vertical alignment of a text label.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelSetVerticalAlign|MTASA Wiki}
 * @param theLabel The text label to set the vertical alignment on.
 * @param align The alignment type. Valid type strings are:  **"top"  **"center"  **"bottom"
 * @return Returns ''true'' on success, ''false'' otherwise.
 */
export function guiLabelSetVerticalAlign(theLabel: Element, align: string): boolean;

/**
 * This function is for creating a new GUI window.  This provides a base for other gui elements to
 * be created within.  However, windows do not have a parent and cannot be created in any GUI elements.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateWindow|MTASA Wiki}
 * @param x A float of the 2D x position of the GUI window on a players screen.  This is affected
 * by the relative argument.
 * @param y A float of the 2D y position of the GUI window on a players screen. This is affected by
 * the relative argument.
 * @param width A float of the width of the GUI window. This is affected by the relative argument.
 * @param height A float of the height of the GUI window. This is affected by the relative argument.
 * @param titleBarText A string of the text that will be displayed in the title bar of the window.
 * @param relative This is whether sizes and positioning are relative.  If this is true, then all
 * x,y,width,height floats must be between 0 and 1, representing sizes/positions as a fraction of the
 * screen size. If false, then the size and co-ordinates are based on clients resolution, accessible
 * using guiGetScreenSize.
 * @return Returns a gui window element if it was created successfully, false otherwise.
 */
export function guiCreateWindow(
    x: number,
    y: number,
    width: number,
    height: number,
    titleBarText: string,
    relative: boolean,
): Element;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowIsMovable|MTASA Wiki}
 * @return Returns ''true'' if the window is movable, ''false'' if not, ''nil'' if an invalid
 * window was provided.
 */
export function guiWindowIsMovable(window: Gui): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowIsSizable|MTASA Wiki}
 * @return Returns ''true'' if the window is sizable, ''false'' if not, ''nil'' if an invalid
 * window was provided.
 */
export function guiWindowIsSizable(window: Gui): boolean;

/**
 * This function allows you to specify whether or not a user can move a GUI window.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowSetMovable|MTASA Wiki}
 * @param theElement The window to be changed.
 * @param status A boolean value indicating whether the window is movable or not.
 * @return Returns ''true'' if the function is successful, ''false'' otherwise.
 */
export function guiWindowSetMovable(theElement: Element, status: boolean): boolean;

/**
 * This function enables or disables user resizing of a GUI window.
 * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowSetSizable|MTASA Wiki}
 * @param theElement The window to be changed.
 * @param status A boolean value indicating whether user resizing is to be enabled or disabled.
 * @return Returns ''true'' if the function is successful, ''false'' otherwise.
 */
export function guiWindowSetSizable(theElement: Element, status: boolean): boolean;
