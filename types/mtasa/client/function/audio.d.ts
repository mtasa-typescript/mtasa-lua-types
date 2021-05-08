// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    Txd,
    Dff,
    Col,
    Ifp,
    PrimitiveType,
    Texture,
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
    Object as MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction
} from '../structure';

/**
 * The function is used to retrieve the ID of the current radio channel.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetRadioChannel Wiki, getRadioChannel }
 * @return returns the id of the radio channel.
 */
export function getRadioChannel(): number;

/**
 * This function gets the given radio channel name.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetRadioChannelName Wiki, getRadioChannelName }
 * @param id The ID of the radio station you want to get the name of. It is a number from 0 to 12.
 * @return returns a string containing the station name if successful, false otherwise.
 */
export function getRadioChannelName(
    id: number
): string;

/**
 * This function checks if a big sound container is available to use or not.
 * In case of these invalid audio files, this function returns false.|true}}
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSFXStatus Wiki, getSFXStatus }
 * @param audioContainer The container name. Possible values are: feet, genrl, pain_a, script, spc_ea, spc_fa,
 * spc_ga, spc_na, spc_pa
 * @return returns true if the sound container is available, false otherwise.
 */
export function getSFXStatus(
    audioContainer: string
): boolean;

/**
 * This function gets the beats per minute of a specific sound element.
 * setTimer to do this.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundBPM Wiki, getSoundBPM }
 * @param sound a sound element that is created using playSound or playSound3D
 * @return returns the beats per minute of the given sound.
 */
export function getSoundBPM(
    sound: Element
): number;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundBufferLength Wiki, getSoundBufferLength }
 * @param theSound the sound element which buffer length you want to get.
 * @return * a float value indicating the buffer playback length of the sound in seconds.
 * * false if the sound is not a stream.
 * * nil if the sound is invalid.
 */
export function getSoundBufferLength(
    theSound: Element
): number;

/**
 * Returns the states of all effects of a sound.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundEffects Wiki, getSoundEffects }
 * @param sound a sound element.
 * @return returns a table with the effect names as the keys, and their states as the values if
 * successful. otherwise, it returns false.
 * sound effect names:
 */
export function getSoundEffects(
    sound: Element
): LuaTable;

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
 * @param sound a sound element that is created using playSound or playSound3D. Streams are also supported
 * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
 * @param iBands post processing option allows you to split the samples into the desired amount of bands
 * or bars so if you only need 5 bars this saves a lot of cpu power compared to trying to do
 * it in Lua.
 * @return returns a table of isamples/2 (or ibands if ibands is used) floats representing the
 * current audio frame.
 * returns false if the sound is not playing yet or hasnt buffered in the
 * case of streams.
 */
export function getSoundFFTData(
    sound: Element,
    iSamples: number,
    iBands?: number
): LuaTable;

/**
 * This function is used to return the playback length of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundLength Wiki, getSoundLength }
 * @param theSound the sound element which length you want to return.
 * @return returns an float value indicating the playback length of the sound element in seconds.
 */
export function getSoundLength(
    theSound: Element
): number;

/**
 * This function gets the left/right level from a sound element.
 * If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundLevelData Wiki, getSoundLevelData }
 * @param theSound the sound element which level data you want to return.
 * @return returns a two integers in range from 0 to 32768.
 */
export function getSoundLevelData(
    theSound: Element
): LuaMultiReturn<[
    number,
    number
]>;

/**
 * Gets a custom sound max distance at which the sound stops.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundMaxDistance Wiki, getSoundMaxDistance }
 * @param sound a sound element.
 * @return returns an integer of the max distance, false if invalid arguments where passed.
 */
export function getSoundMaxDistance(
    sound: Element
): number;

/**
 * Used to get the meta tags attached to a sound. These provide information about the sound,
 * for instance the title or the artist.
 * *This function does not work on remote WAV files
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundMetaTags Wiki, getSoundMetaTags }
 * @param sound a sound element.
 * @param format a filter string to get a specific meta tag.
 * @return returns a table, but only a string if format is given, with all data available (keys are
 * listed below) for the sound if successful, false otherwise. if any data is unavailable
 * then the associated key is not written to the table.
 */
export function getSoundMetaTags(
    sound: Element,
    format?: string
): LuaTable;

/**
 * Gets a custom sound Minimum distance at which the sound stops getting louder.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundMinDistance Wiki, getSoundMinDistance }
 * @param sound a sound element.
 * @return returns an integer of the minimum distance, false if invalid arguements where passed.
 */
export function getSoundMinDistance(
    sound: Element
): number;

