import React, { Component } from 'react';
import axios from 'axios'
import api from '../../assets/api'
import Loading from '../../common/loading'
import List from '../../common/list'
import {
	RankWrapper,
} from './style'


class Rank extends Component {
	constructor(props){
		super(props)
		this.state={
			rankList:[]
		}
	}
    render() {
        return (
            <RankWrapper>
            	{this.state.rankList.length?'':<Loading></Loading>}
            	<List list={this.state.rankList} route={'rank'}></List>
            </RankWrapper>
        );
    }
    componentDidMount(){
    	axios.get(api.rankList).then((res)=>{
			// console.log(res.data.rank)
			this.setState({
				rankList:res.data.rank.list
			})
    	})
    }
}

export default Rank;

