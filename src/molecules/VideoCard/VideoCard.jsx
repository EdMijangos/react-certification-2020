import React from 'react';
import styled from 'styled-components';
import TextAtom from '../../atoms/Text';
import CardAtom from '../../atoms/Card';

const Thumbnail = styled.div`
    width: 100%;
    height: 120px;
    display: block;
    margin: auto;
    background-image: url(${props => props.thumbnail ? props.thumbnail : "../../../public/404.gif"});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
`

function  VideoCard(props) {
    return (
        <CardAtom id={props.id}>
            <Grid>
                <Thumbnail thumbnail={props.thumbnail} />
                <TextAtom type="subheader">{props.subheader}</TextAtom>
                <TextAtom>{props.description}</TextAtom>
            </Grid>
        </CardAtom>
    )
}

export default VideoCard;