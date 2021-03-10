/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { HandleFunction, Timer, Userdata } from '../structure';

/**
 * This functions creates a notification ballon on the desktop.
 * @see {@link https://wiki.multitheftauto.com/wiki/createTrayNotification|MTASA Wiki}
 * @param notificationText The text to send in the notification.
 * @param iconType The notification icon type. Possible values are: default (the MTA icon), info,
 * warning, error
 * @default "default"
 * @param useSound A boolean value indicating whether or not to play a sound when receiving the
 * notification.
 * @default true
 * @return Returns ''true'' if the notification is correctly created, ''false'' otherwise.
 */
export function createTrayNotification(notificationText: string, iconType?: string, useSound?: boolean): boolean;

/**
 * This function ensures the requested resource file is correct and then triggers
 * [[onClientFileDownloadComplete]].  If the file has been previously downloaded and the CRC matches, the file will not
 * be downloaded again but [[onClientFileDownloadComplete]] will still run. The '''file''' should also
 * be included in the resource meta.xml with the '''download''' attribute set to "false", see
 * [[meta.xml]] for more details.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/downloadFile|MTASA Wiki}
 * @param fileName : A string referencing the name of the file to download
 * @return Returns ''true'' if file download has been queued, ''false'' otherwise.
 */
export function downloadFile(fileName: string): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getKeyboardLayout|MTASA Wiki}
 * @return Returns a ''table'' with keyboard layout properties:
 * * {| class="wikitable" style="cellpadding: 10px;"
 * * |-
 * * ! Property || Values and description
 * * |-
 * * | <code>readingLayout</code> ||
 * *     {| class="prettytable"
 * *     |-
 * *     | <code>"ltr"</code> || Left to right (English)
 * *     |-
 * *     | <code>"rtl"</code> || Right to left (Arabic, Hebrew)
 * *     |-
 * *     | <code>"ttb-rtl-ltr"</code> || Either read vertically from top to bottom with columns
 * going from right to left, or read in horizontal rows from left to right, as for the Japanese (Japan)
 * locale.
 * *     |-
 * *     | <code>"ttb-ltr"</code> || Read vertically from top to bottom with columns going from
 * left to right, as for the Mongolian (Mongolian) locale.
 * *     |}
 * * |}
 */
export function getKeyboardLayout(): LuaTable;

/**
 * This function gets the player's localization setting as set in the MTA client.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getLocalization|MTASA Wiki}
 * @return Returns a [[table]] with the following entries:
 * * *'''code :''' The language code ''(eg. "en_US" for "English (United States)" or "ar" for
 * "Arabic")''.
 * * *'''name :''' The name of the language ''(eg. "English (United States)" or "Arabic")''.
 */
export function getLocalization(): LuaTable;

/**
 * This function returns a boolean value whether the client has enabled tray notifications in his
 * settings or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isTrayNotificationEnabled|MTASA Wiki}
 * @return Returns ''true'' if the tray notifications are enabled in the settings, ''false''
 * otherwise.
 */
export function isTrayNotificationEnabled(): boolean;

/**
 * This function sets the players clipboard text (what appears when you paste with CTRL + V) Note
 * that there is no getClipBoard function for safety reasons.
 * @see {@link https://wiki.multitheftauto.com/wiki/setClipboard|MTASA Wiki}
 * @param theText The new text to be in the players clipboard when the player pastes with CTRL + V.
 * @return Returns ''true'' if the text in the clip board was set correctly.
 */
export function setClipboard(theText: string): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setWindowFlashing|MTASA Wiki}
 * @return
 */
export function setWindowFlashing(shouldFlash: boolean, count?: number): boolean;

/**
 * This function allows tracing of MTA functions and events. It should only be used when debugging
 * scripts as it may degrade script performance.
 * Debug hooks are not recursive, so functions and events triggered inside the hook callback will
 * not be traced.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/addDebugHook|MTASA Wiki}
 * @param hookType The type of hook to add. This can be:  ** preEvent  ** postEvent  ** preFunction
 *  ** postFunction  {{New feature/item|3.0158|1.5.5|11856|  * preEventFunction  * postEventFunction
 * }}
 * @param callbackFunction The function to call  ** Returning the string "skip" from the callback
 * function will cause the original function/event to be skipped
 * @param nameList LuaTable of strings for restricting which functions and events the hook will be
 * triggered on  ** addDebugHook and removeDebugHook will only be hooked if they are specified in the name
 * list
 * @return Returns ''true'' if the hook was successfully added, or ''false'' otherwise.
 */
export function addDebugHook(hookType: string, callbackFunction: HandleFunction, nameList?: LuaTable): boolean;

/**
 * This function returns the decrypted data from [https://en.wikipedia.org/wiki/Base64 base64]
 * representation of the encrypted block
 * @see {@link https://wiki.multitheftauto.com/wiki/base64Decode|MTASA Wiki}
 * @param data The block of data you want to decrypt
 * @return Returns the decrypted data from [https://en.wikipedia.org/wiki/Base64 base64]
 * representation of the encrypted block if the decryption process was successfully completed, ''false''
 * otherwise.
 */
