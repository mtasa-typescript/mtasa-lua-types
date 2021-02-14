/**
 * 
 * 
 * 
 * 
 * 
 */

declare function countPlayersInTeam(theTeam: Team): number

declare function getTeamColor(theTeam: Team): [number, number, number]

declare function getTeamFriendlyFire(theTeam: Team): boolean

declare function getTeamFromName(teamName: string): Team

declare function getTeamName(theTeam: Team): string

declare function countPlayersInTeam(theTeam: Team): table

declare function createTeam(teamName: string, colorR?: 255, colorG?: 255, colorB?: 255): Team

declare function getPlayerTeam(thePlayer: Player): Team

declare function setPlayerTeam(thePlayer: Player, theTeam: Team): boolean

declare function setTeamColor(theTeam: Team, colorR: number, colorG: number, colorB: number): boolean

declare function setTeamFriendlyFire(theTeam: Team, friendlyFire: boolean): boolean

declare function setTeamName(theTeam: Team, newName: string): boolean