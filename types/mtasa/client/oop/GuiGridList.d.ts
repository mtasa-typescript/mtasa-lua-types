/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class GuiGridList {
    /**
     * @see {@link guiGridListGetColumnCount}
     */
    columnCount: number;
    /**
     * @see {@link guiGridListGetHorizontalScrollPosition}
     */
    horizontalScrollPosition: number;
    /**
     * @see {@link guiGridListGetRowCount}
     */
    rowCount: number;
    /**
     * @see {@link guiGridListGetSelectedCount}
     */
    selectedCount: number;
    /**
     * @see {@link guiGridListGetSelectedItems}
     */
    selectedItems: LuaTable;
    /**
     * @see {@link guiGridListGetSelectionMode}
     */
    selectionMode: number;
    /**
     * @see {@link guiGridListIsSortingEnabled}
     */
    sortingEnabled: boolean;
    /**
     * @see {@link guiGridListGetVerticalScrollPosition}
     */
    verticalScrollPosition: number;

    /**
     * @see {@link guiGridListAddRow}
     */
    addRow(...args: Array<number | string>): number;

    /**
     * @see {@link guiGridListAutoSizeColumn}
     */
    autoSizeColumn(columnIndex: number): boolean;

    /**
     * @see {@link guiGridListGetColumnCount}
     */
    getColumnCount(): number;

    /**
     * @see {@link guiGridListGetColumnTitle}
     */
    getColumnTitle(columnIndex: number): string;

    /**
     * @see {@link guiGridListGetHorizontalScrollPosition}
     */
    getHorizontalScrollPosition(): number;

    /**
     * @see {@link guiGridListGetRowCount}
     */
    getRowCount(): number;

    /**
     * @see {@link guiGridListGetSelectedCount}
     */
    getSelectedCount(): number;

    /**
     * @see {@link guiGridListGetSelectedItems}
     */
    getSelectedItems(): LuaTable;

    /**
     * @see {@link guiGridListGetSelectionMode}
     */
    getSelectionMode(): number;

    /**
     * @see {@link guiGridListIsSortingEnabled}
     */
    isSortingEnabled(): boolean;

    /**
     * @see {@link guiGridListGetVerticalScrollPosition}
     */
    getVerticalScrollPosition(): number;

    /**
     * @see {@link guiGridListInsertRowAfter}
     */
    insertRowAfter(rowIndex: number): number;

    /**
     * @see {@link guiGridListSetColumnTitle}
     */
    setColumnTitle(columnIndex: number, title: string): boolean;

    /**
     * @see {@link guiGridListSetHorizontalScrollPosition}
     */
    setHorizontalScrollPosition(fPosition: number): boolean;

    /**
     * @see {@link guiGridListSetSelectedItem}
     */
    setSelectedItem(rowIndex: number, columnIndex: number, bReset?: boolean): boolean;

    /**
     * @see {@link guiGridListSetSelectionMode}
     */
    setSelectionMode(mode: number): boolean;

    /**
     * @see {@link guiGridListSetSortingEnabled}
     */
    setSortingEnabled(enabled: boolean): boolean;

    /**
     * @see {@link guiGridListSetVerticalScrollPosition}
     */
    setVerticalScrollPosition(fPosition: number): boolean;
}
