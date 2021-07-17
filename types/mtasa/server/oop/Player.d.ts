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
    FetchRemoteCallback,
    GenericEventHandler
} from '../structure';

/** @customConstructor Player */
export class Player extends Ped {
    /**
     * This function is used to forcefully show a players radar map.
     */
    mapForced: boolean;

    /**
     * This function returns anti-cheat info for a player. The info returned by this function
     * can change over time, so use the server event onPlayerACInfo instead.
     */
    ACInfo: LuaTable;

    /**
     * This function gets the amount of time in milliseconds that a players position has not
     * changed.
     */
    idleTime: number;

    /**
     * This function returns a string containing the IP address of the player.
     */
    ip: string;

    /**
     * Returns the amount of money a player currently has.
     */
    money: number;

    /**
     * This function returns a string containing the name of the specified player.
     */
    name: string;

    /**
     * This will allow you to retrieve the name tag a player is currently using.
     */
    nametagText: string;

    /**
     * This function returns the ping of a specified player. The ping is the number of
     * milliseconds that data takes to travel from the players client to the server or vice
     * versa.
     */
    ping: number;

    /**
     * This will allow you to retrieve the player current debug script level.
     */
    scriptDebugLevel: number;

    /**
     * This function returns the serial for a specified player.
     */
    serial: string;

    /**
     * This function gets the client version of the specified player as a sortable string. The
     * string is always 15 characters long and is formatted as follows:
     * * 1 character representing the major version
     * * 1 dot character
     * * 1 character representing the minor version
     * * 1 dot character
     * * 1 character representing the maintenance version
     * * 1 dash character
     * * 1 character representing the build type
     * * 1 dot character
     * * 5 characters representing the build number
     * * 1 dot character
     * * 1 character representing the build revision
     * An example of a version string would be: 1.0.4-9.01746.0
     * Where the first three numbers represent the major/minor/maintenance version, i.e.
     * 1.0.4<br>
     * The fourth number is 9, which means its a release build, (Development and beta builds
     * have lower numbers here)<br>
     * And the fifth and sixth numbers represent the build number.
     */
    version: string;

    /**
     * This function gets a players current wanted level. The wanted level is indicated by the
     * amount of stars a player has on the GTA HUD.
     */
    wantedLevel: number;

    /**
     * Use this function to check if a player has been muted.
     */
    muted: boolean;

    /**
     * This function will allow you to determine if a players name tag is currently showing.
     */
    nametagShowing: boolean;

    /**
     * Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.
     */
    blurLevel: boolean;

    /**
     * This function allows you to change who can hear the voice of a player.
     */
    voiceBroadcastTo: boolean;

    /**
     * This function allows you to mute voices for a player.
     */
    voiceIgnoreFrom: boolean;

    /**
     * Returns the interior of the local camera (independent of the interior of the local
     * player).
     */
    cameraInterior: number;

    /**
     * This function gets the position of the camera and the position of the point it is facing.
     */
    cameraMatrix: LuaMultiReturn<[
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ]>;

    /**
     * This function returns an element that corresponds to the current target of the specified
     * players camera (i.e. what it is following).
     */
    cameraTarget: Element;

    /**
     * This function gets the current team a player is on.
     */
    team: Team;

    /**
     * This function returns the specified players account object.
     */
    account: Account;

    /**
     * This function is used to forcefully show a players radar map.
     * @see {@link https://wiki.multitheftauto.com/wiki/ForcePlayerMap Wiki, forcePlayerMap }
     * @param forceOn : A boolean value representing whether or not the players radar map will be forced on
     */
    forceMap(
        forceOn: boolean
    ): boolean;

    /**
     * This function returns a table of all the alive players on the server. Opposite function
     * of getDeadPlayers.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetAlivePlayers Wiki, getAlivePlayers }
     * @return returns a table of all the alive players.
     */
    static getAllAlive(): LuaTable;

    /**
     * This function returns a table of all currently dead players on the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetDeadPlayers Wiki, getDeadPlayers }
     * @return returns a table of all the dead players.
     */
    static getAllDead(): LuaTable;

