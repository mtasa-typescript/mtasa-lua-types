/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class GuiLabel {
    /**
     * @see {@link guiLabelGetFontHeight}
     */
    fontHeight: number;
    /**
     * @see {@link guiLabelGetTextExtent}
     */
    textExtent: number;

    /**
     * @see {@link guiLabelGetColor}
     */
    getColor(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link guiLabelGetFontHeight}
     */
    getFontHeight(): number;

    /**
     * @see {@link guiLabelGetTextExtent}
     */
    getTextExtent(): number;

    /**
     * @see {@link guiLabelSetColor}
     */
    setColor(red: number, green: number, blue: number): boolean;

    /**
     * @see {@link guiLabelSetHorizontalAlign}
     */
    setHorizontalAlign(align: string, wordwrap: boolean): boolean;

    /**
     * @see {@link guiLabelSetVerticalAlign}
     */
    setVerticalAlign(align: string): boolean;
}
