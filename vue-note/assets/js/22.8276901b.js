(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{303:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"合并options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并options"}},[t._v("#")]),t._v(" 合并options")]),t._v(" "),s("p",[s("code",[t._v("Vue")]),t._v("初始化过程中有合并"),s("code",[t._v("options")]),t._v("的过程，让我们看看"),s("code",[t._v("mergeOptions")]),t._v("方法做了些什么")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveConstructorOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  vm\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("mergeOptions")]),t._v("第一个参数是一个"),s("code",[t._v("resolveConstructorOptions")]),t._v("方法，定义在当前文件下")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveConstructorOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Ctor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Class"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("super"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" superOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveConstructorOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("super"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cachedSuperOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("superOptions\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("superOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" cachedSuperOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// super option changed,")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// need to resolve new options.")]),t._v("\n      Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("superOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" superOptions\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check if there are any late-modified/attached options (#4976)")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modifiedOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveModifiedOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update base extend options")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modifiedOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extendOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" modifiedOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("superOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extendOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ctor\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("它接收的参数是一个构造器，以"),s("code",[t._v("Vue")]),t._v("的构造函数为例，当然大部分情况下这个参数都是"),s("code",[t._v("Vue")]),t._v("的构造函数，如果使用"),s("code",[t._v("Vue.extend()")]),t._v("创造一个子类并"),s("code",[t._v("new")]),t._v(" 一个子类时，那么这个参数就是"),s("code",[t._v("Vue")]),t._v("子类了，这部分内容将会在后面分析"),s("code",[t._v("extend")]),t._v("时详细分析。")]),t._v(" "),s("p",[t._v("如果我们已经深入学习到了3.3小节合并选项章节的话，我们可以继续往下深入了解一下，否则我就简单的认为"),s("code",[t._v("resolveConstructorOptions")]),t._v("功能就是返回一个"),s("code",[t._v("options")]),t._v("，\n这里就是返回当前的"),s("code",[t._v("options")]),t._v("，接下来的内容将会默认你已经学习到第三章了。")]),t._v(" "),s("p",[t._v("当Ctor是Vue构造器时其实就是简单的返回"),s("code",[t._v("Vue.options")]),t._v("，因为子类构造器才会有"),s("code",[t._v("super")]),t._v("属性，当它是子类构造器时它又递归的调用了"),s("code",[t._v("resolveConstructorOpitons")]),t._v("，这时的参数是父级构造器，之后代码还有一些关于父类的options属性是否被改变过的判断和操作，特别需要主要下面这段话：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check if there are any late-modified/attached options (#4976)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modifiedOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveModifiedOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ctor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("需要注意的是注释这段话，可以根据括号内的"),s("code",[t._v("issue")]),t._v("索引去搜一下相关的问题，这句代码是用来解决使用"),s("code",[t._v("vue-hot-reload-api")]),t._v("或者"),s("code",[t._v("vue-loader")]),t._v("时产生的一个"),s("code",[t._v("bug")]),t._v("，大概意思是我们利用这些插件在创建子构造器后了改变了选项，这些改变都被丢弃了。所以这段逻辑是找出改变的选项配置。")]),t._v(" "),s("p",[t._v("我们来详细分析一下"),s("code",[t._v("resolveModifiedOptions")]),t._v("方法，首先定义变量"),s("code",[t._v("modified")]),t._v("但不赋值，定义"),s("code",[t._v("latest")]),t._v("引用当前的构造器的"),s("code",[t._v("options")]),t._v("。不知道我们是否记得我们在3.1小节讲解"),s("code",[t._v("Vue.extend")]),t._v("时候，我们定义了"),s("code",[t._v("sealedOptions")]),t._v("，顾名思义密封的选项，我们再扒出"),s("code",[t._v("extend")]),t._v("的代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      Super"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      extendOptions\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("superOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Super"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options\nSub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sealedOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("可见它保存的是"),s("code",[t._v("extend({}, Sub.options)")]),t._v(", "),s("code",[t._v("Sub.options")]),t._v("则是"),s("code",[t._v("mergeOptions")]),t._v("合并的选项，合并参数是父级"),s("code",[t._v("options")]),t._v("和自身传入的"),s("code",[t._v("options")]),t._v("，"),s("code",[t._v("extend")]),t._v("方法就是简单做了两个对象的合并，这里不知道为什么不使用"),s("code",[t._v("Object.assign")]),t._v("方法，因为看起来他们是一样的，但是用in 方法遍历对象是会读原型上的属性，而对象"),s("code",[t._v("assign")]),t._v("方法则不会。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("_from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" _from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" to\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们继续往下分析，"),s("code",[t._v("sealedOptions")]),t._v("是建立子构造器时候的"),s("code",[t._v("options")]),t._v("选项，而最新的选项latest则是"),s("code",[t._v("Ctor.options")]),t._v("，最后通过"),s("code",[t._v("for in")]),t._v("循环对比新旧选项的差异属性，然后用"),s("code",[t._v("modified")]),t._v("来保存被修改的属性，最后返回"),s("code",[t._v("modified")]),t._v("，也就是由被修改属性组成的对象。")])])}),[],!1,null,null,null);s.default=e.exports}}]);