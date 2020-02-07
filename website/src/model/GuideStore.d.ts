import { Guide } from "model";
export default class GuideStore {
    guide: Guide | undefined;
    private subscription;
    subscribe(slug: string, owner: string): void;
    private fetch;
    unsubscribe(): void;
}
declare const guideStore: GuideStore;
export { guideStore, };
//# sourceMappingURL=GuideStore.d.ts.map