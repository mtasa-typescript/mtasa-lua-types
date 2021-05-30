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
    Matrix,
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
    FetchRemoteCallback
} from '../structure';

/** @customConstructor Sound */
export class Sound extends Element {
    /**
     */
    bufferLength: number;

    /**
     * This function is used to return the playback length of the specified sound element.
     * If the element is a player, this function will use the players voice.
     */
    length: number;

    /**
     * Gets a custom sound max distance at which the sound stops.
     */
    maxDistance: number;

    /**
     * Gets a custom sound Minimum distance at which the sound stops getting louder.
     */
    minDistance: number;

    /**
     * This function is used to get the pan level of the specified sound element.
     */
    pan: number;

    /**
     * This function is used to return the current seek position of the specified sound element.
     * If the element is a player, this function will use the players voice.
     */
    playbackPosition: number;

    /**
     * This function is used to return the playback speed of the specified sound element.
     */
    speed: number;

    /**
     * This function is used to return the volume level of the specified sound element.
     * If the element is a player, this function will use the players voice.
     */
    volume: number;

    /**
     * This function checks whether panning is enabled in a sound element or not.
     */
    panningEnabled: boolean;

    /**
     * This function is used to return the current pause state of the specified sound element.
     * If the element is a player, this function will use the players voice.
     */
    paused: boolean;

