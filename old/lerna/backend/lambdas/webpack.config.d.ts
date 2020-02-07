declare const _exports: {
    context: string;
    mode: string;
    entry: any;
    devtool: string;
    resolve: {
        extensions: string[];
        symlinks: boolean;
        cacheWithContext: boolean;
    };
    output: {
        libraryTarget: string;
        path: string;
        filename: string;
    };
    target: string;
    externals: any[];
    module: {
        rules: {
            test: RegExp;
            loader: string;
            exclude: string[][];
            options: {
                transpileOnly: boolean;
                experimentalWatchApi: boolean;
            };
        }[];
    };
    plugins: never[];
};
export = _exports;
//# sourceMappingURL=webpack.config.d.ts.map