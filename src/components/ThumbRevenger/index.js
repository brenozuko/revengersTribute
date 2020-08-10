import React from 'react'
import { WrapperThumb } from './styles'
import { Thumb } from './styles'
import { Avatar } from './styles'



function ThumbRevenger({ src, alt, avatar, nameAlt }) {
    return (

        <WrapperThumb>
            <Thumb src={src} alt={alt} />
            <Avatar src={avatar} alt={nameAlt} />
        </WrapperThumb>

    )

}

export default ThumbRevenger