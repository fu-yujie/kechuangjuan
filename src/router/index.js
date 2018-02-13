import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/' //内容路由
import homechild from '@/view/home/homechild' //首页
import login from '@/view/login/login' //登录
import register from '@/components/register'
import messagemanagement_company from '@/components/messagemanagement_company' //企业信息管理状态公用模板
import messagemanagement_tt from '@/components/messagemanagement_tt' //团队信息管理状态公用模板
import messagemanagement_b from '@/view/messagemanagement_business/messagemanagement_b' //信息管理
import countyreview_b from '@/view/messagemanagement_business/countyreview_b' //信息管理
import reject_b from '@/view/messagemanagement_business/reject_b' //信息管理
import reviewfail_b from '@/view/messagemanagement_business/reviewfail_b' //信息管理
import unreview_b from '@/view/messagemanagement_business/unreview_b' //信息管理
import reviewpass_b from '@/view/messagemanagement_business/reviewpass_b' //信息管理
import messagemanagement_t from '@/view/messagemanagement_team/messagemanagement_t' //信息管理
import reject_t from '@/view/messagemanagement_team/reject_t' //信息管理
import reviewfail_t from '@/view/messagemanagement_team/reviewfail_t' //信息管理
import unreview_t from '@/view/messagemanagement_team/unreview_t' //信息管理
import reviewpass_t from '@/view/messagemanagement_team/reviewpass_t' //信息管理
import accountmanagement from '@/view/accountmanagement_business/accountmanagement' //审核管理——市科技局
import accountmanagement_county from '@/view/accountmanagement_county/accountmanagement_county' //审核管理——区县
import apply_review from '@/view/apply_review/apply_review' // 市科技局-申领审核
import apply_review_quxian from '@/view/apply_review/apply_review_quxian'//区县申领审核
import kcj_apply_review from '@/view/accountmanagement_county/kcj_apply_review' // 市科技局-申领审核
import no_pass_bus from '@/view/apply_review/no_pass_bus' // 市科技局-申领审核
import apply_review_detail from '@/view/apply_review/apply_review_detail'// 市科技局-申领审核查看详情
import bus_apply_review from '@/view/accountmanagement_business/bus_apply_review' // 市科技局-申领审核
import reg_two from '@/view/reg/reg_two' //注册第二步
import reg_three from '@/view/reg/reg_three' //注册第二步

//科技创新券管理
import ticketmanage from '@/view/ticketManage/ticketManage'
import reapply from '@/view/ticketManage/reapply'
import detail from '@/view/ticketManage/detail'
import apply from '@/view/ticketManage/apply'
import homePage from '@/view/homePage'
import policyintroduction from '@/view/policyintroduction'
import tigongjigou from '@/view/tigongjigou'
import accountinfo from '@/view/accountManage/accountInfo'

//账号管理
import accountmanage from '@/view/accountManage/accountManage' //区县
import addaccount from '@/view/accountManage/addaccount'
import shi_accountmanage from '@/view/accountManage/shi_accountManage' //市科技局

//科技创新券设置
import ticketedit from '@/view/ticketSet/ticketedit'

