import React from 'react';
import styled from 'styled-components';
import { VideoCard } from '../../molecules';

const StyledCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`

function VideoCardList(props) {
    const items = props.data.map((item, index) => (
        <VideoCard 
            key={item.id.videoId ? item.id.videoId : item.id.channelId}
            id={"video-card-" + index}
            thumbnail={item.snippet.thumbnails.medium.url}
            subheader={item.snippet.title}
            description={item.snippet.description}
        />
    ));

    return (
        <StyledCardList>{items}</StyledCardList>
    )
}

export default VideoCardList;