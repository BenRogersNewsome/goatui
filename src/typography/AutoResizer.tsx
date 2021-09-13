import styled from 'styled-components'

type AutoResizerProps = {
    lowerResizeLimit: number,
    upperResizeLimit: number,
    parentFontSize: number
}

/** 
 * Treat 1em as the base size at 1000px
*/
export default styled.span<AutoResizerProps>`
    font-size: ${props => props.parentFontSize * props.lowerResizeLimit / props.upperResizeLimit}px;

    @media screen and (min-width: ${props => props.lowerResizeLimit}px) {
        font-size: calc(1em - ${props => props.parentFontSize - props.parentFontSize * props.lowerResizeLimit / props.upperResizeLimit} * (${props => props.upperResizeLimit}px - 100vw) / (${props => props.upperResizeLimit} - ${props => props.lowerResizeLimit}));
    }
    
    @media screen and (min-width: ${props => props.upperResizeLimit}px) {
        font-size: 1em;
    } 
`