import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators'
import axios from 'axios'
import api from '../../assets/api'
import SongList from '../../common/songList'
import Loading from '../../common/loading'
import Banner from '../../common/banner'
import {
	RankInfoWrapper,
} from './style'


class RankInfo extends Component {
	constructor(props){
		super(props)
		this.state={
			info:{},
			songList:[]
		}
	}
    render() {
        return (
            <RankInfoWrapper>
            	{this.state.songList.length?'':<Loading></Loading>}
            	<Banner img={this.state.info?this.state.info.imgurl:''} title={this.state.info?this.state.info.rankname:''} goBack={this.goBack}></Banner>
            	<SongList songList={this.state.songList} playSong={this.playSong}></SongList>
            </RankInfoWrapper>
        );
    }
    componentDidMount(){
    	axios.get(api.rankInfo+this.props.match.params.rankid).then((res)=>{
			console.log(res.data)
			this.setState({
				info:res.data.info,
				songList:res.data.songs.list
			})
    	})
    }
    playSong=(hash,index,playList)=>{
		this.props.playSong(hash,index,playList)
	}
	goBack=()=>{
		this.props.history.goBack()
	}
}
const mapDispatch=(dispatch)=>{
	return {
		playSong(hash,index,playList){
			dispatch(actionCreators.playSong(hash,index,playList))
		}
	}
}

export default connect(null,mapDispatch)(RankInfo);

