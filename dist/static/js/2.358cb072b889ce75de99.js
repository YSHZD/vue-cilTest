webpackJsonp([2],{"1lNG":function(t,e){},"8K0M":function(t,e){},GwIj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper"},[s("mt-swipe",{attrs:{auto:4e3}},t._l(t.swiper,function(t){return s("mt-swipe-item",{key:t.id},[s("img",{attrs:{src:t.imgPath}})])})),t._v(" "),s("div",{staticClass:"back",on:{click:function(e){t.$router.go(-1)}}},[s("span",{staticClass:"icon-go"})])],1)},staticRenderFns:[]};var o=s("VU/8")({computed:{swiper:function(){return this.$store.state.detail.productDatas.swiper}}},i,!1,function(t){s("1lNG")},"data-v-0c342dfb",null).exports,c=s("HVJf"),n=s("7+uW");n.default.use(c.b);var a={computed:Object(c.b)({view:function(t){return t.detail.productDatas.view},colSelected:function(t){return t.detail.colSelected},sizeSelected:function(t){return t.detail.sizeSelected},colText:function(){return this.view.chose[this.colSelected].col},sizeText:function(){return this.view.chose[this.sizeSelected].size}}),methods:{colChose:function(t){this.$store.commit("CHANGE_COL_SELECTED",t)},sizeChose:function(t){this.$store.dispatch("setSize",t)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.view?s("section",{staticClass:"chose"},[s("div",{staticClass:"chose-view"},[s("h1",{staticClass:"chose-view-title"},[t._v("\n      "+t._s(t.view.title)),s("br"),t._v(" "),s("span",[t._v("（已选"+t._s(t.colText)+"--"+t._s(t.sizeText)+"）")])]),t._v(" "),s("span",[t._v(t._s(t.view.price)+"元")]),t._v(" "),s("p",{staticClass:"chose-view-intro"},[t._v(t._s(t.view.dec))])]),t._v(" "),s("div",{staticClass:"chose-mychosed",attrs:{ontouchstart:""}},[s("div",{staticClass:"colChose"},t._l(t.view.chose,function(e,i){return s("span",{key:i,class:{active:t.colSelected==i},on:{click:function(e){t.colChose(i)}}},[t._v(t._s(e.col))])})),t._v(" "),s("div",{staticClass:"sizeChose"},t._l(t.view.chose,function(e,i){return s("span",{key:i,class:{active:t.sizeSelected==i},on:{click:function(e){t.sizeChose(i)}}},[t._v("\n        "+t._s(e.size)+"\n      ")])}))])]):t._e()},staticRenderFns:[]};var l=s("VU/8")(a,r,!1,function(t){s("8K0M")},"data-v-6c0c6799",null).exports,u=s("wSez");n.default.use(u.MessageBox),n.default.use(u.Toast);var d={computed:{count:function(){return this.$store.state.detail.count},productDatasView:function(){return this.$store.state.detail.productDatas.view},colSelected:function(){return this.$store.state.detail.colSelected},sizeSelected:function(){return this.$store.state.detail.sizeSelected}},methods:{gopay:function(){var t=this;console.log(this.$store.state.login.token),0===this.$store.state.login.token?u.MessageBox.confirm("请先登入！").then(function(e){t.$router.push({path:"/login"})}).catch(function(t){console.log("取消")}):this.$router.push({name:"购物车"})},addToCar:function(){var t=this;if(0===this.$store.state.login.token)u.MessageBox.confirm("请先登入！").then(function(e){t.$router.push({path:"/login"})}).catch(function(t){console.log("取消")});else{var e=[{title:this.productDatasView.title,price:this.productDatasView.price,size:this.productDatasView.chose[this.sizeSelected].size,col:this.productDatasView.chose[this.colSelected].col,id:this.productDatasView.id,num:this.productDatasView.num,imgPath:this.$store.state.detail.productDatas.swiper[0].imgPath,choseBool:!1}];u.MessageBox.confirm("商品名称:"+e[0].title+"</br>价格:"+e[0].price+"</br>规格:"+e[0].size+"</br>颜色:"+e[0].col+"</br>商品ID:"+e[0].id+"</br>").then(function(s){t.$store.dispatch("setCount",!0),t.$store.dispatch("addCarList",e),Object(u.Toast)({message:"添加成功",duration:1e3})},function(t){return console.log(t)})}}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"footer"},[s("router-link",{staticClass:"footer-index",attrs:{to:{name:"首页"}}},[s("i",{staticClass:"icon-index"})]),t._v(" "),s("strong",{staticClass:"footer-car",on:{click:t.gopay}},[s("i",{staticClass:"icon-car"}),t._v(" "),t.count?s("span",[t._v(t._s(t.count))]):t._e()]),t._v(" "),s("span",{staticClass:"footer-addcar",on:{click:t.addToCar}},[t._v("\n    加入购物车\n  ")])],1)},staticRenderFns:[]};var v={components:{"v-swiper":o,"v-chose":l,"v-footer":s("VU/8")(d,h,!1,function(t){s("zAFJ")},"data-v-b0a467e6",null).exports},beforeCreate:function(){this.$store.dispatch("setDatas")}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("v-swiper"),this._v(" "),e("v-chose"),this._v(" "),e("v-footer")],1)},staticRenderFns:[]};var p=s("VU/8")(v,f,!1,function(t){s("JQua")},"data-v-82458570",null);e.default=p.exports},JQua:function(t,e){},zAFJ:function(t,e){}});
//# sourceMappingURL=2.358cb072b889ce75de99.js.map