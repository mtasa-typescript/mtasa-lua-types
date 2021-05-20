// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    TextDisplay,
    Account,
    ACL,
    ACLGroup,
    Ban,
    XML,
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
} from '../structure';

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/ClearChatBox Wiki, clearChatBox }
 * @param clearFor The player whose chat is to be cleared. By default, this is set to the root element,
 * which will affect all players.
 * @return returns true if the players chat was cleared successfully, false otherwise.
 * @noSelf
 */
export declare function clearChatBox(
    clearFor?: Element
): boolean;

/**
 * This outputs the specified text string to the chatbox. It can be specified as a message
 * to certain player(s) or all players.
 * It can optionally allow you to embed color changes into the string by setting the
 * colorCoded boolean to true. This allows:
 * <syntaxhighlight lang=lua>
 * outputChatBox ( #FF0000Hello #00FF00World, root, 255, 255, 255, true )
 * </syntaxhighlight>
 * This will display as: <span style=color:red;>Hello</span> <span
 * style=color:green>World</span>
 * @see {@link https://wiki.multitheftauto.com/wiki/OutputChatBox Wiki, outputChatBox }
 * @param text The text string that you wish to send to the chat window. If more than 256 characters it
 * will not be showed in chat.
 * @param visibleTo Can also be a table of players or team.}}
 * @param r The amount of red in the color of the text. Default value is 231.
 * @param g The amount of green in the color of the text. Default value is 217.
 * @param b The amount of blue in the color of the text. Default value is 176.
 * @param colorCoded A boolean value determining whether or not #RRGGBB tags should be used.
 * Note: The #RRGGBB format must contain capital letters a-f is not acceptable but A-F is.
 * Default RGB values in this format are: '#E7D9B0'.
 * @noSelf
 */
export declare function outputChatBox(
    text: string,
    visibleTo?: LuaTable | Element,
    r?: number,
    g?: number,
    b?: number,
    colorCoded?: boolean
): boolean;

/**
 * This outputs the specified text string to the console window (accessed with F8 or ~ key).
 * It can be specified as a message to certain player(s) or all players.
 * @see {@link https://wiki.multitheftauto.com/wiki/OutputConsole Wiki, outputConsole }
 * @param text The text string that you wish to send to the console window
 * @param visibleTo This specifies who the chat is visible to. Any players in this element will see the chat
 * message. See visibility.
 * @noSelf
 */
export declare function outputConsole(
    text: string,
    visibleTo?: Element
): boolean;

/**
 * This function outputs scripting debug messages, which can be read by enabling the debug
 * textbox. The debug display level can then be set so that info or warning messages get
 * filtered out.
 * @see {@link https://wiki.multitheftauto.com/wiki/OutputDebugString Wiki, outputDebugString }
 * @param text the text to be output to the debug box.
 * @param level the debug message level. Possible values are:
 * @param 0 Custom message
 * @param 1 Error message
 * @param 2 Warning message
 * @param 3 Information message (default)
 * @param 4 Custom message (omits file path and line number)}}
 * @param red The amount of red in the color of the text. Default value is 255.
 * @param green The amount of green in the color of the text. Default value is 255.
 * @param blue The amount of blue in the color of the text. Default value is 255.
 * @return returns true if the debug message was successfully output, false if invalid arguments are
 * specified.
 * @noSelf
 */
export declare function outputDebugString(
    text: string,
    level?: number,
    red?: number,
    green?: number,
    blue?: number
): boolean;

/**
 * This outputs a line of text to the servers log. This could be useful for debugging.
 * @see {@link https://wiki.multitheftauto.com/wiki/OutputServerLog Wiki, outputServerLog }
 * @param text The text to be output to the log.
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function outputServerLog(
    text: string
): boolean;

/**
 * This function is used to show or hide the players chat.
 * @see {@link https://wiki.multitheftauto.com/wiki/ShowChat Wiki, showChat }
 * @param thePlayer The player whose chat is to be hidden or shown.
 * @param show A boolean value determining whether to show (true) or hide (false) the chat.
 * @return returns true if the players chat was shown or hidden successfully, false otherwise.
 * @noSelf
 */
export declare function showChat(
    thePlayer: Player,
    show: boolean
): boolean;
