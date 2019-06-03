import styled from 'styled-components'

export const Wrapper=styled.div`
	position:fixed;
	top:0;
	left:0;
	width:100%;
	z-index:100;
`
export const HeaderWrapper=styled.div`
	height:3rem;
	background:#2ca2f9;
	width:100%;
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding:10px 20px;
`
export const Logo=styled.img.attrs({
	src:require('../../assets/images/logo.png')
})`
	width: 7.286rem;
    height: 1.67857rem;
`
export const Search=styled.img.attrs({
	src:require('../../assets/images/search.png')
})`
	width: 1.2143rem;
    height: 1.2143rem;
`
export const Nav=styled.div`
	background:#fff;
	height: 3.2143rem;
    line-height: 3rem;
	padding: 0 .7143rem;
	width:100%;
	display:flex;
	justify-content:space-between;
	box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
`
export const Item=styled.li`
	width: 20%;
    text-align: center;
    a.active{
    	border-bottom: .2143rem solid #33a3f5;
    	display:block;
    }
`