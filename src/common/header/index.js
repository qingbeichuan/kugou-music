import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import {
	Wrapper,
	HeaderWrapper,
	Logo,
	Search,
	Nav,
	Item,
 } from './style'

class Header extends Component {
    render() {
        return (
        	<Wrapper>
        		<HeaderWrapper>
					<Logo></Logo>
					<NavLink to='/search'><Search></Search></NavLink>
	            </HeaderWrapper>
	            <Nav>
					<Item>
						<NavLink exact to='/'>新歌</NavLink>
					</Item>
					<Item>
						<NavLink to="/rank">排行</NavLink>
					</Item>
					<Item><NavLink to="/songSheet">歌单</NavLink></Item>
					<Item><NavLink to="/singer">歌手</NavLink></Item>
	            </Nav>
        	</Wrapper>
        );
    }
}

export default Header;
