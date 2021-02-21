/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Sound {
    /**
     * @see {@link getSoundBufferLength}
     */
    bufferLength: number;
    /**
     * @see {@link getSoundLength}
     */
    length: number;
    /**
     * @see {@link getSoundMaxDistance}
     */
    maxDistance: number;
    /**
     * @see {@link getSoundMinDistance}
     */
    minDistance: number;
    /**
     * @see {@link getSoundPan}
     */
    pan: number;
    /**
     * @see {@link getSoundPosition}
     */
    playbackPosition: number;
    /**
     * @see {@link getSoundSpeed}
     */
    speed: number;
    /**
     * @see {@link getSoundVolume}
     */
    volume: number;
    /**
     * @see {@link isSoundPanningEnabled}
     */
    panningEnabled: boolean;
    /**
     * @see {@link isSoundPaused}
     */
    paused: boolean;

    /**
     * @see {@link getSoundBufferLength}
     */
    getBufferLength(): number;

    /**
     * @see {@link getSoundLength}
     */
    getLength(): number;

    /**
     * @see {@link getSoundMaxDistance}
     */
    getMaxDistance(): number;

    /**
     * @see {@link getSoundMinDistance}
     */
    getMinDistance(): number;

    /**
     * @see {@link getSoundPan}
     */
    getPan(): number;

    /**
     * @see {@link getSoundPosition}
     */
    getPlaybackPosition(): number;

    /**
     * @see {@link getSoundProperties}
     */
    getProperties(): LuaMultiReturn<[number, number, number, boolean]>;

    /**
     * @see {@link getSoundSpeed}
     */
    getSpeed(): number;

    /**
     * @see {@link getSoundVolume}
     */
    getVolume(): number;

    /**
     * @see {@link isSoundLooped}
     */
    isLooped(): boolean;

    /**
     * @see {@link isSoundPanningEnabled}
     */
    isPanningEnabled(): boolean;

    /**
     * @see {@link isSoundPaused}
     */
    isPaused(): boolean;

    /**
     * @see {@link setSoundEffectEnabled}
     */
    setEffectEnabled(effectName: string, bEnable: boolean): boolean;

    /**
     * @see {@link setSoundLooped}
     */
    setLooped(loop: boolean): boolean;

    /**
     * @see {@link setSoundMaxDistance}
     */
    setMaxDistance(distance: number): boolean;

    /**
     * @see {@link setSoundMinDistance}
     */
    setMinDistance(distance: number): boolean;

    /**
     * @see {@link setSoundPan}
     */
    setPan(pan: number): boolean;

    /**
     * @see {@link setSoundPanningEnabled}
     */
    setPanningEnabled(enable: boolean): boolean;

    /**
     * @see {@link setSoundPaused}
     */
    setPaused(paused: boolean): boolean;

    /**
     * @see {@link setSoundPosition}
     */
    setPlaybackPosition(pos: number): boolean;

    /**
     * @see {@link setSoundProperties}
     */
    setProperties(fSampleRate: number, fTempo: number, fPitch: number, bReverse?: boolean): boolean;

    /**
     * @see {@link setSoundSpeed}
     */
    setSpeed(speed: number): boolean;

    /**
     * @see {@link setSoundVolume}
     */
    setVolume(volume: number): boolean;
}
