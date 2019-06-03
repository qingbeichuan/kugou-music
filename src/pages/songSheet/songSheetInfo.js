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


class SongSheetInfo extends Component {
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
            	<Banner img={this.state.info?this.state.info.imgurl:''} title={this.state.info?this.state.info.specialname:''} goBack={this.goBack}></Banner>
            	<SongList songList={this.state.songList} playSong={this.playSong}></SongList>
            </RankInfoWrapper>
        );
    }
    componentDidMount(){
    	axios.get(api.songSheetInfo+this.props.match.params.id).then((res)=>{
			console.log(res.data.info.list)
			this.setState({
				info:res.data.info.list,
				songList:res.data.list.list.info
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

export default connect(null,mapDispatch)(SongSheetInfo);

