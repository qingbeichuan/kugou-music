import React, { Component } from 'react';
//import { Link } from "react-router-dom"
import axios from 'axios'
import api from '../../assets/api'
import Loading from '../../common/loading'
import Banner from '../../common/banner'
import List from '../../common/list'
import {
	SingerListWrapper,
} from './style'


class SingerList extends Component {
	constructor(props){
		super(props)
		this.state={
			singerList:[],
			classname:''
		}
		
	}
    render() {
        return (
            <SingerListWrapper>
            	{this.state.singerList.length?'':<Loading></Loading>}
            	<Banner img={this.state.singerList.length?this.state.singerList[0].imgurl:''} title={this.state.classname?this.state.classname:''} goBack={this.goBack}></Banner>
            	<List list={this.state.singerList} route={`singer/${this.props.match.params.classid}`}></List>
            	{	
      //   			this.state.singerList.map((v,i)=>{
						// return (
						// 	<Link to={`/singer/${this.props.match.params.classid}/${v.singerid}`} key={v.singerid}>
						// 		<RankItem width={3}>
				  //           		<img src={v.imgurl.replace('{size}','400')} alt=""/>
				  //           		<p>{v.singername}</p>
				  //           		<i></i>
				  //           	</RankItem>
						// 	</Link>
						// )
      //       		})
            	}
            </SingerListWrapper>
        );
    }
    componentDidMount(){
    	axios.get(api.singerList+this.props.match.params.classid).then((res)=>{
			// console.log(res.data.singers.list.info)
			this.setState({
				singerList:res.data.singers.list.info,
				classname:res.data.classname
			})
    	})
    }
    goBack=()=>{
		this.props.history.goBack()
	}
}

export default SingerList;

