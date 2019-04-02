 module.exports = [{
         url: "/app/queryBanner",
         response: function(req, res) {
             res.json({
                 "msg": "success",
                 "code": "10000",
                 "data": [
                     "https://testq.ucarcloud.cn/carCircleApp/201903/111752Cko3z3Zf.png",
                     "https://testq.ucarcloud.cn/carCircleApp/201903/111752y0UwXZ35.png",
                     "https://testq.ucarcloud.cn/carCircleApp/201903/111752z4h6fi9H.png",
                     "https://testq.ucarcloud.cn/carCircleApp/201903/111752beAAVEVn.png",
                 ]
             })
         }
     },
     {
         url: "/app/queryHome",
         response: function(req, res) {
             if (req.query.type == 0) {
                 res.json({
                     "msg": "success",
                     "code": "10000",
                     "data": {
                         "list": [{
                             "phone": null,
                             "title": "阿斯顿·马丁 DBS 2009 款6.0L 手动 Manual Volante",
                             "series": "阿斯顿马丁DBS",
                             "price": "2121211.0",
                             "period_money": "11470.58",
                             "style": "2009 款6.0L 手动 Manual Volante",
                             "id": 5,
                             "first_pay_money": "22222.2",
                             "car_pics": ["https://testq.ucarcloud.cn/carCircleApp/201903/111712NrJuAFfv.png"],
                             "brand": "阿斯顿·马丁"
                         }, {
                             "phone": null,
                             "title": "北汽绅宝 D20 三厢版 1.5L 手动 三厢乐天版",
                             "series": "绅宝D20 三厢版",
                             "price": "120003.0",
                             "period_money": "441.31",
                             "style": "1.5L 手动 三厢乐天版",
                             "id": 4,
                             "first_pay_money": "122.4",
                             "car_pics": ["https://testq.ucarcloud.cn/carCircleApp/201903/111711rvCnpSBw.png"],
                             "brand": "北汽绅宝"
                         }, {
                             "phone": null,
                             "title": "宝马2系运动旅行车(进口) 1.5T 自动 218i运动设计套装",
                             "series": "宝马2系运动旅行车(进口)",
                             "price": "120001.0",
                             "period_money": "484.81",
                             "style": "1.5T 自动 218i运动设计套装",
                             "id": 2,
                             "first_pay_money": "122.2",
                             "car_pics": [
                                 "https://testq.ucarcloud.cn/carCircleApp/201903/1117128E75Fnbo.png",
                                 "https://testq.ucarcloud.cn/carCircleApp/201903/1117124OwxDAVk.png",
                                 "https://testq.ucarcloud.cn/carCircleApp/201903/111712u3ZXfiKq.png"
                             ],
                             "brand": "宝马"
                         }, {
                             "phone": null,
                             "title": "比亚迪 比亚迪F0 1.0L 手动 悦酷型",
                             "series": "比亚迪F0",
                             "price": "120002.0",
                             "period_money": "461.11",
                             "style": "1.0L 手动 悦酷型",
                             "id": 3,
                             "first_pay_money": "122.3",
                             "car_pics": ["https://testq.ucarcloud.cn/carCircleApp/201903/120947cnAIp07q.png"],
                             "brand": "比亚迪"
                         }, {
                             "phone": null,
                             "title": "北汽绅宝 D20 三厢版 1.3L 手动 三厢乐天天窗版",
                             "series": "绅宝D20 三厢版",
                             "price": "120000.0",
                             "period_money": "513.4",
                             "style": "1.3L 手动 三厢乐天天窗版",
                             "id": 1,
                             "first_pay_money": "122.1",
                             "car_pics": [
                                 "https://testq.ucarcloud.cn/carCircleApp/201903/111712wWcUZBrk.png",
                                 "https://testq.ucarcloud.cn/carCircleApp/201903/111712sjq5X7HZ.png",
                                 "https://testq.ucarcloud.cn/carCircleApp/201903/1117129Zxj5K1v.png"
                             ],
                             "brand": "北汽绅宝"
                         }]
                     }
                 })
                 return
             }
             res.json({
                 "msg": "success",
                 "code": "10000",
                 "data": {
                     "totalCount": 13,
                     "pageSize": 5,
                     "totalPage": 3,
                     "currPage": 1,
                     "list": [{
                         "city": "安庆",
                         "title": "日产 劲客 1.5L CVT酷享版",
                         "series": "劲客",
                         "mile": "3",
                         "price": "3",
                         "board_date": "2019-03",
                         "leftfacade": "https://testq.ucarcloud.cn/carCircleApp/OGsaAbEE.jpg",
                         "style": "1.5L CVT酷享版",
                         "id": "5346b0d0-ca82-4c69-a16f-ea72f229f81c",
                         "tag": "c",
                         "brand": "日产"
                     }, {
                         "city": "安庆",
                         "title": "阿斯顿·马丁 Rapide 6.0L 自动 S百年纪念版",
                         "series": "阿斯顿马丁Rapide",
                         "mile": "2",
                         "price": "2",
                         "board_date": "2019-03",
                         "leftfacade": "https://testq.ucarcloud.cn/carCircleApp/RcqrX8sx.png",
                         "style": "6.0L 自动 S百年纪念版",
                         "id": "20d0ef6e-215f-4d8e-9dc8-99f96488eb20",
                         "tag": "c",
                         "brand": "阿斯顿·马丁"
                     }, {
                         "city": "鞍山",
                         "title": "ALPINA(雅宾纳) 3.0T 自动 ALPINA B4 BITURBO",
                         "series": "ALPINA B4 BITURBO",
                         "mile": "3",
                         "price": "3",
                         "board_date": "2019-03",
                         "leftfacade": "https://testq.ucarcloud.cn/carCircleApp/201903/121723PHIiEdsI.png",
                         "style": "3.0T 自动 ALPINA B4 BITURBO",
                         "id": "62014905-1909-4824-bcf6-1ad9e92bef8d",
                         "tag": "c",
                         "brand": "ALPINA(雅宾纳)"
                     }, {
                         "city": "鞍山",
                         "title": "奥迪 奥迪A3 1.4T 双离合 Limousine 35TFSI 风尚型",
                         "series": "奥迪A3",
                         "mile": "3",
                         "price": "3",
                         "board_date": "2019-03",
                         "leftfacade": "https://testq.ucarcloud.cn/carCircleApp/201903/121720MlIKaTZs.png",
                         "style": "1.4T 双离合 Limousine 35TFSI 风尚型",
                         "id": "b2c128a8-6c7c-481a-9d1b-2bd7c4f02613",
                         "tag": "c",
                         "brand": "奥迪"
                     }, {
                         "city": "安庆",
                         "title": "比亚迪 比亚迪F6 2.0L 手动 黄金版尊贵型",
                         "series": "比亚迪F6",
                         "mile": "5",
                         "price": "3",
                         "board_date": "2018-03",
                         "leftfacade": "https://testq.ucarcloud.cn/carCircleApp/201903/1217133piArBC3.png",
                         "style": "2.0L 手动 黄金版尊贵型",
                         "id": "b6d7bada-a24c-4b0d-bac0-bc6dc5a260e5",
                         "tag": "c",
                         "brand": "比亚迪"
                     }]
                 }
             })
         }
     }
 ]