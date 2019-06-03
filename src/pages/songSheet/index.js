import React, { Component } from 'react';
import axios from 'axios'
import api from '../../assets/api'
import Loading from '../../common/loading'
import List from '../../common/list'
import {
	SongSheetWrapper,
	// SongSheetItem
} from './style'


class songSheet extends Component {
	constructor(props){
		super(props)
		this.state={
			songSheetList:[]
		}
	}
    render() {
        return (
            <SongSheetWrapper>
            	{this.state.songSheetList.length?'':<Loading></Loading>}
            	<List list={this.state.songSheetList} route={'songSheet'} fontSize={0.8} textAlign={'left'}></List>
            	{	
        			/*this.state.songSheetList.map((v,i)=>{
						return (
							<Link to={`/songSheet/${v.specialid}`} key={v.specialid}>
								<SongSheetItem>
				            		<img src={v.imgurl.replace('{size}','400')} alt=""/>
				            		<div>
				            			<p>{v.specialname}</p>
				            			<span>{v.playcount}</span>
				            		</div>
				            		<i></i>
				            	</SongSheetItem>
							</Link>
						)
            		})*/
            	}
            </SongSheetWrapper>
        );
    }
    componentDidMount(){
    	axios.get(api.songSheet).then((res)=>{
			// console.log(res.data.plist.list.info)
			this.setState({
				songSheetList:res.data.plist.list.info
			})
    	})
    }
}

export default songSheet;

