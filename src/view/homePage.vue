<template>

    <div style="margin-top:58px">
        <div class="back">
            <img src="../../static/img/backHome.jpg" alt="">
            <div class="leftTitle">
                <h1>廊坊市<br>科技创新劵</h1>
                <p>
                    <span>创新创业</span>
                    <span>政府助力</span>
                </p>
            </div>
            <div class="rightTitle">
                <img src="../../static/img/liucheng.png" alt="">
            </div>
        </div>
        <div class="footer">
            <h3>1<span>科技创新卷申领及兑付流程</span>1</h3>
            <ul>
                <li>
                    <img class="number" src="../../static/img/1.png" alt="">
                    <img class="img" src="../../static/img/system.png" alt="">
                    <h3>系统注册</h3>
                    <p>企业/团队注册账号<br>完善信息</p>
                </li>
                <li>
                    <img class="number" src="../../static/img/2.png" alt="">
                    <img class="img" src="../../static/img/applyUse.png" alt="">
                    <h3>申请使用</h3>
                    <p>网上提交申领信息，政府<br>申领审核信息</p>
                </li>
                <li>
                    <img class="number" src="../../static/img/3.png" alt="">
                    <img class="img" src="../../static/img/jihoushenhe.png" alt="">
                    <h3>机构审核</h3>
                    <p>申领通过，企业/团队<br>使用科技创新卷</p>
                </li>
                <li>
                    <img class="number" src="../../static/img/4.png" alt="">
                    <img class="img" src="../../static/img/service.png" alt="">
                    <h3>提供服务</h3>
                    <p>创新服务机构提供<br>科研服务</p>
                </li>
                <li>
                    <img class="number" src="../../static/img/5.png" alt="">
                    <img class="img" src="../../static/img/reviewapply.png" alt="">
                    <h3>审核兑付</h3>
                    <p>政府审核兑付信息，审核<br>通过进行线下兑付</p>
                </li>
            </ul>
        </div>
        <div class="company">
            Copyright ©2018 [科技创新服务平台] Powered By[科技创新服务平台] Version 1.0.0
        </div>
    </div>

</template>

<script>
export default {
    name: "home-page"
}
</script>




<style scoped lang="scss">
.back {
    position: relative;
    > img {
        height: 600px;
    }
    .leftTitle {
        position: absolute;
        top: 20%;
        left: 12%;
        h1 {
            font-family: PingFangSC-Regular;
            font-size: 90px;
            color: #ffffff;
            letter-spacing: 0;
            line-height: 110px;
            font-weight: normal;
            margin-bottom: 30px;
        }
        p {
            font-family: PingFangSC-Light;
            font-size: 40px;
            color: #ffffff;
            letter-spacing: 8px;
            border-bottom: 1px solid #ffffff;
            border-top: 1px solid #ffffff;
            text-indent: 25px;
        }
    }
    .rightTitle {
        position: absolute;
        top: 7%;
        right: 12%;
        img {
            width: 100%;
        }
    }

    // <h1>廊坊市<br>科技创新劵</h1>
    //         <p>
    //             <span>创新创业</span>
    //             <span>政府助力</span>
    //         </p>
}
.footer {
    background: #ffffff;
    img {
        width: 10%;
    }
    > h3 {
        font-family: PingFangSC-Medium;
        font-size: 22px;
        color: #333333;
        letter-spacing: 0;
        text-align: center;
        font-weight: normal;
        position: relative;
        background: #ffffff;
        width: 700px;
        margin: auto;
        margin-top: 40px;
        span {
            position: absolute;
            left: 50px;
            right: 50px;
            margin: auto;
            z-index: 10;
            width: 300px;
            background: #ffffff;
        }
        margin-bottom: 56px;
    }
    > h3:after {
        content: "";
        position: absolute;
        font-weight: normal;
        height: 1px;
        background: #d8d8d8;
        left: 0;
        right: 0;
        top: 50%;
        z-index: 1;
    }
    ul {
        position: relative;
        overflow: hidden;
        padding-left: 15%;
        padding-right: 15%;
        margin:auto;
        li {
            float: left;
            text-align: center;
            width:20%;
            .number {
                width: 23px;
            }
            .img {
                width: 29px;
                display: block;
                margin: auto;
                margin-top: 29px;
            }
            h3 {
                font-family: PingFangSC-Medium;
                font-size: 20px;
                color: #333333;
                margin-top: 30px;
                letter-spacing: 0;
            }
            p {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #999999;
                letter-spacing: 0;
            }
        }
    }
}
.company{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.23px;
    line-height: 20px;
    text-align:center;
    margin-top: 74px;
    margin-bottom:16px;
}
// <div class="footer">
//         <title>科技创新卷神灵及兑付流程</title>
//         <ul>
//             <li>
//                 <img class="number" src="../../static/img/1.png" alt="">
//                 <img class="img" src="../../static/img/系统注册.png" alt="">
//                 <h3>系统注册</h3>
//                 <p>企业/团队注册账号<br>完善信息</p>
//             </li>

</style>
