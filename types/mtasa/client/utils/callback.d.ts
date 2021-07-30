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
    ...arguments: string[]
) => void;