/**
 * This function is used to get the pan level of the specified sound element.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundPan Wiki, getSoundPan }
 * @param theSound the sound element which pan you want to get.
 * @return returns float value with range from -1.0 (left) to 1.0 (right), false otherwise.
 */
export function getSoundPan(
    theSound: Element
): number;

/**
 * This function is used to return the current seek position of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundPosition Wiki, getSoundPosition }
 * @param theSound The sound element which seek position you want to return.
 * @return returns a float value indicating the seek position of the sound element in seconds.
 */
export function getSoundPosition(
    theSound: Element
): number;

/**
 * This function gets the properties of a specific sound.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundProperties Wiki, getSoundProperties }
 * @param sound a sound element that is created using playSound or playSound3D
 * @return this function returns 3 float|floats and a boolean value:
 * the first float is the sounds http://en.wikipedia.org/wiki/sampling_rate sample rate, the
 * second one the sounds http://en.wikipedia.org/wiki/tempo tempo, and the third one the
 * http://en.wikipedia.org/wiki/pitch_%28music%29 pitch of the sound. the boolean
 * representing whether the sound is reversed or not.
 */
export function getSoundProperties(
    sound: Element
): LuaMultiReturn<[
    number,
    number,
    number,
    boolean
]>;

/**
 * This function is used to return the playback speed of the specified sound element.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundSpeed Wiki, getSoundSpeed }
 * @param theSound the sound element which playback speed you want to return.
 * @return returns an float value indicating the playback speed of the sound element. default sound
 * playback speed is 1.0.
 */
export function getSoundSpeed(
    theSound: Element
): number;

/**
 * This function is used to return the volume level of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundVolume Wiki, getSoundVolume }
 * @param theSound the sound element which volume you want to return.
 * @return returns a float representing the volume level of the sound element, false if invalid
 * arguments were passed.
 */
export function getSoundVolume(
    theSound: Element
): number;

/**
 * This function gets the wave form data for an audio stream which is a table of floats
 * representing the current audio frame as a wave.
 * This allows things like visualisations.
 * If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSoundWaveData Wiki, getSoundWaveData }
 * @param sound a sound element that is created using playSound or playSound3D. Streams are also supported
 * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
 * @return returns a table of isamples floats representing the current audio frame waveform.
 * returns false if the sound is not playing yet or hasnt buffered in the
 * case of streams.
 */
export function getSoundWaveData(
    sound: Element,
    iSamples: number
): LuaTable;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/IsSoundLooped Wiki, isSoundLooped }
 * @param theSound The sound element which you want to get the loop state.
 * @return returns true if the sound element is seted to loop, false otherwise.
 */
export function isSoundLooped(
    theSound: Element
): boolean;

/**
 * This function checks whether panning is enabled in a sound element or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsSoundPanningEnabled Wiki, isSoundPanningEnabled }
 * @param theSound A valid sound element.
 * @return returns true if the sound is valid and it has panning enabled, false if it does not or is
 * not valid.
 */
export function isSoundPanningEnabled(
    theSound: Element
): boolean;

/**
 * This function is used to return the current pause state of the specified sound element.
 * If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsSoundPaused Wiki, isSoundPaused }
 * @param theSound the sound element which pause state you want to return.
 * @return returns true if the sound element is paused, false if unpaused or invalid arguments were
 * passed.
 */
export function isSoundPaused(
    theSound: Element
): boolean;

/**
 * This function plays a sound from GTAs big sound containers.
 * In case of these invalid audio files, this function returns false.
 * It also returns false when trying to play a track deleted in the recent GTA: SA Steam
 * patches (and if the client is using a Steam GTA: SA copy).|true}}
 * @see {@link https://wiki.multitheftauto.com/wiki/PlaySFX Wiki, playSFX }
 * @param containerName The name of the audio container. Possible values are: feet, genrl, pain_a, script,
 * spc_ea, spc_fa, spc_ga, spc_na, spc_pa
 * @param bankId The audio bank id
 * @param soundId The sound id within the audio bank
 * @param looped A boolean representing whether the sound will be looped
 * @return returns a sound element if the sound was successfully created, false otherwise.
 * <syntaxhighlight lang=lua>
 * element playsfx ( string radio, string radiostation, int trackid , bool looped = false  )
 * </syntaxhighlight>
 * *radio: the string radio (used to differentiate to the first syntax)
 * *radiostation: the radio station. possible values are adverts, ambience, police, playback
 * fm, k-rose, k-dst, cutscene, beats, bounce fm, sf-ur, radio los santos, radio x, csr
 * 103.9, k-jah west, master sounds 98.3, wctr.
 * *trackid : the radio track id within the radio station audio file
 * *looped: a boolean representing whether the sound will be looped
 * returns a sound element if the sound was successfully created, false otherwise.
 */