export function base64Decode(data: string): string;

/**
 * This function returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the
 * encoded block of data
 * @see {@link https://wiki.multitheftauto.com/wiki/base64Encode|MTASA Wiki}
 * @param data The block of data you want to encode
 * @return Returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the encoded
 * data if the encoding process was successfully completed, ''false'' otherwise.
 */
export function base64Encode(data: string): string;

/**
 * This function performs a bitwise AND-conjunction on two or more (unsigned) 32-bit
 * [[Int|integers]]. See [http://en.wikipedia.org/wiki/Bitwise_operation#AND Bitwise operation] for more details.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/bitAnd|MTASA Wiki}
 * @return Returns the conjuncted value.
 */
export function bitAnd(var1: number, var2: number, ...args: any[]): number;

/**
 * This function performs a bitwise NOT on an (unsigned) 32-bit [[Int|integer]]. See
 * [http://en.wikipedia.org/wiki/Bitwise_operation#NOT Bitwise operation] for more details.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/bitNot|MTASA Wiki}
 * @param var The value you want to perform a bitwise NOT on
 * @return Returns the value on which the operation has been performed.
 */
export function bitNot(variableValue: number): number;

/**
 * This function performs a bitwise OR-conjunction on two or more (unsigned) 32-bit
 * [[Int|integers]]. See [http://en.wikipedia.org/wiki/Bitwise_operation#OR Bitwise operation] for more details.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/bitOr|MTASA Wiki}
 * @return Returns the conjuncted value.
 */
export function bitOr(var1: number, var2: number, ...args: any[]): number;

/**
 * This function performs a bitwise XOR-conjunction (exclusive OR) on two or more (unsigned) 32-bit
 * [[Int|integers]]. See [http://en.wikipedia.org/wiki/Bitwise_operation#XOR Bitwise operation] for
 * more details.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/bitXor|MTASA Wiki}
 * @return Returns the conjuncted value.
 */
export function bitXor(var1: number, var2: number, ...args: any[]): number;

/**
 * This function performs an AND-conjunction on two or more (unsigned) 32-bit [[Int|integers]] and
 * checks, whether the conjuncted value is zero or not. See
 * [http://en.wikipedia.org/wiki/Bitwise_operation#AND Bitwise operation] for more details.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/bitTest|MTASA Wiki}
 * @return Returns ''true'' if the conjuncted value is '''not''' zero, ''false'' otherwise. If a
 * bad argument was passed to [[bitTest]], you'll get ''nil''.
 */
export function bitTest(var1: number, var2: number, ...args: any[]): boolean;

/**
 * This functions performs a bitwise circular left-rotation on the integer '''value''' by integer
 * '''n''' positions.
 * See [https://en.wikipedia.org/wiki/Bitwise_operation#Rotate_no_carry Bitwise operation] for more
 * details.
 * @see {@link https://wiki.multitheftauto.com/wiki/bitLRotate|MTASA Wiki}
 * @param value The value you want to perform the rotation on.
 * @param n The amount of positions to rotate the value by.
 * @return Returns the circular left-rotated value as ''integer''.
 */
export function bitLRotate(value: number, n: number): number;

/**
 * This functions performs a bitwise circular right-rotation on the integer '''value''' by integer
 * '''n''' positions.
 * See [https://en.wikipedia.org/wiki/Bitwise_operation#Rotate_no_carry Bitwise operation] for more
 * details.
 * @see {@link https://wiki.multitheftauto.com/wiki/bitRRotate|MTASA Wiki}
 * @param value The value you want to perform the rotation on.
 * @param n The amount of positions to rotate the value by.
 * @return Returns the circular right-rotated value as ''integer''.
 */
export function bitRRotate(value: number, n: number): number;

/**
 * This functions performs a logical left shift on the integer '''value''' by integer '''n'''
 * positions. In a ''logical shift'', zeros are shifted in to replace the discarded bits.
 * See [https://en.wikipedia.org/wiki/Bitwise_operation#Logical_shift Bitwise operation] for more
 * details.
 * @see {@link https://wiki.multitheftauto.com/wiki/bitLShift|MTASA Wiki}
 * @param value The value you want to perform the shift on.
 * @param n The amount of positions to shift the value by.
 * @return Returns the logical left shifted value as ''integer''.
 */
export function bitLShift(value: number, n: number): number;

/**
 * This functions performs a logical right shift on the integer '''value''' by integer '''n'''
 * positions. In a ''logical shift'', zeros are shifted in to replace the discarded bits.
 * See [https://en.wikipedia.org/wiki/Bitwise_operation#Logical_shift Bitwise operation] for more
 * details.
 * @see {@link https://wiki.multitheftauto.com/wiki/bitRShift|MTASA Wiki}
 * @param value The value you want to perform the shift on.
 * @param n The amount of positions to shift the value by.
 * @return Returns the logical right shifted value as ''integer''.
 */
export function bitRShift(value: number, n: number): number;

