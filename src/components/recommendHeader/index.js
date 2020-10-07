import React, { memo } from 'react'
import PropType from 'prop-types'

import { HeaderWrapper } from './style'

const RecommeneHeader = memo(function (props) {
    const { title, keywords } = props
    // const { title, keywords = [] } = props
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <a href="#/">{item}</a>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <a href="#/">更多</a>
                <i></i>
            </div>
        </HeaderWrapper>
    )
})

RecommeneHeader.propType = {
    title: PropType.string.isRequired,
    keywords: PropType.array
}
RecommeneHeader.defaultProps = {
    keywords: []
}


export default RecommeneHeader
