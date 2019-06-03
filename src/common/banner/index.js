import React, { Component } from 'react';
import {
	Banners,
} from './style'


class Banner extends Component {
    render() {
        return (
        	<Banners banner={this.props.img}>
        		<div>
        			<img onClick={this.goBack} src="http://m.kugou.com/v3/static/images/index/goback_1.png" alt=""/>
					<h3>{this.props.title}</h3>
        		</div>
        		<p></p>
			</Banners>
        );
    }
    goBack=()=>{
		this.props.goBack()
	}
}

export default Banner;

