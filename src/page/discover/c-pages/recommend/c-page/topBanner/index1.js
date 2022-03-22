import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from "antd";
import { getTopBannerAction } from "../../store/actionCreators";

import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from "./style";

const aaa = memo(function TopBanner(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { topBanners } = useSelector(state => {
  //     // return { topBanners: state.recommend.topBanners }
  //     // return { topBanners: state.get("recommend").get("topBanners") }
  //     return { topBanners: state.getIn(["recommend", "topBanners"]) }
  // }, shallowEqual)
  // const dispatch = useDispatch()

  const bannerRef = useRef();

  const { getBanners, topBanners } = props;
  useEffect(() => {
    getBanners();
    // dispatch(getTopBannerAction())
    console.log("useEffectuseEffectuseEffect");
  }, []);

  const beforeChange = useCallback((from, to) => {
    setCurrentIndex(to);
    // console.log('beforeChangebeforeChange')
  }, []);
  const imgUrl =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
  // const imgUrl = 'sfds'
  return (
    <div>
      <BannerWrapper bgImage={imgUrl}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              effect="fade"
              autoplay
              ref={bannerRef}
              beforeChange={beforeChange}
            >
              {topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button
              className="btn left"
              onClick={(e) => bannerRef.current.prev()}
            ></button>
            <button
              className="btn right"
              onClick={(e) => bannerRef.current.next()}
            ></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  );
});

const mapStateToProps = (state) => ({
  topBanners: state.getIn(["recommend", "topBanners"]),
});
const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(aaa));
