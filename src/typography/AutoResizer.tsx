import styled from 'styled-components'

type AutoResizerProps = {
    lowerResizeLimit: number,
    upperResizeLimit: number,
    parentFontSize: number
}
/** 
 * A component to be rendered inside a text component, but around the text-component's children, to manage the resizing of the text based on media queries.
 * 
 * The default behaviour of the span is to inherit the font-size of the parent at a viewport width of `upperResizeLimit`, and scale down the font in direct proportion to the view size from `upperResizeLimit` to `lowerResizeLimit`, at which point the font-size remains constant.
 * By default `upperResizeLimit=1000px` and `lowerResizeLimit=320px`.
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