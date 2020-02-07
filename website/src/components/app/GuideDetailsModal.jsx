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
const semantic_ui_react_1 = require("semantic-ui-react");
const slugify_1 = __importDefault(require("slugify"));
const generated_1 = require("api/generated");
const api_1 = require("api");
const api_2 = require("api");
function isValid(guideInfo) {
    return guideInfo.title !== undefined && guideInfo.title.length > 0;
}
class GuideDetailsModalComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            stage: "invalid",
            guideInfo: {},
            open: true,
        };
    }
    update(key, value) {
        const guideInfo = {
            ...this.state.guideInfo,
            [key]: value,
        };
        this.setState({
            guideInfo,
            stage: isValid(guideInfo) ? "valid" : "invalid",
        });
    }
    async create() {
        this.setState({ stage: "creating" });
        let title = this.state.guideInfo.title;
        const variables = {
            guide: {
                id: api_1.generateId("guide"),
                title,
                owner: this.props.owner,
                slug: slugify_1.default(title, {
                    lower: true,
                    remove: /[*+~.()'"!:@]/g,
                }),
            },
        };
        const response = await api_2.client.mutate({
            mutation: generated_1.CreateGuideDocument,
            variables,
        });
        const data = response.data;
        console.log(data);
        this.close();
    }
    close() {
        this.setState({ open: false });
        this.props.onClose();
    }
    render() {
        const { stage, open } = this.state;
        return <semantic_ui_react_1.Modal open={open} centered={false}>
      <semantic_ui_react_1.Modal.Header>Create Guide</semantic_ui_react_1.Modal.Header>
      <semantic_ui_react_1.Modal.Content>
        <semantic_ui_react_1.Form>
          <semantic_ui_react_1.Form.Input label='Title' onChange={(e, { value }) => {
            this.update("title", value);
        }}/>
        </semantic_ui_react_1.Form>
      </semantic_ui_react_1.Modal.Content>
      <semantic_ui_react_1.Modal.Actions>
        <semantic_ui_react_1.Button negative onClick={() => {
            this.close();
        }}>Cancel</semantic_ui_react_1.Button>
        <semantic_ui_react_1.Button positive icon='checkmark' labelPosition='right' content='Create' enabled={stage === "valid"} loading={stage === "creating"} onClick={async () => {
            await this.create();
        }}/>
      </semantic_ui_react_1.Modal.Actions>
    </semantic_ui_react_1.Modal>;
    }
}
exports.default = GuideDetailsModalComponent;
//# sourceMappingURL=GuideDetailsModal.jsx.map