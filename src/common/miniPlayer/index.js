import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actionCreators'
import {
	MiniWrapper,
	MiniLeft,
	Avatar,
	Info,
	MiniRight
} from './style'

class MiniPlayer extends Component{
	render(){
		let imgUrl=this.props.songInfo.album_img||this.props.songInfo.imgUrl
		return (
			<MiniWrapper miniPlayer={this.props.miniPlayer}>
				<MiniLeft onClick={this.showPlayer}>
					<Avatar played={this.props.played}>
						<img src={imgUrl?imgUrl.replace('{size}','400'):''} alt=""/>
					</Avatar>
					<Info>
						<p>{this.props.songInfo.songName}</p>
						<p>{this.props.songInfo.singerName}</p>
					</Info>
				</MiniLeft>
				<MiniRight played={this.props.played}>
					<i onClick={this.playPause} ></i>
					<i className="next" onClick={this.playNext}></i>
				</MiniRight>
			</MiniWrapper>
		)
	}
	showPlayer=()=>{
		this.props.showPlayer()
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
        // this.refs.audio.play()
    }
    playPause=()=>{
        this.props.playPause()
    }
}
const mapState=state=>({
	played:state.get('played'),
	songInfo:state.get('songInfo'),
	currentIndex:state.get('currentIndex'),
    playList:state.get('playList'),
    miniPlayer:state.get('miniPlayer')
})
const mapDispatch=dispatch=>{
	return {
		showPlayer(){
			dispatch(actionCreators.showPlayer())
		},
		playNext(hash,index){
            dispatch(actionCreators.playNext(hash,index))
        },
        playPause(){
            dispatch(actionCreators.playPause())
        },
	}
}

export default connect(mapState,mapDispatch)(MiniPlayer)