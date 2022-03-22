import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import RecommendHeader from "@/components/recommendHeader";
import AlbumCover from "@/components/albumCover";
import { AlbumWrapper } from "./style";

export default memo(function NewAlbum() {
  const pageRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumAction(20));
  }, [dispatch]);

  const { newAlbum } = useSelector((state) => {
    return { newAlbum: state.getIn(["recommend", "newAlbum"]) };
  }, shallowEqual);

  return (
    <AlbumWrapper>
      <RecommendHeader title="新碟上架"></RecommendHeader>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1, 2, 3].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <AlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      >
                        {/* {iten.id} */}
                      </AlbumCover>
                    );
                    // return <HYAlbumCover key={iten.id}
                    //     info={iten}
                    //     size={100}
                    //     width={118}
                    //     bgp="-570px" />
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
