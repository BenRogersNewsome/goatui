import styled from 'styled-components'
import React from 'react'

const ResponsiveResizer = styled.span`
    font-size: 1em;

    @media screen and (min-width: 320px) {
        html {
            font-size: calc(1em + 6 * ((100vw - 320px) / 680));
        }
    }
    @media screen and (min-width: 1000px) {
        html {
            font-size: 22px;
        }
    } 
`

type HeadingProps = {
    className?: string
}

const Heading : React.FC<HeadingProps> = ({ className }) => {
    return(
        <h1 className={className}>
            <span>

            </span>
        </h1>
    );
}