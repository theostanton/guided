"use strict";
/* tslint:disable no-var-requires */
/* tslint:disable no-console */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_helmet_1 = __importDefault(require("react-helmet"));
const config = require("../gatsby-config.js");
exports.default = (props) => {
    const head = react_helmet_1.default.rewind();
    const verification = config.siteMetadata && config.siteMetadata.googleVerification ? React.createElement("meta", { name: "google-site-verification", content: config.siteMetadata.googleVerification }) : null;
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            props.headComponents,
            React.createElement("title", null, "My website"),
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0" }),
            head.title.toComponent(),
            head.meta.toComponent(),
            head.link.toComponent(),
            verification),
        React.createElement("body", null,
            React.createElement("div", { id: "___gatsby", dangerouslySetInnerHTML: { __html: props.body } }),
            props.postBodyComponents)));
};
//# sourceMappingURL=html.js.map