import React, { useRef } from 'react'

import AutoResizer from './AutoResizer'
import { useParentFontSize } from './util'


type AbstractTextBaseProps = {
    lowerResizeLimit?: number,
    upperResizeLimit?: number,
    className?: string,
    children: React.ReactNode
}

type HeadingProps = AbstractTextBaseProps & {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading : React.FC<HeadingProps> = ({ className, children, lowerResizeLimit=320, upperResizeLimit=1000, tag='h1'}) => {
    const parentElement = useRef<HTMLHeadingElement>(null);
    const parentFontSize = useParentFontSize(parentElement);
    console.log(tag)
    
    return(
        <h1 className={className} ref={parentElement}>
            <AutoResizer lowerResizeLimit={lowerResizeLimit} upperResizeLimit={upperResizeLimit} parentFontSize={parentFontSize}>
                {children}
            </AutoResizer>
        </h1>
    );
}

type ParagraphProps = AbstractTextBaseProps & {
    
}

export const P : React.FC<ParagraphProps> = ({ className, children, lowerResizeLimit=320, upperResizeLimit=1000}) => {
    const parentElement = useRef<HTMLHeadingElement>(null);
    const parentFontSize = useParentFontSize(parentElement);

    return(
        <p className={className} ref={parentElement}>
            <AutoResizer lowerResizeLimit={lowerResizeLimit} upperResizeLimit={upperResizeLimit} parentFontSize={parentFontSize}>
                {children}
            </AutoResizer>
        </p>
    );
}