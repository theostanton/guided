export interface StoreState {
    isSidebarVisible: boolean;
}
export declare const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export declare type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR;
export interface ToggleSidebar {
    type: TOGGLE_SIDEBAR;
}
export declare const toggleSidebar: () => {
    type: string;
};
export declare const reducer: (state: StoreState, action: ToggleSidebar) => StoreState;
export declare const initialState: StoreState;
export declare const store: any;
//# sourceMappingURL=store.d.ts.map