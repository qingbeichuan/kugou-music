import styled,{ keyframes } from 'styled-components'
import pauseIcon from '../../assets/images/pause_icon.png'
import playIcon from '../../assets/images/play_icon.png'

export const MiniWrapper=styled.div`
	width: 100%;
    height: 4.2143rem;
    position: fixed;
    left: 0;
    bottom: ${props=>props.miniPlayer?'0':'-4.2143'}rem;
    z-index:104;
    background: rgba(0,0,0,.9);
    color: #fff;
    font-size: 0;
    display:flex;
    justify-content:space-between;
    transition:all .3s ease-out;
`
export const MiniLeft=styled.div`
	display:flex;
	width:70%;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Avatar=styled.div`
	margin: .2143rem .535rem .2143rem .2143rem
	img{
		width: 3.75rem;
    	height: 3.75rem;
    	border-radius:50%;
    	animation: ${rotate} 8s linear infinite;
		animation-play-state:${props=>props.played?'running':'paused'};
	}
`
export const Info=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	width: 65%;
	p{
		width: 100%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .8571rem;
	    color: #fff;
	    line-height: 1.3;
	    font-size: .7143rem;
	    color: #fff;
	}
`
export const MiniRight=styled.div`
	display:flex;
	align-items:center;
	flex:1;
	i{
		display:inline-block;
		width: 1.786rem;
    	height: 1.786rem;
    	margin-left:.8rem;
    	background: url(${props=>props.played?pauseIcon:playIcon}) no-repeat;
    	background-size:100%;
	}
	i.next{
		background: url(${require('../../assets/images/next_icon.png')}) no-repeat;
		background-size:100%;
	}
`
