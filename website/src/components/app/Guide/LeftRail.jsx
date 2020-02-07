"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const api_1 = require("api");
const gatsby_1 = require("gatsby");
const generated_1 = require("api/generated");
async function deleteGuide(guideId) {
    const variables = {
        guideId,
    };
    const { data } = await api_1.client.mutate({
        mutation: generated_1.DeleteGuideDocument,
        variables,
    });
    console.log("deleteGuide data=");
    console.log(data);
    await gatsby_1.navigate("app/guides");
}
class LeftRailComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        const guide = this.props.guide;
        return <div style={{ backgroundColor: "#ffffff" }}>
      <semantic_ui_react_1.Grid padded={true}>

        <semantic_ui_react_1.Grid.Row columns='equal' stretched verticalAlign='bottom'>
          <semantic_ui_react_1.GridColumn>
            <semantic_ui_react_1.Header as='h1'>{guide.title} </semantic_ui_react_1.Header>
          </semantic_ui_react_1.GridColumn>
          <semantic_ui_react_1.GridColumn width={"4"} floated={"right"}>
            <semantic_ui_react_1.Button icon='trash' onClick={async () => {
            await deleteGuide(guide.id);
        }}/>
          </semantic_ui_react_1.GridColumn>
        </semantic_ui_react_1.Grid.Row>

        <semantic_ui_react_1.Divider />

        <semantic_ui_react_1.GridRow>
          <semantic_ui_react_1.GridColumn>
            <semantic_ui_react_1.Header subheader={"Slug"} content={guide.slug}/>
          </semantic_ui_react_1.GridColumn>
        </semantic_ui_react_1.GridRow>

        <semantic_ui_react_1.Divider />

        <semantic_ui_react_1.GridRow>
          <semantic_ui_react_1.GridColumn>
            <semantic_ui_react_1.StatisticGroup widths='2' size={"tiny"}>
              <semantic_ui_react_1.Statistic label='Rides' value={guide.ridesByGuide.totalCount}/>
              <semantic_ui_react_1.Statistic label='Spots' value={guide.spotsByGuide.totalCount}/>
            </semantic_ui_react_1.StatisticGroup>
          </semantic_ui_react_1.GridColumn>
        </semantic_ui_react_1.GridRow>
        {guide.startDate &&
            <semantic_ui_react_1.GridRow>
          <semantic_ui_react_1.GridColumn>
            <semantic_ui_react_1.StatisticGroup widths='1' size={"small"}>
              <semantic_ui_react_1.Statistic label='Starts' value={guide.startDate}/>
            </semantic_ui_react_1.StatisticGroup>
          </semantic_ui_react_1.GridColumn>
        </semantic_ui_react_1.GridRow>}
      </semantic_ui_react_1.Grid>
    </div>;
    }
}
exports.default = LeftRailComponent;
//# sourceMappingURL=LeftRail.jsx.map