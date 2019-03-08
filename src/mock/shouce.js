const Mock =require('mockjs');//引入mock.js
const loginData={
    url:[
        "https://static.cordonbleu.edu/Files/MediaFile/26620.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/34289.png",
        "https://static.cordonbleu.edu/Files/MediaFile/42360.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/55708.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/35961.jpg"
    ],
    toponym:[
        "上海, 中国 ",
        "渥太华, 加拿大 ",
        "高雄, 台湾地区 ",
        "东京, 日本 ",
        "马德里, 西班牙 "
    ],
    correlation:[
        "Prospectous LCB Shanghai CH",
        "小冊子渥太華2017年",
        "藍帶高雄校區",
        "国际手册 东京校区",
        "Madrid Brochure (CH)"
    ],
}
const loginData1={
    url:[
        "https://static.cordonbleu.edu/Files/MediaFile/48624.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/55753.jpg"
    ],
    toponym:[
        "悉尼, 澳洲",
        "阿得雷德, 澳洲"
    ],
    correlation:[
        "2017 澳大利亚手册",
        "2019 澳大利亚手册"
    ]
    
}
const loginData2={
    url:[
        "https://static.cordonbleu.edu/Files/MediaFile/47161.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/38173.png",
        "https://static.cordonbleu.edu/Files/MediaFile/42360.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/58448.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/58448.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/33113.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/33113.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/33113.jpg"
    ],
    toponym:[
        "上海, 中国 ",
        "渥太华, 加拿大",
        "高雄, 台湾地区 ",
        "东京, 日本 ",
        "神户, 日本",
        "墨尔本, 澳洲 ",
        "悉尼, 澳洲 ",
        "阿得雷德, 澳洲 "
    ],
    correlation:[
        "蓝带上海课程申请表",
        "渥太華申請表和信息",
        "高餐藍帶廚藝卓越中心課程申請表1",
        "蓝带国际学院日本校 入学手册和申请 – 2019",
        "蓝带国际学院日本校 入学手册和申请 – 2019",
        "蓝带澳大利亚申请表 - 国际学生",
        "蓝带澳大利亚申请表 - 国际学生",
        "蓝带澳大利亚申请表 - 国际学生"
    ]
}
Mock.mock('/login','get',loginData);
Mock.mock('/login1','get',loginData1);
Mock.mock('/login2','get',loginData2);