/**
 * This functions performs an arithmetic shift on the integer '''value''' by integer '''n'''
 * positions. In an ''arithmetic shift'', zeros are shifted in to replace the discarded bits. In a ''right
 * arithmetic'' shift, the [https://en.wikipedia.org/wiki/Sign_bit sign bit] is shifted in on the left,
 * thus preserving the sign of the operand.
 * See [https://en.wikipedia.org/wiki/Bitwise_operation#Arithmetic_shift Bitwise operation] for
 * more details.
 * @see {@link https://wiki.multitheftauto.com/wiki/bitArShift|MTASA Wiki}
 * @param value The value you want to perform the arithmetic shift on.
 * @param n The amount of positions to shift the value by.
 * @return Returns the arithmetic shifted value as ''integer''.
 */
export function bitArShift(value: number, n: number): number;

/**
 * This function returns the unsigned number formed by the bits field to field + width - 1 (range:
 * 0-31).
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/bitExtract|MTASA Wiki}
 * @param var The value
 * @param field The field number
 * @param width Number of bits to extract
 * @default 1
 * @return Returns the extracted value/bit sequence.
 */
export function bitExtract(variableValue: number, field: number, width?: number): number;

/**
 * This function returns the unsigned number formed by var value with replacement specified at bits
 * field to field + width - 1
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/bitReplace|MTASA Wiki}
 * @param var The value
 * @param replaceValue The replaceValue
 * @param field The field number
 * @param width Number of bits to extract
 * @default 1
 * @return Returns the replaced value/bit sequence.
 */
export function bitReplace(variableValue: number, replaceValue: number, field: number, width: number): number;

/**
 * [[debugSleep]] freezes the client/server for the specified time. This means that all
 * synchronization, rendering and script execution will stop except HTTP processing invoked by [[fetchRemote]].
 * This function only works, if development mode is enabled by [[setDevelopmentMode]] and can be utilised
 * to build a debugger that communicates via HTTP requests with the editor/IDE.
 * @see {@link https://wiki.multitheftauto.com/wiki/debugSleep|MTASA Wiki}
 * @return Returns ''true'' if the development mode is enabled and arguments are correct, ''false''
 * otherwise.
 */
export function debugSleep(sleep: number): boolean;

/**
 * This function decodes an encoded [[string]] using the specified algorithm. The counterpart of
 * this function is [[encodeString]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/decodeString|MTASA Wiki}
 * @param algorithm The algorithm to use.
 * @param input The input to decode.
 * @param options A table with options and other neccessary data for the algorithm, as detailed
 * below.
 * @return Returns the decoded string if successful, ''false'' otherwise. If a callback was
 * provided, the decoded string is argument to the callback.
 */
export function decodeString(algorithm: string, input: string, options: LuaTable, callback?: HandleFunction): string;

/**
 * This function will take a reference and returns its Lua element.
 * @see {@link https://wiki.multitheftauto.com/wiki/deref|MTASA Wiki}
 * @param reference The valid reference, which you want to dereference
 * @return Returns ''mixed'' if the reference were valid. Returns ''false'' if the reference were
 * invalid.
 */
export function deref(reference: number): string;

/**
 * This function encodes a [[string]] using the specified algorithm. The counterpart of this
 * function is [[decodeString]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/encodeString|MTASA Wiki}
 * @param algorithm The algorithm to use.
 * @param input The input to encode.
 * @param options A table with options and other neccessary data for the algorithm, as detailed
 * below.
 * @return Returns the encoded string if successful, ''false'' otherwise. If a callback was
 * provided, ''true'' is returned immediately, and the encoded string is passed as an argument to the callback.
 */
export function encodeString(algorithm: string, input: string, options: LuaTable, callback?: HandleFunction): string;

/**
 * This function parses a [[JSON]] formatted string into variables. You can use [[toJSON]] to
 * encode variables into a JSON string that can be read by this function.
 * @see {@link https://wiki.multitheftauto.com/wiki/fromJSON|MTASA Wiki}
 * @param json A JSON formatted string
 * @return Returns variables read from the JSON string.
 * * '''Note:''' Indices of a JSON object such as "1": "cat" are being returned as [[string]], not
 * as [[int]]eger.
 */
export function fromJSON(json: string): any;

/**
 * This function will extract Red, Green, Blue and Alpha values from a hex string you provide it.
 * These strings follow the same format as used in HTML, with addition of the Alpha values.
 * @see {@link https://wiki.multitheftauto.com/wiki/getColorFromString|MTASA Wiki}
 * @param theColor A string containing a valid color code.  :Valid strings are:
 * @return Returns four integers in RGBA format, with a maximum value of 255 for each.  Each stands
 * for ''red'', ''green'', ''blue'', and ''alpha''.  Alpha decides transparancy where 255 is opaque
 * and 0 is transparent.  ''false'' is returned if the string passed is invalid (for example, is missing
 * the preceeding # sign).
 */
