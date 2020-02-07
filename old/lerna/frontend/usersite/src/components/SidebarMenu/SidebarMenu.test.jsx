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
const SidebarMenu_1 = require("./SidebarMenu");
const Adapter = require("enzyme-adapter-react-16");
enzyme_1.configure({ adapter: new Adapter() });
const items = [
    { name: "Home", path: "/", exact: true },
    { name: "About", path: "/about/", exact: true },
    { name: "Blog", path: "/blog/", exact: false },
];
const LinkStub = (props) => <div {...props}/>;
describe("SidebarMenu component", () => {
    it("should render correctly", () => {
        const wrapper = enzyme_1.render(<SidebarMenu_1.SidebarMenu Link={LinkStub} pathname="/" items={items} visible/>);
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=SidebarMenu.test.jsx.map