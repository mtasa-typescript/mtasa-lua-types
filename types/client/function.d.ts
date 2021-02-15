import {
    account,
    acl,
    aclgroup,
    player,
    table,
    ban,
    blip,
    colshape,
    element,
    ped,
    pickup,
    resource,
    team,
    textdisplay,
    vehicle,
    xmlnode,
    textitem,
    HandleFunction,
    file,
    marker,
    radararea,
    request,
    userdata,
    timer,
    water,
    browser,
    progressBar,
    light,
    effect,
    gui,
    searchlight,
    weapon,
    guibrowser,
    txd,
    dff,
    col,
    ifp,
    primitiveType,
    guiscrollbar,
    guimemo,
    texture,
    objectgroup,
    projectile,
    Matrix,
} from 'mtasa/client/structures';

declare module 'mtasa/client/functions' {

    /**
     * The function is used to retrieve the ID of the current radio channel.
     * @see {@link https://wiki.multitheftauto.com/wiki/getRadioChannel|MTASA Wiki}
     * @return Returns the ID of the radio channel.
     * * {{SoundID}}
     */
    export function getRadioChannel(): number;

    /**
     * This function gets the given radio channel name.
     * @see {@link https://wiki.multitheftauto.com/wiki/getRadioChannelName|MTASA Wiki}
     * @param id The ID of the radio station you want to get the name of. It is a number from 0 to 12.  {{SoundID}}
     * @return Returns a string containing the station name if successful, ''false'' otherwise.
     */
    export function getRadioChannelName(id: number): string;

    /**
     * This function checks if a big sound container is available to use or not.
     * }}
     * In case of these invalid audio files, this function returns ''false''.|true}}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSFXStatus|MTASA Wiki}
     * @param audioContainer The container name. Possible values are: feet, genrl, pain_a, script, spc_ea, spc_fa, spc_ga, spc_na, spc_pa
     * @return Returns ''true'' if the sound container is available, ''false'' otherwise.
     */
    export function getSFXStatus(audioContainer: string): boolean;

