(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),c=n(11),o=n.n(c),s=(n(96),n(24)),l=n(25),h=n(43),d=n(57),u=n(55),j=n(50),x=n.n(j);var b=function(){return"0a946960ed9c8a758bd296209b592532"},m=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"status",value:function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))}},{key:"getRequest",value:function(e){return x.a.get(e).then(this.status).catch((function(e){console.error(e),alert(e)}))}},{key:"getWeather",value:function(e,t){return this.getRequest("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=").concat("current,minutely,alerts","&units=metric&appid=").concat(b()))}}]),e}();var p=function(){return"3234ac1ece074372ae5030d3e2fdc5ee"},f=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"status",value:function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))}},{key:"getRequest",value:function(e){return x.a.get(e).then(this.status).catch((function(e){console.error(e),alert(e)}))}},{key:"getGeoRev",value:function(e,t){return this.getRequest("https://api.opencagedata.com/geocode/v1/json?q=".concat(e,",").concat(t,"&key=").concat(p()))}},{key:"getGeoFwd",value:function(e){return this.getRequest("https://api.opencagedata.com/geocode/v1/json?q=".concat(e,"&key=").concat(p()))}}]),e}();function O(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],a=new Date(Date.now()),r=t[a.getDay(a)];return e.daily.slice(0,7).map((function(a,i){var c=i,o=new Date(1e3*parseInt(a.dt)),s=t[o.getDay(o)];s=s===r?"Today":s;var l=n[o.getMonth(o)]+" "+o.getDate(o),h="http://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),d=a.weather[0].description[0].toUpperCase()+a.weather[0].description.slice(1,a.weather[0].description.length),u=Math.round(a.temp.max)+"\xb0C",j=Math.round(a.temp.min)+"\xb0C",x=Math.round(10*a.wind_speed)/10+"m/s",b=String("rotate("+a.wind_deg+"deg)"),m=[];if(i<2){var p=0+24*i,f=p+24;m=e.hourly.slice(p,f).map((function(e,t){return{hour:t,temp:Math.round(e.temp)+"\xb0C",feelsLike:Math.round(e.feels_like)+"\xb0C",windSpeed:Math.round(10*e.wind_speed)/10+"m/s",windDirRot:String("rotate("+e.wind_deg+"deg)"),description:e.weather[0].description[0].toUpperCase()+e.weather[0].description.slice(1,e.weather[0].description.length),icon:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}}))}return{key:c,nameDay:s,monthDate:l,icon:h,description:d,maxTemp:u,minTemp:j,windSpeed:x,windDeg:a.wind_deg+"\xb0",windDirRot:b,humidity:a.humidity+"%",dewPoint:a.dew_point+"\xb0C",hourlyWeather:m}}))}var g=n(159),y=n(155),v=n(160),w=n(158);var D=function(e){return Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsxs)(y.a,{item:!0,xs:6,container:!0,spacing:0,direction:"column",alignItems:"flex-start",children:[Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"h4",gutterBottom:!0,children:e.weatherInfo.nameDay})}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"body2",gutterBottom:!0,children:e.weatherInfo.monthDate})}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"body1",gutterBottom:!0,children:e.weatherInfo.description})})]}),Object(a.jsx)(y.a,{item:!0,xs:6,container:!0,justify:"flex-end",children:Object(a.jsx)(y.a,{item:!0,xs:8,children:Object(a.jsx)("img",{className:"weather-icon",src:e.weatherInfo.icon,alt:"Icon for "+e.weatherInfo.description})})})]})};var k=function(e){return Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsxs)(y.a,{item:!0,xs:6,container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{item:!0,xs:!0,children:"Min Temp"}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:e.weatherInfo.minTemp})]}),Object(a.jsxs)(y.a,{item:!0,xs:6,container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{item:!0,xs:!0,children:"Max Temp"}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:e.weatherInfo.maxTemp})]})]})},I=n(79),C=n.n(I);var S=function(e){return Object(a.jsxs)(y.a,{item:!0,xs:12,container:!0,children:[Object(a.jsxs)(y.a,{item:!0,xs:6,container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{item:!0,xs:!0,children:"Wind Speed"}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:e.weatherInfo.windSpeed})]}),Object(a.jsxs)(y.a,{item:!0,xs:6,container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{item:!0,xs:!0,children:"Wind Direction"}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:"N"}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(C.a,{style:{transform:e.weatherInfo.windDirRot}})})]})]})},W=Object(g.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,cursor:"pointer"}}}));var N=function(e){var t=W();return Object(a.jsx)(y.a,{item:!0,xs:11,sm:6,md:4,lg:3,xl:2,onClick:function(t){t.preventDefault(),e.onDayClick(e.weatherInfo.key)},children:Object(a.jsxs)(v.a,{className:t.paper,elevation:5,children:[Object(a.jsx)(D,{weatherInfo:e.weatherInfo}),Object(a.jsx)(k,{weatherInfo:e.weatherInfo}),Object(a.jsx)(S,{weatherInfo:e.weatherInfo})]})})},B=Object(g.a)((function(){return{root:{flexGrow:1}}}));var T=function(e){var t=B();return Object(a.jsx)("div",{className:t.root,style:{padding:15},children:Object(a.jsx)(y.a,{container:!0,spacing:3,justify:"center",children:e.weatherInfo.map((function(t){return Object(a.jsx)(N,{weatherInfo:t,onDayClick:e.onDayClick},t.key)}))})})},A=(n(119),n(64)),M=n(39),R=(n(78),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(M.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(a.jsx)(M.a.Brand,{children:"Weather App"}),Object(a.jsx)(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(M.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsx)(A.a,{className:"mr-auto"}),Object(a.jsx)(A.a,{children:Object(a.jsx)(M.a.Text,{className:"nav-link",children:Object(a.jsx)("a",{href:"https://www.matthewcotton.dev/#/projects",children:"Back to Portfolio"})})})]})]})}}]),n}(i.a.Component)),F=n(162),L=Object(g.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var P=function(e){var t=L();return Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsx)(F.a,{className:t.paper,children:Object(a.jsx)(w.a,{variant:"h3",children:"7 Day Weather Forecast"})})}),Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsx)(F.a,{className:t.paper,children:Object(a.jsx)(w.a,{variant:"h5",gutterBottom:!0,children:e.loadingStatus})})})]})},X=n(80),q=n.n(X),_=Object(g.a)((function(){return{exit:{cursor:"pointer"}}}));var G=function(e){var t=_();return Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsxs)(y.a,{item:!0,xs:11,container:!0,spacing:0,direction:"column",alignItems:"flex-start",children:[Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"h4",gutterBottom:!0,children:e.weatherInfo.nameDay})}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"body2",gutterBottom:!0,children:e.weatherInfo.monthDate})}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"body1",gutterBottom:!0,children:e.weatherInfo.description})})]}),Object(a.jsx)(y.a,{item:!0,xs:1,container:!0,justify:"flex-end",onClick:function(t){t.preventDefault(),e.onXClick()},children:Object(a.jsx)(q.a,{className:t.exit})})]})},H=Object(g.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var J=function(e){var t,n=H();return Object(a.jsx)(y.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:e.hourWeather&&Object(a.jsx)(v.a,{className:n.paper,elevation:2,children:Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsxs)(y.a,{item:!0,xs:6,container:!0,spacing:0,direction:"column",alignItems:"flex-start",children:[Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"h5",gutterBottom:!0,children:(t=e.hourWeather.hour,0===t?"Now":"+"+t+"hr")})}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"body2",gutterBottom:!0,children:e.hourWeather.description})}),Object(a.jsx)(y.a,{item:!0,xs:!0,children:Object(a.jsx)(w.a,{variant:"body1",gutterBottom:!0,children:e.hourWeather.temp})})]}),Object(a.jsx)(y.a,{item:!0,xs:6,container:!0,justify:"flex-end",children:Object(a.jsx)(y.a,{item:!0,xs:8,children:Object(a.jsx)("img",{className:"weather-icon",src:e.hourWeather.icon,alt:"Icon for "+e.hourWeather.description})})})]})})})};var E=function(e){return Object(a.jsxs)(y.a,{container:!0,spacing:1,children:[e.hourlyWeather.map((function(e){return Object(a.jsx)(J,{hourWeather:e},e.hour)})),!e.hourlyWeather.length&&Object(a.jsxs)(w.a,{variant:"h5",gutterBottom:!0,children:[Object(a.jsx)("br",{}),"Hourly forecast only availble for 48 hours."]})]})},U=Object(g.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var V=function(e){var t=U();return e.weatherInfo&&e.weatherInfo.hourlyWeather?Object(a.jsx)("div",{className:t.root,style:{padding:15},children:Object(a.jsx)(y.a,{container:!0,justify:"center",children:Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsxs)(v.a,{className:t.paper,elevation:5,children:[Object(a.jsx)(G,{weatherInfo:e.weatherInfo,onXClick:e.onXClick}),Object(a.jsx)(E,{hourlyWeather:e.weatherInfo.hourlyWeather})]})})})}):""},z=n(81),K=n(161),Q=n(163),Y=Object(g.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary},form:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));var Z=function(e){var t=Y(),n=Object(r.useState)(""),i=Object(z.a)(n,2),c=i[0],o=i[1];return Object(a.jsx)("div",{className:t.root,style:{padding:15},children:Object(a.jsxs)(y.a,{container:!0,spacing:3,children:[Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsx)(F.a,{textAlign:"center",children:Object(a.jsxs)("form",{className:t.form,noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),c.trim()&&e.onsubmit(c),o("")},children:[Object(a.jsx)(K.a,{id:"location-search",label:"Search",type:"search",value:c,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)(Q.a,{variant:"outlined",type:"submit",value:"Submit",children:"Search"})]})})}),Object(a.jsx)(y.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{className:t.paper,children:e.locationData.formatted?"".concat(e.locationData.formatted):""})})]})})},$=(n(123),n(59)),ee=n.n($),te=(n(126),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={weatherData:[],weatherInfo:[],locationData:[],loading:"",placename:"",selectedDay:void 0,visibilityDays:!0,visibilityHours:!1},a.onDayClick=a.onDayClick.bind(Object(h.a)(a)),a.onXClick=a.onXClick.bind(Object(h.a)(a)),a.weatherApiClient=new m,a.geoApiClient=new f,ee.a.options={closeButton:!0,positionClass:"toast-top-center",timeOut:"3000",extendedTimeOut:"1000",showEasing:"swing"},ee.a.clear(),a}return Object(l.a)(n,[{key:"onDayClick",value:function(e){this.setState({selectedDay:e,visibilityDays:!1,visibilityHours:!0})}},{key:"onXClick",value:function(){this.setState({selectedDay:void 0,visibilityDays:!0,visibilityHours:!1})}},{key:"searchLocation",value:function(e){var t=this;this.setState({loading:"loading..."}),this.geoApiClient.getGeoFwd(e).then((function(n){return n.data.results[0]?t.updateLocation(n.data.results[0]):ee.a.error("Location ".concat(e," could not be found"),"No Search Results")})).finally((function(){t.setState({loading:""})}))}},{key:"updateLocation",value:function(e){this.setState({locationData:e}),this.fetchWeather(e.geometry.lat,e.geometry.lng)}},{key:"fetchWeather",value:function(e,t){var n=this;this.weatherApiClient.getWeather(e,t).then((function(e){return n.updateWeather(e.data)}))}},{key:"updateWeather",value:function(e){this.setState({weatherData:e,weatherInfo:O(e)})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(R,{}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(P,{loadingStatus:this.state.loading})}),Object(a.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(Z,{locationData:this.state.locationData,onsubmit:function(t){return e.searchLocation(t)}})})]}),this.state.visibilityDays&&Object(a.jsx)(T,{id:"seven-day",weatherInfo:this.state.weatherInfo,onDayClick:this.onDayClick}),this.state.visibilityHours&&Object(a.jsx)(V,{id:"full-day",weatherInfo:this.state.weatherInfo[this.state.selectedDay],onXClick:this.onXClick})]})}}]),n}(i.a.Component)),ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(te,{})}),document.getElementById("root")),ne()},78:function(e,t,n){},96:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.50698c63.chunk.js.map