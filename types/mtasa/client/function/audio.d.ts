/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Table } from 'types/mtasa/client/structure';

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
 * @param id The ID of the radio station you want to get the name of. It is a number from 0 to 12.
 * {{SoundID}}
 * @return Returns a string containing the station name if successful, ''false'' otherwise.
 */
export function getRadioChannelName(id: number): string;

/**
 * This function checks if a big sound container is available to use or not.
 * }}
 * In case of these invalid audio files, this function returns ''false''.|true}}
 * @see {@link https://wiki.multitheftauto.com/wiki/getSFXStatus|MTASA Wiki}
 * @param audioContainer The container name. Possible values are: feet, genrl, pain_a, script,
 * spc_ea, spc_fa, spc_ga, spc_na, spc_pa
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
export function getSoundBPM(sound: Element): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundBufferLength|MTASA Wiki}
 * @param theSound the sound element which buffer length you want to get.
 * @return * A [[float]] value indicating the buffer playback length of the [[sound]] in seconds.
 * * * ''false'' if the sound is not a stream.
 * * * ''nil'' if the sound is invalid.
 */
export function getSoundBufferLength(theSound: Element): number;

/**
 * Returns the states of all effects of a sound.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundEffects|MTASA Wiki}
 * @param sound a sound element.
 * @return Returns a [[table]] with the effect names as the keys, and their states as the values if
 * successful. Otherwise, it returns ''false''.
 * * '''Sound effect names:'''
 * * {{Sound_Effects}}
 */
export function getSoundEffects(sound: Element): Table;

/**
 * This function gets the fast fourier transform data for an audio stream which is a table of
 * floats representing the current audio frame. This allows things like visualisations.
 * A fast fourier transform generates a table of all the frequencies of the current audio frame
 * which starts at the bass end of the spectrum to mids to highs in that order
 * Should you have any problems there is an example resource located on the resource svn here:
 * [https://github.com/multitheftauto/mtasa-resources/tree/master/%5Bgameplay%5D/visualiser
 * Visualiser]
 * just type "startmusic mystreamurl" in your console and it will play on the cinema billboard near
 * A51 If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundFFTData|MTASA Wiki}
 * @param sound a sound element that is created using playSound or playSound3D. Streams are also
 * supported
 * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
 * @param iBands post processing option allows you to split the samples into the desired amount of
 * bands or bars so if you only need 5 bars this saves a lot of cpu power compared to trying to do it
 * in Lua.
 * @default 0
 * @return Returns a table of '''iSamples'''/2 (or '''iBands''' if '''iBands''' is used) ''floats''
 * representing the current audio frame.
 * * Returns ''false'' if the sound is not playing yet or hasn't buffered in the
 * * case of streams.
 */
export function getSoundFFTData(sound: Element, iSamples: number, iBands?: number): Table;

/**
 * This function is used to return the playback length of the specified [[sound]] element.
 * If the element is a player, this function will use the players voice.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundLength|MTASA Wiki}
 * @param theSound the sound element which length you want to return.
 * @return Returns an [[float]] value indicating the playback length of the [[sound]] element in
 * seconds.
 */
export function getSoundLength(theSound: Element): number;

/**
 * This function gets the left/right level from a [[sound]] [[element]].
 * If the element is a player, this function will use the players voice.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundLevelData|MTASA Wiki}
 * @param theSound the sound element which level data you want to return.
 * @return Returns a two ''integers'' in range from 0 to 32768.
 */
export function getSoundLevelData(theSound: Element): LuaMultiReturn<[number, number]>;

/**
 * Gets a custom [[sound]] max distance at which the sound stops.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundMaxDistance|MTASA Wiki}
 * @param sound a sound element.
 * @return Returns an ''integer'' of the max distance, ''false'' if invalid arguments where passed.
 */
export function getSoundMaxDistance(sound: Element): number;

/**
 * Used to get the meta tags attached to a sound. These provide information about the sound, for
 * instance the title or the artist.
 * *This function does not work on remote WAV files
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundMetaTags|MTASA Wiki}
 * @param sound a sound element.  {{OptionalArg}}
 * @param format a filter string to get a specific meta tag.
 * @default ""
 * @return Returns a [[table]], but only a [[string]] if '''format''' is given, with all data
 * available (keys are listed below) for the sound if successful, ''false'' otherwise. If any data is
 * unavailable then the associated key is not written to the table.
 * * {{Sound_Meta_Tags}}
 */
export function getSoundMetaTags(sound: Element, format?: string): Table;

/**
 * Gets a custom [[sound]] Minimum distance at which the sound stops getting louder.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundMinDistance|MTASA Wiki}
 * @param sound a sound element.
 * @return Returns an ''integer'' of the minimum distance, ''false'' if invalid arguements where
 * passed.
 */