export function getColorFromString(theColor: string): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function is used to get the development mode of the client. For more information see
 * [[setDevelopmentMode]]
 * @see {@link https://wiki.multitheftauto.com/wiki/getDevelopmentMode|MTASA Wiki}
 * @return Returns ''true'' if the development mode is on, ''false'' if off.
 */
export function getDevelopmentMode(): boolean;

/**
 * This function returns the distance between two 2 dimensional points using the pythagorean
 * theorem.
 * @see {@link https://wiki.multitheftauto.com/wiki/getDistanceBetweenPoints2D|MTASA Wiki}
 * @param x1 : The X position of the first point
 * @param y1 : The Y position of the first point
 * @param x2 : The X position of the second point
 * @param y2 : The Y position of the second point
 * @return Returns a float containing the 2D distance between the two points. Returns ''false'' if
 * invalid parameters are passed.
 */
export function getDistanceBetweenPoints2D(x1: number, y1: number, x2: number, y2: number): number;

/**
 * This function returns the distance between two 3 dimensional points using the pythagorean
 * theorem.
 * @see {@link https://wiki.multitheftauto.com/wiki/getDistanceBetweenPoints3D|MTASA Wiki}
 * @param x1 : The X position of the first point
 * @param y1 : The Y position of the first point
 * @param z1 : The Z position of the first point
 * @param x2 : The X position of the second point
 * @param y2 : The Y position of the second point
 * @param z2 : The Z position of the second point
 * @return Returns a float containing the distance between the two points as a [[float]]. Returns
 * ''false'' if an argument passed was invalid.
 */
export function getDistanceBetweenPoints3D(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
): number;

/**
 * Used for custom Lua based interpolation, returns the easing value (animation time to use in your
 * custom interpolation) given a progress and an [[Easing|easing function]].
 * In most cases, either [[moveObject]] or [[interpolateBetween]] can do the job. getEasingValue is
 * only provided in case you want to do your own custom interpolation based on easing.
 * @see {@link https://wiki.multitheftauto.com/wiki/getEasingValue|MTASA Wiki}
 * @param fProgress float between 0 and 1 indicating the interpolation progress (0 at the beginning
 * of the interpolation, 1 at the end).
 * @param strEasingType the Easing|easing function to use for the interpolation
 * @param fEasingPeriod the period of the Easing|easing function (only some easing functions use
 * this parameter)
 * @param fEasingAmplitude the amplitude of the Easing|easing function (only some easing functions
 * use this parameter)
 * @param fEasingOvershoot the overshoot of the Easing|easing function (only some easing functions
 * use this parameter)
 * @return Returns ''fAnimationTime '' the animation time given by the easing function (can be < 0
 * or > 1 since some [[Easing|easing functions]] have overshoot or bounce/spring effects, ''false''
 * otherwise (error in parameters).
 */
export function getEasingValue(
    fProgress: number,
    strEasingType: string,
    fEasingPeriod?: number,
    fEasingAmplitude?: number,
    fEasingOvershoot?: number,
): number;

/**
 * This function retrieves the maximum [http://en.wikipedia.org/wiki/Frame_rate FPS (Frames per
 * second)] that players on the server can run their game at.
 * @see {@link https://wiki.multitheftauto.com/wiki/getFPSLimit|MTASA Wiki}
 * @return Returns an integer between '''25''' and '''100''' of the maximum FPS that players can
 * run their game at.
 */
export function getFPSLimit(): number;

/**
 * This function returns network status information.
 * @see {@link https://wiki.multitheftauto.com/wiki/getNetworkStats|MTASA Wiki}
 * @return Returns a table, the indexes in the table are the following:
 * * * '''bytesReceived''' - Total number of bytes received since the connection was started
 * * * '''bytesSent''' - Total number of bytes sent since the connection was started
 * * * '''packetsReceived''' - Total number of packets received since the connection was started
 * * * '''packetsSent''' - Total number of packets sent since the connection was started
 * * * '''packetlossTotal''' - (0-100) Total packet loss percentage of sent data, since the
 * connection was started
 * * * '''packetlossLastSecond''' - (0-100) Packet loss percentage of sent data, during the
 * previous second
 * * * '''messagesInSendBuffer'''
 * * * '''messagesInResendBuffer''' - Number of packets queued to be resent (due to packet loss)
 * * * '''isLimitedByCongestionControl'''
 * * * '''isLimitedByOutgoingBandwidthLimit'''
 * * * '''encryptionStatus'''
 */
export function getNetworkStats(): LuaTable;

/**
 * This function returns a [[table]] containing network usage information about inbound and
 * outbound packets.
 * @see {@link https://wiki.multitheftauto.com/wiki/getNetworkUsageData|MTASA Wiki}
 * @return Returns a [[table]] with two fields: "in" and "out". Each of these contain a table with
 * two fields: "bits" and "count". Each of these contain a table with 256 numeric fields ranging from 0
 * to 255, containing the appropriate network usage data for such packet id.
 */
export function getNetworkUsageData(): LuaTable;

/**
 * This function returns performance information.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPerformanceStats|MTASA Wiki}
 * @param category Performance statistics category. If empty string is given, list of all
 * categories is returned.See categories for more information.
 * @param options Category specific , separated options. All categories supports h option for help.
 * @default ""
 * @param filter Case-sensitive filter used to select returned rows. Only name column is filtered.
 * @default ""
 * @return Returns two tables. First contains column names. The second contains result rows. Each
 * row is table of cells.
 */
export function getPerformanceStats(
    category: string,
    options?: string,
    filter?: string,
): LuaMultiReturn<[LuaTable, LuaTable]>;

/**
 * This function gets the server or client (if used client sided it returns time as set on client's
 * computer) real time and returns it in a table. If you want to get the in-game time (shown on GTA's
 * clock) use [[getTime]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getRealTime|MTASA Wiki}
 * @param seconds A count in seconds from the year 1970.  Useful for storing points in time, or for
 * retrieving time information for getBanTime. The valid range of this argument is 0 to 32,000,000,000
 *  {{New feature/item|3.0141|1.4.1|6976|
 * @default current
 * @param localTime Set to true to adjust for the locally set timezone.  }}
 * @default true
 * @return Returns a ''table'' of substrings with different time format or ''false'' if the
 * '''seconds''' argument is out of range.
 * * {| border="2" cellpadding="2" cellspacing="0" style="margin: 1em 1em 1em 0; background:
 * #f9f9f9; border: 1px #aaa solid; border-collapse: collapse; font-size: 95%;"
 * * |'''Member'''
 * * |'''Meaning'''
 * * |'''Range'''
 * * |-
 * * |second
 * * |seconds after the minute
 * * |0-61*
 * * |-
 * * |minute
 * * |minutes after the hour
 * * |0-59
 * * |-
 * * |hour
 * * |hours since midnight
 * * |0-23
 * * |-
 * * |monthday
 * * |day of the month
 * * |1-31
 * * |-
 * * |month
 * * |months since January
 * * |0-11
 * * |-
 * * |year
 * * |years since 1900
 * * |-
 * * |weekday
 * * |days since Sunday
 * * |0-6
 * * |-
 * * |yearday
 * * |days since January 1
 * * |0-365
 * * |-
 * * |isdst
 * * |Daylight Saving Time flag
 * * |-
 * * |timestamp
 * * |seconds since 1970 (Ignoring set timezone)
 * * |
 * * |}
 * * ''* second'' is generally 0-59. Extra range to accommodate for leap seconds in certain systems.
 */
export function getRealTime(seconds: number, localTime: boolean): LuaTable;

/**
 * This function returns amount of time that your system has been running in milliseconds. By
 * comparing two values of [[getTickCount]], you can determine how much time has passed (in milliseconds)
 * between two events. This could be used to determine how efficient your code is, or to time how long a
 * player takes to complete a task.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTickCount|MTASA Wiki}
 * @return Returns an integer containing the number of milliseconds since the system the server is
 * running on started. This has the potential to wrap-around.
 */
export function getTickCount(): number;

/**
 * This function is for getting the details of a running timer.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTimerDetails|MTASA Wiki}
 * @param theTimer A timer element.
 * @return * Integer one represents the time left in miliseconds (1000th of a second) of the
 * current time left in the loop.
 * * * Integer two represents the amount of times the timer has left to execute.
 * * * Integer three represents the time interval of timer.
 * * * Returns false if the timer doesn't exist or stopped running. Also, debugscript will say "Bad
 * Argument @ 'getTimerDetails'". To prevent this, you can check if the timer exists with
 * [[isTimer]]().
 */
export function getTimerDetails(theTimer: Timer): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns a table of all active timers that the resource that calls it has created.
 * Alternatively, only the timers with a remaining time less than or equal to a certain value can be
 * retrieved.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTimers|MTASA Wiki}
 * @param theTime The maximum time left (in milliseconds) on the timers you wish to retrieve.
 * @default nil
 * @return Returns a table of all the active timers.
 */
