declare type EventBody = {};
export declare function send<Body extends EventBody>(queueName: string, body: Body): Promise<void>;
export declare function receive<Body extends EventBody>(event: any, _: any, action: (body: Body) => Promise<void>): Promise<any>;
export {};
//# sourceMappingURL=index.d.ts.map