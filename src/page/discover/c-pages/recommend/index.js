import React, { memo } from 'react'


import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import TopBanner from "./c-page/topBanner";
import HotRecommend from "./c-page/hotRecommend";
import NewAlbum from "./c-page/newAlbum";
import Ranking from "./c-page/ranking";

function Recommend(props) { 

  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <Ranking></Ranking>
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(Recommend)


// function Recommend(props) {
//   const { getBanner, topBanners } = props
//   useEffect(() => {
//     getBanner()
//   }, [getBanner])

//   return (
//     <div>
//       {topBanners.length}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanner: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
