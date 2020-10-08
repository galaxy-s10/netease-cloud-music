import { Map } from 'immutable';

const defaultState = Map({
    playList: [
        {
            "name": "所念皆星河",
            "id": 1476239407,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 1050282,
                    "name": "房东的猫",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 6,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 94909256,
                "name": "所念皆星河",
                "picUrl": "https://p2.music.126.net/JtevaRk1N7ecpmwZCIvwzQ==/109951165293262893.jpg",
                "tns": [
                    "演唱版"
                ],
                "pic_str": "109951165293262893",
                "pic": 109951165293262900
            },
            "dt": 244406,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9779244,
                "vd": -35587
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5867564,
                "vd": -32968
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3911724,
                "vd": -31298
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "publishTime": 0,
            "tns": [
                "演唱版"
            ]
        },
        {
            "name": "假装",
            "id": 504835560,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 12382970,
                    "name": "陈雪凝",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 98,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 38340236,
                "name": "拾陆",
                "picUrl": "https://p1.music.126.net/LLI28TeCfNBo6DK1Ct1k4Q==/109951163249809425.jpg",
                "tns": [],
                "pic_str": "109951163249809425",
                "pic": 109951163249809420
            },
            "dt": 264947,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 10600533,
                "vd": -10700
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6360337,
                "vd": -8000
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4240239,
                "vd": -6400
            },
            "a": null,
            "cd": "01",
            "no": 3,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "publishTime": 1504886400000
        },
        {
            "name": "可不可以",
            "id": 553755659,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 13906123,
                    "name": "张紫豪",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 36,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 38385235,
                "name": "可不可以",
                "picUrl": "https://p2.music.126.net/WafK2OQfEtqXitdDXJ772Q==/109951163252847249.jpg",
                "tns": [],
                "pic_str": "109951163252847249",
                "pic": 109951163252847250
            },
            "dt": 240889,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9638182,
                "vd": -32500
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5782927,
                "vd": -29900
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3855299,
                "vd": -28100
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 687012,
            "publishTime": 1535644800007
        }
    ],
    currentSongIndex: 0,
    currentSong: {},
    sequence: 0, // 0 循环 1 随机 2 单曲
    lyricList: [],  // 歌词
    currentLyricIndex: 0,  // 歌词进度
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case "changeCurrentSong":
            return state.set("currentSong", action.currentSong)
        case "changeCurrentSongIndex":
            return state.set("currentSongIndex", action.currentSongIndex)
        case "changePlayList":
            return state.set("playList", action.playList)
        case "changeSequence":
            return state.set("sequence", action.sequence)
        case "changeLyricList":
            return state.set("lyricList", action.lyricList)
        case "changeCurrentLyricIndex":
            return state.set("currentLyricIndex", action.currentLyricIndex)
        default:
            return state
    }
}

export default reducer