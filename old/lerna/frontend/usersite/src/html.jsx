"use strict";
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
    const verification = config.siteMetadata && config.siteMetadata.googleVerification ? <meta name="google-site-verification" content={config.siteMetadata.googleVerification}/> : null;
    return (<html lang="en">
      <head>
        {props.headComponents}
        <title>My website</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {verification}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }}/>
        {props.postBodyComponents}
      </body>
    </html>);
};
