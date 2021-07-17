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
    FetchRemoteCallback,
    GenericEventHandler
} from '../structure';

/** @customConstructor Sound3D */
export class Sound3D {
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
    constructor(
        soundPath: string,
        x: number,
        y: number,
        z: number,
        looped?: boolean
    );
}
