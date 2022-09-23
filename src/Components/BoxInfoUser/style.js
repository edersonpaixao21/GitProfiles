import styled from "styled-components"

const Style = {}

Style.Wrapper = styled.div`
    background-color: 
    #1e252e;
    border-radius:12px;
    display: flex;
    justify-content: space-between;
    width: 260px;
    height: 87px;
    align-items:center ;
`
Style.Info = styled.p`
    display: flex ;
    flex-direction:column;
    align-items:center;
    color:#a5a5a5;
    font-size:1.1em;
    margin: 0 8px;

    & span {
        color: #fff;
        padding:2px;
    }
`


export default Style