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
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/**
 * @see https://wiki.multitheftauto.com/wiki/ClearChatBox
 * @return returns true if the players chat was cleared successfully, false otherwise.
 * @noSelf
 */
export declare function clearChatBox(): boolean;

/**
 * @see https://wiki.multitheftauto.com/wiki/ClearDebugBox
 * @return always returns true.
 * @noSelf
 */
export declare function clearDebugBox(): boolean;

/**
 * This function checks if players chat is visible.
 * @see https://wiki.multitheftauto.com/wiki/IsChatVisible
 * @return returns true if the chat is visible, false otherwise.
 * @noSelf
 */
export declare function isChatVisible(): boolean;

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
 * @see https://wiki.multitheftauto.com/wiki/OutputChatBox
 * @param text The text string that you wish to send to the chat window. If more than 256 characters it
 * will not be showed in chat.
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
    r?: number,
    g?: number,
    b?: number,
    colorCoded?: boolean,
): boolean;

/**
 * This outputs the specified text string to the console window (accessed with F8 or ~ key).
 * It can be specified as a message to certain player(s) or all players.
 * @see https://wiki.multitheftauto.com/wiki/OutputConsole
 * @param text The text string that you wish to send to the console window
 * @noSelf
 */
export declare function outputConsole(text: string): boolean;

/**
 * This function outputs scripting debug messages, which can be read by enabling the debug
 * textbox. The debug display level can then be set so that info or warning messages get
 * filtered out.
 * @see https://wiki.multitheftauto.com/wiki/OutputDebugString
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
    blue?: number,
): boolean;

/**
 * This function is used to show or hide the players chat.
 * @see https://wiki.multitheftauto.com/wiki/ShowChat
 * @param show A boolean value determining whether to show (true) or hide (false) the chat.
 * @param inputBlocked A boolean value determining whether chat input is blocked/hidden, regardless of chat
 * visibility. If unset, this will keep the default behaviour prior to r20898 (true when
 * chat is hidden, false when chat is visible).
 * @return returns true if the players chat was shown or hidden successfully, false otherwise.
 * @noSelf
 */
export declare function showChat(
    show: boolean,
    inputBlocked?: boolean,
): boolean;
