const warntip = {
	noempty:'该字段不能为空',
    usernametext:'请输入用户名',
    emailempty:'请输入邮箱地址',
    emailreal:'请输入正确的邮箱地址',
    oldpass:'请输入旧密码',
    newpass:'请输入新密码',
    aginpass:'请再次输入密码',
    doublepass:'两次输入密码不一致',
    sextext:'请选择性别',
    cardtypetext:'请选择证件类型',
    cardno:'请输入证件号',
    entity:'请至少选择一种病种',
    uploadimg:'请上传图片',
    usernamempty:'账户不能为空',
    passwordempty:'密码不能为空',
    codeempty:'验证码不能为空'
}
const checkreg = {
	//校验空字段
	checkempty(info){
        info = info.trim();
        if(info === ''){
            return false;
        }else{
            return true;
        }
    },
	
	emptyblur(rule, value, callback) {
        if (value.toString().trim()=='') {
            callback(new Error(warntip.noempty));
        } else {
            callback();
        }
	}
}

export default {
    checkreg : checkreg,
    warntip : warntip
}
