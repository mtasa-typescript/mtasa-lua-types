// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    Txd,
    Dff,
    Col,
    Ifp,
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
    Object as MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction
} from '../structure';

/**
 * Closes a file handle obtained by fileCreate or fileOpen.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileClose Wiki, fileClose }
 * @param theFile The file handle to close.
 * @return returns true if successful, false otherwise.
 */
export function fileClose(
    theFile: File
): boolean;

/**
 * This function copies a file.{{Note|The file functions should not be used to implement
 * configuration files. It is encouraged to use the XML functions for this instead.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/FileCopy Wiki, fileCopy }
 * @param filePath : The path of the file you want to copy.
 * @param copyToFilePath : Where to copy the specified file to.
 * @param overwrite : If set to true it will overwrite a file that already exists at copyToFilePath.
 * @return return true if the file was copied, else false if the filepath doesnt exist.
 */
export function fileCopy(
    filePath: string,
    copyToFilePath: string,
    overwrite?: boolean
): boolean;

/**
 * Creates a new file in a directory of a resource. If there already exists a file with the
 * specified name, it is overwritten with an empty file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileCreate Wiki, fileCreate }
 * @param filePath The filepath of the file to be created in the following format: :resourceName/path.
 * resourceName is the name of the resource the file is in, and path is the path from the
 * root directory of the resource to the file.
 * :For example, if you want to create a file named 'myfile.txt' in the resource
 * 'mapcreator', it can be created from another resource this way:
 * ''fileCreate(":mapcreator/myfile.txt")''.
 * :If the file is in the current resource, only the file path is necessary, e.g.
 * ''fileCreate("myfile.txt")''.
 * @return if successful, returns a file handle which can be used with other file functions
 * (filewrite, fileclose...). returns false if an error occured.
 */
export function fileCreate(
    filePath: string
): File;

/**
 * Deletes the specified file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileDelete Wiki, fileDelete }
 * @param filePath The filepath of the file to delete in the following format: :resourceName/path.
 * resourceName is the name of the resource the file is in, and path is the path from the
 * root directory of the resource to the file.
 * :For example, if you want to delete a file name "myFile.txt" in the resource 'fileres',
 * it can be deleted from another resource this way: ''fileDelete(":fileres/myFile.txt")''.
 * :If the file is in the current resource, only the file path is necessary, e.g.
 * ''fileDelete("myFile.txt")''.
 * @return returns true if successful, false otherwise (for example if there exists no file with the
 * given name, or it does exist but is in use).
 */
export function fileDelete(
    filePath: string
): boolean;

/**
 * This functions checks whether a specified file exists inside a resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileExists Wiki, fileExists }
 * @param filePath The filepath of the file, whose existence is going to be checked, in the following
 * format: :resourceName/path. resourceName is the name of the resource the file is checked
 * to be in, and path is the path from the root directory of the resource to the file.
 * :For example, if you want to check whether a file named 'myfile.txt' exists in the
 * resource 'mapcreator', it can be done from another resource this way:
 * ''fileExists(":mapcreator/myfile.txt")''.
 * :If the file, whose existence is going to be checked, is in the current resource, only
 * the file path is necessary, e.g. ''fileExists("myfile.txt")''. Note that you must use
 * forward slashes '/' for the folders, backslashes '' will return false.
 * @return returns true if the file exists, false otherwise.
 */
export function fileExists(
    filePath: string
): boolean;

/**
 * Forces pending disk writes to be executed. fileWrite doesnt directly write to the hard
 * disk but places the data in a temporary buffer; only when there is enough data in the
 * buffer it is actually written to disk. Call this function if you need the data written
 * right now without closing the file. This is useful for log files that might want to be
 * read while the resource is still executing. fileFlush can be called after each log entry
 * is written. Without this, the file may appear empty or outdated to the user.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileFlush Wiki, fileFlush }
 * @param theFile The file handle of the file you wish to flush.
 * @return returns true if succeeded, false in case of failure (e.g. the file handle is invalid).
 */
export function fileFlush(
    theFile: File
): boolean;

/**
 * This function retrieves the path of the given file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileGetPath Wiki, fileGetPath }
 * @param theFile The file you want to get the path.
 * @return returns a string representing the file path, false if invalid file was provided.
 */
