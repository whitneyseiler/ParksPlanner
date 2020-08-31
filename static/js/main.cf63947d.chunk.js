(this["webpackJsonpparks-planner"]=this["webpackJsonpparks-planner"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=a(3),l=a(4),c=a(2),u=a(6),d=a(5),p=a(1),m=a.n(p);m.a.accessToken="pk.eyJ1Ijoid2hpdG5leXNlaWxlciIsImEiOiJjamxxNWo4cXkyY2RzM3dzNnljdGkzNDB2In0.wR0jz3YiwL-UHC7OtUSMHQ";var f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={lng:5,lat:34,zoom:2,visited:[]},n.map=null,n.renderListing=n.renderListings.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.renderMap()}},{key:"renderMap",value:function(){var e=this,t=this,a=[],n=new m.a.Popup({closeButton:!1}),r=document.getElementById("feature-filter"),o=(document.getElementById("feature-listing"),new m.a.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[-100.486052,37.830348],zoom:3}));this.map=o,o.on("load",(function(){o.loadImage("https://api.mapbox.com/v4/marker/pin-m-park+609321.png?access_token=pk.eyJ1IjoibnBzIiwiYSI6IkdfeS1OY1UifQ.K8Qn5ojTw4RV1GwBlsci-Q",(function(e,t){if(e)throw e;o.addImage("custom-marker",t)})),o.addSource("parks-boundaries",{type:"geojson",data:"https://gist.githubusercontent.com/erincaughey/2f221501645757e28b715c4063e87595/raw/a90be1b434b1a8cdf71c2abc3373ca63987e2d23/nps-geo-boundary.json"}),o.addSource("parks-markers",{type:"geojson",data:"https://opendata.arcgis.com/datasets/c8d60ffcbf5c4030a17762fe10e81c6a_0.geojson"}),o.addLayer({id:"boundaries",type:"fill",source:"parks-boundaries",paint:{"fill-color":"#527E5B","fill-opacity":.6},filter:["all",["==","$type","Polygon"],["==","feature.properties.UNIT_TYPE","National Park"]]}),o.addLayer({id:"markers",type:"symbol",source:"parks-markers",filter:["==",["get","UNIT_TYPE"],"National Park"],layout:{"icon-image":"custom-marker","icon-padding":0,"icon-allow-overlap":!0,"icon-size":.75},paint:{"icon-color":"red"}}),o.on("moveend",(function(){var e=o.queryRenderedFeatures({layers:["markers"]});if(e){var n=t.getUniqueFeatures(e,"UNIT_NAME");t.renderListings(n),r.value="",a=n}})),o.on("click","markers",(function(t){var a=e.state.visited,n=t.features[0].UNIT_CODE;t.features.length>0&&(a.includes(n)?(a.splice(a.indexOf(n),1),e.setState({visited:a})):(a.push(n),e.setState({visited:a})))})),o.on("mousemove","markers",(function(e){o.getCanvas().style.cursor="pointer";var t=e.features[0];n.setLngLat(t.geometry.coordinates).setText(t.properties.UNIT_NAME).addTo(o)})),o.on("mouseleave","markers",(function(e){o.getCanvas().style.cursor="",n.remove()})),r.addEventListener("keyup",(function(e){var n=e.target.value,r=a.filter((function(e){return e.properties.UNIT_NAME.indexOf(n)>-1}));t.renderListings(r),r.length&&o.setFilter("markers",["match",["get","UNIT_NAME"],r.map((function(e){return e.properties.UNIT_NAME})),!0,!1])})),t.renderListings(a)}))}},{key:"getUniqueFeatures",value:function(e,t){var a={};return e.filter((function(e){return!a[e.properties[t]]&&(a[e.properties[t]]=!0,!0)}))}},{key:"renderListings",value:function(e){var t=this,a=document.getElementById("feature-filter"),n=document.getElementById("feature-listing"),r=new m.a.Popup({closeButton:!1}),o=document.createElement("p");n.innerHTML="",e.length?(e.forEach((function(e){var a=e.properties;if("National Park"===a.UNIT_TYPE){var o=document.createElement("span");o.textContent=a.UNIT_NAME,o.addEventListener("mouseover",(function(){r.setLngLat(e.geometry.coordinates).setText(e.properties.UNIT_NAME).addTo(t.map)})),n.appendChild(o)}})),a.parentNode.style.display="block"):0===e.length&&""!==a.value?(o.textContent="No results found",n.appendChild(o)):(o.textContent="Drag the map to populate results",n.appendChild(o),a.parentNode.style.display="none",this.map.setFilter("markers",["has","UNIT_TYPE"]))}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"mapContainer"},r.a.createElement("div",{className:"map-overlay"},r.a.createElement("fieldset",null,r.a.createElement("input",{id:"feature-filter",type:"text",placeholder:"Filter results by name"})),r.a.createElement("div",{id:"feature-listing",className:"listing"})),r.a.createElement("div",{id:"map",ref:function(t){return e.mapContainer=t}}))}}]),a}(r.a.Component);m.a.accessToken="pk.eyJ1Ijoid2hpdG5leXNlaWxlciIsImEiOiJjamxxNWo4cXkyY2RzM3dzNnljdGkzNDB2In0.wR0jz3YiwL-UHC7OtUSMHQ";var g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={lng:5,lat:34,zoom:2,visited:[]},n.map=null,n.renderListing=n.renderListings.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.renderMap()}},{key:"renderMap",value:function(){var e=this,t=this,a=[],n=new m.a.Popup({closeButton:!1}),r=document.getElementById("feature-filter"),o=(document.getElementById("feature-listing"),new m.a.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[-100.486052,37.830348],zoom:3}));this.map=o,o.on("load",(function(){o.loadImage("https://api.mapbox.com/v4/marker/pin-m-park+609321.png?access_token=pk.eyJ1IjoibnBzIiwiYSI6IkdfeS1OY1UifQ.K8Qn5ojTw4RV1GwBlsci-Q",(function(e,t){if(e)throw e;o.addImage("custom-marker",t)})),o.addSource("parks-boundaries",{type:"geojson",data:"https://gist.githubusercontent.com/erincaughey/2f221501645757e28b715c4063e87595/raw/a90be1b434b1a8cdf71c2abc3373ca63987e2d23/nps-geo-boundary.json"}),o.addSource("parks-markers",{type:"geojson",data:"https://opendata.arcgis.com/datasets/c8d60ffcbf5c4030a17762fe10e81c6a_0.geojson"}),o.addLayer({id:"boundaries",type:"fill",source:"parks-boundaries",paint:{"fill-color":"#527E5B","fill-opacity":.6},filter:["all",["==","$type","Polygon"],["==","feature.properties.UNIT_TYPE","National Park"]]}),o.addLayer({id:"markers",type:"symbol",source:"parks-markers",filter:["==",["get","UNIT_TYPE"],"National Park"],layout:{"icon-image":"custom-marker","icon-padding":0,"icon-allow-overlap":!0,"icon-size":.75},paint:{"icon-color":"red"}}),o.on("moveend",(function(){var e=o.queryRenderedFeatures({layers:["markers"]});if(e){var n=t.getUniqueFeatures(e,"UNIT_NAME");t.renderListings(n),r.value="",a=n}})),o.on("click","markers",(function(t){var a=e.state.visited,n=t.features[0].UNIT_CODE;t.features.length>0&&(a.includes(n)?(a.splice(a.indexOf(n),1),e.setState({visited:a})):(a.push(n),e.setState({visited:a})))})),o.on("mousemove","markers",(function(e){o.getCanvas().style.cursor="pointer";var t=e.features[0];n.setLngLat(t.geometry.coordinates).setText(t.properties.UNIT_NAME).addTo(o)})),o.on("mouseleave","markers",(function(e){o.getCanvas().style.cursor="",n.remove()})),r.addEventListener("keyup",(function(e){var n=e.target.value,r=a.filter((function(e){return e.properties.UNIT_NAME.indexOf(n)>-1}));t.renderListings(r),r.length&&o.setFilter("markers",["match",["get","UNIT_NAME"],r.map((function(e){return e.properties.UNIT_NAME})),!0,!1])})),t.renderListings(a)}))}},{key:"getUniqueFeatures",value:function(e,t){var a={};return e.filter((function(e){return!a[e.properties[t]]&&(a[e.properties[t]]=!0,!0)}))}},{key:"renderListings",value:function(e){var t=this,a=document.getElementById("feature-filter"),n=document.getElementById("feature-listing"),r=new m.a.Popup({closeButton:!1}),o=document.createElement("p");n.innerHTML="",e.length?(e.sort(),e.forEach((function(e){var a=e.properties;if("National Park"===a.UNIT_TYPE){var o=document.createElement("a");o.href="http://nps.gov/".concat(a.UNIT_CODE),o.textContent=a.UNIT_NAME,o.target="_blank",o.addEventListener("mouseover",(function(){r.setLngLat(e.geometry.coordinates).setText(e.properties.UNIT_NAME).addTo(t.map)})),n.appendChild(o)}})),a.parentNode.style.display="block"):0===e.length&&""!==a.value?(o.textContent="No results found",n.appendChild(o)):(o.textContent="Drag the map to populate results",n.appendChild(o),a.parentNode.style.display="none",this.map.setFilter("markers",["has","UNIT_TYPE"]))}},{key:"render",value:function(){return r.a.createElement("main",{className:"main"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"brand-logo center",onClick:function(){return window.location.reload()}},"Parks Planner"),r.a.createElement("h4",null,"\u201cI haven\u2019t been everywhere, but it\u2019s on my list.\u201d - Susan Sontag"),r.a.createElement("nav",null)),r.a.createElement(f,null))}}]),a}(r.a.Component);i.a.render(r.a.createElement(g,null),document.getElementById("app"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.cf63947d.chunk.js.map