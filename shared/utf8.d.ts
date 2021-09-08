/** @noSelfInFile */

import { iterator } from './structure';

export namespace utf8 {
    /**
     * Returns the codepoints for the i-th through j-th character of the string passed.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.byte|MTASA Wiki}
     * @param input A string character sequence  {{OptionalArg}}
     * @param i An integer representing the beginning position.
     * @default 1
     * @param j An integer representing the ending position.
     * @default 1
     * @return Returns a sequence of ''integer'' values from the original string if successful, ''nil''
     * otherwise.
     */
    function byte(
        input: string,
        i?: number,
        j?: number,
    ): LuaMultiReturn<number[]>;

    /**
     * Generates a string representing the character codepoints as arguments.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.char|MTASA Wiki}
     * @return Returns a ''string'' representation of the codepoints passed.
     */
    function char(...args: any[]): string;

    /**
     * Converts the UTF-8 codepoint position to byte-string position.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.charpos|MTASA Wiki}
     * @param input A string character sequence  {{OptionalArg}}
     * @param charpos An integer representing the beginning position (offset will be added/subtracted).
     * @default 0
     * @param offset An integer representing the offset to charpos.
     * @default 1
     * @return Returns the ''integer'' position as in a byte string and the ''integer'' codepoint at
     * this position, ''nil'' otherwise.
     */
    function charpos(
        input: string,
        charpos?: number,
        offset?: number,
    ): LuaMultiReturn<[number, number]>;

    /**
     * Escapes a string to a UTF-8 format string. It supports several escape formats, see the
     * formatting table.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.escape|MTASA Wiki}
     * @param input A string character sequence
     * @return Returns a ''string'' containing the escaped UTF-8 characters from the original string.
     */
    function escape(input: string): string;

    /**
     * Finds the first occurrence of the [http://lua-users.org/wiki/PatternsTutorial pattern] in the
     * string passed. If an instance of the pattern is found, a pair of values representing the start and the
     * end of the matched string is returned.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.find|MTASA Wiki}
     * @param input A string character sequence
     * @param pattern A string match http://lua-users.org/wiki/PatternsTutorial pattern (you can
     * disable pattern matching by using the optional fourth argument plain)  {{OptionalArg}}
     * @param startpos An integer representing the beginning position.
     * @default 1
     * @param plain A boolean, if pattern matching should be turned off
     * @default false
     * @return Returns two ''number'' values for the beginning and ending position of the matched
     * string, ''nil'' otherwise.
     */
    function find(
        input: string,
        pattern: string,
        startpos?: number,
        plain?: boolean,
    ): LuaMultiReturn<[number, number]>;

    /**
     * Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings. If
     * ''input'' is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.lower|MTASA Wiki}
     * @return Returns a ''string'' in lowercase OR returns an ''integer'' (see description).
     */
    function lower(int: string): string | number;

    /**
     * This function returns a pattern finding iterator for UTF-8 strings. The iterator will search
     * through the string '''input''' looking for instances of the pattern you passed. For more information on
     * iterators read the [http://lua-users.org/wiki/ForTutorial ForTutorial] and
     * [http://lua-users.org/wiki/IteratorsTutorial IteratorsTutorial].
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.gmatch|MTASA Wiki}
     * @param input A string character sequence
     * @param pattern A string match http://lua-users.org/wiki/PatternsTutorial pattern
     * @return Returns an ''function'' for iterations on the '''input''' string by using the passed
     * '''pattern''' string.
     */
    function gmatch(input: string, pattern: string): iterator;

    /**
     * Returns a copy of the original input string with replaced matches from the pattern by the
     * replacement value.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.gsub|MTASA Wiki}
     * @param input A string character sequence
     * @param pattern A string match http://lua-users.org/wiki/PatternsTutorial pattern
     * @param replace A string literal OR an integer value OR a function (see examples below) OR a
     * table ({ match = replacement })  {{OptionalArg}}
     * @param match_limit An integer to limit the number of substitutions made
     * @default utf8.len( input
     * @return Returns a pair of values, the modified ''string'' and the ''integer'' number of
     * substitutions made.
     */
    function gsub(
        input: string,
        pattern: string,
        replace: string,
        match_limit?: number,
    ): string;

    /**
     * Inserts a substring into input string. If insert-position is given, the substring will be
     * inserted before the character at this index, otherwise the substring will concatenate to input. The insert
     * position may be negative.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.insert|MTASA Wiki}
     * @param input A string character sequence
     * @param insert_pos An integer representing the position, where the substring will be inserted at.
     * @default utf8.len( input
     * @param substring A string character sequence which should be inserted  {{OptionalArg}}
     * @return Returns a ''string'' with the inserted substring value.
     */
    function insert(
        input: string,
        insert_pos?: number,
        substring?: string,
    ): string;