export function fileGetPath(
    theFile: File
): string;

/**
 * Returns the current read/write position in the given file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileGetPos Wiki, fileGetPos }
 * @param theFile the file handle you wish to get the position of.
 * @return returns the file position if successful, or false if an error occured (e.g. an invalid
 * handle was passed).
 */
export function fileGetPos(
    theFile: File
): number;

/**
 * Returns the total size in bytes of the given file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileGetSize Wiki, fileGetSize }
 * @param theFile the file handle you wish to get the size of.
 * @return returns the file size if successful, or false if an error occured (e.g. an invalid file
 * handle was passed).
 */
export function fileGetSize(
    theFile: File
): number;

/**
 * Checks if the file position is at the end of the file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileIsEOF Wiki, fileIsEOF }
 * @param theFile A handle to the file you wish to check.
 * @return returns true if the file position of the specified file is at the end of the file, false
 * otherwise.
 */
export function fileIsEOF(
    theFile: File
): boolean;

/**
 * Opens an existing file for reading and writing.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileOpen Wiki, fileOpen }
 * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the
 * name of the resource the file is in, and path is the path from the root directory of the
 * resource to the file.
 * :For example, if there is a file named 'coolObjects.txt' in the resource 'objectSearch',
 * it can be opened from another resource this way:
 * ''fileOpen(":objectSearch/coolObjects.txt")''.
 * :If the file is in the current resource, only the file path is necessary, e.g.
 * ''fileOpen("coolObjects.txt")''.
 * @param readOnly By default, the file is opened with reading and writing access. You can specify true for
 * this parameter if you only need reading access.
 * @return if successful, returns a file handle for the file. otherwise returns false (f.e. if the
 * file doesnt exist).
 */
export function fileOpen(
    filePath: string,
    readOnly?: boolean
): File;

/**
 * Reads the specified number of bytes from the given file starting at its current
 * read/write position, and returns them as a string.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileRead Wiki, fileRead }
 * @param theFile A handle to the file you wish to read from. Use fileOpen to obtain this handle.
 * @param count The number of bytes you wish to read.
 * @return returns the bytes that were read in a string. note that this string might not contain as
 * many bytes as you specified if an error occured, i.e. end of file.
 */
export function fileRead(
    theFile: File,
    count: number
): string;

/**
 * Renames the specified file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileRename Wiki, fileRename }
 * @param filePath The filepath of the source file in the following format: :resourceName/path. resourceName
 * is the name of the resource the file is in, and path is the path from the root directory
 * of the resource to the file. If the file is in the current resource, only the file path
 * is necessary.
 * @param newFilePath Destination filepath for the specified source file in the same format.
 * @return if successful, returns true. otherwise returns false.
 */
export function fileRename(
    filePath: string,
    newFilePath: string
): boolean;

/**
 * Sets the current read/write position in the file.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileSetPos Wiki, fileSetPos }
 * @param theFile The file handle of which you want to change the read/write position.
 * @param offset The new position. This is the number of bytes from the beginning of the file. If this
 * value is larger than the file size, it is limited to 52,428,800 bytes (50 MB).
 * @return returns where the offset was actually set at. i.e. if offset was past the end of the
 * file, it will be set at the end of the file, and this position will be returned. returns
 * false in case of failure (e.g. the specified file handle is invalid).
 */
export function fileSetPos(
    theFile: File,
    offset: number
): number;

/**
 * Writes one or more strings to a given file, starting at the current read/write position.
 * Advances the position over the number of bytes that were written.
 * @see {@link https://wiki.multitheftauto.com/wiki/FileWrite Wiki, fileWrite }
 * @param theFile A handle to the file you wish to write to. The file must have been opened with write
 * access, i.e. the file handle must be a result of fileCreate or fileOpen with the readonly
 * parameter set to false.
 * @param string1 The string to write.
 * @return returns the number of bytes successfully written to the file, returns false if invalid
 * arguments were specified.
 */
export function fileWrite(
    theFile: File,
    string1: string,
    string2?: string,
    string3?: string,
    ...varargs: any[]
): number;