export function getTimers(theTime: number): LuaTable;

/**
 * This function splits a string using the given separating character and returns one specified
 * substring.
 * @see {@link https://wiki.multitheftauto.com/wiki/gettok|MTASA Wiki}
 * @param text the string that should be split.
 * @param tokenNumber which token should be returned (1 for the first, 2 for the second, and so on).
 * @return Returns a [[string]] containing the token if it exists, ''false'' otherwise.
 */
export function gettok(text: string, tokenNumber: number, int: string): string;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getUserdataType|MTASA Wiki}
 * @param value : A userdata value to get the type of. Userdata types can be:
 * @return Returns a [[string]] containing the specified userdata's type, or ''false'' plus an
 * error message if the given value is not userdata.
 */
export function getUserdataType(value: Userdata): string;

/**
 * This function returns a hash of the specified string in the specified algorithm.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/hash|MTASA Wiki}
 * @param algorithm : A string which must be one of these: md5, sha1, sha224, sha256, sha384, sha512
 * @param dataToHash : A string of the data to hash.
 * @return Returns the hash of the data, false if an invalid argument was used.
 */
export function hash(algorithm: string, dataToHash: string): string;

/**
 * This function returns human-readable representations of tables and MTA datatypes as a string.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/inspect|MTASA Wiki}
 * @param var A variable of any datatype.
 * @param options A table of options. It is not mandatory, but when it is provided, it must be a
 * table. For a list of options, see the https://github.com/kikito/inspect.lua#options Inspects GitHub
 * page.
 * @return Always returns a string. The contents can change if we update the inspect library, so it
 * is not expected to be consistent across Lua versions.
 */
