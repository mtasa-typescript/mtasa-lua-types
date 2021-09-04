import { mtasa as client } from 'client';
import { mtasa as server } from 'server';

// Workaround to get some arguments
const serverElement = 0 as unknown as server.Element;

const addEvent1: boolean = server.addEvent('event');

const addEvent2: boolean = server.addEvent('event', true);

const addEventHandler1: boolean = server.addEventHandler(
    'event',
    serverElement,
    function () {
        return;
    },
);

const addEventHandler2: boolean = server.addEventHandler(
    'event',
    serverElement,
    function () {
        return;
    },
    false,
    'high',
);

const getEventHandlers: LuaTable = server.getEventHandlers(
    'event',
    serverElement,
);

const cancelEvent1: boolean = server.cancelEvent(false);

const cancelEvent2: boolean = server.cancelEvent(false, 'For testing purposes');

const getCancelReason = server.getCancelReason();

const removeEventHandler: boolean = server.removeEventHandler(
    'event',
    serverElement,
    function () {
        return;
    },
);

const triggerClientEvent1: boolean = server.triggerClientEvent(
    serverElement,
    'event',
    serverElement,
    null,
);

const triggerClientEvent2: boolean = server.triggerClientEvent(
    'event',
    serverElement,
);

const triggerEvent: boolean = server.triggerEvent('event', serverElement);

const wasEventCancelled: boolean = server.wasEventCancelled();

const triggerLatentClientEvent1: boolean = server.triggerLatentClientEvent(
    serverElement,
    'event',
    serverElement,
    null,
);

const triggerLatentClientEvent2: boolean = server.triggerLatentClientEvent(
    'event',
    serverElement,
);

const getLatentEventHandles: LuaTable = server.getLatentEventHandles(
    server.Player.getRandom(),
);

const getLatentEventStatus1: LuaTable = server.getLatentEventStatus(
    server.Player.getRandom(),
    5,
);

const getLatentEventStatus2: LuaTable = client.getLatentEventStatus(6);

const cancelLatentEvent1: boolean = server.cancelLatentEvent(
    server.Player.getRandom(),
    5,
);

const cancelLatentEvent2: boolean = client.cancelLatentEvent(6);
