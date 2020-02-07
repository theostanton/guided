"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("api/generated");
const semantic_ui_react_1 = require("semantic-ui-react");
const randomKey_1 = __importDefault(require("utils/randomKey"));
const React = __importStar(require("react"));
const api_1 = require("api");
function GuidesList({ owner }) {
    const { data, loading, error } = generated_1.useAllGuideTitlesForUserQuery({
        client: api_1.client,
        variables: {
            owner,
        },
        ssr: false,
    });
    if (loading) {
        return <semantic_ui_react_1.Segment loading/>;
    }
    if (error) {
        return <semantic_ui_react_1.Segment>
      <semantic_ui_react_1.Message error>{error.message}</semantic_ui_react_1.Message>
    </semantic_ui_react_1.Segment>;
    }
    let guides = data.guides.nodes;
    if (guides.length === 0) {
        return <semantic_ui_react_1.Segment>No guides</semantic_ui_react_1.Segment>;
    }
    const items = guides.map(guide => {
        const key = guide.id || randomKey_1.default();
        return (<semantic_ui_react_1.Card key={key} href={`/app/guides/${guide?.slug}`}>
        <semantic_ui_react_1.Card.Content>
          <semantic_ui_react_1.Card.Header>{guide ? guide.title : "Error"}</semantic_ui_react_1.Card.Header>
        </semantic_ui_react_1.Card.Content>
      </semantic_ui_react_1.Card>);
    });
    return <semantic_ui_react_1.List items={items} divided/>;
}
exports.default = GuidesList;
//# sourceMappingURL=GuidesList.jsx.map