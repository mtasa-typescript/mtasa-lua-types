import { mtasa as server } from 'server';
import { mtasa as client } from 'client';
import { BindKeyCallback as ServerBindKeyCallback } from 'server/utils/callback';
import { BindKeyCallback as ClientBindKeyCallback } from 'client/utils/callback';

server.bindKey(
    server.Player.getRandom(),
    '2',
    'down',
    function (keyPresser, key, keyState) {
        server.iprint(keyPresser, key, keyState);
    },
);

type ServerXCallbackType = ServerBindKeyCallback<[number, string]>;

server.bindKey<ServerXCallbackType>(
    server.Player.getRandom(),
    '2',
    'down',
    function (keyPresser, key, keyState, arg0: number, arg1: string) {
        server.iprint(keyPresser, key, keyState, arg0, arg1);
    },
    6,
    'a',
);

client.bindKey('accelerate', 'down', function (key, keyState) {
    server.iprint(key, keyState);
});

interface CallbackAdditionalData {
    id: number;
    message: string;
}

type ClientXCallbackType = ClientBindKeyCallback<[CallbackAdditionalData]>;

client.bindKey<ClientXCallbackType>(
    '2',
    'down',
    function (key, keyState, data: CallbackAdditionalData) {
        server.iprint(data);
    },
    {
        id: 5,
        message: 'For testing purposes',
    },
);
