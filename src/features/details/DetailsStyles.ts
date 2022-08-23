import styled from "@emotion/styled";
interface MovieProps {
    img: string;
    
}
export const MovieContainer = styled.div<MovieProps>`
    height: 100vh;
    background: url(${(props)=>props.img}) no-repeat center center fixed; 
` 

export const MovieDetailsInfo = styled.div`
    grid-row: 2 / 3;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-evenly;
    // width: 90%;
    // background-color: rgba(255, 255, 255, 0.8)
    background: white; opacity: 0.75;
    padding: 20px;
    margin : 20px
    border-radius: 10px;
    font-family: monospace;
    font-size: 20px;
    overflow: scroll;
    position: absolute; 
    bottom: 0; 

    .movie-details-info__overview {
        max-height: 400px;
        margin-bottom: 20px;
        overflow: scroll;
    }
`