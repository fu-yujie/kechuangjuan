import Moment from 'moment'
export default{
	//转换时间
	dateCovert(time,str="YYYY.MM.DD HH:MM:ss"){
		if(time===null ){return "--"}
		return time && Moment(time).format(str)
	}
}
