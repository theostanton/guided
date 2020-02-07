export declare namespace siteMetadata {
    export const title: string;
    export const description: string;
}
export declare const plugins: (string | {
    resolve: string;
    options: {
        alias: {
            "src": string;
            "components": string;
            "model": string;
            "api": string;
            "layouts": string;
            "utils": string;
        };
        extensions: string[];
        name?: undefined;
        short_name?: undefined;
        start_url?: undefined;
        background_color?: undefined;
        theme_color?: undefined;
        display?: undefined;
        isTSX?: undefined;
        jsxPragma?: undefined;
        allExtensions?: undefined;
        bucketName?: undefined;
        region?: undefined;
        protocol?: undefined;
        hostname?: undefined;
    };
} | {
    resolve: string;
    options: {
        name: string;
        short_name: string;
        start_url: string;
        background_color: string;
        theme_color: string;
        display: string;
        alias?: undefined;
        extensions?: undefined;
        isTSX?: undefined;
        jsxPragma?: undefined;
        allExtensions?: undefined;
        bucketName?: undefined;
        region?: undefined;
        protocol?: undefined;
        hostname?: undefined;
    };
} | {
    resolve: string;
    options: {
        isTSX: boolean;
        jsxPragma: string;
        allExtensions: boolean;
        alias?: undefined;
        extensions?: undefined;
        name?: undefined;
        short_name?: undefined;
        start_url?: undefined;
        background_color?: undefined;
        theme_color?: undefined;
        display?: undefined;
        bucketName?: undefined;
        region?: undefined;
        protocol?: undefined;
        hostname?: undefined;
    };
} | {
    resolve: string;
    options: {
        bucketName: string;
        region: string;
        protocol: string;
        hostname: string;
        alias?: undefined;
        extensions?: undefined;
        name?: undefined;
        short_name?: undefined;
        start_url?: undefined;
        background_color?: undefined;
        theme_color?: undefined;
        display?: undefined;
        isTSX?: undefined;
        jsxPragma?: undefined;
        allExtensions?: undefined;
    };
})[];
//# sourceMappingURL=gatsby-config.d.ts.map