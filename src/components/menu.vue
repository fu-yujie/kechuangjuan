<template>
  <div class="menu content">
         <el-collapse accordion v-model="activeNames">
            <el-collapse-item :name="`${index}`" v-if="userType==4" v-for="(item,index) in menulist" :key="index">
                <template slot="title">
                    <i :class="`iconimg ${item.imgname}`"></i>{{item.name}}
                </template>
                <ul class="menuin"><li class="menuili" v-for="(item1,index1) in item.menuin" :type="item1.page" :key="index1" @click="menuili($event,item1)">{{item1.name}}</li></ul>
            </el-collapse-item>
             <el-collapse-item :name="`${index}`" v-if="userType==3" v-for="(item,index) in menulist1" :key="index">
                 <template slot="title">
                     <i :class="`iconimg ${item.imgname}`"></i>{{item.name}}
                 </template>
                 <ul class="menuin"><li class="menuili" v-for="(item1,index1) in item.menuin" :type="item1.page" :key="index1" @click="menuili($event,item1)">{{item1.name}}</li></ul>
             </el-collapse-item>
             <el-collapse-item :name="`${index}`" v-if="userType==1" v-for="(item,index) in menulist2" :key="index">
                 <template slot="title">
                     <i :class="`iconimg ${item.imgname}`"></i>{{item.name}}
                 </template>
                 <ul class="menuin"><li class="menuili" v-for="(item1,index1) in item.menuin" :type="item1.page" :key="index1" @click="menuili($event,item1)">{{item1.name}}</li></ul>
             </el-collapse-item>
             <el-collapse-item :name="`${index}`" v-if="userType==2" v-for="(item,index) in menulist3" :key="index">
                 <template slot="title">
                     <i :class="`iconimg ${item.imgname}`"></i>{{item.name}}
                 </template>
                 <ul class="menuin"><li class="menuili" v-for="(item1,index1) in item.menuin" :type="item1.page" :key="index1" @click="menuili($event,item1)">{{item1.name}}</li></ul>
             </el-collapse-item>
       </el-collapse>
  </div>
</template>

