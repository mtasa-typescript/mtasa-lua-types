import { mtasa as server } from '../../types/mtasa/server';

// Workaround to get some arguments
const serverElement = 0 as unknown as server.Element;
const serverArea = 0 as unknown as server.RadarArea;

const createRadarArea1: server.RadarArea = server.createRadarArea(
    0,
    0,
    100,
    50,
);

const createRadarArea2: server.RadarArea = server.createRadarArea(
    0,
    0,
    100,
    50,
    255,
    255,
    255,
    100,
    server.root,
);

const getRadarAreaColor: LuaMultiReturn<[number, number, number, number]> =
    server.getRadarAreaColor(serverArea);

const getRadarAreaSize: LuaMultiReturn<[number, number]> =
    server.getRadarAreaSize(serverArea);

const isInsideRadarArea: boolean = server.isInsideRadarArea(serverArea, 50, 60);

const isRadarAreaFlashing: boolean = server.isRadarAreaFlashing(serverArea);

const setRadarAreaColor: boolean = server.setRadarAreaColor(
    serverArea,
    35,
    60,
    200,
    255,
);

const setRadarAreaFlashing: boolean = server.setRadarAreaFlashing(
    serverArea,
    false,
);

const setRadarAreaSize: boolean = server.setRadarAreaSize(serverArea, 50, 60);
