/*
	***设计模式学习笔记***
*/

/*
	***设计模式分类（3类）【就是从大型软件架构出发，便于升级和维护的软件设计思想，强调降低依赖，降低耦合】

	1、创建型模式
	  【定义】：这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。
	  【包括】： 
	  		工厂模式（Factory Pattern）
	  		抽象工厂模式（Abstract Factory Pattern）
	  		单例模式（Singleton Pattern）
	  		建设者模式（Builder Pattern）
	  		原型模式（Prototype Pattern）

	2、结构型模式
	  【定义】：这些设计模式关注类和队形的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。
	  【包括】：
	  		适配器模式（Adapter Pattern）
	  		桥接模式（Bridge Pattern）
	  		过滤器模式（Filter、Criteria Pattern）
	  		组合模式（Composite Pattern）
	  		装饰器模式（Decorator Pattern）
	  		外观模式（Facade Pattern）
	  		享元模式（Flyweight Pattern）
	  		代理模式（Proxy Pattern）

	3、行为型模式
	  【定义】：这些设计模式特别关注对象之间的通信。
	  【包括】：
	  		责任链模式（Chain of Responsibility Pattern）
	  		命令模式（Command Pattern）
	  		解释器模式（Interpreter Pattern）
	  		迭代器模式（Iterator Pattern）
	  		中介者模式（Mediator Pattern）
	  		备忘录模式（Memento Pattern）
	  		观察者模式（Observer Pattern）
	  		状态模式（State Pattern）
	  		空对象模式（Null Object Pattern）
	  		策略模式（Strategy Pattern）
			模板模式（Template Pattern）
			访问者模式（Vistor Pattern）

	4、J2EE模式
	  【定义】：这些设计模式特别关注表示层，这些模式是由Sun Java Center鉴定的。
	  【包括】：
	  		MVC模式（MVC Pattern）
	  		业务代表模式（Business Delegate Pattern）
	  		组合实体模式（Composite Entity Pattern）
	  		数据访问对象模式（Data Access Object Pattern）
	  		前端控制器模式（Front Controller Pattern）
	  		拦截过滤器模式（Intercepting Filter Pattern）
	  		服务定位器模式（Service Locator Pattern）
	  		传输对象模式（Transfer Object Pattern）
*/

/*
	***设计模式的6大原则

	1、开闭原则（Open Close Principle）
	  【定义】：对扩展开放，对修改关闭。
	         在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插播效果【补充1】。
	         为了使程序的扩展性好，易维护和升级。需要使用接口和抽象类。
	  【补充】：
	  	    (1):
	  		热插拔 （Hot Swap） 即带电插拔，指的是在不关闭系统电源的情况下，
	  		将模块、板卡插入或拔出系统而不影响系统的正常工作，
	  		从而提高了系统的可靠性、快速维修性、冗余性和对灾难的及时恢复能力等。

	2、里氏代换原则（Liskov Subsitution Principle）
	  【定义】：是面向对象设计的基本原则之一，任何基类可以出现的地方，子类一定可以出现。LSP是集成复用的基石，
	  		 只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。
	  		 LSP是对开闭原则的补充。

	  		 实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以LSP是对实现抽象化的具体步骤的规范。

	3、依赖倒转原则（Dependence Inversion Principle）
	  【定义】：是开闭原则的基础，针对接口编程，依赖于抽象而不依赖与具体。

	4、接口隔离原则（Interface Segregation Principle）
	  【定义】：使用多个隔离的接口，比使用单个接口要好。
	         降低类之间的耦合度。
	
	5、迪米特法则，又称最少知道原则（Demeter Principle）
	  【定义】：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

	6、合成复用原则（Composite Reuse Principle）
	  【定义】：尽量使用合成/聚合的方式，而不是使用继承。

	（solid稳定的  记忆首字母）
*/

/*
	***工厂模式（Factory Pattern）***
	***例子-1  
	   【应用场景】：小学，初中，高中，大学不同学历期末考试科目不同（不考虑学校特殊考试项目情况）
*/

var factoryExam = function (stage) {
	if (this instanceof factoryExam) {
		var resp = new this[stage]();
		return resp;
	} else {
		return new factoryExam(stage);
	}
}

factoryExam.prototype = {
	primary: function() {
		this.name = '小学';
		this.subject = ['语文', '数学'];
	},
	junior: function() {
		this.name = '初中';
		this.subject = ['语文', '数学', '英语', '历史', '地理', '化学', '生物'];
	},
	high: function() {
		this.name = '高中';
		this.subject = ['语文', '数学', '英语', '历史', '地理', '化学', '生物', '物理', '政治'];
	},
	college: function() {
		this.name = '大学';
		this.subject = ['微积分', '线性代数', '程序设计', 'Java', '...'];
	}
}

var primaryTemp = new factoryExam('primary');
console.log(primaryTemp);