import { mtasa as server } from "../../types/mtasa/server";

// Workaround to get some arguments
const serverElement = 0 as unknown as server.Element;
const serverObject = 0 as unknown as server.MTASAObject;


const createObject1: server.MTASAObject = server.createObject(
    500, 34, 35, 36
);

const createObject2: server.MTASAObject = server.createObject(
    500, 34, 35, 36
);

const moveObject1: boolean = server.moveObject(
    serverObject,
    13,
    0, 0, 0
);

const moveObject2: boolean = server.moveObject(
    serverObject,
    13,
    0, 0, 0,
    15, 16, 17
);

const stopObject: boolean = server.stopObject(
    serverObject
);

const getObjectScale: LuaMultiReturn<[number, number, number]> = server.getObjectScale(
    serverObject
);

const setObjectScale1: boolean = server.setObjectScale(
    serverObject,
    56
);

const setObjectScale2: boolean = server.setObjectScale(
    serverObject,
    56,
    4, 5
);

