import * as React from "react";
import {Container, Label, Menu, Icon} from "semantic-ui-react";
import {MenuProps} from "../Menu";

interface HeaderMenuProps extends MenuProps {
    inverted?: boolean;
}

export const HeaderMenu = ({items, pathname, Link, inverted}: HeaderMenuProps) =>
    <Container>
        <Menu size="large" pointing secondary inverted={inverted}>
            <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => {
            }}/>
            <Menu.Item className="mobile hidden"><Icon name="spy" size="big"/></Menu.Item>
            {items.map((item) => {
                const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
                return <Menu.Item
                    as={Link}
                    className="mobile hidden"
                    name={item.name}
                    to={item.path}
                    key={item.path}
                    active={active}
                />;
            })}
        </Menu>
    </Container>;

export default HeaderMenu;
