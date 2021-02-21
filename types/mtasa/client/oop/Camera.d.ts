/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Camera {
    /**
     * @see {@link getCameraMatrix}
     */
    matrix: LuaMultiReturn<[number, number, number, number, number, number, number, number]>;

    /**
     * @see {@link getCameraClip}
     */
    getClip(): LuaMultiReturn<[boolean, boolean]>;

    /**
     * @see {@link setCameraClip}
     */
    setClip(objects: boolean, vehicles: boolean): boolean;

    /**
     * @see {@link getCameraMatrix}
     */
    getMatrix(): LuaMultiReturn<[number, number, number, number, number, number, number, number]>;
}
