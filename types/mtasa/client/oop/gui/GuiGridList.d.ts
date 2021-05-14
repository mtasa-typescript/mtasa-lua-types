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
    HandleFunction
} from '../../structure';

/** @customConstructor GuiGridList */
export class GuiGridList extends GuiElement {
    /**
     * This allows you to get the count of existing columns in a gridlist.
     */
    columnCount: number;

    /**
     * This function is used to get the horizontal scroll position from a grid list
     */
    horizontalScrollPosition: number;

    /**
     * This function returns the number of rows in a grid list.
     */
    rowCount: number;

    /**
     * This function returns the amount of options selected in the specified
     * Element/GUI/Gridlist|grid list.
     */
    selectedCount: number;

    /**
     * This function returns the items selected in the specified Element/GUI/Gridlist|grid list.
     * Note that for some reason the column ID is 1 lower than it should be, for example 0 is
     * returned but if you try and get the text for column 0 there is nothing, but column 1 has
     * what you clicked on.
     */
    selectedItems: LuaTable;

    /**
     */
    selectionMode: number;

    /**
     * This function is used to get the vertical scroll position from a grid list
     */
    verticalScrollPosition: number;

    /**
     */
    sortingEnabled: boolean;

    /**
     * This function creates a grid list GUI element.  These are menus which are designed in
     * lists and can have multiple columns.  A good example of a gridlist element can be found
     * in MTAs settings box, under Controls.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiCreateGridList Wiki, guiCreateGridList }
     * @param width A float of the width of the GUI gridlist. This is affected by the relative argument.
     * @param height A float of the height of the GUI gridlist. This is affected by the relative argument.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing sizes relative to the
     * parent.
     * @param parent This is the parent that the gui gridlist is attached to.  If the relative argument is
     * true, sizes and positioning will be made relative to this parent. If the relative
     * argument is false, positioning will be the number of offset pixels from the parents
     * origin. If no parent is passed, the parent will become the screen - causing positioning
     * and sizing according to screen positioning.
     * @return returns an element of the created gridlist if it was successfully created, false
     * otherwise.
     */
    constructor(
        width: number,
        height: number,
        relative: boolean,
        parent?: Element
    );

    /**
     * This function is used to create columns in grid lists.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListAddColumn Wiki, guiGridListAddColumn }
     * @param width Column width, relative to the grid list width
     * @return returns the column id if it was created, false otherwise.
     */
    addColumn(
        width: number
    ): number;

    /**
     * Adds a row to a grid list, and optionally add simple text items with your rows.  Use
     * guiGridListSetItemText to add row headers.
     * ATTENTION: Without guiGridListSetItemText there is no row added to the grid.
     * Look at the example, first you give the row a name with row = guiGridListAddRow (
     * playerList ), and then you use guiGridListSetItemText. }}
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListAddRow Wiki, guiGridListAddRow }
     * @param itemText2 The text for the second column item in the row.  Either a string or a number can be
     * passed (use numbers for sorting purposes).
     * @param ... Item text for any other columns
     * @return returns the row id if it has been created, false otherwise.
     */
    addRow(
        itemText2?: number | string,
        ...varargs: any[]
    ): number;

    /**
     * This allows you to automatically size a column to display everything in it correctly,
     * with the most minimal width.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListAutoSizeColumn Wiki, guiGridListAutoSizeColumn }
     * @return returns true if the column was auto-sized, false otherwise.
     */
    autoSizeColumn(): boolean;

    /**
     * This function clears all the data from a grid list.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListClear Wiki, guiGridListClear }
     * @return returns true if the grid list element is valid and has been cleared successfully, false
     * otherwise.
     */
    clear(): boolean;

    /**
     * This allows you to get the count of existing columns in a gridlist.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetColumnCount Wiki, guiGridListGetColumnCount }
     * @return returns an integer with the amount of columns in the gridlist, false otherwise.
     */
    getColumnCount(): number;

    /**
     * This function is used to get the column title of a gridlist column.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetColumnTitle Wiki, guiGridListGetColumnTitle }
     * @return returns a string containing the column title, or false otherwise.
     */
    getColumnTitle(): string;

    /**
     * This allows you to get the width of an existing column in a gridlist.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetColumnWidth Wiki, guiGridListGetColumnWidth }
     * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or
     * absolute pixels.
     * @return returns the width of the gridlist column, false if bad arguments were given.
     */
    getColumnWidth(
        relative: boolean
    ): number;

    /**
     * This function is used to get the horizontal scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetHorizontalScrollPosition Wiki, guiGridListGetHorizontalScrollPosition }
     * @return returns a integer between 0 and 100 indicating the horizontal scroll position, or false
     * otherwise.
     */
    getHorizontalScrollPosition(): number;

