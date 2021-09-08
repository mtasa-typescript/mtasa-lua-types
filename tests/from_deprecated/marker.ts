import { mtasa as server } from 'server';

// Workaround to get some arguments
const serverElement = 0 as unknown as server.Element;
const serverMarker = 0 as unknown as server.Marker;

const createMarker1: server.Marker = server.createMarker(1, 2, 3);

const createMarker2: server.Marker = server.createMarker(
    1,
    2,
    3,
    'marker',
    6,
    7,
    8,
    9,
    0,
    serverElement,
);

const getMarkerColor: LuaMultiReturn<[number, number, number, number]> =
    server.getMarkerColor(serverMarker);

const getMarkerCount: number = server.getMarkerCount();

const getMarkerIcon: string = server.getMarkerIcon(serverMarker);

const getMarkerSize: number = server.getMarkerSize(serverMarker);

const getMarkerTarget: LuaMultiReturn<[number, number, number]> =
    server.getMarkerTarget(serverMarker);

const getMarkerType: string = server.getMarkerType(serverMarker);

const setMarkerColor: boolean = server.setMarkerColor(
    serverMarker,
    65,
    67,
    68,
    255,
);

const setMarkerIcon: boolean = server.setMarkerIcon(serverMarker, 'finish');

const setMarkerSize: boolean = server.setMarkerSize(serverMarker, 56);

const setMarkerTarget: boolean = server.setMarkerTarget(serverMarker, 5, 6, 7);

const setMarkerType: boolean = server.setMarkerType(serverMarker, 'checkpoint');
