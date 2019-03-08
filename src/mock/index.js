const Mock =require('mockjs');//引入mock.js
const xiaoYou={
    url:["https://static.cordonbleu.edu/Files/MediaFile/58358.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/55318.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/55314.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/55297.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/54885.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/54838.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/54471.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/54470.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/53465.jpg",
     ],
    title:[
        "美食家與雙冠影后-毛舜筠",
        "精彩创业沙龙，带你走进蓝带社交圈",
        "零距离 ·上海校区职业活动日",
        "精益求精的“现代农夫”，蔡闻天和他",
        "职业活动日 | 汇聚人才，传播美食文化",
        "挑战自我，跳出舒适区，Jasper和他",
        "美食因爱而生，胡骁晔和他的甜品之路",
        "葡萄酒的甜与酸，Eason Wu和他的诗与",
        "进阶管理层！Richard与蓝带的故事 ",
    ],
    content:[
        "繼今年四月以電影作品《黃金花》獲得香港第37屆金像獎最佳女主角的藍帶巴黎校友毛舜筠，近日，再次以該影片奪得第58屆亞太影展最佳女主角。 ",
        "3月17日下午，蓝带上海首次校友创业沙龙成功举办。当天，seul & SEUL法餐厅的创始人Bill Hu，Symmetry Design的室内设计师 Jessie Chen， InterContinental Hotels & Resorts的培训经理Zach ...",
        "3月27日下午，蓝带2018首场校园职业活动日在蓝带上海校区一楼Demo教室举行。不少企业向优秀的蓝带学员投出了橄榄枝，学员们也积极向企业展示个人优势，寻找心仪的职位。 ",
        "精雕细琢，蓝带对每道菜的出品都有着严格的标准和规定。精心挑选新鲜食材，认真对待每一道制作程序，严谨的态度和追求卓越的精神让许多学员们在后来学习及工作中都受益匪浅。 “我觉得蓝带的精神就是传统。 ",
        "为促进两岸交流，吸引更多优秀厨艺人才来大陆发展，增进美食文化的传播。2017年12月20日，来自高餐蓝带的五名学员应邀来到蓝带国际学院上海校区参加Career Fair职业活动。期间，学员与众多国际品牌酒店。",
        "蓝带悠久的历史以及课程的专业度是吸引学员们的重要原因之一。蓝带注重培养学员的专业知识以及基本技能，这让蓝带学员在后来的工作和学习中受益匪浅。而不断挑战的蓝带精神也鼓励着许多学员在继承传统的。 ",
        "曾经有一位学员，因在考试中看错要求而差点放弃考试，监考的chef教导他：对于自己做的每一件事都要坚持到底，无论遇到什么状况都不能轻易退缩。就是这样一种蓝带精神后来一直激励着这位学员， 这位学员就是胡骁晔。 ",
        "“我从蓝带毕业到现在，没有从事过任何与葡萄酒无关的工作。” 对于Eason Wu（吴懿帆）而言，与其说侍酒师是他的职业，倒不如说葡萄酒是他所热爱的事业。当然，他的生活不仅仅只有红酒，还有文学、哲学以及。 ",
        "对于任何一家餐饮集团来说，品牌和店铺的装修都是至关重要的。良好的店铺环境能迅速提升餐饮企业在顾客心目中的形象，这是顾客对他即将选择就餐的地方的第一印象。可以说，店铺装修和品牌运营的好坏直接决定了餐饮企业的发展。 "
    ],
}
const tuPian={
    url:[
        "https://static.cordonbleu.edu/Files/MediaFile/59245.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/59145.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/59101.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/59049.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/58932.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/58818.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/58811.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/58737.jpg",
        "https://static.cordonbleu.edu/Files/MediaFile/58635.jpg",
    ],
    title:[
        "2020年澳大利亚葡萄酒及饮料趋势",
        "三越百货一週快闪餐厅",
        "传承非遗经典，创新走向世界",
        "开展您的在线餐旅业务",
        "蓝带国际2018环球美味全国",
        "毕业典礼丨身怀厨艺，扬帆起航！",
        "上海蓝带学员十月班开课！",
        "名企宣讲+现场面试",
        "来巴黎学习的十大理由"
    ],
    content:[
        "如果您希望在餐旅管理行业从业，则必须掌握最新的行业趋势，以便于在这个充满竞争的市场占有一席之地。本文列出了将在2020年澳大利亚饮品市场引领风潮的几款产品。 ",
        "上个月，蓝带国际学院东京校於一年一度日本桥三越百货法国美食节举办了为期一週，以松露为主题的快闪餐厅，为松露季节拉开序幕。",
        "2018年10月24日 – 法国巴黎，“海派餐饮，世界表达”——海派文化世界秀暨首届海派非遗融合文化品鉴交流会于中国驻法国大使馆文化处成功举办。蓝带国际学院携手上海市商。",
        "数字生活的崛起通常被认为是一种挑战，但它也创造了新的机遇。 ",
        "(2018年10月16日，上海）10月16日，历经海选与半决赛的激烈竞争与层层筛选，蓝带国际2018环球美味全国“卓越大厨”烹饪大赛总决赛全面开战。来自大中华地区、马来西亚、泰国、日本、韩国、",
        "9月27日上午，第十二届蓝带料理、甜点班学员以及第二届厨艺管理及面包烘焙班学员毕业典礼在上海半岛酒店隆重举行，上海蓝带厨艺职业技能培训学校校长李小华先生、副校长施雯女士、",
        "学员们将在蓝带国际学院上海校区开始为期六至九个月的专业理论和技能学习。10月9日-10日，蓝带上海分别为料理、烘焙及甜点班学员举办了新生指导活动.",
        "每一个参加蓝带职业活动日的学员， 都与心仪酒店的offer实现了前所未有的接近。 会见行业领袖、现场面试、谈笑风生间当场录取…… ",
        "为什么要在巴黎学习美食，糕点，葡萄酒和管理呢？ 我们为学习烹饪艺术和酒店管理专业的人士们列出了选择留学巴黎的10个理由 ",
    ],
}
const loginData={
    url:[
         "https://static.cordonbleu.edu/Files/MediaFile/60939.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/60933.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/59112.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/60836.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/60531.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/60523.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/57950.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/60348.jpg",
         "https://static.cordonbleu.edu/Files/MediaFile/60343.jpg"
        ],
    title:["蓝带·讲座Chef的厨艺之道",
           "蓝带校友的精品甜品店",
           "食谱:椰子马卡龙",
           "榛子柠檬圣诞树状蛋糕",
           "东京校友获颁史蒂夫商业女性奖",
           "访谈非凡企业家校友黄淑君",
           "Philippe Martel的精致料理",
           "新开始！2019年一月新生报到",
           "毕业典礼丨心怀厨艺，再度起航！"
        ],
    content:["“跟你在节目里看到的一样。戈登·拉姆齐非常毒舌严厉，但他真的特别厉害。英国名厨Jason Atherton也是如此。”Chef Kim Melvin回忆自己同这些餐饮大咖们一起工作的经历时说道， ",
            "蓝带恭祝您和家人农历新年吉祥！金猪大吉，“猪”事如意，美味新一年，从正月探店蓝带校友甜品屋开始，参演金城武电影的蛋糕，蓝带情侣出品的甜点，总有一款能直击你的味蕾！ ",
            "此椰子马卡龙配方取自蓝带及Larousse出版的“L'ÉcoledelaPâtisserie”一书。书中另有其他美味配方。上海蓝带厨艺职业技能培训学校校长李小华先生、 ",
            "蓝带大厨与您分享一款美味的榛子柠檬口味圣诞树状蛋糕配方上海蓝带厨艺职业技能培训学校校长李小华先生、 ",
            "我们很荣幸跟大家分享蓝带国际学院巴黎及东京校友黄淑君(Mandy Huang)女士于去年十一月荣获史蒂夫商业女性奖。 ",
            "正文：蓝带国际学院巴黎及东京校毕业生黄淑君(Mandy huang)是国际知名台湾燕麦品牌Choice的创始人兼主席。 ",
            "这位出生于加蓬首都利伯维尔的厨艺大师对中国食材有着浓厚的兴趣，他选用肥美的鸭肉，制作呈现了一道有名的法国料理。 ",
            "蓝带国际学院上海校区- 2019级-第十六期学员将共同在蓝带顶级教师团队的指导下进行为期六至九个月的专业理论和技能学习，朝着成为厨艺大师的目标前进。 ",
            "12月21日上午，第十三届蓝带料理、甜点班学员以及第二届面包烘焙班学员毕业典礼在上海香格里拉酒店隆重举行，上海蓝带厨艺职业技能培训",    
        ]
}
Mock.mock('/sde','get',loginData);
Mock.mock('/xiaoyou','get',xiaoYou);
Mock.mock('/tupian','get',tuPian);