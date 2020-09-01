(this["webpackJsonpparks-planner"]=this["webpackJsonpparks-planner"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(5),l=a(6),c=a(2),d=a(8),u=a(7),p=a(1),m=a.n(p);m.a.accessToken="pk.eyJ1Ijoid2hpdG5leXNlaWxlciIsImEiOiJjamxxNWo4cXkyY2RzM3dzNnljdGkzNDB2In0.wR0jz3YiwL-UHC7OtUSMHQ";var f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={lng:5,lat:34,zoom:2,visited:[]},n.map=null,n.renderListing=n.renderListings.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.renderMap()}},{key:"renderMap",value:function(){var e=this,t=[],a=(new m.a.Popup({closeButton:!1}),document.getElementById("feature-filter")),n=(document.getElementById("feature-listing"),new m.a.Map({container:"map",style:"mapbox://styles/mapbox/outdoors-v11",center:[-100.486052,37.830348],zoom:3}));this.map=n,n.on("load",(function(){n.loadImage("https://api.mapbox.com/v4/marker/pin-m-park+609321.png?access_token=pk.eyJ1IjoibnBzIiwiYSI6IkdfeS1OY1UifQ.K8Qn5ojTw4RV1GwBlsci-Q",(function(e,t){if(e)throw e;n.addImage("custom-marker",t)})),n.addControl(new m.a.NavigationControl),n.addControl(new m.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),n.addSource("dem",{type:"raster-dem",url:"mapbox://mapbox.terrain-rgb"}),n.addLayer({id:"hillshading",source:"dem",type:"hillshade"}),n.addSource("parks-boundaries",{type:"geojson",data:"https://gist.githubusercontent.com/erincaughey/2f221501645757e28b715c4063e87595/raw/a90be1b434b1a8cdf71c2abc3373ca63987e2d23/nps-geo-boundary.json"}),n.addSource("parks-markers",{type:"geojson",data:"https://opendata.arcgis.com/datasets/c8d60ffcbf5c4030a17762fe10e81c6a_0.geojson"}),n.addLayer({id:"boundaries",type:"fill",source:"parks-boundaries",paint:{"fill-color":"#527E5B","fill-opacity":.6},filter:["==","$type","Polygon"]}),n.addLayer({id:"markers",type:"symbol",source:"parks-markers",filter:["==",["get","UNIT_TYPE"],"National Park"],layout:{"icon-image":"custom-marker","icon-padding":0,"icon-allow-overlap":!0,"icon-size":.75},paint:{"icon-color":"red"}}),n.on("moveend",(function(){var r=n.queryRenderedFeatures({layers:["markers"]});if(r){var o=e.getUniqueFeatures(r,"UNIT_NAME");e.renderListings(o),a.value="",t=o}})),n.on("click","markers",(function(e){for(var t=e.features[0].geometry.coordinates.slice(),a=e.features[0].properties.UNIT_NAME,r=e.features[0].properties.UNIT_CODE;Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;(new m.a.Popup).setLngLat(t).setHTML('<a href="http://nps.gov/'.concat(r,'">').concat(a,"</a>")).addTo(n)})),n.on("mouseenter","markers",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","markers",(function(){n.getCanvas().style.cursor=""})),a.addEventListener("keyup",(function(a){var r=a.target.value,o=t.filter((function(e){return e.properties.UNIT_NAME.indexOf(r)>-1}));e.renderListings(o),o.length&&n.setFilter("markers",["match",["get","UNIT_NAME"],o.map((function(e){return e.properties.UNIT_NAME})),!0,!1])})),e.renderListings(t)}))}},{key:"getUniqueFeatures",value:function(e,t){var a={};return e.filter((function(e){return!a[e.properties[t]]&&(a[e.properties[t]]=!0,!0)}))}},{key:"renderListings",value:function(e){var t=this,a=document.getElementById("feature-filter"),n=document.getElementById("feature-listing"),r=new m.a.Popup({closeButton:!1}),o=document.createElement("p");n.innerHTML="",e.length?(e.forEach((function(e){var a=e.properties,o=document.createElement("a");o.href="http://nps.gov/".concat(a.UNIT_CODE),o.textContent=a.UNIT_NAME,o.target="_blank",o.addEventListener("mouseover",(function(){r.setLngLat(e.geometry.coordinates).setText(e.properties.UNIT_NAME).addTo(t.map)})),n.appendChild(o)})),a.parentNode.style.display="block"):0===e.length&&""!==a.value?(o.textContent="No results found",n.appendChild(o)):(o.textContent="Drag the map to populate results",n.appendChild(o),a.parentNode.style.display="none",this.map.setFilter("markers",["has","UNIT_TYPE"]))}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"mapContainer"},r.a.createElement("div",{className:"map-overlay"},r.a.createElement("fieldset",null,r.a.createElement("input",{id:"feature-filter",type:"text",placeholder:"Filter results by name"})),r.a.createElement("div",{id:"feature-listing",className:"listing"})),r.a.createElement("div",{id:"map",ref:function(t){return e.mapContainer=t}}))}}]),a}(r.a.Component),g=function(){return r.a.createElement("main",{className:"main"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"brand-logo center",onClick:function(){return window.location.reload()}},"Parks Planner"),r.a.createElement("h4",null,"\u201cI haven\u2019t been everywhere, but it\u2019s on my list.\u201d - Susan Sontag"),r.a.createElement("nav",null)),r.a.createElement(f,null))};i.a.render(r.a.createElement(g,null),document.getElementById("app"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.86855e7f.chunk.js.map