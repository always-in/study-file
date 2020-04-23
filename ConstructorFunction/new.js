/*
 	构造函数 - 学习
 	关键字 new 调用
 	首字母一般大写
*/

/*
	使用场景，如一个班级列表，学生的属性: 姓名、年龄、学号、成绩（数学，语文，英语）、等
	传统使用方法
	var student1 = { name: '张三', age: 14, sid: '01', grade: 90 }
	var student2 = { name: '李四', age: 15, sid: '02', grade: 87 }
	...
	公共部分的属性，name, age, sid, grade就可以使用构造函数解决
	不用重复定义
*/

// 例子-1 先定义班级, student = new ClassPerson(param,param,...)即可实现
function ClassPerson(name, age, sid, grade){
	this.name = name;
	this.age = age;
	this.sid = sid;
	this.grade = grade;
}

/*
	ClassPerson函数创建好以后并不知道是普通函数还是构造函数，
	***当函数是以 new 关键字来调用的时候，我们才能说它是一个构造函数（如下调用）***
*/

var student1 = new ClassPerson('赵一', 1, '01', 1);
var student2 = new ClassPerson('钱二'， 2, '02', 2);

/*
	***此时，构造函数会有以下几个执行过程：
	***(1)调用时，会创建一个新的内存空间，标记为 ClassPerson 的实例；
	***(2)函数体内部的 this 指向该内存；
*/

var student3 = new ClassPerson('孙三', 3, '03', 3); // 创建一个新内存  #stdudent3
var student4 = new ClassPerson('李四'， 4, '04', 4); // 创建一个新内存 #stdudent4

// 每当函数创建一个新的实例，就会创建一个对应的内存空间，
// 如上：创建student3实例，就创建#student3内存空间，函数内部的this指向#student3
// 同理，创建student4实例，就创建#student4内存空间，函数内部的this指向#student4

/*
	***(3)给this添加属性，就相当于给实例添加属性；
	***(4)由于函数体内部的this指向新创建的内存空间，默认返回 this ，
		  就相当于默认返回了该内存空间，如 #stdudent3，
		  此时，#stdudent3 的内存空间被变量 stdudent3 所接受，
		  stdudent3 这个变量，保存的内存地址就是 #stdudent3，同时被标记为方法 ClassPerson 的实例。
*/

/*
	构造函数的返回值：
	例子-2	
*/
// 没有手动修改或添加返回值，默认返回this

function ClassPerson(name, age, sid, grade){
	this.name = name;
	this.age = age;
	this.sid = sid;
	this.grade = grade;
}
var student5 = new ClassPerson('周五'， 5, '05', 5); // 创建一个新内存 #stdudent5

/* 
	***手动添加一个基本数据类型的返回值
    ***例子-3
*/
function ClassPerson(name, age, sid, grade){
	this.name = name;
	this.age = age;
	this.sid = sid;
	this.grade = grade;
	return 100;
}
var student6 = new ClassPerson('吴六'， 6, '06', 6); // 创建一个新内存 #stdudent6
console.log(student6.name); // 吴六
// ***如果是普通函数调用，如：
var commonStudent = ClassPerson(); // => 返回值为100


/* 
	***手动添加一个复杂数据类型的返回值
    ***例子-4
*/
function ClassPerson(name, age, sid, grade){
	this.name = name;
	this.age = age;
	this.sid = sid;
	this.grade = grade;
	return ['name', 'age', 'sid', 'grade'];
}
var student7 = new ClassPerson('郑七'， 7, '07', 7); // 创建一个新内存 #stdudent7
console.log(student7.name); // => undefined
console.log(student7.length); // => 4
console.log(student7[2]); // => 'sid'

/* 
    ***例子-5
*/
function ClassPerson(name, age, sid, grade){
	this.name = name;
	this.age = age;
	this.sid = sid;
	this.grade = grade;
	return { name:'小八', age:'80', sid:'800', grade:180};
}
var student8 = new ClassPerson('王八'， 8, '08', 8); // 创建一个新内存 #stdudent8
console.log(student8.name); // => 小八

/*
	***例子-6
	如果在构造函数里面指定返回对象，this可能会丢失，如下
*/
function ClassPerson(name, age, sid, grade){
	this.name = name;
	this.age = age;
	this.sid = sid;
	this.grade = grade;
	this.say = function(){
		return 'my name is' + this.name
	}
	var _this = {};
	_this.name = 'my name is _this';
	return _this; 
}
var student9 = new ClassPerson('小九'， 9, '09', 9); // 创建一个新内存 #stdudent9
console.log(student8.name); // => 'my name is _this'

/*
	***例子-7
	***直接调用函数，不适用new关键字，this指向window
	***用例子-6方法举例
*/
var student10 = ClassPerson('小十'， 10, '10', 10); 
console.log(student10.name); // => undefined
console.log(window.name); // => '小十'

/*
	***例子-8
	***如果因为忘记使用new 关键字或者不用new 关键字也可以调用函数，我们可以如下例子改造函数
*/
function ClassPerson(name, age, sid, grade){
	if (!(this instanceof ClassPerson)) {
		return new ClassPerson(name, age, sid, grade)
	}
	this.name = name;
	this.age = age;
	this.sid = sid;
	this.grade = grade;
}
var student11 = ClassPerson('小十一'， 11, '11', 11); 
console.log(student10.name); // => '小十一'
