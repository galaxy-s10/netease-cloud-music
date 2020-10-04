import React, { memo } from 'react'

import RecommendHeader from "@/components/recommendHeader";


export default memo(function Ranking() {
    return (
        <div>
            <RecommendHeader title="榜单"></RecommendHeader>
            榜单
        </div>
    )
})