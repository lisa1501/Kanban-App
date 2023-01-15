import React from "react";
import styled from 'styled-components';

const ContainerTask = styled.div`
    border: 1px solid black;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white
`

function Task(props) {
    return (
        <ContainerTask>
            {props.task.content}
        </ContainerTask>
    )
}

export default Task;