export function playSFX(
    containerName: string,
    bankId: number,
    soundId: number,
    looped?: boolean
): Element;

/**
 * This function plays a sound in the GTA world from GTAs big sound containers.
 * In case of these invalid audio files, this function returns false.
 * It also returns false when trying to play a track deleted in the recent GTA: SA Steam
 * patches (and if the client is using a Steam GTA: SA copy).|true}}
 * @see {@link https://wiki.multitheftauto.com/wiki/PlaySFX3D Wiki, playSFX3D }
 * @param containerName The name of the audio container. Possible values are: feet, genrl, pain_a, script,
 * spc_ea, spc_fa, spc_ga, spc_na, spc_pa
 * @param bankId The audio bank id
 * @param soundId The sound id within the audio bank
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param looped A boolean representing whether the sound will be looped
 * @return returns a sound element if the sound was successfully created, false otherwise.
 * <syntaxhighlight lang=lua>
 * element playsfx3d( string radio, string radiostation, int trackid, float x, float y,
 * float z , bool looped = false  )
 * </syntaxhighlight>
 * *radio: the string radio (used to differentiate to the first syntax)
 * *radiostation: the radio station. possible values are adverts, ambience, police, playback
 * fm, k-rose, k-dst, cutscene, beats, bounce fm, sf-ur, radio los santos, radio x, csr
 * 103.9, k-jah west, master sounds 98.3, wctr.
 * *trackid : the radio track id within the radio station audio file
 * *x: a floating point number representing the x coordinate on the map.
 * *y: a floating point number representing the y coordinate on the map.
 * *z: a floating point number representing the z coordinate on the map.
 * *looped: a boolean representing whether the sound will be looped
 * returns a sound element if the sound was successfully created, false otherwise.
 */
export function playSFX3D(
    containerName: string,
    bankId: number,
    soundId: number,
    x: number,
    y: number,
    z: number,
    looped?: boolean
): Element;

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
export function playSound(
    soundPath: string,
    looped?: boolean,
    throttled?: boolean
): Element;

/**
 * Creates a sound element in the GTA world and plays it immediately after creation for the
 * local player. setElementPosition can be used to move the sound element around after it
 * has been created. Remember to use setElementDimension after creating the sound to play it
 * outside of dimension 0.<br />
 * <br />
 * *The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT and S3M.
 * *For performance reasons, when using playSound3D for effects that will be played lots
 * (i.e. weapon fire), it is recommend that you convert your audio file to a one channel
 * (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how
 * often the effect can be played e.g. once every 50ms.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/PlaySound3D Wiki, playSound3D }
 * @param soundPath Can also be raw sound data.
 * |20460}}
 * @param soundURL the URL (http://, https:// or ftp://) of the sound file you want to play. (In this
 * version the file does not have to be predefined in the meta.xml)
 * @param x a floating point number representing the X coordinate on the map.
 * @param y a floating point number representing the Y coordinate on the map.
 * @param z a floating point number representing the Z coordinate on the map.
 * @param looped a boolean representing whether the sound will be looped. To loop the sound, use true.
 * @param throttled a boolean representing whether the sound will be throttled (i.e. given reduced download
 * bandwidth). To throttle the sound, use true.
 * @return returns a sound element if the sound was successfully created, false otherwise.
 */
export function playSound3D(
    soundPath: string,
    x: number,
    y: number,
    z: number,
    looped?: boolean
): Element;

/**
 * This function plays a frontend sound for the specified player.
 * @see {@link https://wiki.multitheftauto.com/wiki/PlaySoundFrontEnd Wiki, playSoundFrontEnd }
 * @param sound a whole int specifying the sound id to play. Valid values are:
 */
export function playSoundFrontEnd(
    sound: number
): boolean;

/**
 * This function sets the heard radio channel, even while not in a vehicle.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetRadioChannel Wiki, setRadioChannel }
 * @param ID The ID of the radio station you want to play.
 * @return returns true if channel was set successfully, false otherwise.
 */
