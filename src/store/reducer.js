import * as types from './actionTypes'
import {fromJS} from "immutable";

const defaultVal=fromJS({
    banner:[],
    newSong:[],
    rotated:true,
    played:false,//播放状态
    songInfo:{},//歌曲信息
    playList:[],//播放列表
    currentIndex:0,//当前播放列表歌曲下标
    miniPlayer:false,//底部迷你播放器
    page:1
})
const reducer=(state=defaultVal,action)=>{
    switch(action.type){
    	case types.GET_NEW_SONG:
			return state.merge({
				banner:action.val.banner,
				newSong:action.val.data
			})
        case types.PLAY_SONG:
            return state.merge({
                // rotated:false,
                played:true,
                miniPlayer:true,
                songInfo:action.val,
                currentIndex:action.val.index,
                playList:action.val.playList
            })
        case types.GO_BACK:
            return state.merge({
                rotated:action.val,
            })
        case types.PLAY_PAUSE:
            return state.set('played',!state.toJS().played)
        case types.PLAY_PREV:
            return state.merge({
                currentIndex:action.val.index,
                songInfo:action.val,
                played:true
            })
        case types.PLAY_NEXT:
            return state.merge({
                currentIndex:action.val.index,
                songInfo:action.val,
                played:true
            })
        case types.SHOW_PLAYER:
            return state.set('rotated',!state.toJS().rotated)
        case types.LOAD_MORE:
            return state.set('page',action.val)
        default:
            return state
    }
}

export default reducer;