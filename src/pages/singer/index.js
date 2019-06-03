import React, { Component } from 'react';
import axios from 'axios'
import api from '../../assets/api'
import Loading from '../../common/loading'
import List from '../../common/list'
import {
	CategoryWrapper,
} from './style'


class Singer extends Component {
	constructor(props){
		super(props)
		this.state={
			singerCategories:[]
		}
	}
    render() {
        return (
            <CategoryWrapper>
            	{this.state.singerCategories.length?'':<Loading></Loading>}
            	<List list={this.state.singerCategories} route={'singer'}></List>
            	{	
        			/*this.state.singerCategories.map((v,i)=>{
						return (
							<Link to={`/singer/${v.classid}`} key={v.classid}>
								<RankItem>
				            		<img src={v.imgurl.replace('{size}','400')} alt=""/>
				            		<p>{v.classname}</p>
				            		<i></i>
				            	</RankItem>
							</Link>
						)
            		})*/
            	}
            </CategoryWrapper>
        );
    }
    componentDidMount(){
    	axios.get(api.singerCategories).then((res)=>{
			// console.log(res.data)
			this.setState({
				singerCategories:res.data.list
			})
    	})
    }
}

export default Singer;

