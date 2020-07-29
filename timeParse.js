/**
 * @param {Number} time - 传入的时间戳，长度为10或者13
 * @param {String} char - 可选参  控制在单字符  不传默认为"-"
 * @param {String} type - 可选参  参数为date或者datetime 不传默认为"date"
 * @return {String} 返回的为格式化好的时间段
 */
const initTimeParse = (time,char="/",type="date")=>{
	if(typeof time !== "number"){
		throw Error("time is not number!")
	}
	if(char!=="-"&&char.length>1){
		throw Error("char.length can not more than 2!")
	}
	if(!(type=="date"||type=="datetime")){
		throw Error("type is error! please enter 'date' or 'datetime'.")
	}
	if(String(time).length === 10){
		time = time * 1000
	}else if(String(time).length === 13){

	}else{
		throw Error("The input time length is not correct! please enter 10 to 13 characters")
	}
	let date = new Date(time)
	let Y = date.getFullYear()
	let M = date.getMonth()+1
	let D = date.getDate()
	let H = date.getHours()
	let Min = date.getMinutes()
	let S = date.getSeconds()
	if(type == "date"){
		return Y + char + M + char + D + " " + H + ":" + Min + ":" + S
	}else{
		return Y + char + M + char + D
	}
}


module.exports = initTimeParse