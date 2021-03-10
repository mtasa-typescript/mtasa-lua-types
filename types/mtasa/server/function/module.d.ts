/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function returns all the currently loaded [[modules]] of the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/getLoadedModules|MTASA Wiki}
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns a table of all the currently loaded [[modules]]. If no modules are loaded, the table
 * will be empty.
 */
export function getLoadedModules(): LuaTable;

/**
 * This function returns information about the specified [[Modules|module]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getModuleInfo|MTASA Wiki}
 * @param moduleName A string containing the module you wish to get information of e.g. hashing.dll
 * @return Returns a [[table]] containing information about module. These keys are present in the
 * table:
 * * *'''version''': Module version in format X.XX
 * * *'''name''': Module name
 * * *'''author''': Module author
 * * If invalid name for module is passed, it will return ''false''.
 */
export function getModuleInfo(moduleName: string): LuaTable;
