import styled from 'styled-components';

export const SingerListWrapper=styled.div`
	position:fixed;
	left:0;
	right:0;
	top:0;
	bottom:0;
	z-index:102;
	background:#fff;
	overflow: auto;
`
export const CategoryWrapper=styled.div`
	padding-top:6.4rem;
`
export const RankItem=styled.li`
	display: flex;
	justify-content:space-between;
	align-items:center;
    position: relative;
    margin-left: .7143rem;
    padding: .7143rem 1.14286rem .7143rem .1458rem;
    border-bottom: 1px solid #e5e5e5;
    img{
		border-radius:50%;
		width:${props=>props.width?3:5}.3751rem;
    	height:${props=>props.width?3:5}.3751rem;
    }
    p{

    }
    i{
    	width: .57143rem;
    	height: 1rem;
    	background:url('http://m.kugou.com/v3/static/images/index/arrow_icon.png') no-repeat;
    	background-size:100%
    }
`