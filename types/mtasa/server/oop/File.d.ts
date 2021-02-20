/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class File {
    /**
     * @see {@link fileGetPos}
     */
    pos: number;
    /**
     * @see {@link fileGetSize}
     */
    size: number;
    /**
     * @see {@link fileIsEOF}
     */
    eof: boolean;

    /**
     * @see {@link fileCreate}
     */
    // static new(filePath: string);
    // TODO: fix "new" keyword with... transformer maybe?

    /**
     * @see {@link fileGetPos}
     */
    getPos(): number;

    /**
     * @see {@link fileGetSize}
     */
    getSize(): number;

    /**
     * @see {@link fileIsEOF}
     */
    isEOF(): boolean;

    /**
     * @see {@link fileSetPos}
     */
    setPos(offset: number): number;
}
