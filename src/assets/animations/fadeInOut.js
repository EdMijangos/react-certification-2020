import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px)
    }

    100% {
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0px)
    }

    100% {
        opacity: 0;
        transform: translateY(-10px)
    }
`;
