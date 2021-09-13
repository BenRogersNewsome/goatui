import React from 'react'
import styled from 'styled-components'

import { Heading } from 'goatui/typography/Typography'

const Title = styled(Heading)`
    font-size: 48px;
`

export default () => {
    return(
        <Title>Hello</Title>
    );
}