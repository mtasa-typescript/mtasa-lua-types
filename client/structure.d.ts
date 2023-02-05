export type Userdata = unknown;
export type TextItem = Userdata;
export type ProgressBar = Userdata;
export type Gui = Userdata;
export type EngineIFP = Userdata;
export type PrimitiveType = Userdata;
export type GuiScrollBar = Userdata;
export type ObjectGroup = Userdata;
export type Request = Userdata;
export type Svg = Userdata;

export { Player } from './oop/Player';
export { Blip } from './oop/Blip';
export { ColShape } from './oop/ColShape';
export { Element } from './oop/Element';
export { Ped } from './oop/Ped';
export { Resource } from './oop/Resource';
export { Team } from './oop/Team';
export { Vehicle } from './oop/Vehicle';
export { XmlNode } from './oop/XmlNode';
export { File } from './oop/File';
export { Marker } from './oop/Marker';
export { RadarArea } from './oop/RadarArea';
export { Water } from './oop/Water';
export { Timer } from './oop/Timer';
export { Browser } from './oop/Browser';
export { Light } from './oop/Light';
export { Effect } from './oop/Effect';
export { Material } from './oop/Material';
export { DxTexture } from './oop/DxTexture';
export { Searchlight } from './oop/Searchlight';
export { Weapon } from './oop/Weapon';
export { MTASAObject } from './oop/MTASAObject';
export { GuiBrowser } from './oop/gui/GuiBrowser';
export { GuiMemo } from './oop/gui/GuiMemo';
export { GuiElement } from './oop/gui/GuiElement';
export { GuiWindow } from './oop/gui/GuiWindow';
export { GuiEdit } from './oop/gui/GuiEdit';
export { Pickup } from './oop/Pickup';
export { Projectile } from './oop/Projectile';
export { EngineTXD } from './oop/EngineTXD';
export { EngineDFF } from './oop/EngineDFF';
export { EngineCOL } from './oop/EngineCOL';

export { FetchRemoteCallback } from '../shared/utils/callback';
export { GenericEventHandler } from '../shared/utils/event';

export {
    CommandHandler,
    BindKeyCallback,
    BindKeyCallbackVarArgs,
    SvgCallback,
} from './utils/callback';

export {
    HandleFunction,
    TimerCallbackFunction,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../shared/structure';

export { ControlName, KeyName, KeyState } from '../shared/utils/misc';
