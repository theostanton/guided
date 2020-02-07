"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
require("jest");
const React = __importStar(require("react"));
const HeaderMenu_1 = require("./HeaderMenu");
const Adapter = require("enzyme-adapter-react-16");
enzyme_1.configure({ adapter: new Adapter() });
const items = [
    { name: "Home", path: "/", exact: true },
    { name: "About", path: "/about/", exact: true },
    { name: "Blog", path: "/blog/", exact: false },
];
const LinkStub = (props) => <div {...props}/>;
const dispatchStub = (a) => a;
describe("HeaderMenu component", () => {
    it("should nothing active", () => {
        const wrapper = enzyme_1.shallow(<HeaderMenu_1.HeaderMenu Link={LinkStub} items={items} pathname="/plop" dispatch={dispatchStub}/>);
        expect(wrapper.find({ active: true }).length).toBe(0);
    });
    it("should have about as active (match exact)", () => {
        const wrapper = enzyme_1.shallow(<HeaderMenu_1.HeaderMenu Link={LinkStub} items={items} pathname="/about/" dispatch={dispatchStub}/>);
        expect(wrapper.find({ name: "About" }).prop("active")).toBeTruthy();
    });
    it("should have blog as active (match not exact)", () => {
        const wrapper = enzyme_1.shallow(<HeaderMenu_1.HeaderMenu Link={LinkStub} items={items} pathname="/blog/toto" dispatch={dispatchStub}/>);
        expect(wrapper.find({ name: "Blog" }).prop("active")).toBeTruthy();
    });
    it("should have inverted style", () => {
        const wrapper = enzyme_1.shallow(<HeaderMenu_1.HeaderMenu Link={LinkStub} items={items} pathname="/blog/toto" dispatch={dispatchStub} inverted/>);
        expect(wrapper.find({ inverted: true }).length).toBe(1);
    });
    it("should dispatch the correct message on burger click", () => {
        const dispatchMock = jest.fn();
        const wrapper = enzyme_1.shallow(<HeaderMenu_1.HeaderMenu Link={LinkStub} items={items} pathname="" dispatch={dispatchMock}/>);
        wrapper.find(".mobile.only").simulate("click");
        expect(dispatchMock.mock.calls.length).toBe(1);
    });
});
//# sourceMappingURL=HeaderMenu.test.jsx.map