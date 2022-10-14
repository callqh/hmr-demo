import type { Plugin } from '../plugin';
export interface ChunkMetadata {
    importedAssets: Set<string>;
    importedCss: Set<string>;
}
/**
 * Prepares the rendered chunks to contain additional metadata during build.
 */
export declare function metadataPlugin(): Plugin;
