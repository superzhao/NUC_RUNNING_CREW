import{_ as I}from"./logo-DmalXPHO.js";import{_ as B,o as p,c as i,a as e,w as n,d as l,t as o,b as a,F as k,e as D,n as C,r as c}from"./index-Bj8WKZbw.js";var h=null;const v={data(){return{month:"4",luckyPepoleIndex:-1,prizeData:[{prize:"阳光普照奖｜康比特能量胶盐丸",name:"-"},{prize:"阳光普照奖｜康比特能量胶盐丸",name:"-"},{prize:"阳光普照奖｜康比特能量胶盐丸",name:"-"},{prize:"阳光普照奖｜康比特能量胶盐丸",name:"-"},{prize:"三等奖｜马孔多空顶帽",name:"-"},{prize:"三等奖｜马孔多冰袖",name:"-"},{prize:"三等奖｜汉马冰袖",name:"-"},{prize:"二等奖｜康比特蛋白粉",name:"-"},{prize:"二等奖｜康比特短袖",name:"-"},{prize:"一等奖｜康比特背包",name:"-"}],pepoleData:["蒋向征02010404北京 194.5","李赵12210113北京 102","万加富31961广州 146","刘凤江01021B3北京 163","李明05021202常州 69","钱庆江～07030542～深圳 180.99","段培华00071B3北京 100","杨铁保  研0408 太原 123","胡恒斌 02051402 广州 299","曹济 61891 北京 185","卢世杰06010543徐州 骑行600","李明亮08030242黔南州 108","郝利华 中北大学5院 122","赵勇12010141太原 136","况立群91951中北 46","李永祥990161北京 253","仇邓强Y190701北京 109","康莉勇01101B2保定  165","任家祥-Y190701-北京 108","王蓓03083303北京 194","卢立09211202忻州 205","岱赫14010741咸阳 81","李秀辉-01101B2-成都 86","姚金博12040341天津 49.93","段容鑫09211202临汾 95.95","郭兆凯11010841汾阳 203","冯雄雄21130414中北在读 164","师晓宇S202105034中北在读 82","张少博21150342 在校  187","杨志伟02090408太原 41","李军54931宁波 123","张晨路15080242太原 122","杨雪17010441天津 109","赵雪07040642西安 54.82","张杰07060344太原 202","曹国言97043B1 上海 257","郭晓宇Y200201桂林 291.5（骑行）","张锐Y120503太原  130","高显领14080341北京 101","刘三宏99010B6太原    100.75","罗林杰07030341南宁 48","闫静12831太原 43.6","王平0302  太原  79.1","左康0120151北京  218","薛彪Y200701太原  82.2","崔亮00010B5石家庄 74.36","张炎01074B3潍坊 137","李威07090143太原 171","吴永恒06010543南宁 185","闫晨光01073B2北京 243","李权91951深圳 86.38","杨光明98049北京 125 骑行102","王子08010142大同  110","潘纯春91961昆明 290 骑行256","杨顺民-中北-软件学院 62","田雄04161403重庆 368","朱明珍179601曲阜 239","吴开源92961广州 261","徐羽硕21140142-中北在读-北京 300","张珂07010241西安 277","谢清勇02043402太原 149","郭龙09210202大同 99","赵鑫14050243+太原 45.3","李俊国97031B2北京 128","徐秋灵18150142中北在读 103.86","王东晓06030342榆次 300","明海云61951深圳 175","卢超  61891 北京 跑140+游11000米","周欣蔚06070243厦门 168","马晨瑞17090642中山 61.06","李蕾13100443太原 52.11","张春兴17050542太原 119.6","于得海02044404杭州 47","刘曰云16030141北京 36.2","祁建斌-13070741-北京 115.38","侯鹏飞 09020442 北京 99.85","樊秋雨02062407山西 运城 202.14","罗媛98102B1-北京 63","殷鹏贤10010743郑州 26","任俊16080741滨州 25（膝盖摔伤，养伤）","龚志红97071B1北京 128.2","郭伯星10040241北京 20","杨楠05043402北京 42","窦勇53861湖北 161","刘健02104405北京 120.02","张凯19函授太原  120.01","王玉06070243深圳 70","田玉华12050141玉林 70","刘志军-03122402-广州 48","乔道迹～中北大学 54","左海春-02056401-无锡 66","孙欣雨20110142中北在读 117","袁华00071B1太原中北 147","许青云97101B1厦门 82","李帅12020441银川 57.7","苗煜04104401X太原 166","沈大川00090B3北京 29","张伟70911上海 81","王福云31931厦门 190","童晓波03102402北京 100.54","田雅静  01061134西安 443.8","周承仙Y050603 150"],prizeIndex:-1,columns:[{title:"奖品",dataIndex:"prize",key:"prize"},{title:"中奖人",dataIndex:"name",key:"name"}]}},methods:{startClick(){const s=this;this.prizeIndex=this.prizeIndex+1,h=setInterval(()=>{const _=Math.floor(Math.random()*this.pepoleData.length);console.log(_),s.luckyPepoleIndex=_},150)},aginClick(){const s=this;h=setInterval(()=>{s.luckyPepoleIndex=Math.floor(Math.random()*this.pepoleData.length)},150)},endClick(){let s=this.prizeData;s[this.prizeIndex].name=this.pepoleData[this.luckyPepoleIndex],this.prizeData=s,clearInterval(h)}}},b=a("img",{class:"logo",src:I},null,-1),P={class:"main"},M={class:"prize-content"},Y=a("span",null,"奖品：",-1),w={key:0},S={key:1},V=a("span",null,"  ",-1),N=a("span",null,"中奖人：",-1),F={key:2},E={key:3},L={class:"name-wrap"},R=a("div",{class:"name-wrap-ma"},null,-1),T=a("br",null,null,-1),X=a("br",null,null,-1);function j(s,_,q,A,t,u){const d=c("a-typography-title"),z=c("a-table"),m=c("a-button"),f=c("a-space"),r=c("a-typography"),y=c("a-typography-text");return p(),i(k,null,[e(d,{class:"page-title"},{default:n(()=>[b,l(" 中北大学校友跑团2024年"+o(t.month)+"月月跑量达标抽奖",1)]),_:1}),e(d,{class:"page-title-bg"}),a("div",P,[e(z,{class:"res-table",dataSource:t.prizeData,columns:t.columns,pagination:!1},null,8,["dataSource","columns"]),a("div",M,[e(f,null,{default:n(()=>[e(m,{type:"primary",onClick:u.startClick},{default:n(()=>[l("开始")]),_:1},8,["onClick"]),e(m,{type:"primary",onClick:u.endClick},{default:n(()=>[l("停止")]),_:1},8,["onClick"]),e(m,{onClick:u.aginClick},{default:n(()=>[l("重抽")]),_:1},8,["onClick"])]),_:1}),e(d,{level:2,class:"active-prize-name"},{default:n(()=>[Y,t.prizeIndex>-1?(p(),i("span",w,o(t.prizeData[t.prizeIndex].prize),1)):(p(),i("span",S,"-")),V,N,t.luckyPepoleIndex>0?(p(),i("span",F,o(t.pepoleData[t.luckyPepoleIndex]),1)):(p(),i("span",E,"-"))]),_:1}),a("div",L,[R,(p(!0),i(k,null,D(t.pepoleData,(g,x)=>(p(),i("span",{class:C(t.luckyPepoleIndex==x?"lucky-name  name":"name")},o(g.substring(0,3).replace(/[0-9|]/,"")),3))),256))]),a("p",null,[e(r,null,{default:n(()=>[l(" 抽奖说明：")]),_:1}),e(r,null,{default:n(()=>[l("1."+o(t.month)+"月接龙人数："+o(t.pepoleData.length)+"人，奖品："+o(t.prizeData.length)+"份。",1)]),_:1}),e(r,null,{default:n(()=>[l('2.每份奖品抽奖过程中，所有人中奖概率相同。中奖逻辑为：点击【开始】按钮时，会每隔100ms生成一个"1~接龙总人数"之间的随机数。关键代码：'),e(y,{code:""},{default:n(()=>[l(" Math.floor(Math.random() * "+o(t.pepoleData.length)+")",1)]),_:1})]),_:1}),e(r,null,{default:n(()=>[l("3.如中奖人不符合中奖资格（中奖资格：已接龙、月跑量>=40km），则本轮抽奖无效，需重新抽奖。")]),_:1}),e(r,null,{default:n(()=>[l("4.每月每人最多有一次中奖机会，如中奖人重复被抽中，则本轮抽奖无效，需重新抽奖。")]),_:1}),e(r,null,{default:n(()=>[l("5.抽奖过程公平公正公开，欢迎参与和监督。")]),_:1})]),a("p",null,[e(y,{strong:"",class:"color-red mt-16"},{default:n(()=>[l(" 赞助说明："),T,l("4月月跑量达标奖品由蒋向征赞助；"),X,l("因跑团经费紧缺，真诚邀请跑团友爱人士为跑团赞助费用或奖品，共同见证跑团的成长与美好～")]),_:1})])])])],64)}const J=B(v,[["render",j]]);export{J as default};
