// TODO: make something with that

import { FetchRemoteCallback } from '../shared/utils/callback';

export type Userdata = any;
export type TextItem = Userdata;
export type TextDisplay = Userdata;
export type Pickup = Userdata;
export type Request = Userdata;

export { Account } from './oop/Account';
export { ACL } from './oop/ACL';
export { ACLGroup } from './oop/ACLGroup';
export { Player } from './oop/Player';
export { Ban } from './oop/Ban';
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
export { MTASAObject } from './oop/MTASAObject';
export { RadarArea } from './oop/RadarArea';
export { Water } from './oop/Water';
export { Timer } from './oop/Timer';
export { XML } from './oop/XML';

export { FetchRemoteCallback } from '../shared/utils/callback';
export { GenericEventHandler } from '../shared/utils/event';

export { CommandHandler } from './utils/callback';

export type HandleFunction = (...args: any[]) => any;
export type TimerCallbackFunction = (...args: any[]) => void;