    /**
     * This function gets the color of a gridlist item.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetItemColor Wiki, guiGridListGetItemColor }
     * @param columnIndex Column ID
     * @return returns four int values, representing the amount of red, green, blue and alpha if
     * successful. false otherwise.
     */
    getItemColor(
        columnIndex: number
    ): LuaMultiReturn<[
        number,
        number,
        number,
        number
    ]>;

    /**
     * With this function you can retrieve the string data associated with an item in a
     * Element/GUI/Gridlist|grid list. This is not the text that is displayed on the item, but
     * an internal string that you can use to hold extra information about the item.<br/>
     * Note: This function will only work after you set the items text using
     * guiGridListSetItemText!
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetItemData Wiki, guiGridListGetItemData }
     * @param columnIndex the column index of the item
     * @return returns the item data of the specified item if succesful, false if one of the arguments
     * was invalid.
     */
    getItemData(
        columnIndex: number
    ): unknown;

    /**
     * This function retrieves the text from a specific grid list item.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetItemText Wiki, guiGridListGetItemText }
     * @param columnIndex column id of the item
     * @return returns the text of the item if the arguments are right, false otherwise.
     */
    getItemText(
        columnIndex: number
    ): string;

    /**
     * This function returns the number of rows in a grid list.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetRowCount Wiki, guiGridListGetRowCount }
     * @return returns the number of rows if the function is successful, false otherwise.
     */
    getRowCount(): number;

    /**
     * This function returns the amount of options selected in the specified
     * Element/GUI/Gridlist|grid list.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetSelectedCount Wiki, guiGridListGetSelectedCount }
     * @return returns an integer representing the amount of selected options if everything was
     * successful or false if invalid arguments were passed.
     */
    getSelectedCount(): number;

    /**
     * This function returns the row and column indexes of the selected item in a grid list.
     * First selected row and column is (0, 0).
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetSelectedItem Wiki, guiGridListGetSelectedItem }
     * @return returns the row and column indexes of the selected item if the specified grid list is
     * valid and has a selected item, (-1, -1) if no item is selected, false otherwise.
     */
    getSelectedItem(): LuaMultiReturn<[
        number,
        number
    ]>;

