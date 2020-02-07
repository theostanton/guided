import publishGuide from "./publishGuide";
declare const pubsub: any;
declare const Subscription: {
    guide: {
        resolve: (args: {
            guide: any;
        }) => any;
        subscribe: () => any;
    };
};
export { Subscription, pubsub, publishGuide };
//# sourceMappingURL=index.d.ts.map