    /**
     * This function gets the beats per minute of a specific sound element.
     * setTimer to do this.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundBPM Wiki, getSoundBPM }
     * @return returns the beats per minute of the given sound.
     */
    getBPM(): number;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundBufferLength Wiki, getSoundBufferLength }
     * @return * a float value indicating the buffer playback length of the sound in seconds.
     * * false if the sound is not a stream.
     * * nil if the sound is invalid.
     */
    getBufferLength(): number;

    /**
     * Returns the states of all effects of a sound.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundEffects Wiki, getSoundEffects }
     * @return returns a table with the effect names as the keys, and their states as the values if
     * successful. otherwise, it returns false.
     * sound effect names:
     */
    getEffects(): LuaTable;

    /**
     * This function gets the fast fourier transform data for an audio stream which is a table
     * of floats representing the current audio frame. This allows things like visualisations.
     * A fast fourier transform generates a table of all the frequencies of the current audio
     * frame which starts at the bass end of the spectrum to mids to highs in that order
     * Should you have any problems there is an example resource located on the resource svn
     * here:
     * https://github.com/multitheftauto/mtasa-resources/tree/master/%5Bgameplay%5D/visualiser
     * Visualiser
     * just type startmusic mystreamurl in your console and it will play on the cinema billboard
     * near A51 If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundFFTData Wiki, getSoundFFTData }
     * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
     * @param iBands post processing option allows you to split the samples into the desired amount of bands
     * or bars so if you only need 5 bars this saves a lot of cpu power compared to trying to do
     * it in Lua.
     * @return returns a table of isamples/2 (or ibands if ibands is used) floats representing the
     * current audio frame.
     * returns false if the sound is not playing yet or hasnt buffered in the
     * case of streams.
     */
    getFFTData(
        iSamples: number,
        iBands?: number
    ): LuaTable;

    /**
     * This function is used to return the playback length of the specified sound element.
     * If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundLength Wiki, getSoundLength }
     * @return returns an float value indicating the playback length of the sound element in seconds.
     */
    getLength(): number;

    /**
     * This function gets the left/right level from a sound element.
     * If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundLevelData Wiki, getSoundLevelData }
     * @return returns a two integers in range from 0 to 32768.
     */
    getLevelData(): LuaMultiReturn<[
        number,
        number
    ]>;

    /**
     * Gets a custom sound max distance at which the sound stops.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundMaxDistance Wiki, getSoundMaxDistance }
     * @return returns an integer of the max distance, false if invalid arguments where passed.
     */
    getMaxDistance(): number;

    /**
     * Used to get the meta tags attached to a sound. These provide information about the sound,
     * for instance the title or the artist.
     * *This function does not work on remote WAV files
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundMetaTags Wiki, getSoundMetaTags }
     * @param format a filter string to get a specific meta tag.
     * @return returns a table, but only a string if format is given, with all data available (keys are
     * listed below) for the sound if successful, false otherwise. if any data is unavailable
     * then the associated key is not written to the table.
     */
    getMetaTags(
        format?: string
    ): LuaTable;

    /**
     * Gets a custom sound Minimum distance at which the sound stops getting louder.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundMinDistance Wiki, getSoundMinDistance }
     * @return returns an integer of the minimum distance, false if invalid arguements where passed.
     */
    getMinDistance(): number;

    /**
     * This function is used to get the pan level of the specified sound element.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundPan Wiki, getSoundPan }
     * @return returns float value with range from -1.0 (left) to 1.0 (right), false otherwise.
     */
    getPan(): number;

    /**
     * This function is used to return the current seek position of the specified sound element.
     * If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundPosition Wiki, getSoundPosition }
     * @return returns a float value indicating the seek position of the sound element in seconds.
     */
    getPlaybackPosition(): number;

    /**
     * This function gets the properties of a specific sound.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundProperties Wiki, getSoundProperties }
     * @return this function returns 3 float|floats and a boolean value:
     * the first float is the sounds http://en.wikipedia.org/wiki/sampling_rate sample rate, the
     * second one the sounds http://en.wikipedia.org/wiki/tempo tempo, and the third one the
     * http://en.wikipedia.org/wiki/pitch_%28music%29 pitch of the sound. the boolean
     * representing whether the sound is reversed or not.
     */
    getProperties(): LuaMultiReturn<[
        number,
        number,
        number,
        boolean
    ]>;

    /**
     * This function is used to return the playback speed of the specified sound element.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundSpeed Wiki, getSoundSpeed }
     * @return returns an float value indicating the playback speed of the sound element. default sound
     * playback speed is 1.0.
     */
    getSpeed(): number;

    /**
     * This function is used to return the volume level of the specified sound element.
     * If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundVolume Wiki, getSoundVolume }
     * @return returns a float representing the volume level of the sound element, false if invalid
     * arguments were passed.
     */
    getVolume(): number;

    /**
     * This function gets the wave form data for an audio stream which is a table of floats
     * representing the current audio frame as a wave.
     * This allows things like visualisations.
     * If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundWaveData Wiki, getSoundWaveData }
     * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
     * @return returns a table of isamples floats representing the current audio frame waveform.
     * returns false if the sound is not playing yet or hasnt buffered in the
     * case of streams.
     */
    getWaveData(
        iSamples: number
    ): LuaTable;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/IsSoundLooped Wiki, isSoundLooped }
     * @return returns true if the sound element is seted to loop, false otherwise.
     */
    isLooped(): boolean;

    /**
     * This function checks whether panning is enabled in a sound element or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsSoundPanningEnabled Wiki, isSoundPanningEnabled }
     * @return returns true if the sound is valid and it has panning enabled, false if it does not or is
     * not valid.
     */
    isPanningEnabled(): boolean;

    /**
     * This function is used to return the current pause state of the specified sound element.
     * If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsSoundPaused Wiki, isSoundPaused }
     * @return returns true if the sound element is paused, false if unpaused or invalid arguments were
     * passed.
     */
    isPaused(): boolean;

    /**
     * Creates a sound element and plays it immediately after creation for the local player.<br
     * />
     * <br />
     * *The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT, S3M and PLS (e.g.
     * Webstream).
     * *For performance reasons, when using playSound for effects that will be played lots (i.e.
     * weapon fire), it is recommend that you convert your audio file to a one channel (mono)
     * WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the
     * effect can be played e.g. once every 50ms.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/PlaySound Wiki, playSound }
     * @param soundPath Can also be raw sound data.
     * |20460}}
     * @param looped a boolean representing whether the sound will be looped. To loop the sound, use true.
     * Loop is not available for streaming sounds, only for sound files.
     * @param throttled a boolean representing whether the sound will be throttled (i.e. given reduced download
     * bandwidth). To throttle the sound, use true. Sounds will be throttled per default and
     * only for URLs.
     * @return returns a sound element if the sound was successfully created, false otherwise.
     */
    constructor(
        soundPath: string,
        looped?: boolean,
        throttled?: boolean
    );

    /**
     * This function plays a frontend sound for the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/PlaySoundFrontEnd Wiki, playSoundFrontEnd }
     * @param sound a whole int specifying the sound id to play. Valid values are:
     */
    static playFrontEnd(
        sound: number
    ): boolean;

    /**
     * Used to enable or disable specific sound effects.
     * Use a player element to control a players voice with this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundEffectEnabled Wiki, setSoundEffectEnabled }
     * @param sound a sound element or a player element which will affect the Resource:Voice|voice broadcast.
     * @param effectName the effect you want to enable or disable
     * @param bEnable true if you want to enable the effect, false if you want to disable it.
     * @return returns true if the effect was set successfully, false otherwise.
     */
    setEffectEnabled(
        effectName: string,
        bEnable: boolean
    ): boolean;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundLooped Wiki, setSoundLooped }
     * @param bool A boolean representing whether the sound will be looped.
     * @return returns true if the sound element loop was successfully changed, false otherwise.
     * <syntaxhighlight lang=lua>
     * addeventhandler(onclientresourcestart, resourceroot, function()
     * local mysound = playsound(sound.mp3)
     * setsoundlooped(mysound, true)
     * end)
     * </syntaxhighlight>
     */
    setLooped(
        loop: boolean
    ): boolean;

    /**
     * Sets a custom sound max distance at which the sound stops.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundMaxDistance Wiki, setSoundMaxDistance }
     * @param distance the default value for this is 20
     * @return returns a true if the max distance was set, false otherwise.
     */
    setMaxDistance(
        distance: number
    ): boolean;

    /**
     * Sets a custom sound Minimum distance at which the sound stops getting louder.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundMinDistance Wiki, setSoundMinDistance }
     * @param distance an integer representing the distance the sound stops getting louder. the default value
     * for this is 5
     * @return returns a true if the minimum distance was set, false otherwise.
     */
    setMinDistance(
        distance: number
    ): boolean;

    /**
     * This function is used to change the pan level of the specified sound element.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPan Wiki, setSoundPan }
     * @param pan A float|floating point number representing the desired pan level. Range is from -1.0
     * (left) to 1.0 (right)
     * @return returns true if the sound element pan was successfully changed, false otherwise.
     */
    setPan(
        pan: number
    ): boolean;

    /**
     * This function toggles the panning of a sound (hearing it closer to the left or right side
     * of the speakers due to the camera position). By default a sound has its panning enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPanningEnabled Wiki, setSoundPanningEnabled }
     * @param enable true to enable the panning, false otherwise.
     * @return returns true if the sound is valid and good arguments were passed, false if not.
     * if the sound is not 3d, this function will return true as well, but issoundpanningenabled
     * will always return true after this (so it has no effect).
     */
    setPanningEnabled(
        enable: boolean
    ): boolean;

    /**
     * This function is used to either pause or unpause the playback of the specified sound
     * element.
     * Use a player element to control a players voice with this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPaused Wiki, setSoundPaused }
     * @param paused a boolean value representing whether the sound should be paused or not. To pause the
     * sound, use true.
     * @return returns true if the sound element was successfully paused, false otherwise.
     */
    setPaused(
        paused: boolean
    ): boolean;

    /**
     * This function is used to change the seek position of the specified sound element.
     * Use a player element to control a players voice with this function.
     * *To set position of a remote audio file you have to pause it first, then set the position
     * and then unpause it.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPosition Wiki, setSoundPosition }
     * @param pos a float value representing the new seek position of the sound element in seconds.
     * @return returns true if the sound elements seek position was successfully changed, false
     * otherwise.
     */
    setPlaybackPosition(
        pos: number
    ): boolean;

    /**
     * This function edits the properties of a specific sound.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundProperties Wiki, setSoundProperties }
     * @param fSampleRate a float that defines the new sounds http://en.wikipedia.org/wiki/Sampling_rate sample rate
     * @param fTempo a float that defines the new sound http://en.wikipedia.org/wiki/Tempo tempo
     * @param fPitch a float that defines the new sound http://en.wikipedia.org/wiki/Pitch_%28music%29 pitch
     * @param bReverse a boolean representing whether the sound will be reversed or not.
     * @return returns true if the properties sucessfully set, false otherwise.
     */
    setProperties(
        fSampleRate: number,
        fTempo: number,
        fPitch: number,
        bReverse?: boolean
    ): boolean;

    /**
     * This function can be used to change the playback speed of the specified sound element.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundSpeed Wiki, setSoundSpeed }
     * @param speed a floating point number representing the desired sound playback speed.
     * @return returns true if the sound element playback speed was successfully changed, false
     * otherwise.
     */
    setSpeed(
        speed: number
    ): boolean;

    /**
     * This function is used to change the volume level of the specified sound element.
     * Use a player element to control a players voice with this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundVolume Wiki, setSoundVolume }
     * @param theSound The sound element which volume you want to modify or a player element which voice volume
     * you want to modify.
     * @param volume A floating point number representing the desired volume level. Range is from 0.0 to 1.0.
     * This can go above 1.0 for amplification.
     * @return returns true if the sound element volume was successfully changed, false otherwise.
     */
    setVolume(
        volume: number
    ): boolean;

    /**
     * Stops the sound playback for specified sound element. The sound element is also destroyed.
     * @see {@link https://wiki.multitheftauto.com/wiki/StopSound Wiki, stopSound }
     * @return returns true if the sound was successfully stopped, false otherwise.
     */
    stop(): boolean;
}
