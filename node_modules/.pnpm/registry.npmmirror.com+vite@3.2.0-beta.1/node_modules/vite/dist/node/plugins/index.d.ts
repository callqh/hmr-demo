import type { PluginHookUtils, ResolvedConfig } from '../config';
import type { Plugin } from '../plugin';
export declare function resolvePlugins(config: ResolvedConfig, prePlugins: Plugin[], normalPlugins: Plugin[], postPlugins: Plugin[]): Promise<Plugin[]>;
export declare function createPluginHookUtils(plugins: readonly Plugin[]): PluginHookUtils;
export declare function getSortedPluginsByHook(hookName: keyof Plugin, plugins: readonly Plugin[]): Plugin[];
