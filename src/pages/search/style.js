import styled from 'styled-components';

export const SearchWrapper=styled.div`
	position:fixed;
	left:0;
	right:0;
	top:3rem;
	bottom:0;
	z-index:102;
	background:#fff;
	overflow: auto;
`
export const TopGoback=styled.div`
	width: 100%;
	position:fixed;
	top:3rem;
    line-height: 2.5rem;
    padding: 0 2.1429rem;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
    color: #333;
    background: #fff;
	z-index:104;
    p{
    	height: 2.5rem;
	    line-height: 2.5rem;
	    font-size: 1rem;
    }
    i{
    	width: 2.5rem;
	    height: 2.5rem;
	    position: absolute;
	    top: 0;
	    left: 0;
	    text-align: center;
	    cursor: pointer;
	    background: url(http://m.kugou.com/v3/static/images/index/goback.png) no-repeat center center;
    	background-size: 35%;
    }
`
export const SearchBox=styled.div`
	padding: .7143rem;
    background: #fbfbfb;
    margin-top:2.5rem;
`
export const SearchForm=styled.div`
    background: #fbfbfb;
    display:flex;
`
export const SearchKeyword=styled.input.attrs({
	placeholder:'歌手/歌名/拼音'
})`
	width: 70%;
    padding: .4rem .0714rem .4rem 1.7rem;
    margin-right: 3%;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    font-size: 1rem;
    background:url(http://m.kugou.com/v3/static/images/index/search_icon.png) no-repeat .3rem center;
    background-size:10%;
`
export const SearchBtn=styled.input.attrs({
	type:'button',
	value:'搜索'
})`
	width: 17.25%;
    height: 2.0714rem;
    line-height: 2.0714rem;
    border: none;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    font-size: 1rem;
    text-align: center;
    background: #2ba2fa;
    color: #fff;
`