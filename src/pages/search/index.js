import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators'
import axios from 'axios'
import api from '../../assets/api'
import Loading from '../../common/loading'
import SongList from '../../common/songList'
import {
	SearchWrapper,
	TopGoback,
	SearchBox,
	SearchForm,
	SearchKeyword,
	SearchBtn
} from './style'


class Search extends Component {
	constructor(props){
		super(props)
		this.state={
			songList:[],
			bool:true
		}
	}
    render() {
        return (
            <SearchWrapper>
            	<TopGoback>
            		<i onClick={this.goBack}></i>
            		<p>搜索</p>
            	</TopGoback>
            	<SearchBox>
            		<SearchForm>
            			<SearchKeyword ref='keyword'></SearchKeyword>
            			<SearchBtn onClick={this.search}></SearchBtn>
            		</SearchForm>
            	</SearchBox>
            	{this.state.bool?'':<Loading></Loading>}
            	<SongList songList={this.state.songList} playSong={this.playSong} ></SongList>
            </SearchWrapper>
        );
    }
    componentDidMount(){
    	
    }
    search=()=>{
    	if(!this.refs.keyword.value) return
    	this.setState({
			songList:[],
			bool:false
		})
    	axios.get(api.keywordSearch+this.refs.keyword.value).then((res)=>{
			console.log(res.data.data.info)
			this.setState({
				songList:res.data.data.info,
				bool:true
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
const mapDispatch=(dispatch)=>{
	return {
		playSong(hash,index,playList){
			dispatch(actionCreators.playSong(hash,index,playList))
		}
	}
}

export default connect(null,mapDispatch)(Search);

