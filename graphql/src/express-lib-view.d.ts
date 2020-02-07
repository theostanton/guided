export = View;
declare function View(name: string, options: any): void;
declare class View {
    constructor(name: string, options: any);
    defaultEngine: any;
    ext: any;
    name: string;
    root: any;
    engine: any;
    path: any;
    lookup(name: string): string | undefined;
    render(options: any, callback: Function): void;
    resolve(dir: string, file: string): string | undefined;
}
//# sourceMappingURL=express-lib-view.d.ts.map