import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import {
	ListWrapper,
	ListItem,
} from './style'


class List extends Component {
    render() {
    	const route=`/${this.props.route}`
        return (
        	<ListWrapper miniPlayer={this.props.miniPlayer}>
            	{	
        			this.props.list.map((v,i)=>{
        				const id=v.rankid||v.specialid||v.classid||v.singerid//排行榜id，歌单id，歌手类别id，歌手id
        				const name=v.rankname||v.specialname||v.classname||v.singername
						return (
							<Link to={`${route}/${id}`} key={id}>
								<ListItem font={this.props.fontSize} align={this.props.textAlign}>
				            		<img src={v.imgurl.replace('{size}','400')} alt=""/>
				            		<div>
				            			<p>{name}</p>
				            			{v.playcount?<span>{v.playcount}</span>:''}
				            		</div>
				            		<i></i>
				            	</ListItem>
							</Link>
						)
            		})
            	}
            </ListWrapper>
        );
    }
}
const mapState=state=>({
    miniPlayer:state.get('miniPlayer')
})

export default connect(mapState,null)(List);

