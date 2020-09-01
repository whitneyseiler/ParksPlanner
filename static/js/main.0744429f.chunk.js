(this["webpackJsonpparks-planner"]=this["webpackJsonpparks-planner"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(5),l=n(6),c=n(2),u=n(8),p=n(7),d=n(1),m=n.n(d);m.a.accessToken="pk.eyJ1Ijoid2hpdG5leXNlaWxlciIsImEiOiJjamxxNWo4cXkyY2RzM3dzNnljdGkzNDB2In0.wR0jz3YiwL-UHC7OtUSMHQ";var f=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={lng:5,lat:34,zoom:2,visited:[]},a.map=null,a.renderListing=a.renderListings.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.renderMap()}},{key:"renderMap",value:function(){var e=this,t=[],n=(new m.a.Popup({closeButton:!1}),document.getElementById("feature-filter")),a=(document.getElementById("feature-listing"),new m.a.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[-100.486052,37.830348],zoom:3}));this.map=a,a.on("load",(function(){a.loadImage("https://api.mapbox.com/v4/marker/pin-m-park+609321.png?access_token=pk.eyJ1IjoibnBzIiwiYSI6IkdfeS1OY1UifQ.K8Qn5ojTw4RV1GwBlsci-Q",(function(e,t){if(e)throw e;a.addImage("custom-marker",t)})),a.addControl(new m.a.NavigationControl),a.addSource("parks-boundaries",{type:"geojson",data:"https://gist.githubusercontent.com/erincaughey/2f221501645757e28b715c4063e87595/raw/a90be1b434b1a8cdf71c2abc3373ca63987e2d23/nps-geo-boundary.json"}),a.addSource("parks-markers",{type:"geojson",data:"https://opendata.arcgis.com/datasets/c8d60ffcbf5c4030a17762fe10e81c6a_0.geojson"}),a.addLayer({id:"boundaries",type:"fill",source:"parks-boundaries",paint:{"fill-color":"#527E5B","fill-opacity":.6},filter:["==","$type","Polygon"]}),a.addLayer({id:"markers",type:"symbol",source:"parks-markers",filter:["==",["get","UNIT_TYPE"],"National Park"],layout:{"icon-image":"custom-marker","icon-padding":0,"icon-allow-overlap":!0,"icon-size":.75},paint:{"icon-color":"red"}}),a.on("moveend",(function(){var r=a.queryRenderedFeatures({layers:["markers"]});if(r){var o=e.getUniqueFeatures(r,"UNIT_NAME");e.renderListings(o),n.value="",t=o}})),a.on("click","markers",(function(e){for(var t=e.features[0].geometry.coordinates.slice(),n=e.features[0].properties.UNIT_NAME,r=e.features[0].properties.UNIT_CODE;Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;(new m.a.Popup).setLngLat(t).setHTML('<a href="http://nps.gov/'.concat(r,'">').concat(n,"</a>")).addTo(a)})),a.on("mouseenter","markers",(function(){a.getCanvas().style.cursor="pointer"})),a.on("mouseleave","markers",(function(){a.getCanvas().style.cursor=""})),n.addEventListener("keyup",(function(n){var r=n.target.value,o=t.filter((function(e){return e.properties.UNIT_NAME.indexOf(r)>-1}));e.renderListings(o),o.length&&a.setFilter("markers",["match",["get","UNIT_NAME"],o.map((function(e){return e.properties.UNIT_NAME})),!0,!1])})),e.renderListings(t)}))}},{key:"getUniqueFeatures",value:function(e,t){var n={};return e.filter((function(e){return!n[e.properties[t]]&&(n[e.properties[t]]=!0,!0)}))}},{key:"renderListings",value:function(e){var t=this,n=document.getElementById("feature-filter"),a=document.getElementById("feature-listing"),r=new m.a.Popup({closeButton:!1}),o=document.createElement("p");a.innerHTML="",e.length?(e.forEach((function(e){var n=e.properties,o=document.createElement("a");o.href="http://nps.gov/".concat(n.UNIT_CODE),o.textContent=n.UNIT_NAME,o.target="_blank",o.addEventListener("mouseover",(function(){r.setLngLat(e.geometry.coordinates).setText(e.properties.UNIT_NAME).addTo(t.map)})),a.appendChild(o)})),n.parentNode.style.display="block"):0===e.length&&""!==n.value?(o.textContent="No results found",a.appendChild(o)):(o.textContent="Drag the map to populate results",a.appendChild(o),n.parentNode.style.display="none",this.map.setFilter("markers",["has","UNIT_TYPE"]))}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"mapContainer"},r.a.createElement("div",{className:"map-overlay"},r.a.createElement("fieldset",null,r.a.createElement("input",{id:"feature-filter",type:"text",placeholder:"Filter results by name"})),r.a.createElement("div",{id:"feature-listing",className:"listing"})),r.a.createElement("div",{id:"map",ref:function(t){return e.mapContainer=t}}))}}]),n}(r.a.Component),g=function(){return r.a.createElement("main",{className:"main"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"brand-logo center",onClick:function(){return window.location.reload()}},"Parks Planner"),r.a.createElement("h4",null,"\u201cI haven\u2019t been everywhere, but it\u2019s on my list.\u201d - Susan Sontag"),r.a.createElement("nav",null)),r.a.createElement(f,null))};i.a.render(r.a.createElement(g,null),document.getElementById("app"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.0744429f.chunk.js.map