import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actionCreators'
//import Lyric from 'lyric-parser'
import {
	PlayerWrapper,
	DiscWrapper,
	Disc,
	Background,
    Overlay,
    TopWrapper,
    TopGoback,
    TopTitle,
    BottomWrapper,
    PlayOperate,
    PlayPrev,
    PlayPause,
    PlayNext,
    TimeWrap,
    TimeShow,
    ProgressWrap,
    ProgressBar,
    Progress,
    ProgressBall,
    TimeTotal,
} from './style'

class Player extends Component {
    constructor(props){
        super(props)
        this.state={
            currentTime:0,
            percent:0, //进度条宽度比例
            touch:false
        }
    }
    render() {
        return (
            <PlayerWrapper rotated={this.props.rotated}>{/*传递组件的props中的某个值来作为css属性值*/}
                <TopWrapper>
                    <TopGoback onClick={this.goBack}></TopGoback>
                    <TopTitle>{this.props.songInfo.fileName}</TopTitle>
                </TopWrapper>
				<Background>{this.imgRender()}</Background>
                <Overlay></Overlay>
            	<DiscWrapper>
            		<Disc played={this.props.played}>{this.imgRender()}</Disc>
            	</DiscWrapper>
                <div>
                    {/*this.props.songInfo.lyrics*/}
                </div>
                <TimeWrap>
                    <TimeShow>{this.formatTime(this.state.currentTime)}</TimeShow>
                    <ProgressWrap>
                        <ProgressBar id="progressBar" ref="progressBar"></ProgressBar>
                        <Progress progress={this.state.percent}></Progress>
                        <ProgressBall progress={this.state.percent} ref="progressBall"></ProgressBall>
                    </ProgressWrap>
                    <TimeTotal>{this.formatTime(this.props.songInfo.timeLength)}</TimeTotal>
                </TimeWrap>
                <BottomWrapper>
                    <PlayOperate>
                        <PlayPrev onClick={this.playPrev}></PlayPrev>
                        <PlayPause onClick={this.playPause} played={this.props.played} ></PlayPause>
                        <PlayNext onClick={this.playNext}></PlayNext>
                    </PlayOperate>
                </BottomWrapper>
            	<audio id='audio' loop={false} ref="audio" src={this.props.songInfo.url}></audio>
            </PlayerWrapper>
        );
    }
    componentDidUpdate(){
        if(this.props.played){
            this.refs.audio.play()
        }else{
            this.refs.audio.pause()
        }
    }
    componentDidMount(){
        this.listenTime()
        this.handleTouch()
        // console.log(this.props.songInfo.lyrics)
        // let lyric = new Lyric(this.props.songInfo.lyrics, this.handler)
        // console.log(lyric)
         
    }
    hanlder=({lineNum, txt})=>{
       // this hanlder called when lineNum change
    }
    listenTime=()=>{//监听音频中的当前播放位置（以秒计）
        this.refs.audio.addEventListener('timeupdate',(e)=>{
            this.setState({
                currentTime:Math.floor(e.target.currentTime),
                percent:this.state.touch?this.state.percent:(((Math.floor(e.target.currentTime)/e.target.duration)*100).toFixed(2)+'%')//进度条宽度，拖动时防止回弹
            })
        })
        this.refs.audio.addEventListener('ended',()=>{
            this.playNext()
        })
    }
    handleTouch=()=>{
        var [startX,endX,offsetLeft,progressBarWidth] = [0,0,0,0]; 
        this.refs.progressBall.addEventListener('touchstart',(e)=>{
            startX=e.touches[0].clientX
            offsetLeft=e.target.offsetLeft
            progressBarWidth=window.getComputedStyle(this.refs.progressBar,null).width.replace('px','')
        })
        this.refs.progressBall.addEventListener('touchmove',(e)=>{
            endX=e.touches[0].clientX
            var distance=endX-startX+offsetLeft
            let limit=((distance/progressBarWidth)*100).toFixed(2)//防止左右拖动出界
            limit=limit>=100?100:limit
            limit=limit<=0?0:limit
            this.setState({
                percent:limit+'%',
                touch:true
            })
            
        })
        this.refs.progressBall.addEventListener('touchend',(e)=>{
            var distance=endX-startX+offsetLeft
            let limit=((distance/progressBarWidth)*100).toFixed(2)//防止左右拖动出界
            limit=limit>=100?100:limit
            limit=limit<=0?0:limit
            this.setState({
                percent:limit+'%',
                touch:false
            })
            //跳转到拖动之后的播放位置
            this.refs.audio.currentTime=Math.floor((distance/progressBarWidth).toFixed(2)*this.props.songInfo.timeLength)
        })
    }
    goBack=()=>{
        this.props.goBack()
    }
    imgRender=()=>{
        let imgUrl=this.props.songInfo.album_img||this.props.songInfo.imgUrl
        if(imgUrl){
            return <img src={imgUrl.replace('{size}','400')} alt=""/>
        }
    }
    playPause=()=>{
        this.props.playPause()
    }
    playPrev=()=>{
        var index=this.props.currentIndex
        if(index<=0){
            index=this.props.playList.length-1
        }else{
            index--;
        }
        const hash=this.props.playList[index]
        this.props.playNext(hash,index)
        this.refs.audio.play()
    }
    playNext=()=>{
        var index=this.props.currentIndex
        if(index>=this.props.playList.length-1){
            index=0
        }else{
            index++;
        }
        const hash=this.props.playList[index]
        this.props.playNext(hash,index)
        this.refs.audio.play()
    }
    formatTime=(time)=>{
        let min=Math.floor(time/60)>=10?Math.floor(time/60):'0'+Math.floor(time/60)
        let sec=time%60>=10?time%60:'0'+time%60
        return min+':'+sec
    }
}
const mapState=(state)=>({
    rotated:state.get('rotated'),
    played:state.get('played'),
    songInfo:state.get('songInfo'),
    currentIndex:state.get('currentIndex'),
    playList:state.get('playList')
})
const mapDispatch=(dispatch)=>{
    return {
        goBack(){
            dispatch(actionCreators.goBack())
        },
        playPause(){
            dispatch(actionCreators.playPause())
        },
        playNext(hash,index){
            dispatch(actionCreators.playNext(hash,index))
        },
        playPrev(hash,index){
            dispatch(actionCreators.playPrev(hash,index))
        }
    }
}

export default connect(mapState,mapDispatch)(Player);
