declare type Command = "send" | "create" | "list" | "listen";
export declare type Options = {
    command: Command;
    stage: "local" | "staging";
    queue: string;
    body?: string;
};
export declare const COMMANDS: {
    [key in Command]: (options: Options) => Promise<void>;
};
export {};
//# sourceMappingURL=index.d.ts.map