    /**
     * This function gets the beats per minute of a specific [[sound]] element.
     * [[setTimer]] to do this.}}
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundBPM|MTASA Wiki}
     * @param sound a sound element that is created using playSound or playSound3D
     * @return Returns the beats per minute of the given sound.
     */
    export function getSoundBPM(sound: element): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundBufferLength|MTASA Wiki}
     * @param theSound the sound element which buffer length you want to get.
     * @return * A [[float]] value indicating the buffer playback length of the [[sound]] in seconds.
     * * * ''false'' if the sound is not a stream.
     * * * ''nil'' if the sound is invalid.
     */
    export function getSoundBufferLength(theSound: element): number;

    /**
     * Returns the states of all effects of a sound.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundEffects|MTASA Wiki}
     * @param sound a sound element.
     * @return Returns a [[table]] with the effect names as the keys, and their states as the values if successful. Otherwise, it returns ''false''.
     * * '''Sound effect names:'''
     * * {{Sound_Effects}}
     */
    export function getSoundEffects(sound: element): table;

    /**
     * This function gets the fast fourier transform data for an audio stream which is a table of floats representing the current audio frame. This allows things like visualisations.
     * A fast fourier transform generates a table of all the frequencies of the current audio frame which starts at the bass end of the spectrum to mids to highs in that order
     * Should you have any problems there is an example resource located on the resource svn here:
     * [https://github.com/multitheftauto/mtasa-resources/tree/master/%5Bgameplay%5D/visualiser Visualiser]
     * just type "startmusic mystreamurl" in your console and it will play on the cinema billboard near A51 If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundFFTData|MTASA Wiki}
     * @param sound a sound element that is created using playSound or playSound3D. Streams are also supported
     * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
     * @param iBands post processing option allows you to split the samples into the desired amount of bands or bars so if you only need 5 bars this saves a lot of cpu power compared to trying to do it in Lua.
     * @default 0
     * @return Returns a table of '''iSamples'''/2 (or '''iBands''' if '''iBands''' is used) ''floats'' representing the current audio frame.
     * * Returns ''false'' if the sound is not playing yet or hasn't buffered in the
     * * case of streams.
     */
    export function getSoundFFTData(sound: element, iSamples: number, iBands?: number): table;

    /**
     * This function is used to return the playback length of the specified [[sound]] element.
     * If the element is a player, this function will use the players voice.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundLength|MTASA Wiki}
     * @param theSound the sound element which length you want to return.
     * @return Returns an [[float]] value indicating the playback length of the [[sound]] element in seconds.
     */
    export function getSoundLength(theSound: element): number;

    /**
     * This function gets the left/right level from a [[sound]] [[element]].
     * If the element is a player, this function will use the players voice.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundLevelData|MTASA Wiki}
     * @param theSound the sound element which level data you want to return.
     * @return Returns a two ''integers'' in range from 0 to 32768.
     */
    export function getSoundLevelData(theSound: element): LuaMultiReturn<[number, number]>;

    /**
     * Gets a custom [[sound]] max distance at which the sound stops.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundMaxDistance|MTASA Wiki}
     * @param sound a sound element.
     * @return Returns an ''integer'' of the max distance, ''false'' if invalid arguments where passed.
     */
    export function getSoundMaxDistance(sound: element): number;

    /**
     * Used to get the meta tags attached to a sound. These provide information about the sound, for instance the title or the artist.
     * *This function does not work on remote WAV files
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundMetaTags|MTASA Wiki}
     * @param sound a sound element.  {{OptionalArg}}
     * @param format a filter string to get a specific meta tag.
     * @default ""
     * @return Returns a [[table]], but only a [[string]] if '''format''' is given, with all data available (keys are listed below) for the sound if successful, ''false'' otherwise. If any data is unavailable then the associated key is not written to the table.
     * * {{Sound_Meta_Tags}}
     */
    export function getSoundMetaTags(sound: element, format?: string): table;

    /**
     * Gets a custom [[sound]] Minimum distance at which the sound stops getting louder.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundMinDistance|MTASA Wiki}
     * @param sound a sound element.
     * @return Returns an ''integer'' of the minimum distance, ''false'' if invalid arguements where passed.
     */
    export function getSoundMinDistance(sound: element): number;

    /**
     * This function is used to get the pan level of the specified [[sound]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundPan|MTASA Wiki}
     * @param theSound the sound element which pan you want to get.
     * @return Returns ''float'' value with range from ''-1.0 (left)'' to ''1.0 (right)'', ''false'' otherwise.
     */
    export function getSoundPan(theSound: element): number;

    /**
     * This function is used to return the current seek position of the specified [[sound]] element.
     * If the element is a player, this function will use the players voice.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundPosition|MTASA Wiki}
     * @param theSound The sound element which seek position you want to return.
     * @return Returns a [[float]] value indicating the seek position of the [[sound]] element in seconds.
     */
    export function getSoundPosition(theSound: element): number;

    /**
     * This function gets the properties of a specific [[sound]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundProperties|MTASA Wiki}
     * @param sound a sound element that is created using playSound or playSound3D
     * @return This function returns 3 [[float|floats]] and a [[boolean]] value:
     * * The first float is the sound's [http://en.wikipedia.org/wiki/Sampling_rate sample rate], the second one the sound's [http://en.wikipedia.org/wiki/Tempo tempo], and the third one the [http://en.wikipedia.org/wiki/Pitch_%28music%29 pitch] of the sound. The boolean representing whether the sound is reversed or not.
     */
    export function getSoundProperties(sound: element): LuaMultiReturn<[number, number, number, boolean]>;

    /**
     * This function is used to return the playback speed of the specified [[sound]] [[element]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundSpeed|MTASA Wiki}
     * @param theSound the sound element which playback speed you want to return.
     * @return Returns an [[float]] value indicating the playback speed of the [[sound]] [[element]]. Default sound playback speed is '''1.0'''.
     */
    export function getSoundSpeed(theSound: element): number;

    /**
     * This function is used to return the volume level of the specified [[sound]] [[element]].
     * If the element is a [[player]], this function will use the players voice.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundVolume|MTASA Wiki}
     * @param theSound the sound element which volume you want to return.
     * @return Returns a [[float]] representing the volume level of the [[sound]] [[element]], ''false'' if invalid arguments were passed.
     */
    export function getSoundVolume(theSound: element): number;

    /**
     * This function gets the wave form data for an audio stream which is a table of floats representing the current audio frame as a wave.
     * This allows things like visualisations.
     * If the element is a player, this function will use the players voice.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getSoundWaveData|MTASA Wiki}
     * @param sound a sound element that is created using playSound or playSound3D. Streams are also supported
     * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
     * @return Returns a [[table]] of '''iSamples''' ''floats'' representing the current audio frame waveform.
     * * Returns ''false'' if the sound is not playing yet or hasn't buffered in the
     * * case of streams.
     */
    export function getSoundWaveData(sound: element, iSamples: number): table;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/isSoundLooped|MTASA Wiki}
     * @param theSound The sound element which you want to get the loop state.
     * @return Returns ''true'' if the [[sound]] [[element]] is seted to loop, ''false'' otherwise.
     */
    export function isSoundLooped(theSound: element): boolean;

    /**
     * This function checks whether panning is enabled in a [[sound]] [[element]] or not.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isSoundPanningEnabled|MTASA Wiki}
     * @return Returns ''true'' if the sound is valid and it has panning enabled, ''false'' if it does not or is not valid.
     */
    export function isSoundPanningEnabled(theSound: element): boolean;

    /**
     * This function is used to return the current pause state of the specified [[sound]] [[element]].
     * If the element is a [[player]], this function will use the players voice.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isSoundPaused|MTASA Wiki}
     * @param theSound the sound element which pause state you want to return.
     * @return Returns ''true'' if the [[sound]] [[element]] is paused, ''false'' if unpaused or invalid arguments were passed.
     */
    export function isSoundPaused(theSound: element): boolean;

    /**
     * This function plays a sound from GTA's big sound containers.
     * }}
     * In case of these invalid audio files, this function returns ''false''.
     * It also returns ''false'' when trying to play a track deleted in the recent GTA: SA Steam patches (and if the client is using a Steam GTA: SA copy).|true}}
     * @see {@link https://wiki.multitheftauto.com/wiki/playSFX|MTASA Wiki}
     * @param containerName The name of the audio container. Possible values are: feet, genrl, pain_a, script, spc_ea, spc_fa, spc_ga, spc_na, spc_pa
     * @param bankId The audio bank id
     * @param soundId The sound id within the audio bank
     * @param looped A boolean representing whether the sound will be looped
     * @default false
     * @return Returns a [[sound]] element if the sound was successfully created, ''false'' otherwise.
     * * {{New feature/item|3.0140|1.4|6443|
     */
    export function playSFX(containerName: string, bankId: number, soundId: number, looped?: boolean): element;

    /**
     * This function plays a sound in the GTA world from GTA's big sound containers.
     * }}
     * In case of these invalid audio files, this function returns ''false''.
     * It also returns ''false'' when trying to play a track deleted in the recent GTA: SA Steam patches (and if the client is using a Steam GTA: SA copy).|true}}
     * @see {@link https://wiki.multitheftauto.com/wiki/playSFX3D|MTASA Wiki}
     * @param containerName The name of the audio container. Possible values are: feet, genrl, pain_a, script, spc_ea, spc_fa, spc_ga, spc_na, spc_pa
     * @param bankId The audio bank id
     * @param soundId The sound id within the audio bank
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.
     * @param looped A boolean representing whether the sound will be looped
     * @default false
     * @return Returns a [[sound]] element if the sound was successfully created, ''false'' otherwise.
     * * {{New feature/item|3.0140|1.4|6443|
     */
    export function playSFX3D(containerName: string, bankId: number, soundId: number, x: number, y: number, z: number, looped?: boolean): element;

    /**
     * Creates a [[sound]] [[element]] and plays it immediately after creation for the local player.<br />
     * <br />
     * *The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT, S3M and PLS (e.g. Webstream).
     * *For performance reasons, when using playSound for effects that will be played lots (i.e. weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once every 50ms.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/playSound|MTASA Wiki}
     * @param soundPath Can also be raw sound data.  |20460}}  {{OptionalArg}}
     * @param looped a boolean representing whether the sound will be looped. To loop the sound, use true. Loop is not available for streaming sounds, only for sound files.  {{New feature/item|3.0150|1.5||
     * @default false
     * @param throttled a boolean representing whether the sound will be throttled (i.e. given reduced download bandwidth). To throttle the sound, use true. Sounds will be throttled per default and only for URLs.  }}
     * @default true
     * @return Returns a [[sound]] [[element]] if the sound was successfully created, ''false'' otherwise.
     */
    export function playSound(soundPath: string, looped: boolean, throttled: boolean): element;

    /**
     * Creates a [[sound]] [[element]] in the GTA world and plays it immediately after creation for the local player. [[setElementPosition]] can be used to move the [[sound]] element around after it has been created. Remember to use [[setElementDimension]] after creating the sound to play it outside of dimension 0.<br />
     * <br />
     * *The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT and S3M.
     * *For performance reasons, when using playSound3D for effects that will be played lots (i.e. weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once every 50ms.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/playSound3D|MTASA Wiki}
     * @param soundPath Can also be raw sound data.  |20460}}
     * @param x a floating point number representing the X coordinate on the map.
     * @param y a floating point number representing the Y coordinate on the map.
     * @param z a floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param looped a boolean representing whether the sound will be looped. To loop the sound, use true.  {{New feature/item|3.0150|1.5||
     * @default false
     * @return Returns a [[sound]] [[element]] if the sound was successfully created, ''false'' otherwise.
     */
    export function playSound3D(soundPath: string, x: number, y: number, z: number, looped: boolean): element;

    /**
     * This function sets the heard radio channel, even while not in a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setRadioChannel|MTASA Wiki}
     * @param ID The ID of the radio station you want to play.  {{SoundID}}
     * @return Returns ''true'' if channel was set successfully, ''false'' otherwise.
     */
    export function setRadioChannel(ID: number): boolean;

    /**
     * Used to enable or disable specific [[sound]] effects.
     * Use a [[player]] element to control a players voice with this function.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundEffectEnabled|MTASA Wiki}
     * @param effectName the effect you want to enable or disable  {{Sound_Effects}}
     * @param bEnable true if you want to enable the effect, false if you want to disable it.
     * @return Returns ''true'' if the effect was set successfully, ''false'' otherwise.
     */
    export function setSoundEffectEnabled(theSound: element, effectName: string, bEnable: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundLooped|MTASA Wiki}
     * @param theSound The sound element to set the loop.
     * @return Returns ''true'' if the [[sound]] [[element]] loop was successfully changed, ''false'' otherwise.
     * * <syntaxhighlight lang="lua">
     * * addEventHandler('onClientResourceStart', resourceRoot, function()
     * *     local mySound = playSound('sound.mp3')
     * *     setSoundLooped(mySound, true)
     * * end)
     * * </syntaxhighlight>
     */
    export function setSoundLooped(theSound: element, loop: boolean): boolean;

    /**
     * Sets a custom [[sound]] max distance at which the sound stops.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundMaxDistance|MTASA Wiki}
     * @param sound a sound element.
     * @param distance the default value for this is 20
     * @return Returns a ''true'' if the max distance was set, ''false'' otherwise.
     */
    export function setSoundMaxDistance(sound: element, distance: number): boolean;

    /**
     * Sets a custom [[sound]] Minimum distance at which the sound stops getting louder.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundMinDistance|MTASA Wiki}
     * @param sound a sound element.
     * @param distance an integer representing the distance the sound stops getting louder. the default value for this is 5
     * @return Returns a ''true'' if the minimum distance was set, ''false'' otherwise.
     */
    export function setSoundMinDistance(sound: element, distance: number): boolean;

    /**
     * This function is used to change the pan level of the specified [[sound]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPan|MTASA Wiki}
     * @param theSound The sound element which pan you want to modify.
     * @param pan A float|floating point number representing the desired pan level. Range is from -1.0 (left) to 1.0 (right)
     * @return Returns ''true'' if the [[sound]] element pan was successfully changed, ''false'' otherwise.
     */
    export function setSoundPan(theSound: element, pan: number): boolean;

    /**
     * This function toggles the panning of a sound (hearing it closer to the left or right side of the speakers due to the camera position). By default a sound has its panning enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPanningEnabled|MTASA Wiki}
     * @param sound a sound element to change the panning of.
     * @param enable true to enable the panning, false otherwise.
     * @return Returns ''true'' if the sound is valid and good arguments were passed, ''false'' if not.
     * * If the sound is not 3D, this function will return ''true'' as well, but [[isSoundPanningEnabled]] will always return ''true'' after this (so it has no effect).
     */
    export function setSoundPanningEnabled(sound: element, enable: boolean): boolean;

    /**
     * This function is used to either pause or unpause the playback of the specified [[sound]] [[element]].
     * Use a player element to control a players voice with this function.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPaused|MTASA Wiki}
     * @param theSound the sound element which you want to pause/unpause.
     * @param paused a boolean value representing whether the sound should be paused or not. To pause the sound, use true.
     * @return Returns ''true'' if the [[sound]] [[element]] was successfully paused, ''false'' otherwise.
     */
    export function setSoundPaused(theSound: element, paused: boolean): boolean;

    /**
     * This function is used to change the seek position of the specified [[sound]] element.
     * Use a player element to control a players voice with this function.
     * *To set position of a remote audio file you have to pause it first, then set the position and then unpause it.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPosition|MTASA Wiki}
     * @param theSound the sound element which seek position you want to modify.
     * @param pos a float value representing the new seek position of the sound element in seconds.
     * @return Returns ''true'' if the [[sound]] element's seek position was successfully changed, ''false'' otherwise.
     */
    export function setSoundPosition(theSound: element, pos: number): boolean;

    /**
     * This function edits the properties of a specific [[sound]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundProperties|MTASA Wiki}
     * @param sound a sound element that is created using playSound or playSound3D
     * @param fSampleRate a float that defines the new sounds http://en.wikipedia.org/wiki/Sampling_rate sample rate
     * @param fTempo a float that defines the new sound http://en.wikipedia.org/wiki/Tempo tempo
     * @param fPitch a float that defines the new sound http://en.wikipedia.org/wiki/Pitch_%28music%29 pitch  {{OptionalArg}}
     * @param bReverse a boolean representing whether the sound will be reversed or not.
     * @default false
     * @return Returns ''true'' if the properties sucessfully set, ''false'' otherwise.
     */
    export function setSoundProperties(sound: element, fSampleRate: number, fTempo: number, fPitch: number, bReverse?: boolean): boolean;

    /**
     * This function can be used to change the playback speed of the specified [[sound]] [[element]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundSpeed|MTASA Wiki}
     * @param theSound the sound element which volume you want to modify.
     * @param speed a floating point number representing the desired sound playback speed.
     * @return Returns ''true'' if the [[sound]] element playback speed was successfully changed, ''false'' otherwise.
     */
    export function setSoundSpeed(theSound: element, speed: number): boolean;

    /**
     * This function is used to change the volume level of the specified [[sound]] [[element]].
     * Use a player element to control a players voice with this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSoundVolume|MTASA Wiki}
     * @param theSound The sound element which volume you want to modify or a player element which voice volume you want to modify.
     * @param volume A floating point number representing the desired volume level. Range is from 0.0 to 1.0. This can go above 1.0 for amplification.
     * @return Returns ''true'' if the [[sound]] [[element]] volume was successfully changed, ''false'' otherwise.
     */
    export function setSoundVolume(theSound: element, volume: number): boolean;

    /**
     * Stops the sound playback for specified [[sound]] [[element]]. The sound element is also destroyed.
     * @see {@link https://wiki.multitheftauto.com/wiki/stopSound|MTASA Wiki}
     * @param theSound the sound element you want to stop playing.
     * @return Returns ''true'' if the sound was successfully stopped, ''false'' otherwise.
     */
    export function stopSound(theSound: element): boolean;

    /**
     * This function checks if the browser can return to the previous page.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/canBrowserNavigateBack|MTASA Wiki}
     * @param webBrowser The browser you want to check for a previous page.
     * @return Returns ''true'' if the browser can navigate back, ''false'' otherwise.
     */
    export function canBrowserNavigateBack(webBrowser: browser): boolean;

    /**
     * This function checks if the browser can go to the next page.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/canBrowserNavigateForward|MTASA Wiki}
     * @param webBrowser The browser you want check for a next page.
     * @return Returns ''true'' if the browser can go to the next page, ''false'' otherwise.
     */
    export function canBrowserNavigateForward(webBrowser: browser): boolean;

    /**
     * This function creates a new web [[Element/Browser|browser]] element.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/createBrowser|MTASA Wiki}
     * @param width The browsers native width. This should be greater than or equal to 1.
     * @param height The browsers native height. This should be greater than or equal to 1.
     * @param isLocal Sets whether the browser can only show local content or content from the internet (see examples for more information)  {{New feature/item|3.0160|1.6||Invalid sizes will be a hard error.}}
     * @param transparent true if you want the browser transparent, false for opaque.
     * @default false
     * @return Returns a [[texture]] of the [[browser]] if it was created successfully, ''false'' otherwise. Returns also ''false'', if the user disabled remote pages and ''isLocal'' was set to ''false''.
     */
    export function createBrowser(width: number, height: number, isLocal: boolean, transparent?: boolean): element;

    /**
     * This function executes a Javascript string to the specified [[Element/Browser|browser]]. Works only with local browsers.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/executeBrowserJavascript|MTASA Wiki}
     * @param webBrowser The web browser which will execute the Javascript code
     * @param jsCode The Javascript code string
     * @return Returns ''true'' if executing Javascript is allowed in the current context, ''false'' otherwise.
     */
    export function executeBrowserJavascript(webBrowser: browser, jsCode: string): boolean;

    /**
     * This function will attempt to focus the [[Element/Browser|browser]] or unfocus all browsers. The browser that is focused will retrieve keyboard input.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/focusBrowser|MTASA Wiki}
     * @param webBrowser The web browser to be focused - if this is nil, it will unfocus all browsers.
     * @return Returns ''true'' if the browser was focused or if nil was passed, ''false'' if it failed to focus or the browser does not exist.
     */
    export function focusBrowser(webBrowser: browser): boolean;

    /**
     * This function gets a given property of a specified browser.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserProperty|MTASA Wiki}
     * @param theBrowser browser element to get the property value of
     * @param key The browser property key. It can be:
     * @return Returns the value if the property was successfully found, ''false'' otherwise.
     */
    export function getBrowserProperty(theBrowser: browser, key: string): boolean;

    /**
     * This function returns a table containing the browser settings.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserSettings|MTASA Wiki}
     * @return A table having the following keys:
     * * * '''RemoteEnabled''': ''true'' if remote websites are enabled, ''false'' otherwise
     * * * '''RemoteJavascript''': ''true'' if Javascript is enabled on remote websites, ''false'' otherwise
     * * * '''PluginsEnabled''': ''true'' if plugins such as Flash, Silverlight (but not Java) are enabled, ''false'' otherwise. This setting is ''false'' by default.
     */
    export function getBrowserSettings(): table;

    /**
     * This function can be used to retrieve the source code of a website (asynchronously). The size of the source code is limited to 2 MiB (remaining bytes are cut).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserSource|MTASA Wiki}
     * @param webBrowser The browser element you want to get the source of
     * @param callback a callback function with syntax as described below
     * @return Returns ''true'' if valid arguments have been passed, ''false'' otherwise.
     */
    export function getBrowserSource(webBrowser: browser, callback: HandleFunction): boolean;

    /**
     * This function returns the title of the passed [[Element/Browser|browser]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserTitle|MTASA Wiki}
     * @param webBrowser The browser
     * @return Returns the title as a [[string]]. Returns false if invalid arguments were passed.
     */
    export function getBrowserTitle(webBrowser: browser): string;

    /**
     * This function returns the URL of the specified [[Element/Browser|browser]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getBrowserURL|MTASA Wiki}
     * @param webBrowser The browser
     * @return Returns the web browser URL.
     */
    export function getBrowserURL(webBrowser: browser): string;

    /**
     * This function injects a mouse click (state: down).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseDown|MTASA Wiki}
     * @param webBrowser The web browser
     * @param mouseButton The mouse button (Possible values: left, middle, right)
     * @return Returns ''true'' if the click was successfully injected, ''false'' otherwise.
     */
    export function injectBrowserMouseDown(webBrowser: browser, mouseButton: string): boolean;

    /**
     * This function injects a mouse movement.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseMove|MTASA Wiki}
     * @param webBrowser The browser which will retrieve the mouse movement
     * @param posX Absolute X screen coordinate
     * @param posY Absolute Y screen coordinate
     * @return Returns ''true'' if the movement was injected successfully, ''false'' otherwise.
     */
    export function injectBrowserMouseMove(webBrowser: browser, posX: number, posY: number): boolean;

    /**
     * This function injects a mouse click (state: up).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseUp|MTASA Wiki}
     * @param webBrowser The web browser
     * @param mouseButton The mouse button (Possible values: left, middle, right)
     * @return Returns ''true'' if the click was successfully injected, ''false'' otherwise.
     */
    export function injectBrowserMouseUp(webBrowser: browser, mouseButton: string): boolean;

    /**
     * This function injects mouse wheel events.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/injectBrowserMouseWheel|MTASA Wiki}
     * @param webBrowser The web browser
     * @param verticalScroll : Amount of units you want the browser to scroll along the Y-axe.
     * @param horizontalScroll : Amount of units you want the browser to scroll along the X-axe.
     * @return Returns ''true'' if the mouse action was successfully injected, ''false'' otherwise.
     */
    export function injectBrowserMouseWheel(webBrowser: browser, verticalScroll: number, horizontalScroll: number): boolean;

    /**
     * This function checks if the specified URL is blocked from being loaded.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isBrowserDomainBlocked|MTASA Wiki}
     * @param address A website URL
     * @param isURL true if address should be parsed as URL, false otherwise.
     * @default false
     * @return Returns ''false'' if the URL is able to be loaded, ''true'' if it is blocked and ''nil'' if an invalid domain/URL was passed.
     */
    export function isBrowserDomainBlocked(address: string, isURL?: boolean): boolean;

    /**
     * This function checks if a browser is focused.
     * @see {@link https://wiki.multitheftauto.com/wiki/isBrowserFocused|MTASA Wiki}
     * @param webBrowser The browser
     * @return Returns ''true'' if the browser is focused, ''false'' otherwise and ''nil'' if invalid arguments were passed.
     */
    export function isBrowserFocused(webBrowser: browser): boolean;

    /**
     * This function checks if a browser is currently loading a website.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isBrowserLoading|MTASA Wiki}
     * @param webBrowser The browser
     * @return Returns ''true'' if the browser is loading a website, ''false'' otherwise and ''nil'' if invalid arguments were passed.
     */
    export function isBrowserLoading(webBrowser: browser): boolean;

    /**
     * This function loads the specified URL.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/loadBrowserURL|MTASA Wiki}
     * @param webBrowser The Element/Browser|browser element which will load the URL
     * @param url The url you want to load. It can either contain a remote website (http:// prefix) or a website stored within a local resource (http://mta/local/gui.html for example, see Local_Scheme_Handler|Local Scheme Handler for details).
     * @param postData The post data passed to the website. Its content type can be any type (e.g. JSON) if urlEncoded is set to false
     * @default ""
     * @param urlEncoded If set to true, it will be available f.e. in PHPs $_POST variable (the content type is: application/x-www-form-urlencoded)
     * @default true
     * @return Returns ''true'' if the URL was successfully loaded.
     */
    export function loadBrowserURL(webBrowser: browser, url: string, postData?: string, urlEncoded?: boolean): boolean;

    /**
     * Returns the browser to the previous page.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/navigateBrowserBack|MTASA Wiki}
     * @param webBrowser The browser that you want return to the previous page.
     * @return Returns ''true'' if the browser has returned to the previous page, ''false'' otherwise.
     */
    export function navigateBrowserBack(webBrowser: browser): boolean;

    /**
     * This function takes the browser to the next page.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/navigateBrowserForward|MTASA Wiki}
     * @param webBrowser The browser that you want to take to the next page.
     * @return Returns ''true'' if the browser has gone to the next page, ''false'' otherwise.
     */
    export function navigateBrowserForward(webBrowser: browser): boolean;

    /**
     * This function reloads the current browser's page.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/reloadBrowserPage|MTASA Wiki}
     * @param webBrowser The browser that you want to reload.
     * @return Returns ''true'' if the browser has reloaded, ''false'' otherwise.
     */
    export function reloadBrowserPage(webBrowser: browser): boolean;

    /**
     * This function opens a request window in order to accept the requested remote URLs.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/requestBrowserDomains|MTASA Wiki}
     * @param pages A table containing all domains
     * @param parseAsURL true if the passed addresses should be converted from URLs, false otherwise.
     * @default false
     * @param callback A callback function that is called as soon as the result is available  Syntax:  <syntaxhighlight lang="lua">function(bool wasAccepted, table new_domains)</syntaxhighlight>
     * @return Returns '''true''', if the string was successfully read, '''false''' otherwise.
     */
    export function requestBrowserDomains(pages: table, parseAsURL?: boolean, callback?: HandleFunction): boolean;

    /**
     * Allows resizing of CEF browsers at runtime.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resizeBrowser|MTASA Wiki}
     * @param webBrowser The browser you want to resize.
     * @param width The new width of the browser.
     * @param height The new height of the browser.
     * @return Returns ''true'' if the browser is resized successfully, ''false'' if there's something wrong.
     */
    export function resizeBrowser(webBrowser: browser, width: number, height: number): boolean;

    /**
     * This function provides a requestable ajax resource for Lua/Javascript communication for a [[Element/Browser|browser]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserAjaxHandler|MTASA Wiki}
     * @param webBrowser The web browser which will execute the Javascript code
     * @param url The URL endpoint to handle  {{Warning|Do not use the same path as an existing file as url parameter. Ajax handlers have a higher priority than regular files, which will lead to inaccesibility of the original file if an ajax handler is attached to the same path. }}
     * @param handler The function to call if the webBrowser attempts to open the ajax endpoint. If this parameter is nil or omitted, the ajax handler for the url will be deleted.
     * @return
     */
    export function setBrowserAjaxHandler(webBrowser: browser, url: string, handler?: HandleFunction): boolean;

    /**
     * This function sets a given property of a specified browser.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserProperty|MTASA Wiki}
     * @param theBrowser The browser element you want to set a property of
     * @param key The browser property key. It can be:
     * @param value A value indicating whether to enable (1) the property or not (0)
     * @return Returns ''true'' if the property was successfully set, ''false'' otherwise.
     */
    export function setBrowserProperty(theBrowser: browser, key: string, value: string): boolean;

    /**
     * This function sets the rendering state of a browser.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserRenderingPaused|MTASA Wiki}
     * @param webBrowser The browser
     * @param paused true to pause rendering, false to continue
     * @return Returns ''true'' if the state was successfully changed
     */
    export function setBrowserRenderingPaused(webBrowser: browser, paused: boolean): boolean;

    /**
     * This function sets either a specific [[Element/Browser|browser]]'s volume, or the overall volume for browsers.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setBrowserVolume|MTASA Wiki}
     * @param webBrowser A browser element
     * @param volume A float|floating point number representing the desired volume level. Range is from 0.0 to 1.0
     * @return
     */
    export function setBrowserVolume(webBrowser: browser, volume: number): boolean;

    /**
     * This function toggles the visibility of the developer tools pane.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleBrowserDevTools|MTASA Wiki}
     * @param webBrowser The browser
     * @param visible true to show the tools, false to hide
     * @return Returns ''true'' if the visibility was successfully toggled, ''false'' if an error occurred
     */
    export function toggleBrowserDevTools(webBrowser: browser, visible: boolean): boolean;

    /**
     * This function creates a new CEGUI web [[Element/Browser|browser]] element.
     * The difference between this, and createBrowser is that, this handles inputs internally, and it can be attached to GUI windows. So this one is more suitable for custom dx based interfaces.
     * You can learn more about the differences [https://forum.mtasa.com/topic/80422-dx-browser-vs-gui-browser/?do=findComment&comment=737334 here].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateBrowser|MTASA Wiki}
     * @param x A float of the 2D x position of the browser on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the browser on a players screen. This is affected by the relative argument.
     * @param width The browsers native width. This should be greater than or equal to 1.
     * @param height The browsers native height. This should be greater than or equal to 1.
     * @param isLocal Sets whether the browser can only show local content or content from the internet (see examples over CreateBrowser|here for more information)
     * @param isTransparent true if you want the browser to support transparency, false otherwise
     * @param isRelative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on clients resolution, accessible using guiGetScreenSize.  {{New feature/item|3.0160|1.6||Providing a size of (0,0) will be a hard error.}}
     * @param parent This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns a [[gui-browser]] element if it was created successfully, ''false'' otherwise. Returns also ''false'', if the user disabled remote pages and ''isLocal'' was set to ''false''.
     */
    export function guiCreateBrowser(x: number, y: number, width: number, height: number, isLocal: boolean, isTransparent: boolean, isRelative: boolean, parent?: element): guibrowser;

    /**
     * This function gets the browser element behind a gui-browser (a browser that has been created via [[guiCreateBrowser]]).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetBrowser|MTASA Wiki}
     * @return Returns the [[Element/Browser|Browser]] element if a correct [[Element/gui-browser|gui-browser]] has been passed, ''false'' otherwise.
     */
    export function guiGetBrowser(browser: gui): browser;

    /**
     * This function returns an [[element]] that corresponds to the game camera
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getCamera|MTASA Wiki}
     * @return Returns an [[element]] that corresponds to the game camera
     */
    export function getCamera(): element;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraClip|MTASA Wiki}
     * @return *'''objects:''' if you want the camera to clip on objects.
     * * *'''vehicles:''' if you want the camera to clip on vehicles.
     */
    export function getCameraClip(): LuaMultiReturn<[boolean, boolean]>;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraFieldOfView|MTASA Wiki}
     * @param cameraMode the camera mode to get the field of view of  ** "player": whilst walking/running  ** "vehicle": whilst in vehicle  ** "vehicle_max": the max the field of view can go to when the vehicle is moving at a high speed (must be higher than "vehicle")
     * @return Returns one float - the field of view angle
     */
    export function getCameraFieldOfView(cameraMode: string): number;

    /**
     * This function returns what goggle effect is currently affecting the camera.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraGoggleEffect|MTASA Wiki}
     * @return * [[String]] indicating the current camera goggle effect. Their meanings can be seen below.
     * * {{Camera goggle modes}}
     */
    export function getCameraGoggleEffect(): string;

    /**
     * This function gets the camera shake level set by [[setCameraShakeLevel]].}}
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraShakeLevel|MTASA Wiki}
     * @return Returns an integer representing the camera shake level, from 0 (no shaking effect) to 255 (maximum shaking effect). By default, the camera has no shaking effect.
     */
    export function getCameraShakeLevel(): number;

    /**
     * This function allows you to get the camera's view mode. This indicates at what distance the camera will follow the player.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraViewMode|MTASA Wiki}
     * @return Returns an [[int]] indicating the current camera view mode. Their meanings can be seen below.
     * * {{Camera view modes}}
     */
    export function getCameraViewMode(): number;

    /**
     * This function sets if the camera will "collide" with any objects or vehicles in its way. This means that if object clip is enabled an object is in the way of where the camera actually wants to be, the camera will try to be in front of it. This function can disable that.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraClip|MTASA Wiki}
     * @param objects Sets if you want the camera to clip on objects.
     * @default true
     * @param vehicles Sets if you want the camera to clip on vehicles.
     * @default true
     * @return Always returns ''true''.
     */
    export function setCameraClip(objects: boolean, vehicles: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraFieldOfView|MTASA Wiki}
     * @param cameraMode the camera mode to get the field of view of  ** "player": whilst walking/running  ** "vehicle": whilst in vehicle  ** "vehicle_max": the max the field of view can go to when the vehicle is moving at a high speed (must be higher than "vehicle")
     * @param fieldOfView The field of view angle, 0 to 179.
     * @return Returns ''true'' if the arguments are valid, ''false'' otherwise.
     */
    export function setCameraFieldOfView(cameraMode: string, fieldOfView: number): boolean;

    /**
     * This function allows you to set the camera's current goggle effect. This means you can activate nightvision or infrared effects by script
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraGoggleEffect|MTASA Wiki}
     * @param goggleEffect : the goggle effect you wish to set  {{Camera goggle modes}}  {{New feature/item|3.0156|1.5.5|13999|
     * @param noiseEnabled : whether or not there should be a fuzzy noise effect  }}
     * @default true
     * @return * ''true'' if the effect was set correctly.
     * * * ''false'' otherwise.
     */
    export function setCameraGoggleEffect(goggleEffect: string, noiseEnabled?: boolean): boolean;

    /**
     * This function sets the camera shake level (as seen on the ''Are you going to San Fierro?'' singleplayer mission).}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraShakeLevel|MTASA Wiki}
     * @param shakeLevel : an integer between 0 and 255, which represents the camera shake intensity level.
     * @return Returns ''true'' if the camera shake level was changed, ''false'' if the required argument is incorrect or missing.
     */
    export function setCameraShakeLevel(shakeLevel: number): boolean;

    /**
     * This function allows you to set the camera's view mode if you are inside a [[vehicle]]. This indicates at what distance the camera will follow the player.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraViewMode|MTASA Wiki}
     * @param viewMode : The view mode you wish to use  {{Camera view modes}}
     * @return Returns ''true'' if the view was set correctly, ''false'' otherwise.
     */
    export function setCameraViewMode(viewMode: number): boolean;

    /**
     * This function is used to get alpha (transparency) from the client's cursor.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCursorAlpha|MTASA Wiki}
     * @return Returns a int, 0-255, where 255 is fully opaque and 0 is fully transparent.
     */
    export function getCursorAlpha(): number;

    /**
     * This function gets the current position of the mouse cursor. Note that for performance reasons, the world position returned is always 300 units away. If you want the exact world point (similar to [[onClientClick]]), use [[processLineOfSight]] between the camera position and the worldX/Y/Z result of this function. (See example below)
     * @see {@link https://wiki.multitheftauto.com/wiki/getCursorPosition|MTASA Wiki}
     * @return Returns 5 values: ''cursorX'', ''cursorY'', ''worldX'', ''worldY'', ''worldZ''. The first two values are the 2D relative screen coordinates of the cursor: ''cursorX'' goes from 0 (left side of the screen) to 1 (right side), ''cursorY'' goes from 0 (top) to 1 (bottom). The 3 values that follow are the 3D world map coordinates that the cursor points at. If the cursor isn't showing, returns ''false'' as the first value.
     */
    export function getCursorPosition(): LuaMultiReturn<[number, number, number, number, number]>;

    /**
     * This function is used to change alpha (transparency) from the client's cursor.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCursorAlpha|MTASA Wiki}
     * @return Returns ''true'' if the new alpha value was set, or ''false'' otherwise.
     */
    export function setCursorAlpha(alpha: number): boolean;

    /**
     * This function sets the current position of the mouse cursor.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCursorPosition|MTASA Wiki}
     * @param cursorX Position over the X axis
     * @param cursorY Position over the Y axis
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the position has been successfully set, ''false'' otherwise.
     */
    export function setCursorPosition(cursorX: number, cursorY: number): boolean;

    /**
     * This function converts [[Texture_pixels|pixels]] from one format to another.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxConvertPixels|MTASA Wiki}
     * @return Returns a copy of the pixels in the new format, or ''false'' if invalid arguments were passed to the function.
     */
    export function dxConvertPixels(pixels: string, newFormat: string, quality?: number): string;

    /**
     * <br/>
     * This function creates a [[DX font]] element that can be used in [[dxDrawText]]. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.
     * To see if creation is likely to fail, use [[dxGetStatus]]. (When '''VideoMemoryFreeForMTA''' is zero, failure ''is'' guaranteed.)
     * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateFont|MTASA Wiki}
     * @param filepath the name of the file containing the font
     * @param size size of the font
     * @default 9
     * @param bold flag to indicate if the font should be bold
     * @default false
     * @param quality the font quality  ** "default": not the actual default  ** "draft"  ** "proof": the default   ** "nonantialiased"  ** "antialiased"  ** "cleartype"  ** "cleartype_natural"
     * @default "proof"
     * @return Returns a [[DX font]] element if successful, ''false'' if invalid arguments were passed to the function, or there is insufficient resources available.
     * * '''You should always check to see if this function has returned false.'''
     */
    export function dxCreateFont(filepath: string, size?: number, bold?: boolean, quality?: string): element;

    /**
     * This function creates a render target element, which is a special type of [[texture]] that can be drawn on with the dx functions. Successful render target creation is not guaranteed, and may fail due to hardware or memory limitations.
     * To see if creation is likely to fail, use [[dxGetStatus]]. (When '''VideoMemoryFreeForMTA''' is zero, failure ''is'' guaranteed.)
     * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateRenderTarget|MTASA Wiki}
     * @param withAlpha The render target will be created with an alpha channel. false will turn images alpha channels to black color
     * @default false
     * @return Returns a [[texture]] element if successful, ''false'' if the system is unable to create a render target.
     * * '''You should always check to see if this function has returned false.'''
     */
    export function dxCreateRenderTarget(width: number, height: number, withAlpha?: boolean): element;

    /**
     * This function creates a screen source, which is a special type of [[texture]] that contains the screen as rendered by GTA
     * Note that successful screen source creation is not guaranteed, and may fail due to hardware or memory limitations. You should always check to see if this function has returned false.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateScreenSource|MTASA Wiki}
     * @return Returns a [[texture]] [[element]] if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function dxCreateScreenSource(width: number, height: number): element;

    /**
     * This function creates a [[texture]] element that can be used in the dxDraw functions.
     * [[Image:Screenshot_27.png|frame|A speedtest showing the performance of a texture created with various settings of textureFormat.[Mipmaps = true][textureEdge = "wrap"]]]
     * [[Image:DxCreateTexture_mipmaps_false.png |frame|A speedtest showing the performance of a texture created with various settings of textureFormat.[Mipmaps = false][textureEdge = "wrap"]]]
     * It is possible to use dxCreateTexture to load cubemaps and volume textures, but these will only be useable as inputs for a shader. The Microsoft utility [http://nightly.mtasa.com/files/shaders/DxTex.zip DxTex] can view and change cubemaps and volume textures. DxTex can also convert standard textures into DXT1/3/5 compressed .dds which should reduce file sizes.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateTexture|MTASA Wiki}
     * @param pixels Texture_pixels|Pixels containing image data. (plain, jpeg or png pixels can be used here)  or
     * @return Returns a [[texture]] if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function dxCreateTexture(pixels: string, textureFormat?: string, mipmaps?: boolean, textureEdge?: string): element;

    /**
     * <lowercasetitle/>
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawCircle|MTASA Wiki}
     * @param posX : An integer representing the absolute X position of the circle center, represented by pixels on the screen.
     * @param posY : An integer representing the absolute Y position of the circle center, represented by pixels on the screen.
     * @param radius : An integer representing the radius scale of the circle that is being drawn.  {{OptionalArg}}
     * @param startAngle : An integer representing the angle of the first point of the circle.
     * @default 0.0
     * @param stopAngle : An integer representing the angle of the last point of the circle.
     * @default 360.0
     * @param theColor : An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
     * @default white
     * @param theCenterColor : An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
     * @default theColor
     * @param segments : An integer ranging from 3-1024 representing how many triangles are used to form the circle, more segments = smoother circle. Note: using lots of segments may cause lag.
     * @default 32
     * @param ratio : Ratio between width and height, e.g: 2 would mean that the width of the circle is 2 times the height.
     * @default 1
     * @param postGUI : A bool representing whether the circle should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
     * @default false
     * @return Returns ''true'' if the creation of the 2D circle was successful, ''false'' otherwise.
     */
    export function dxDrawCircle(posX: number, posY: number, radius: number, startAngle?: number, stopAngle?: number, theColor?: number, theCenterColor?: number, segments?: number, ratio?: number, postGUI?: boolean): boolean;

    /**
     * Differing from [[dxDrawImage]], this function only draws a part of an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see [[onClientRender]]).
     * Image files should ideally have dimensions that are a power of two, to prevent possible blurring.<br/>
     * <b>Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...</b>
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawImageSection|MTASA Wiki}
     * @param posX the absolute X coordinate of the top left corner of the image
     * @param posY the absolute Y coordinate of the top left corner of the image
     * @param width the absolute width of the image
     * @param height the absolute height of the image
     * @param u the absolute X coordinate of the top left corner of the section which should be drawn from image
     * @param v the absolute Y coordinate of the top left corner of the section which should be drawn from image
     * @param usize the absolute width of the image section
     * @param vsize the absolute height of the image section
     * @param image Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring. Use a texture created with dxCreateTexture to speed up drawing.
     * @param rotation the rotation, in degrees for the image.
     * @default 0
     * @param rotationCenterOffsetX the absolute X offset from the image center for which to rotate the image from.
     * @default 0
     * @param rotationCenterOffsetY the absolute Y offset from the image center for which to rotate the image from.
     * @default 0
     * @param color the color of the image, a value produced by tocolor or hexadecimal number in format: 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
     * @default white
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function dxDrawImageSection(posX: number, posY: number, width: number, height: number, u: number, v: number, usize: number, vsize: number, image: string, rotation: number, rotationCenterOffsetX: number, rotationCenterOffsetY: number, color: number, postGUI: boolean): boolean;

    /**
     * This function draws a 2D line across the screen - rendered for '''one''' frame.  This should be used in conjunction with [[onClientRender]] in order to display continuously.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawLine|MTASA Wiki}
     * @param startX An integer representing the absolute start X position of the line, represented by pixels on the screen.
     * @param startY An integer representing the absolute start Y position of the line, represented by pixels on the screen.
     * @param endX An integer representing the absolute end X position of the line, represented by pixels on the screen.
     * @param endY An integer representing the absolute end Y position of the line, represented by pixels on the screen.
     * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).  {{OptionalArg}}
     * @param width The width/thickness of the line
     * @default 1.0
     * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
     * @default false
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function dxDrawLine(startX: number, startY: number, endX: number, endY: number, color: number, width?: number, postGUI?: boolean): boolean;

    /**
     * This function draws a 3D line between two points in the 3D world - rendered for '''one''' frame.  This should be used in conjunction with [[onClientRender]] in order to display continuously.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawLine3D|MTASA Wiki}
     * @param startX The start X position of the 3D line, representing a coordinate in the GTA world.
     * @param startY The start Y position of the 3D line, representing a coordinate in the GTA world.
     * @param startZ The start Z position of the 3D line, representing a coordinate in the GTA world.
     * @param endX The end X position of the 3D line, representing a coordinate in the GTA world.
     * @param endY The end Y position of the 3D line, representing a coordinate in the GTA world.
     * @param endZ The end Z position of the 3D line, representing a coordinate in the GTA world.  {{OptionalArg}}
     * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
     * @default 0xFFFFFFFF
     * @param width The width/thickness of the line
     * @default 1.0
     * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
     * @default false
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, color?: number, width?: number, postGUI?: boolean): boolean;

    /**
     * This function draws a textured 3D line between two points in the 3D world - rendered for one frame.  This should be used in conjunction with [[onClientPreRender]] in order to display continuously.
     * The 3D line with a large width value effectively becomes a rectangle, so it it possible to construct basic shapes such as boxes with several large width lines and the appropriate values for 'faceToward'.
     * 3D lines are drawn at a particular place in the [[Game_Processing_Order|game processing order]], so use [[onClientPreRender]] for drawing if you are attaching them to world elements.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialLine3D|MTASA Wiki}
     * @param material A material to draw the line with.
     * @param width The width/thickness of the line in GTA world units. (This is 1/75th of the width used in dxDrawLine3D)  {{OptionalArg}}
     * @param color An int|integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).  {{New items|3.0156|1.5.5|
     * @default white
     * @param postGUI : A bool representing whether the line should be drawn on top of or behind any ingame GUI.  |11998}}
     * @default false
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawMaterialLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, material: element, width: number, color: number, postGUI: boolean, faceTowardX: number, faceTowardY: number, faceTowardZ: number): boolean;

    /**
     * If image file is used, it should ideally have dimensions that are a power of two, to prevent possible blurring.
     * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...}}
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialPrimitive|MTASA Wiki}
     * @param pType Type of primitive to be drawn.
     * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawMaterialPrimitive(pType: primitiveType, material: string, postGUI: boolean, vertice1: table, vertice2?: table, ...args: any[]): boolean;

    /**
     * This function draws a 3D primitive shape with material applied to it in the 3D world - rendered for one frame. This should be used in conjunction with [[onClientRender]] in order to display continuously.
     * If image file is used, it should ideally have dimensions that are a power of two, to prevent possible blurring.
     * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialPrimitive3D|MTASA Wiki}
     * @param pType Type of primitive to be drawn.
     * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawMaterialPrimitive3D(pType: primitiveType, material: string, postGUI: boolean, vertice1: table, vertice2?: table, ...args: any[]): boolean;

    /**
     * This function draws a textured 3D line between two points in the 3D world - rendered for one frame.  This should be used in conjunction with [[onClientPreRender]] in order to display continuously.
     * The 3D line with a large width value effectively becomes a rectangle, so it it possible to construct basic shapes such as boxes with several large width lines and the appropriate values for 'faceToward'.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialSectionLine3D|MTASA Wiki}
     * @param u the absolute X coordinate of the top left corner of the section
     * @param v the absolute Y coordinate of the top left corner of the section
     * @param usize the absolute width of the section
     * @param vsize the absolute height of the section
     * @param material A material to draw the line with.
     * @param width The width/thickness of the line in GTA world units. (This is 1/75th of the width used in dxDrawLine3D)
     * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).  {{New items|5.0155|1.5.5-9.11998|
     * @default white
     * @param postGUI : A bool representing whether the line should be drawn on top of or behind any ingame GUI.  }}
     * @default false
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawMaterialSectionLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, u: number, v: number, usize: number, vsize: number, material: element, width: number, color: number, postGUI: boolean, faceTowardX: number, faceTowardY: number, faceTowardZ: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawPrimitive|MTASA Wiki}
     * @param pType Type of primitive to be drawn.
     * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawPrimitive(pType: string, postGUI: boolean, vertice1: table, vertice2?: table, ...args: any[]): boolean;

    /**
     * This function draws a 3D primitive in the 3D world - rendered for '''one''' frame.  This should be used in conjunction with [[onClientRender]] in order to display continuously.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawPrimitive3D|MTASA Wiki}
     * @param primitiveType The type of primitive to be drawn. This could be:      "pointlist"      "linelist"      "linestrip"      "trianglefan"      "trianglelist"      "trianglestrip"
     * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
     * @param vertex1 A table with the coordinates of the vertex plus its color.
     * @param vertex2 A table with the coordinates of the vertex plus its color.
     * @param vertex3 A table with the coordinates of the vertex plus its color.  The vertex should be passed like this:  <syntaxhighlight lang="lua">  {x, y, z, color}  </syntaxhighlight>  {{OptionalArg}}
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawPrimitive3D(primitiveType: string, postGUI: boolean, vertex1: table, vertex2: table, vertex3: table, vertex4?: table, ...args: any[]): boolean;

    /**
     * This function draws a 2D rectangle across the screen - rendered for '''one''' frame. This should be used in conjunction with [[onClientRender]] in order to display continuously.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawRectangle|MTASA Wiki}
     * @param startX An float representing the absolute origin X position of the rectangle, represented by pixels on the screen.
     * @param startY An float representing the absolute origin Y position of the rectangle, represented by pixels on the screen.
     * @param width An float representing the width of the rectangle, drawn in a right direction from the origin.
     * @param height An float representing the height of the rectangle, drawn in a downwards direction from the origin.
     * @param color the hex color of the rectangle, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
     * @default white
     * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI.  {{New feature/item|9.06931|1.4.0|6931|
     * @default false
     * @param subPixelPositioning A bool representing whether the rectangle can be positioned sub-pixel-ly.  }}
     * @default false
     * @return Returns true if the operation was successful, false otherwise.
     */
    export function dxDrawRectangle(startX: number, startY: number, width: number, height: number, color?: number, postGUI?: boolean, subPixelPositioning?: boolean): boolean;

    /**
     * Draws a string of text on the screen for one frame. In order for the text to stay visible continuously, you need to call this function with the same parameters on each frame update (see [[onClientRender]]).
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawText|MTASA Wiki}
     * @param text the text to draw
     * @param leftX the absolute X coordinate of the top left corner of the text
     * @param topY the absolute Y coordinate of the top left corner of the text
     * @param rightX the absolute X coordinate of the right side of the text bounding box. Used for text aligning, clipping and word breaking.
     * @default leftX
     * @param bottomY the absolute Y coordinate of the bottom side of the text bounding box. Used for text aligning, clipping and word breaking.
     * @default topY
     * @param color the color of the text, a value produced by tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
     * @default white
     * @param font Either a custom DX font element or the name of a built-in DX font: Note: Some fonts are incompatible with certain languages such as Arabic.  {{DxFonts}}
     * @default "default"
     * @param alignX horizontal alignment of the text within the bounding box. Can be left, center or right.
     * @default "left"
     * @param alignY vertical alignment of the text within the bounding box. Can be top, center or bottom.
     * @default "top"
     * @param clip if set to true, the parts of the text that dont fit within the bounding box will be cut off.
     * @default false
     * @param wordBreak if set to true, the text will wrap to a new line whenever it reaches the right side of the bounding box. If false, the text will always be completely on one line.
     * @default false
     * @param postGUI A bool representing whether the text should be drawn on top of or behind any ingame GUI (rendered by CEGUI).  {{New feature/item|3.0130|1.3.0|3986|
     * @default false
     * @param colorCoded Set to true to enable embedded #FFFFFF color codes. Note: clip and wordBreak are forced false if this is set.
     * @default false
     * @param subPixelPositioning A bool representing whether the text can be positioned sub-pixel-ly. Looks nicer for moving/scaling animations.  }}  {{New feature/item|3.0135|1.3.5|6054|
     * @default false
     * @param fRotation Rotation
     * @default 0.0
     * @param fRotationCenterX Rotation Origin X
     * @default 0.0
     * @param fRotationCenterY Rotation Origin Y  }}
     * @default 0.0
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function dxDrawText(text: string, leftX: number, topY: number, rightX?: number, bottomY?: number, color?: number, scaleXY?: number, scaleY?: number, font?: string, alignX?: string, alignY?: string, clip?: boolean, wordBreak?: boolean, postGUI?: boolean, colorCoded?: boolean, subPixelPositioning?: boolean, fRotation?: number, fRotationCenterX?: number, fRotationCenterY?: number): boolean;

    /**
     * This function drawn same sphere as /showcol. It provides 4 levels of iterations which mean density of sphere. Adjust radius to iterations to get optimum density of mesh. About 50 spheres with iterations = 4 can cause fps drop.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawWiredSphere|MTASA Wiki}
     * @param radius A radius of sphere.
     * @param theColor A color of sphere from tocolor function.
     * @param fLineWidth A width of line
     * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function dxDrawWiredSphere(x: number, y: number, z: number, radius: number, theColor: number, fLineWidth: number, iterations: number): boolean;

    /**
     * This function returns the current blend mode for the dxDraw functions. The blend mode is set using [[dxSetBlendMode]]
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetBlendMode|MTASA Wiki}
     * @return Returns the current blend mode, which can be one of:
     * * *'''blend'''
     * * *'''add'''
     * * *'''modulate_add'''
     * * *'''overwrite'''
     */
    export function dxGetBlendMode(): string;

    /**
     * This function retrieves the theoretical height of a certain piece of text, if it were to be drawn using [[dxDrawText]].
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetFontHeight|MTASA Wiki}
     * @param scale The size of the text.
     * @default 1
     * @param font Either a custom DX font element or the name of a built-in dx font:  {{DxFonts}}
     * @default "default"
     * @return Returns an integer of the height of the text.
     */
    export function dxGetFontHeight(scale: number, font: string): number;

    /**
     * This gets the dimensions of the supplied [[material]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetMaterialSize|MTASA Wiki}
     * @return Returns two ''ints'' representing the width and height in pixels of the material, or false if an invalid parameter was passed to the function.
     * * If the material is a volume texture, this function will return three ''ints'' representing the width, height and depth.
     */
    export function dxGetMaterialSize(material: element): LuaMultiReturn<[number, number, number?]>;

    /**
     * This function gets the color of a single pixel from [[Texture_pixels|pixels]] contained in a string. It only works with ''''plain'''' format pixels.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetPixelColor|MTASA Wiki}
     * @param x The X coordinate for the pixel
     * @param y The Y coordinate for the pixel
     * @return Returns 4 ''int''s representing the rgba color value of the pixel if succesful, or ''false'' if invalid arguments were passed to the function.
     */
    export function dxGetPixelColor(pixels: string, x: number, y: number): LuaMultiReturn<[number, number, number, number]>;

    /**
     * This function gets the dimensions of [[Texture_pixels|pixels]] contained in a string. It works with all pixel formats.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetPixelsSize|MTASA Wiki}
     * @param pixels The pixels to get the dimensions of
     * @return Returns width and height of the pixels if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function dxGetPixelsSize(pixels: string): LuaMultiReturn<[number, number]>;

    /**
     * This function returns the format of [[Texture_pixels|pixels]] contained in a string.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetPixelsFormat|MTASA Wiki}
     * @return Returns the format of the pixels if successful (''''plain'''' or ''''png'''' or ''''jpeg''''), ''false'' if invalid arguments were passed to the function.
     */
    export function dxGetPixelsFormat(pixels: string): string;

    /**
     * This function gets information about various internal datum
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetStatus|MTASA Wiki}
     * @return Returns a table with the following entries:
     * * * '''TestMode :''' The current dx test mode. See [[dxSetTestMode]].
     * * *'''VideoCardName :''' The name of the graphics card.
     * * *'''VideoCardRAM :''' The installed memory in MB of the graphics card.
     * * *'''VideoCardPSVersion :''' The maximum pixel shader version of the graphics card.
     * * *'''VideoCardMaxAnisotropy:''' The maximum anisotropic filtering available. (0-4 which respectively mean: off,2x,4x,8x,16x)
     * * *'''VideoCardNumRenderTargets:''' The maximum number of simultaneous render targets a shader can use.
     * * *'''VideoMemoryFreeForMTA :''' The amount of memory in MB available for MTA to use. '''When this gets to zero, [[guiCreateFont]], [[dxCreateFont]] and [[dxCreateRenderTarget]] will fail.'''
     * * *'''VideoMemoryUsedByFonts :''' The amount of graphic memory in MB used by custom fonts.
     * * *'''VideoMemoryUsedByTextures :''' The amount of graphic memory in MB used by textures.
     * * *'''VideoMemoryUsedByRenderTargets :''' The amount of graphic memory in MB used by render targets.
     * * *'''SettingWindowed :''' The windowed setting. (true/false)
     * * *'''SettingFullScreenStyle :''' Display style when in full screen mode. (0-2 which respectively mean: Standard, Borderless window, Borderless keep res)
     * * *'''SettingFXQuality :''' The FX Quality. (0-3)
     * * *'''SettingDrawDistance :''' The draw distance setting. (0-100)
     * * *'''SettingVolumetricShadows :''' The volumetric shadows setting. (true/false)
     * * *'''SettingStreamingVideoMemoryForGTA :''' The usable graphics memory setting. (64-256)
     * * *'''SettingAnisotropicFiltering:''' The anisotropic filtering setting. (0-4 which respectively mean: off,2x,4x,8x,16x)
     * * *'''SettingAntiAliasing:''' The anti-aliasing setting. (0-3 which respectively mean: off,1x,2x,3x)
     * * *'''SettingHeatHaze:''' The heat haze setting. (true/false)
     * * *'''SettingGrassEffect:''' The grass effect setting. (true/false)
     * * *'''Setting32BitColor:''' The color depth of the screen. (false is 16bit, true is 32bit)
     * * *'''SettingHUDMatchAspectRatio:''' The hud match aspect ratio setting (true/false)
     * * *'''SettingAspectRatio:''' The aspect ratio setting ("auto", "4:3", "16:10", "16:9")
     * * *'''SettingFOV:''' The FOV setting
     * * {{New feature/item|3.0154|1.5.3|11199|
     * * *'''SettingHighDetailVehicles:''' High detail vehicles setting (true/false).
     * * }}
     * * {{New feature/item|3.0160|1.5.8||
     * * *'''SettingHighDetailPeds:''' High detail peds setting (true/false).
     * * }}
     * * *'''AllowScreenUpload :''' The allows screen uploads setting. (true/false)
     * * *'''DepthBufferFormat:''' The format of the shader readable depth buffer, or 'unknown' if not available
     * * *'''UsingDepthBuffer:''' ''true'' if the depth buffer is used, ''false'' otherwise
     */
    export function dxGetStatus(): table;

    /**
     * '''NOTE:''' This function already takes the client's screen resolution into account.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetTextSize|MTASA Wiki}
     * @param text A string representing the text for which you wish to retrieve with width for.  {{OptionalArg}}
     * @param width The width of the text. Use with wordBreak = true.
     * @default 0
     * @param scaleX The scale of the text. Scale can also be inputted as a Vector2.
     * @default 1.0
     * @param scaleY The scale of the text.
     * @default 1.0
     * @param font Either a custom DX font element or the name of a built-in dx font:  {{DxFonts}}
     * @default "default"
     * @param wordBreak If set to true, the text will wrap to a new line whenever it reaches the right side of the bounding box. If false, the text will always be completely on one line.
     * @default false
     * @param colorCoded Should we exclude color codes from the width? False will include the hex in the length.
     * @default false
     * @return Returns two floats representing the width and height of the text in pixels.
     */
    export function dxGetTextSize(text: string, width?: number, scaleX?: number, scaleY?: number, font?: string, wordBreak?: boolean, colorCoded?: boolean): LuaMultiReturn<[number, number]>;

    /**
     * This function retrieves the theoretical width (in pixels) of a certain piece of text, if it were to be drawn using [[dxDrawText]].
     * '''NOTE:''' This function already takes the client's screen resolution into account.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetTextWidth|MTASA Wiki}
     * @param text A string representing the text for which you wish to retrieve with width for.  {{OptionalArg}}
     * @param scale The size of the text.
     * @default 1
     * @param font Either a custom DX font element or the name of a built-in dx font:  {{DxFonts}}
     * @default "default"
     * @param bColorCoded Should we exclude color codes from the width? (false will include the hex in the length)
     * @default false
     * @return Returns the float of the width of the text (in pixels).
     */
    export function dxGetTextWidth(text: string, scale: number, font: string, bColorCoded: boolean): number;

    /**
     * This function fetches the [[Texture_pixels|pixels]] from a [[texture]] element. It can be used with a standard texture, render target or screen source.
     * *This function is slow and not something you want to be doing once a frame.
     * *It is slower when reading pixels from a render target or screen source.
     * *And is very slow indeed if the texture format is not ''' 'argb' '''.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/dxGetTexturePixels|MTASA Wiki}
     * @param surfaceIndex Desired slice to get if the texture is a volume texture, or desired face to get if the texture is a cube map. <nowiki>(Cube map faces: 0=+X 1=-X 2=+Y 3=-Y 4=+Z 5=-Z)</nowiki>  By default the pixels from the whole texture is returned. To get only a portion of the texture, define a rectangular area using all four of these optional arguments:
     * @default 0
     * @param x Rectangle left position
     * @default 0
     * @param y Rectangle top position
     * @default 0
     * @param width Rectangle width
     * @default 0
     * @return Returns a ''''plain'''' format pixels string if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function dxGetTexturePixels(surfaceIndex: number, texture: element, x?: number, y?: number, width?: number, height?: number): string;

    /**
     * This function gets the current aspect ratio set by [[dxSetAspectRatioAdjustmentEnabled]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/dxIsAspectRatioAdjustmentEnabled|MTASA Wiki}
     * @return *'''boolean:''' returns '''true''' when enabled by [[dxSetAspectRatioAdjustmentEnabled]], '''false''' otherwise.
     * * *'''float:''' aspect ratio set by [[dxSetAspectRatioAdjustmentEnabled]]
     */
    export function dxIsAspectRatioAdjustmentEnabled(): LuaMultiReturn<[boolean, number]>;

    /**
     * This function allows for the positioning of dxDraw calls to be automatically adjusted according to the client's aspect ratio setting.  This lasts for a single execution of an event handler for one of the following events: [[onClientRender]], [[onClientPreRender]] and [[onClientHUDRender]]. So the function has to be called every frame, just like dxDraws.
     * This is particularly useful for draws that must align with the GTA HUD, for which the sizing and positioning can vary for different aspect ratios.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetAspectRatioAdjustmentEnabled|MTASA Wiki}
     * @param bEnabled : Should the adjustment be enabled or disabled.  {{OptionalArg}}
     * @return Returns ''true'' when it was changed successfully, or ''false'' otherwise.
     */
    export function dxSetAspectRatioAdjustmentEnabled(bEnabled: boolean, sourceRatio?: number): boolean;

    /**
     * This function sets the current blend mode for the dxDraw functions. Changing the blend mode can increase the quality when drawing text or certain other images to a render target. As a general guide use '''modulate_add''' when drawing text to a render target, and '''add''' when drawing the render target to the screen. Don't forget to restore the default '''blend''' at the end - See the example below.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetBlendMode|MTASA Wiki}
     * @return Returns true if successful, or ''false'' if invalid arguments were passed to the function.
     */
    export function dxSetBlendMode(blendMode: string): boolean;

    /**
     * This function sets the color of a single pixel for [[Texture_pixels|pixels]] contained in a string. It only works with ''''plain'''' format pixels.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetPixelColor|MTASA Wiki}
     * @param x The X coordinate for the pixel
     * @param y The Y coordinate for the pixel
     * @param r The red channel for the color (0-255)
     * @param g The green channel for the color (0-255)
     * @param b The blue channel for the color (0-255)
     * @param a The alpha channel for the color (0-255)
     * @default 255
     * @return Returns true if successful, or ''false'' if invalid arguments were passed to the function.
     */
    export function dxSetPixelColor(pixels: string, x: number, y: number, r: number, g: number, b: number, a?: number): boolean;

    /**
     * This function changes the drawing destination for the dx functions. It can be used to select a previously created render target, or if called with no arguments, restore drawing directly to the screen.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetRenderTarget|MTASA Wiki}
     * @param renderTarget The render target element whose pixels we want to draw on.
     * @param clear If set to true, the render target will also be cleared.
     * @default false
     * @return Returns ''true'' if the render target was successfully changed, ''false'' otherwise.
     */
    export function dxSetRenderTarget(renderTarget: element, clear: boolean): boolean;

    /**
     * This sets a named parameter for a [[shader]] element
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetShaderValue|MTASA Wiki}
     * @param theShader The shader element whose parameter is to be changed
     * @param parameterName The name of parameter
     * @param value The value to set, which can be a texture, a bool, a number or a list of numbers(max 16 floats(numbers))
     * @return Returns ''true'' if the shader element's parameter was successfully changed, ''false'' otherwise.
     */
    export function dxSetShaderValue(theShader: element, parameterName: string, value: string): boolean;

    /**
     * This function sets the amount of geometric sub-division to use when drawing a [[shader]] element with [[dxDrawImage]].
     * Using tessellation allows a shader to manipulate the shape of the rendered image at each sub-division boundary.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetShaderTessellation|MTASA Wiki}
     * @param theShader The shader element whose tessellation is to be changed
     * @param tessellationX The number of sub-division points along the X axis. Range is 1 to 500.
     * @param tessellationY The number of sub-division points along the Y axis. Range is 1 to 500.
     * @return Returns ''true'' if the shader element's tessellation was successfully changed, ''false'' otherwise.
     */
    export function dxSetShaderTessellation(theShader: element, tessellationX: number, tessellationY: number): boolean;

    /**
     * This function applies a 3D transformation to a [[shader]] element when it is drawn with [[dxDrawImage]].
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetShaderTransform|MTASA Wiki}
     * @param theShader The shader element whose transformation is to be changed
     * @param rotationX Rotation angle in degrees around the X axis (Left,right). This will make the shader rotate along its width.
     * @param rotationY Rotation angle in degrees around the Y axis (Up,down). This will make the shader rotate along its height.
     * @param rotationZ Rotation angle in degrees around the Z axis (In,out). This will make the shader rotate in a similar way to the rotation argument in dxDrawImage.  {{OptionalArg}}
     * @return Returns ''true'' if the shader element's transform was successfully changed, ''false'' otherwise.
     */
    export function dxSetShaderTransform(theShader: element, rotationX: number, rotationY: number, rotationZ: number, rotationCenterOffsetX: number, rotationCenterOffsetY: number, rotationCenterOffsetZ: number, bRotationCenterOffsetOriginIsScreen: boolean, perspectiveCenterOffsetX: number, perspectiveCenterOffsetY: number, bPerspectiveCenterOffsetOriginIsScreen: boolean): boolean;

    /**
     * This function is used for testing scripts written using [[guiCreateFont]], [[dxCreateFont]], [[dxCreateShader]] and [[dxCreateRenderTarget]].
     * Each one of the 3 test modes should be used in turn to help highlight any potential problems.
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetTestMode|MTASA Wiki}
     * @return Returns ''true'' if the test mode was successfully set, ''false'' otherwise.
     */
    export function dxSetTestMode(testMode: string): boolean;

    /**
     * This functions allows you to change the edge handling after creating the texture.
     * }}
     * [[File:TextureEdges.jpg|600px]]
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetTextureEdge|MTASA Wiki}
     * @param theTexture The affected texture
     * @param textureEdge The texture edge mode. Available modes are wrap, mirror, clamp, border, mirror-once
     * @return
     */
    export function dxSetTextureEdge(theTexture: texture, textureEdge: string, border?: number): boolean;

    /**
     * This function sets the [[Texture_pixels|pixels]] of a [[texture]] element. It can be used with a standard texture, render target or screen source. Only ''''plain'''' format pixels please.
     * * This function is slow and not something you want to be doing once a frame.
     * * It is very slow when setting pixels to a render target or screen source.
     * * And is very slow indeed if the texture format is not '''"argb"'''.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/dxSetTexturePixels|MTASA Wiki}
     * @param surfaceIndex Desired slice to set if the texture is a volume texture, or desired face to set if the texture is a cube map. <nowiki>(Cube map faces: 0=+X 1=-X 2=+Y 3=-Y 4=+Z 5=-Z)</nowiki>  By default the pixels are set starting at the top left corner of the texture. To set a different region, define a rectangular area using all four of these optional arguments:
     * @default 0
     * @param x Rectangle left position
     * @default 0
     * @param y Rectangle top position
     * @default 0
     * @param width Rectangle width
     * @default 0
     * @return Returns a string if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function dxSetTexturePixels(surfaceIndex: number, texture: element, pixels: string, x?: number, y?: number, width?: number, height?: number): boolean;

    /**
     * This function updates the contents of a screen source [[texture]] with the screen output from GTA
     * @see {@link https://wiki.multitheftauto.com/wiki/dxUpdateScreenSource|MTASA Wiki}
     * @param screenSource The screen source element whose pixels we want to fill with the screen capture
     * @param resampleNow A bool to indicate if the screen should be captured immediately. The default is false which means the screen from the end of the previous frame is used (better for performance and consistency). Use true for layering fullscreen effects.
     * @default false
     * @return Returns ''true'' if the screen was successfully captured, ''false'' otherwise.
     */
    export function dxUpdateScreenSource(screenSource: element, resampleNow?: boolean): boolean;

    /**
     * Creates an [[Element/Effect|effect]] on specified position.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/createEffect|MTASA Wiki}
     * @param name A string contains Element/Effect#Effects_list|effect name.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param rX A floating point number representing the rotation about the X axis in degrees.
     * @param rY A floating point number representing the rotation about the Y axis in degrees.
     * @param rZ A floating point number representing the rotation about the Z axis in degrees.
     * @param drawDistance A floating point number between 1 and 8191 which represents the draw distance of the effect, or 0 to use the default draw distance.  {{New feature/item|3.0155|1.5.5||
     * @default 0
     * @param soundEnable to enable the sound of the effect.  }}
     * @default false
     * @return
     */
    export function createEffect(name: string, x: number, y: number, z: number, rX?: number, rY?: number, rZ?: number, drawDistance?: number, soundEnable?: boolean): effect;

    /**
     * [[Image:Fxblood.png|thumb|200px|Blood splatter]]
     * Creates a blood splatter particle effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddBlood|MTASA Wiki}
     * @param count the number of flying droplets to create.
     * @default 1
     * @param brightness the brightness. Ranges from 0 (almost black) to 1 (normal color).
     * @default 1.0
     * @return
     */
    export function fxAddBlood(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, count?: number, brightness?: number): boolean;

    /**
     * [[Image:Fxbulletimpact.png|thumb|200px|Bullet impact]]
     * Creates a bullet impact particle effect, consisting of a small smoke cloud and a number of sparks.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddBulletImpact|MTASA Wiki}
     * @param smokeSize the size of the smoke cloud.
     * @default 1
     * @param sparkCount the number of sparks to create.
     * @default 1
     * @param smokeIntensity the amount/transparency of smoke, ranges from 0 to 1.
     * @default 1.0
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddBulletImpact(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, smokeSize?: number, sparkCount?: number, smokeIntensity?: number): boolean;

    /**
     * [[Image:Fxbulletsplash.png|thumb|200px|Bullet splash]]
     * This function creates a bullet splash particle effect, normally created when shooting into water.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddBulletSplash|MTASA Wiki}
     * @param posX A float representing the x position of the splash
     * @param posY A float representing the y position of the splash
     * @param posZ A float representing the z position of the splash
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddBulletSplash(posX: number, posY: number, posZ: number): boolean;

    /**
     * [[Image:Fxdebris.png|thumb|200px|Debris]]
     * Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddDebris|MTASA Wiki}
     * @param scale the size of the chunks.
     * @default 1.0
     * @param count the number of chunks to create.
     * @default 1
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddDebris(posX: number, posY: number, posZ: number, colorR?: number, colorG?: number, colorB?: number, colorA?: number, scale?: number, count?: number): boolean;

    /**
     * [[Image:Fxfootsplash.png|thumb|200px|Foot splash]]
     * This function creates a foot splash particle effect, normally created when walking into water.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddFootSplash|MTASA Wiki}
     * @param posX A float representing the x position of the splash
     * @param posY A float representing the y position of the splash
     * @param posZ A float representing the z position of the splash
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddFootSplash(posX: number, posY: number, posZ: number): boolean;

    /**
     * [[Image:Fxglass.png|thumb|200px|Glass]]
     * This function creates a glass particle effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddGlass|MTASA Wiki}
     * @param posX A float representing the x position of the glass
     * @param posY A float representing the y position of the glass
     * @param posZ A float representing the z position of the glass  {{OptionalArg}}
     * @param scale A float representing the size of the particle effect, where 1 is the standard size.
     * @default 1.0
     * @param count The density of the particle effect.
     * @default 1
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddGlass(posX: number, posY: number, posZ: number, colorR?: number, colorG?: number, colorB?: number, colorA?: number, scale?: number, count?: number): boolean;

    /**
     * [[Image:Fxgunshot.png|thumb|200px|Gunshot]]
     * This function creates a gunshot particle effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddGunshot|MTASA Wiki}
     * @param includeSparks A bool representing whether the particle effect will generate sparks.
     * @default true
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddGunshot(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, includeSparks?: boolean): boolean;

    /**
     * [[Image:Fxpunchimpact.png|thumb|200px|Punch impact]]
     * Creates a punch impact particle effect (a small dust cloud).
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddPunchImpact|MTASA Wiki}
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddPunchImpact(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

    /**
     * [[Image:Fxsparks.png|thumb|200px|Sparks]]
     * Creates a number of sparks originating from a point or along a line.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddSparks|MTASA Wiki}
     * @param force speed factor: the higher this value, the faster and further the sparks fly.
     * @default 1.0
     * @param count the number of effects to create.
     * @default 1
     * @param blur if false, creates standard bullet impact-like sparks. If true, adds motion blur to the sparks.
     * @default false
     * @param spread determines how strongly the particles deviate from each other. With low values the particles will stay quite close together, high values will make them fly in all directions. Also affects their speed.
     * @default 1.0
     * @param life the higher this value, the longer the sparks survive before they disappear.
     * @default 1.0
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddSparks(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, force?: number, count?: number, acrossLineX?: number, acrossLineY?: number, acrossLineZ?: number, blur?: boolean, spread?: number, life?: number): boolean;

    /**
     * [[Image:Fxtankfire.png|thumb|200px|Tank fire]]
     * This function creates a tank firing particle effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddTankFire|MTASA Wiki}
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddTankFire(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

    /**
     * [[Image:Fxtyreburst.png|thumb|200px|Tyre burst]]
     * Creates a tyre burst particle effect (a small white smoke puff).
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddTyreBurst|MTASA Wiki}
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddTyreBurst(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

    /**
     * [[Image:Fxwaterhydrant.png|thumb|200px|Water hydrant]]
     * This function creates a water hydrant particle effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddWaterHydrant|MTASA Wiki}
     * @param posX A float representing the x position of the hydrant
     * @param posY A float representing the y position of the hydrant
     * @param posZ A float representing the z position of the hydrant
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddWaterHydrant(posX: number, posY: number, posZ: number): boolean;

    /**
     * [[Image:Fxwatersplash.png|thumb|200px|Water splash]]
     * This function creates a water splash particle effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddWaterSplash|MTASA Wiki}
     * @param posX A float representing the x position of the splash
     * @param posY A float representing the y position of the splash
     * @param posZ A float representing the z position of the splash
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddWaterSplash(posX: number, posY: number, posZ: number): boolean;

    /**
     * [[Image:Fxwood.png|thumb|200px|Wood]]
     * Creates a wood splinter particle effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/fxAddWood|MTASA Wiki}
     * @param count the number of splinters to create.
     * @default 1
     * @param brightness the brightness. Ranges from 0 (black) to 1 (normal color).
     * @default 1.0
     * @return Returns a true if the operation was successful, false otherwise.
     */
    export function fxAddWood(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, count?: number, brightness?: number): boolean;

    /**
     * This function gets the density of certain [[effect]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getEffectDensity|MTASA Wiki}
     * @param theEffect The effect to get density of.
     * @return
     */
    export function getEffectDensity(theEffect: effect): number;

    /**
     * This function gets the speed of a specified [[effect]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getEffectSpeed|MTASA Wiki}
     * @param theEffect The effect to get the speed of.
     * @return Returns [[float]] containing the effect's speed, ''false'' if invalid arguments were specified.
     */
    export function getEffectSpeed(theEffect: effect): number;

    /**
     * This function sets the density of a specified [[effect]].
     * }}
     * The limit is 1 for Low, 1.5 for Medium, and 2 for High/Very high.|true}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setEffectDensity|MTASA Wiki}
     * @param theEffect The effect to change the speed of.
     * @param density The level of density (from 0 to 2).
     * @return Returns ''true'' if the density was succesfully changed, ''false'' otherwise.
     */
    export function setEffectDensity(theEffect: effect, density: number): boolean;

    /**
     * This function sets the speed of a specified [[effect]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setEffectSpeed|MTASA Wiki}
     * @param theEffect The effect to change the speed of.
     * @param speed The speed to set.
     * @return Returns ''true'' if the effect speed was succesfuly changed, ''false'' otherwise.
     */
    export function setEffectSpeed(theEffect: effect, speed: number): boolean;

    /**
     * * [[Element/Player|Player]]
     * * [[Element/Ped|Ped]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementBoneMatrix|MTASA Wiki}
     * @param theElement the element to get the bone matrix on.
     * @param bone the ID of the bone to get the matrix of. See Bone IDs
     * @return Returns a multi-dimensional array (which can be transformed into a proper [[matrix]] class using ''Matrix.create'' method) containing a 4x4 matrix. Returns ''false'' if invalid arguments were passed.
     */
    export function getElementBoneMatrix(theElement: element, bone: number): table;

    /**
     * * [[Element/Player|Player]]
     * * [[Element/Ped|Ped]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementBonePosition|MTASA Wiki}
     * @param theElement the element to get the bone position on.
     * @param bone the ID of the bone to get the position of. See Bone IDs
     * @return Returns the x, y, z world position of the bone.
     */
    export function getElementBonePosition(theElement: element, bone: number): LuaMultiReturn<[number, number, number]>;

    /**
     * * [[Element/Player|Player]]
     * * [[Element/Ped|Ped]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementBoneRotation|MTASA Wiki}
     * @param theElement the element to get the bone rotation on.
     * @param bone the ID of the bone to get the rotation of. See Bone IDs
     * @return Returns the yaw, pitch, roll rotation values.
     */
    export function getElementBoneRotation(theElement: element, bone: number): LuaMultiReturn<[number, number, number]>;

    /**
     * This function returns the minimum and maximum coordinates of an element's bounding box.
     * It should be noted that the values returned are relative to the position of the element, and as such if you wish to get world coordinates for drawing, etc., you should retrieve the position of the element and add the returned values onto that.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementBoundingBox|MTASA Wiki}
     * @return *Returns ''min x, min y, min z, max x, max y, max z'' if the passed element is valid and streamed in, ''false'' otherwise.
     */
    export function getElementBoundingBox(theElement: element): LuaMultiReturn<[number, number, number, number, number, number]>;

    /**
     * This function is used to retrieve the distance between a [[element]]'s centre of mass to the base of the model. This can be used to calculate the position the [[element]] has to be set to, to have it on ground level.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementDistanceFromCentreOfMassToBaseOfModel|MTASA Wiki}
     * @return Returns a ''float'' with the distance, or ''false'' if the element is invalid.
     */
    export function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: element): number;

    /**
     * This function gets the radius of an [[element]]. Normally, sphere or circle-shaped elements tend to return a more accurate and expected radius than others with another shapes.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementRadius|MTASA Wiki}
     * @param theElement The element to get the radius of. It can be any entity type, such as:
     * @return Returns a ''float'' containing the radius if the element is valid, ''false'' otherwise.
     */
    export function getElementRadius(theElement: element): number;

    /**
     * This functions checks if certain element has call propagation enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementCallPropagationEnabled|MTASA Wiki}
     * @param theElement The element to check
     * @return Returns ''true'' if the propagation is enabled, ''false'' if disabled or invalid arguments have been passed.
     */
    export function isElementCallPropagationEnabled(theElement: element): boolean;

    /**
     * This function can be used to check whether specified element is collidable with another element.<br>
     * '''Note:''' You can only use this function with the element types listed below.
     * *[[Player]]
     * *[[Ped]]
     * *[[Vehicle]]
     * *[[Object]]
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementCollidableWith|MTASA Wiki}
     * @param theElement The element which colliding you want to get
     * @param withElement The other element which colliding with the first entity you want to get
     * @return Returns ''true'' if the elements collide with eachother, ''false'' otherwise.
     */
    export function isElementCollidableWith(theElement: element, withElement: element): boolean;

    /**
     * This function checks whether a clientside [[element]] is local to the client (doesn't exist in the server) or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementLocal|MTASA Wiki}
     * @param theElement : The element that we want to check.
     * @return Returns ''true'' if the passed element is local, ''false'' if not or if invalid parameters are passed.
     */
    export function isElementLocal(theElement: element): boolean;

    /**
     * This function will check if an element is on the screen. Elements behind objects but still in the camera view count as being on screen.
     * This function is particularly useful for detecting if dynamic objects are in "destroyed" state. Destroyed objects will return false.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementOnScreen|MTASA Wiki}
     * @param theElement The element of which you wish to check wether its being rendered on screen.
     * @return Returns ''true'' if element is on screen, ''false'' if not.
     */
    export function isElementOnScreen(theElement: element): boolean;

    /**
     * This function checks whether an [[element]] is streamable as set by [[setElementStreamable]] or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementStreamable|MTASA Wiki}
     * @param theElement : The element to check the streamability of.
     * @return Returns ''true'' if the passed element is streamable like normal, ''false'' if this element must always be streamed in.
     */
    export function isElementStreamable(theElement: element): boolean;

    /**
     * This function checks whether an [[element]] is currently streamed in (not virtualized) and are actual GTA objects in the world. You can force an element to be streamed in using [[setElementStreamable]].<br>
     * DP2 can return true even if this element is not fully streamed in. This can happen during the period when the vehicle/object model is loading while the element is not actually fully created yet.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementStreamedIn|MTASA Wiki}
     * @param theElement : The element to check whether is streamed in or not.
     * @return Returns ''true'' if the passed element is currently streamed in, ''false'' if it is virtualized.
     */
    export function isElementStreamedIn(theElement: element): boolean;

    /**
     * This function checks whether an [[element]] is synced by the local player or not. Accepted elements are [[ped|peds]] and [[vehicle|vehicles]].
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementSyncer|MTASA Wiki}
     * @param theElement : The element to check.
     * @return Returns ''true'' if the passed element is synced by the local player, ''false'' otherwise.
     */
    export function isElementSyncer(theElement: element): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementWaitingForGroundToLoad|MTASA Wiki}
     * @param theElement the element to check its frozen waiting for custom map objects to load status. It can be a vehicle, ped or player.
     * @return Returns ''true'' if the specified [[element]] is frozen waiting for collisions of custom map objects to load. Returns ''false'' if it's not or if the specified [[element]] is invalid.
     */
    export function isElementWaitingForGroundToLoad(theElement: element): boolean;

    /**
     * * [[Element/Player|Player]]
     * * [[Element/Ped|Ped]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementBoneMatrix|MTASA Wiki}
     * @param theElement the element to set the bone matrix on.
     * @param bone the ID of the bone. See Bone IDs
     * @param matrix the MTA matrix to set.
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setElementBoneMatrix(theElement: element, bone: number, matrix: Matrix): boolean;

    /**
     * * [[Element/Player|Player]]
     * * [[Element/Ped|Ped]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementBonePosition|MTASA Wiki}
     * @param theElement the element to set the bone position on.
     * @param bone the ID of the bone to set the position of. See Bone IDs
     * @param x The x coordinate of the destination.
     * @param y The y coordinate of the destination.
     * @param z The z coordinate of the destination.
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setElementBonePosition(theElement: element, bone: number, x: number, y: number, z: number): boolean;

    /**
     * * [[Element/Player|Player]]
     * * [[Element/Ped|Ped]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementBoneRotation|MTASA Wiki}
     * @param theElement the element to set the bone rotation on.
     * @param bone the ID of the bone to set the rotation of. See Bone IDs
     * @param yaw the yaw rotation value.
     * @param pitch the pitch rotation value.
     * @param roll the roll rotation value.
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     * * '''Note:''' [[updateElementRpHAnim]] must be called after this function to apply bone rotation.
     */
    export function setElementBoneRotation(theElement: element, bone: number, yaw: number, pitch: number, roll: number): boolean;

    /**
     * This function enables/disables call propagation on a certain element. Look at the example for a practical application.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementCallPropagationEnabled|MTASA Wiki}
     * @param theElement The element whose propagation behaviour youd like to change
     * @param enabled Whether propagation should be enabled or not
     * @return Returns ''true'', if the propagation behaviour has been changed successfully, ''false'' otherwise.
     */
    export function setElementCallPropagationEnabled(theElement: element, enabled: boolean): boolean;

    /**
     * This function can be used to set an element to collide with another element. An element with collisions disabled does not interact physically with the other element.<br>
     * '''Note:''' You can only use this function with the element types listed below.
     * *[[Player]]
     * *[[Ped]]
     * *[[Vehicle]]
     * *[[Object]]
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementCollidableWith|MTASA Wiki}
     * @param theElement The element which colliding you want to change
     * @param withElement The other element you wish the first entity to collide with
     * @param enabled A boolean to indicate whether elements should be able to collide with eachother (true) or not (false)
     * @return Returns ''true'' if the collisions were set succesfully, ''false'' otherwise.
     */
    export function setElementCollidableWith(theElement: element, withElement: element, enabled: boolean): boolean;

    /**
     * This function can be used to disable streaming for an element. This will make sure the element is not virtualized (streamed out from GTA) when the player moves far away from it. This function only works in elements with a physical representation in the world (entities), such as [[player|players]], [[ped|peds]], [[vehicle|vehicles]] and [[object|objects]].
     * * There is a limit of elements that can be streamed in safely for every GTA entity type. If you bypass said limit by using this function, the client can experience problems of disappearing objects and unstability when trying to stream in new elements of that type.
     * * In general, if you disable too many elements (of the same type or not) to stream out, GTA will always try to render them, so it can cause a noticeable FPS drop.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementStreamable|MTASA Wiki}
     * @param theElement The element you wish to set the streaming of
     * @param streamable true if this element should stream in/out like normal, false if it should always be streamed in.
     * @return Returns whether the element could be set to be streamable.
     */
    export function setElementStreamable(theElement: element, streamable: boolean): boolean;

    /**
     * * [[Element/Player|Player]]
     * * [[Element/Ped|Ped]]
     * This function must be called after [[setElementBoneRotation]] for changes to take effect. It should only be called once per frame, after you are done rotating bones on that element, as it is quite heavy.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/updateElementRpHAnim|MTASA Wiki}
     * @param theElement the element to update.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function updateElementRpHAnim(theElement: element): boolean;

    /**
     * This function applies a [[shader]] to one or more world textures.
     * * The resource [[Shader_examples#Texture_names|shader_tex_names]] can help in finding the names of world textures.
     * * When replacing the texture for a ped using the CJ skin, set '''textureName''' to "CJ"
     * * The shader inherits the render states of the original when it is drawn, so texture stage 0 will already be set to the original texture.
     * * When using with a 'ped', ensure you have set 'ped' or 'all' in the elementTypes when calling [[dxCreateShader]]
     * * CJ body parts textures can be replaced by using: "cj_ped_head", "cj_ped_hat", "cj_ped_torso", "cj_ped_legs", "cj_ped_feet", "cj_ped_glasses", "cj_ped_necklace", "cj_ped_watch" and "cj_ped_extra1". Latest version of [http://wiki.multitheftauto.com/wiki/Shader_examples#Texture_names shader_tex_names] will show what is being used.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineApplyShaderToWorldTexture|MTASA Wiki}
     * @param shader The shader which is to be applied
     * @param textureName The name of the world texture to apply the shader to. Wildcard matching e.g. ro?ds* can be used to apply to more than one texture at a time.  {{New feature/item|3.0130|1.3.0|4140|
     * @param targetElement The element to restrict applying the shader to. If this is not set the shader will be applied to everything using the texture name. Valid element types for targetElement are vehicle|vehicles, Object|objects and Ped|peds.  }}
     * @default nil
     * @param appendLayers allows two or more layered shaders to be applied in the same texture. You may want to modify the DepthBias in the technique pass to avoid Z-fighting artifacts when using this.
     * @default true
     * @return Returns ''true'' if the shader was successfully applied, ''false'' otherwise.
     */
    export function engineApplyShaderToWorldTexture(shader: element, textureName: string, targetElement?: element, appendLayers?: boolean): boolean;

    /**
     * This function gets the model ID of an object model from object name. This function is the counterpart of [[engineGetModelNameFromID]].
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelIDFromName|MTASA Wiki}
     * @param modelName The model name of the object
     * @return Returns an ''int'' with the ID of the object model, false otherwise.
     */
    export function engineGetModelIDFromName(modelName: string): number;

    /**
     * This function gets the LOD distance for any object / model ID.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelLODDistance|MTASA Wiki}
     * @param model The model / object ID number you want to get the LOD distance of.
     * @return Returns a float representing the LOD distance of the model, or ''false'' if the model argument is incorrect.
     */
    export function engineGetModelLODDistance(model: number): number;

    /**
     * This function gets the model name of an object model from model ID. This function is the counterpart of [[engineGetModelIDFromName]].
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelNameFromID|MTASA Wiki}
     * @param modelID The model ID of the object
     * @return Returns a ''string'' with the name of the object model, false otherwise.
     */
    export function engineGetModelNameFromID(modelID: number): string;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelPhysicalPropertiesGroup|MTASA Wiki}
     * @param modelID : the id of model which you wish to get physical properties group of.
     * @return Returns '''id''' of physical properties group that requested model uses, in range of ''0-160'', if the object doesn't have a group assigned, ''-1'' is returned. If passed arguments were wrong, error is triggered.
     */
    export function engineGetModelPhysicalPropertiesGroup(modelID: number): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreModelPhysicalPropertiesGroup|MTASA Wiki}
     * @param modelID : the id of model which you wish to restore original physical properties group of.
     * @return Returns '''true''' if there were no issues, if passed arguments were invalid an error is raised.
     */
    export function engineRestoreModelPhysicalPropertiesGroup(modelID: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineSetModelPhysicalPropertiesGroup|MTASA Wiki}
     * @param modelID : the id of model which you wish to set physical properties group of.
     * @param groupID : the id of new physical properties group to be used by given model.
     * @return Returns '''true''' if there were no issues with group change, otherwise an error is raised
     */
    export function engineSetModelPhysicalPropertiesGroup(modelID: number, groupID: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetObjectGroupPhysicalProperty|MTASA Wiki}
     * @param groupID : the id of physical properties group which you wish to get a property from.
     * @return Returns the value contained in given property if everything went well, error is raised otherwise.
     */
    export function engineGetObjectGroupPhysicalProperty(groupID: number, modifiable: objectgroup): any;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreObjectGroupPhysicalProperties|MTASA Wiki}
     * @param groupID : the id of physical properties group which you wish to restore a property of.
     * @return Returns '''true''' if everything went well, error is raised otherwise.
     */
    export function engineRestoreObjectGroupPhysicalProperties(groupID: number, modifiable: objectgroup): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineSetObjectGroupPhysicalProperty|MTASA Wiki}
     * @param groupID : the id of physical properties group which you wish to set a property of.
     * @param newValue : new value of the property, with proper type as specified in table below
     * @return Returns '''true''' if everything went well, error is raised otherwise.
     */
    export function engineSetObjectGroupPhysicalProperty(groupID: number, modifiable: objectgroup, newValue: any): boolean;

    /**
     * *before release 1.5.8-20716 this must be "ped".
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRequestModel|MTASA Wiki}
     * @param elementType : ped, vehicle and object.
     * @param parentID : The Vehicle IDs|vehicle ID of the vehicle being allocated. (By default this is: 1337 - objects, 400 - vehicles, 7 or PSYCHO for peds)
     * @return {{New feature/item|3.0158|1.5.7|20147| Returns an ''integer'' of the model ID that was available to be assigned to the element type, ''false'' if no free model ID available or invalid element type.}}
     * * Do not rely on the model numbers returned being consistent across multiple clients or multiple runs of resources. There is no guarantee for the order of the numbers or that the same numbers will always correspond to the same element type. Any patterns are coincidental
     */
    export function engineRequestModel(elementType: string, parentID?: number): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineFreeModel|MTASA Wiki}
     * @param modelID : the model ID you want to have un-assigned.
     * @return Returns ''true'' if the model was successfully freed, ''false'' otherwise.
     */
    export function engineFreeModel(modelID: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelTextures|MTASA Wiki}
     * @return Returns a table of texture elements [textureName, texture], '''false''' otherwise.
     */
    export function engineGetModelTextures(int: string, table?: string): table;

    /**
     * This function returns a table of the world textures which are applied to the specified model.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelTextureNames|MTASA Wiki}
     * @return Returns a table if this function succeeds, false if it fails for some reason.
     */
    export function engineGetModelTextureNames(modelId: string): table;

    /**
     * This function returns a list of the world textures which are being used to draw the current scene.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetVisibleTextureNames|MTASA Wiki}
     * @param nameFilter Only include textures that match the wildcard string.
     * @default "*"
     * @return Returns a table of texture names.
     */
    export function engineGetVisibleTextureNames(nameFilter: string, modelId: string): table;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetModelVisibleTime|MTASA Wiki}
     * @param modelID : ID of the model
     * @return Returns '''timeOn''', '''timeOff'''
     */
    export function engineGetModelVisibleTime(modelID: number): LuaMultiReturn<[number, number]>;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineSetModelVisibleTime|MTASA Wiki}
     * @param modelID : ID of the model
     * @param timeOn : value between 23 and 0 that states when the model should appear
     * @param timeOff : value between 23 and 0 that states when the model should disappear
     * @return Returns '''true''' if the change was successful, '''false''' otherwise.
     */
    export function engineSetModelVisibleTime(modelID: number, timeOn: number, timeOff: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRestreamWorld|MTASA Wiki}
     * @return Returns ''true'' if the world was restreamed successfully, ''false'' otherwise.
     */
    export function engineRestreamWorld(): boolean;

    /**
     * This function imports (adds) a loaded RenderWare Texture Dictionary into a specific model. This is necessary in order for the DFF loader to find any new textures. Please '''call this function before loading the DFF model file''', in order to allow the DFF loading process to find the new textures. This function can also replace default GTA textures, so that it becomes possible to e.g. put custom images on existing billboards. Ped and weapon textures are also supported.
     * See here for [[Optimize_Custom_TXD|tips on reducing the size of TXD files]].
     * * CJ clothing component textures can be replaced by using the ids listed on [[Clothing Component IDs|this page]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineImportTXD|MTASA Wiki}
     * @param texture The TXD that was loaded with engineLoadTXD
     * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
     */
    export function engineImportTXD(texture: txd, model: number): boolean;

    /**
     * This function loads a RenderWare Collision (COL 1/2/3) file into GTA. The collisions can then be used to provide collisions for in-game objects.
     * For vehicles, please omit this function by embedding your [[COL]] file into your [[DFF]] file. This way, you can be sure that the COL file is correctly (and automatically) loaded when calling [[engineLoadDFF]].
     * This is a client side function. Be sure to transfer your COL file by including it in the meta file.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadCOL|MTASA Wiki}
     * @return Returns a [[COL]] if the file was loaded, ''false'' otherwise.
     */
    export function engineLoadCOL(col: string): col;

    /**
     * This function loads a RenderWare Model (DFF) file into GTA.
     * To successfully load your model with textures, be sure to use [[engineLoadTXD]] and [[engineImportTXD]] before calling this function. If some error occurs while loading the DFF, MTA will output a message - check out [[DFF error messages]] to know what they mean.
     * This is a client side function. Be sure to transfer your DFF file by including it in the meta file.
     * The returned [[DFF]] element is an element in the element tree, just like vehicles and objects. When the dff is destroyed, ie on resource unload or using [[destroyElement]], any elements that use the DFF, such as vehicles or objects will be reset.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadDFF|MTASA Wiki}
     * @return Returns a [[DFF]] element if the dff file loaded, ''false'' otherwise.
     */
    export function engineLoadDFF(dff: string): dff;

    /**
     * This function loads an animation library (IFP) file into GTA with a custom block name. All three IFP formats are supported ANPK, ANP2, and ANP3. Unfortunately, GTA 3 animations are not supported, however, you can load GTA:VC IFP files using this function. You don't have to replace any animation to play a custom one, to play a custom animation, load the IFP file using this function, then use [[SetPedAnimation|setPedAnimation]].
     * If you wish to replace a GTA internal animation with a custom one, you can use [[EngineReplaceAnimation|engineReplaceAnimation]]. To unload the IFP file, use [[DestroyElement|destroyElement]], restarting or stopping the resource can also unload the IFP file automatically.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadIFP|MTASA Wiki}
     * @return Returns an [[IFP]] element if the IFP file loaded, ''false'' otherwise.
     * * {{Tip|If you want to synchronize animations, you can check [[https://drive.google.com/open?id=1L2NkQYuLS0YdoHECvxVRMdPBbEgaYUfH ifp_demo]] resource}}
     */
    export function engineLoadIFP(ifp: string, custom: string): ifp;

    /**
     * This function loads a RenderWare Texture Dictionary (TXD) file into GTA. The texture dictionary can then be used to provide textures.
     * This is a client side function. Be sure to transfer your TXD file by including it in the meta file.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineLoadTXD|MTASA Wiki}
     * @param filteringEnabled Whether to enable texture filtering.
     * @default true
     * @return Returns a [[TXD]] if the file was loaded, ''false'' otherwise.
     */
    export function engineLoadTXD(txd: string, filteringEnabled?: boolean): txd;

    /**
     * This function removes a [[shader]] from one or more world textures.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRemoveShaderFromWorldTexture|MTASA Wiki}
     * @param shader The shader which is to be removed
     * @param textureName The name of the world texture to remove the shader from. It should be exactly the same string as used with engineApplyShaderToWorldTexture when the shader was initially applied.  {{New feature/item|3.0130|1.3.0|4140|
     * @param targetElement The element to remove the shader from. It should be the same element as used with engineApplyShaderToWorldTexture when the shader was initially applied.  }}
     * @default nil
     * @return Returns ''true'' if the shader was successfully removed, ''false'' otherwise.
     */
    export function engineRemoveShaderFromWorldTexture(shader: element, textureName: string, targetElement?: element): boolean;

    /**
     * This function replaces a specific internal (default) animation with a custom one that has been loaded using [[EngineLoadIFP|engineLoadIFP]] function. This function only affects a specific [[player]] or [[ped]], the [[Animations|internal animation]] is not replaced for everyone, for instance, different players and peds are able to have completely different crouching, walking, and fighting etc., animations running simultaneously at the same time. Also, it's not synchronized, you'll need to execute this function on every client in Lua to synchronize it.
     * Internal animations replaced using this function can still be played with [[SetPedAnimation|setPedAnimation]]. You can restore replaced animations back with [[EngineRestoreAnimation|engineRestoreAnimation]].
     * It should be noted that partial animations are not supported, you can still replace them, but they won't work as intended, for example, "FightA_block" animation from "ped" block is a partial animation, you can't replace it properly, only a few animations are partial, rest of them are not, so it shouldn't be a problem.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineReplaceAnimation|MTASA Wiki}
     * @param thePed the player or ped you want to replace an animation for.
     * @param InternalBlockName the Animations|internal block name.
     * @param InternalAnimName the Animations|internal animation name inside InternalBlockName.
     * @param CustomBlockName the custom block name of the loaded IFP file that you passed to EngineLoadIFP|engineLoadIFP as second parameter.
     * @param CustomAnimName the custom animation name inside the loaded IFP file with CustomBlockName.
     * @return Returns ''true'' on success, ''false'' in case of failure.
     */
    export function engineReplaceAnimation(thePed: ped, InternalBlockName: string, InternalAnimName: string, CustomBlockName: string, CustomAnimName: string): boolean;

    /**
     * This function replaces the collision file of the given model id to the collision file passed. Use [[engineLoadCOL]] to load the collision file first.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineReplaceCOL|MTASA Wiki}
     * @param theCol The collision file to replace with
     * @param modelID The model ID whose collision file you want to replace
     * @return Returns ''true'' if the collision was successfully replaced, ''false'' or ''nil'' if the collision could not be replaced for a reason.
     */
    export function engineReplaceCOL(theCol: col, modelID: number): boolean;

    /**
     * This function replaces the given model ID with the model contained in a DFF file loaded by [[engineLoadDFF]]. This function supports [[vehicle|vehicles]], [[object|objects]], [[ped|peds]] and [[player|players]] but not CJ clothing and body parts.
     * To replace weapon models you must use their object IDs, not weapon IDs. There is a weapon model list available at [[weapons]].
     * * Default GTA map objects behave inconsistently when using this function on them. If you want to replace models in the original GTA map, use one of the [[EngineReplaceModel notes|methods shown here]].}}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineReplaceModel|MTASA Wiki}
     * @param theModel The model to replace the given model ID with
     * @param modelID The model it to replace the model of
     * @param alphaTransparency Set to true if model uses semi-transparent textures, e.g. windows. This will ensure other objects behind the semi-transparent textures are rendered correctly. (Can slightly impact performance, so only set when required)
     * @default false
     * @return Returns ''true'' if the model was successfully replaced, ''false'' if it failed for some reason, ie. the DFF or the model ID is not valid.
     */
    export function engineReplaceModel(theModel: dff, modelID: number, alphaTransparency?: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineResetModelLODDistance|MTASA Wiki}
     * @param model The model / object ID number you want to reset the LOD distance of.
     * @return Returns ''true'' if the LOD distance was reset to default, or ''false'' if the model argument is incorrect, or the LOD distance hasn't been changed.
     */
    export function engineResetModelLODDistance(model: number): boolean;

    /**
     * This function restores internal (default) animations that were replaced using [[EngineReplaceAnimation|engineReplaceAnimation]] function. This function only affects a specific [[player]] or [[ped]] just like [[EngineReplaceAnimation|engineReplaceAnimation]].
     * If only 1st parameter ([[Ped|ped]]) is provided to this function, all replaced animations are restored.
     * If block name is also provided for 2nd parameter, then replaced animations within that block are restored.
     * If 3rd parameter (animation name) is provided, then only that specific animation within that specific block is restored.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreAnimation|MTASA Wiki}
     * @param thePed the player or ped you want to restore an animation(s) for.  {{OptionalArg}}
     * @param InternalBlockName the Animations|internal block name.
     * @param InternalAnimName the Animations|internal animation name inside InternalBlockName.
     * @return Returns ''true'' on success, ''false'' in case of failure.
     */
    export function engineRestoreAnimation(thePed: ped, InternalBlockName?: string, InternalAnimName?: string): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function restores the original collision model of the given model ID. Reverses the effect of [[engineReplaceCOL]].
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreCOL|MTASA Wiki}
     * @param modelID The ID of the model to restore the model of
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if this function succeeds, ''false'' or ''nil'' if it fails for some reason.
     */
    export function engineRestoreCOL(modelID: number): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function restores the visual DFF model of the given model ID. This restores the result of [[engineReplaceModel]].
     * @see {@link https://wiki.multitheftauto.com/wiki/engineRestoreModel|MTASA Wiki}
     * @param modelID The model ID to restore the visuals of
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the model was successfully restored, ''false'' or ''nil'' if it failed for some reason.
     */
    export function engineRestoreModel(modelID: number): boolean;

    /**
     * This function enables or disables asynchronous model loading. Enabling asynchronous model loading may reduce the small pauses that occur when a new model is displayed for the first time. However, it can cause the new models to appear slightly later than they might have otherwise.
     * @see {@link https://wiki.multitheftauto.com/wiki/engineSetAsynchronousLoading|MTASA Wiki}
     * @param enable Set to true/false to enable/disable asynchronous loading. Only works if the clients preferences has Asynchronous Loading set to Auto.
     * @param force If set to true, ignores the clients preferences.
     * @return Returns ''true'' if the function executed successfully, ''false'' otherwise.
     */
    export function engineSetAsynchronousLoading(enable: boolean, force: boolean): boolean;

    /**
     * This function sets a custom LOD distance for any object / model ID. This is the distance at which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become invisible.
     * '''Notes:'''
     * The actual draw distance used is modified by the draw distance slider in the settings 'Video' tab of the MTA client.
     * *When the 'Video' tab draw distance slider is 0%, the engineSetModelLODDistance setting approximately matches the draw distance used.
     * :''e.g. engineSetModelLODDistance(1337,100) will mean model 1337 will be visible up to a distance of '''100''' units.''
     * *When the 'Video' tab draw distance slider is 100%, the engineSetModelLODDistance setting is approximately doubled before use.
     * :''e.g. engineSetModelLODDistance(1337,100) will mean model 1337 will be visible up to a distance of '''200''' units.''
     * However, there is a general draw distance limit of 300 units. So engineSetModelLODDistance(1337,400) will mean model 1337 will be visible up to a distance of 300 units no matter what the 'Video' tab says.
     * Therefore, unless it's really important, engineSetModelLODDistance should not be set to anything greater than 170.<br>
     * 170 will still give the maximum draw distance (of 300 units) on clients that have a 'Video' tab draw distance setting of 100%, and it will help reduce lag for players who chose a lower draw distance in their settings.
     * For low LOD elements, engineSetModelLODDistance still has a limit of 300 units, but the actual draw distance used is 5 times the setting value. Also, low LOD elements ignore the 'Video' tab draw distance slider. So a setting of 200 will mean a low LOD element will always have a draw distance of '''1000''' units.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/engineSetModelLODDistance|MTASA Wiki}
     * @param model The model / object ID number you want to change the LOD distance of.
     * @param distance New LOD distance value in San Andreas units.
     * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
     */
    export function engineSetModelLODDistance(model: number, distance: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineSetSurfaceProperties|MTASA Wiki}
     * @param surfaceID Material IDs|Material ID from 0 to 178
     * @param property Property name
     * @param value New value from table below
     * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
     */
    export function engineSetSurfaceProperties(surfaceID: number, property: string, value: string): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineGetSurfaceProperties|MTASA Wiki}
     * @param surfaceID Material IDs|Material ID from 0 to 178
     * @param property Property name
     * @return Returns the current property value. See the table below for possible values.
     */
    export function engineGetSurfaceProperties(surfaceID: number, property: string): string;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/engineResetSurfaceProperties|MTASA Wiki}
     * @param surfaceID Material IDs|Material ID from 0 to 178
     * @return Returns ''true'' if the function executed succesfully, ''false'' otherwise.
     */
    export function engineResetSurfaceProperties(surfaceID: number): string;

    /**
     * This function is the same as [[triggerServerEvent]] except the transmission rate of the data contained in the arguments can be limited and other network traffic is not blocked while the data is being transferred.
     * @see {@link https://wiki.multitheftauto.com/wiki/triggerLatentServerEvent|MTASA Wiki}
     * @param event The name of the event to trigger server-side. You should register this event with addEvent and add at least one event handler using addEventHandler.
     * @param bandwidth The bytes per second rate to send the data contained in the arguments.
     * @default 5000
     * @param persist A bool indicating whether the transmission should be allowed to continue even after the resource that triggered it has since stopped.
     * @default false
     * @param theElement The element that is the Event system#Event handlers|source of the event. This could be another player, or if this isnt relevant, use the root element.
     * @return Returns ''true'' if the event trigger has been sent, ''false'' if invalid arguments were specified.
     */
    export function triggerLatentServerEvent(event: string, bandwidth: number, persist: boolean, theElement: element, ...args: any[]): boolean;

    /**
     * <!--{{Needs_Checking|Something needs to be said about the steps required to help keep an event inside a resource. i.e. Setting 'theElement' to resourceRoot here, and setting the matching event handler's 'attachedTo' also to resourceRoot.}}-->__NOTOC__
     * This function triggers an event previously registered on the server. This is the primary means of passing information between the client and the server. Servers have a similar [[triggerClientEvent]] function that can do the reverse. You can treat this function as if it was an asynchronous function call, using [[triggerClientEvent]] to pass back any returned information if necessary.
     * Almost any data types can be passed as expected, including [[element]]s and complex nested [[table]]s. Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client. '''Elements of the Vector or Matrix classes cannot be passed!'''
     * Events are sent reliably, so the server will receive them, but there may be (but shouldn't be) a significant delay before they are received. You should take this into account when using them.
     * Keep in mind the bandwidth issues when using events - don't pass a large list of arguments unless you really need to. '''It is marginally more efficient to pass one large event than two smaller ones'''.
     * @see {@link https://wiki.multitheftauto.com/wiki/triggerServerEvent|MTASA Wiki}
     * @param event The name of the event to trigger server-side. You should register this event with addEvent and add at least one event handler using addEventHandler.
     * @param theElement The element that is the Event system#Event handlers|source of the event.  {{Note|To save server CPU, you should avoid setting '''theElement''' to the [[root element]] where possible. Using [[GetThisResource|resourceRoot]] is usually sufficient if the event is handled by the same resource on the server.}}
     * @return Returns ''true'' if the event trigger has been sent, ''false'' if invalid arguments were specified or a client side element was a parameter.
     */
    export function triggerServerEvent(event: string, theElement: element, ...args: any[]): boolean;

    /**
     * [[Image:Fire.png|thumb|200px|Fire with default size (1.8)]]
     * Creates a patch of fire that will spread a bit and die out after a while. Because it's a client side only function, other players won't see it, so custom events or custom objects will be needed to make a fire visible to some players.
     * @see {@link https://wiki.multitheftauto.com/wiki/createFire|MTASA Wiki}
     * @param size a float value indicating the size of the initial patch of fire. It will also make the fire to stay alive more or less time.
     * @default 1.8
     * @return Returns ''true'' if successful, ''false'' if bad arguments were passed or the limit of active fires was reached. There can be a maximum of 60 active fires.
     */
    export function createFire(x: number, y: number, z: number, size?: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/extinguishFire|MTASA Wiki}
     * @param radius a float value indicating the radius in which to extinguish fire.
     * @default 1.0
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function extinguishFire(x: number, y: number, z: number, radius?: number): boolean;

    /**
     * This function brings a GUI element on top of others.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiBringToFront|MTASA Wiki}
     * @param guiElement the GUI element that you want to move to the front.
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function guiBringToFront(guiElement: element): boolean;

    /**
     * Returns information about how the chatbox looks.
     * These values come from the file called: [[Chatboxpresets.xml]] but it depends on what type of preset you currently have, which is chosen from your settings in the 'Interface' tab.
     * @see {@link https://wiki.multitheftauto.com/wiki/getChatboxLayout|MTASA Wiki}
     * @param CVar the name of the property you want returned. Can be the following values:
     * @return *4 numbers if the CVar contains "color"
     * * *2 numbers if '''chat_scale''' was entered
     * * *1 number if any other CVar was specified
     * * *a table of all CVar values, if CVar was not specified
     * * *''false'' if an invalid CVar was specified
     */
    export function getChatboxLayout(CVar: string): boolean | number | table;

    /**
     * This function creates a [[GUI font]] element that can be used in [[guiSetFont]]. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.
     * To see if creation is likely to fail, use [[dxGetStatus]]. (When '''VideoMemoryFreeForMTA''' is zero, failure ''is'' guaranteed.)
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateFont|MTASA Wiki}
     * @param filepath the name of the file containing the font
     * @param size size of the font
     * @default 9
     * @return Returns a [[GUI font]] element if successful, ''false'' if invalid arguments were passed to the function, or there is insufficient resources available.
     * * '''You should always check to see if this function has returned false.'''
     */
    export function guiCreateFont(filepath: string, size?: number): element;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiBlur|MTASA Wiki}
     * @param guiElement the GUI element that you want to defocus
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function guiBlur(guiElement: element): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiFocus|MTASA Wiki}
     * @param guiElement the GUI element that you want to focus
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function guiFocus(guiElement: element): boolean;

    /**
     * Alpha represents the transparency of a gui element.  This function allows retrieval of a gui element's current alpha.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetAlpha|MTASA Wiki}
     * @param guiElement The gui element in which you want to retrieve the alpha of.
     * @return This function returns a positive integer in between 0 and 1 of the gui element's current alpha, or false if it could not be retrieved.
     */
    export function guiGetAlpha(guiElement: element): number;

    /**
     * This function is used to get the type of the current cursor image.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetCursorType|MTASA Wiki}
     * @return Returns a string containing the cursor type:
     * * * '''"none"'''            // cursor has no image
     * * * '''"arrow"'''           // default cursor
     * * * '''"sizing_ns"'''       // N-S (up-down) sizing cursor
     * * * '''"sizing_ew"'''       // E-W (left-right) sizing cursor
     * * * '''"sizing_nwse"'''     // NW-SE diagonal sizing cursor
     * * * '''"sizing_nesw"'''     // NE-SW diagonal sizing cursor
     * * * '''"sizing_eswe"'''     // ES-WE horizontal sizing cursor
     * * * '''"move"'''            // move cursor
     * * * '''"container_drag"'''  // drag container cursor (note: not in use)
     * * * '''"segment_moving"'''  // segment moving cursor (note: not in use)
     * * * '''"segment_sizing"'''  // segment sizing cursor (note: not in use)
     */
    export function guiGetCursorType(): string;

    /**
     * This function determines if a GUI element is enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetEnabled|MTASA Wiki}
     * @param guiElement the GUI element to be checked.
     * @return Returns ''true'' if the element is enabled, ''false'' otherwise.
     */
    export function guiGetEnabled(guiElement: element): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function is used to get the current font that is used to draw text in GUI elements.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetFont|MTASA Wiki}
     * @param guiElement element you wish to get the font of.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * *'''string''' A string containing the name of the element's current font, or false if the gui element passed to the function is invalid.
     * * *'''element ''' The custom [[GUI font]] that is used, or nil otherwise
     */
    export function guiGetFont(guiElement: element): LuaMultiReturn<[string, element]>;

    /**
     * This function checks whether user input is focused on the GUI or the game.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetInputEnabled|MTASA Wiki}
     * @return Returns ''true'' if input is focused on GUI, ''false'' if it's focused on the game.
     */
    export function guiGetInputEnabled(): boolean;

    /**
     * This function returns the current input mode as set by [[guiSetInputMode]].
     * Default mode is ''"allow_binds"''.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetInputMode|MTASA Wiki}
     * @return Returns a string defining the current input mode, potential values are:
     * * * '''"allow_binds":''' binds are enabled, hence using a key such as t in an editbox will still activate the chatbox
     * * * '''"no_binds":''' binds are disabled, hence using a key such as t in an editbox will not activate the chatbox
     * * * '''"no_binds_when_editing":''' binds are always enabled except when an editable editbox or memo has input focus
     */
    export function guiGetInputMode(): string;

    /**
     * This function allows retrieval of a GUI element's current position, relative to its parent.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetPosition|MTASA Wiki}
     * @param guiElement The gui element of which you wish to retrieve the position.
     * @param relative A boolean representing whether the position should be relative to the elements parent width, or the number of offset pixels from the parents origin.
     * @return Returns floats representing the ''x'' and ''y'' position of the element, or false if the position could not be retrieved.
     */
    export function guiGetPosition(guiElement: element, relative: boolean): LuaMultiReturn<[number, number]>;

    /**
     * This function gets a list of the CEGUI property names and values of a GUI element. To find out what the different properties mean, check out the [http://static.cegui.org.uk/static/WindowsLookProperties.html CEGUI properties page].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetProperties|MTASA Wiki}
     * @param guiElement the GUI element you wish to get the properties of.
     * @return If the function succeeds, the return value is a table. Its keys are property names, the corresponding values are the values of the properties (both names and values are always strings). If the function fails, it returns ''false''.
     */
    export function guiGetProperties(guiElement: element): table;

    /**
     * This function gets the value of a specific CEGUI property of a GUI element. For a list of properties and their meaning, see the [http://static.cegui.org.uk/static/WindowsLookProperties.html CEGUI properties page].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetProperty|MTASA Wiki}
     * @param guiElement the GUI element you wish to get a property of.
     * @param property the name of of property you want the value of.
     * @return If the function succeeds, it returns a string with the value of the property. If it fails, it returns ''false''.
     */
    export function guiGetProperty(guiElement: element, property: string): string;

    /**
     * This function retrieves the local screen size according to the resolution they are using.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetScreenSize|MTASA Wiki}
     * @return This returns two floats representing the player's screen resolution, ''width'' and ''height''.
     */
    export function guiGetScreenSize(): LuaMultiReturn<[number, number]>;

    /**
     * This function gets the size of a GUI element.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetSize|MTASA Wiki}
     * @param theElement The GUI element to get size of.
     * @param relative A boolean representing whether the size should be relative to the elements parent width, or an absolute size in pixels.
     * @return Returns the GUI element size ''x'' and ''y'' if the function has been successful, ''false'' otherwise.
     */
    export function guiGetSize(theElement: element, relative: boolean): LuaMultiReturn<[number, number]>;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function is used to get the text of GUI elements like edit boxes, labels, buttons etc.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetText|MTASA Wiki}
     * @param guiElement element you wish to get text of.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns a string containing the requested element's text, or false if the gui element passed to the function is invalid.
     */
    export function guiGetText(guiElement: element): string;

    /**
     * This function determines if a GUI element is visible.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetVisible|MTASA Wiki}
     * @param guiElement the GUI element to be checked
     * @return Returns ''true'' if the element is visible, ''false'' otherwise.
     */
    export function guiGetVisible(guiElement: element): boolean;

    /**
     * This function moves a GUI element to the very back of all other GUI elements.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiMoveToBack|MTASA Wiki}
     * @param guiElement the GUI element that you want to move to the back
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function guiMoveToBack(guiElement: element): boolean;

    /**
     * This changes the alpha level (the visibleness/transparency) of a GUI element
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetAlpha|MTASA Wiki}
     * @param alpha The visibility/transparency of the GUI element. Ranges from 0 (fully transparent) to 1 (fully opaque). Default value is 0.80.
     * @return Returns ''true'' if the gui element's alpha was successfully changed, ''false'' otherwise.
     */
    export function guiSetAlpha(guielement: element, alpha: number): boolean;

    /**
     * This function enables/disables a GUI element. A disabled GUI element can't be used, gets a gray aspect and doesn't receive any events.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetEnabled|MTASA Wiki}
     * @param guiElement the GUI element you wish to enable or disable
     * @param enabled the new state
     * @return If the function succeeds it returns ''true'', if it fails it returns ''false''.
     */
    export function guiSetEnabled(guiElement: element, enabled: boolean): boolean;

    /**
     * This function sets the font of a [[GUI_widgets|GUI element]] to be used when drawing text.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetFont|MTASA Wiki}
     * @param guiElement The GUI element you wish to change the font of
     * @param font Either a custom GUI font element or the name of a built-in GUI font. See Standard GUI Font Names
     * @return Returns ''true'' if the font has been successfully set on the gui element, ''false'' otherwise.
     */
    export function guiSetFont(guiElement: element, font: string): boolean;

    /**
     * This function enables or disables input focus for the GUI.  This means that any keybinds or MTA binds are overidden so that text can be input into an editbox, for example.  In other words, keys such as ''t'' and ''y'' which activate the chatbox are disabled.
     * [[guiSetInputMode]] can be used as an extended version of ''guiSetInputEnabled'' since it provides the same functionality with one added feature.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetInputEnabled|MTASA Wiki}
     * @param enabled true if input should go to GUI, false if it should go to the game.
     * @return Returns ''true'' if input mode could be changed, ''false'' if invalid parameters are passed.
     */
    export function guiSetInputEnabled(enabled: boolean): boolean;

    /**
     * This function controls the input mode to define whether or not (and when) keybinds or MTA binds are overridden (disabled) so that text can be input into an editbox, for example.
     * The binds can be either:
     * * never disabled (hence using a key such as t in an editbox will still activate the chatbox)
     * * always disabled (hence using a key such as t in an editbox will not activate the chatbox)
     * * only disabled when actually editing an editbox or a memo (binds are always enabled except when an editbox or memo has input focus)
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetInputMode|MTASA Wiki}
     * @param mode a string representing the desired input mode. Accepted values are:
     * @return Returns ''true'' if input mode could be changed, ''false'' if invalid parameters are passed.
     */
    export function guiSetInputMode(mode: string): boolean;

    /**
     * This function sets the position of a GUI element.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetPosition|MTASA Wiki}
     * @param theElement The GUI element to change position for
     * @param x Position over the X axis
     * @param y Position over the Y axis
     * @param relative Bool that indicates if the x/y positions are relative to the elements parent element.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the position has been successfully set, ''false'' otherwise.
     */
    export function guiSetPosition(theElement: element, x: number, y: number, relative: boolean): boolean;

    /**
     * This function sets the value of a specific CEGUI property of a GUI element. For a list of properties and their meaning, see the [http://static.cegui.org.uk/static/WindowsLookProperties.html CEGUI properties page].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetProperty|MTASA Wiki}
     * @param guiElement the GUI element you wish to get a property of.
     * @param property the name of of property you want the value of.
     * @param value the new value for the property.
     * @return If the function succeeds it returns ''true'', if it fails it returns ''false''.
     */
    export function guiSetProperty(guiElement: element, property: string, value: string): boolean;

    /**
     * This function sets the dimensions (size) of a GUI element. It refers to the bounding box size for GUI elements. It does not make GUI elements smaller or larger in appearance.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetSize|MTASA Wiki}
     * @param guiElement the GUI element whose visibility is to be changed
     * @param width The desired width setting for the gui element
     * @param height The desired height setting for the gui element
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
     * @return Returns ''true'' if the gui element's size was set successfully, ''false'' otherwise.
     */
    export function guiSetSize(guiElement: element, width: number, height: number, relative: boolean): boolean;

    /**
     * This function sets the text of a GUI element.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetText|MTASA Wiki}
     * @param guiElement The GUI element you wish to change the text of
     * @param text The new text
     * @return Returns ''true'' if text has been successfully set on the gui element, ''false'' otherwise.
     */
    export function guiSetText(guiElement: element, text: string): boolean;

    /**
     * This function changes the visibility state of a GUI element.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetVisible|MTASA Wiki}
     * @param guiElement the GUI element whose visibility is to be changed
     * @param state the new visibility state
     * @return Returns ''true'' if the element's visibility could be changed, ''false'' otherwise.
     */
    export function guiSetVisible(guiElement: element, state: boolean): boolean;

    /**
     * This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isChatBoxInputActive|MTASA Wiki}
     * @return Returns ''true'' if the chatbox is receiving input, ''false'' if not active.
     */
    export function isChatBoxInputActive(): boolean;

    /**
     * This function returns whether the ingame console window is visible or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isConsoleActive|MTASA Wiki}
     * @return Returns ''true'' if the console is visible, ''false'' if not.
     */
    export function isConsoleActive(): boolean;

    /**
     * This function returns whether the ingame debug window is visible or not. This is the debugwindow visible using the "debugscript <level>" command.
     * @see {@link https://wiki.multitheftauto.com/wiki/isDebugViewActive|MTASA Wiki}
     * @return Returns ''true'' if the debug view is visible, ''false'' if not.
     */
    export function isDebugViewActive(): boolean;

    /**
     * This function returns whether the user is in the mainmenu or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isMainMenuActive|MTASA Wiki}
     * @return Returns ''true'' if the mainmenu is visible, ''false'' if not.
     */
    export function isMainMenuActive(): boolean;

    /**
     * This function returns whether any system windows that take focus are active. This includes:
     * * Chatbox input
     * * Console window
     * * Main menu
     * * Transferbox
     * To get the status of the debug view, see [[isDebugViewActive]].
     * @see {@link https://wiki.multitheftauto.com/wiki/isMTAWindowActive|MTASA Wiki}
     * @return Returns ''true'' if the focus is on the MTA window, ''false'' if it isn't.
     */
    export function isMTAWindowActive(): boolean;

    /**
     * This function returns whether the file downloading dialog box is active or not. This appears when a resource is started and the client doesn't have all the files that resource requires the client to have.
     * It's important to note that resources aren't started on the client until they're completely downloaded, so a resource cannot use this function to detect if it's own files are downloaded. A client-side resource triggers the [[onClientResourceStart]] event when the files it requires are downloaded.
     * @see {@link https://wiki.multitheftauto.com/wiki/isTransferBoxActive|MTASA Wiki}
     * @return Returns ''true'' if the file transfer box is visible, ''false'' if not.
     */
    export function isTransferBoxActive(): boolean;

    /**
     * This function enables or disables the debug window.
     * @see {@link https://wiki.multitheftauto.com/wiki/setDebugViewActive|MTASA Wiki}
     * @param enabled true if debug window should be visible, false otherwise.
     * @return Returns ''true'', ''false'' if invalid parameters are passed.
     */
    export function setDebugViewActive(enabled: boolean): boolean;

    /**
     * This function creates a new CEGUI web [[Element/Browser|browser]] element.
     * The difference between this, and createBrowser is that, this handles inputs internally, and it can be attached to GUI windows. So this one is more suitable for custom dx based interfaces.
     * You can learn more about the differences [https://forum.mtasa.com/topic/80422-dx-browser-vs-gui-browser/?do=findComment&comment=737334 here].
     * }}
     * @param x A float of the 2D x position of the browser on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the browser on a players screen. This is affected by the relative argument.
     * @param width The browsers native width. This should be greater than or equal to 1.
     * @param height The browsers native height. This should be greater than or equal to 1.
     * @param isLocal Sets whether the browser can only show local content or content from the internet (see examples over CreateBrowser|here for more information)
     * @param isTransparent true if you want the browser to support transparency, false otherwise
     * @param isRelative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on clients resolution, accessible using guiGetScreenSize.  {{New feature/item|3.0160|1.6||Providing a size of (0,0) will be a hard error.}}
     * @param parent This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns a [[gui-browser]] element if it was created successfully, ''false'' otherwise. Returns also ''false'', if the user disabled remote pages and ''isLocal'' was set to ''false''.
     */
    export function guiCreateBrowser(x: number, y: number, width: number, height: number, isLocal: boolean, isTransparent: boolean, isRelative: boolean, parent?: element): guibrowser;

    /**
     * This function gets the browser element behind a gui-browser (a browser that has been created via [[guiCreateBrowser]]).
     * }}
     * @return Returns the [[Element/Browser|Browser]] element if a correct [[Element/gui-browser|gui-browser]] has been passed, ''false'' otherwise.
     */
    export function guiGetBrowser(browser: gui): browser;

    /**
     * This function allows creation of a GUI Button, which is a clickable item as part of GUI.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateButton|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI button on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI button on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI button. This is affected by the relative argument.
     * @param height A float of the height of the GUI button. This is affected by the relative argument.
     * @param text A string of the text that will be displayed as a label on the button.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x, y, width and height floats must be between 0 and 1, representing sizes relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the gui button is attached to.  If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns an [[element]] of the created [[Element/GUI/Button|button]] if it was successfully created, false otherwise.
     */
    export function guiCreateButton(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent: element): element;

    /**
     * This function gets a checkbox's selection state.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCheckBoxGetSelected|MTASA Wiki}
     * @return Returns ''true'' if the checkbox is selected, ''false'' if it is not.
     */
    export function guiCheckBoxGetSelected(theCheckbox: element): boolean;

    /**
     * This function selects (ticks) or unselects a checkbox.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCheckBoxSetSelected|MTASA Wiki}
     * @param theCheckbox The GUI element in which you wish to change the selection state of
     * @param state The state of the checkbox, where true indicates selected, and false indicates unselected.
     * @return Returns ''true'' if the checkbox's selection state was successfully set, ''false'' otherwise.
     */
    export function guiCheckBoxSetSelected(theCheckbox: element, state: boolean): boolean;

    /**
     * This function creates a [[Element/GUI/Checkbox|checkbox]].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateCheckBox|MTASA Wiki}
     * @param x A float of the 2D x position of the checkbox on a players screen. This is affected by the relative argument.
     * @param y A float of the 2D y position of the checkbox on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the text field next to the checkbox. This is affected by the relative argument.
     * @param height A float of the height of the text field next to the checkbox. This is affected by the relative argument.
     * @param text The text to be displayed next to the checkbox.
     * @param selected A boolean representing whether the checkbox created should be selected by default.
     * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the checkbox is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns [[element]] of the checkbox if it was created succesfully, ''false'' otherwise.
     */
    export function guiCreateCheckBox(x: number, y: number, width: number, height: number, text: string, selected: boolean, relative: boolean, parent: element): element;

    /**
     * This function creates a combobox GUI element, which you can compare to a gridlist with a dropdown feature.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateComboBox|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI combobox on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI combobox on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI combobox. This is affected by the relative argument.
     * @param height A float of the height of the GUI combobox. This is affected by the relative argument. Note: height must be enough to fit the drop down menu, else the drop down wont appear.
     * @param caption A string for what the title of your combobox will be. This will be shown if no item is selected.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the GUI combobox is attached to.  If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns an element of the created combobox if it was successfully created, false otherwise.
     */
    export function guiCreateComboBox(x: number, y: number, width: number, height: number, caption: string, relative: boolean, parent: element): element;

    /**
     * Adds an item to a combobox.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxAddItem|MTASA Wiki}
     * @param comboBox The combobox you want to add a row to
     * @param value The text that the item will contain.
     * @return Returns the item ID if it has been created, ''false'' otherwise.
     */
    export function guiComboBoxAddItem(comboBox: element, value: string): number;

    /**
     * This function removes all the items from a combobox.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxClear|MTASA Wiki}
     * @param comboBox The combobox element to be cleared
     * @return Returns ''true'' if the combobox element is valid and has been cleared successfully, ''false'' otherwise.
     */
    export function guiComboBoxClear(comboBox: element): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxGetItemCount|MTASA Wiki}
     * @param comboBox The combo box to get the number of items from.
     * @return Returns the number of items if the function is successful, ''false'' otherwise.
     */
    export function guiComboBoxGetItemCount(comboBox: element): number;

    /**
     * This function retrieves the text from a specific combobox item.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxGetItemText|MTASA Wiki}
     * @param comboBox The combobox containing the item youre interested in
     * @param itemId The index of the item
     * @return Returns the text of the item if the arguments are right, ''false'' otherwise.
     */
    export function guiComboBoxGetItemText(comboBox: element, itemId: number): string;

    /**
     * This function returns the index of the selected combobox item.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxGetSelected|MTASA Wiki}
     * @param comboBox the combobox you want to know the selected item index of
     * @return Returns the index of the selected item if the specified combobox is valid and has a selected item, ''-1'' if no item is selected, ''nil'' otherwise.
     */
    export function guiComboBoxGetSelected(comboBox: element): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxIsOpen|MTASA Wiki}
     * @param comboBox The combo box to get the state.
     * @return Returns ''true'' if combobox is opened, ''false'' if combobox is closed, ''nil'' otherwise.
     */
    export function guiComboBoxIsOpen(comboBox: element): boolean;

    /**
     * This function removes an item from a combobox.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxRemoveItem|MTASA Wiki}
     * @param comboBox The combobox containing the item youre interested in
     * @param itemId The index of the item to remove
     * @return Returns ''true'' if the item was removes successfully, ''false'' otherwise.
     */
    export function guiComboBoxRemoveItem(comboBox: element, itemId: number): boolean;

    /**
     * This function changes the text of a combobox item.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxSetItemText|MTASA Wiki}
     * @param comboBox The combobox containing the item youre interested in
     * @param itemId The index of the item
     * @param text The text you want to put in (does NOT accept numbers, use tostring() for that)
     * @return Returns ''true'' if the text was set successfully, ''false'' otherwise.
     */
    export function guiComboBoxSetItemText(comboBox: element, itemId: number, text: string): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxSetOpen|MTASA Wiki}
     * @param comboBox The combobox to be opened or closed.
     * @param state The state of combobox. true, if the combobox is to be opened. false if the combobox is to be closed.
     * @return Returns true if is successful, ''false'' otherwise.
     */
    export function guiComboBoxSetOpen(comboBox: element, state: boolean): boolean;

    /**
     * This function sets the selected item from a combobox.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiComboBoxSetSelected|MTASA Wiki}
     * @param comboBox the combobox you want to select an item from
     * @param itemIndex the item you want to select (item 0 is the first item). If -1 is specified, then the combo box text is set to its caption.
     * @return Returns ''true'' if the selected item has been changed successfully, ''false'' otherwise.
     */
    export function guiComboBoxSetSelected(comboBox: element, itemIndex: number): boolean;

    /**
     * [[Image:Gui-edit.png|frame|Example GUI edit field.]]
     * This function is for creating a new GUI edit box. This is a text box in which the user can input text. Edit boxes only allow a single line of text. If you want to allow multiple lines of text create a memo box using [[guiCreateMemo]].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateEdit|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI edit box on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI edit box on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI edit box. This is affected by the relative argument.
     * @param height A float of the height of the GUI edit box. This is affected by the relative argument.
     * @param text A string of the text that will be displayed by default in the edit box.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the GUI edit box is attached to.  If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns a gui-edit element of the created edit box if it was successfully created, false otherwise.
     */
    export function guiCreateEdit(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: element): element;

    /**
     * This function returns the caret (the text cursor) position within the editbox.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditGetCaretIndex|MTASA Wiki}
     * @param theElement The edit box you want to get the caret position from
     * @return Returns the caret index on success, ''false'' otherwise.
     */
    export function guiEditGetCaretIndex(theElement: element): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditGetMaxLength|MTASA Wiki}
     * @return Returns the maximum text length on success, ''false'' otherwise.
     */
    export function guiEditGetMaxLength(edit: gui): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditIsMasked|MTASA Wiki}
     * @return Returns ''true'' if the edit box is masked, ''false'' if not, ''nil'' if an invalid edit box was provided.
     */
    export function guiEditIsMasked(edit: gui): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditIsReadOnly|MTASA Wiki}
     * @return Returns ''true'' if the edit box is read-only, ''false'' if not, ''nil'' if an invalid edit box was provided.
     */
    export function guiEditIsReadOnly(edit: gui): boolean;

    /**
     * This function sets the current position of the caret (the text cursor) within the edit box.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetCaretIndex|MTASA Wiki}
     * @param theElement The edit box to be changed.
     * @param index An integer referring to the desired position within the box.
     * @return Returns ''true'' if the index was successfully set, ''false'' otherwise.
     */
    export function guiEditSetCaretIndex(theElement: element, index: number): boolean;

    /**
     * This function sets or removes masking (covering up the text being typed) for password text fields.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetMasked|MTASA Wiki}
     * @param theElement The edit box to be changed.
     * @param status A boolean value indicating whether masking is to be enabled or disabled.
     * @return Returns ''true'' if the function is successful, ''false'' otherwise.
     */
    export function guiEditSetMasked(theElement: element, status: boolean): boolean;

    /**
     * This function sets the maximum text length that can be typed into an edit box.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetMaxLength|MTASA Wiki}
     * @param length An integer indicating the maximum number of characters that can be typed into the box.
     * @return Returns ''true'' if the max length was set successfully, ''false'' otherwise.
     */
    export function guiEditSetMaxLength(guiEdit: element, length: number): boolean;

    /**
     * This function allows you to set or remove read-only status for an edit box. If read-only is set to ''true'', the box is not editable.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiEditSetReadOnly|MTASA Wiki}
     * @param editField The element of the Element/GUI/Edit field|edit field to be modified.
     * @param status A boolean value indicating whether read-only is to be enabled or disabled.
     * @return Returns ''true'' if edit field's read-only status was changed successfully, ''false'' otherwise.
     */
    export function guiEditSetReadOnly(editField: element, status: boolean): boolean;

    /**
     * This function creates a grid list GUI element.  These are menu's which are designed in lists and can have multiple columns.  A good example of a gridlist element can be found in MTA's settings box, under ''Controls''.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateGridList|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI gridlist on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI gridlist on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI gridlist. This is affected by the relative argument.
     * @param height A float of the height of the GUI gridlist. This is affected by the relative argument.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the gui gridlist is attached to.  If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns an element of the created gridlist if it was successfully created, false otherwise.
     */
    export function guiCreateGridList(x: number, y: number, width: number, height: number, relative: boolean, parent: element): element;

    /**
     * This function is used to create columns in grid lists.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListAddColumn|MTASA Wiki}
     * @param gridList The grid list you want to add a column to
     * @param title Title of the column
     * @param width Column width, relative to the grid list width
     * @return Returns the column id if it was created, ''false'' otherwise.
     */
    export function guiGridListAddColumn(gridList: element, title: string, width: number): number;

    /**
     * Adds a row to a grid list, and optionally add simple text items with your rows.  Use [[guiGridListSetItemText]] to add row headers.
     * ATTENTION: Without [[guiGridListSetItemText]] there is no row added to the grid.
     * Look at the example, first you give the row a name with '''[[row =]]''' guiGridListAddRow ( playerList ), and then you use [[guiGridListSetItemText]]. }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListAddRow|MTASA Wiki}
     * @param gridList The grid list you want to add a row to  {{New feature/item|3.0153|1.5.3||
     * @param itemText1 The text for the first column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
     * @param itemText2 The text for the second column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
     * @param args Item text for any other columns
     * @return Returns the row id if it has been created, ''false'' otherwise.
     */
    export function guiGridListAddRow(gridList: element, itemText1?: number | string, itemText2?: number | string, ...args: any[]): number;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This allows you to automatically size a column to display everything in it correctly, with the most minimal width.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListAutoSizeColumn|MTASA Wiki}
     * @param gridList The Element/GUI/Gridlist|grid list element where the column is located.
     * @param columnIndex The ID of the column you want to be auto-sized.
     * @return Returns ''true'' if the column was auto-sized, ''false'' otherwise.
     */
    export function guiGridListAutoSizeColumn(gridList: element, columnIndex: number): boolean;

    /**
     * This function clears all the data from a grid list.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListClear|MTASA Wiki}
     * @param gridList The grid list element to be cleared
     * @return Returns ''true'' if the grid list element is valid and has been cleared successfully, ''false'' otherwise.
     */
    export function guiGridListClear(gridList: element): boolean;

    /**
     * This allows you to get the count of existing columns in a gridlist.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetColumnCount|MTASA Wiki}
     * @param gridList The grid list you want to add a column to
     * @return Returns an integer with the amount of columns in the gridlist, false otherwise.
     */
    export function guiGridListGetColumnCount(gridList: element): number;

    /**
     * This function is used to get the column title of a gridlist column.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetColumnTitle|MTASA Wiki}
     * @param guiGridlist : The grid list you want to get the column title from
     * @param columnIndex : Column ID
     * @return Returns a string containing the column title, or ''false'' otherwise.
     */
    export function guiGridListGetColumnTitle(guiGridlist: element, columnIndex: number): string;

    /**
     * This allows you to get the width of an existing column in a gridlist.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetColumnWidth|MTASA Wiki}
     * @param gridList The grid list you want to add a column to
     * @param columnIndex Column ID of the Get size
     * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or absolute pixels.
     * @return Returns the width of the gridlist column, ''false'' if bad arguments were given.
     */
    export function guiGridListGetColumnWidth(gridList: element, columnIndex: number, relative: boolean): number;

    /**
     * This function is used to get the horizontal scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetHorizontalScrollPosition|MTASA Wiki}
     * @param guiGridlist : The grid list you want to get the horizontal scroll position from
     * @return Returns a integer between 0 and 100 indicating the horizontal scroll position, or ''false'' otherwise.
     */
    export function guiGridListGetHorizontalScrollPosition(guiGridlist: element): number;

    /**
     * This function gets the color of a gridlist item.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetItemColor|MTASA Wiki}
     * @param gridList The grid list element
     * @param rowIndex Row ID
     * @param columnIndex Column ID
     * @return Returns four ''int'' values, representing the amount of red, green, blue and alpha if successful. ''false'' otherwise.
     */
    export function guiGridListGetItemColor(gridList: element, rowIndex: number, columnIndex: number): LuaMultiReturn<[number, number, number, number]>;

    /**
     * With this function you can retrieve the [[string]] data associated with an item in a [[Element/GUI/Gridlist|grid list]]. This is not the text that is displayed on the item, but an internal string that you can use to hold extra information about the item.<br/>
     * '''Note:''' This function will only work '''after''' you set the item's text using [[guiGridListSetItemText]]!
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetItemData|MTASA Wiki}
     * @param gridList the grid list containing the item youre interested in
     * @param rowIndex the row index of the item
     * @param columnIndex the column index of the item
     * @return Returns the item data of the specified item if succesful, ''false'' if one of the arguments was invalid.
     */
    export function guiGridListGetItemData(gridList: element, rowIndex: number, columnIndex: number): any;

    /**
     * This function retrieves the text from a specific grid list item.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetItemText|MTASA Wiki}
     * @param gridList the gridlist containing the item youre interested in
     * @param rowIndex row id of the item
     * @param columnIndex column id of the item
     * @return Returns the text of the item if the arguments are right, ''false'' otherwise.
     */
    export function guiGridListGetItemText(gridList: element, rowIndex: number, columnIndex: number): string;

    /**
     * This function returns the number of rows in a grid list.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetRowCount|MTASA Wiki}
     * @param gridList The grid list to get the number of rows from.
     * @return Returns the number of rows if the function is successful, ''false'' otherwise.
     */
    export function guiGridListGetRowCount(gridList: element): number;

    /**
     * This function returns the amount of options selected in the specified [[Element/GUI/Gridlist|grid list]].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectedCount|MTASA Wiki}
     * @param gridList The Element/GUI/Gridlist|grid list which amount of selected items you want to retrieve.
     * @return Returns an [[int]]eger representing the amount of selected options if everything was successful or ''false'' if invalid arguments were passed.
     */
    export function guiGridListGetSelectedCount(gridList: element): number;

    /**
     * This function returns the row and column indexes of the selected item in a grid list. First selected row and column is (0, 0).
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectedItem|MTASA Wiki}
     * @param gridList the grid list you want to know the selected row index of
     * @return Returns the row and column indexes of the selected item if the specified grid list is valid and has a selected item, (-1, -1) if no item is selected, ''false'' otherwise.
     */
    export function guiGridListGetSelectedItem(gridList: element): LuaMultiReturn<[number, number]>;

    /**
     * This function returns the items selected in the specified [[Element/GUI/Gridlist|grid list]].
     * Note that for some reason the column ID is 1 lower than it should be, for example 0 is returned but if you try and get the text for column 0 there is nothing, but column 1 has what you clicked on.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectedItems|MTASA Wiki}
     * @param gridList The Element/GUI/Gridlist|grid list which selected items you want to retrieve.
     * @return Returns a table over the selected items in the [[Element/GUI/Gridlist|grid list]] in this format:
     * * <syntaxhighlight lang="lua">
     * * table = {
     * *     [1] = {
     * *         ["column"], -- has the first selected item's column ID
     * *         ["row"] -- has the first selected item's row ID
     * *     },
     * *     [2] = {
     * *         ["column"],-- has the second selected item's column ID
     * *         ["row"] -- has the second selected item's row ID
     * *     },
     * *     ...
     * * }
     * * </syntaxhighlight>
     * * if everything was successful or ''false'' if invalid arguments were passed.
     */
    export function guiGridListGetSelectedItems(gridList: element): table;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetSelectionMode|MTASA Wiki}
     * @return Returns the ID of the current gridlist's selection mode.
     * * {{GUI_gridList_selection_modes_IDs}}
     */
    export function guiGridListGetSelectionMode(Element: gui): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListIsSortingEnabled|MTASA Wiki}
     * @param guiGridlist The GUI gridlist you wish to check if sorting is enabled or not.
     * @return Returns ''true'' if sorting is enabled, ''false'' otherwise.
     */
    export function guiGridListIsSortingEnabled(guiGridlist: element): boolean;

    /**
     * This function is used to get the vertical scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListGetVerticalScrollPosition|MTASA Wiki}
     * @param guiGridlist : The grid list you want to get the vertical scroll position from
     * @return Returns a integer between 0 and 100 indicating the vertical scroll position, or ''false'' otherwise.
     */
    export function guiGridListGetVerticalScrollPosition(guiGridlist: element): number;

    /**
     * This allows you to insert a new row after a specified row, and simultaneously set text. Good for inserting new rows in the middle of existing rows. To insert at the top use -1 as row index.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListInsertRowAfter|MTASA Wiki}
     * @param gridList The grid list you want to add a row to
     * @param rowIndex Row ID of the row you want to insert the new row after.  {{New feature/item|3.0153|1.5.3||
     * @return Returns ''true'' if the row was successfully added, ''false'' otherwise.
     */
    export function guiGridListInsertRowAfter(gridList: element, rowIndex: number): number;

    /**
     * This allows you to delete columns that exist in grid lists.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListRemoveColumn|MTASA Wiki}
     * @param gridList The grid list you want to remove a column from
     * @param columnIndex Column ID
     * @return Returns ''true'' if the grid list column was successfully removed, ''false'' otherwise.
     */
    export function guiGridListRemoveColumn(gridList: element, columnIndex: number): boolean;

    /**
     * This allows you to delete rows that exist in grid lists.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListRemoveRow|MTASA Wiki}
     * @param gridList The grid list you want to remove a row from
     * @param rowIndex The row ID which you want to remove
     * @return Returns ''true'' if the grid list row was successfully removed, ''false'' otherwise.
     */
    export function guiGridListRemoveRow(gridList: element, rowIndex: number): boolean;

    /**
     * This function is used to change the column title of a gridlist column.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetColumnTitle|MTASA Wiki}
     * @param guiGridlist : The grid list you want to change the column title from
     * @param columnIndex : Column ID
     * @param title : The title of the column
     * @return Returns ''true'' if the new title was set, or ''false'' otherwise.
     */
    export function guiGridListSetColumnTitle(guiGridlist: element, columnIndex: number, title: string): boolean;

    /**
     * This allows you to set the width of an existing column in a gridlist.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetColumnWidth|MTASA Wiki}
     * @param gridList The grid list you want to add a column to
     * @param columnIndex Column ID of the size you want to change
     * @param width A float or integer of the width of the column depending on the relative argument.
     * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or absolute pixels.
     * @return Returns ''true'' if the gridlist column width was successfully set, ''false'' if bad arguments were given.
     */
    export function guiGridListSetColumnWidth(gridList: element, columnIndex: number, width: number, relative: boolean): boolean;

    /**
     * This function is used to set the horizontal scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetHorizontalScrollPosition|MTASA Wiki}
     * @param guiGridlist : The grid list you want to set the horizontal scroll position from
     * @param fPosition : A float representing the horizontal scroll position (0-100)
     * @return Returns ''true'' if the horizontal scroll position was set, or ''false'' otherwise.
     */
    export function guiGridListSetHorizontalScrollPosition(guiGridlist: element, fPosition: number): boolean;

    /**
     * This function changes the color of a gridlist item.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetItemColor|MTASA Wiki}
     * @param gridList The grid list element
     * @param rowIndex Row ID
     * @param columnIndex Column ID
     * @param red The amount of red in the color (0-255)
     * @param green The amount of green in the color (0-255)
     * @param blue The amount of blue in the color (0-255)
     * @param alpha The amount of alpha in the color (0-255).
     * @default 255
     * @return Returns ''true'' if the item color was set successfully, ''false'' otherwise.
     */
    export function guiGridListSetItemColor(gridList: element, rowIndex: number, columnIndex: number, red: number, green: number, blue: number, alpha?: number): boolean;

    /**
     * This function sets a Item Data associated to a grid list item.<br/>
     * '''Note:''' This function will only work '''after''' you set the item's text using [[guiGridListSetItemText]]!
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetItemData|MTASA Wiki}
     * @param gridList A gridlist element of the data you wish to set to
     * @param rowIndex The row of the item you wish to set to
     * @param columnIndex The column of the item you wish to set to
     * @param data The data you wish to set to the item.
     * @return Returns ''true'' if the data was set successfully, false otherwise
     */
    export function guiGridListSetItemData(gridList: element, rowIndex: number, columnIndex: number, data: any): boolean;

    /**
     * This function changes the text of a gridlist item.
     * Notice: This function doesn't work well with Sorting. If you are using sorting, please use the optional arguments of [[guiGridListAddRow]] as much as possible.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetItemText|MTASA Wiki}
     * @param gridList The grid list element
     * @param rowIndex Row ID
     * @param columnIndex Column ID
     * @param text The text you want to put in (does NOT accept numbers, use tostring() for that)
     * @param section Determines if the item is a section
     * @param number Tells whether the text item is a number value or not (used for sorting)
     * @return Returns ''true'' if the item text was set successfully, ''false'' otherwise.
     */
    export function guiGridListSetItemText(gridList: element, rowIndex: number, columnIndex: number, text: string, section: boolean, number: boolean): boolean;

    /**
     * This function allows a gridlist's scrollbar to be forced '''on''', or returned to default.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetScrollBars|MTASA Wiki}
     * @param guiGridlist The GUI gridlist you wish to change the state of scrollbars
     * @param horizontalBar A bool where true forces the horizontal scrollbar on, and false returns them to default.
     * @param verticalBar A bool where true forces the verical scrollbar on, and false returns them to default.
     * @return Returns ''true'' if the scrollbars were successfully set, ''false'' otherwise.
     */
    export function guiGridListSetScrollBars(guiGridlist: element, horizontalBar: boolean, verticalBar: boolean): boolean;

    /**
     * This function selects an item from a gridlist. If you wish to deselect whatever item is selected, pass ''0'' as both the ''rowIndex'' and  ''columnIndex'' arguments.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetSelectedItem|MTASA Wiki}
     * @param gridList the grid list you want to select an item from
     * @param rowIndex the row you want to select (index 0 is the first row)
     * @param columnIndex the column you want to select (index 1 is the first column)  {{New feature|3.0111|1.1.1|  {{OptionalArg}}
     * @param bReset set to false for multiple selections  }}
     * @default true
     * @return Returns ''true'' if the passed arguments are correct and the item has been selected, ''false'' otherwise.
     */
    export function guiGridListSetSelectedItem(gridList: element, rowIndex: number, columnIndex: number, bReset?: boolean): boolean;

    /**
     * This function sets the selection mode of a gui gridlist.  For example, the MTA ''server browser'' selects a whole row, while the ''Controls'' dialog selects a single cell. To select multiple items you must be holding down 'ctrl'.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetSelectionMode|MTASA Wiki}
     * @param mode The mode of the selection.  Can be the following values:
     * @return Returns ''true'' if the selection mode was successfully set, false otherwise.
     */
    export function guiGridListSetSelectionMode(Element: gui, mode: number): boolean;

    /**
     * This function allows the disabling or enabling of ''sorting'' within a gridlist.  Sorting is achieved by clicking a column header.  Gridlist items will be sorted according to the clicked column.  By default, gridlists have sorting enabled.  This function will allow you to toggle this.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetSortingEnabled|MTASA Wiki}
     * @param guiGridlist The GUI gridlist you wish to toggle the sorting of.
     * @param enabled A boolean representing whether the sorting is enabled, or disabled.
     * @return Returns ''true'' if sorting was successfully toggled., ''false'' otherwise.
     */
    export function guiGridListSetSortingEnabled(guiGridlist: element, enabled: boolean): boolean;

    /**
     * This function is used to set the vertical scroll position from a grid list
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGridListSetVerticalScrollPosition|MTASA Wiki}
     * @param guiGridlist : The grid list you want to set the vertical scroll position from
     * @param fPosition : A float representing the vertical scroll position (0-100)
     * @return Returns ''true'' if the vertical scroll position was set, or ''false'' otherwise.
     */
    export function guiGridListSetVerticalScrollPosition(guiGridlist: element, fPosition: number): boolean;

    /**
     * This function creates a new GUI memo.  This is a multiline edit box in which the user can input text.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateMemo|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI memo on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI memo on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI memo. This is affected by the relative argument.
     * @param height A float of the height of the GUI memo. This is affected by the relative argument.
     * @param text A string of the text that will be displayed by default in the memo.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the GUI memo is attached to.  If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns a gui-memo element of the created memo if it was successfully created, false otherwise.
     */
    export function guiCreateMemo(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: element): guimemo;

    /**
     * This function returns the caret (the text cursor) position within the memo box.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoGetCaretIndex|MTASA Wiki}
     * @param theElement The memo box you want to get the caret position from
     * @return Returns the caret index on success, ''false'' otherwise.
     */
    export function guiMemoGetCaretIndex(theElement: element): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoGetVerticalScrollPosition|MTASA Wiki}
     * @return Returns a [[float]] ranging between 0 and 100, or '''false''' otherwise.
     */
    export function guiMemoGetVerticalScrollPosition(memo: gui): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoSetVerticalScrollPosition|MTASA Wiki}
     * @param position : a float ranging between 0 and 100.
     * @return Returns '''true''' if the position was set, '''false''' otherwise.
     */
    export function guiMemoSetVerticalScrollPosition(memo: gui, position: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoIsReadOnly|MTASA Wiki}
     * @return Returns ''true'' if the memo is read only, ''false'' if the memo isn't read only, ''nil'' otherwise.
     */
    export function guiMemoIsReadOnly(memo: gui): boolean;

    /**
     * This function sets the current position of the caret (the text cursor) within the memo.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoSetCaretIndex|MTASA Wiki}
     * @param index An integer referring to the desired character position within the box. 0 would be before the first character in the box, 1 before the second, etc.
     * @return Returns ''true'' if the caret was successfully moved, ''false'' otherwise.
     */
    export function guiMemoSetCaretIndex(memo: gui, index: number): boolean;

    /**
     * This function allows you to set or remove read-only status for a GUI memo. If read-only is set to ''true'', the contents are not editable.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiMemoSetReadOnly|MTASA Wiki}
     * @param status A boolean value indicating whether read-only is to be enabled or disabled.
     * @return Returns ''true'' if the status was successfully changed, ''false'' otherwise.
     */
    export function guiMemoSetReadOnly(memo: gui, status: boolean): boolean;

    /**
     * This function creates a [[Element/GUI/Progress bar|progress bar]].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateProgressBar|MTASA Wiki}
     * @param x A float of the 2D x position of the progress bar on a players screen. This is affected by the relative argument.
     * @param y A float of the 2D y position of the progress bar on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the progress bar. This is affected by the relative argument.
     * @param height A float of the height of the progress bar. This is affected by the relative argument.
     * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the progress bar is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns [[element]] of the progress bar if it was created succesfully, ''false'' otherwise.
     */
    export function guiCreateProgressBar(x: number, y: number, width: number, height: number, relative: boolean, parent: element): element;

    /**
     * This function gets the progress of a progress bar as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiProgressBarGetProgress|MTASA Wiki}
     * @param theProgressbar : The progressbar you want to check.
     * @return Returns a [[float]] ranging between 0 and 100.
     */
    export function guiProgressBarGetProgress(theProgressbar: progressBar): number;

    /**
     * This function is used to set the progress of a progressbar as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiProgressBarSetProgress|MTASA Wiki}
     * @param theProgressbar : The progressbar you want to change the progress of
     * @param progress : a float ranging from 0 - 100
     * @return Returns true if the progress was set, false otherwise.
     */
    export function guiProgressBarSetProgress(theProgressbar: progressBar, progress: number): boolean;

    /**
     * This function creates a [[Element/GUI/Radio button|radio button]].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateRadioButton|MTASA Wiki}
     * @param x A float of the 2D x position of the radio button on a players screen. This is affected by the relative argument.
     * @param y A float of the 2D y position of the radio button on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the text field next to the radio button. This is affected by the relative argument.
     * @param height A float of the height of the text field next to the radio button. This is affected by the relative argument.
     * @param text The text to be displayed next to the radio button.
     * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.  ''NOTE:'' All radio buttons become grouped together with their parent item.  Only ONE radio button per group/parent will be able to be selected at the same time.
     * @default nil
     * @return Returns [[element]] of the radio button if it was created succesfully, ''false'' otherwise.
     */
    export function guiCreateRadioButton(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent: element): element;

    /**
     * This function gets a radio button's selection state.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiRadioButtonGetSelected|MTASA Wiki}
     * @param guiRadioButton The radio button you wish to retrieve the selection state of.
     * @return Returns ''true'' if the radio button is selected, ''false'' if it is not.
     */
    export function guiRadioButtonGetSelected(guiRadioButton: element): boolean;

    /**
     * This function selects or unselects a radio button.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiRadioButtonSetSelected|MTASA Wiki}
     * @param guiRadioButton The GUI radio button in which you wish to change the selection state of
     * @param state The state of the radio button, where true indicates selected, and false indicates unselected.
     * @return Returns ''true'' if the radio button's selection state was successfully set, ''false'' otherwise.
     */
    export function guiRadioButtonSetSelected(guiRadioButton: element, state: boolean): boolean;

    /**
     * This function creates a GUI scrollbar. You can use the functions [[guiScrollPaneSetHorizontalScrollPosition]], [[guiScrollPaneSetVerticalScrollPosition]], [[guiScrollPaneGetHorizontalScrollPosition]] and [[guiScrollPaneGetVerticalScrollPosition]] to read and modify the scrollbar's scroll.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateScrollBar|MTASA Wiki}
     * @param x the 2D x offset of the GUI scrollbar from its parent.  This is affected by the relative argument.
     * @param y the 2D y offset of the GUI scrollbar from its parent. This is affected by the relative argument.
     * @param width the width of the GUI scrollbar. This is affected by the relative argument.
     * @param height the height of the GUI scrollbar. This is affected by the relative argument.
     * @param horizontal whether this scrollbar is horizontal (true) or vertical (false).
     * @param relative whether sizes and positions are relative to their parents.  If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widgets size.
     * @return Returns a ''gui-scrollbar'' if it was created successfully, ''false'' otherwise.
     */
    export function guiCreateScrollBar(x: number, y: number, width: number, height: number, horizontal: boolean, relative: boolean, element: gui): guiscrollbar;

    /**
     * This function gets the scroll amount of a scrollbar as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollBarGetScrollPosition|MTASA Wiki}
     * @return Returns a [[float]] ranging between 0 and 100, representing the amount the scrollbar has been scrolled.
     */
    export function guiScrollBarGetScrollPosition(scrollBar: gui): number;

    /**
     * This function is used to set the scroll amount of a scrollbar as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollBarSetScrollPosition|MTASA Wiki}
     * @param amount : a float ranging from 0 - 100 representing the amount you wish to set the scroll bar.
     * @return Returns true if the scroll position was successfully set, false otherwise.
     */
    export function guiScrollBarSetScrollPosition(scrollBar: gui, amount: number): boolean;

    /**
     * This creates a GUI scroll pane.
     * [[Image:gui-scrollpane.png|frame|Example GUI ScrollPane.]]
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateScrollPane|MTASA Wiki}
     * @param x the 2D x offset of the GUI scrollpane from its parent. This is affected by the relative argument.
     * @param y the 2D y offset of the GUI scrollpane from its parent. This is affected by the relative argument.
     * @param width the width of the GUI scrollpane. This is affected by the relative argument.
     * @param height the height of the GUI scrollpane. This is affected by the relative argument.
     * @param relative whether sizes and positions are relative to their parents. If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widgets size.
     * @return The gui-element if created, otherwise false.
     */
    export function guiCreateScrollPane(x: number, y: number, width: number, height: number, relative: boolean, element: gui): element;

    /**
     * This function is used to get the position of a horizontal scroll pane as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneGetHorizontalScrollPosition|MTASA Wiki}
     * @param horizontalScrollPane : The scroll pane you want to know the position of
     * @return Returns a [[float]] ranging between 0 and 100, or '''false''' otherwise.
     */
    export function guiScrollPaneGetHorizontalScrollPosition(horizontalScrollPane: element): number;

    /**
     * This function is used to get the position of a vertical scroll pane as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneGetVerticalScrollPosition|MTASA Wiki}
     * @param verticalScrollPane : The scroll pane you want to know the position of
     * @return Returns a [[float]] ranging between 0 and 100, or '''false''' otherwise.
     */
    export function guiScrollPaneGetVerticalScrollPosition(verticalScrollPane: element): number;

    /**
     * This function is used to set the position of a horizontal scroll pane as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneSetHorizontalScrollPosition|MTASA Wiki}
     * @param horizontalScrollPane : The scroll pane you want to change the position of
     * @param position : a float ranging from 0 - 100
     * @return Returns '''true''' if the position was set, '''false''' otherwise.
     */
    export function guiScrollPaneSetHorizontalScrollPosition(horizontalScrollPane: element, position: number): boolean;

    /**
     * This function allows a scrollpane's scrollbars to be forced '''on''', or returned to default.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneSetScrollBars|MTASA Wiki}
     * @param scrollPane the GUI scrollpane element you want to set the scrollbars of.
     * @param horizontal A bool where true forces the horizontal scrollbar on, and false returns them to default.
     * @param vertical A bool where true forces the vertical scrollbar on, and false returns them to default.
     * @return Returns ''true'' if the call was successfully, ''false'' otherwise.
     */
    export function guiScrollPaneSetScrollBars(scrollPane: element, horizontal: boolean, vertical: boolean): boolean;

    /**
     * This function is used to set the position of a vertical scroll pane as a percentage.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiScrollPaneSetVerticalScrollPosition|MTASA Wiki}
     * @param verticalScrollPane : The scroll pane you want to change the position of
     * @param position : a float ranging from 0 - 100
     * @return Returns '''true''' if the position was set, '''false''' otherwise.
     */
    export function guiScrollPaneSetVerticalScrollPosition(verticalScrollPane: element, position: number): boolean;

    /**
     * This function creates a static image using a .png image in the resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateStaticImage|MTASA Wiki}
     * @param x A float of the 2D x position of the image on a players screen. This is affected by the relative argument.
     * @param y A float of the 2D y position of the image on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the image. This is affected by the relative argument.
     * @param height A float of the height of the image. This is affected by the relative argument.
     * @param path The filepath of the image file that is being loaded.
     * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the image is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns [[element]] if image was created successfully, ''false'' otherwise.
     */
    export function guiCreateStaticImage(x: number, y: number, width: number, height: number, path: string, relative: boolean, parent: element): element;

    /**
     * This function gets the native size of image. That means the original size in pixels of the image file.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiStaticImageGetNativeSize|MTASA Wiki}
     * @param theImage The static image element to get the original size of.
     * @return Returns two integers where first is the width and second the height of the image in pixels, ''false'' if the image element was invalid.
     */
    export function guiStaticImageGetNativeSize(theImage: element): LuaMultiReturn<[number, number]>;

    /**
     * This function allows you to change the image in GUI static image element to another one. '''Tip''': If you set other images as children you will have to use [[setElementCallPropagationEnabled]] to only affect the parent image.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiStaticImageLoadImage|MTASA Wiki}
     * @param theElement The static image element to be changed.
     * @param filename A string specifying the filepath of the image file being loaded in current resource.
     * @return Returns ''true'' if the the image in the static image element was successfully changed, ''false'' otherwise.
     */
    export function guiStaticImageLoadImage(theElement: element, filename: string): boolean;

    /**
     * This function creates a Tab Panel, which acts as a template to create Tabs upon.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateTabPanel|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI tab panel on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI tab panel on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI tab panel. This is affected by the relative argument.
     * @param height A float of the height of the GUI tab panel. This is affected by the relative argument.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the tab panel is attached to.  If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns a GUI tab panel element if successful, ''false'' otherwise.
     */
    export function guiCreateTabPanel(x: number, y: number, width: number, height: number, relative: boolean, parent: element): element;

    /**
     * This function returns the currently selected tab in the specified [[Element/GUI/Tab panel|tab panel]].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiGetSelectedTab|MTASA Wiki}
     * @param tabPanel The Element/GUI/Tab panel|tab panel which current tab you want to retrieve.
     * @return Returns an [[element]] of the [[Element/GUI/Tab|tab]] if a tab was selected or [[nil]] if no tab was selected. If passed arguments were invalid or something went wrong, the function will return ''false''.
     */
    export function guiGetSelectedTab(tabPanel: element): element;

    /**
     * This function is used to change the currently selected [[Element/GUI/Tab|tab]] in a [[Element/GUI/Tab panel|tab panel]].
     * @see {@link https://wiki.multitheftauto.com/wiki/guiSetSelectedTab|MTASA Wiki}
     * @param tabPanel The Element/GUI/Tab panel|tab panel which current tab you want to change.
     * @param theTab The Element/GUI/Tab|tab which will be the new active tab.
     * @return Returns ''true'' if the selected tab was changed to a new one successfully, ''false'' otherwise.
     */
    export function guiSetSelectedTab(tabPanel: element, theTab: element): boolean;

    /**
     * This function creates a tab on a pre-existing tab panel. A tab is a button as well as a 'dimension' that can be used to switch between information by clicking on the tabs.  Tabs are sorted on a tab panel in the order that they are created.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateTab|MTASA Wiki}
     * @param text The caption for the tab
     * @param parent The parent tab panel, as a tab panel element type
     * @return Returns a tab element if successful, ''false'' otherwise.
     */
    export function guiCreateTab(text: string, parent: element): element;

    /**
     * This function deletes a tab from a tab panel.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiDeleteTab|MTASA Wiki}
     * @param tabToDelete This is an element representing the tab that you want to delete.
     * @param tabPanel This is the guiCreateTabPanel|tab panel parent that the tab is attached to.
     * @return Returns ''true'' the tab was successfully deleted, ''false'' otherwise.
     */
    export function guiDeleteTab(tabToDelete: element, tabPanel: element): boolean;

    /**
     * [[Image:gui-label.png|frame|Example GUI label.]]
     * <table><tr><td valign=top height=100>
     * This function is for creating a new GUI label.  A label is simply a piece of text that cannot be edited by the user. If you would like to have a bigger text you'd have to change its font because font size is not supported.
     * </td></tr></table>
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateLabel|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI label on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI label on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI label. This is affected by the relative argument.
     * @param height A float of the height of the GUI label. This is affected by the relative argument.
     * @param text A string of the text that will be displayed by the label.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.  {{OptionalArg}}
     * @param parent This is the parent that the gui label is attached to.  If the relative argument is true, sizes and positioning will be made relative to this parent. If the relative argument is false, positioning will be the number of offset pixels from the parents origin. If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
     * @default nil
     * @return Returns an [[GUI_widgets|element]] of the created label if it was successfully created, false otherwise.
     */
    export function guiCreateLabel(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent: element): element;

    /**
     * This function gets the color of a label.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelGetColor|MTASA Wiki}
     * @return Returns three ''int'' values, representing the amount of red, green, blue if successful. ''false'' otherwise.
     */
    export function guiLabelGetColor(element: gui): LuaMultiReturn<[number, number, number]>;

    /**
     * This function returns the height of the font currently used in a GUI text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelGetFontHeight|MTASA Wiki}
     * @param theLabel The text label to get the font height from.
     * @return Returns the absolute height of the font currently used in the text label if the function is successful, ''false'' otherwise.
     */
    export function guiLabelGetFontHeight(theLabel: element): number;

    /**
     * This function returns the extent, or width, of the current text inside a GUI text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelGetTextExtent|MTASA Wiki}
     * @param theLabel The text label to get the text extent from.
     * @return Returns the absolute width of the current text inside the text label if the function is successful, ''false'' otherwise.
     */
    export function guiLabelGetTextExtent(theLabel: element): number;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function allows you to set the color of a GUI label.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelSetColor|MTASA Wiki}
     * @param theElement The label to be changed.
     * @param red An integer specifying the amount of red (0 to 255).
     * @param green An integer specifying the amount of green (0 to 255).
     * @param blue An integer specifying the amount of blue (0 to 255).
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the the color of the gui label was successfully changed, ''false'' otherwise.
     */
    export function guiLabelSetColor(theElement: element, red: number, green: number, blue: number): boolean;

    /**
     * This function sets the horizontal alignment of a text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelSetHorizontalAlign|MTASA Wiki}
     * @param theLabel The text label to set the horizontal alignment on.
     * @param align The alignment type. Valid type strings are:  **"left"  **"center"  **"right"
     * @param wordwrap Whether or not to enable wordwrap for the gui-label.
     * @default false
     * @return Returns ''true'' on success, ''false'' otherwise.
     */
    export function guiLabelSetHorizontalAlign(theLabel: element, align: string, wordwrap: boolean): boolean;

    /**
     * This function sets the vertical alignment of a text label.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiLabelSetVerticalAlign|MTASA Wiki}
     * @param theLabel The text label to set the vertical alignment on.
     * @param align The alignment type. Valid type strings are:  **"top"  **"center"  **"bottom"
     * @return Returns ''true'' on success, ''false'' otherwise.
     */
    export function guiLabelSetVerticalAlign(theLabel: element, align: string): boolean;

    /**
     * This function is for creating a new GUI window.  This provides a base for other gui elements to be created within.  However, windows do not have a parent and cannot be created in any GUI elements.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiCreateWindow|MTASA Wiki}
     * @param x A float of the 2D x position of the GUI window on a players screen.  This is affected by the relative argument.
     * @param y A float of the 2D y position of the GUI window on a players screen. This is affected by the relative argument.
     * @param width A float of the width of the GUI window. This is affected by the relative argument.
     * @param height A float of the height of the GUI window. This is affected by the relative argument.
     * @param titleBarText A string of the text that will be displayed in the title bar of the window.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on clients resolution, accessible using guiGetScreenSize.
     * @return Returns a gui window element if it was created successfully, false otherwise.
     */
    export function guiCreateWindow(x: number, y: number, width: number, height: number, titleBarText: string, relative: boolean): element;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowIsMovable|MTASA Wiki}
     * @return Returns ''true'' if the window is movable, ''false'' if not, ''nil'' if an invalid window was provided.
     */
    export function guiWindowIsMovable(window: gui): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowIsSizable|MTASA Wiki}
     * @return Returns ''true'' if the window is sizable, ''false'' if not, ''nil'' if an invalid window was provided.
     */
    export function guiWindowIsSizable(window: gui): boolean;

    /**
     * This function allows you to specify whether or not a user can move a GUI window.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowSetMovable|MTASA Wiki}
     * @param theElement The window to be changed.
     * @param status A boolean value indicating whether the window is movable or not.
     * @return Returns ''true'' if the function is successful, ''false'' otherwise.
     */
    export function guiWindowSetMovable(theElement: element, status: boolean): boolean;

    /**
     * This function enables or disables user resizing of a GUI window.
     * @see {@link https://wiki.multitheftauto.com/wiki/guiWindowSetSizable|MTASA Wiki}
     * @param theElement The window to be changed.
     * @param status A boolean value indicating whether user resizing is to be enabled or disabled.
     * @return Returns ''true'' if the function is successful, ''false'' otherwise.
     */
    export function guiWindowSetSizable(theElement: element, status: boolean): boolean;

    /**
     * This retrieves the analog control state of a control.  This is useful for detecting sensitive controls, such as those used on a joypad.
     * To get the analog control state for a [[ped]], please use [[getPedAnalogControlState]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getAnalogControlState|MTASA Wiki}
     * @param control The control that you want to get the state of. See control names for a list of possible controls.  {{New feature/item|3.0157|1.5.7|20383|
     * @param rawValue A bool indicating if it should return the raw player input value.  }}
     * @return Returns a [[float]] between 0 and 1 indicating the amount the control is pressed.
     */
    export function getAnalogControlState(control: string, rawValue?: boolean): number;

    /**
     * Returns a list of key names that are bound to the specified game [[Control names|control]] or console command.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBoundKeys|MTASA Wiki}
     * @return If one or more keys are bound to the specified control or console command, a table is returned indexed by the names of the keys and containing key states as values. If no keys are bound or an invalid name was passed, returns ''false''.
     */
    export function getBoundKeys(command: string): table;

    /**
     * Gets the commands bound to a key.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCommandsBoundToKey|MTASA Wiki}
     * @param theKey See key names for a list of possible keys
     * @param keyState A string that has one of the following values:
     * @return Returns a table of the commands bound on that key.
     */
    export function getCommandsBoundToKey(theKey: string, keyState: string): table;

    /**
     * This function allow you get first key bound to command.
     * @see {@link https://wiki.multitheftauto.com/wiki/getKeyBoundToCommand|MTASA Wiki}
     * @param command command what you need check.
     * @return Returns a string of first key binded to current command.
     */
    export function getKeyBoundToCommand(command: string): string;

    /**
     * This function determines if a certain key is pressed or not.
     * '''Note:''' 'ralt' may trigger both 'ralt' and 'lctrl', this is due to AltGr
     * @see {@link https://wiki.multitheftauto.com/wiki/getKeyState|MTASA Wiki}
     * @param keyName The name of the key youre checking state of. See Key names.
     * @return Returns ''true'' if the specified key is pressed, ''false'' if it isn't or if an invalid key name is passed.
     */
    export function getKeyState(keyName: string): boolean;

    /**
     * * The direction of the light only has any effect if the light type is ''spot light''.
     * * One light will only apply illumination effects to [[Element/Ped|peds]], [[Element/Player|players]], wheels and number plates (like a emergency vehicle siren light does).
     * * Two or more lights will apply illumination effects to everything (excluding objects) that is in range of, at least, two of them.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/createLight|MTASA Wiki}
     * @param lightType An integer representing the type of light to create.  {{Light_types}}
     * @param posX A floating point number representing the X coordinate on the map.
     * @param posY A floating point number representing the Y coordinate on the map.
     * @param posZ A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param radius A floating point number representing the radius of the light.
     * @default 3
     * @param r An integer number representing the amount of red to use in the colouring of the light (0 - 255).
     * @default 255
     * @param g An integer number representing the amount of green to use in the colouring of the light (0 - 255).
     * @default 0
     * @param b An integer number representing the amount of blue to use in the colouring of the light (0 - 255).
     * @default 0
     * @param dirX A floating point number representing the light directions X coordinate on the map.
     * @default 0
     * @param dirY A floating point number representing the light directions Y coordinate on the map.
     * @default 0
     * @param dirZ A floating point number representing the light directions Z coordinate on the map.
     * @default 0
     * @param createsShadow A boolean representing whether or not does the light cast shadows.
     * @default false
     * @return
     */
    export function createLight(lightType: number, posX: number, posY: number, posZ: number, radius?: number, r?: number, g?: number, b?: number, dirX?: number, dirY?: number, dirZ?: number, createsShadow?: boolean): light;

    /**
     * This function returns the color for a [[Element/Light|light]] element.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getLightColor|MTASA Wiki}
     * @param theLight The Element/Light|light that you wish to retrieve the color of.
     * @return
     */
    export function getLightColor(theLight: light): LuaMultiReturn<[number, number, number]>;

    /**
     * This function returns the direction for a [[Element/Light|light]] element.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getLightDirection|MTASA Wiki}
     * @param theLight The Element/Light|light that you wish to retrieve the direction of.
     * @return
     */
    export function getLightDirection(theLight: light): LuaMultiReturn<[number, number, number]>;

    /**
     * This function returns the radius for a [[Element/Light|light]] element.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getLightRadius|MTASA Wiki}
     * @param theLight The Element/Light|light that you wish to retrieve the radius of.
     * @return
     */
    export function getLightRadius(theLight: light): number;

    /**
     * This function returns the type for a [[Element/Light|light]] element.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getLightType|MTASA Wiki}
     * @param theLight The Element/Light|light that you wish to retrieve the type of.
     * @return
     */
    export function getLightType(theLight: light): number;

    /**
     * This function sets the color for a [[Element/Light|light]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setLightColor|MTASA Wiki}
     * @param theLight The Element/Light|light that you wish to set the color of.
     * @return
     */
    export function setLightColor(theLight: light, r: number, g: number, b: number): boolean;

    /**
     * This function sets the direction for a [[Element/Light|light]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setLightDirection|MTASA Wiki}
     * @param theLight The Element/Light|light that you wish to set the direction of.
     * @return
     */
    export function setLightDirection(theLight: light, x: number, y: number, z: number): boolean;

    /**
     * This function sets the radius for a [[Element/Light|light]] element.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setLightRadius|MTASA Wiki}
     * @param theLight The Element/Light|light that you wish to set the radius of.
     * @return
     */
    export function setLightRadius(theLight: Light, radius: number): boolean;

    /**
     * This function breaks a specific object.
     * @see {@link https://wiki.multitheftauto.com/wiki/breakObject|MTASA Wiki}
     * @param theObject an object element
     * @return * ''true'' if the object was successfully broken.
     * * * ''false'' if the object is not breakable, or a wrong object was given.
     */
    export function breakObject(theObject: object): boolean;

    /**
     * This function returns the mass of a specified object.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getObjectMass|MTASA Wiki}
     * @param theObject the object whose mass you want to get.
     * @return * A [[float]] representing the mass of the object.
     * * * ''false'' if invalid arguments were passed.
     * * * ''-1'' if object was never streamed in.
     */
    export function getObjectMass(theObject: object): number;

    /**
     * This function checks if an object / model ID is breakable.
     * @see {@link https://wiki.multitheftauto.com/wiki/isObjectBreakable|MTASA Wiki}
     * @return * ''true'' if the object is breakable.
     * * * ''false'' if the object is not breakable.
     */
    export function isObjectBreakable(theObject: object): boolean;

    /**
     * This function respawns a specific object.
     * @see {@link https://wiki.multitheftauto.com/wiki/respawnObject|MTASA Wiki}
     * @param theObject an object element
     * @return * ''true'' if the object was sucessfully respawned.
     * * * ''false'' if the object is not breakable, or a wrong object was given.
     */
    export function respawnObject(theObject: object): boolean;

    /**
     * This function sets an object to be breakable/unbreakable.
     * @see {@link https://wiki.multitheftauto.com/wiki/setObjectBreakable|MTASA Wiki}
     * @param breakable a boolean whether the object is breakable (true) or unbreakable (false).
     * @return * ''true'' if the object is now breakable.
     * * * ''false'' if it can't or if invalid arguments are passed.
     */
    export function setObjectBreakable(theObject: object, breakable: boolean): boolean;

    /**
     * This function sets the mass of a specified object. Changing the mass leads to a different movement behavior for especially dynamic objects.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setObjectMass|MTASA Wiki}
     * @param theObject the object whose mass will be set.
     * @param mass the new mass.
     * @return * ''true'' if the new mass value has been.
     * * * ''false'' otherwise.
     */
    export function setObjectMass(theObject: object, mass: number): boolean;

    /**
     * This function is used to toggle if an object should respawn after it got destroyed
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleObjectRespawn|MTASA Wiki}
     * @param theObject : the object you want to toggle the respawn from
     * @return * ''true'' when the it was changed successfully.
     * * * ''false'' otherwise.
     */
    export function toggleObjectRespawn(theObject: object, respawn: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getObjectProperty|MTASA Wiki}
     * @param theObject : the object you wish to get a property of.
     * @param property : the property you want to get the value of:  <div style="padding-left:20px">  * "all" - ''table'' with values of all properties below (OOP method: ''getProperties'')  </div>  {{Object Properties}}
     * @return On success: [[table]] for '''all''', 3 [[float|floats]] for '''center_of_mass''' or [[float]] for other properties
     * * On failure: ''false''
     */
    export function getObjectProperty(theObject: object, property: string): string;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setObjectProperty|MTASA Wiki}
     * @param theObject : the object you wish to change a property of.
     * @param property : the property you want to set the value of:  {{Object Properties}}
     * @param value : the new value for the property.
     * @return Returns ''true'' if the property was set successfully, ''false'' otherwise.
     */
    export function setObjectProperty(theObject: object, property: string, value: any): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/isObjectMoving|MTASA Wiki}
     * @param theObject The object
     * @return * ''true'' if the object is moving.
     * * * ''false'' if the object is not moving.
     */
    export function isObjectMoving(theObject: object): boolean;

    /**
     * This function checks if player's chat is visible.
     * @see {@link https://wiki.multitheftauto.com/wiki/isChatVisible|MTASA Wiki}
     * @return Returns ''true'' if the chat is visible, ''false'' otherwise.
     */
    export function isChatVisible(): boolean;

    /**
     * This function checks if the given ped can fall off bikes.
     * @see {@link https://wiki.multitheftauto.com/wiki/canPedBeKnockedOffBike|MTASA Wiki}
     * @param thePed the ped you want to check.
     * @return Returns ''true'' if the ped can be knocked off bikes, ''false'' if he cannot or an invalid element was passed.
     */
    export function canPedBeKnockedOffBike(thePed: ped): boolean;

    /**
     * This function retrieves the analog control state of a ped, as set by [[setPedAnalogControlState]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedAnalogControlState|MTASA Wiki}
     * @param thePed The ped you wish to retrieve the control state of.
     * @param controlName The control. See control names for a list of possible controls.  {{New feature/item|3.0160|1.5.7|20383|
     * @param rawValue A bool indicating if it should return the raw player input value (will always return script value for non-player peds).  }}
     * @return Returns a float between 0 ( full release ) and 1 ( full push ) indicating the amount the control is pushed.
     * * <section name="Client-side example" class="client" show="true">
     * * <syntaxhighlight lang="lua">
     * * x, y, z = getElementPosition(localPlayer)
     * * rotX, rotY, rotZ = getElementRotation(localPlayer)
     * * CJ = createPed(0, x, y, z)
     * * CJ2 = createPed(0, x, y, z)
     * * copcar = createVehicle(597, x, y+5, z+2)
     * * copcar2 = createVehicle(597, x+2, y+10, z+4)
     * * warpPedIntoVehicle(CJ2, copcar2, 0)
     * * warpPedIntoVehicle(CJ, copcar, 0)
     * * function onGetCJAnalogControlState()
     * * setPedAnalogControlState(CJ, "accelerate", 0.90)
     * * if getPedAnalogControlState(CJ, "accelerate", 0.90) then
     * * setPedAnalogControlState(CJ2, "brake_reverse", 0.90)
     * * end
     * * end
     * * addEventHandler("onClientRender", getRootElement(), onGetCJAnalogControlState)
     * * </syntaxhighlight>
     * * </section>
     * * <br /><br />
     * * * This example was created by '''Hydra'''.
     */
    export function getPedAnalogControlState(thePed: ped, controlName: string, rawValue?: boolean): number;

    /**
     * Gets the animation of a player or ped that was set using [[setPedAnimation]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedAnimation|MTASA Wiki}
     * @param thePed the player or ped you want to get the animations|animation of.
     * @return Returns two [[string|strings]]: the first is the name of the block, the second is the name of the animation. Returns ''false'' if there was an error or if the ped is not doing an animation.
     * * {{New feature/item|3.0160|1.5.7|20450|<syntaxhighlight lang="lua"> string, string, int, int, bool, bool, bool, int, bool getPedAnimation ( ped thePed )</syntaxhighlight>
     * * '''The function now returns 9 values in the same order as required by setPedAnimation:'''
     * * <syntaxhighlight lang="lua">string anim, string block, int time, bool loop, bool updatePosition, bool interruptable, bool freezeLastFrame, int blendTime, bool restoreTaskOnAnimEnd</syntaxhighlight>
     * * }}
     */
    export function getPedAnimation(thePed: ped): LuaMultiReturn<[string, string]>;

    /**
     * Returns the 3D world coordinates of a specific bone of a given ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedBonePosition|MTASA Wiki}
     * @param thePed the ped you want to inspect.
     * @param bone the number of the bone to get the position of.  [[Image:Bones.jpg|thumb|Bone numbers]]  <div style="border: 3px red solid; margin-bottom:3px; padding-left:5px;">
     * @return Returns the x, y, z world position of the bone.
     */
    export function getPedBonePosition(thePed: ped, bone: number): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets the current camera rotation of a [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedCameraRotation|MTASA Wiki}
     * @param thePed the ped to retrieve the camera rotation of.
     * @return Returns the camera rotation of the [[ped]] in degrees if successful. Returns ''false'' if an invalid element was passed.
     */
    export function getPedCameraRotation(thePed: ped): number;

    /**
     * Checks whether a ped or the localplayer has a certain control pressed.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedControlState|MTASA Wiki}
     * @param thePed the ped you want to check.
     * @param control the control to get the status of. See control names for a list of valid names.
     * @return Returns ''true'' if the ped is pressing the specified control, ''false'' if not or an invalid argument was passed.
     */
    export function getPedControlState(thePed: ped, control: string): boolean;

    /**
     * This function returns the current move state for the specified [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedMoveState|MTASA Wiki}
     * @param thePed The ped whose move state you want to know
     * @return Returns a [[string]] indicating the ped's move state, or ''false'' if the ped is not streamed in, the movement type is unknown, the ped is in a vehicle or the ped is invalid.
     * * {{Ped move states}}
     */
    export function getPedMoveState(thePed: ped): string;

    /**
     * This function returns the current oxygen level of the specified [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedOxygenLevel|MTASA Wiki}
     * @param thePed The ped whose oxygen level you want to check
     * @return A ''float'' with the oxygen level, ''false'' if an invalid ped was given.
     */
    export function getPedOxygenLevel(thePed: ped): number;

    /**
     * This function is used to get the name of a specified ped's current simplest [[task]].<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedSimplestTask|MTASA Wiki}
     * @param thePed : The ped whose task you want to retrieve.
     * @return Returns a string representing the name of the ped's simplest, active [[task]].
     */
    export function getPedSimplestTask(thePed: ped): string;

    /**
     * This function allows retrieval of where a ped's target is blocked. It will only be blocked if there is an obstacle within a ped's target range.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedTargetCollision|MTASA Wiki}
     * @param targetingPed This is the ped whose target collision you wish to retrieve
     * @return Returns three floats, ''x'',''y'',''z'', representing the position where the ped's target collides, or ''false'' if it was unsuccessful.
     */
    export function getPedTargetCollision(targetingPed: ped): LuaMultiReturn<[number, number, number]>;

    /**
     * This function allows retrieval of the position where a ped's target range ends, when he is aiming with a weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedTargetEnd|MTASA Wiki}
     * @param targetingPed the ped who is targeting whose target end you wish to retrieve
     * @return Returns three floats, ''x'',''y'',''z'', representing the position where the ped's target ends according to his range, or ''false'' if it was unsuccessful.
     */
    export function getPedTargetEnd(targetingPed: ped): LuaMultiReturn<[number, number, number]>;

    /**
     * This function allows retrieval of the position a ped's target range begins, when he is aiming with a weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedTargetStart|MTASA Wiki}
     * @param targetingPed The ped whose target start you wish to retrieve
     * @return Returns three floats, x,y,z, representing the position where the ped's target starts, or ''false'' if it was unsuccessful.
     */
    export function getPedTargetStart(targetingPed: ped): LuaMultiReturn<[number, number, number]>;

    /**
     * This function is used to get any simple or complex [[task]] of a certain type for a ped.
     * It can provide feedback on all tasks relating to a ped. For example, while jumping, [[getPedSimplestTask]] will return TASK_SIMPLE_IN_AIR. If you wanted to know specifically if the player has jumped, you would use this function. If you did you will discover that while jumping Primary task 3 is TASK_COMPLEX_JUMP.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedTask|MTASA Wiki}
     * @param thePed : The ped whose task you want to retrieve.
     * @param priority : A string determining which set of tasks you want to retrieve it from. This must be either primary or secondary.
     * @param taskType : An integer value representing the task type (or slot) you want to get the task from. Types can be:
     * @return Returns the name of the most complex task. See [[list of player tasks]] for valid strings. Returns ''false'' if invalid arguments are specified or if there is no task of the type specified.
     * * <br>
     * * {{New feature|3.0110|1.1|
     * * Returns between 1 and 4 strings. The first string contains the name of the most complex task, with simpler sub-tasks being named in the following strings. See [[list of player tasks]] for valid strings. Returns ''false'' if invalid arguments are specified or if there is no task of the type specified.
     * * }}
     */
    export function getPedTask(thePed: ped, priority: string, taskType: number): LuaMultiReturn<[string, string, string, string]>;

    /**
     * Gets the current voice of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedVoice|MTASA Wiki}
     * @param thePed the ped to get the voice of.
     * @return If successul, returns the current voice type name and the voice name of the ped (see [[ped voices]] for possible names). Returns ''false'' in case of failure.
     */
    export function getPedVoice(thePed: ped): LuaMultiReturn<[string, string]>;

    /**
     * Returns the world position of the muzzle of the weapon that a ped is currently carrying. The weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out.
     * The position may not be accurate if the ped is off screen.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedWeaponMuzzlePosition|MTASA Wiki}
     * @param thePed the ped whose weapon muzzle position to retrieve.
     * @return If successful, returns the x/y/z coordinates of the weapon muzzle. Returns ''false'' otherwise.
     */
    export function getPedWeaponMuzzlePosition(thePed: ped): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gives the specified weapon to the specified ped. This function can't be used on players, use [[giveWeapon]] for that.
     * This function is mainly useful for client side created peds however you can use it on a server side ped, though note that the weapon wouldn't be synced between clients unless your script gives the weapon to the ped on every client.
     * There is an optional argument to specify ammunition and whether to set as the current weapon. If you don't specify an ammo value it will give 30 ammo by default and for a melee weapon you can specify just 1 or above.
     * }}
     * *When setting ammo for [[Weapon|weapons in slot]] 0,1,10,11 or 12 the maximum ammo is 1
     * *When setting ammo for [[Weapon|weapons in slot]] 3,4,5 the ammo is added
     * *When setting ammo for [[Weapon|weapons in slot]] 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/givePedWeapon|MTASA Wiki}
     * @param thePed A ped element.
     * @param weapon A whole number integer that refers to a Weapon ID. Click Weapon|here for a list of possible weapon IDs.  {{OptionalArg}}
     * @param ammo A whole number integer serving as the ammo amount for the given weapon. For weapons that do not require ammo, such as melee, this should be at least 1.
     * @default 30
     * @param setAsCurrent A boolean value determining whether or not the weapon will be set as the peds currently selected weapon.
     * @default false
     * @return Returns ''true'' if weapon was successfully given to the ped, ''false'' otherwise.
     */
    export function givePedWeapon(thePed: ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

    /**
     * This function checks if the specified [[ped]] is dead or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedDead|MTASA Wiki}
     * @param thePed : the ped you want to check up on.
     * @return Returns ''true'' if the ped is dead, ''false'' otherwise.
     */
    export function isPedDead(thePed: ped): boolean;

    /**
     * This function checks if the specified ped is carrying out a certain [[List of player tasks|task]].
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedDoingTask|MTASA Wiki}
     * @param thePed : The ped you want to check.
     * @param taskName : A string containing the name of the List of player tasks|task youre checking for.
     * @return Returns ''true'' if the player is currently doing the task, ''false'' otherwise.
     */
    export function isPedDoingTask(thePed: ped, taskName: string): boolean;

    /**
     * This function is used to determine whether or not a ped is currently reloading their weapon. Useful to stop certain quick reload exploits.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedReloadingWeapon|MTASA Wiki}
     * @param thePed The ped you are checking.
     * @return Returns ''true'' if the ped is currently reloading a weapon, ''false'' otherwise.
     */
    export function isPedReloadingWeapon(thePed: ped): boolean;

    /**
     * [[Image:Targetingmarker.png|thumb|200px|Targeting marker]]
     * This function checks whether health target markers are drawn as set by [[setPedTargetingMarkerEnabled]] or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedTargetingMarkerEnabled|MTASA Wiki}
     * @return Returns ''true'' if the health target markers are enabled, ''false'' if not.
     */
    export function isPedTargetingMarkerEnabled(): boolean;

    /**
     * This sets the analog control state of a control for the local player.
     * To change the analog controls for a [[ped]], please use [[setPedAnalogControlState]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setAnalogControlState|MTASA Wiki}
     * @param control The control that you want to set the state of. See control names for a list of possible controls.
     * @param state A float between 0 and 1 indicating the amount the control is pressed. If no value is provided, the analog control is removed.  <noinclude>{{New feature/item|3.0300|1.5.8|20756|  *'''forceOverrideNextFrame: ''' A [[bool]] indicating if the player input should force fully overriden for the next frame.  }}</noinclude>
     * @return Returns ''true'' if the control state was successfully set, ''false'' otherwise.
     */
    export function setAnalogControlState(control: string, state?: number, forceOverrideNextFrame?: boolean): boolean;

    /**
     * This function allows you to set a ped's aim target to a specific point. If a ped is within a certain range defined by [[getPedTargetStart]] and [[getPedTargetEnd]] he will be targeted and shot.
     * ''Note: If you wish to make a ped shoot you must use this in conjunction with an equipped weapon and [[setPedControlState]].''
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedAimTarget|MTASA Wiki}
     * @param thePed The ped whose target you want to set. Only peds and remote players will work; this function has no effect on the local player.
     * @param x The x coordinate of the aim target point.
     * @param y The y coordinate of the aim target point.
     * @param z The z coordinate of the aim target point.
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setPedAimTarget(thePed: ped, x: number, y: number, z: number): boolean;

    /**
     * Sets an analog state of a specified [[ped]]'s control, as if they pressed or released it.
     * This function only works on [[ped]]s, to change the analog control state for a player, please use [[setAnalogControlState]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnalogControlState|MTASA Wiki}
     * @param thePed The ped you wish to set the control state of.
     * @param control The control that you want to set the state of. See control names for a list of possible controls.
     * @param state A float between 0 and 1 indicating the amount the control is pressed.
     * @return Returns ''true'' if the control state was successfully set, ''false'' otherwise.
     */
    export function setPedAnalogControlState(thePed: ped, control: string, state: number): boolean;

    /**
     * This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't confuse this with [[getCameraMatrix]], because that function is designed for fixed (scripted) camera moves.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedCameraRotation|MTASA Wiki}
     * @param thePed The ped whose camera rotation is to be changed.
     * @param cameraRotation The new direction that the ped will walk if you set their forwards control state. If the ped is the local player, it will also change where his camera is looking at if it isnt fixed (i.e. camera target is the local player).
     * @return Returns ''true'' if the camera rotation was changed, ''false'' otherwise.
     */
    export function setPedCameraRotation(thePed: ped, cameraRotation: number): boolean;

    /**
     * This function controls if a ped can fall of his bike by accident - namely by banging into a wall.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedCanBeKnockedOffBike|MTASA Wiki}
     * @param thePed the ped whose knockoffstatus is being changed
     * @param canBeKnockedOffBike true or false
     * @return
     */
    export function setPedCanBeKnockedOffBike(thePed: ped, canBeKnockedOffBike: boolean): boolean;

    /**
     * This function makes a [[ped]] or [[player]] press or release a certain control.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedControlState|MTASA Wiki}
     * @param thePed the ped you want to press or release a control.
     * @param control the name of the control of which to change the state. See control names for a list of valid names.
     * @param state the new control state. true means pressed, false is released.
     * @return Returns ''true'' if successful, ''false'' if otherwise.
     */
    export function setPedControlState(thePed: ped, control: string, state: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedEnterVehicle|MTASA Wiki}
     * @param thePed The player or ped to enter the vehicle.  **''Note: The player must be the local player.''  **''Note: The ped must be synced by the client. Use [[isElementSyncer]] clientside to check if the client is syncing. Use [[setElementSyncer]] serverside to change the syncer manually.''
     * @param passenger If set to true, the ped will enter as passenger in the nearest available seat, otherwise he will enter as driver.
     * @default false
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     * * When this function returns ''true'', the client will ask server for permission to enter a vehicle. Actually entering can still fail in the following cases
     * * *The function is used on a ped, but another client is not on version '''1.5.8 r20740''' or newer.
     * * *Another player or ped is already entering, exiting or jacking the same vehicle and seat.
     * * *Movement input or damage can interrupt the task. Use [[getPedTask]] to monitor what the ped is doing.
     * * This function returns ''false'' in the following cases
     * * *Invalid arguments were parsed.
     * * *The function is used on a ped, but the server is not on version '''1.5.8 r20740''' or newer.
     * * *Time passed since last enter/exit for this ped is less than 1500 ms.
     * * *[[onClientVehicleStartEnter]] was cancelled by a script.
     * * *The ped has an active TASK_PRIMARY [[task]]. Use [[getPedTask]] to monitor what the ped is doing.
     */
    export function setPedEnterVehicle(thePed: ped, theVehicle?: vehicle, passenger?: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedExitVehicle|MTASA Wiki}
     * @param thePed The player or ped to exit the vehicle.
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     * * When this function returns ''true'', the client will ask server for permission to exit a vehicle. Exiting can still fail in the following cases
     * * *The function is used on a ped, but another client is not on version '''1.5.8 r20740''' or newer.
     * * This function returns ''false'' in the following cases
     * * *Invalid arguments were parsed.
     * * *The function is used on a ped but the server is not on version '''1.5.8 r20740''' or newer.
     * * *Time passed since last enter/exit for this ped is less than 1500 ms.
     * * *The ped is getting jacked.
     */
    export function setPedExitVehicle(thePed: ped): boolean;

    /**
     * This function makes a players foot prints bloody.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedFootBloodEnabled|MTASA Wiki}
     * @param thePlayer The player to give bloody foot prints to.
     * @param enabled Boolean specifying whether or not to have bloody feet.
     * @return Returns ''true'' if changing the players bloody feet status worked.
     */
    export function setPedFootBloodEnabled(thePlayer: element, enabled: boolean): boolean;

    /**
     * This function checks if player feets are bleeding.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedFootBloodEnabled|MTASA Wiki}
     * @param thePlayer The player to give bloody foot prints to.
     * @return Returns ''true'' if feets are bleeding, '''false''' otherwise
     */
    export function isPedFootBloodEnabled(thePlayer: element): boolean;

    /**
     * Makes a ped turn his head and look at a specific world position or element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedLookAt|MTASA Wiki}
     * @param thePed the ped to change the lookat of.
     * @param x the x coordinate of the world position to look at.
     * @param y the y coordinate of the world position to look at.
     * @param z the z coordinate of the world position to look at.
     * @param time the time, in milliseconds, during which the ped will look at the target. Once this time has elapsed, he will look ahead again like before the function was applied. A time of 0 will immediately stop any lookat. A negative time will make the ped look at the target indefinitely.
     * @default 3000 [
     * @param blend the time, in milliseconds, during which the look will blend.
     * @default 1000
     * @param target if this argument is specified, the position arguments will be ignored and the peds gaze will follow the specified element instead. Can be a player, a vehicle, another ped etc.
     * @default nil
     * @return
     */
    export function setPedLookAt(thePed: ped, x: number, y: number, z: number, time?: number, blend?: number, target?: element): boolean;

    /**
     * This function allows you to set the oxygen level of a [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedOxygenLevel|MTASA Wiki}
     * @param thePed : the ped whose oxygen level you want to modify.
     * @param oxygen : the amount of oxygen you want to set on the ped. Native values are from 0 to 1000. Each of the stamina (22) and underwater stamina (225) Template:Stats|stat maximum adds a bonus of 1500. So the maximum oxygen level is 4000.
     * @return Returns ''true'' if the oxygen level was changed succesfully. Returns ''false'' if an invalid ped and/or oxygen level was specified.
     */
    export function setPedOxygenLevel(thePed: ped, oxygen: number): boolean;

    /**
     * [[Image:Targetingmarker.png|thumb|200px|Targeting marker]]
     * This function is used to toggle the health target marker on top of all pedestrians.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedTargetingMarkerEnabled|MTASA Wiki}
     * @param enabled A boolean denoting whether we want to enable (true) or disable (false) the markers.
     * @return Returns ''true'' if the markers were enabled, ''false'' if weren't or if invalid arguments are passed.
     */
    export function setPedTargetingMarkerEnabled(enabled: boolean): boolean;

    /**
     * Changes the voice of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedVoice|MTASA Wiki}
     * @param thePed the ped whose voice to change.
     * @param voiceType the voice type. See ped voices for possible types.
     * @param voiceName the voice name within the specified type. See ped voices for possible voices.
     * @return Returns ''true'' when the voice was successfully set, ''false'' otherwise.
     */
    export function setPedVoice(thePed: ped, voiceType: string, voiceName: string): boolean;

    /**
     * This function gets the player element of the client running the current script.
     * You can use the predefined variable '''localPlayer''' instead of typing getLocalPlayer()
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getLocalPlayer|MTASA Wiki}
     * @return Returns the local [[player]] element.
     */
    export function getLocalPlayer(): player;

    /**
     * This function gets the GUI bounding box of the radar map texture.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerMapBoundingBox|MTASA Wiki}
     * @return * If the player's map is showing, it returns four integers: ''minX'', ''minY'', ''maxX'', ''maxY''.  These are '''absolute''' position coordinates of where the player's map is drawn on the screen.
     * * ** ''minX, minY'' represent the world coordinates ''-3000, 3000'' (upper-left corner of the world map).
     * * ** ''maxX, maxY'' represent the world coordinates ''3000, -3000'' (lower-right corner of the world map).
     * * ** Negative values may be returned if these coordinates are off screen.
     * * * If the map is not showing, a ''false'' boolean value is returned.
     */
    export function getPlayerMapBoundingBox(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * This function can be used to check whether an hud component is visable or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerHudComponentVisible|MTASA Wiki}
     * @param component The component you wish to check. Valid values are:
     * @return Returns ''true'' if the component is visable, ''false'' if not.
     */
    export function isPlayerHudComponentVisible(component: string): boolean;

    /**
     * [[Image:MTAsa_Default_Map.png|thumb|224px|Screenshot of the default map]]
     * This function checks if the local player has their map showing.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMapVisible|MTASA Wiki}
     * @return Returns ''true'' if the player has the map visible, ''false'' otherwise.
     */
    export function isPlayerMapVisible(): boolean;

    /**
     * Resets the motion blur level on the clients screen to default value (36).
     * @see {@link https://wiki.multitheftauto.com/wiki/resetBlurLevel|MTASA Wiki}
     * @return Returns ''true'' if the blur level was reset successfully. Returns ''false'' otherwise.
     */
    export function resetBlurLevel(): boolean;

    /**
     * This function creates a projectile of the specified type on the specified coordinates.
     * *'''Model''' argument is not synchronized between clients. Clients differs from local player see always standard projectile model.
     * *'''Target''' argument can only be defined as a player or another projectile.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/createProjectile|MTASA Wiki}
     * @param creator The element representing creator of the projectile. In case you want the projectile to be synced for everybody creator must be the local player or his vehicle.
     * @param weaponType int representing the projectile weaponType (characteristics). Valid IDs are:  {{Projectiles}}  {{OptionalArg}}
     * @param posX , posY, posZ: float starting coordinates for the projectile. They are coordinates of creator by default.
     * @param force : float representing the starting force for throwable projectiles.
     * @default 1.0
     * @param target : element target used for heat seeking rockets.
     * @default nil
     * @param rotX , rotY, rotZ: float starting rotation for the projectile.
     * @param velX , velY, velZ: float starting velocity for the projectile.
     * @param model : Integer representing the projectiles model, uses default model for weaponType if not specified.
     * @return Returns a ''[[projectile]]'' element if [[projectile]] creation was successful. Returns ''false'' if unable to create a [[projectile]] (wrong weapon ID or projectiles limit was reached).
     */
    export function createProjectile(creator: element, weaponType: number, posX?: number, posY?: number, posZ?: number, force?: number, target?: element, rotX?: number, rotY?: number, rotZ?: number, velX?: number, velY?: number, velZ?: number, model?: number): projectile;

    /**
     * Get the time left before a projectile detonates.
     * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileCounter|MTASA Wiki}
     * @return Returns the the time in milliseconds to detonation which depending on the projectile type will do different things:
     * * * Grenades will explode when it hits 0
     * * * Teargas may be a duration timer
     * * * Both types of rockets will explode when it hits 0
     * * * Satchels restarts so I do not think it does anything
     */
    export function getProjectileCounter(projectile: projectile): number;

    /**
     * This function returns the creator of the specified projectile.
     * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileCreator|MTASA Wiki}
     * @param theProjectile The projectiles| projectile element which creator you want to retrieve.
     * @return Returns the element which created the projectile if successful, ''false'' otherwise.
     */
    export function getProjectileCreator(theProjectile: projectile): element;

    /**
     * This function returns the force of the specified projectile.
     * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileForce|MTASA Wiki}
     * @param theProjectile The projectiles| projectile element which force you want to retrieve.
     * @return Returns a [[float]] if successful, ''false'' otherwise.
     */
    export function getProjectileForce(theProjectile: projectile): number;

    /**
     * This function returns the target of the specified projectile.
     * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileTarget|MTASA Wiki}
     * @param theProjectile The projectiles| projectile element which target you want to retrieve.
     * @return Returns the [[element]] which is the projectile's target if the projectile is valid and can have a target (like a heat-seeking rocket), ''false'' otherwise.
     * * {{New feature/item|3.0141|1.4.0|6990|If the projectile is a satchel charge, returns the [[element]] at which it is glued to (or ''nil'' if it isn't glued to any).}}
     */
    export function getProjectileTarget(theProjectile: projectile): element;

    /**
     * This function returns the type of the specified projectile.
     * @see {@link https://wiki.multitheftauto.com/wiki/getProjectileType|MTASA Wiki}
     * @param theProjectile The Element/Projectile|projectile element which type you want to retrieve.
     * @return Returns an [[int]]eger over the type of the projectile or ''false'' if invalid arguments were passed.
     * * {{Projectiles}}
     */
    export function getProjectileType(theProjectile: projectile): number;

    /**
     * Will change the projectile counter timer which depending on the projectile type will do different things:
     * * Rockets and Grenades will explode when it hits 0
     * * Teargas may be a duration timer
     * * Satchels restart (we currently assume it doesn't cause an effect)
     * * Molotov will explode with search ground level when it hits 0
     * @see {@link https://wiki.multitheftauto.com/wiki/setProjectileCounter|MTASA Wiki}
     * @param projectile The projectile to edit the timer of.
     * @param timeToDetonate The time in milliseconds to detonation.
     * @return Returns ''true'' on success, ''false'' otherwise.
     */
    export function setProjectileCounter(projectile: projectile, timeToDetonate: number): boolean;

    /**
     * This function retrieves a resource's GUI element. The resource's GUI element is the element in the element tree which is the default parent of all GUI elements that belong to a particular resource. It has a predefined variable called '''guiRoot''', and each resource has one of these. You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceGUIElement|MTASA Wiki}
     * @param theResource the resource whose GUI element we are getting. If not specified, assumes the current resource.
     * @default getThisResource(
     * @return Returns the root GUI element that contains all the other GUI elements.
     */
    export function getResourceGUIElement(theResource: resource): element;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/createSearchLight|MTASA Wiki}
     * @param startX : the X coordinate where the searchlight light cone will start.
     * @param startY : the Y coordinate where the searchlight light cone will start.
     * @param startZ : the Z coordinate where the searchlight light cone will start.
     * @param endX : the X coordinate of the direction where the searchlight will point to.
     * @param endY : the Y coordinate of the direction where the searchlight will point to.
     * @param endZ : the Z coordinate of the direction where the searchlight will point to.
     * @param startRadius : the radius of the searchlights light cone in its beginning.
     * @param endRadius : the radius of the searchlights light cone in its end.  {{OptionalArg}}
     * @param renderSpot : if true, the searchlight will lighten the surface where it ends.
     * @default true
     * @return If every argument is correct and the limit of 1000 searchlights has not been reached, this function returns a [[Element/Searchlight|searchlight element]]. Otherwise, it returns ''false''.
     */
    export function createSearchLight(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, startRadius: number, endRadius: number, renderSpot?: boolean): searchlight;

    /**
     * This function gets the end position of a [[Element/Searchlight|searchlight]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightEndPosition|MTASA Wiki}
     * @param theSearchLight : the searchlight to get the position where the searchlights light cone ends.
     * @return If the specified searchlight element is valid, this function will return three ''float'', which are the three coordinates of searchlight's end position. If not, it will return ''false'' plus an error message.
     */
    export function getSearchLightEndPosition(theSearchLight: searchlight): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets the end radius of a [[Element/Searchlight|searchlight]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightEndRadius|MTASA Wiki}
     * @param theSearchLight : the searchlight to get the radius of the searchlights light cone in its end.
     * @return If the specified searchlight element is valid, this function will return one ''float'', which is the searchlight's end radius. If not, it will return ''false'' plus an error message.
     */
    export function getSearchLightEndRadius(theSearchLight: searchlight): number;

    /**
     * This function gets the start position of a [[Element/Searchlight|searchlight]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightStartPosition|MTASA Wiki}
     * @param theSearchLight : the searchlight to get the position where the searchlights light cone starts.
     * @return If the specified searchlight element is valid, this function will return three ''float'', which are the three coordinates of searchlight's start position. If not, it will return ''false'' plus an error message.
     */
    export function getSearchLightStartPosition(theSearchLight: searchlight): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets the start radius of a [[Element/Searchlight|searchlight]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightStartRadius|MTASA Wiki}
     * @param theSearchLight : the searchlight to get the radius of the searchlights light cone in its beginning.
     * @return If the specified searchlight element is valid, this function will return one ''float'', which is the searchlight's start radius. If not, it will return ''false'' plus an error message.
     */
    export function getSearchLightStartRadius(theSearchLight: searchlight): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightEndPosition|MTASA Wiki}
     * @param theSearchLight : the searchlight to modify the property of.
     * @param endX : the X coordinate where the searchlight light cone will end.
     * @param endY : the Y coordinate where the searchlight light cone will end.
     * @param endZ : the Z coordinate where the searchlight light cone will end.
     * @return If every argument is correct, this function returns ''true''. If not, it will return ''false'' plus an error message.
     */
    export function setSearchLightEndPosition(theSearchLight: searchlight, endX: number, endY: number, endZ: number): boolean;

    /**
     * This function sets the end radius of a [[Element/Searchlight|searchlight]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightEndRadius|MTASA Wiki}
     * @param endRadius : the radius of the searchlights light cone in its end.
     * @return If every argument is correct, this function returns ''true''. If not, it will return ''false'' plus an error message.
     */
    export function setSearchLightEndRadius(theSearchlight: searchlight, endRadius: number): boolean;

    /**
     * This function sets the start position of a [[Element/Searchlight|searchlight]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightStartPosition|MTASA Wiki}
     * @param theSearchLight : the searchlight to modify the property of.
     * @param startX : the X coordinate where the searchlight light cone will start.
     * @param startY : the Y coordinate where the searchlight light cone will start.
     * @param startZ : the Z coordinate where the searchlight light cone will start.
     * @return If every argument is correct, this function returns ''true''. If not, it will return ''false'' plus an error message.
     */
    export function setSearchLightStartPosition(theSearchLight: searchlight, startX: number, startY: number, startZ: number): boolean;

    /**
     * This function sets the start radius of a [[Element/Searchlight|searchlight]] element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightStartRadius|MTASA Wiki}
     * @param startRadius : the radius of the searchlights light cone in its beginning.
     * @return If every argument is correct, this function returns ''true''. If not, it will return ''false'' plus an error message.
     */
    export function setSearchLightStartRadius(theSearchlight: searchlight, startRadius: number): boolean;

    /**
     * This functions creates a notification ballon on the desktop.
     * @see {@link https://wiki.multitheftauto.com/wiki/createTrayNotification|MTASA Wiki}
     * @param notificationText The text to send in the notification.
     * @param iconType The notification icon type. Possible values are: default (the MTA icon), info, warning, error
     * @default "default"
     * @param useSound A boolean value indicating whether or not to play a sound when receiving the notification.
     * @default true
     * @return Returns ''true'' if the notification is correctly created, ''false'' otherwise.
     */
    export function createTrayNotification(notificationText: string, iconType?: string, useSound?: boolean): boolean;

    /**
     * This function ensures the requested resource file is correct and then triggers [[onClientFileDownloadComplete]].  If the file has been previously downloaded and the CRC matches, the file will not be downloaded again but [[onClientFileDownloadComplete]] will still run. The '''file''' should also be included in the resource meta.xml with the '''download''' attribute set to "false", see [[meta.xml]] for more details.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/downloadFile|MTASA Wiki}
     * @param fileName : A string referencing the name of the file to download
     * @return Returns ''true'' if file download has been queued, ''false'' otherwise.
     */
    export function downloadFile(fileName: string): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getKeyboardLayout|MTASA Wiki}
     * @return Returns a ''table'' with keyboard layout properties:
     * * {| class="wikitable" style="cellpadding: 10px;"
     * * |-
     * * ! Property || Values and description
     * * |-
     * * | <code>readingLayout</code> ||
     * *     {| class="prettytable"
     * *     |-
     * *     | <code>"ltr"</code> || Left to right (English)
     * *     |-
     * *     | <code>"rtl"</code> || Right to left (Arabic, Hebrew)
     * *     |-
     * *     | <code>"ttb-rtl-ltr"</code> || Either read vertically from top to bottom with columns going from right to left, or read in horizontal rows from left to right, as for the Japanese (Japan) locale.
     * *     |-
     * *     | <code>"ttb-ltr"</code> || Read vertically from top to bottom with columns going from left to right, as for the Mongolian (Mongolian) locale.
     * *     |}
     * * |}
     */
    export function getKeyboardLayout(): table;

    /**
     * This function gets the player's localization setting as set in the MTA client.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getLocalization|MTASA Wiki}
     * @return Returns a [[table]] with the following entries:
     * * *'''code :''' The language code ''(eg. "en_US" for "English (United States)" or "ar" for "Arabic")''.
     * * *'''name :''' The name of the language ''(eg. "English (United States)" or "Arabic")''.
     */
    export function getLocalization(): table;

    /**
     * This function returns a boolean value whether the client has enabled tray notifications in his settings or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isTrayNotificationEnabled|MTASA Wiki}
     * @return Returns ''true'' if the tray notifications are enabled in the settings, ''false'' otherwise.
     */
    export function isTrayNotificationEnabled(): boolean;

    /**
     * This function sets the players clipboard text (what appears when you paste with CTRL + V) Note that there is no getClipBoard function for safety reasons.
     * @see {@link https://wiki.multitheftauto.com/wiki/setClipboard|MTASA Wiki}
     * @param theText The new text to be in the players clipboard when the player pastes with CTRL + V.
     * @return Returns ''true'' if the text in the clip board was set correctly.
     */
    export function setClipboard(theText: string): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setWindowFlashing|MTASA Wiki}
     * @return
     */
    export function setWindowFlashing(shouldFlash: boolean, count?: number): boolean;

    /**
     * This function decrypts given [https://en.wikipedia.org/wiki/Base64 base64] representation of encrypted data using the [https://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm Tiny Encryption Algorithm].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/teaDecode|MTASA Wiki}
     * @param data The block of data you want to decrypt
     * @param key The key that should be used for decryption (Only first 16 characters are used)
     * @return Returns string containing the decrypted data if the decryption process was successfully completed, ''false'' otherwise.
     */
    export function teaDecode(data: string, key: string): string;

    /**
     * This functions performs the [https://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm Tiny Encryption Algorithm] on the given string and returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the encrypted string.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/teaEncode|MTASA Wiki}
     * @param text The string you want to encrypt. (See second example if you want to encode binary data)
     * @param key The key that should be used for encryption (Only first 16 characters are used)
     * @return Returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the encrypted string if the encryption process was successfully completed, ''false'' otherwise.
     */
    export function teaEncode(text: string, key: string): string;

    /**
     * *This is different to [[getVehicleOverrideLights]] because this function will return '''true''' if the lights were turned on by natural causes.
     * * Unless [[setVehicleOverrideLights]] is used, vehicles always automatically disable their lights at 06:25 and enable them at 20:26.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/areVehicleLightsOn|MTASA Wiki}
     * @param theVehicle : the vehicle you wish to retrieve the lights state of.
     * @return Returns ''true'' if the lights are on, ''false'' otherwise.
     */
    export function areVehicleLightsOn(theVehicle: vehicle): boolean;

    /**
     * This function gets the state of the helicopter blades collisions on the specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getHeliBladeCollisionsEnabled|MTASA Wiki}
     * @param theVehicle The vehicle that will be checked.
     * @return Returns ''true'' if the collisions are enabled for specified vehicle, ''false'' if the collisions aren't enabled for the specified vehicle, if the vehicle is not a helicopter or if invalid arguments are specified.
     */
    export function getHeliBladeCollisionsEnabled(theVehicle: vehicle): boolean;

    /**
     * Retrieves the speed at which the rotor of a helicopter rotates.
     * @see {@link https://wiki.multitheftauto.com/wiki/getHelicopterRotorSpeed|MTASA Wiki}
     * @param heli the helicopter element to get the rotor speed of.
     * @return Returns the rotor speed if successful. This is 0 when the helicopter is parked, and about 0.2 when it is fully spun up. It can be negative if the rotor rotates counter-clockwise. Returns ''false'' in case of failure (an invalid element or a vehicle element that is not a helicopter was passed).
     */
    export function getHelicopterRotorSpeed(heli: vehicle): number;

    /**
     * Use this to get the value of a vehicles adjustable property. This property relates to movable parts of a model, for example hydra jets or dump truck tray.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleAdjustableProperty|MTASA Wiki}
     * @param theVehicle The vehicle you want to get the adjustable property of.
     * @return Returns a value from 0 upwards representing adjustment. 0 is default position. Maximum varies per vehicle, for example hydra horizontal flight is 5000, while dump truck tray max tilt is 2500. Or returns ''false'' if the vehicle passed to the function is invalid.
     */
    export function getVehicleAdjustableProperty(theVehicle: vehicle): number;

    /**
     * This function gets the component position of a [[vehicle]]. The vehicle must be streamed in.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentPosition|MTASA Wiki}
     * @param theVehicle The vehicle you wish to get component position of.
     * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the model file of the component you wish to modify)  {{New feature/item|3.0141|1.4.0|7013|
     * @param base A string representing what the returned position is relative to. It can be one of the following values:
     * @default "root"
     * @return Returns three ''floats'' indicating the position of the component, ''x'', ''y'' and ''z'' respectively.
     */
    export function getVehicleComponentPosition(theVehicle: vehicle, theComponent: string, base?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets the component rotation of a [[vehicle]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentRotation|MTASA Wiki}
     * @param theVehicle The vehicle you wish to get component rotation of.
     * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the model file of the component you wish to modify)  {{New feature/item|3.0141|1.4.0|7013|
     * @param base A string representing what the returned rotation is relative to. It can be one of the following values:
     * @default "parent"
     * @return Returns three ''floats'' indicating the rotation of the component, ''x'', ''y'' and ''z'' respectively.
     */
    export function getVehicleComponentRotation(theVehicle: vehicle, theComponent: string, base?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets the component scale of a [[vehicle]].}}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentScale|MTASA Wiki}
     * @param theVehicle The vehicle you wish to get component scale of.
     * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @param base A string representing what the returned scale is relative to. It can be one of the following values:
     * @default "root"
     * @return Returns three ''floats'' indicating the scale of the component, ''x'', ''y'' and ''z'' respectively.
     */
    export function getVehicleComponentScale(theVehicle: vehicle, theComponent: string, base?: string): LuaMultiReturn<[number, number, number]>;

    /**
     * This function get component visibility for [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponentVisible|MTASA Wiki}
     * @param theVehicle The vehicle you wish to get component visibility of.
     * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @return Returns a ''bool'' indicating the visible state of the component.
     */
    export function getVehicleComponentVisible(theVehicle: vehicle, theComponent: string): boolean;

    /**
     * This function gets a table of the components currently on a [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleComponents|MTASA Wiki}
     * @param theVehicle The vehicle you wish to get the Vehicle_Components|components of.
     * @return Returns a ''table'' containing the name of the component as the key and visibility flag of that component as the value
     */
    export function getVehicleComponents(theVehicle: vehicle): table;

    /**
     * Gets the specified vehicle's current gear.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleCurrentGear|MTASA Wiki}
     * @param theVehicle the vehicle to get the gear of
     * @return Returns the gear if successful, ''false'' otherwise.
     */
    export function getVehicleCurrentGear(theVehicle: vehicle): number;

    /**
     * This function returns the position of the dummy for the given vehicle.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleDummyPosition|MTASA Wiki}
     * @param theVehicle The vehicle you want to get the dummy positions from
     * @param dummy The dummy whose position you want to get
     * @return Returns three floats indicating the position ''x'', ''y'' and ''z'' of the vehicle's dummy. It returns ''false'' otherwise.
     * * This is a command to get the position of the player's vehicle dummy position specified as an argument.
     * * <syntaxhighlight lang="lua">
     * * function getDummyPosition(cmd, dummy)
     * *     if (not dummy) then
     * *         return false
     * *     end
     * *     local veh = getPedOccupiedVehicle(localPlayer)
     * *     if (not veh) then
     * *         outputChatBox("You should be in a vehicle to use this command", 255, 25, 25)
     * *         return false
     * *     end
     * *     local x, y, z = getVehicleDummyPosition(veh, dummy)
     * *     outputChatBox("X: "..x..", Y: "..y..", Z: "..z, 0, 255, 0)
     * * end
     * * addCommandHandler("getdummy", getDummyPosition)
     * * </syntaxhighlight>
     */
    export function getVehicleDummyPosition(theVehicle: vehicle, dummy: string): LuaMultiReturn<[number, number, number]>;

    /**
     * Retrieves the current gravity vector of a vehicle. This is the direction in which the vehicle falls, also the cameras of any passengers will be rotated to match it.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleGravity|MTASA Wiki}
     * @param theVehicle the vehicle to retrieve the gravity vector of.
     * @return Returns the x, y and z components of the gravity vector if successful, ''false'' otherwise.
     */
    export function getVehicleGravity(theVehicle: vehicle): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets position of the dummies contained in a vehicle model.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelDummyPosition|MTASA Wiki}
     * @param modelID : The model ID which you want to apply the change to
     * @param dummy : The dummy whose position you want to get
     * @return Returns three floats indicating the position ''x'', ''y'' and ''z'' of given dummy. It returns ''false'' otherwise.
     */
    export function getVehicleModelDummyPosition(modelID: number, dummy: string): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets the default position of the dummies contained in a vehicle model.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelDummyDefaultPosition|MTASA Wiki}
     * @param modelID : The model ID which you want to apply the change to
     * @param dummy : The dummy whose position you want to get
     * @return Returns three floats indicating the default position ''x'', ''y'' and ''z'' of the given dummy. It returns ''false'' otherwise.
     */
    export function getVehicleModelDummyDefaultPosition(modelID: number, dummy: string): LuaMultiReturn<[number, number, number]>;

    /**
     * This function returns the position of the exhaust fumes the vehicle model emits.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelExhaustFumesPosition|MTASA Wiki}
     * @param modelID : The vehicle model ID.
     * @return Returns the position of the exhaust fumes if everything went fine or ''false'' otherwise.
     */
    export function getVehicleModelExhaustFumesPosition(modelID: number): LuaMultiReturn<[number, number, number]>;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelWheelSize|MTASA Wiki}
     * @param vehicleModel : The Vehicle IDs|vehicle model ID.
     * @param wheelGroup : The group of wheels of the vehicle model to retrieve their size value. If not specified, it defaults to all_wheels. The following values are supported:
     * @return Returns a decimal number or a table, depending on the specified wheel group. If the specified vehicle model ID or wheel group are not valid, an error is raised instead. The meaning of the wheel size values is documented in [[setVehicleModelWheelSize]].
     */
    export function getVehicleModelWheelSize(vehicleModel: number, wheelGroup?: string): number | table;

    /**
     * This function gets the nitro count of the [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleNitroCount|MTASA Wiki}
     * @param theVehicle The vehicle which you want to get a nitro count.
     * @return Returns ''an integer'' determining the amount of nitro counts of the vehicle, ''false'' if there is no nitro in the vehicle.
     */
    export function getVehicleNitroCount(theVehicle: vehicle): number;

    /**
     * This function gets the nitro level of the [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleNitroLevel|MTASA Wiki}
     * @param theVehicle The vehicle, which you want to get a nitro level.
     * @return Returns ''a float'' determining the nitro level (ranges from 0.0001 to 1.0) of the vehicle, ''false'' if there is no nitro in the vehicle.
     */
    export function getVehicleNitroLevel(theVehicle: vehicle): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleWheelFrictionState|MTASA Wiki}
     * @param theVehicle The vehicle that you wish to get the wheel friction state.
     * @param wheel The wheel you want to check. (0: front left, 1: rear left, 2: front right, 3: rear right)
     * @return Returns a [[int]] indicating the wheel friction state. This value can be:
     * * * '''0:''' Normal friction
     * * * '''1:''' Slip with acceleration (only for driving wheels)
     * * * '''2:''' Slip without acceleration
     * * * '''3:''' Locked wheel (on brake on handbrake).
     */
    export function getVehicleWheelFrictionState(theVehicle: vehicle, wheel: number): number;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleWheelScale|MTASA Wiki}
     * @param theVehicle : The vehicle to get its wheel scale of.
     * @return Returns the wheel scale of the specified vehicle as a decimal number, or an error if the vehicle is invalid. For more information about the returned number, see [[setVehicleWheelScale]].
     */
    export function getVehicleWheelScale(theVehicle: vehicle): number;

    /**
     * This function checks if a [[Element/Vehicle|train]] is a chain engine (moves the rest of the chain's carriages) or not.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isTrainChainEngine|MTASA Wiki}
     * @param theTrain a Element/Vehicle|train to check if its a chain engine or not.
     * @return * ''true'' if a [[Element/Vehicle|train]] was passed to the function and if it's a chain engine.
     * * * ''false'' otherwise.
     */
    export function isTrainChainEngine(theTrain: vehicle): boolean;

    /**
     * This function checks if nitro is activated on the [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleNitroActivated|MTASA Wiki}
     * @param theVehicle The vehicle, which you want to check for an activation.
     * @return Returns ''true'' if the nitro is currently activated on the vehicle, ''false'' otherwise.
     */
    export function isVehicleNitroActivated(theVehicle: vehicle): boolean;

    /**
     * This function checks if nitro is recharging on the [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleNitroRecharging|MTASA Wiki}
     * @param theVehicle The vehicle, which you want to check for recharging.
     * @return Returns ''true'' if the nitro is currently recharging on the vehicle, ''false'' otherwise.
     */
    export function isVehicleNitroRecharging(theVehicle: vehicle): boolean;

    /**
     * This function returns a [[boolean]] whether the [[vehicle]]'s wheel is on ground (true) or in air (false).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleWheelOnGround|MTASA Wiki}
     * @param theVehicle The vehicle, which you want to check.
     * @return Returns ''true'' if the vehicle wheel is on ground/collided, ''false'' otherwise.
     */
    export function isVehicleWheelOnGround(theVehicle: vehicle, int: string): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleWindowOpen|MTASA Wiki}
     * @return
     */
    export function isVehicleWindowOpen(theVehicle: vehicle, window: number): boolean;

    /**
     * This function reset to default component position for [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleComponentPosition|MTASA Wiki}
     * @param theVehicle The vehicle you wish to reset component position.
     * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @return Returns ''true'' if the position of the component was reset, ''false'' otherwise.
     */
    export function resetVehicleComponentPosition(theVehicle: vehicle, theComponent: string): boolean;

    /**
     * This function reset to default component rotation for [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleComponentRotation|MTASA Wiki}
     * @param theVehicle The vehicle you wish to reset component rotation.
     * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @return Returns ''true'' if the rotation of the component was reset, ''false'' otherwise.
     */
    export function resetVehicleComponentRotation(theVehicle: vehicle, theComponent: string): boolean;

    /**
     * This function reset to default component scale for [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleComponentScale|MTASA Wiki}
     * @param theVehicle The vehicle you wish to reset component scale.
     * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @return Returns ''true'' if the scale of the component was reset, ''false'' otherwise.
     */
    export function resetVehicleComponentScale(theVehicle: vehicle, theComponent: string): boolean;

    /**
     * This function resets the vehicle dependent dummy positions to the vehicle's current model dummy positions.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleDummyPositions|MTASA Wiki}
     * @param theVehicle The vehicle to reset
     * @return Returns ''true'' for success, ''false'' otherwise.
     */
    export function resetVehicleDummyPositions(theVehicle: vehicle): boolean;

    /**
     * This function changes the state of the helicopter blades collisions on the specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setHeliBladeCollisionsEnabled|MTASA Wiki}
     * @param theVehicle The helicopter that will have the blades collisions set.
     * @param collisions The state of the helicopter blades collisions.
     * @return Returns ''true'' if the collisions are set for the specified vehicle, ''false'' if the collisions can't be set for the specified vehicle, if the vehicle is not a helicopter or if invalid arguments are specified.
     */
    export function setHeliBladeCollisionsEnabled(theVehicle: vehicle, collisions: boolean): boolean;

    /**
     * Sets the rotor speed of a helicopter.
     * @see {@link https://wiki.multitheftauto.com/wiki/setHelicopterRotorSpeed|MTASA Wiki}
     * @param heli the helicopter to adjust the rotor of.
     * @param speed the new rotor speed. Usual values are 0 if the helicopter stands still, or 0.2 if the rotor is fully spun up. Higher values than normal will not affect the helicopters handling. Negative values are allowed and will make the rotor spin in the opposite direction (pushing the helicopter down).
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setHelicopterRotorSpeed(heli: vehicle, speed: number): boolean;

    /**
     * This function is used for adjusting the movable parts of a model, for example hydra jets or dump truck tray.
     * This function only works on vehicles with adjustable properties.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleAdjustableProperty|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the adjustable property of.
     * @param value : A value from 0 between ?. (Set the adjustable value between 0 and N. 0 is the default value. It is possible to force the setting beyond default maximum, for example setting above 5000 on the dump truck (normal max 2500) will cause the tray to be fully vertical.)
     * @return Returns true if the adjustable property was set, ''false'' otherwise.
     */
    export function setVehicleAdjustableProperty(theVehicle: element, value: number): boolean;

    /**
     * This function sets the component position of a [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentPosition|MTASA Wiki}
     * @param theVehicle The vehicle you wish to set component position.
     * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @param posX The new x position of this component.
     * @param posY The new y position of this component.
     * @param posZ The new z position of this component.  {{New feature/item|3.0141|1.4.0|7013|
     * @param base : A string representing what the supplied position (posX, posY, posZ) is relative to. It can be one of the following values:
     * @default "root"
     * @return Returns ''true'' if component position was set successfully, ''false'' otherwise.
     */
    export function setVehicleComponentPosition(theVehicle: vehicle, theComponent: string, posX: number, posY: number, posZ: number, base?: string): boolean;

    /**
     * This function sets the component rotation of a [[vehicle]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentRotation|MTASA Wiki}
     * @param theVehicle The vehicle you wish to set component rotation of.
     * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @param rotX The components rotation around the x axis in degrees.
     * @param rotY The components rotation around the y axis in degrees.
     * @param rotZ The components rotation around the z axis in degrees.  {{New feature/item|3.0141|1.4.0|7013|
     * @param base A string representing what the supplied rotation (rotX, rotY, rotZ) is relative to. It can be one of the following values:
     * @default "parent"
     * @return Returns ''true'' if the component rotation was set successfully, ''false'' otherwise.
     */
    export function setVehicleComponentRotation(theVehicle: vehicle, theComponent: string, rotX: number, rotY: number, rotZ: number, base?: string): boolean;

    /**
     * This function sets the component scale of a [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentScale|MTASA Wiki}
     * @param theVehicle The vehicle you wish to set component scale.
     * @param theComponent A Vehicle_Components|vehicle component (this is the frame name from the model file of the component you wish to modify)
     * @param scaleX The new x scale of this component.
     * @param scaleY The new y scale of this component.
     * @param scaleZ The new z scale of this component.
     * @param base : A string representing what the supplied scale (scaleX, scaleY, scaleZ) is relative to. It can be one of the following values:
     * @default "root"
     * @return Returns ''true'' if component scale was set successfully, ''false'' otherwise.
     */
    export function setVehicleComponentScale(theVehicle: vehicle, theComponent: string, scaleX: number, scaleY: number, scaleZ: number, base?: string): boolean;

    /**
     * This function sets component visibility for [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleComponentVisible|MTASA Wiki}
     * @param theVehicle The vehicle you wish to set component visibility of.
     * @param theComponent A Vehicle_Components|vehicle component (this is the components frame name (also called dummy) from the vehicle models DFF file of which you want to manipulate components)
     * @param visible a bool which determines if the component should be visible
     * @return Returns a ''bool'' indicating if the visiblity was changed successfully.
     */
    export function setVehicleComponentVisible(theVehicle: vehicle, theComponent: string, visible: boolean): boolean;

    /**
     * This function sets the position of the dummy for the given vehicle.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDummyPosition|MTASA Wiki}
     * @param theVehicle The vehicle you want to set the dummy position for
     * @param dummy The dummy whose position you want to set
     * @param x , y, z The new dummy position
     * @return Returns ''true'' for success, ''false'' otherwise.
     */
    export function setVehicleDummyPosition(theVehicle: vehicle, dummy: string, x: number, y: number, z: number): boolean;

    /**
     * Sets the gravity vector of a vehicle. The vehicle will fall in this direction, and the camera of any occupants will also be rotated to match it. Can be used for e.g. driving on walls or upside down on ceilings.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleGravity|MTASA Wiki}
     * @param theVehicle the vehicle of which to change the gravity.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setVehicleGravity(theVehicle: vehicle, x: number, y: number, z: number): boolean;

    /**
     * This function sets the position of the dummies contained in a vehicle model. Use [[setVehicleComponentPosition]] to adjust the vehicle component positions.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleModelDummyPosition|MTASA Wiki}
     * @param modelID : The model ID which you want to apply the change to
     * @param dummy : The dummy whose position you want to change
     * @return Returns ''true'' if everything went fine, ''false'' otherwise.
     */
    export function setVehicleModelDummyPosition(modelID: number, dummy: string, x: number, y: number, z: number): boolean;

    /**
     * This function sets the position of the exhaust fumes the vehicle model emits. Use [[setVehicleComponentPosition]] to adjust the exhaust position.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleModelExhaustFumesPosition|MTASA Wiki}
     * @param modelID : The model ID which you want to apply the change to
     * @param posX , posY, posZ: The desired position
     * @return Returns ''true'' if everything went fine, ''false'' otherwise.
     */
    export function setVehicleModelExhaustFumesPosition(modelID: number, posX: number, posY: number, posZ: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleModelWheelSize|MTASA Wiki}
     * @param vehicleModel : The Vehicle IDs|vehicle model ID.
     * @param wheelGroup : The group of wheels of the vehicle model that will have its size set by this function. The following values are supported:
     * @param wheelSize : The wheel size value to set. Default GTA values for automobiles usually are around 0.7. It must be greater than 0.
     * @return Returns ''true'' if the size for the specified wheel group and vehicle model has been set successfully, or an error if some parameter is invalid.
     */
    export function setVehicleModelWheelSize(vehicleModel: number, wheelGroup: string, wheelSize: number): boolean;

    /**
     * This function activates or deactivates the nitro on the specified [[vehicle]], like if a player pressed the button for activating nitro.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleNitroActivated|MTASA Wiki}
     * @param theVehicle The vehicle to activate or deactivate the nitro on.
     * @param state true if you want to activate the nitro, false if you want to disable it.
     * @return Returns ''true'' if the nitro activation state was modified successfully, ''false'' otherwise.
     */
    export function setVehicleNitroActivated(theVehicle: vehicle, state: boolean): boolean;

    /**
     * This function sets how many times a player can activate the nitro on a specified [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleNitroCount|MTASA Wiki}
     * @param theVehicle : the vehicle which you want to modify how many times a player can use its nitro.
     * @param count : how many times should the player be able to use the nitro of this vehicle (from 0-100 times; 0 means that it cant be used and 101 means that it can be used infinite times).
     * @return Returns ''true'' if the nitro count was set successfully to the vehicle, ''false'' otherwise.
     */
    export function setVehicleNitroCount(theVehicle: vehicle, count: number): boolean;

    /**
     * This function sets the nitro level of the [[vehicle]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleNitroLevel|MTASA Wiki}
     * @param theVehicle The vehicle, which you want to set.
     * @param level Nitro level you want to set (ranges from 0.0001 to 1.0).
     * @return Returns ''true'' if the nitro level was set successfully to the vehicle, ''false'' otherwise.
     */
    export function setVehicleNitroLevel(theVehicle: vehicle, level: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleWheelScale|MTASA Wiki}
     * @param theVehicle : The vehicle whose wheel scale you wish to modify.
     * @param wheelScale : The wheel scale value to set.
     * @return Returns ''true'' if the wheel scale has been set successfully, or an error if some parameter is invalid.
     */
    export function setVehicleWheelScale(theVehicle: vehicle, wheelScale: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleWindowOpen|MTASA Wiki}
     * @return
     */
    export function setVehicleWindowOpen(theVehicle: vehicle, window: number, open: boolean): boolean;

    /**
     * This function allows you to retrieve the water level from a certain location. The water level is 0 in most places though it can vary (e.g. it's higher near the dam).
     * @see {@link https://wiki.multitheftauto.com/wiki/getWaterLevel|MTASA Wiki}
     * @param bCheckWaves Include the water levels of waves in the ocean, lakes and ...
     * @default false
     * @return Returns an ''integer'' of the water level if the [[localPlayer]]/position is near the water (-3 to 20 on the Z coordinate) else ''false'' if there's no water near the [[localPlayer]]/position.
     */
    export function getWaterLevel(posX: number, posY: number, posZ: number, bCheckWaves?: boolean): number;

    /**
     * This function determines whether [[water]] is drawn last in the rendering order.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isWaterDrawnLast|MTASA Wiki}
     * @return Returns ''true'' if water is drawn last in the rendering order, ''false'' otherwise.
     */
    export function isWaterDrawnLast(): boolean;

    /**
     * This function changes the [[water]] rendering order.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setWaterDrawnLast|MTASA Wiki}
     * @param bEnabled : A boolean value determining whether water should be drawn last.
     * @return Returns ''true'' if the rendering order was changed successfully, ''false'' otherwise.
     */
    export function setWaterDrawnLast(bEnabled: boolean): boolean;

    /**
     * Creates a [[Element/Weapon|custom weapon]] that can fire bullets. '''Do not confuse this with player held weapons'''.
     * @see {@link https://wiki.multitheftauto.com/wiki/createWeapon|MTASA Wiki}
     * @param theType The weapon type which can be:  {{Custom Weapon Types}}
     * @param x The x position to create the weapon.
     * @param y The y position to create the weapon.
     * @param z The z position to create the weapon.
     * @return Returns a [[Element/Weapon|custom weapon]] element, which represents a weapon floating at that position.
     */
    export function createWeapon(theType: string, x: number, y: number, z: number): weapon;

    /**
     * Fires one shot from a [[Element/Weapon|custom weapon]].
     * @see {@link https://wiki.multitheftauto.com/wiki/fireWeapon|MTASA Wiki}
     * @param theWeapon The weapon to be fired.
     * @return Returns ''true'' if the shot weapon is valid and therefore the shot was fired, ''false'' otherwise.
     */
    export function fireWeapon(theWeapon: weapon): boolean;

    /**
     * This function gets the total ammo a [[Element/Weapon|custom weapon]] has.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponAmmo|MTASA Wiki}
     * @param theWeapon : The weapon to get the ammo of.
     * @return Returns an [[int|integer]] containing how many ammo left has the weapon. Returns ''false'' if an error occured.
     */
    export function getWeaponAmmo(theWeapon: weapon): number;

    /**
     * This function gets the amount of ammo left in a [[Element/Weapon|custom weapon]]'s magazine/clip.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponClipAmmo|MTASA Wiki}
     * @param theWeapon the weapon to get the clip ammo of.
     * @return Returns the amount of ammo in the [[Element/Weapon|custom weapon]]'s clip, ''false'' if an error occured.
     */
    export function getWeaponClipAmmo(theWeapon: weapon): number;

    /**
     * This gets the firing rate to be used when a [[Element/Weapon|custom weapon]] opens fire.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponFiringRate|MTASA Wiki}
     * @param theWeapon The weapon to modify the firing rate of.
     * @return Returns an ''integer'' with the firing rate of the custom weapon, ''false'' otherwise.
     */
    export function getWeaponFiringRate(theWeapon: weapon): number;

    /**
     * This function gets the flags of a [[Element/Weapon|custom weapon]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponFlags|MTASA Wiki}
     * @param theWeapon the weapon to get the flag of.
     * @param theFlag the weapon flag to get:
     * @return Returns the ''true'' or ''false'' on success (''flags'' flag returns 8 values) if the flag is enabled or not. Returns ''false'' if the weapon element isn't valid or an error occured.
     */
    export function getWeaponFlags(theWeapon: weapon, theFlag: string): boolean;

    /**
     * This function gets the owner of a [[Element/Weapon|custom weapon]]. Weapon ownership system was, however, disabled, so this function always returns ''false''. Please refer to [[setWeaponOwner]] for details.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponOwner|MTASA Wiki}
     * @param theWeapon The weapon to get the owner of.
     * @return This function was intended to return the [[player]] which owns the [[Element/Weapon|custom weapon]], and ''false'' if an error occured. However, at the moment it always returns ''false''.
     */
    export function getWeaponOwner(theWeapon: weapon): boolean;

    /**
     * This function gets the state of a [[Element/Weapon|custom weapon]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponState|MTASA Wiki}
     * @param theWeapon the Element/Weapon|weapon to get the state of.
     * @return * A [[string]] if the [[Element/Weapon|weapon]] is valid, indicating the weapon state, which can be:
     * * ** '''reloading''': the weapon is reloading.
     * * ** '''firing''': the weapon is constantly shooting (unless any shooting blocking flags are set) according to its assigned firing rate.
     * * ** '''ready''': the weapon is idle.
     * * * ''false'' if an error occured or the [[Element/Weapon|weapon]] is invalid.
     */
    export function getWeaponState(theWeapon: weapon): string;

    /**
     * This functions gets the target of a [[Element/Weapon|custom weapon]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponTarget|MTASA Wiki}
     * @param theWeapon The weapon to get the target of.
     * @return * Returns the ''target'' of the [[Element/Weapon|custom weapon]], which can be:
     * * **''[[nil]]'' if the weapon is in rotation based targeting.
     * * **3 [[float|floats]] if the weapon is firing at a fixed point.
     * * **an [[element]] if the weapon is firing an entity.
     * * * Returns ''false'' if the weapon element is not valid.
     */
    export function getWeaponTarget(theWeapon: weapon): null | element | number;

    /**
     * This function resets the firing rate of a [[Element/Weapon|custom weapon]] to the default one.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetWeaponFiringRate|MTASA Wiki}
     * @param theWeapon the weapon to reset the firing rate of.
     * @return Returns ''true'' on success, ''false'' otherwise.
     */
    export function resetWeaponFiringRate(theWeapon: weapon): boolean;

    /**
     * This function sets the ammo left in a [[Element/Weapon|custom weapon]]'s magazine/clip.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponClipAmmo|MTASA Wiki}
     * @param theWeapon The Element/Weapon|weapon to set the clip ammo of.
     * @param clipAmmo The amount of ammo in the clip.
     * @return This function returns ''true'' if the arguments are valid and the weapon clip ammo could be changed; ''false'' otherwise.
     */
    export function setWeaponClipAmmo(theWeapon: weapon, clipAmmo: number): boolean;

    /**
     * This function sets the firing rate to be used when a [[Element/Weapon|custom weapon]] is in ''firing'' state.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponFiringRate|MTASA Wiki}
     * @param theWeapon The weapon to modify the firing rate of.
     * @param firingRate The weapon firing rate. It seems to be a kind of frecuency value, so the lower the quicker the Element/Weapon|custom weapon will shoot.
     * @return Returns ''true'' on success, ''false'' otherwise.
     */
    export function setWeaponFiringRate(theWeapon: weapon, firingRate: number): boolean;

    /**
     * This function sets a [[Element/Weapon|custom weapon]] flags, used to change how it behaves or finds a possible target to shoot.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponFlags|MTASA Wiki}
     * @param theWeapon the Element/Weapon|weapon element to set the flag of.
     * @param theFlag the weapon flag to change (all of them can be true or false):
     * @param enable : whether to enable or disable the specified flag.
     * @return Returns ''true'' if all arguments are valid and the flags where changed; ''false'' otherwise.
     */
    export function setWeaponFlags(theWeapon: weapon, theFlag: string, enable: boolean): boolean;

    /**
     * This function sets a [[Element/Weapon|custom weapon]]'s state.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponState|MTASA Wiki}
     * @param theWeapon : the weapon you wish to set the state of.
     * @param theState : the state you wish to set:
     * @return Returns ''true'' on success, ''false'' otherwise.
     */
    export function setWeaponState(theWeapon: weapon, theState: string): boolean;

    /**
     * This function sets the target of a [[Element/Weapon|custom weapon]]. There are 3 different targeting modes, which are explained below.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponTarget|MTASA Wiki}
     * @param theWeapon The weapon to set the target of.
     * @param theTarget The element to shoot at. It can be a player, ped, vehicle or object.
     * @param theComponent The component of the target to shoot at. This argument is only relevant when used in the following element types:
     * @default 255
     * @return Returns ''true'' on success, ''false'' otherwise.
     */
    export function setWeaponTarget(theWeapon: weapon, theTarget: element, theComponent?: number): boolean;

    /**
     * Creates a SWAT rope like that of the rope in single player used by SWAT Teams abseiling from the Police Maverick.
     * @see {@link https://wiki.multitheftauto.com/wiki/createSWATRope|MTASA Wiki}
     * @param duration the amount in miliseconds the rope will be there before falling to the ground.
     * @return
     */
    export function createSWATRope(fx: number, fy: number, fZ: number, duration: number): boolean;

    /**
     * This function will tell you if the birds are enabled or disabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBirdsEnabled|MTASA Wiki}
     * @return Returns ''true'' if the birds are enabled or ''false'' if the birds are disabled.
     */
    export function getBirdsEnabled(): boolean;

    /**
     * This function outputs the bounding box of a garage.
     * @see {@link https://wiki.multitheftauto.com/wiki/getGarageBoundingBox|MTASA Wiki}
     * @param garageID The Garage|garage ID that represents the garage door that is being checked.
     * @return Returns four ''float''s indicating the bounding box of the garage.
     * * ''Western X position, Eastern X position, Southern Y position, Northern Y position,, false when invalid garageID was provided.''
     */
    export function getGarageBoundingBox(garageID: number): LuaMultiReturn<[number, number, number, number]>;

    /**
     * This function outputs X, Y and Z position of given garage.
     * @see {@link https://wiki.multitheftauto.com/wiki/getGaragePosition|MTASA Wiki}
     * @param garageID The Garage|garage ID that represents the garage door that is being checked.
     * @return Returns three ''float''s indicating the position of the garage, ''x'', ''y'' and ''z'' respectively, false when garageID was invalid.
     */
    export function getGaragePosition(garageID: number): LuaMultiReturn<[number, number, number]>;

    /**
     * This function outputs the size of garage.
     * @see {@link https://wiki.multitheftauto.com/wiki/getGarageSize|MTASA Wiki}
     * @param garageID The Garage|garage ID that represents the garage door that is being checked.
     * @return Returns three ''float''s indicating the size of the garage, false if an invalid garageID has been provided
     */
    export function getGarageSize(garageID: number): LuaMultiReturn<[number, number, number]>;

    /**
     * This function gets the Z level of the highest ground below a point.
     * It is required that the point is near enough to the local player so that it's within the area where collision data is loaded. If this is not the case, an incorrect position will be returned.
     * @see {@link https://wiki.multitheftauto.com/wiki/getGroundPosition|MTASA Wiki}
     * @param x A floating point number representing the X world coordinate of the point.
     * @param y A floating point number representing the Y world coordinate of the point.
     * @param z A floating point number representing the Z world coordinate of the point.
     * @return Returns a float with the highest ground-level Z coord if parameters are valid, ''0'' if the point you tried to test is outside the loaded world map, ''false'' otherwise.
     */
    export function getGroundPosition(x: number, y: number, z: number): number;

    /**
     * This function will tell you if interior furniture are enabled or disabled in a specified room ID.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getInteriorFurnitureEnabled|MTASA Wiki}
     * @return Returns ''true'' if interior furniture is enabled or ''false'' if interior furniture is disabled.
     */
    export function getInteriorFurnitureEnabled(roomID: number): boolean;

    /**
     * This function checks to see if the music played by default in clubs is disabled or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/getInteriorSoundsEnabled|MTASA Wiki}
     * @return Returns true if music is playing, returns false if music is not playing.
     */
    export function getInteriorSoundsEnabled(): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getNearClipDistance|MTASA Wiki}
     * @return This function returns a ''[[float]]'' containing the actual near clip distance.
     */
    export function getNearClipDistance(): number;

    /**
     * This function resets near clip distance set by [[setNearClipDistance]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetNearClipDistance|MTASA Wiki}
     * @return *'''boolean:''' always returns '''true'''
     */
    export function resetNearClipDistance(): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedsLODDistance|MTASA Wiki}
     * @return This function returns a ''[[float]]'' containing the peds LOD distance.
     */
    export function getPedsLODDistance(): number;

    /**
     * [[File:Peds Lod Distance = 60.png|200px|thumb|right|60 units]]
     * [[File:Peds Lod Distance = 100.png|200px|thumb|right|100 units]]
     * [[File:Peds Lod Distance = 500.png|200px|thumb|right|500 units]]
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedsLODDistance|MTASA Wiki}
     * @param distance the new peds LOD distance. It must be between 0 and 500. (Default for high_detail_peds on is 500, when off, it is 60).
     * @return This function returns ''true'' if the argument is valid. Returns ''false'' otherwise.
     */
    export function setPedsLODDistance(distance: number): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/resetPedsLODDistance|MTASA Wiki}
     * @return Returns ''true'' if the peds LOD distance was reset, ''false'' otherwise.
     */
    export function resetPedsLODDistance(): boolean;

    /**
     * This function gets the Z level of the lowest roof above a point.
     * It is required that the point is near enough to the local player so that it's within the area where collision data is loaded.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/getRoofPosition|MTASA Wiki}
     * @param x : A floating point number representing the X world coordinate of the point.
     * @param y : A floating point number representing the Y world coordinate of the point.
     * @param z : A floating point number representing the Z world coordinate of the point.
     * @return Returns a [[float]] with the lowest roof-level Z coord if parameters are valid, ''false'' if the point you tried to test is outside the loaded world map.
     */
    export function getRoofPosition(x: number, y: number, z: number): number;

    /**
     * This function gets the screen position of a point in the world. This is useful for attaching 2D gui elements to parts of the world (e.g. players) or detecting if a point is on the screen (though it does not check if it is actually visible, you should use [[processLineOfSight]] for that).
     * @see {@link https://wiki.multitheftauto.com/wiki/getScreenFromWorldPosition|MTASA Wiki}
     * @param x A float value indicating the x position in the world.
     * @param y A float value indicating the y position in the world.
     * @param z A float value indicating the z position in the world.  {{OptionalArg}}  {{New feature/item|3|1.0||
     * @param edgeTolerance A float value indicating the distance the position can be off screen before the function returns false. Note: its clamped down on both axies to the size of screen at the given axis*10
     * @default 0.0
     * @param relative A boolean value that indicates if edgeTolerance is in pixels false, or relative to the screen size true.  }}
     * @default true
     * @return Returns two ''x'', ''y'' [[float]]s indicating the screen position and [[float]] distance between screen and given position if successful, ''false'' otherwise.
     */
    export function getScreenFromWorldPosition(x: number, y: number, z: number, edgeTolerance?: number, relative?: boolean): LuaMultiReturn<[number, number, number]>;

    /**
     * Returns the distance of vehicles LOD.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclesLODDistance|MTASA Wiki}
     * @return
     */
    export function getVehiclesLODDistance(): LuaMultiReturn<[number, number]>;

    /**
     * This function allows you to retrieve the world position corresponding to a 2D position on the screen, at a certain depth.
     * If you want to detect what element is at a particular point on the screen, use [[processLineOfSight]] between the camera position and the position returned from this function when passed a high depth value (100 or so, depending how far away you want to detect elements at).
     * As expected, setting 0 as the distance will cause the point retrived to be within the camera itself. That means that drawing any 3D thing in that point would result in it not being visible. Depending on the camera near clip distance, however, the minimum distance to be able to view it can vary.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWorldFromScreenPosition|MTASA Wiki}
     * @param x A float value indicating the x position on the screen, in pixels.
     * @param y A float value indicating the y position on the screen, in pixels.
     * @param depth A float value indicating the distance from the camera of the point whose coordinates we are retrieving, in units.
     * @return Returns three ''x'', ''y'', ''z'' [[float]]s indicating the world position if successful, ''false'' otherwise.
     */
    export function getWorldFromScreenPosition(x: number, y: number, depth: number): LuaMultiReturn<[number, number, number]>;

    /**
     * This function allows you to check if some background sound effects are enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/isAmbientSoundEnabled|MTASA Wiki}
     * @param theType The type of ambient sound to test. Can be either gunfire or general.
     * @return Returns ''true'' if the ambient sound is enabled, ''false'' if it is disabled or invalid values were passed.
     */
    export function isAmbientSoundEnabled(theType: string): boolean;

    /**
     * This function checks if there are obstacles between two points of the game world, optionally ignoring certain kinds of elements. Use [[processLineOfSight]] if you want more information about what the ray hits.
     * @see {@link https://wiki.multitheftauto.com/wiki/isLineOfSightClear|MTASA Wiki}
     * @param startX The first points world X coordinate.
     * @param startY The first points world Y coordinate.
     * @param startZ The first points world Z coordinate.
     * @param endX The second points world X coordinate.
     * @param endY The second points world Y coordinate.
     * @param endZ The second points world Z coordinate.  {{OptionalArg}}
     * @param checkBuildings Allow the line of sight to be blocked by GTAs internally placed buildings, i.e. the world map.
     * @default true
     * @param checkVehicles Allow the line of sight to be blocked by Vehicle|vehicles.
     * @default true
     * @param checkPeds Allow the line of sight to be blocked by peds, i.e. Player|players.
     * @default true
     * @param checkObjects Allow the line of sight to be blocked by Object|objects.
     * @default true
     * @param checkDummies Allow the line of sight to be blocked by GTAs internal dummies.  These are not used in the current MTA version so this argument can be set to false.
     * @default true
     * @param seeThroughStuff Allow the line of sight to pass through collision materials that have this flag enabled (By default material IDs 52, 55 and 66 which are some fences). This flag originally allows some objects to be walked on but you can shoot throug them.
     * @default false
     * @param ignoreSomeObjectsForCamera Allow the line of sight to pass through objects that have (K) property enabled in object.dat data file. (i.e. Most dynamic objects like boxes or barrels)
     * @default false
     * @param ignoredElement Allow the line of sight to pass through a certain specified element.
     * @default nil
     * @return Returns ''true'' if the line between the specified points is clear, ''false'' if there's an obstacle or if invalid parameters are passed.
     */
    export function isLineOfSightClear(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, checkBuildings: boolean, checkVehicles: boolean, checkPeds: boolean, checkObjects: boolean, checkDummies: boolean, seeThroughStuff: boolean, ignoreSomeObjectsForCamera: boolean, ignoredElement: element): boolean;

    /**
     * This function allows you to check if certain world sound effects have not been disabled by [[setWorldSoundEnabled]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isWorldSoundEnabled|MTASA Wiki}
     * @return Returns ''true'' if the world sounds are enabled, ''false'' if they are disabled or invalid values were passed.
     */
    export function isWorldSoundEnabled(group: number, index: number): boolean;

    /**
     * Checks if a special world property (cheat) is enabled or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isWorldSpecialPropertyEnabled|MTASA Wiki}
     * @param propname the name of the property to retrieve. Possible values are listed on SetWorldSpecialPropertyEnabled.
     * @return Returns ''true'' if the property is enabled, ''false'' if it is disabled or the specified property name is invalid.
     */
    export function isWorldSpecialPropertyEnabled(propname: string): boolean;

    /**
     * This function casts a ray between two points in the world, and tells you information about the point that was hit, if any. The two positions '''must''' be within the local player's draw distance as the collision data is not loaded outside this area, and the call will just fail as if the ray didn't hit.
     * This function is relatively expensive to call, so over use of this in scripts may have a detrimental effect on performance.
     * This function is useful for checking for collisions and for editor-style scripts. If you wish to find what element is positioned at a particular point on the screen, use this function combined with [[getWorldFromScreenPosition]]. If you wish to just know if something is hit, and don't care about what or where was hit, use [[isLineOfSightClear]].
     * @see {@link https://wiki.multitheftauto.com/wiki/processLineOfSight|MTASA Wiki}
     * @param startX The start x position
     * @param startY The start y position
     * @param startZ The start z position
     * @param endX The end x position
     * @param endY The end y position
     * @param endZ The end z position  {{OptionalArg}}
     * @param checkBuildings Allow the line of sight to be blocked by GTAs internally placed buildings, i.e. the world map.
     * @default true
     * @param checkVehicles Allow the line of sight to be blocked by Vehicle|vehicles.
     * @default true
     * @param checkPlayers Allow the line of sight to be blocked by Player|players.
     * @default true
     * @param checkObjects Allow the line of sight to be blocked by Object|objects.
     * @default true
     * @param checkDummies Allow the line of sight to be blocked by GTAs internal dummies.  These are not used in the current MTA version so this argument can be set to false.
     * @default true
     * @param seeThroughStuff Allow the line of sight pass through collision materials that have this flag enabled (By default material IDs 52, 55 and 66 which are some fences that you can shoot throug but still walk on them).
     * @default false
     * @param ignoreSomeObjectsForCamera Allow the line of sight to pass through objects that have (K) property enabled in object.dat data file. (i.e. Most dynamic objects like boxes or barrels)
     * @default false
     * @param shootThroughStuff Allow the line of sight to pass through collision materials that have this flag enabled (By default material IDs 28, 29, 31, 32, 33, 74, 75, 76, 77, 78, 79, 96, 97, 98, 99, 100 which are exclusively sand / beach or underwater objects).
     * @default false
     * @param ignoredElement Allow the line of sight to pass through a certain specified element. This is usually set to the object you are tracing from so it does not interfere with the results.
     * @default nil
     * @return *'''hit:''' ''true'' if there is a collision, ''false'' otherwise
     * * The other values are only filled if there is a collision, they contain ''nil'' otherwise
     * * *'''hitX, hitY, hitZ:''' collision position
     * * *'''hitElement:''' the MTA element hit if any, ''nil'' otherwise
     * * *'''normalX, normalY, normalZ:''' the normal of the surface hit
     * * *'''material:''' an integer representing the [[Material IDs|GTASA material ID]] of the surface hit when applicable (world, objects)
     * * *'''lighting:''' a float between 0 (fully dark) and 1 (bright) representing the amount of light that the hit building surface will transfer to peds or vehicles that are in contact with it. The value can be affected by the game time of day, usually with a lower (darker) value being returned during the night.
     * * *'''piece:''' an integer representing the part of the element hit if hitElement is a vehicle or a ped/player, ''0'' otherwise.
     * * **For a ped/player, piece represents the body part hit:
     * * {{BodyParts}}
     * * **For vehicles, piece represents the vehicle part hit:
     * * {{VehicleParts}}
     * * *'''worldModelID:''' If includeWorldModelInformation was set to ''true'' and a world model was hit, this will contain the model ID.
     * * *'''worldModelPositionX,Y,Z:''' If worldModelID is set, this will contain the world model position.
     * * *'''worldModelRotationX,Y,Z:''' If worldModelID is set, this will contain the world model rotation.
     * * *'''worldLODModelID:''' If worldModelID is set, this will contain the LOD model ID if applicable.
     */
    export function processLineOfSight(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, checkBuildings: boolean, checkVehicles: boolean, checkPlayers: boolean, checkObjects: boolean, checkDummies: boolean, seeThroughStuff: boolean, ignoreSomeObjectsForCamera: boolean, shootThroughStuff: boolean, ignoredElement: element, includeWorldModelInformation: boolean, bIncludeCarTyres: boolean): LuaMultiReturn<[boolean,
        number, number, number,
        element,
        number, number, number,
        number,
        number,
        number,
        number,
        number, number, number,
        number, number, number,
        number,]>;

    /**
     * This function is used to reset the background sounds to the default setting.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetAmbientSounds|MTASA Wiki}
     * @return Returns true if the ambient sounds were reset, false otherwise.
     */
    export function resetAmbientSounds(): boolean;

    /**
     * Resets the motion blur level on the clients screen to default value (36).
     * @return Returns ''true'' if the blur level was reset successfully. Returns ''false'' otherwise.
     */
    export function resetBlurLevel(): boolean;

    /**
     * Resets the distance of vehicles LOD to default. Default values depends on client setting. If client has enabled ''high detail vehicles'' in video options, value will be reset to (500, 500) - otherwise to (70, 150). You can check value of this option using [[dxGetStatus]] (''SettingHighDetailVehicles'').
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetVehiclesLODDistance|MTASA Wiki}
     * @return Returns true if the vehicles LOD distance was reset, false otherwise.
     */
    export function resetVehiclesLODDistance(): boolean;

    /**
     * This function is used to reset the world sounds to the default setting.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetWorldSounds|MTASA Wiki}
     * @return Returns true if the world sounds were reset, false otherwise.
     */
    export function resetWorldSounds(): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/resetColorFilter|MTASA Wiki}
     * @return Returns true if the color filtering was reset, false otherwise.
     */
    export function resetColorFilter(): boolean;

    /**
     * This function allows you to disable some background sound effects. See also: [[setWorldSoundEnabled]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setAmbientSoundEnabled|MTASA Wiki}
     * @param theType The type of ambient sound to toggle. Can be either gunfire or general.
     * @return Returns ''true'' if the ambient sound was set correctly, ''false'' if invalid values were passed.
     */
    export function setAmbientSoundEnabled(theType: string, enable: boolean): boolean;

    /**
     * This function allows you to disable the flying birds.
     * @see {@link https://wiki.multitheftauto.com/wiki/setBirdsEnabled|MTASA Wiki}
     * @return Returns ''true'' if the birds state was changed succesfully, ''false'' if an invalid argument was specified.
     */
    export function setBirdsEnabled(enable: boolean): boolean;

    /**
     * This function toggles furniture generation in interiors with the specified room ID.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setInteriorFurnitureEnabled|MTASA Wiki}
     * @param roomID The room type which you want disable or enable the furniture in:
     * @param enabled : A bool representing whether the interior furniture is enabled or disabled.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setInteriorFurnitureEnabled(roomID: number, enabled: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setNearClipDistance|MTASA Wiki}
     * @param distance the new near clip distance. It must be between 0.1 and 20 for the function to do any effect. Default value is 0.3.
     * @return This function returns ''true'' if the argument is valid. Returns ''false'' otherwise.
     */
    export function setNearClipDistance(distance: number): boolean;

    /**
     * Sets the distance of vehicles LOD.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclesLODDistance|MTASA Wiki}
     * @param vehiclesDistance general distance used for most vehicles, this value is clamped to 0 – 500
     * @param trainsAndPlanesDistance distance used for trains and planes, this value is clamped to 0 – 500
     * @default vehiclesDistance * 2.14
     * @return
     */
    export function setVehiclesLODDistance(vehiclesDistance: number, trainsAndPlanesDistance: number): boolean;

    /**
     * This function allows you to disable world sounds. A world sound is a sound effect which has '''''not''''' been caused by [[playSound]] or [[playSound3D]].
     * *The values for ''group'' and ''index'' can be determined by using the client command [[Client_Commands#showsound|showsound]] in conjunction with [[setDevelopmentMode]]
     * *This function does not affect sounds which are already playing, such as the wind sound that can only be stopped by entering an interior.
     * * See also: [[setAmbientSoundEnabled]]}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setWorldSoundEnabled|MTASA Wiki}
     * @param group An int|integer representing the World sound groups|world sound group
     * @param index An int|integer representing an individual sound within the group  {{New feature/item|3.0156|1.5.5|11860|
     * @default -1
     * @param enable Set to false to disable, true to enable
     * @param immediate A boolean if set to true will cancel the sound if its already playing. This parameter only works for stopping the sound.  }}
     * @default false
     * @return Returns ''true'' if the world sound was correctly enabled/disabled, ''false'' if invalid values were passed.
     */
    export function setWorldSoundEnabled(group: number, index: number, enable: boolean, immediate?: boolean): boolean;

    /**
     * Enables or disables a special world property.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWorldSpecialPropertyEnabled|MTASA Wiki}
     * @param propname the name of the property to set. Possible values are:
     * @param enable whether or not to enable the property.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setWorldSpecialPropertyEnabled(propname: string, enable: boolean): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setColorFilter|MTASA Wiki}
     * @param aRed The amount of red (0-255).
     * @param aGreen The amount of green (0-255).
     * @param aBlue The amount of blue (0-255).
     * @param aAlpha The amount of alpha (0-255).
     * @param bRed The amount of red (0-255).
     * @param bGreen The amount of green (0-255).
     * @param bBlue The amount of blue (0-255).
     * @param bAlpha The amount of alpha (0-255).
     * @return Returns true if the color filter was set, false otherwise.
     */
    export function setColorFilter(aRed: number, aGreen: number, aBlue: number, aAlpha: number, bRed: number, bGreen: number, bBlue: number, bAlpha: number): boolean;

    /**
     * This function checks to see if a line between two points collides with the water. This is similar to [[processLineOfSight]], but only collides with water. Waves are taken into account when testing the line.
     * @see {@link https://wiki.multitheftauto.com/wiki/testLineAgainstWater|MTASA Wiki}
     * @return Returns ''true'' and the position of the intersection point of the line and the water surface if there is a collision, or ''false'' if there is no collision.
     */
    export function testLineAgainstWater(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): LuaMultiReturn<[boolean, number, number, number]>;

    /**
     * This function plays a frontend sound for the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/playSoundFrontEnd|MTASA Wiki}
     * @param sound a whole int specifying the sound id to play. Valid values are:  {{Sounds}}
     * @return Returns ''true'' if the sound was successfully played, ''false'' otherwise.
     */
    export function playSoundFrontEnd(sound: number): boolean;

    /**
     * This function creates a [[blip]] [[element]], which is displayed as an icon on the client's radar.
     * @see {@link https://wiki.multitheftauto.com/wiki/createBlip|MTASA Wiki}
     * @return Returns an [[element]] of the [[blip]] if it was created successfully, ''false'' otherwise.
     */
    export function createBlip(x: number, y: number, z: number, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number): blip;

    /**
     * This function creates a [[blip]] that is attached to an [[element]]. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.
     * @see {@link https://wiki.multitheftauto.com/wiki/createBlipAttachedTo|MTASA Wiki}
     * @return Returns a [[blip]] if the blip was created succesfully, or ''false'' otherwise.
     */
    export function createBlipAttachedTo(elementToAttachTo: element, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number): blip;

    /**
     * This function will fade a player's camera to a color or back to normal over a specified time period. This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no sound). For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside scripts you must use one then the other.
     * @see {@link https://wiki.multitheftauto.com/wiki/fadeCamera|MTASA Wiki}
     * @param fadeIn Should the camera be faded in our out? Pass true to fade the camera in, false to fade it out to a color.
     * @param timeToFade The number of seconds it should take to fade.
     * @default 1.0
     * @param red The amount of red in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @param green The amount of green in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @param blue The amount of blue in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @return Returns ''true'' if the camera was faded successfully, ''false'' if invalid arguments were passed to the function.
     */
    export function fadeCamera(fadeIn: boolean, timeToFade: number, red: number, green: number, blue: number): boolean;

    /**
     * Returns the interior of the local camera (independent of the interior of the local player).
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraInterior|MTASA Wiki}
     * @return Returns an ''integer'' indicating the camera's interior, ''false'' if the argument is invalid.
     */
    export function getCameraInterior(): number;

    /**
     * This function gets the position of the camera and the position of the point it is facing.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraMatrix|MTASA Wiki}
     * @return This function returns 8 [[float|floats]] if the argument is valid (when applicable); the first three indicate the position of the camera, the next three indicate the position of the point it's facing, and the last two are the roll and field of view. Returns ''false'' if the argument is invalid.
     */
    export function getCameraMatrix(): LuaMultiReturn<[number, number, number, number, number, number, number, number]>;

    /**
     * This function returns an [[element]] that corresponds to the current target of the specified player's camera (i.e. what it is following).
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraTarget|MTASA Wiki}
     * @return * Returns an [[element]] of the target if the function was successful, or ''false'' if bad arguments were specified
     * * {{New feature|3|1.0|
     * * * Returns ''false'' if the camera is in Fixed mode and has no target.
     * * }}
     */
    export function getCameraTarget(): element;

    /**
     * Sets the interior of the local camera. Only the interior of the camera is changed, the local player stays in the interior he was in.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraInterior|MTASA Wiki}
     * @param interior the interior to place the camera in.
     * @return Returns ''true'' if the camera's interior was changed successfully, ''false'' otherwise.
     */
    export function setCameraInterior(interior: number): boolean;

    /**
     * This function sets the camera's position and direction. The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraMatrix|MTASA Wiki}
     * @param positionX The x coordinate of the cameras position.
     * @param positionY The y coordinate of the cameras position.
     * @param positionZ The z coordinate of the cameras position.
     * @param lookAtX The x coordinate of the point the camera faces.
     * @param lookAtY The y coordinate of the point the camera faces.
     * @param lookAtZ The z coordinate of the point the camera faces.
     * @param roll The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180 means the camera is upside down.
     * @default 0
     * @param fov the field of view angle, 0.01 to 180. The higher this value is, the more you will be able to see what is to your sides.
     * @default 70
     * @return Returns ''true'' if the arguments are valid, ''false'' otherwise.
     */
    export function setCameraMatrix(positionX: number, positionY: number, positionZ: number, lookAtX?: number, lookAtY?: number, lookAtZ?: number, roll?: number, fov?: number): boolean;

    /**
     * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is:
     * *[[Player]]s
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraTarget|MTASA Wiki}
     * @param target The player who you want the local camera to follow.
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setCameraTarget(target: player): boolean;

    /**
     * This function is used to determine whether or not a player's cursor is showing.
     * @see {@link https://wiki.multitheftauto.com/wiki/isCursorShowing|MTASA Wiki}
     * @return Returns ''true'' if the player's cursor is showing, ''false'' if it isn't.
     */
    export function isCursorShowing(): boolean;

    /**
     * This function is used to show or hide a [[player]]'s cursor.
     * @see {@link https://wiki.multitheftauto.com/wiki/showCursor|MTASA Wiki}
     * @param show A boolean value determining whether to show (true) or hide (false) the cursor.  {{OptionalArg}}
     * @param toggleControls A boolean value determining whether to disable controls whilst the cursor is showing.  true implies controls are disabled, false implies controls remain enabled.
     * @default true
     * @return Returns ''true'' if the player's cursor was shown or hidden successfully, ''false'' otherwise.
     */
    export function showCursor(show: boolean, toggleControls: boolean): boolean;

    /**
     * This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards ''where'' in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type "flag" (e.g. <flag />) in the .map file, the using "flag" as the type argument would find it.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementsByType|MTASA Wiki}
     * @return Returns a ''table'' containing all the elements of the specified type. Returns an empty ''table'' if there are no elements of the specified type. Returns ''false'' if the string specified is invalid (or not a string).
     */
    export function getElementsByType(theType: string, startat: element, streamedIn: boolean): table;

    /**
     * This function stores [[element data]] under a certain key, attached to an element. Element data set using this is then synced with all clients and the server. The data can contain server created elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls, aclgroups etc.
     * As element data is synced to all clients, it can generate a lot of network traffic and be heavy on performance. Events are much more efficient for sending data from a client to the server only, or from the server to a specific client. <br/>
     * Usage of element data should be disencouraged where your goal can be achieved with events like above, and [[table|tables]] for storing and retrieving data.
     * Note this mode only works when setting element data serverside. Setting data clientside still sends the update to all clients if 'synchronize' is set to true.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementData|MTASA Wiki}
     * @param theElement The element you wish to attach the data to.
     * @param key The key you wish to store the data under. (Maximum 31 characters.)
     * @param value The value you wish to store. See element data for a list of acceptable datatypes.
     * @param synchronize Determines whether or not the data will be synchronized with the server.
     * @default true
     * @return Returns ''true'' if the data was set succesfully, ''false'' otherwise.
     * * {{New items|5.0157|1.5.7-9.20477|
     */
    export function setElementData(theElement: element, key: string, value: any, synchronize?: boolean): boolean;

    /**
     * This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the [[onPickupUse]] event.
     * [[cancelEvent]] does not have an effect on all events, see the individual event's pages for information on what happens when the event is canceled. [[cancelEvent]] does not stop further event handlers from being called, as the order of event handlers being called is undefined in many cases. Instead, you can see if the currently active event has been cancelled using [[wasEventCancelled]].
     * The use of cancelEvent outside of an event handler has no effect.
     * If you implement your own custom events and want to handle them being cancelled, you should call [[wasEventCancelled]] to check after your call to [[triggerEvent]].
     * @see {@link https://wiki.multitheftauto.com/wiki/cancelEvent|MTASA Wiki}
     * @return Always returns ''true''.
     */
    export function cancelEvent(): boolean;

    /**
     * Stops a latent event from completing
     * @see {@link https://wiki.multitheftauto.com/wiki/cancelLatentEvent|MTASA Wiki}
     * @param handle A handle previous got from getLatentEventHandles.
     * @return Returns a true if the latent event was successfully cancelled, or false if it was not
     */
    export function cancelLatentEvent(handle: number): boolean;

    /**
     * Gets the currently queued latent events. The last one in the table is always the latest event queued. Each returned handle can be used with [[getLatentEventStatus]] or [[cancelLatentEvent]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getLatentEventHandles|MTASA Wiki}
     * @return Returns a table of handles or false if invalid arguments were passed.
     */
    export function getLatentEventHandles(): table;

    /**
     * Gets the status of one queued latent event.
     * @see {@link https://wiki.multitheftauto.com/wiki/getLatentEventStatus|MTASA Wiki}
     * @param handle A handle previous got from getLatentEventHandles.
     * @return Returns a table with the following info or false if invalid arguments were passed:
     * * *'''tickStart:''' A number estimating how many ticks until the data transfer starts (Negative means the transfer has already started)
     * * *'''tickEnd:''' A number estimating how many ticks until the data transfer completes
     * * *'''totalSize:''' A number representing how many bytes in total this transfer will transfer
     * * *'''percentComplete:''' A number between 0-100 saying how much is done
     */
    export function getLatentEventStatus(handle: number): table;

    /**
     * Creates an explosion of a certain type at a specified point in the world. If creator is specified, the explosion will occur only in its dimension.
     * @see {@link https://wiki.multitheftauto.com/wiki/createExplosion|MTASA Wiki}
     * @param x a float value that specifies the X world coordinate where the explosion is created at.
     * @param y a float value that specifies the Y world coordinate where the explosion is created at.
     * @param z a float value that specifies the Z world coordinate where the explosion is created at.
     * @param theType a integer specifying the explosion type. Valid types are:  {{Explosions}}
     * @param makeSound a boolean specifying whether the explosion should be heard or not.
     * @default true
     * @param camShake a float specifying the camera shakes intensity.
     * @default -1.0
     * @param damaging a boolean specifying whether the explosion should cause damage or not.
     * @default true
     * @return *''true'' if the explosion was created.
     * * * ''false'' if invalid parameters were passed.
     */
    export function createExplosion(x: number, y: number, z: number, theType: number, makeSound?: boolean, camShake?: number, damaging?: boolean): boolean;

    /**
     * This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.
     * Multiple command handlers can be attached to a single command, and they will be called in the order that the handlers were attached. Equally, multiple commands can be handled by a single function, and the ''commandName'' parameter used to decide the course of action.
     * For users, a command is in the format:
     * ''commandName'' ''argument1'' ''argument2''
     * This can be triggered from the player's console or directly from the chat box by prefixing the message with a forward slash (''/''). For server side handlers, the server admin is also able to trigger these directly from the server's console in the same way as they are triggered from a player's console.
     * @see {@link https://wiki.multitheftauto.com/wiki/addCommandHandler|MTASA Wiki}
     * @param commandName This is the name of the command you wish to attach a handler to. This is what must be typed into the console to trigger the function.
     * @param handlerFunction This is the function that you want the command to trigger, which has to be defined before you add the handler. This function can take commandName parameter, followed by as many parameters as you expect after your command (see below). These are all optional.  {{OptionalArg}}   {{New feature|3|1.0|
     * @param caseSensitive Specifies if the command handler will ignore the case for this command name.  }}
     * @default true
     * @return Returns ''true'' if the command handler was added successfully, ''false'' otherwise.
     */
    export function addCommandHandler(commandName: string, handlerFunction: HandleFunction, caseSensitive?: boolean): boolean;

    /**
     * Binds a player's key to a handler function or command, which will be called when the key is pressed.
     * @see {@link https://wiki.multitheftauto.com/wiki/bindKey|MTASA Wiki}
     * @param key The key that was pressed
     * @param keyState The state of the key that was pressed, down if it was pressed, up if it was released.
     * @param handlerFunction The function that will be triggered when the players key is pressed. This function should have the form:  :<syntaxhighlight lang="lua">function functionName ( string key, string keyState, [ var arguments, ... ] )</syntaxhighlight>  :The values passed to this function are:
     * @param arguments The optional arguments you specified when calling bindKey (see below).
     * @return Returns ''true'' if the key was bound, ''false'' otherwise.
     */
    export function bindKey(key: string, keyState: string, handlerFunction: HandleFunction, arguments: any, ...args: any[]): boolean;

    /**
     * This function will call all the attached functions of an existing console command, for a specified player.
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/executeCommandHandler|MTASA Wiki}
     * @param commandName The name of the command you wish to execute. This is what must be typed into the console to trigger the function.  {{OptionalArg}}
     * @param args Additional parameters that will be passed to the handler function(s) of the command that is called, separated by spaces.
     * @return Returns ''true'' if the command handler was called successfully, ''false'' otherwise.
     */
    export function executeCommandHandler(commandName: string, args: string): boolean;

    /**
     * Gets the functions bound to a key. To bind a function to a key use the [[bindKey]] function
     * @see {@link https://wiki.multitheftauto.com/wiki/getFunctionsBoundToKey|MTASA Wiki}
     * @param keyState A string that has one of the following values:
     * @return Returns a table of the key function(s).
     */
    export function getFunctionsBoundToKey(key: string, keyState: string): table;

    /**
     * getKeyBoundToFunction allows retrieval of the first key bound to a function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getKeyBoundToFunction|MTASA Wiki}
     * @param theFunction The function in which you would like to check the bound key
     * @return Returns a string of the first key the function was bound to.
     */
    export function getKeyBoundToFunction(theFunction: HandleFunction): string;

    /**
     * Checks whether a GTA control is enabled or disabled for a certain player.
     * @see {@link https://wiki.multitheftauto.com/wiki/isControlEnabled|MTASA Wiki}
     * @param control The control you wish to check. See control names for a list of possible controls.
     * @return Returns ''true'' if control is enabled, ''false'' otherwise.
     */
    export function isControlEnabled(control: string): boolean;

    /**
     * Enables or disables the use of all GTA controls for a specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleAllControls|MTASA Wiki}
     * @param enabled A boolean value representing whether or not the controls will be usable.  {{OptionalArg}}
     * @param gtaControls A boolean deciding whether the enabled parameter will affect GTAs internal controls.
     * @default true
     * @param mtaControls A boolean deciding whether the enabled parameter will affect MTAs own controls., e.g. chatbox.
     * @default true
     * @return This function returns ''true'' if controls were toggled successfully, false otherwise.
     */
    export function toggleAllControls(enabled: boolean, gtaControls: boolean, mtaControls: boolean): boolean;

    /**
     * Enables or disables the use of a GTA control for a specific player.
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleControl|MTASA Wiki}
     * @param control The control that you want to toggle the ability of. See control names for a list of possible controls.
     * @param enabled A boolean value representing whether or not the key will be usable or not.
     * @return This function ''true'' if the control was set successfully, ''false'' otherwise.
     */
    export function toggleControl(control: string, enabled: boolean): boolean;

    /**
     * Removes an existing key bind from the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/unbindKey|MTASA Wiki}
     * @param key The key you wish to unbind. See Key names for a list of valid key names.
     * @param keyState is optional in Syntax 2.
     * @return Returns '''true'' if the key was unbound, ''false'' if it was not previously bound or invalid arguments were passed to the function.
     */
    export function unbindKey(key: string, keyState: string, command: string): boolean;

    /**
     * [[Image:Mtasa_markers.png|thumb|337px|This image shows all the different marker types available using this function.]]
     * This function creates a marker. A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.
     * There are various limits that govern the maximum number of each type that can be visible at once. These are:
     * * Coronas: 32
     * * Checkpoints, Rings, Cylinders and Arrows combined: 32
     * You are able to create as many markers as you wish (memory and element limit permitting), but the player will only be able to see the nearest ones up to the limit.
     * <br><br><br><br>
     * @see {@link https://wiki.multitheftauto.com/wiki/createMarker|MTASA Wiki}
     * @param x : A floating point number representing the X coordinate on the map.
     * @param y : A floating point number representing the Y coordinate on the map.
     * @param z : A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param theType : The visual type of the marker to be created. Possible values:  {{Marker_types}}
     * @default "checkpoint"
     * @param size : The diameter of the marker to be created, in meters.
     * @default 4.0
     * @param r : An integer number representing the amount of red to use in the colouring of the marker (0 - 255).
     * @default 0
     * @param g : An integer number representing the amount of green to use in the colouring of the marker (0 - 255).
     * @default 0
     * @param b : An integer number representing the amount of blue to use in the colouring of the marker (0 - 255).
     * @default 255
     * @param a : An integer number representing the amount of alpha to use in the colouring of the marker (0 - 255 where 0 is transparent and 255 is opaque).
     * @default 255
     * @return Returns the [[marker]] element that was created, or ''false'' if the arguments are incorrect.
     */
    export function createMarker(x: number, y: number, z: number, theType?: string, size?: number, r?: number, g?: number, b?: number, a?: number): marker;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/clearChatBox|MTASA Wiki}
     * @return Returns ''true'' if the player's chat was cleared successfully, ''false'' otherwise.
     */
    export function clearChatBox(): boolean;

    /**
     * This outputs the specified text string to the chatbox. It can be specified as a message to certain player(s) or all players.
     * It can optionally allow you to embed color changes into the string by setting the colorCoded boolean to true. This allows:
     * <syntaxhighlight lang="lua">
     * outputChatBox ( "#FF0000Hello #00FF00World", root, 255, 255, 255, true )
     * </syntaxhighlight>
     * This will display as: '''<span style='color:red;'>Hello</span> <span style='color:green'>World</span> '''
     * @see {@link https://wiki.multitheftauto.com/wiki/outputChatBox|MTASA Wiki}
     * @param text The text string that you wish to send to the chat window. If more than 256 characters it will not be showed in chat.  {{OptionalArg}}
     * @param r The amount of red in the color of the text. Default value is 231.
     * @default 231
     * @param g The amount of green in the color of the text. Default value is 217.
     * @default 217
     * @param b The amount of blue in the color of the text. Default value is 176.
     * @default 176
     * @param colorCoded A boolean value determining whether or not #RRGGBB tags should be used.  Note: The #RRGGBB format must contain capital letters a-f is not acceptable but A-F is. Default RGB values in this format are: '#E7D9B0'.
     * @default false
     * @return Returns ''true'' if the message was displayed successfully. Returns ''false'' if invalid arguments are specified.
     */
    export function outputChatBox(text: string, r?: number, g?: number, b?: number, colorCoded?: boolean): boolean;

    /**
     * This outputs the specified text string to the console window (accessed with F8 or ~ key). It can be specified as a message to certain player(s) or all players.
     * @see {@link https://wiki.multitheftauto.com/wiki/outputConsole|MTASA Wiki}
     * @param text The text string that you wish to send to the console window
     * @return
     */
    export function outputConsole(text: string): boolean;

    /**
     * This function is used to show or hide the player's chat.
     * @see {@link https://wiki.multitheftauto.com/wiki/showChat|MTASA Wiki}
     * @param show A boolean value determining whether to show (true) or hide (false) the chat.
     * @return Returns ''true'' if the player's chat was shown or hidden successfully, ''false'' otherwise.
     */
    export function showChat(show: boolean): boolean;

    /**
     * Creates a Ped in the GTA world.
     * @see {@link https://wiki.multitheftauto.com/wiki/createPed|MTASA Wiki}
     * @param modelid A whole integer specifying the Character_Skins|GTASA skin ID.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param rot A floating point number representing the rotation in degrees.
     * @default 0.0
     * @return Returns a ped element if it was successfully created.
     */
    export function createPed(modelid: number, x: number, y: number, z: number, rot?: number): ped;

    /**
     * This function is used to forcefully show a player's radar map.
     * @see {@link https://wiki.multitheftauto.com/wiki/forcePlayerMap|MTASA Wiki}
     * @param forceOn : A boolean value representing whether or not the players radar map will be forced on
     * @return Returns ''true'' if the player's radar map was forced on, ''false'' otherwise.
     */
    export function forcePlayerMap(forceOn: boolean): boolean;

    /**
     * This function allows you to check the current blur level of a specified [[player]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getBlurLevel|MTASA Wiki}
     * @return Returns the local blur level.
     */
    export function getBlurLevel(): number;

    /**
     * Returns the amount of money a player currently has.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerMoney|MTASA Wiki}
     * @return Returns an integer with the amount of money the local player has.
     */
    export function getPlayerMoney(): number;

    /**
     * This function gets a player's current wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerWantedLevel|MTASA Wiki}
     * @return Returns an ''int'' from 0 to 6 representing the player's wanted level, ''false'' if the player does not exist.
     */
    export function getPlayerWantedLevel(): number;

    /**
     * This function adds money to a [[player]]'s current money amount.  To set absolute values, [[setPlayerMoney]] can be used.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/givePlayerMoney|MTASA Wiki}
     * @param amount a positive integer number specifying the amount of money to give to the player.
     * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
     */
    export function givePlayerMoney(amount: number): boolean;

    /**
     * This function checks if the specified player's radar map has been forced on or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMapForced|MTASA Wiki}
     * @return Returns ''true'' if the local player's radar map is forced on, ''false'' otherwise.
     */
    export function isPlayerMapForced(): boolean;

    /**
     * Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.
     * @see {@link https://wiki.multitheftauto.com/wiki/setBlurLevel|MTASA Wiki}
     * @param level The level to set the blur to (default: 36)
     * @return
     */
    export function setBlurLevel(level: number): boolean;

    /**
     * This function will show or hide a part of the player's HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerHudComponentVisible|MTASA Wiki}
     * @param component The component you wish to show or hide. Valid values are:
     * @param show Specify if the component should be shown (true) or hidden (false)
     * @return Returns ''true'' if the component was shown or hidden succesfully, ''false'' if an invalid argument was specified.
     */
    export function setPlayerHudComponentVisible(component: string, show: boolean): boolean;

    /**
     * Sets a player's money to a certain value, regardless of current player money. It should be noted that setting negative values does not work and in fact gives the player large amounts of money.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerMoney|MTASA Wiki}
     * @param amount A whole integer specifying the new amount of money the local player will have.  {{OptionalArg}}  {{New items|3.0140|1.4|
     * @param instant If set to true money will be set instantly without counting up/down like in singleplayer.}}
     * @default false
     * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
     */
    export function setPlayerMoney(amount: number, instant?: boolean): boolean;

    /**
     * This function subtracts money from a [[player]]'s current money amount.
     * @see {@link https://wiki.multitheftauto.com/wiki/takePlayerMoney|MTASA Wiki}
     * @param amount an integer number specifying the amount of money to take from the player.
     * @return Returns ''true'' if the money was taken, or ''false'' if invalid parameters were passed.
     */
    export function takePlayerMoney(amount: number): boolean;

    /**
     * This function can be used to detonate a players satchels.
     * @see {@link https://wiki.multitheftauto.com/wiki/detonateSatchels|MTASA Wiki}
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function detonateSatchels(): boolean;

    /**
     * This function returns network status information.
     * @see {@link https://wiki.multitheftauto.com/wiki/getNetworkStats|MTASA Wiki}
     * @return Returns a table, the indexes in the table are the following:
     * * * '''bytesReceived''' - Total number of bytes received since the connection was started
     * * * '''bytesSent''' - Total number of bytes sent since the connection was started
     * * * '''packetsReceived''' - Total number of packets received since the connection was started
     * * * '''packetsSent''' - Total number of packets sent since the connection was started
     * * * '''packetlossTotal''' - (0-100) Total packet loss percentage of sent data, since the connection was started
     * * * '''packetlossLastSecond''' - (0-100) Packet loss percentage of sent data, during the previous second
     * * * '''messagesInSendBuffer'''
     * * * '''messagesInResendBuffer''' - Number of packets queued to be resent (due to packet loss)
     * * * '''isLimitedByCongestionControl'''
     * * * '''isLimitedByOutgoingBandwidthLimit'''
     * * * '''encryptionStatus'''
     */
    export function getNetworkStats(): table;

    /**
     * This function will blow up a vehicle. This will cause an explosion and will kill the driver and any passengers inside it.
     * @see {@link https://wiki.multitheftauto.com/wiki/blowVehicle|MTASA Wiki}
     * @param vehicleToBlow the vehicle that you wish to blow up.
     * @return Returns ''true'' if the vehicle was blown up, ''false'' if invalid arguments were passed to the function.
     */
    export function blowVehicle(vehicleToBlow: vehicle): boolean;

    /**
     * <section name="Server" class="server" show="true">
     * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponProperty|MTASA Wiki}
     * @param theWeapon the weapon to change the property of.
     * @param strProperty the property to edit:  {{Custom Weapon Properties Writable}}
     * @param theValue The value to set the property to.
     * @return Returns ''true'' if the property was set.
     */
    export function setWeaponProperty(theWeapon: weapon, strProperty: string, theValue: any): boolean;

}