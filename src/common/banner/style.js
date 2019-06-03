import styled from 'styled-components';

export const Banners=styled.div`
	height: 12.5rem;
	background:url(${props=>{ return props.banner?props.banner.replace('{size}','400'):''}}) no-repeat center;
	background-size:100%;
	position:relative;
	p{
    	position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background: hsla(0,0%,100%,.3)
    }
    div{
    	position:fixed;
    	top:0;
    	left:0;
    	z-index:103;
        width: 100%;
        line-height: 1rem;
        background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
        padding: 0 2.1429rem;
        text-align: center;
        color: #fff;
        box-sizing: border-box;

        img{
           	width: .85714rem;
    		height: 1.42857rem;
            position:absolute;
            left: .687265rem;
            top:.687265rem;;
        }
        h3{
            height: 3rem;
            line-height: 3rem;
            font-size: 1rem;
        }
    }
`