<script>
import router from '../router'
import appConfigs from 'src/configs'
import { mapMutations, mapState } from 'vuex'
import {userMenus} from "../model/api";
import util from 'src/util/util.js'
export default {
    name: 'menu',
    props : [],
    data () {
        return {
            userType:'',
            activeNames: ['0'],//默认选择当前路由第一个



            	menulist:[
            		{'name':'审核管理','imgname':'btn_shouye',
             	  'menuin':[
                     {'name':'企业/团队信息审核','page':'accountmanagement_county'},
                     {'name':'申领审核','page':'apply_review'},
                    ]
            		},
            		{'name':'账号管理','imgname':'btn_shouye',
             	  'menuin':[
                            {'name':'账号管理','page':'shi_accountmanage'}
                        ]
            		},
            		{'name':'科技创新券设置','imgname':'btn_shouye',
             	  'menuin':[
                     {'name':'科技创新券设置','page':'ticketedit'}
                    ]
            		}
            ],
            //区县账号登录
            menulist1:[
                {'name':'审核管理','imgname':'btn_shouye',
                    'menuin':[
                        {'name':'企业/团队信息审核','page':'accountmanagement_county'},
                        {'name':'科技创新券申领审核','page':'apply_review_quxian'},
                    ]
                },
                {'name':'账号管理','imgname':'btn_shouye',
                    'menuin':[
                        {'name':'账号管理','page':'accountmanage'}
                    ]
                }
            ],
            //团队或企业
            menulist2:[
                {'name':'科技创新券管理','imgname':'btn_shouye',
                    'menuin':[
                        {'name':'科技创新券管理','page':'ticketmanage'}
                    ]
                },
                {'name':'信息管理_企业','imgname':'btn_shouye',
                    'menuin':[
                        {'name':'信息管理','page':'messagemanagement_b'}
                    ]
                },
            ],
            menulist3:[
                {'name':'科技创新券管理','imgname':'btn_shouye',
                    'menuin':[
                        {'name':'科技创新券管理','page':'ticketmanage'}
                    ]
                },
                {'name':'信息管理_团队','imgname':'btn_shouye',
                    'menuin':[
                        {'name':'信息管理','page':'messagemanagement_t'}
                    ]
                }],

//          	menulist:[
//          		{'name':'审核管理','imgname':'btn_shouye',
//           	  'menuin':[
//                   {'name':'企业/团队信息审核','page':'accountmanagement_county'},
//                   {'name':'申领审核','page':'kcj_apply_review'},
//                  ]
//          		},
//          		{'name':'账号管理','imgname':'btn_shouye',
//           	  'menuin':[
//                   {'name':'账号管理','page':'shi_accountmanage'}
//                  ]
//          		},
//          		{'name':'科技创新卷设置','imgname':'btn_shouye',
//           	  'menuin':[
//                   {'name':'科技创新卷设置','page':'ticketedit'}
//                  ]
//          		}
//          ]
       /*     menulist:[
             	{'name':'科技创新卷管理','imgname':'btn_shouye',
             	  'menuin':[
                     {'name':'科技创新卷管理','page':'ticketmanage'}
                    ]
            		},
                {'name':'信息管理_企业','imgname':'btn_shouye',
                'menuin':[
                    {'name':'信息管理','page':'messagemanagement_b'},
                    {'name':'审核通过','page':'reviewpass_b'},
                    {'name':'区县审核中','page':'countyreview_b'},
                    {'name':'未审核','page':'unreview_b'},
                    {'name':'审核失败','page':'reviewfail_b'},
                    {'name':'已驳回','page':'reject_b'}
                    ]
                },
                {'name':'信息管理_团队','imgname':'btn_shouye',
	                'menuin':[
	                    {'name':'信息管理','page':'messagemanagement_t'},
	                    {'name':'审核通过','page':'reviewpass_t'},
	                    {'name':'未审核','page':'unreview_t'},
	                    {'name':'审核不通过','page':'reviewfail_t'},
	                    {'name':'已驳回','page':'reject_t'}
	                    ]
	            }
            ]*/



//          	menulist:[
//          		{'name':'审核管理','imgname':'btn_shouye',
//           	  'menuin':[
//                   {'name':'企业/团队信息审核','page':'accountmanagement_county'},
//                   {'name':'申领审核','page':'kcj_apply_review'},
//                  ]
//          		},
//          		{'name':'账号管理','imgname':'btn_shouye',
//           	  'menuin':[
//                   {'name':'账号管理','page':'shi_accountmanage'}
//                  ]
//          		},
//          		{'name':'科技创新卷设置','imgname':'btn_shouye',
//           	  'menuin':[
//                   {'name':'科技创新卷设置','page':'ticketedit'}
//                  ]
//          		}
//          ]
           /* menulist:[
             	{'name':'科技创新卷管理','imgname':'btn_shouye',
             	  'menuin':[
                     {'name':'科技创新卷管理','page':'ticketmanage'}
                    ]
            		},
                {'name':'信息管理_企业','imgname':'btn_shouye',
                'menuin':[
                    {'name':'信息管理','page':'messagemanagement_b'},
                    {'name':'审核通过','page':'reviewpass_b'},
                    {'name':'区县审核中','page':'countyreview_b'},
                    {'name':'未审核','page':'unreview_b'},
                    {'name':'审核失败','page':'reviewfail_b'},
                    {'name':'已驳回','page':'reject_b'}
                    ]
                },
                {'name':'信息管理_团队','imgname':'btn_shouye',
                'menuin':[
                    {'name':'信息管理','page':'messagemanagement_t'},
                    {'name':'审核通过','page':'reviewpass_t'},
                    {'name':'未审核','page':'unreview_t'},
                    {'name':'审核不通过','page':'reviewfail_t'},
                    {'name':'已驳回','page':'reject_t'}
                    ]
                },
//              {'name':'审核管理_企业','imgname':'btn_gunali',
//              'menuin':[
//                  {'name':'企业、团队信息审核','page':'accountmanagement'},
//                  {'name':'账号管理','page':'infowrite'},
//                  {'name':'科技创新卷设置','page':'infocheck'},
//                  {'name':'申领审核','page':'apply_review'},
//                  {'name':'申领审核(市科技局)','page':'bus_apply_review'},
//                  ]
//              },
//              {'name':'审核管理_区县','imgname':'btn_gunali',
//              'menuin':[
//                  {'name':'企业、团队信息审核','page':'accountmanagement_county'},
//                  {'name':'科技创新卷申领审核','page':'kcj_apply_review'},
//                  {'name':'市科技局不通过','page':'no_pass_bus'}
//                  ]
//              },

            ]*/





        }
    },
    methods : {
        ...mapMutations({
            SAVE_MENU_LIST: 'SAVE_MENU_LIST',//菜单列表
            SAVE_REFRESH_NAME: 'SAVE_REFRESH_NAME'//二级标题
        }),
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //点击菜单
        menuili(e,item){
            this.$router.push({'name':item.page});
        },
        //根据地址展示按钮选择
        selectmenu(){
            let url = window.location.href;
            let name = '';
            if(url.indexOf('?')!=-1){
                name = url.substring(url.indexOf('#')+1,url.indexOf('?'));
            }else{
                name = url.substring(url.indexOf('#')+1);
            }
            let _arr = name.split('/');
            name = _arr[2];

            if(name){
                //展示按钮点击样式
                this.updatebtn(name);
                //展示大菜单样式和二级标题刷新栏文字
                return this.refreshnamefn(name,_arr);
            }
        },
        //刷新栏标题
        refreshnamefn(name,_arr){
            //展开大的菜单
            let menuindex = '0';
            //三级标题
            let name1 = '';
            let name2 = '';
            let name3 = '';

            for(let i=0;i<this.menulist.length;i++){
                for(let j=0;j<this.menulist[i].menuin.length;j++){
                    let pageitem = this.menulist[i].menuin[j];
                    if(pageitem.page == name){
                        menuindex = i.toString();
                        name1 = this.menulist[i].name;
                        name2 = pageitem.name;
                        //第三层页面集合
                        let _list3 = pageitem.list;
                        if(_list3&&_list3.length>0){
                            for(let k=0;k<_list3.length;k++){
                                if(_list3[k].page == _arr[3]){
                                    name3 = _list3[k].name;
                                }
                            }
                        }
                        break;
                    }
                }
            }

            this.activeNames = [];
            this.activeNames.push(menuindex);

            if(name2){
                if(name3){
                    return '<span class="deepcol">'+name1+'</span> / <span class="deepcol">'+name2+'</span> / <span>'+name3+'</span>';
                }else{
                    return '<span class="deepcol">'+name1+'</span> / <span>'+name2+'</span>';
                }
            }else{
                return '<span>'+name1+'</span>';
            }
        },
        //修改按钮颜色
        updatebtn(name){

            $('.menu').find('.menuili').removeClass('mywhite');
            $('.menu').find('.menuin').find("[type$='"+name+"']").addClass('mywhite');
            console.log(22222)
        }
    },
    created(){
        router.beforeEach((to, from, next) => {
            let name = to.path.split('/')[2];
            next();
            if(name){
                this.updatebtn(name);
                this.SAVE_REFRESH_NAME(this.refreshnamefn(name,to.path.split('/')));
            }
        });
    },
    mounted(){
        setTimeout(()=>{
            let a=util.handleCookieGet('userType');
            console.log(555);
            console.log(a.userType);
            this.userType=a.userType;
            this.SAVE_MENU_LIST(this.menulist);
            this.SAVE_REFRESH_NAME(this.selectmenu());
        },100);
    }
}

