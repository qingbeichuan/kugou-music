import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actionCreators from '../../store/actionCreators'
import {
	SongListWrapper,
	Item,
    LoadingImg
} from './style'


class SongList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            data: [], //数据源
            hasMore: this.props.hasMore, //是否存在下一页
            page: 1 //当前的页码
        } 
    }
    render() {
        return (
            <SongListWrapper miniPlayer={this.props.miniPlayer} ref="songList">
            	{
					this.props.songList.map((val,index)=>(
						<Item data-hash={val.hash} ref="song" onClick={this.playSong.bind(this,val.hash,index)} key={val.audio_id}>{val.filename}</Item>
					))
				}
                {this.state.hasMore?<LoadingImg><img src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524124238403.gif" alt=""/></LoadingImg>:''}
            </SongListWrapper>
        );
    }
    componentDidMount(){
        let songListDom=this.refs.songList
        let page=this.state.page
        songListDom.addEventListener('touchend', (e)=>{
            if(songListDom.getBoundingClientRect().bottom<=window.screen.height+40){
                if(this.props.songCount<=songListDom.getElementsByTagName('li').length){
                    this.setState({
                        hasMore:false//加载完所有数据
                    })
                    return
                }
                this.props.loadMore&&this.props.loadMore(page)//调用父组件方法
            }
        },false); 
    }
    playSong=(hash,index)=>{
    	//将hash变成播放列表
		const playList=Array.from(this.refs.song.parentNode.getElementsByTagName('li')).map((v)=>{
			return v.dataset.hash
		})
    	this.props.playSong(hash,index,playList)//调用父组件方法
    }
}
const mapState=state=>({
    miniPlayer:state.get('miniPlayer')
})
// const mapDispatch=dispatch=>{
//     return {
//         loadMore:function(page){
//             dispatch(actionCreators.loadMore(page))
//         }
//     }
// }

export default connect(mapState,null)(SongList);

