import React from "react";
import { Redirect } from "react-router-dom";

import Discover from '../page/discover'
import newAlbum from '../page/discover/c-pages/recommend/c-page/newAlbum'
import Artist from '../page/discover/c-pages/artist'
import Djradio from '../page/discover/c-pages/djradio'
import Ranking from '../page/discover/c-pages/ranking'
import Songs from '../page/discover/c-pages/songs'
import Recommend from '../page/discover/c-pages/recommend'
import Player from "../page/player";

import Friend from '../page/friend'
import Mine from '../page/mine'


const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
            return <Redirect to="/discover"></Redirect>
        }
        // render: () => (
        //     <Redirect to="/discover"></Redirect>
        // )
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: Recommend
            },
            {
                path: "/discover/ranking",
                component: Ranking
            },
            {
                path: "/discover/songs",
                component: Songs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: Djradio
            },
            {
                path: "/discover/artist",
                component: Artist
            },
            {
                path: "/discover/album",
                component: newAlbum
            },
            {
                path: "/discover/player",
                component: Player
            }
        ]
    },
    {
        path: '/friend',
        component: Friend,
    },
    {
        path: '/mine',
        component: Mine,
    }
]
export default routes