export function inspect(variableValue: string, options?: LuaTable): string;

/**
 * Interpolates a 3D Vector between a source value and a target value using either linear
 * interpolation or any other [[Easing|easing function]].
 * It can also be used to interpolate 2D vectors or scalars by only setting some of the x, y, z
 * values and putting 0 to the others.
 * @see {@link https://wiki.multitheftauto.com/wiki/interpolateBetween|MTASA Wiki}
 * @param fProgress float between 0 and 1 indicating the interpolation progress (0 at the beginning
 * of the interpolation, 1 at the end). If it is higher than 1, it will start from the beginning.
 * @param strEasingType the Easing|easing function to use for the interpolation
 * @param fEasingPeriod the period of the Easing|easing function (only some easing functions use
 * this parameter)
 * @param fEasingAmplitude the amplitude of the Easing|easing function (only some easing functions
 * use this parameter)
 * @param fEasingOvershoot the overshoot of the Easing|easing function (only some easing functions
 * use this parameter)
 * @return Returns ''x, y, z'' the interpolated 3D vector/value if successful, ''false'' otherwise
 * (error in parameters).
 * * As mentioned before, interpolateBetween can be used on 2D vectors or scalars in which case
 * only some (x, y or just x) of the returned values are to be used (cf. alpha interpolation in marker
 * example or size interpolation in window example).
 */
export function interpolateBetween(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
    fProgress: number,
    strEasingType: string,
    fEasingPeriod: number,
    fEasingAmplitude: number,
    fEasingOvershoot: number,
): LuaMultiReturn<[number, number, number]>;

/**
 * This function intelligently outputs debug messages into the Debug Console.  It is similar to
 * [[outputDebugString]], but outputs useful information for '''any''' variable type, and does not require
 * use of Lua's tostring.  This includes information about element types, and table structures.  It is
 * especially useful for quick debug tasks.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/iprint|MTASA Wiki}
 * @param var1 A variable of any type to print intelligent information for.  {{OptionalArg}}
 * @return Always returns ''nil''.
 */
export function iprint(var1: string, var2?: string, ...args: any[]): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/isOOPEnabled|MTASA Wiki}
 * @return Returns ''true'' or ''false'' if ''[[OOP]]'' is enabled or not. Returns ''nil'' if an
 * error arised.
 */
export function isOOPEnabled(): boolean;

/**
 * This function checks if a variable is a [[timer]].
 * @see {@link https://wiki.multitheftauto.com/wiki/isTimer|MTASA Wiki}
 * @param theTimer : The variable that we want to check.
 * @return Returns ''true'' if the passed value is a timer, ''false'' otherwise.
 */
export function isTimer(theTimer: Timer): boolean;

/**
 * This function allows you to kill/halt existing timers.
 * @see {@link https://wiki.multitheftauto.com/wiki/killTimer|MTASA Wiki}
 * @param theTimer The timer you wish to halt.
 * @return Returns ''true'' if the timer was successfully killed, ''false'' if no such timer
 * existed.
 */
export function killTimer(theTimer: Timer): boolean;

/**
 * Calculates the MD5 hash of the specified string and returns its hexadecimal representation.
 * @see {@link https://wiki.multitheftauto.com/wiki/md5|MTASA Wiki}
 * @param str the string to hash.
 * @return Returns the MD5 hash of the input string if successful, ''false'' otherwise.
 */
export function md5(str: string): string;

/**
 * This function creates a new password hash using a specified hashing algorithm.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/passwordHash|MTASA Wiki}
 * @param password The password to hash.
 * @param algorithm The algorithm to use:
 * @param options table with options for the hashing algorithm, as detailed below.  {{New
 * feature/item|3.0154|1.5.4|11281|
 * @param callback providing a callback will run this function asynchronously, the arguments to the
 * callback are the same as the returned values below.  }}
 * @return Returns the hash as a string if hashing was successful, ''false'' otherwise. If a
 * callback was provided, the aforementioned values are arguments to the callback, and this function will
 * always return ''true''.
 */
export function passwordHash(password: string, algorithm: string, options: LuaTable, callback?: HandleFunction): string;

/**
 * This function verifies whether a password matches a password hash.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/passwordVerify|MTASA Wiki}
 * @param password The password to check.
 * @param hash A supported hash (see passwordHash). <span style=color:red>Note that only the prefix
 * $2y$ is supported for type bcrypt (older prefixes can cause security issues).</span>  {{New
 * feature/item|3.0156|1.5.6||
 * @param options advanced options
 * @param callback providing a callback will run this function asynchronously, the arguments to the
 * callback are the same as the returned values below.  }}
 * @return Returns true if the password matches the hash. Returns false if the password does not
 * match, or if an unknown hash was passed. If a callback was provided, the aforementioned values are
 * arguments to the callback, and this function will always return ''true''.
 */
export function passwordVerify(password: string, hash: string, options?: LuaTable, callback?: HandleFunction): boolean;

