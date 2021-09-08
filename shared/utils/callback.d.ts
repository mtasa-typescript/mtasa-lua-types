/**
 * This is the function that should receive the data returned
 * from the remote server. The callback argument list should be
 * @param responseData A string containing the remote response or "ERROR" if there was a problem
 * @param error A number containing the error number or zero if there was no error. <br>
 * A list of possible error values are: <br>
 * * 1-89: See cURL website or its mirror at cURL errors <br>
 * * 400-599: See HTTP status codes <br>
 * * 1002: Download aborted <br>
 * * 1003: Failed to initialize <br>
 * * 1004: Unable to parse url <br>
 * * 1005: Unable to resolve host name <br>
 * * 1006: Destination IP not allowed <br>
 * * 1007: File error <br>
 * @param arguments The arguments that were passed into fetchRemote
 */
export type FetchRemoteCallback<AdditionalArgs extends any[] = []> = (
    this: void,
    responseData: string,
    error: number,
    ...args: AdditionalArgs
) => void;
