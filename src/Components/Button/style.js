import styled from "styled-components"

const Style = {}

Style.Button = styled.button`
    background-color: #238636;
    color: #fff;
    font-weight:bold;
    font-size:1.12;
    padding:8px 16px;
    border-radius: 12px;
    background-color: ${props => props.active ? "#238636" : "#238636"}; ;
`

export default Style