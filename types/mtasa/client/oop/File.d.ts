/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import {
    fileGetPos,
    fileGetSize,
    fileIsEOF,
    fileCreate,
    fileSetPos,
} from '../function/file';

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
    static new(filePath: string): File;

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
