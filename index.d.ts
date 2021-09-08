// Minimum TypeScript Version: 3.7

/**
 * Due to https://github.com/microsoft/TypeScript/issues/30033#issuecomment-792254387
 * VSCode is unable to suggest auto import from libraries in node_modules
 *
 * Due to https://github.com/microsoft/TypeScript/issues/43034#issuecomment-788668552
 * There is a workaround to forceful index packages
 */

import {} from './client';
import {} from './server';

import {} from './shared/utf8';
import {} from './shared/vector';
import {} from './shared/structure';
