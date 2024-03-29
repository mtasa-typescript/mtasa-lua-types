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
 * This function returns the maximum number of player slots on the server.
 * @see https://wiki.multitheftauto.com/wiki/GetMaxPlayers
 * @return returns the maximum number of players allowed on the server.
 * @noSelf
 */
export declare function getMaxPlayers(): number;

/**
 * This function retrieves the servers HTTP port.
 * @see https://wiki.multitheftauto.com/wiki/GetServerHttpPort
 * @return an integer corresponding to the servers http port.
 * @noSelf
 */
export declare function getServerHttpPort(): number;

/**
 * This function retrieves the servers name.
 * @see https://wiki.multitheftauto.com/wiki/GetServerName
 * @return a string containing the servers name.
 * @noSelf
 */
export declare function getServerName(): string;

/**
 * This function returns the current password required to join the server.
 * @see https://wiki.multitheftauto.com/wiki/GetServerPassword
 * @return returns the current server password as a string if it has a password, if not it returns
 * nil.
 * @noSelf
 */
export declare function getServerPassword(): string;

/**
 * This function retrieves the servers port.
 * @see https://wiki.multitheftauto.com/wiki/GetServerPort
 * @return an integer corresponding to the servers port.
 * @noSelf
 */
export declare function getServerPort(): number;

/**
 * This function retrieves whether San Andreas game glitches are enabled or not, set by
 * using setGlitchEnabled
 * @see https://wiki.multitheftauto.com/wiki/IsGlitchEnabled
 * @param glitchName the name of the property to set. Possible values are:
 * @return returns true if if the glitch was enabled, or false if it is disabled.
 * @noSelf
 */
export declare function isGlitchEnabled(glitchName: string): boolean;

/**
 * @see https://wiki.multitheftauto.com/wiki/IsTransferBoxVisible
 * @return on server this returns a boolean, whether the transfer box should be visible during
 * downloads or not.
 * on client this returns a boolean, whether the transfer box should be visible or not at
 * the time of invocation.
 * @noSelf
 */
export declare function isTransferBoxVisible(): boolean;

/**
 * This function enables or disables glitches that are found in the original Single Player
 * game that can be used to gain an advantage in multiplayer.
 * Users of the fastmove glitch may additionally want to install
 * https://community.mtasa.com/index.php?p=resources&s=details&id=13368 this resource to
 * disable crouchsliding.
 * @see https://wiki.multitheftauto.com/wiki/SetGlitchEnabled
 * @param glitchName the name of the property to set. Possible values are:
 * @param enable whether or not to enable the glitch.
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function setGlitchEnabled(
    glitchName: string,
    enable: boolean,
): boolean;

/**
 * This function sets the maximum number of player slots on the server.
 * @see https://wiki.multitheftauto.com/wiki/SetMaxPlayers
 * @param slots Maximum number of player slots on the server.
 * @return returns true if number of player slots was successfully changed, false or nil otherwise.
 * @noSelf
 */
export declare function setMaxPlayers(slots: number): boolean;

/**
 * This function changes the password required to join the server to the given string.
 * @see https://wiki.multitheftauto.com/wiki/SetServerPassword
 * @param thePassword The new server password you want. Pass nil or an empty string to remove the password.
 * @return returns true if the password was successfully changed or removed, false or nil otherwise.
 * @noSelf
 */
export declare function setServerPassword(thePassword: string): boolean;

/**
 * @see https://wiki.multitheftauto.com/wiki/SetTransferBoxVisible
 * @param visible The new transfer box visibility state.
 * @return returns true if the visibility was set successfully, false otherwise.
 * @noSelf
 */
export declare function setTransferBoxVisible(visible: boolean): boolean;

/**
 * This function shuts down the server.
 * Make sure your server ACL setup has function.shutdown object protected.
 * @see https://wiki.multitheftauto.com/wiki/Shutdown
 * @param reason the reason why the server has been shutdown.
 * @param exitCode the server application exit code to be returned on shutdown.
 * |20915}}
 * @return returns false if it was not possible to shut down the server.
 * @noSelf
 */
export declare function shutdown(reason?: string): boolean;