    /**
     * This function returns anti-cheat info for a player. The info returned by this function
     * can change over time, so use the server event onPlayerACInfo instead.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerACInfo Wiki, getPlayerACInfo }
     * @return returns a table with the following entries:
     * * detectedac: a string containing a comma separated list of anti-cheat_guide|anti-cheat
     * codes the player has triggered.
     * *d3d9size: a number representing the file size of any custom d3d9.dll the player may have
     * installed.
     * *d3d9md5: a string containing the md5 of any custom d3d9.dll the player may have
     * installed.
     * *d3d9sha256: a string containing the sha256 of any custom d3d9.dll the player may have
     * installed.
     */
    getACInfo(): LuaTable;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerAnnounceValue Wiki, getPlayerAnnounceValue }
     * @param key The name of the key.
     * @return this function returns a string containing the requested value if a valid key was
     * specified or false otherwise.
     */
    getAnnounceValue(
        key: string
    ): string;

    /**
     * This function allows you to check the current blur level of a specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerBlurLevel Wiki, getPlayerBlurLevel }
     * @return returns the players blur level if successful, false if an invalid player was given.
     */
    getBlurLevel(): number;

    /**
     * This function returns the number of players currently connected to the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerCount Wiki, getPlayerCount }
     * @return returns the number of players connected to the server as an int.
     */
    static getCount(): number;

    /**
     * This function returns a player element for the player with the name passed to the
     * function.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerFromName Wiki, getPlayerFromName }
     * @param playerName : A string containing the name of the player you want to reference
     * @return returns a player element for the player with the nickname provided. if there is no player
     * with that name, false is returned.
     */
    constructor(
        playerName: string
    );

    /**
     * This function gets the amount of time in milliseconds that a players position has not
     * changed.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerIdleTime Wiki, getPlayerIdleTime }
     * @return returns the amount of time in milliseconds that a player has been idle, false otherwise.
     */
    getIdleTime(): number;

    /**
     * This function returns a string containing the IP address of the player.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerIP Wiki, getPlayerIP }
     * @return returns a string containing the requested playerss ip, or false if the player passed to
     * the function is invalid.
     */
    getIP(): string;

    /**
     * Returns the amount of money a player currently has.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerMoney Wiki, getPlayerMoney }
     * @return returns an integer with the amount of money the specified player has, false if the player
     * is invalid.
     */
    getMoney(): number;

    /**
     * This function returns a string containing the name of the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerName Wiki, getPlayerName }
     * @return returns a string containing the requested players name, or false if the player passed to
     * the function is invalid.
     */
    getName(): string;

    /**
     * This function gets the current color of a players name tag as RGB values. These are in
     * the range 0-255.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerNametagColor Wiki, getPlayerNametagColor }
     * @return returns red, green and blue values if an existent player was specified, false otherwise.
     */
    getNametagColor(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This will allow you to retrieve the name tag a player is currently using.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerNametagText Wiki, getPlayerNametagText }
     * @return returns a string with the nametag text, false if the player is invalid.
     */
    getNametagText(): string;

    /**
     * This function returns the ping of a specified player. The ping is the number of
     * milliseconds that data takes to travel from the players client to the server or vice
     * versa.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerPing Wiki, getPlayerPing }
     * @return returns the ping as an int, or false if the player is invalid.
     */
    getPing(): number;

    /**
     * This will allow you to retrieve the player current debug script level.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerScriptDebugLevel Wiki, getPlayerScriptDebugLevel }
     * @return returns an int with the player debug script level, false if the player is invalid.
     */
    getScriptDebugLevel(): number;

    /**
     * This function returns the serial for a specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerSerial Wiki, getPlayerSerial }
     * @return returns the serial as a string if it was found, false otherwise.
     */
    getSerial(): string;

    /**
     * This function gets the client version of the specified player as a sortable string. The
     * string is always 15 characters long and is formatted as follows:
     * * 1 character representing the major version
     * * 1 dot character
     * * 1 character representing the minor version
     * * 1 dot character
     * * 1 character representing the maintenance version
     * * 1 dash character
     * * 1 character representing the build type
     * * 1 dot character
     * * 5 characters representing the build number
     * * 1 dot character
     * * 1 character representing the build revision
     * An example of a version string would be: 1.0.4-9.01746.0
     * Where the first three numbers represent the major/minor/maintenance version, i.e.
     * 1.0.4<br>
     * The fourth number is 9, which means its a release build, (Development and beta builds
     * have lower numbers here)<br>
     * And the fifth and sixth numbers represent the build number.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerVersion Wiki, getPlayerVersion }
     * @return returns a string containing the client version, or false if the player is invalid.
     */
    getVersion(): string;

    /**
     * This function gets a players current wanted level. The wanted level is indicated by the
     * amount of stars a player has on the GTA HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerWantedLevel Wiki, getPlayerWantedLevel }
     */
    getWantedLevel(): number;

    /**
     * This function returns a random player.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetRandomPlayer Wiki, getRandomPlayer }
     * @return returns a random player, false if the server is empty.
     */
    static getRandom(): Player;

    /**
     * This function adds money to a players current money amount.  To set absolute values,
     * setPlayerMoney can be used.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/GivePlayerMoney Wiki, givePlayerMoney }
     * @param amount a positive integer number specifying the amount of money to give to the player.
     */
    giveMoney(
        amount: number
    ): boolean;

    /**
     * This function checks if the specified players radar map has been forced on or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPlayerMapForced Wiki, isPlayerMapForced }
     * @return returns true if the players radar map is forced on, false otherwise.
     */
    isMapForced(): boolean;

    /**
     * Use this function to check if a player has been muted.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPlayerMuted Wiki, isPlayerMuted }
     * @return returns true if the player is muted and false otherwise.
     */
    isMuted(): boolean;

    /**
     * This function will allow you to determine if a players name tag is currently showing.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPlayerNametagShowing Wiki, isPlayerNametagShowing }
     * @return returns true if the players name tag is being shown, false otherwise.
     */
    isNametagShowing(): boolean;

    /**
     * Added to client side.
     * This function allows you to make the server reveal whether or not voice is currently
     * enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsVoiceEnabled Wiki, isVoiceEnabled }
     * @return returns true if the voice is enabled on the server, false otherwise.
     */
    static isVoiceEnabled(): boolean;

    /**
     * This function redirects the player to a specified server.
     * @see {@link https://wiki.multitheftauto.com/wiki/RedirectPlayer Wiki, redirectPlayer }
     * @param serverIP The IP address (or domain name that resolves to the IP address) of the server you want to
     * redirect the player to. Use an empty string to reconnect to the same server.
     * @param serverPort The game port of the server you want to redirect the player to, this is usually 22003.
     * Set to zero to use the same port as the current server.
     * @param serverPassword The password for the server if its protected
     * @return returns true if the player was redirected successfully, false if bad arguments were
     * passed.
     */
    redirect(
        serverIP: string,
        serverPort: number,
        serverPassword?: string
    ): boolean;

    /**
     * This function will force the specified player to resend their mod info, triggering the
     * onPlayerModInfo event again.
     * @see {@link https://wiki.multitheftauto.com/wiki/ResendPlayerModInfo Wiki, resendPlayerModInfo }
     * @return returns true if the mod info will be resent, false otherwise.
     */
    resendModInfo(): boolean;

    /**
     * This function allows you to change ASE announce values for any player using a specified
     * key.
     * As an example this can be used to change the score value which will be shown at
     * https://www.game-state.com/ game-state.coms server list.
     * For server-wide changes you can use setRuleValue!
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerAnnounceValue Wiki, setPlayerAnnounceValue }
     * @param key The key which the value will be stored at.
     * @param value The value you wish to store.
     * @return returns true if the value was set succesfully, false otherwise.
     */
    setAnnounceValue(
        key: string,
        value: string
    ): boolean;

    /**
     * Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerBlurLevel Wiki, setPlayerBlurLevel }
     * @param level The level to set the blur to (default: 36)
     */
    setBlurLevel(
        level: number
    ): boolean;

    /**
     * This function will show or hide a part of the players HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerHudComponentVisible Wiki, setPlayerHudComponentVisible }
     * @param component The component you wish to show or hide. Valid values are:
     * @param all All of the following at the same time
     * @param ammo The display showing how much ammo the player has in their weapon
     * @param area_name The text that appears containing the name of the area a player has entered
     * @param armour The display showing the players armor
     * @param breath The display showing the players breath
     * @param clock The display showing the in-game time
     * @param health The display showing the players health
     * @param money The display showing how much money the player has
     * @param radar The bottom-left corner miniradar
     * @param vehicle_name The text that appears containing the players vehicle name when the player enters a vehicle
     * @param weapon The display showing the players weapon
     * @param radio The display showing the radio label
     * @param wanted The display showing the players wanted level
     * @param crosshair The weapon crosshair and sniper scope
     * @param show Specify if the component should be shown (true) or hidden (false)
     */
    setHudComponentVisible(
        component: string,
        show: boolean
    ): boolean;

    /**
     * Sets a players money to a certain value, regardless of current player money. It should be
     * noted that setting negative values does not work and in fact gives the player large
     * amounts of money.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerMoney Wiki, setPlayerMoney }
     * @param amount A whole integer specifying the new amount of money the player will have.
     * @param instant If set to true money will be set instantly without counting up/down like in
     * singleplayer.}}
     */
    setMoney(
        amount: number,
        instant?: boolean
    ): boolean;

    /**
     * Use this function to mute or unmute the player.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerMuted Wiki, setPlayerMuted }
     * @param state Use true to mute and false to unmute the player.
     * @return returns true if the player was successfully muted or unmuted, false otherwise.
     */
    setMuted(
        state: boolean
    ): boolean;

    /**
     * This function changes the specified players name. Note that any change made to a players
     * name with this function is not saved in their settings so the name change only lasts till
     * they disconnect.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerName Wiki, setPlayerName }
     * @param newName the new name to set for the player.
     * @return returns true if the player name was changed succesfully, false if invalid arguments are
     * specified.
     */
    setName(
        newName: string
    ): boolean;

    /**
     * This allows you to change the RGB color mixture in the name tags of players.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerNametagColor Wiki, setPlayerNametagColor }
     * @param r The amount of red you want in the mixture of RGB (0-255 is valid)
     * @param g The amount of green you want in the mixture of RGB (0-255 is valid)
     * @param b The amount of blue you want in the mixture of RGB (0-255 is valid)
     * @param false If false is specified instead of the colors, the nametag color will reset to defaulting
     * to your team color.
     * @return returns true if the function was successful, false otherwise.
     */
    setNametagColor(
        r: number,
        g: number,
        b: number
    ): boolean;

    /**
     * Use this to define whether the players name tag is visible or invisible.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerNametagShowing Wiki, setPlayerNametagShowing }
     * @param showing Use true or false to show/hide the tag
     * @return returns true if successful, false otherwise
     */
    setNametagShowing(
        showing: boolean
    ): boolean;

    /**
     * This will change the text of a players nickname in the world to something besides the
     * nickname he chose. This will not change the players actual nickname, it only changes the
     * visible aspect inside the world (you will see his original nickname in the scoreboard and
     * will refer to his original name in scripts).
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerNametagText Wiki, setPlayerNametagText }
     * @param text The new nickname text that will be displayed
     * @return returns true if successful, false otherwise.
     */
    setNametagText(
        text: string
    ): boolean;

    /**
     * This will set players debug level, equivalent to Debugging|debugscript <level>.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerScriptDebugLevel Wiki, setPlayerScriptDebugLevel }
     * @param level 0: close debug console, 1: only errors, 2: errors and warnings, 3: errors, warnings and
     * info messages
     * @return returns true if successful, false otherwise.
     */
    setScriptDebugLevel(
        level: number
    ): boolean;

    /**
     * This function allows you to change who can hear the voice of a player.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerVoiceBroadcastTo Wiki, setPlayerVoiceBroadcastTo }
     * @param broadcastTo Element or table of elements who should hear the voice from this player
     * @return returns true if the value was set successfully, false otherwise.
     */
    setVoiceBroadcastTo(
        broadcastTo: any
    ): boolean;

    /**
     * This function allows you to mute voices for a player.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerVoiceIgnoreFrom Wiki, setPlayerVoiceIgnoreFrom }
     * @param ignoreFrom Element or table of elements which the player should not hear voices from. Use nil if no
     * one should be ignored.
     * @return returns true if the value was set successfully, false otherwise.
     */
    setVoiceIgnoreFrom(
        ignoreFrom: any
    ): boolean;

    /**
     * This function is used to set a players wanted level. The wanted level is indicated by the
     * amount of stars a player has on the GTA HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerWantedLevel Wiki, setPlayerWantedLevel }
     * @param stars An integer from 0 to 6 representing the wanted level
     * @return returns true if the wanted level was set successfully, false if any of the arguments were
     * invalid.
     */
    setWantedLevel(
        stars: number
    ): boolean;

    /**
     * This function spawns the player at an arbitary point on the map.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/SpawnPlayer Wiki, spawnPlayer }
     * @param x The x co-ordinate to spawn the player at.
     * @param y The y co-ordinate to spawn the player at.
     * @param z The z co-ordinate to spawn the player at.
     * @param rotation rotation of the player on spawn.
     * @param skinID players skin on spawn. Character Skins
     * @param interior interior the player will spawn into. Interior IDs
     * @param dimension The ID of the dimension that the player should be in.
     * @param theTeam the team the player will join.
     * @return returns true if the player was spawned successfully, false otherwise.
     */
    spawn(
        x: number,
        y: number,
        z: number,
        rotation?: number,
        skinID?: number,
        interior?: number,
        dimension?: number,
        theTeam?: Team
    ): boolean;

    /**
     * This function subtracts money from a players current money amount.
     * @see {@link https://wiki.multitheftauto.com/wiki/TakePlayerMoney Wiki, takePlayerMoney }
     * @param amount an integer number specifying the amount of money to take from the player.
     */
    takeMoney(
        amount: number
    ): boolean;

    /**
     * This function forces a client to capture the current screen output and send it back to
     * the server. The image will contain the GTA HUD and the output of any dxDraw functions
     * that are not flagged as post GUI. The image specifically excludes the chat box and all
     * GUI (including the client console). The result is received with the event
     * onPlayerScreenShot.
     * @see {@link https://wiki.multitheftauto.com/wiki/TakePlayerScreenShot Wiki, takePlayerScreenShot }
     * @param width the width of the capture image.
     * @param height the height of the capture image.
     * @param tag A string to help identify the screen capture. The string is passed to the matching
     * onPlayerScreenShot event for your personal convenience.
     * @param quality Quality of the final JPEG image from 0 to 100. A lower value can reduce the memory used
     * by the image considerably which will result in faster and less intrusive uploads.
     * @param maxBandwith The amount of client upload bandwidth to use (in bytes per second) when sending the image.
     * *'''maxPacketSize: ''' The maximum size of one packet.
     * @return returns true if the function was successfully, false if invalid arguments are specified.
     */
    takeScreenShot(
        width: number,
        height: number,
        tag?: string,
        quality?: number,
        maxBandwith?: number,
        maxPacketSize?: number
    ): boolean;

    /**
     * This function plays a frontend sound for the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/PlaySoundFrontEnd Wiki, playSoundFrontEnd }
     * @param sound a whole int specifying the sound id to play. Valid values are:
     */
    playSoundFrontEnd(
        sound: number
    ): boolean;

    /**
     * This function will fade a players camera to a color or back to normal over a specified
     * time period. This will also affect the sound volume for the player (50% faded = 50%
     * volume, full fade = no sound). For clientside scripts you can perform 2 fade ins or fade
     * outs in a row, but for serverside scripts you must use one then the other.
     * @see {@link https://wiki.multitheftauto.com/wiki/FadeCamera Wiki, fadeCamera }
     * @param fadeIn Should the camera be faded in or out? Pass true to fade the camera in, false to fade it
     * out to a color.
     * @param timeToFade The number of seconds it should take to fade.
     * @param red The amount of red in the color that the camera fades out to (0 - 255). Not required for
     * fading in.
     * @param green The amount of green in the color that the camera fades out to (0 - 255). Not required for
     * fading in.
     * @param blue The amount of blue in the color that the camera fades out to (0 - 255). Not required for
     * fading in.
     */
    fadeCamera(
        fadeIn: boolean,
        timeToFade?: number,
        red?: number,
        green?: number,
        blue?: number
    ): boolean;

    /**
     * Returns the interior of the local camera (independent of the interior of the local
     * player).
     * @see {@link https://wiki.multitheftauto.com/wiki/GetCameraInterior Wiki, getCameraInterior }
     */
    getCameraInterior(): number;

    /**
     * This function gets the position of the camera and the position of the point it is facing.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetCameraMatrix Wiki, getCameraMatrix }
     */
    getCameraMatrix(): LuaMultiReturn<[
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ]>;

    /**
     * This function returns an element that corresponds to the current target of the specified
     * players camera (i.e. what it is following).
     * @see {@link https://wiki.multitheftauto.com/wiki/GetCameraTarget Wiki, getCameraTarget }
     */
    getCameraTarget(): Element;

    /**
     * Sets the interior of the local camera. Only the interior of the camera is changed, the
     * local player stays in the interior he was in.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetCameraInterior Wiki, setCameraInterior }
     * @param interior the interior to place the camera in.
     */
    setCameraInterior(
        interior: number
    ): boolean;

    /**
     * This function sets the cameras position and direction. The first three arguments are the
     * point at which the camera lies, the last three are the point the camera faces (or the
     * point it looks at).
     * @see {@link https://wiki.multitheftauto.com/wiki/SetCameraMatrix Wiki, setCameraMatrix }
     * @param positionX The x coordinate of the cameras position.
     * @param positionY The y coordinate of the cameras position.
     * @param positionZ The z coordinate of the cameras position.
     * @param {{New feature/item|3.0141|1.4.1|7005|Instead of six coordinates, or two vectors, a Matrix can be supplied.}}
     * @param lookAtX The x coordinate of the point the camera faces.
     * @param lookAtY The y coordinate of the point the camera faces.
     * @param lookAtZ The z coordinate of the point the camera faces.
     * @param roll The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive
     * values will turn it counter-clockwise and negative values will turn it clockwise. -180 or
     * 180 means the camera is upside down.
     * @param fov the field of view angle, 0.01 to 180. The higher this value is, the more you will be able
     * to see what is to your sides.
     */
    setCameraMatrix(
        positionX: number,
        positionY: number,
        positionZ: number,
        lookAtX?: number,
        lookAtY?: number,
        lookAtZ?: number,
        roll?: number,
        fov?: number
    ): boolean;

    /**
     * This function allows you to set a players camera to follow other elements instead.
     * Currently supported element type is:
     * *Players
     * @see {@link https://wiki.multitheftauto.com/wiki/SetCameraTarget Wiki, setCameraTarget }
     * @param target The player who you want the camera to follow. If none is specified, the camera will
     * target the player.
     */
    setCameraTarget(
        target?: Player
    ): boolean;

    /**
     * This function triggers an event previously registered on a client. This is the primary
     * means of passing information between the server and the client. Clients have a similar
     * triggerServerEvent function that can do the reverse. You can treat this function as if it
     * was an asynchronous function call, using triggerServerEvent to pass back any returned
     * information if necessary.
     * Almost any data types can be passed as expected, including elements and complex nested
     * tables. Non-element MTA data types like xmlNodes or resource pointers will not be able to
     * be passed as they do not necessarily have a valid representation on the client.
     * Events are sent reliably, so clients will receive them, but there may be (but shouldnt
     * be) a significant delay before they are received. You should take this into account when
     * using them.
     * Keep in mind the bandwidth issues when using events - dont pass a large list of arguments
     * unless you really need to. It is marginally more efficient to pass one large event than
     * two smaller ones.
     * @see {@link https://wiki.multitheftauto.com/wiki/TriggerClientEvent Wiki, triggerClientEvent }
     * @param name The name of the event to trigger client side. You should register this event with
     * addEvent and add at least one event handler using addEventHandler.
     * @param sourceElement The element that is the Event system#Event handlers|source of the event.
     * @param arguments... A list of arguments to trigger with the event. You can pass any lua data type (except
     * functions). You can also pass elements.
     * @return returns true if the event trigger has been sent, false if invalid arguments were
     * specified.
     */
    triggerEvent(
        name: string,
        sourceElement: Element,
        ...varargs: any[]
    ): boolean;

    /**
     * This function will ban the specified player by either IP, serial or username
     * This function will ban the specified player from the server by IP.
     * @see {@link https://wiki.multitheftauto.com/wiki/BanPlayer Wiki, banPlayer }
     * @param IP Will player be banned by IP?
     * @param Username Will player be banned by username?
     * @param Serial Will player be banned by serial?
     * @param responsibleElement The element that is responsible for banning the player. This can be a player or the root
     * (getRootElement()) (Maximum 30 characters if using a string).
     * @param reason The reason the player will be banned from the server.
     * @param seconds The amount of seconds the player will be banned from the server for. This can be 0 for an
     * infinite amount of time.
     * @return returns a ban object if banned successfully, or false if unsuccessful.
     */
    ban(
        IP?: boolean,
        Username?: boolean,
        Serial?: boolean,
        responsiblePlayer?: Player | string,
        reason?: string,
        seconds?: number
    ): Ban;

    /**
     * This function will kick the specified player from the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/KickPlayer Wiki, kickPlayer }
     * @param responsiblePlayer The player that is responsible for the event. Note: If left out as in the second syntax,
     * responsible player for the kick will be Console (Maximum 30 characters if using a string).
     * @param reason The reason for the kick. (Maximum 64 characters before 1.5.8, Maximum 128 characters
     * after 1.5.8)
     * @return returns true if the player was kicked succesfully, false if invalid arguments are
     * specified.
     */
    kick(
        responsiblePlayer?: Player | string,
        reason?: string
    ): boolean;

    /**
     * This function gets the current team a player is on.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerTeam Wiki, getPlayerTeam }
     * @return returns a team element representing the team the player is on, false if the player is not
     * part of a team.
     */
    getTeam(): Team;

    /**
     * This function adds a player to an existing team. The player will automatically be removed
     * from his current team if hes on one.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerTeam Wiki, setPlayerTeam }
     * @param theTeam The team you want to add the player to, or nil if you wish to unassign a player from his
     * team.
     * @return returns true if the player was successfully added to the specified team or removed from
     * his previous one, false otherwise.
     */
    setTeam(
        theTeam: Team
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
     * @param visibleTo Can also be a table of players or team.}}
     * @param r The amount of red in the color of the text. Default value is 231.
     * @param g The amount of green in the color of the text. Default value is 217.
     * @param b The amount of blue in the color of the text. Default value is 176.
     * @param colorCoded A boolean value determining whether or not #RRGGBB tags should be used.
     * Note: The #RRGGBB format must contain capital letters a-f is not acceptable but A-F is.
     * Default RGB values in this format are: '#E7D9B0'.
     */
    outputChat(
        visibleTo?: LuaTable | Element,
        r?: number,
        g?: number,
        b?: number,
        colorCoded?: boolean
    ): boolean;

    /**
     * This function returns the specified players account object.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerAccount Wiki, getPlayerAccount }
     * @return returns the players account object, or false if the player passed to the function is
     * invalid.
     */
    getAccount(): Account;

    /**
     * This functions logs the given player in to the given account. You need to provide the
     * password needed to log into that account.
     * @see {@link https://wiki.multitheftauto.com/wiki/LogIn Wiki, logIn }
     * @param theAccount The account to log the player into
     * @param thePassword The password needed to sign into this account
     * @return returns true if the player was successfully logged into the given account. returns false
     * or nil if the log in failed for some reason, ie. the player was already logged in to some
     * account (use logout first), if the account was already in use or if it failed for some
     * other reason.
     */
    logIn(
        theAccount: Account,
        thePassword: string
    ): boolean;

    /**
     * This function logs the given player out of his current account.
     * @see {@link https://wiki.multitheftauto.com/wiki/LogOut Wiki, logOut }
     * @return returns true if the player was successfully logged out, false or nil if it failed for
     * some reason, ie. the player was never logged in.
     */
    logOut(): boolean;
}
