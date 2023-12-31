import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: [ '.tsx', '.ts', '.js' ],
        modules: [
            'node_modules'
        ],
        alias: {
            '@': options.paths.src
        }
    };
}