export function setRadioChannel(
    ID: number
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
export function setSoundEffectEnabled(
    theSound_thePlayer: Element,
    effectName: string,
    bEnable: boolean
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundLooped Wiki, setSoundLooped }
 * @param theSound The sound element to set the loop.
 * @param bool A boolean representing whether the sound will be looped.
 * @return returns true if the sound element loop was successfully changed, false otherwise.
 * <syntaxhighlight lang=lua>
 * addeventhandler(onclientresourcestart, resourceroot, function()
 * local mysound = playsound(sound.mp3)
 * setsoundlooped(mysound, true)
 * end)
 * </syntaxhighlight>
 */
export function setSoundLooped(
    theSound: Element,
    loop: boolean
): boolean;

/**
 * Sets a custom sound max distance at which the sound stops.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundMaxDistance Wiki, setSoundMaxDistance }
 * @param sound a sound element.
 * @param distance the default value for this is 20
 * @return returns a true if the max distance was set, false otherwise.
 */
export function setSoundMaxDistance(
    sound: Element,
    distance: number
): boolean;

/**
 * Sets a custom sound Minimum distance at which the sound stops getting louder.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundMinDistance Wiki, setSoundMinDistance }
 * @param sound a sound element.
 * @param distance an integer representing the distance the sound stops getting louder. the default value
 * for this is 5
 * @return returns a true if the minimum distance was set, false otherwise.
 */
export function setSoundMinDistance(
    sound: Element,
    distance: number
): boolean;

/**
 * This function is used to change the pan level of the specified sound element.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPan Wiki, setSoundPan }
 * @param theSound The sound element which pan you want to modify.
 * @param pan A float|floating point number representing the desired pan level. Range is from -1.0
 * (left) to 1.0 (right)
 * @return returns true if the sound element pan was successfully changed, false otherwise.
 */
export function setSoundPan(
    theSound: Element,
    pan: number
): boolean;

/**
 * This function toggles the panning of a sound (hearing it closer to the left or right side
 * of the speakers due to the camera position). By default a sound has its panning enabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPanningEnabled Wiki, setSoundPanningEnabled }
 * @param sound a sound element to change the panning of.
 * @param enable true to enable the panning, false otherwise.
 * @return returns true if the sound is valid and good arguments were passed, false if not.
 * if the sound is not 3d, this function will return true as well, but issoundpanningenabled
 * will always return true after this (so it has no effect).
 */
export function setSoundPanningEnabled(
    sound: Element,
    enable: boolean
): boolean;

/**
 * This function is used to either pause or unpause the playback of the specified sound
 * element.
 * Use a player element to control a players voice with this function.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPaused Wiki, setSoundPaused }
 * @param theSound the sound element which you want to pause/unpause.
 * @param paused a boolean value representing whether the sound should be paused or not. To pause the
 * sound, use true.
 * @return returns true if the sound element was successfully paused, false otherwise.
 */
export function setSoundPaused(
    theSound: Element,
    paused: boolean
): boolean;

/**
 * This function is used to change the seek position of the specified sound element.
 * Use a player element to control a players voice with this function.
 * *To set position of a remote audio file you have to pause it first, then set the position
 * and then unpause it.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundPosition Wiki, setSoundPosition }
 * @param theSound the sound element which seek position you want to modify.
 * @param pos a float value representing the new seek position of the sound element in seconds.
 * @return returns true if the sound elements seek position was successfully changed, false
 * otherwise.
 */
export function setSoundPosition(
    theSound: Element,
    pos: number
): boolean;

/**
 * This function edits the properties of a specific sound.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundProperties Wiki, setSoundProperties }
 * @param sound a sound element that is created using playSound or playSound3D
 * @param fSampleRate a float that defines the new sounds http://en.wikipedia.org/wiki/Sampling_rate sample rate
 * @param fTempo a float that defines the new sound http://en.wikipedia.org/wiki/Tempo tempo
 * @param fPitch a float that defines the new sound http://en.wikipedia.org/wiki/Pitch_%28music%29 pitch
 * @param bReverse a boolean representing whether the sound will be reversed or not.
 * @return returns true if the properties sucessfully set, false otherwise.
 */
export function setSoundProperties(
    sound: Element,
    fSampleRate: number,
    fTempo: number,
    fPitch: number,
    bReverse?: boolean
): boolean;

/**
 * This function can be used to change the playback speed of the specified sound element.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetSoundSpeed Wiki, setSoundSpeed }
 * @param theSound the sound element which volume you want to modify.
 * @param speed a floating point number representing the desired sound playback speed.
 * @return returns true if the sound element playback speed was successfully changed, false
 * otherwise.
 */
export function setSoundSpeed(
    theSound: Element,
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
export function setSoundVolume(
    theSound_thePlayer: Element,
    volume: number
): boolean;

/**
 * Stops the sound playback for specified sound element. The sound element is also destroyed.
 * @see {@link https://wiki.multitheftauto.com/wiki/StopSound Wiki, stopSound }
 * @param theSound the sound element you want to stop playing.
 * @return returns true if the sound was successfully stopped, false otherwise.
 */
export function stopSound(
    theSound: Element
): boolean;
