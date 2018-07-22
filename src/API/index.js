/*
猫宿优选信息
    无参
*/
const PREFERENCE_URL = '/house/getHouseListByOption';

/*
房源位置接口
    nameMsg: 城市
*/
const GRTCITY_URL = '/area/getCityName'

/*
筛选房源列表接口
    参数：
        city：用户输入的城市名
        comDate: 入住时间
        leaveDate: 离开时间
        otherMsg: 地标或者房东昵称或者房源标题
        必填currentPage: 当前页   
*/

const HOUSE_URL="/house/getHouseListByConditions"

/*
用户登录信息接口
    参数：
         必填mobile：用户手机号
         必填password: 用户密码
*/

const USERLOGIN_URL="/user/login"

/*
用户注册信息接口
    参数：
         必填mobile：用户手机号
         必填password: 用户密码
*/

const USERREGISTER_URL="/user/regist"

/*
用户注册信息接口
    参数：
         必填mobile：用户手机号
         必填password: 用户密码
         必填newpwd：新密码
*/

const USERUPDATE_URL="/user/updatePwd"


export default {
    PREFERENCE_URL,
    GRTCITY_URL,
    HOUSE_URL,
    USERLOGIN_URL,
    USERREGISTER_URL,
    USERREGISTER_URL
}

