import type { Connect } from 'dep-types/connect';
import type { ViteDevServer } from '..';
export declare function transformMiddleware(server: ViteDevServer): Connect.NextHandleFunction;
