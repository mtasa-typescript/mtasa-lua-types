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
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    ControlName,
    KeyName,
    KeyState
} from '../../structure';

/** @customConstructor GuiCombobox */
export class GuiCombobox extends GuiElement {
    /**
     * This function returns the index of the selected combobox item.
     */
    selected: number;

    /**
     */
    open: boolean;

    /**
     * Adds an item to a combobox.
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxAddItem
     * @param value The text that the item will contain.
     * @return returns the item id if it has been created, false otherwise.
     */
    addItem(
        value: string
    ): number;

    /**
     * This function removes all the items from a combobox.
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxClear
     * @return returns true if the combobox element is valid and has been cleared successfully, false
     * otherwise.
     */
    clear(): boolean;

    /**
     * This function retrieves the text from a specific combobox item.
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxGetItemText
     * @param itemId The index of the item
     * @return returns the text of the item if the arguments are right, false otherwise.
     */
    getItemText(
        itemId: number
    ): string;

    /**
     * This function returns the index of the selected combobox item.
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxGetSelected
     * @return returns the index of the selected item if the specified combobox is valid and has a
     * selected item, -1 if no item is selected, nil otherwise.
     */
    getSelected(): number;

    /**
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxIsOpen
     * @return returns true if combobox is opened, false if combobox is closed, nil otherwise.
     */
    isOpen(): boolean;

    /**
     * This function removes an item from a combobox.
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxRemoveItem
     * @param itemId The index of the item to remove
     * @return returns true if the item was removes successfully, false otherwise.
     */
    removeItem(
        itemId: number
    ): boolean;

    /**
     * This function changes the text of a combobox item.
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxSetItemText
     * @param itemId The index of the item
     * @param text The text you want to put in (does NOT accept numbers, use tostring() for that)
     * @return returns true if the text was set successfully, false otherwise.
     */
    setItemText(
        itemId: number,
        text: string
    ): boolean;

    /**
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxSetOpen
     * @param state The state of combobox. true, if the combobox is to be opened. false if the combobox is to
     * be closed.
     * @return returns true if is successful, false otherwise.
     */
    setOpen(
        state: boolean
    ): boolean;

    /**
     * This function sets the selected item from a combobox.
     * @see https://wiki.multitheftauto.com/wiki/GuiComboBoxSetSelected
     * @param itemIndex the item you want to select (item 0 is the first item). If -1 is specified, then the
     * combo box text is set to its caption.
     * @return returns true if the selected item has been changed successfully, false otherwise.
     */
    setSelected(
        itemIndex: number
    ): boolean;

    /**
     * This function creates a combobox GUI element, which you can compare to a gridlist with a
     * dropdown feature.
     * @see https://wiki.multitheftauto.com/wiki/GuiCreateComboBox
     * @param x A float of the 2D x position of the GUI combobox on a players screen.  This is affected
     * by the relative argument.
     * @param y A float of the 2D y position of the GUI combobox on a players screen. This is affected by
     * the relative argument.
     * @param width A float of the width of the GUI combobox. This is affected by the relative argument.
     * @param height A float of the height of the GUI combobox. This is affected by the relative argument.
     * Note: height must be enough to fit the drop down menu, else the drop down wont appear.
     * @param caption A string for what the title of your combobox will be. This will be shown if no item is
     * selected.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing sizes relative to the
     * parent.
     * @param parent This is the parent that the GUI combobox is attached to.  If the relative argument is
     * true, sizes and positioning will be made relative to this parent. If the relative
     * argument is false, positioning will be the number of offset pixels from the parents
     * origin. If no parent is passed, the parent will become the screen - causing positioning
     * and sizing according to screen positioning.
     * @return returns an element of the created combobox if it was successfully created, false
     * otherwise.
     */
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        caption: string,
        relative: boolean,
        parent?: Element
    );
}