/**
 * This function stops at the first occurrence of the pattern in the input string and returns the
 * result of the search.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/pregFind|MTASA Wiki}
 * @param subject The input string
 * @param pattern The pattern string to search for in the input string.
 * @return Returns ''true'' if the pattern was found in the input string, ''false'' otherwise.
 */
export function pregFind(subject: string, pattern: string, string?: number): boolean;

/**
 * This function returns all matches.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/pregMatch|MTASA Wiki}
 * @param base The base string for replace.
 * @param pattern The pattern for match in base string.
 * @param maxResults Maximum number of results to return
 * @default 100000
 * @return Returns a ''[[table]]'' if one or more match is found, ''false'' otherwise.
 */
export function pregMatch(base: string, pattern: string, string?: number, maxResults?: number): LuaTable;

/**
 * This function performs a regular expression search and replace and returns the replaced string.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/pregReplace|MTASA Wiki}
 * @param subject The input string.
 * @param pattern The pattern string to search for in the input string.
 * @param replacement The replacement string to replace all matches within the input string.
 * @return Returns the replaced ''[[string]]'', or [[bool]] ''false'' otherwise.
 */
export function pregReplace(subject: string, pattern: string, replacement: string, string?: number): string;

/**
 * This function removes hooks added by [[addDebugHook]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/removeDebugHook|MTASA Wiki}
 * @param hookType The type of hook to remove. This can be:  ** preEvent  ** postEvent  **
 * preFunction  ** postFunction
 * @return Returns ''true'' if the hook was successfully removed, or ''false'' otherwise.
 */
export function removeDebugHook(hookType: string, callbackFunction: HandleFunction): boolean;

/**
 * This function will create a reference to the given argument.
 * @see {@link https://wiki.multitheftauto.com/wiki/ref|MTASA Wiki}
 * @return Returns an ''int'' if the reference were successfully created. Returns ''false'' if the
 * parameter were invalid.
 */
export function ref(objectToReference: string): number;

/**
 * This function allows you to reset the elapsed time in existing timers to zero. The function does
 * not reset the 'times to execute' count on timers which have a limited amout of repetitions.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetTimer|MTASA Wiki}
 * @param theTimer The timer whose elapsed time you wish to reset.
 * @return Returns ''true'' if the timer was successfully reset, ''false'' otherwise.
 */
export function resetTimer(theTimer: Timer): boolean;

/**
 * This function is used to set the development mode. Setting development mode allows access to
 * special commands which can assist with script debugging.
 * '''Client-side''' development mode commands:
 * * '''[[Client_Commands#showcol|showcol]]''': Enables colshapes to be viewed as a wireframe
 * object.
 * * '''[[Client_Commands#showsound|showsound]]''': Enables world sound ids to be printed in the
 * debug output window.
 * '''Shared''' development mode functions:
 * * '''[[debugSleep]]''': Sets the freeze time for the client/server.
 * @see {@link https://wiki.multitheftauto.com/wiki/setDevelopmentMode|MTASA Wiki}
 * @param enable : A boolean to indicate whether development mode is on (true) or off (false)
 * {{New feature/item|3.0150|1.5||
 * @param enableWeb : A boolean to indicate whether browser debug messages will be filtered (false)
 * or not (true)  }}
 * @default false
 * @return Returns ''true'' if the mode was set correctly, ''false'' otherwise.
 */
export function setDevelopmentMode(enable: boolean, enableWeb?: boolean): boolean;

/**
 * This function sets the maximum [http://en.wikipedia.org/wiki/Frame_rate FPS (Frames per second)]
 * that players on the server can run their game at.
 * @see {@link https://wiki.multitheftauto.com/wiki/setFPSLimit|MTASA Wiki}
 * @param fpsLimit An integer value representing the maximum FPS. This value may be between 25 and
 * 100 FPS. You can also pass 0 or false, in which case the FPS limit will be the one set in the client
 * settings (by default, 100 FPS and the client fps limit should also be manually changed via
 * fps_limit=0 in console or MTA San Andreas 1.5\MTA\config\coreconfig.xml).
 * @return Returns ''true'' if successful, or ''false'' if it was not possible to set the limit or
 * an invalid value was passed.
 */
export function setFPSLimit(fpsLimit: number): boolean;

/**
 * * The sha module and this function may conflict with eachother, if you use this function
 * uninstall the module!
 * * This function returns an uppercase string, so make sure you string.upper() anything else you
 * are checking against that has been sha256'd elsewhere.}}
 * Calculates the sha256 hash of the specified string.
 * @see {@link https://wiki.multitheftauto.com/wiki/sha256|MTASA Wiki}
 * @param str the string to hash.
 * @return Returns the sha256 hash of the input string if successful, ''false'' otherwise.
 */
export function sha256(str: string): string;