export function getSoundMinDistance(sound: Element): number;

/**
 * This function is used to get the pan level of the specified [[sound]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundPan|MTASA Wiki}
 * @param theSound the sound element which pan you want to get.
 * @return Returns ''float'' value with range from ''-1.0 (left)'' to ''1.0 (right)'', ''false''
 * otherwise.
 */
export function getSoundPan(theSound: Element): number;

/**
 * This function is used to return the current seek position of the specified [[sound]] element.
 * If the element is a player, this function will use the players voice.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundPosition|MTASA Wiki}
 * @param theSound The sound element which seek position you want to return.
 * @return Returns a [[float]] value indicating the seek position of the [[sound]] element in
 * seconds.
 */
export function getSoundPosition(theSound: Element): number;

/**
 * This function gets the properties of a specific [[sound]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundProperties|MTASA Wiki}
 * @param sound a sound element that is created using playSound or playSound3D
 * @return This function returns 3 [[float|floats]] and a [[boolean]] value:
 * * The first float is the sound's [http://en.wikipedia.org/wiki/Sampling_rate sample rate], the
 * second one the sound's [http://en.wikipedia.org/wiki/Tempo tempo], and the third one the
 * [http://en.wikipedia.org/wiki/Pitch_%28music%29 pitch] of the sound. The boolean representing whether the sound
 * is reversed or not.
 */
export function getSoundProperties(sound: Element): LuaMultiReturn<[number, number, number, boolean]>;

/**
 * This function is used to return the playback speed of the specified [[sound]] [[element]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundSpeed|MTASA Wiki}
 * @param theSound the sound element which playback speed you want to return.
 * @return Returns an [[float]] value indicating the playback speed of the [[sound]] [[element]].
 * Default sound playback speed is '''1.0'''.
 */
export function getSoundSpeed(theSound: Element): number;

/**
 * This function is used to return the volume level of the specified [[sound]] [[element]].
 * If the element is a [[player]], this function will use the players voice.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundVolume|MTASA Wiki}
 * @param theSound the sound element which volume you want to return.
 * @return Returns a [[float]] representing the volume level of the [[sound]] [[element]],
 * ''false'' if invalid arguments were passed.
 */
export function getSoundVolume(theSound: Element): number;

/**
 * This function gets the wave form data for an audio stream which is a table of floats
 * representing the current audio frame as a wave.
 * This allows things like visualisations.
 * If the element is a player, this function will use the players voice.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getSoundWaveData|MTASA Wiki}
 * @param sound a sound element that is created using playSound or playSound3D. Streams are also
 * supported
 * @param iSamples allowed samples are 256, 512, 1024, 2048, 4096, 8192 and 16384.
 * @return Returns a [[table]] of '''iSamples''' ''floats'' representing the current audio frame
 * waveform.
 * * Returns ''false'' if the sound is not playing yet or hasn't buffered in the
 * * case of streams.
 */
export function getSoundWaveData(sound: Element, iSamples: number): Table;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/isSoundLooped|MTASA Wiki}
 * @param theSound The sound element which you want to get the loop state.
 * @return Returns ''true'' if the [[sound]] [[element]] is seted to loop, ''false'' otherwise.
 */
export function isSoundLooped(theSound: Element): boolean;

/**
 * This function checks whether panning is enabled in a [[sound]] [[element]] or not.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isSoundPanningEnabled|MTASA Wiki}
 * @return Returns ''true'' if the sound is valid and it has panning enabled, ''false'' if it does
 * not or is not valid.
 */
export function isSoundPanningEnabled(theSound: Element): boolean;

/**
 * This function is used to return the current pause state of the specified [[sound]] [[element]].
 * If the element is a [[player]], this function will use the players voice.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isSoundPaused|MTASA Wiki}
 * @param theSound the sound element which pause state you want to return.
 * @return Returns ''true'' if the [[sound]] [[element]] is paused, ''false'' if unpaused or
 * invalid arguments were passed.
 */
export function isSoundPaused(theSound: Element): boolean;

/**
 * This function plays a sound from GTA's big sound containers.
 * }}
 * In case of these invalid audio files, this function returns ''false''.
 * It also returns ''false'' when trying to play a track deleted in the recent GTA: SA Steam
 * patches (and if the client is using a Steam GTA: SA copy).|true}}
 * @see {@link https://wiki.multitheftauto.com/wiki/playSFX|MTASA Wiki}
 * @param containerName The name of the audio container. Possible values are: feet, genrl, pain_a,
 * script, spc_ea, spc_fa, spc_ga, spc_na, spc_pa
 * @param bankId The audio bank id
 * @param soundId The sound id within the audio bank
 * @param looped A boolean representing whether the sound will be looped
 * @default false
 * @return Returns a [[sound]] element if the sound was successfully created, ''false'' otherwise.
 * * {{New feature/item|3.0140|1.4|6443|
 */
