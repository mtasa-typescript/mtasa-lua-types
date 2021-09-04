import { mtasa as server } from '../../types/mtasa/server';
import { mtasa as client } from '../../types/mtasa/client';

const serverTeam = 0 as unknown as server.Team;
const clientTeam = 0 as unknown as client.Team;

const serverPlayer = 0 as unknown as server.Player;
const clientPlayer = 0 as unknown as client.Player;

const countPlayersInTeam: number = server.countPlayersInTeam(serverTeam);

const getTeamColor: LuaMultiReturn<[number, number, number]> =
    server.getTeamColor(serverTeam);

const getTeamFriendlyFire: boolean = server.getTeamFriendlyFire(serverTeam);

const getTeamFromName: server.Team = server.getTeamFromName('name');

const getTeamName: string = server.getTeamName(serverTeam);

const createTeam: server.Team = server.createTeam('name', 45, 46, 47);

const getPlayerTeam: server.Team = server.getPlayerTeam(serverPlayer);

const setPlayerTeam: boolean = server.setPlayerTeam(serverPlayer, serverTeam);

const setTeamColor: boolean = server.setTeamColor(serverTeam, 45, 40, 100);

const setTeamFriendlyFire: boolean = server.setTeamFriendlyFire(
    serverTeam,
    true,
);

const setTeamName: boolean = server.setTeamName(serverTeam, 'new-name');
