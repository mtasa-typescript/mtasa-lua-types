/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import {
    Account,
    ACL,
    ACLGroup,
    Player,
    Table,
    Ban,
    Blip,
    ColShape,
    Element,
    Ped,
    Pickup,
    Resource,
    Team,
    TextDisplay,
    Vehicle,
    XmlNode,
    TextItem,
    HandleFunction,
    File,
    Marker,
    RadarArea,
    Request,
    Userdata,
    Timer,
    Water,
    Browser,
    ProgressBar,
    Light,
    Effect,
    Gui,
    Searchlight,
    Weapon,
    GuiBrowser,
    Txd,
    Dff,
    Col,
    Ifp,
    PrimitiveType,
    GuiScrollBar,
    GuiMemo,
    Texture,
    ObjectGroup,
    Projectile,
    Matrix
} from "types/mtasa/client/structure";

/**
 * Creates an explosion of a certain type at a specified point in the world. If creator is
 * specified, the explosion will occur only in its dimension.
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
