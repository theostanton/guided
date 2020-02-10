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
const Layout_1 = __importDefault(require("../components/Layout"));
const queries_1 = require("./index/queries");
const react_components_1 = require("@apollo/react-components");
const Store_1 = require("../stores/Store");
const Segment_1 = __importDefault(require("semantic-ui-react/dist/commonjs/elements/Segment"));
const List_1 = __importDefault(require("semantic-ui-react/dist/commonjs/elements/List"));
const common_1 = require("@guided/common");
const semantic_ui_react_1 = require("semantic-ui-react");
const gatsby_1 = require("gatsby");
const logger = new common_1.Logger('HomePage');
class IndexComponent extends React.Component {
    render() {
        return <react_components_1.Query query={queries_1.QUERY}>

            {({ loading, error, data, refetch }) => {
            if (loading) {
                logger.debug('Loading');
                return <Segment_1.default loading/>;
            }
            if (error) {
                logger.json(error);
                return <Segment_1.default>{error.message}</Segment_1.default>;
            }
            return (<semantic_ui_react_1.Grid>
                        <semantic_ui_react_1.GridColumn width={4}>
                            <List_1.default divided relaxed style={{ padding: '1em' }} celled>
                                {data.allGuides.map((guide) => {
                return <gatsby_1.Link key={guide.id} to={`/guide/${guide.slug}`}>
                                        <semantic_ui_react_1.ListItem style={{ backgroundColor: '#eeeeee', padding: '1em' }}>
                                            <List_1.default.Content>
                                                <List_1.default.Header as='h1'>{guide.title}</List_1.default.Header>
                                                <List_1.default.Description>Updated 22 mins ago</List_1.default.Description>
                                            </List_1.default.Content>
                                        </semantic_ui_react_1.ListItem>
                                    </gatsby_1.Link>;
            })}
                            </List_1.default>
                        </semantic_ui_react_1.GridColumn>
                    </semantic_ui_react_1.Grid>);
        }}
        </react_components_1.Query>;
    }
}
function default_1(props) {
    return (<Layout_1.default location={props.location}>
        <IndexComponent store={new Store_1.Store()} {...props}/>
    </Layout_1.default>);
}
exports.default = default_1;
;
