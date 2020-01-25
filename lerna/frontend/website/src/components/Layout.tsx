import {Link} from "gatsby";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import {Segment, Icon, Container, Sidebar} from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import {ApolloProvider} from "@apollo/react-hooks";
import {client} from "../data/graphql";


export interface LayoutProps {
    location: {
        pathname: string;
    };
    children: any;
}

const Layout = (props: LayoutProps) => {

    return (
        <ApolloProvider client={client}>
            <div>
                {props.children}
            </div>
        </ApolloProvider>
    );
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
    class WithLayout extends React.Component<P & LayoutProps> {
        render() {
            return (
                <Layout location={this.props.location}>
                    <WrappedComponent {...this.props} />
                </Layout>
            );
        }
    };
