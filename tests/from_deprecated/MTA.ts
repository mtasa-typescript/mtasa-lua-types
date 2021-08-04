/**
 * Tests backward compatibility
 * With https://github.com/Subtixx/mtasa-typescript
 */

import { mtasa as server } from 'types/mtasa/server';
import { mtasa as client } from 'types/mtasa/client';

const exportsClient: LuaTable = client.exports;
const exportsServer: LuaTable = server.exports;

const resourceClient: client.Resource = client.resource;
const resourceServer: server.Resource = server.resource;

const resourceRootClient: client.Element = client.resourceRoot;
const resourceRootServer: server.Element = server.resourceRoot;

const root: client.Element = client.root;
const rootClient: server.Element = server.root;

const guiRoot: client.Element = client.guiRoot;

const localPlayer: client.Player = client.localPlayer;

const sourceClient: client.Element = client.source;
const source: server.Element = server.source;

const eventNameClient: string = client.eventName;
const eventNameServer: string = server.eventName;

const clientSource: server.Player = server.client;

const sourceResourceRoot: server.Element = server.sourceResourceRoot;
const sourceResource: server.Resource = server.sourceResource;

const sourceTimerClient: client.Timer = client.sourceTimer;
const sourceTimerServer: server.Timer = server.sourceTimer;

client.addCommandHandler('command', () => null);
client.addCommandHandler('command', () => null, false);
server.addCommandHandler('command', () => null, true, false);
server.addCommandHandler('command', () => null, true);
server.addCommandHandler('command', () => null);

client.outputChatBox('message', 255, 255, 255, true);
client.outputChatBox('message');
server.outputChatBox('message', server.getRandomPlayer(), 255, 255, 255, true);
server.outputChatBox('message', server.getRandomPlayer());
