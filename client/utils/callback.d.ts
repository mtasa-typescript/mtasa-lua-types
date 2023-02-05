import { ControlName, KeyName, KeyState } from '../../shared/utils/misc';
import { Svg } from '../structure';

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/AddCommandHandler Wiki, addCommandHandler}
 * @param playerSource: The player who triggered the command or the server console.
 * If not triggered by a player (e.g. by admin) or server console,
 * this will be false.
 * @param commandName The name of the command triggered. This is useful if multiple
 * commands go through one function.
 * @param arguments Each word after command name in the original
 * command is passed here in a seperate variable. If there is no value
 * for an argument, its variable will contain nil. You can deal with a
 * variable number of arguments using the vararg expression, as shown in
 * Server Example 2 below.
 */
export type CommandHandler = (
    this: void,
    commandName: string,
    ...args: string[]
) => void;

export type BindKeyCallbackVarArgs<F extends BindKeyCallback<any[]>> =
    F extends (key: any, keyState: any, ...rest: infer R) => any ? R : never;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/BindKey Wiki, bindKey}
 * @param key The key that was pressed
 * @param keyState The state of the key that was pressed,
 * down if it was pressed, up if it was released.
 * @param arguments The optional arguments you specified
 * when calling bindKey (see below).
 */
export type BindKeyCallback<AdditionalArgsType extends any[] = []> = (
    this: void,
    key: KeyName | ControlName,
    keyState: KeyState,
    ...args: AdditionalArgsType
) => void;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SvgCreate Wiki, SvgCreate}
 * @see {@link https://wiki.multitheftauto.com/wiki/SvgSetDocumentXML Wiki, SvgSetDocumentXML}
 * @see {@link https://wiki.multitheftauto.com/wiki/SvgSetSize Wiki, SvgSetSize}
 *
 */
export type SvgCallback = (this: void, svg: Svg) => void;
