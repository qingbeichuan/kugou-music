import styled,{ keyframes } from 'styled-components'
import pauseIcon from '../../assets/images/play_pause.png'
import playIcon from '../../assets/images/play_play.png'

export const PlayerWrapper=styled.div`
	position:fixed;
	left:0;
	right:0;
	top:0;
	bottom:0;
	background:#ccc;
	z-index:1000;
	transform: rotate(${props=>props.rotated?'90':'0'}deg);
	transform-origin:left bottom;
	transition:all .3s ease-out;
`
export const DiscWrapper=styled.div`
	position:relative;
	top:1rem;
	left:0;
	width:100%;
	right:0;
	padding-bottom:80%;
	z-index:101;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Disc=styled.div`
	position:absolute;
	top:0;
	left:10%;
	width:80%;
	right:0;
	height:100%;
	img{
		width:100%;
		height:100%;
		border-radius: 50%;
		border: 10px solid hsla(0,0%,100%,.1);
		animation: ${rotate} 8s linear infinite;
		animation-play-state:${props=>props.played?'running':'paused'};
	}
`
export const Background=styled.div`
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	z-index:100;
	-webkit-filter: blur(20px);
	filter: blur(20px);
	img{
		width:100%;
		height:100%;
	}
`
export const Overlay=styled.div`
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	z-index:100;
	background:rgba(0,0,0,.5)
`
export const TopWrapper=styled.div`
	text-align: center;
	display:flex;
	position:relative;
	top:0;
	left:0;
	z-index:101;
	color:#fff;
`
export const TopGoback=styled.div`
	width: 2.1429rem;
    height: 2.8031rem;
    background:url(${require('../../assets/images/goback_1.png')}) no-repeat center center;
    background-size:45%;
`
export const TopTitle=styled.div`
	height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
    flex:1;
`
export const BottomWrapper=styled.div`
	position:absolute;
	bottom:10%;
	left:0;
	z-index:101;
	width:100%;
`
export const PlayOperate=styled.div`
	text-align: center;
	div{
		display:inline-block;
		background-size:100%;
		margin: 0 .8929rem;
		vertical-align: middle;
	}
`
export const PlayPrev=styled.div`
	width: 2.3214rem;
    height: 2.4rem;
    background: url(${require('../../assets/images/play_prev.png')}) no-repeat;
`
export const PlayPause=styled.div`
	width: 3.2143rem;
    height: 3.2143rem;
    touch-action:none;
    background: url(${props=>props.played?pauseIcon:playIcon}) no-repeat;
`
export const PlayNext=styled(PlayPrev)`
    background: url(${require('../../assets/images/play_next.png')}) no-repeat;
`
export const TimeWrap=styled.div`
	width: 100%;
    padding: .8928rem .7143rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:absolute;
	bottom:22%;
	z-index:105;
`
export const TimeShow=styled.div`
	font-size: .6428rem;
    color: #fff;
`
export const ProgressWrap=styled.div`
	height: .1785rem;
    margin: 0 .5357rem;
    background: #232228;
    position: relative;
    left:0;
    z-index: 104;
    width:100%;
`
export const ProgressBar=styled.div`
	width: 100%;
    height: 100%;
    background:#fff;
`
export const Progress=styled.div`
	background: #3195fd;
	position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: ${props=>props.progress};
    height: 100%;
`
export const ProgressBall=styled.span`
	position: absolute;
    top: 50%;
    left: ${props=>props.progress};
    margin-top: -.3572rem;
    width: .7143rem;
    height: .7143rem;
    display: block;
    background: #3195fd;
    border-radius: 100%;
    transform: translateX(-50%);
`
export const TimeTotal=styled(TimeShow)`

`