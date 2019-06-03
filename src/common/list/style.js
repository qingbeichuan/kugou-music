import styled from 'styled-components';

export const ListWrapper=styled.ul`
	padding:0 0 ${props=>props.miniPlayer?4.2143:0}rem 0;
`
export const ListItem=styled.li`
	display: flex;
	justify-content:space-between;
	align-items:center;
    position: relative;
    margin-left: .7143rem;
    padding: .7143rem 1.14286rem .7143rem .1458rem;
    border-bottom: 1px solid #e5e5e5;
    img{
		border-radius:50%;
		width: 5.3751rem;
    	height: 5.3751rem;
    }
    div{
    	min-height: 5.3751rem;
    	padding:.5rem;
    	display:flex;
        flex:1;
    	flex-direction:column;
    	justify-content:space-around;
    	p{
    		color:#333;
    		font-size:${props=>props.font?props.font:1}rem;
    		line-height:1.5;
            text-align:${props=>props.align?props.align:'center'}
    	}
    	span{
    		display:block;
    		background:url(${require('../../assets/images/icon_music.png')}) no-repeat
    		width: .67143rem;
    		height: 1rem;
    		background-size:80%;
    		color: #9b9b9b;
    		font-size: .7857rem;
    		padding-left:.8rem;
    	}
    }
    i{
        width: .57143rem;
        height: 1rem;
        background:url(${require('../../assets/images/arrow_icon.png')}) no-repeat;
        background-size:100%
    }
`