/**
 * This function splits a string into substrings. You specify a character that will act as a
 * separating character; this will determine where to split the sub-strings. For example, it can split the
 * string "Hello World" into two strings containing the two words, by spliting using a space as a
 * separator.
 * '''Note:''' You can use the function [[gettok]] to retrieve a single token from the string at a
 * specific index. This may be faster for one-off lookups, but considerably slower if you are going to
 * check each token in a long string.
 * @see {@link https://wiki.multitheftauto.com/wiki/split|MTASA Wiki}
 * @param stringToSplit The string you wish to split into parts.
 * @return Returns a ''table'' of substrings split from the original string if successful,
 * ''false'' otherwise.
 * * {{note|Unicode characters work but when combined with others do not. E.g: #split("a€cb†", "€")
 * returns 3 but #split("a€cb", "€") returns 2.
 * * }}
 * * {{note|You can't use same char twice as a separator. Eg.:  ||, ||| are the same as |.
 * * }}
 */
export function split(stringToSplit: string, int: string): LuaTable;

/**
 * This function decrypts given [https://en.wikipedia.org/wiki/Base64 base64] representation of
 * encrypted data using the [https://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm Tiny Encryption
 * Algorithm].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/teaDecode|MTASA Wiki}
 * @param data The block of data you want to decrypt
 * @param key The key that should be used for decryption (Only first 16 characters are used)
 * @return Returns string containing the decrypted data if the decryption process was successfully
 * completed, ''false'' otherwise.
 */
export function teaDecode(data: string, key: string): string;

/**
 * This functions performs the [https://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm Tiny
 * Encryption Algorithm] on the given string and returns the [https://en.wikipedia.org/wiki/Base64 base64]
 * representation of the encrypted string.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/teaEncode|MTASA Wiki}
 * @param text The string you want to encrypt. (See second example if you want to encode binary
 * data)
 * @param key The key that should be used for encryption (Only first 16 characters are used)
 * @return Returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the
 * encrypted string if the encryption process was successfully completed, ''false'' otherwise.
 */
export function teaEncode(text: string, key: string): string;

/**
 * This function retrieves the hex number of a specified color, useful for the dx functions.
 * @see {@link https://wiki.multitheftauto.com/wiki/tocolor|MTASA Wiki}
 * @param red The amount of http://en.wikipedia.org/wiki/RGBA_color_space red in the color (0-255).
 * @param green The amount of http://en.wikipedia.org/wiki/RGBA_color_space green in the color
 * (0-255).
 * @param blue The amount of http://en.wikipedia.org/wiki/RGBA_color_space blue in the color
 * (0-255).
 * @param alpha The amount of http://en.wikipedia.org/wiki/RGBA_color_space alpha in the color
 * (0-255).
 * @default 255
 * @return Returns a single value representing the color.
 */
export function tocolor(red: number, green: number, blue: number, alpha?: number): number;

/**
 * This function converts a '''single''' value (preferably a Lua table) into a [[JSON]] encoded
 * string. You can use this to store the data and then load it again using [[fromJSON]].
 * @see {@link https://wiki.multitheftauto.com/wiki/toJSON|MTASA Wiki}
 * @param compact a boolean representing whether the string will contain whitespaces. To remove
 * whitespaces from JSON string, use true. String will contain whitespaces per default.  }}  {{New
 * feature/item|3.0154|1.5.3|8046|
 * @default false
 * @param prettyType a type string from below:  ** none  ** spaces  ** tabs  }}
 * @default "none"
 * @return Returns a JSON formatted string.
 */
export function toJSON(value: any, compact?: boolean, prettyType?: string): string;

/**
 * The function returns the string of the specified UTF code.
 * @see {@link https://wiki.multitheftauto.com/wiki/utfChar|MTASA Wiki}
 * @param characterCode The UTF code, to get the string of.
 * @return Returns a ''[[string]]'' if the function was successful, ''false'' otherwise.
 */
export function utfChar(characterCode: number): string;

/**
 * The function returns the UTF codes of the given string.
 * @see {@link https://wiki.multitheftauto.com/wiki/utfCode|MTASA Wiki}
 * @param theString The string to get the UTF code of.
 * @return Returns an ''[[int]]'' if the function was successful, ''false'' otherwise.
 */
export function utfCode(theString: string): number;

/**
 * The function gets the real length of a string, in characters.
 * @see {@link https://wiki.multitheftauto.com/wiki/utfLen|MTASA Wiki}
 * @param theString The string to get the length of.
 * @return Returns an ''[[int]]'' if the function was successful, ''false'' otherwise.
 */
export function utfLen(theString: string): number;

/**
 * The function returns the byte position at specified character position.
 * @see {@link https://wiki.multitheftauto.com/wiki/utfSeek|MTASA Wiki}
 * @param theString The string.
 * @param position An int with the specified charachter position.
 * @return Returns an ''[[int]]'' if the function was successful, ''false'' otherwise.
 */
export function utfSeek(theString: string, position: number): number;

/**
 * The function returns a sub string, from the specified positions on a character.
 * @see {@link https://wiki.multitheftauto.com/wiki/utfSub|MTASA Wiki}
 * @param theString The string.
 * @param Start An int with the start position.
 * @param End An int with the end position.
 * @return Returns a ''[[string]]'' if the function was successful, ''false'' otherwise.
 */
export function utfSub(theString: string, Start: number, End: number): string;
