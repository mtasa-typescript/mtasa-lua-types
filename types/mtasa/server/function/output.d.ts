/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Player, Table } from 'types/mtasa/server/structure';

/**
 * This outputs a line of text to the server's log. This could be useful for debugging.
 * @see {@link https://wiki.multitheftauto.com/wiki/outputServerLog|MTASA Wiki}
 * @param text The text to be output to the log.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function outputServerLog(text: string): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/clearChatBox|MTASA Wiki}
 * @return Returns ''true'' if the player's chat was cleared successfully, ''false'' otherwise.
 */
export function clearChatBox(clearFor: Element): boolean;

/**
 * This outputs the specified text string to the chatbox. It can be specified as a message to
 * certain player(s) or all players.
 * It can optionally allow you to embed color changes into the string by setting the colorCoded
 * boolean to true. This allows:
 * <syntaxhighlight lang="lua">
 * outputChatBox ( "#FF0000Hello #00FF00World", root, 255, 255, 255, true )
 * </syntaxhighlight>
 * This will display as: '''<span style='color:red;'>Hello</span> <span
 * style='color:green'>World</span> '''
 * @see {@link https://wiki.multitheftauto.com/wiki/outputChatBox|MTASA Wiki}
 * @param text The text string that you wish to send to the chat window. If more than 256
 * characters it will not be showed in chat.  {{OptionalArg}}
 * @param r The amount of red in the color of the text. Default value is 231.
 * @default 231
 * @param g The amount of green in the color of the text. Default value is 217.
 * @default 217
 * @param b The amount of blue in the color of the text. Default value is 176.
 * @default 176
 * @param colorCoded A boolean value determining whether or not #RRGGBB tags should be used.  Note:
 * The #RRGGBB format must contain capital letters a-f is not acceptable but A-F is. Default RGB
 * values in this format are: '#E7D9B0'.
 * @default false
 * @return Returns ''true'' if the message was displayed successfully. Returns ''false'' if invalid
 * arguments are specified.
 */
export function outputChatBox(
    text: string,
    element?: Table,
    r?: number,
    g?: number,
    b?: number,
    colorCoded?: boolean,
): boolean;

/**
 * This outputs the specified text string to the console window (accessed with F8 or ~ key). It can
 * be specified as a message to certain player(s) or all players.
 * @see {@link https://wiki.multitheftauto.com/wiki/outputConsole|MTASA Wiki}
 * @param text The text string that you wish to send to the console window
 * @param visibleTo This specifies who the chat is visible to. Any players in this element will see
 * the chat message. See visibility.  {{Note|'''visibleTo''' can also be a Team object, in this case,
 * the text will be visible to all the players of that team.}}
 * @default getRootElement(
 * @return
 */
export function outputConsole(text: string, visibleTo: Element): boolean;

/**
 * This function outputs scripting debug messages, which can be read by enabling the debug textbox.
 * The debug display level can then be set so that info or warning messages get filtered out.
 * @see {@link https://wiki.multitheftauto.com/wiki/outputDebugString|MTASA Wiki}
 * @param text the text to be output to the debug box.  {{OptionalArg}}
 * @param level the debug message level. Possible values are:
 * @default 3
 * @param red The amount of red in the color of the text. Default value is 255.
 * @default 255
 * @param green The amount of green in the color of the text. Default value is 255.
 * @default 255
 * @param blue The amount of blue in the color of the text. Default value is 255.  {{Note|Color
 * values are only applied when debug level is 0 or 4.}}
 * @default 255
 * @return Returns ''true'' if the debug message was successfully output, ''false'' if invalid
 * arguments are specified.
 */
export function outputDebugString(text: string, level: number, red: number, green: number, blue: number): boolean;

/**
 * This function is used to show or hide the player's chat.
 * @see {@link https://wiki.multitheftauto.com/wiki/showChat|MTASA Wiki}
 * @param thePlayer The player whose chat is to be hidden or shown.
 * @param show A boolean value determining whether to show (true) or hide (false) the chat.
 * @return Returns ''true'' if the player's chat was shown or hidden successfully, ''false''
 * otherwise.
 */
export function showChat(thePlayer: Player, show: boolean): boolean;
