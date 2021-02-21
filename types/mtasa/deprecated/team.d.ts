/**
 *
 *
 *
 *
 *
 */
import { Player, Team } from "./element";

export function countPlayersInTeam(theTeam: Team): number;

export function getTeamColor(theTeam: Team): [number, number, number];

export function getTeamFriendlyFire(theTeam: Team): boolean;

export function getTeamFromName(teamName: string): Team;

export function getTeamName(theTeam: Team): string;

export function createTeam(teamName: string, colorR?: 255, colorG?: 255, colorB?: 255): Team;

export function getPlayerTeam(thePlayer: Player): Team;

export function setPlayerTeam(thePlayer: Player, theTeam: Team): boolean;

export function setTeamColor(theTeam: Team, colorR: number, colorG: number, colorB: number): boolean;

export function setTeamFriendlyFire(theTeam: Team, friendlyFire: boolean): boolean;

export function setTeamName(theTeam: Team, newName: string): boolean;