</script>
<!--修改组件样式-->
<style lang="scss">
.menu{
    .el-icon-arrow-right:before{
        font-weight: bold;
    }
    .el-collapse-item.is-active .el-collapse-item__header{
        color:$wihte_c;
        background-color:#399CFF;
        .btn_shouye{
            @include bis('../../static/img/btn_shouye2.png');
        }
        .btn_gunali{
            @include bis('../../static/img/icon_guanli.png');
        }
        .btn_jianli{
            @include bis('../../static/img/btn_jianli2.png');
        }
        .btn_jiancha{
            @include bis('../../static/img/btn_jiancha2.png');
        }
        .btn_baogao{
            @include bis('../../static/img/btn_baogao2.png');
        }
        .btn_tongji{
            @include bis('../../static/img/btn_tongji2.png');
        }
        .btn_quanxian{
            @include bis('../../static/img/btn_quanxian2.png');
        }
    }
    .el-collapse-item__header{
        @include font(0.8rem,2.5rem);
        background-color:$menuback;
        color:$menutext1;
        .iconimg{
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top: -0.15rem;
            @include wh(1.2rem,1.2rem);
            @include marginlr(1.35rem,0.55rem);
        }
        .btn_shouye{
            @include bis('../../static/img/btn_shouye1.png');
        }
        .btn_gunali{
            @include bis('../../static/img/icon_guanli_hover.png');
        }
        .btn_jianli{
            @include bis('../../static/img/btn_jianli1.png');
        }
        .btn_jiancha{
            @include bis('../../static/img/btn_jiancha1.png');
        }
        .btn_baogao{
            @include bis('../../static/img/btn_baogao1.png');
        }
        .btn_tongji{
            @include bis('../../static/img/btn_tongji1.png');
        }
        .btn_quanxian{
            @include bis('../../static/img/btn_quanxian1.png');
        }
    }
    .el-collapse-item__content{
        background-color:$menuback2;
        color:$menutext1;
    }
    .el-collapse, .el-collapse-item__header, .el-collapse-item__wrap{
        @include bordertb($menuborder);
        border-top:none;
    }
    .el-collapse-item__arrow{
        transform: rotate(90deg);
    }
    .el-collapse-item.is-active .el-collapse-item__header .el-collapse-item__arrow{
        transform: rotate(270deg);
    }
}
</style>
<style lang="scss" scoped>
  .menu{
        background-color:$menuback;
        top:2.9rem;
        overflow-y: auto;
        overflow-x: hidden;
        @include wh(12.9rem,auto);
        .menuin{
            @include font(0.7rem,1.8rem);
            margin-left: 2.85rem;
            padding-top: 0.8rem;
            cursor: pointer;
        }
  }
</style>
