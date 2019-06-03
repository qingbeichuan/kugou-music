import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd-mobile';
import * as actionCreators from '../../store/actionCreators'
//import axios from 'axios'
//import api from '../../assets/api'
import {
	NewSongWrapper,
	Banner,
} from './style'
import SongList from '../../common/songList'
import Loading from '../../common/loading'

class NewSong extends Component {	
    render() {
        return (
            <NewSongWrapper>
            	{this.props.newSong.length?'':<Loading></Loading>}
            	<Banner>
             		<Carousel
		        	autoplay={false}
		        	infinite
			        >	
			          	{
				          	this.props.banner.map(val => (
				            <a
				              key={val}
				              href={val.extra.tourl}
				              style={{ display: 'inline-block', width: '100%'}}
				            >
				              <img
				                src={val.imgurl}
				                alt=""
				                style={{ width: '100%', verticalAlign: 'top' }}
				                onLoad={() => {
				                  // fire window resize event to change height
				                  window.dispatchEvent(new Event('resize'));
				                  this.setState({ imgHeight: 'auto' });
				                }}
				              />
				            </a>
				          ))
			      		}
			        </Carousel>
            	</Banner>
				<SongList songList={this.props.newSong} playSong={this.playSong} hasMore={false}></SongList>
            </NewSongWrapper>
        );
    }
    componentDidMount() {
	    this.props.getNewSong()
	}
	playSong=(hash,index,playList)=>{
		//将hash变成播放列表
		// const playList=Array.from(this.refs.song.parentNode.getElementsByTagName('li')).map((v)=>{
		// 	return v.dataset.hash
		// })
		this.props.playSong(hash,index,playList)
	}
}
const mapState=(state)=>({
	banner:state.get('banner'),
	newSong:state.get('newSong')
})
const mapDispatch=(dispatch)=>{
	return {
		getNewSong(){
			dispatch(actionCreators.getNewSong())
		},
		playSong(hash,index,playList){
			dispatch(actionCreators.playSong(hash,index,playList))
		}
	}
}

export default connect(mapState,mapDispatch)(NewSong);