    /**
     * This function returns the items selected in the specified Element/GUI/Gridlist|grid list.
     * Note that for some reason the column ID is 1 lower than it should be, for example 0 is
     * returned but if you try and get the text for column 0 there is nothing, but column 1 has
     * what you clicked on.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetSelectedItems Wiki, guiGridListGetSelectedItems }
     * @return returns a table over the selected items in the element/gui/gridlist|grid list in this
     * format:
     * <syntaxhighlight lang=lua>
     * table = {
     * 1 = {
     * column, -- has the first selected items column id
     * row -- has the first selected items row id
     * },
     * 2 = {
     * column,-- has the second selected items column id
     * row -- has the second selected items row id
     * },
     * ...
     * }
     * </syntaxhighlight>
     * if everything was successful or false if invalid arguments were passed.
     */
    getSelectedItems(): LuaTable;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetSelectionMode Wiki, guiGridListGetSelectionMode }
     * @return returns the id of the current gridlists selection mode.
     */
    getSelectionMode(): number;

    /**
     * This function is used to get the vertical scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListGetVerticalScrollPosition Wiki, guiGridListGetVerticalScrollPosition }
     * @return returns a integer between 0 and 100 indicating the vertical scroll position, or false
     * otherwise.
     */
    getVerticalScrollPosition(): number;

    /**
     * This allows you to insert a new row after a specified row, and simultaneously set text.
     * Good for inserting new rows in the middle of existing rows. To insert at the top use -1
     * as row index.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListInsertRowAfter Wiki, guiGridListInsertRowAfter }
     * @param itemText1 The text for the first column item in the row.  Either a string or a number can be passed
     * (use numbers for sorting purposes).
     * @param itemText2 The text for the second column item in the row.  Either a string or a number can be
     * passed (use numbers for sorting purposes).
     * @param ... Item text for any other columns
     * @return returns true if the row was successfully added, false otherwise.
     */
    insertRowAfter(): number;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListIsSortingEnabled Wiki, guiGridListIsSortingEnabled }
     * @return returns true if sorting is enabled, false otherwise.
     */
    isSortingEnabled(): boolean;

    /**
     * This allows you to delete columns that exist in grid lists.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListRemoveColumn Wiki, guiGridListRemoveColumn }
     * @return returns true if the grid list column was successfully removed, false otherwise.
     */
    removeColumn(): boolean;

    /**
     * This allows you to delete rows that exist in grid lists.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListRemoveRow Wiki, guiGridListRemoveRow }
     * @return returns true if the grid list row was successfully removed, false otherwise.
     */
    removeRow(): boolean;

    /**
     * This function is used to change the column title of a gridlist column.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetColumnTitle Wiki, guiGridListSetColumnTitle }
     * @param title : The title of the column
     * @return returns true if the new title was set, or false otherwise.
     */
    setColumnTitle(
        title: string
    ): boolean;

    /**
     * This allows you to set the width of an existing column in a gridlist.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetColumnWidth Wiki, guiGridListSetColumnWidth }
     * @param width A float or integer of the width of the column depending on the relative argument.
     * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or
     * absolute pixels.
     * @return returns true if the gridlist column width was successfully set, false if bad arguments
     * were given.
     */
    setColumnWidth(
        width: number,
        relative: boolean
    ): boolean;

    /**
     * This function is used to set the horizontal scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetHorizontalScrollPosition Wiki, guiGridListSetHorizontalScrollPosition }
     * @return returns true if the horizontal scroll position was set, or false otherwise.
     */
    setHorizontalScrollPosition(): boolean;

    /**
     * This function changes the color of a gridlist item.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetItemColor Wiki, guiGridListSetItemColor }
     * @param columnIndex Column ID
     * @param red The amount of red in the color (0-255)
     * @param green The amount of green in the color (0-255)
     * @param blue The amount of blue in the color (0-255)
     * @param alpha The amount of alpha in the color (0-255).
     * @return returns true if the item color was set successfully, false otherwise.
     */
    setItemColor(
        columnIndex: number,
        red: number,
        green: number,
        blue: number,
        alpha?: number
    ): boolean;

    /**
     * This function sets a Item Data associated to a grid list item.<br/>
     * Note: This function will only work after you set the items text using
     * guiGridListSetItemText!
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetItemData Wiki, guiGridListSetItemData }
     * @param columnIndex The column of the item you wish to set to
     * @param data The data you wish to set to the item.
     * @return returns true if the data was set successfully, false otherwise
     */
    setItemData(
        columnIndex: number,
        data: unknown
    ): boolean;

    /**
     * This function changes the text of a gridlist item.
     * Notice: This function doesnt work well with Sorting. If you are using sorting, please use
     * the optional arguments of guiGridListAddRow as much as possible.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetItemText Wiki, guiGridListSetItemText }
     * @param columnIndex Column ID
     * @param text The text you want to put in (does NOT accept numbers, use tostring() for that)
     * @param section Determines if the item is a section
     * @param number Tells whether the text item is a number value or not (used for sorting)
     * @return returns true if the item text was set successfully, false otherwise.
     */
    setItemText(
        columnIndex: number,
        text: string,
        section: boolean,
        number: boolean
    ): boolean;

    /**
     * This function allows a gridlists scrollbar to be forced on, or returned to default.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetScrollBars Wiki, guiGridListSetScrollBars }
     * @param verticalBar A bool where true forces the verical scrollbar on, and false returns them to default.
     * @return returns true if the scrollbars were successfully set, false otherwise.
     */
    setScrollBars(
        verticalBar: boolean
    ): boolean;

    /**
     * This function selects an item from a gridlist. If you wish to deselect whatever item is
     * selected, pass 0 as both the rowIndex and  columnIndex arguments.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetSelectedItem Wiki, guiGridListSetSelectedItem }
     * @param columnIndex the column you want to select (index 1 is the first column)
     * @param bReset set to false for multiple selections
     * @return returns true if the passed arguments are correct and the item has been selected, false
     * otherwise.
     */
    setSelectedItem(
        columnIndex: number,
        bReset?: boolean
    ): boolean;

    /**
     * This function sets the selection mode of a gui gridlist.  For example, the MTA server
     * browser selects a whole row, while the Controls dialog selects a single cell. To select
     * multiple items you must be holding down ctrl.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetSelectionMode Wiki, guiGridListSetSelectionMode }
     * @param 0 Single row selection
     * @param 1 Multiple row selection
     * @param 2 Single cell selection
     * @param 3 Multiple cell selection
     * @param 4 Nominated(First) single column selection
     * @param 5 Nominated(First) multiple column selection
     * @param 6 Single column selection
     * @param 7 Multiple column selection
     * @param 8 Nominated(First) single row selection
     * @param 9 Nominated(First) multiple row selection
     * @return returns true if the selection mode was successfully set, false otherwise.
     */
    setSelectionMode(): boolean;

    /**
     * This function allows the disabling or enabling of sorting within a gridlist.  Sorting is
     * achieved by clicking a column header.  Gridlist items will be sorted according to the
     * clicked column.  By default, gridlists have sorting enabled.  This function will allow
     * you to toggle this.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetSortingEnabled Wiki, guiGridListSetSortingEnabled }
     * @return returns true if sorting was successfully toggled., false otherwise.
     */
    setSortingEnabled(): boolean;

    /**
     * This function is used to set the vertical scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGridListSetVerticalScrollPosition Wiki, guiGridListSetVerticalScrollPosition }
     * @return returns true if the vertical scroll position was set, or false otherwise.
     */
    setVerticalScrollPosition(): boolean;
}
