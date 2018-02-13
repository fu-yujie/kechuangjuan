import appConfigs from 'src/configs'
import vueRequest from './vueRequest'
/*import axios from 'axios';
import Vue from "vue";*/

/*var qs = require('qs');*/
/*import config from './config'*/
/**
 * 获取资讯信息
 */
export const get_healthInformationCategoryList = (params) => vueRequest(appConfigs.urlWebHttp + '/mall/news/healthInformationCategoryList?', params, 'GET');
export const login = (params) => vueRequest(appConfigs.urlWebHttp+'/user/login' , params, 'POST');//登录
export const captcha = (params) => vueRequest(appConfigs.urlWebHttp+'/user/captcha' , params, 'GET');//获取验证码
//export const existUserName= (params) => vueRequest(appConfigs.urlWebHttp+'/user/existUserName' , params, 'GET');//用户名是否存在
export const userMenus= (params) => vueRequest(appConfigs.urlWebHttp+'/user/userMenus' , params, 'GET');//获取用户菜单
export const loginOut= (params) => vueRequest(appConfigs.urlWebHttp+'/user/loginout' , params, 'GET');//退出登录


//提交信息审核
export const post_management_b_Message = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/enterprise/infoAudit',params,"POST")
export const get_listpage_Message = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/enterprise/pageListFlow',params,"POST")


//图片上传
export const post_uploadImg = (params) => vueRequest(appConfigs.urlWebHttp + '/upload/file/Aliyun',params,"POST");


export const qiyeAccountmana= (params) => vueRequest(appConfigs.urlWebHttp+'/information/enterAll' , params, 'POST');

export const  existUserName= (data) => vueRequest(appConfigs.urlWebHttp+'/user/existUserName' , {userName:data}, 'GET');//用户名是否存在
//export const  userMenus= (params) => vueRequest(appConfigs.urlWebHttp+'/user/userMenus' , params, 'GET');
//export const  loginout= (params) => vueRequest(appConfigs.urlWebHttp+'/user/loginout' , params, 'GET');

//用户注册
export const register= (params) => vueRequest(appConfigs.urlWebHttp+'/user/register' , params, 'POST');
//获取手机登录验证码
export const numberCode= (data) => vueRequest(appConfigs.urlWebHttp+'/user/peimnBjhk' , {phoneNum:data}, 'GET');

//是否登录
export const isLogin= (params) => vueRequest(appConfigs.urlWebHttp+'/user/test' , params, 'GET');


//审核管理
//企业或团队信息审核列表
export const enterAll= (params) => vueRequest(appConfigs.urlWebHttp+'/information/enterAll' , params, 'POST');
//企业或团队信息审核列表查看详情
export const enterOne= (params) => vueRequest(appConfigs.urlWebHttp+'/information/enterOne' , params, 'POST');



//申领审核
export const enterApplyAll= (params) => vueRequest(appConfigs.urlWebHttp+'/applyInformation/enterApplyAll' , params, 'POST');
//申领审核审核
export const innovateOne= (params) => vueRequest(appConfigs.urlWebHttp+'/applyInformation/innovateOne' , params, 'POST');
//提交审核
export const updateInnovateStatus= (params) => vueRequest(appConfigs.urlWebHttp+'/applyInformation/updateInnovateStatus' , params, 'POST');
//申领审核流水
export const innovateFlow= (params) => vueRequest(appConfigs.urlWebHttp+'/applyInformation/innovateFlow' , params, 'POST');

//账号管理
//查询列表
export const userAll= (params) => vueRequest(appConfigs.urlWebHttp+'/usermanager/userAll' , params, 'POST');
//删除账号
export const delAccount= (params) => vueRequest(appConfigs.urlWebHttp+'/usermanager/delManger' , params, 'POST');
//添加账户
export const addAccount= (params) => vueRequest(appConfigs.urlWebHttp+'/usermanager/addManagerUser' , params, 'POST');
//重置密码
export const resetAccount= (params) => vueRequest(appConfigs.urlWebHttp+'/usermanager/updateUserPw' , params, 'POST');
//修改账号信息
export const userInfo= (params) => vueRequest(appConfigs.urlWebHttp+'/usermanager/userInfo' , params, 'POST');
//保存账号修改
export const saveUserInfo= (params) => vueRequest(appConfigs.urlWebHttp+'/usermanager/saveUserInfo' , params, 'POST');
//审核
export const updateEnterStatus= (params) => vueRequest(appConfigs.urlWebHttp+'/information/updateEnterStatus' , params, 'POST');


//科技创新券设置
//查询初始值
export const initInfo= (params) => vueRequest(appConfigs.urlWebHttp+'/initmanager/initInfo' , params, 'POST');
//修改信息后提交申领
export const saveInitInfo= (params) => vueRequest(appConfigs.urlWebHttp+'/initmanager/saveInitInfo' , params, 'POST');

//团队创新科技券管理
//科创券申领
export const InnovatApply_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/innovate/submitApply', params, 'POST');
//科创券列表
export const getInnovatePageList_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/innovate/pageList', params, 'POST');
//科创券详情
export const getInnovateDetail_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/innovate/details', params, 'GET');
//申请退券
export const returnTicket_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/innovate/returnTicket', params, 'GET');

//更新创新卷
export const updateTicket_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/innovate/update', params, 'POST');
//查训创新服务机构
export const searchServiceName = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/enterprise/serviceOrgQuery',params, 'GET');
//团队信息提交审核
export const teamInfoAudit_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/enterprise/teamInfoAudit',params, 'POST');
//信息管理获取详情信息
export const teamInfoDetail_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/enterprise/teamInfoDetail',params, 'GET');
//企业获取详情信息
export const qiyeInfoDetail_T = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/enterprise/infoDetail',params, 'GET');
//获取用户个人信息
export const getUserInfo = (params) => vueRequest(appConfigs.urlWebHttp + '/user/getUserInfo',params, 'GET');
//删除创新团队团队信息
export const deleteMember_t = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/teamMembers/delete',params, 'GET');
//合同金额限制
export const appliMoneyLimit = (params) => vueRequest(appConfigs.urlWebHttp + '/custom/enterprise/appliMoneyLimit',params, 'GET');