/*import ticketmanage from '@/components/ticketManage'*/
import messagemanagement from '@/view/messagemanagement/messagemanagement' //信息管理
import countyreview from '@/view/messagemanagement/countyreview' //信息管理
import reject from '@/view/messagemanagement/reject' //信息管理
import reviewfail from '@/view/messagemanagement/reviewfail' //信息管理
import unreview from '@/view/messagemanagement/unreview' //信息管理
import reviewpass from '@/view/messagemanagement/reviewpass' //信息管理
//企业/团队信息审核查看详情
import infocheckdetail from '@/view/accountmanagement_county/infocheckdetail'
import infocheckdetail_team from '@/view/accountmanagement_county/infocheckdetail_team'
//区县信息审核团队审核
import quxianReview_team from '@/view/accountmanagement_county/quxianReview_team'
//区县信息审核企业审核
import quxianReview_compony from '@/view/accountmanagement_county/quxianReview_compony'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/homePage',
			name: 'homePage',
			component: homePage
		},
		{
			path: '/policyintroduction',
			name: 'policyintroduction',
			component: policyintroduction
		},
        {
            path: '/tigongjigou',
            name: 'tigongjigou',
            component: tigongjigou
        },
		{//注册
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/reg_two',
			name: 'reg_two',
			component: reg_two
		},
		{
			path: '/reg_three',
			name: 'reg_three',
			component: reg_three

		},
		/*{ path: '*', component: NotFoundComponent },//404页面*/
		{ //菜单内容页面
			path: '/home',
			name: 'home',
			component: home,
			children: [
				/*首页*/
				{//系统首页
				    path: '/home/homechild',
				    name: 'homechild',
				    component: homechild
				},
				{
					path: '/ticketmanage',
					name: 'ticketmanage',
					component: ticketmanage
				},
				{
					path: '/reapply',
					name: 'reapply',
					component: reapply
				},
                //信息审核查看详情_企业
                {
                    path: '/infocheckdetail/:id/:enttype/:polcode',
                    name: 'infocheckdetail',
                    component: infocheckdetail
                },
                //团队
                {
                    path: '/infocheckdetail_team/:id/:enttype/:polcode',
                    name: 'infocheckdetail_team',
                    component: infocheckdetail_team
                },
                //区县信息审核团队审核
                {
                    path: '/quxianReview_team/:id/:enttype/:polcode',
                    name: 'quxianReview_team',
                    component: quxianReview_team
                },
                /*{
                    path: '/quxianReview_team',
                    name: 'quxianReview_team',
                    component: quxianReview_team
                },*/
                {
//                   path: '/quxianReview_compony/:id/:enttype/:polcode',
				    path:'/quxianReview_compony/:id/:enttype/:polcode',
                     name: 'quxianReview_compony',
                    component: quxianReview_compony
                },
				{
					path: '/detail',
					name: 'detail',
					component: detail
				},
				{
					path: '/messagemanagement_company',
					name: 'messagemanagement_company',
					component: messagemanagement_company
				}, {
					path: '/messagemanagement_tt',
					name: 'messagemanagement_tt',
					component: messagemanagement_tt
				},
				{
					path: '/messagemanagement_b',
					name: 'messagemanagement_b',
					component: messagemanagement_b
				},
				{
					path: '/countyreview_b',
					name: 'countyreview_b',
					component: countyreview_b
				},
				{
					path: '/reject_b',
					name: 'reject_b',
					component: reject_b
				},
				{
					path: '/reviewfail_b',
					name: 'reviewfail_b',
					component: reviewfail_b
				},
				{
					path: '/unreview_b',
					name: 'unreview_b',
					component: unreview_b
				},
				{
					path: '/reviewpass_b',
					name: 'reviewpass_b',
					component: reviewpass_b
				},
				{
					path: '/messagemanagement_t',
					name: 'messagemanagement_t',
					component: messagemanagement_t
				},
				{
					path: '/reject_t',
					name: 'reject_t',
					component: reject_t
				},
				{
					path: '/reviewfail_t',
					name: 'reviewfail_t',
					component: reviewfail_t
				},
				{
					path: '/unreview_t',
					name: 'unreview_t',
					component: unreview_t
				},
				{
					path: '/reviewpass_t',
					name: 'reviewpass_t',
					component: reviewpass_t
				},
				{
					path: '/accountmanagement',
					name: 'accountmanagement',
					component: accountmanagement
				},
				{
					path: '/accountmanagement_county',
					name: 'accountmanagement_county',
					component: accountmanagement_county,
                    meta:{title:'科技创新券'}
				},
				{
					path: '/apply_review',
					name: 'apply_review',
					component: apply_review
				},
                //申领审核查看详情
                {
                    path: '/apply_review_detail/:id/:enttype',
                    name: 'apply_review_detail',
                    component: apply_review_detail
                },
                {
                    path: '/apply_review_quxian',
                    name: 'apply_review_quxian',
                    component: apply_review_quxian
                },
				{
					path: '/kcj_apply_review',
					name: 'kcj_apply_review',
					component: kcj_apply_review
				},
				{
					path: '/no_pass_bus/:id/:enttype',
					name: 'no_pass_bus',
					component: no_pass_bus
				},

				{
					path: '/bus_apply_review',
					name: 'bus_apply_review',
					component: bus_apply_review
				},
				{
					path: '/apply',
					name: 'apply',
					component: apply
				},
				{
					path: '/accountinfo',
					name: 'accountinfo',
					component: accountinfo
				},

				{
					path: '/messagemanagement',
					name: 'messagemanagement',
					component: messagemanagement
				},
				{
					path: '/countyreview',
					name: 'countyreview',
					component: countyreview
				},
				{
					path: '/reject',
					name: 'reject',
					component: reject
				},
				{
					path: '/reviewfail',
					name: 'reviewfail',
					component: reviewfail
				},
				{
					path: '/unreview',
					name: 'unreview',
					component: unreview
				},
				{
					path: '/reviewpass',
					name: 'reviewpass',
					component: reviewpass
				},

				//账号管理
				{
					path: '/accountmanage',
					name: 'accountmanage',
					component: accountmanage
				},
				{
					path: '/shi_accountmanage',
					name: 'shi_accountmanage',
					component: shi_accountmanage
				},
				//添加账号
				{
					path: '/addaccount',
					name: 'addaccount',
					component: addaccount
				},
				//科技创新券设置
				{
					path: '/ticketedit',
					name: 'ticketedit',
					component: ticketedit
				},
			]
		},
		{ //登录
			path: '/',
			name: 'login',
			component: login,
        }
	]
})