    /**
     * Returns the length of the string passed.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.len|MTASA Wiki}
     * @param input A string character sequence  {{OptionalArg}}
     * @param i An integer representing the beginning position for measuring the length of the section
     * (may be negative).
     * @default 1
     * @param j An integer representing the ending position for measuring the length of the section
     * (may be negative).
     * @default utf8.len( input
     * @return Returns the length of the string as an ''integer''.
     */
    function len(input: string, i?: number, j?: number): number;

    /**
     * Extract substrings by matching patterns in the input string. This function can be used to
     * extract specific information from a string.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.match|MTASA Wiki}
     * @param input A string character sequence
     * @param pattern A string match http://lua-users.org/wiki/PatternsTutorial pattern  {{OptionalArg}}
     * @param index An integer representing the beginning position for the pattern matching
     * @default 1
     * @return Returns a sequence of ''string'' matches from the '''input''' string, ''nil'' otherwise.
     */
    function match(
        input: string,
        pattern: string,
        index?: number,
    ): LuaMultiReturn<string[]>;

    /**
     * Compares two strings in lower-case and returns the difference indicator (see table below) as an
     * integer value.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.ncasecmp|MTASA Wiki}
     * @param a A string character sequence
     * @param b A string character sequence
     * @return Returns an ''integer'', which indicates the difference, see the table below for further
     * information.
     */
    function ncasecmp(a: string, b: string): number;

    /**
     * This is an iteration function to traverse each single codepoint of a UTF-8 string.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.next|MTASA Wiki}
     * @param input A string character sequence  {{OptionalArg}}
     * @param charpos An integer representing the beginning position (offset will be added/subtracted).
     * @default 0
     * @param offset An integer representing the offset to charpos.
     * @default 1
     * @return Returns the ''integer'' position in bytes and the ''integer'' codepoint at this
     * position, ''nil'' otherwise.
     */
    function next(
        input: string,
        charpos?: number,
        offset?: number,
    ): LuaMultiReturn<[number, number]>;

    /**
     * This function removes a substring in a UTF-8 string by using a position range.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.remove|MTASA Wiki}
     * @param input A string character sequence
     * @param start An integer representing the beginning position.  {{OptionalArg}}
     * @default 1 [
     * @param stop An integer representing the ending position.
     * @default -1
     * @return Returns the ''string'' with the removed substring from the range.
     */
    function remove(input: string, start: number, stop?: number): string;

    /**
     * Reverses the input string.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.reverse|MTASA Wiki}
     * @param input A string character sequence
     * @return Returns a ''string'' containing the reversed original UTF-8 string.
     */
    function reverse(input: string): string;

    /**
     * Returns a substring of the string passed. The substring starts at ''i''. If the third argument
     * ''j'' is not given, the substring will end at the end of the string. If the third argument is given,
     * the substring ends at and includes ''j''.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.sub|MTASA Wiki}
     * @param input A string character sequence  {{OptionalArg}}
     * @param i An integer representing the beginning position (may be negative).
     * @default 1
     * @param j An integer representing the ending position (may be negative).
     * @default utf8.len( input
     * @return Returns a ''string'' substring of the original string, containing the selected range
     * from the original string.
     */
    function sub(input: string, i?: number, j?: number): string;

    /**
     * Converts a UTF-8 string to title case (uppercase). If ''input'' is an integer, it is treated as
     * a codepoint and a converted codepoint (integer) is returned.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.upper|MTASA Wiki}
     * @return Returns a ''string'' in uppercase OR returns an ''integer'' (see description).
     */
    function upper(int: string): string;

    /**
     * Calculates the width of UTF-8 strings with special/unprintable characters, which require special
     * width treatment.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.width|MTASA Wiki}
     * @param ambi_is_double A boolean, if set to true, ambiguous characters width is 2 (see example
     * below).
     * @default false
     * @param default_width An integer, if given, is used as width for unprintable characters.
     * @default 0
     * @return Returns the ''integer'' width of the input string OR the width of the codepoint integer.
     */
    function width(
        int: string,
        ambi_is_double?: boolean,
        default_width?: number,
    ): number;

    /**
     * Returns the location, offset and width of the character at the given location in the UTF-8
     * string.
     * @see {@link https://wiki.multitheftauto.com/wiki/utf8.widthindex|MTASA Wiki}
     * @param input A string character sequence  {{OptionalArg}}
     * @param ambi_is_double A boolean, if set to true, ambiguous characters width is 2 (see example).
     * @default false
     * @param default_width An integer, if given, is used as width for unprintable characters.
     * @default 0
     * @return Returns the given location, the offset in UTF-8 encoding (if cursor is in the middle of
     * the wide char - offset will be 2) and the width of the character, otherwise only the location as
     * ''integer'' will be returned.
     */
    function widthindex(
        input: string,
        location: number,
        ambi_is_double?: boolean,
        default_width?: number,
    ): LuaMultiReturn<[number, number, number]>;
}
