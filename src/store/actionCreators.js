import * as types from './actionTypes'
import axios from 'axios';
import api from '../assets/api'
//import Lyric from 'lyric-parser'
import { Toast } from 'antd-mobile';

export const getNewSong=()=>{
	return dispatch=>{
		axios.get(api.newSongs).then((res)=>{
			dispatch({
				type:types.GET_NEW_SONG,
				val:res.data
			})
	    })
	}
}
export const playSong=(hash,index,playList)=>{
	return dispatch=>{
		// axios.get(api.songInfoHasLyric+hash).then((res)=>{
		// 	// let lyric = new Lyric(res.data.data.lyrics)
		// 	// console.log(lyric)
		// 	return res.data.data.lyrics
	 //    }).then((lyrics)=>{
			axios.get(api.songInfo+hash).then((res)=>{//歌曲详细信息
				console.log(res.data)
				res.data.index=index
				res.data.playList=playList
				// res.data.lyrics=lyrics
				if(res.data.error){
					Toast.fail(res.data.error)
					// return
				}
				dispatch({
					type:types.PLAY_SONG,
					val:res.data
				})
		    })
	    // })
		
	    
	}
}
export const goBack=()=>{
	return dispatch=>{
		dispatch({
			type:types.GO_BACK,
			val:true
		})
	}
}
export const playPause=()=>{
	return dispatch=>{
		dispatch({
			type:types.PLAY_PAUSE
		})
	}
}
export const playPrev=(hash,index)=>{
	return dispatch=>{
		axios.get(api.songInfo+hash).then((res)=>{
			res.data.index=index
			if(res.data.error){
				Toast.fail(res.data.error)
				// return
			}
			dispatch({
				type:types.PLAY_PREV,
				val:res.data
			})
	    })
	}
}
export const playNext=(hash,index)=>{
	return dispatch=>{
		axios.get(api.songInfo+hash).then((res)=>{
			res.data.index=index
			if(res.data.error){
				Toast.fail(res.data.error)
				// return
			}
			dispatch({
				type:types.PLAY_NEXT,
				val:res.data
			})
	    })
	}
}
export const showPlayer=()=>{
	return dispatch=>{
		dispatch({
			type:types.SHOW_PLAYER,
		})
	}
}
export const loadMore=(page)=>{
	return dispatch=>{
		dispatch({
			type:types.LOAD_MORE,
			val:page
		})
	}
}