import styled from 'styled-components';

export const SongListWrapper=styled.ul`
	padding:0 .7143rem ${props=>props.miniPlayer?4.2143:0}rem .7143rem;
`
export const Item=styled.li`
	width: 100%;
    height: 3.6rem;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    line-height:3.6rem;
    background: url(${require('../../assets/images/download_icon_2.png')}) no-repeat 98% center;
    background-size:1rem;
    padding-right:1.2rem;
    white-space: nowrap;
    overflow:hidden;
	text-overflow:ellipsis
`
export const LoadingImg=styled.p`
	width: 100%;
    height: 40px;
    line-height:40px;
    text-align:center;
    img{
    	height:100%;
    }
`
