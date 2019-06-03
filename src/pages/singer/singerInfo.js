import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators'
import axios from 'axios'
import api from '../../assets/api'
//import Loading from '../../common/loading'
import Banner from '../../common/banner'
import SongList from '../../common/songList'
import {
	SingerListWrapper,
} from './style'


class SingerInfo extends Component {
	constructor(props){
		super(props)
		this.state={
			songList:[],
			singerInfo:''
		}
	}
    render() {
        return (
            <SingerListWrapper>
            	{/*this.state.songList.length?'':<Loading></Loading>*/}
            	<Banner img={this.state.singerInfo?this.state.singerInfo.imgurl:''} title={this.state.singerInfo?this.state.singerInfo.singername:''} goBack={this.goBack}></Banner>
            	<SongList songList={this.state.songList} playSong={this.playSong} loadMore={this.loadMore} songCount={this.state.singerInfo.songcount} hasMore={true}></SongList>
            </SingerListWrapper>
        );
    }
    componentDidMount(){
    	this.loadMore(1)
    }
    loadMore=(page)=>{
    	axios.get(api.singerInfo+this.props.match.params.singerid+'&page='+page).then((res)=>{
			console.log(res.data)
			this.setState({
				songList:this.state.songList.concat(res.data.songs.list),
				singerInfo:res.data.info
			})
    	})
    }
    goBack=()=>{
		this.props.history.goBack()
	}
	playSong=(hash,index,playList)=>{
		this.props.playSong(hash,index,playList)
	}
}
const mapState=state=>({
	page:state.get('page')
})
const mapDispatch=(dispatch)=>{
	return {
		playSong(hash,index,playList){
			dispatch(actionCreators.playSong(hash,index,playList))
		}
	}
}


export default connect(mapState,mapDispatch)(SingerInfo);