export function playSFX(containerName: string, bankId: number, soundId: number, looped?: boolean): Element;

/**
 * This function plays a sound in the GTA world from GTA's big sound containers.
 * }}
 * In case of these invalid audio files, this function returns ''false''.
 * It also returns ''false'' when trying to play a track deleted in the recent GTA: SA Steam
 * patches (and if the client is using a Steam GTA: SA copy).|true}}
 * @see {@link https://wiki.multitheftauto.com/wiki/playSFX3D|MTASA Wiki}
 * @param containerName The name of the audio container. Possible values are: feet, genrl, pain_a,
 * script, spc_ea, spc_fa, spc_ga, spc_na, spc_pa
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
export function playSFX3D(
    containerName: string,
    bankId: number,
    soundId: number,
    x: number,
    y: number,
    z: number,
    looped?: boolean,
): Element;

/**
 * Creates a [[sound]] [[element]] and plays it immediately after creation for the local player.<br
 * />
 * <br />
 * *The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT, S3M and PLS (e.g.
 * Webstream).
 * *For performance reasons, when using playSound for effects that will be played lots (i.e. weapon
 * fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample
 * rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g. once
 * every 50ms.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/playSound|MTASA Wiki}
 * @param soundPath Can also be raw sound data.  |20460}}  {{OptionalArg}}
 * @param looped a boolean representing whether the sound will be looped. To loop the sound, use
 * true. Loop is not available for streaming sounds, only for sound files.  {{New
 * feature/item|3.0150|1.5||
 * @default false
 * @param throttled a boolean representing whether the sound will be throttled (i.e. given reduced
 * download bandwidth). To throttle the sound, use true. Sounds will be throttled per default and only
 * for URLs.  }}
 * @default true
 * @return Returns a [[sound]] [[element]] if the sound was successfully created, ''false''
 * otherwise.
 */
export function playSound(soundPath: string, looped: boolean, throttled: boolean): Element;

/**
 * Creates a [[sound]] [[element]] in the GTA world and plays it immediately after creation for the
 * local player. [[setElementPosition]] can be used to move the [[sound]] element around after it has
 * been created. Remember to use [[setElementDimension]] after creating the sound to play it outside of
 * dimension 0.<br />
 * <br />
 * *The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT and S3M.
 * *For performance reasons, when using playSound3D for effects that will be played lots (i.e.
 * weapon fire), it is recommend that you convert your audio file to a one channel (mono) WAV with sample
 * rate of 22050 Hz or less. Also consider adding a limit on how often the effect can be played e.g.
 * once every 50ms.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/playSound3D|MTASA Wiki}
 * @param soundPath Can also be raw sound data.  |20460}}
 * @param x a floating point number representing the X coordinate on the map.
 * @param y a floating point number representing the Y coordinate on the map.
 * @param z a floating point number representing the Z coordinate on the map.  {{OptionalArg}}
 * @param looped a boolean representing whether the sound will be looped. To loop the sound, use
 * true.  {{New feature/item|3.0150|1.5||
 * @default false
 * @return Returns a [[sound]] [[element]] if the sound was successfully created, ''false''
 * otherwise.
 */
export function playSound3D(soundPath: string, x: number, y: number, z: number, looped: boolean): Element;

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
export function setSoundEffectEnabled(theSound: Element, effectName: string, bEnable: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundLooped|MTASA Wiki}
 * @param theSound The sound element to set the loop.
 * @return Returns ''true'' if the [[sound]] [[element]] loop was successfully changed, ''false''
 * otherwise.
 * * <syntaxhighlight lang="lua">
 * * addEventHandler('onClientResourceStart', resourceRoot, function()
 * *     local mySound = playSound('sound.mp3')
 * *     setSoundLooped(mySound, true)
 * * end)
 * * </syntaxhighlight>
 */
export function setSoundLooped(theSound: Element, loop: boolean): boolean;

/**
 * Sets a custom [[sound]] max distance at which the sound stops.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundMaxDistance|MTASA Wiki}
 * @param sound a sound element.
 * @param distance the default value for this is 20
 * @return Returns a ''true'' if the max distance was set, ''false'' otherwise.
 */
export function setSoundMaxDistance(sound: Element, distance: number): boolean;

/**
 * Sets a custom [[sound]] Minimum distance at which the sound stops getting louder.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundMinDistance|MTASA Wiki}
 * @param sound a sound element.
 * @param distance an integer representing the distance the sound stops getting louder. the default
 * value for this is 5
 * @return Returns a ''true'' if the minimum distance was set, ''false'' otherwise.
 */
export function setSoundMinDistance(sound: Element, distance: number): boolean;

