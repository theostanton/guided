export declare namespace siteMetadata {
    export const title: string;
    export const googleVerification: string;
    export const disqus: string;
    export const mapboxToken: string;
}
export declare const plugins: (string | {
    resolve: string;
    options: {
        name: string;
        path: string;
        trackingId?: undefined;
        head?: undefined;
        anonymize?: undefined;
        respectDNT?: undefined;
        short_name?: undefined;
        start_url?: undefined;
        background_color?: undefined;
        theme_color?: undefined;
        display?: undefined;
    };
} | {
    resolve: string;
    options: {
        trackingId: string;
        head: boolean;
        anonymize: boolean;
        respectDNT: boolean;
        name?: undefined;
        path?: undefined;
        short_name?: undefined;
        start_url?: undefined;
        background_color?: undefined;
        theme_color?: undefined;
        display?: undefined;
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
        path?: undefined;
        trackingId?: undefined;
        head?: undefined;
        anonymize?: undefined;
        respectDNT?: undefined;
    };
})[];
//# sourceMappingURL=gatsby-config.d.ts.map