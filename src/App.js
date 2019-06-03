import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from "react-router-dom"
import store from './store'
import Header from './common/header';
import Player from './common/player';
import MiniPlayer from './common/miniPlayer';
import NewSong from './pages/newSong';
import Rank from './pages/rank';
import RankInfo from './pages/rank/rankInfo';
import SongSheet from './pages/songSheet';
import SongSheetInfo from './pages/songSheet/songSheetInfo';
import Singer from './pages/singer';
import SingerList from './pages/singer/singerList';
import SingerInfo from './pages/singer/singerInfo';
import Search from './pages/search';

class App extends Component {
    render() {
        return (
        	<BrowserRouter>
	            <Provider store={store}>
	            	<Header></Header>
	                <Player></Player>
	                <MiniPlayer></MiniPlayer>
	                <Route exact path='/' component={NewSong}></Route>
	                <Route path='/rank' component={Rank}></Route>
	                <Route path='/rank/:rankid' component={RankInfo}></Route>
	                <Route path='/songSheet' component={SongSheet}></Route>
	                <Route path='/songSheet/:id' component={SongSheetInfo}></Route>
	                <Route path='/singer' component={Singer}></Route>
	                <Route path='/singer/:classid' component={SingerList}></Route>
	                <Route path='/singer/:classid/:singerid' component={SingerInfo}></Route>
	                <Route path='/search' component={Search}></Route>
	            </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