/**
 * This function is used to change the pan level of the specified [[sound]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPan|MTASA Wiki}
 * @param theSound The sound element which pan you want to modify.
 * @param pan A float|floating point number representing the desired pan level. Range is from -1.0
 * (left) to 1.0 (right)
 * @return Returns ''true'' if the [[sound]] element pan was successfully changed, ''false''
 * otherwise.
 */
export function setSoundPan(theSound: Element, pan: number): boolean;

/**
 * This function toggles the panning of a sound (hearing it closer to the left or right side of the
 * speakers due to the camera position). By default a sound has its panning enabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPanningEnabled|MTASA Wiki}
 * @param sound a sound element to change the panning of.
 * @param enable true to enable the panning, false otherwise.
 * @return Returns ''true'' if the sound is valid and good arguments were passed, ''false'' if not.
 * * If the sound is not 3D, this function will return ''true'' as well, but
 * [[isSoundPanningEnabled]] will always return ''true'' after this (so it has no effect).
 */
export function setSoundPanningEnabled(sound: Element, enable: boolean): boolean;

/**
 * This function is used to either pause or unpause the playback of the specified [[sound]]
 * [[element]].
 * Use a player element to control a players voice with this function.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPaused|MTASA Wiki}
 * @param theSound the sound element which you want to pause/unpause.
 * @param paused a boolean value representing whether the sound should be paused or not. To pause
 * the sound, use true.
 * @return Returns ''true'' if the [[sound]] [[element]] was successfully paused, ''false''
 * otherwise.
 */
export function setSoundPaused(theSound: Element, paused: boolean): boolean;

/**
 * This function is used to change the seek position of the specified [[sound]] element.
 * Use a player element to control a players voice with this function.
 * *To set position of a remote audio file you have to pause it first, then set the position and
 * then unpause it.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundPosition|MTASA Wiki}
 * @param theSound the sound element which seek position you want to modify.
 * @param pos a float value representing the new seek position of the sound element in seconds.
 * @return Returns ''true'' if the [[sound]] element's seek position was successfully changed,
 * ''false'' otherwise.
 */
export function setSoundPosition(theSound: Element, pos: number): boolean;

/**
 * This function edits the properties of a specific [[sound]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundProperties|MTASA Wiki}
 * @param sound a sound element that is created using playSound or playSound3D
 * @param fSampleRate a float that defines the new sounds
 * http://en.wikipedia.org/wiki/Sampling_rate sample rate
 * @param fTempo a float that defines the new sound http://en.wikipedia.org/wiki/Tempo tempo
 * @param fPitch a float that defines the new sound http://en.wikipedia.org/wiki/Pitch_%28music%29
 * pitch  {{OptionalArg}}
 * @param bReverse a boolean representing whether the sound will be reversed or not.
 * @default false
 * @return Returns ''true'' if the properties sucessfully set, ''false'' otherwise.
 */
export function setSoundProperties(
    sound: Element,
    fSampleRate: number,
    fTempo: number,
    fPitch: number,
    bReverse?: boolean,
): boolean;

/**
 * This function can be used to change the playback speed of the specified [[sound]] [[element]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundSpeed|MTASA Wiki}
 * @param theSound the sound element which volume you want to modify.
 * @param speed a floating point number representing the desired sound playback speed.
 * @return Returns ''true'' if the [[sound]] element playback speed was successfully changed,
 * ''false'' otherwise.
 */
export function setSoundSpeed(theSound: Element, speed: number): boolean;

/**
 * This function is used to change the volume level of the specified [[sound]] [[element]].
 * Use a player element to control a players voice with this function.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSoundVolume|MTASA Wiki}
 * @param theSound The sound element which volume you want to modify or a player element which
 * voice volume you want to modify.
 * @param volume A floating point number representing the desired volume level. Range is from 0.0
 * to 1.0. This can go above 1.0 for amplification.
 * @return Returns ''true'' if the [[sound]] [[element]] volume was successfully changed, ''false''
 * otherwise.
 */
export function setSoundVolume(theSound: Element, volume: number): boolean;

/**
 * Stops the sound playback for specified [[sound]] [[element]]. The sound element is also
 * destroyed.
 * @see {@link https://wiki.multitheftauto.com/wiki/stopSound|MTASA Wiki}
 * @param theSound the sound element you want to stop playing.
 * @return Returns ''true'' if the sound was successfully stopped, ''false'' otherwise.
 */
export function stopSound(theSound: Element): boolean;

/**
 * This function plays a frontend sound for the specified player.
 * @see {@link https://wiki.multitheftauto.com/wiki/playSoundFrontEnd|MTASA Wiki}
 * @param sound a whole int specifying the sound id to play. Valid values are:  {{Sounds}}
 * @return Returns ''true'' if the sound was successfully played, ''false'' otherwise.
 */
export function playSoundFrontEnd(sound: number): boolean;
