import styled from 'styled-components'
import React from 'react'

type ResponsiveResizerProps = {
    lowerResizeLimit: number,
    upperResizeLimit: number,
    emToPx: number
}

/** 
 * Treat 1em as the base size at 1000px
*/
const ResponsiveResizer = styled.span<ResponsiveResizerProps>`
    font-size: 1em;

    @media screen and (min-width: ${props => props.lowerResizeLimit}px) {
        html {
            font-size: calc(1em - ${props => props.emToPx/2} * (${props => props.upperResizeLimit}px - 100vw) / (${props => props.upperResizeLimit} - ${props => props.lowerResizeLimit}));
        }
    }
    @media screen and (min-width: ${props => props.upperResizeLimit}px) {
        html {
            font-size: 1em;
        }
    } 
`

// ResponsiveResizer.defaultProps = {
//     lowerResizeLimit: 320,
//     upperResizeLimit: 1000
// }

type HeadingProps = ResponsiveResizerProps & {
    lowerResizeLimit?: number,
    upperResizeLimit?: number,
    className?: string,
    children: React.ReactNode
}

export const Heading : React.FC<HeadingProps> = ({ className, children, lowerResizeLimit=320, upperResizeLimit=1000}) => {
    const parentElement = React.useRef<HTMLHeadingElement>(null);

    let [emToPx, setEmToPx] = React.useState(16); // By default
    React.useEffect(() => {
        if(parentElement.current != null){
            setEmToPx(parseFloat(getComputedStyle(parentElement.current).fontSize));
        }
    }, []); // Is this going to be performant?
    
    return(
        <h1 className={className} ref={parentElement}>
            <ResponsiveResizer lowerResizeLimit={lowerResizeLimit} upperResizeLimit={upperResizeLimit} emToPx={emToPx}>
                {children}
            </ResponsiveResizer>
        </h1>
    );
}