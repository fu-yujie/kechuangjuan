export default {
	//科技卷历史状态
	changejuanStatus(type) {
		let map = {
			"1": '申领中',
			"2": '待使用',
			"3": '申领失败',
			"4": '已退券'
		}
		return map[type] || type
	},
	//地區
	currentarea(area) {
		let map = [

			{
				value: "",
				text: "不限",
			},
			{
				value: "131002",
				text: "安次区"
			}, {
				value: "131003",
				text: "广阳区"
			}, {
				value: "131022",
				text: "固安县"
			}, {
				value: "131023",
				text: "永清县"
			}, {
				value: "131024",
				text: "香河县"
			}, {
				value: "131025",
				text: "大城县"
			}, {
				value: "131026",
				text: "文安县"
			}, {
				value: "131028",
				text: "大厂回族自治县"
			}, {
				value: "131051",
				text: "开发区"
			}, {
				value: "131052",
				text: "燕郊经济技术开发区"
			}, {
				value: "131081",
				text: "霸州市"
			}, {
				value: "131082",
				text: "三河市"
			}, {
				value: "131083",
				text: "其它区"
			}
		]
		return map[area] || area
	},
	//审核状态
	changeReviewStatus(value) {
		let map = {
			"1": '区县审核中',
			"2": '区县审核不通过',
			"3": '区县审核通过，市科技局审核中',
			"4": '市科技局审核中',
			"5": '市科技局审核通过',
			"6": '市科技局审核不通过',
			"7": '退券审核通过'
		}
		return map[value] || value
	},
    reviewstatus(value){
	    let map={
	        '0':'区县审核中',
            '1':'审核通过',
            '2':'审核不通过',
            '3':'审核已驳回，待重新提交'
        }
        return map[value] || value
    },
    qiyestatus(value){
        let map={
            '0':'企业',
            '1':'创新团队',
            '3':'服务机构'
        }
        return map[value] || value
    },
    fkEntattributeType(value){
        let map={
            '1':'科技型中小企业',
            '2':'高新技术企业',
            '3':'科技小巨人农业',
            '4':'农业科技小巨人企业'
        }
        return map[value] || value
    },
        areastaus(value){
	    /*alert(111)*/
        let map={

             "131000": "不限",


            "131002": "安次区",

           "131003": "广阳区",

            "131022": "固安县",

            "131023": "永清县",

            "131024": "香河县",

            "131025": "大城县",

            "131026": "文安县",

            "131028": "大厂回族自治县",

            "131051": "开发区",

            "131052": "燕郊经济技术开发区",

            "131081": "霸州市",

            "131082": "三河市",

             "131083": "其它区"

        };
        return map[value] || value
    },
    userTypeStatus(value){
        let map={
            '1':'企业账号',
            '2':'团队账号',
            '3':'区县账号',
            '4':'市科技局账号'
        }
        return map[value] || value
    },
    /*areastatus(value){
        let map={
            '1':'企业账号',
            '2':'团队账号',
            '3':'区县账号',
            '4':'市科技局账号'
        }
        return map[value] || value
    },*/
changeservicetypeCode(type){
    let map ={
        "1":'检测检验服务',
        "2":'技术交易服务',
        "3":'知识产权服务',
        "4":'科技咨询服务',
        "5":'创业孵化服务'
    }
    return map[type] || type
},

	//信息管理的审核状态
	changeMessageStatus(value) {
		let map = {
			"0": '区县审核中',
			"1": '审核通过',
			"2": '审核不通过',
			"3": '已驳回'
		}
		return map[value] || value
	},
	//创新服务类型
	changeservicetypeCode(type) {
		let map = {
			"1": '检测检验服务',
			"2": '技术交易服务',
			"3": '知识产权服务',
			"4": '科技咨询服务',
			"5": '创业孵化服务'
		}
		return map[type] || type
	},
	//创新服务机构
	changeserverjigou (value) {
		let map = {
			"0000000001":"北华航天工业学院技术转移中心",
			"0000000002":"河北省航天遥感信息处理与应用协同创新中心",
			"0000000003":"廊坊师范学院技术转移中心",
			"0000000004":"防灾科技学院",
			"0000000005":"智多星机械设计工作室",
			"0000000006":"河北清华发展研究院",
			"0000000007":"廊坊市产品质量监督检验所",
			"0000000008":"河北省计量监督检测院廊坊分院",
			"0000000009":"河北省地球物理勘查院廊坊物探实验室",
			"0000000010":"中国建筑科学研究院建筑机械化研究分院",
			"0000000011":"中国石油天然气管道科学研究院国家工程实验室",
			"0000000012":"富智康检测中心",
			"0000000013":"河北绿农检测技术服务有限公司",
			"0000000014":"新苑阳光院士工作站",
			"0000000015":"恒宇工具院士工作站",
			"0000000016":"思科农业院士工作站",
			"0000000017":"河北省钢木家具产业技术研究院",
			"0000000018":"河北省煤基清洁能源产业技术研究院",
			"0000000019":"廊坊市供热计量节能系统研发中心",
			"0000000020":"廊坊市节能环保金属表面清洗技术研发中心",
			"0000000021":"廊坊市工程地质自动化安全监测技术自动研发中心",
			"0000000022": "廊坊市电厂燃料智能管控平台研发中心",
			"0000000023":"廊坊市基因筛查重点实验室",
			"0000000024":"廊坊市阻燃新材料技术研发中心",
			"0000000025":"廊坊市环境监测重点实验室",
			"0000000026":"河北省农村信息化工程技术研究中心",
			"0000000027":"河北省氨基酸工程技术研究中心",
			"0000000028":"廊坊市节能环保产业技术研究院",
			"0000000029":"廊坊市智慧环境生态产业技术研究院",
			"0000000030":"埋地结构力学重点实验室",
			"0000000031":"廊坊市光整加工技术研发中心",
			"0000000032":"土壤污染多功能修复剂研发中心",
			"0000000033":"农业种植物联网与服务系统研发中心",
			"0000000034":"廊坊市应用型智慧城市技术研发中心",
			"0000000035":"廊坊市宏泰科技成果孵化服务有限公司",
			"0000000036":"星火孵化器",
			"0000000037":"三河燕郊新技术创业服务中心",
			"0000000038":"廊坊壹佰众创空间",
			"0000000039":"乐聪众创空间",
			"0000000040":"兴远高科孵化器",
			"0000000041":"中信国安孵化器",
			"0000000042":"志晟互联网+创客中心",
			"0000000043":"北京中誉威圣知识产权代理有限公司廊坊分公司",
			"0000000044":"北京志霖恒远知识产权代理事务所（普通合伙）廊坊分所",
			"0000000045":"北京立成智业专利代理事务所（普通合伙）廊坊办事处",
			"0000000046":"廊坊市诚睿工程咨询有限公司",
			"0000000047":"廊坊市生产力科技发展有限公司",
			"0000000048":"河北裂变客科技成果孵化器有限公司"
		}
		return map[value] || value
	}
}
