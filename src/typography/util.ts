import React from 'react'

export const useParentFontSize = (parentElement: React.RefObject<HTMLElement>) : number => {

    const [parentFontSize, setParentFontSize] = React.useState<number>(16);

    React.useEffect(() => {
        if(parentElement.current != null){
            setParentFontSize(parseFloat(getComputedStyle(parentElement.current).fontSize));
        }
    }, []); // Is this going to be performant?

    return parentFontSize; // TODO: This wont update if an element's font size changes post-render
}