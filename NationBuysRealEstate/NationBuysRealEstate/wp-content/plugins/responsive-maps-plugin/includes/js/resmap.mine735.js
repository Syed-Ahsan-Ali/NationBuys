function resmap_fixDisplayInTabs(t,e){function o(){null!=i&&clearTimeout(i),i=t.is(":hidden")?setTimeout(o,r):setTimeout(function(){n()},r)}function n(){if(null!=i&&clearTimeout(i),data=t.data("gmap"),data){var o=data.gmap;google.maps.event.trigger(o,"resize"),t.gMapResp("fixAfterResize"),e&&0!=data.markers.length&&google.maps.event.trigger(data.markers[0],"click")}}var i=null,r=100;t.is(":hidden")?o():i=setTimeout(function(){o()},3*r)}function openMarker(t,e){jQuery(".responsive-map").each(function(o){jQuery(this).data("gmap")&&t==o+1&&google.maps.event.trigger(jQuery(this).gMapResp("getMarker",e),"click")})}function resmap_addLocatemeButton(t){var e=document.createElement("div"),o=document.createElement("button");o.type="button",o.style.backgroundColor="#fff",o.style.verticalAlign="bottom",o.style.border="none",o.style.outline="none",o.style.width="28px",o.style.height="28px",o.style.borderRadius="2px",o.style.boxShadow="0 1px 4px rgba(0,0,0,0.3)",o.style.cursor="pointer",o.style.marginRight="10px",o.style.padding="0px",o.title="Your Location",e.appendChild(o);var n=document.createElement("div");n.style.margin="5px",n.style.width="18px",n.style.height="18px",n.style.backgroundImage="url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)",n.style.backgroundSize="180px 18px",n.style.backgroundPosition="0px 0px",n.style.backgroundRepeat="no-repeat",n.id="you_location_img",o.appendChild(n),google.maps.event.addListener(t,"dragend",function(){jQuery("#you_location_img").css("background-position","0px 0px")}),o.addEventListener("click",function(){var e="0",o=setInterval(function(){e="-18"==e?"0":"-18",jQuery("#you_location_img").css("background-position",e+"px 0px")},1500);navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var n=new google.maps.LatLng(e.coords.latitude,e.coords.longitude);t.setCenter(n);new google.maps.Marker({position:n,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAF96VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAABo3uNKT81LLcpMVigoyk/LzEnlUgADYxMuE0sTS6NEAwMDCwMIMDQwMDYEkkZAtjlUKNEABZgamFmaGZsZmgMxiM8FAEi2FMnxHlGkAAADqElEQVRo3t1aTWgTQRQOiuDPQfHs38GDogc1BwVtQxM9xIMexIN4EWw9iAehuQdq0zb+IYhglFovClXQU+uhIuqh3hQll3iwpyjG38Zkt5uffc4XnHaSbpLZ3dnEZOBB2H3z3jeZN+9vx+fzYPgTtCoQpdVHrtA6EH7jme+/HFFawQBu6BnWNwdGjB2BWH5P32jeb0V4B54KL5uDuW3D7Y/S2uCwvrUR4GaEuZABWS0FHhhd2O4UdN3FMJneLoRtN7Y+GMvvUw2eE2RDh3LTOnCd1vQN5XZ5BXwZMV3QqQT84TFa3zuU39sy8P8IOqHb3T8fpY1emoyMSQGDI/Bwc+0ELy6i4nLtepp2mE0jc5L3UAhMsdxut0rPJfRDN2eMY1enF8Inbmj7XbtZhunkI1rZFD/cmFMlr1PFi1/nzSdGkT5RzcAzvAOPU/kVF9s0ujqw+9mP5QgDmCbJAV7McXIeGpqS3Qg7OVs4lTfMD1Yg9QLR518mZbImFcvWC8FcyLAbsev++3YETb0tn2XAvouAvjGwd14YdCahUTCWW6QQIzzDO/CIAzKm3pf77ei23AUkVbICHr8pnDZNynMQJfYPT7wyKBzPVQG3IvCAtyTsCmRBprQpMawWnkc+q2Rbn+TK/+gmRR7qTYHXEuZkdVM0p6SdLLYqX0LItnFgBxe3v0R04b5mGzwnzIUMPiBbFkdVmhGIa5tkJ4reZvyl4Rg8p3tMBh+FEqUduVRUSTKTnieL58UDG76cc70AyMgIBxs6pMyIYV5agKT9f/ltTnJFOIhuwXOCLD6gQ/oc8AJcdtuYb09xRQN3NWULgCwhfqSk3SkaBZViRTK3EYNUSBF4Hic0Y8mM+if0HhlMlaIHbQ8Z5lszxnGuIP2zrAw8J8jkA7pkMAG79AKuPTOOcgWZeVP5AsSDjAxWegGyJoSUWAj/FBpRa0JiviSbfldMqOMPcce7UVeBLK4gkMVVBLI2phLjKlIJm8lcxMNkLuIomXOTTmc1kwYf2E+nMQdzlaTTKgoaZJWyBQ141RY0DkrK6XflAQbih1geZnhJeXu5WeEZ3mVqSkrIgCzXJaXqoh65TUuLerdtFXgQ2bYKeD1pq6hobLE86SlztXMWvaA5vPO0sYWB9p2K1iJS4ra0Fju/udsN7fWu+MDRFZ+YuuIjX1d8Zu2OD92WC9G3ub1qABktBV7vssfBMX1L7yVjZ7PLHuABb9svezS7boNDyK/b4LdX123+Au+jOmNxrkG0AAAAAElFTkSuQmCC",map:t,title:""});clearInterval(o),jQuery("#you_location_img").css("background-position","-144px 0px")}):(clearInterval(o),jQuery("#you_location_img").css("background-position","0px 0px"))}),e.index=1,t.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(e)}function resmap_createSearchBox(t){var e=document.createElement("div"),o=document.createElement("input");e.appendChild(o),e.setAttribute("id","locationDiv"),o.setAttribute("id","locationInput"),t.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(e);var n=new google.maps.places.Autocomplete(o,{types:["geocode"]});google.maps.event.addListener(n,"place_changed",function(){var e=n.getPlace();e&&e.geometry&&e.geometry.viewport?t.fitBounds(e.geometry.viewport):e.geometry&&(t.setCenter(e.geometry.location),t.setZoom(17))}),o.onkeyup=resmap_submitGeocode(o)}function resmap_submitGeocode(t){return function(e){var o;o=window.event?13==window.event.which||13==window.event.keyCode:13==e.which,o&&"undefined"!=typeof geocoder&&geocoder.geocode({address:t.value},function(t,e){e==google.maps.GeocoderStatus.OK&&map.fitBounds(t[0].geometry.viewport)})}}!function(){function t(t){return function(e){this[t]=e}}function e(t){return function(){return this[t]}}function o(t,e,i){this.extend(o,google.maps.OverlayView),this.c=t,this.a=[],this.f=[],this.ca=[53,56,66,78,90],this.j=[],this.A=!1,i=i||{},this.g=i.gridSize||60,this.l=i.minimumClusterSize||2,this.J=i.maxZoom||h,this.j=i.styles||[],this.X=i.imagePath||this.Q,this.W=i.imageExtension||this.P,this.O=!0,void 0!=i.zoomOnClick&&(this.O=i.zoomOnClick),this.r=!1,void 0!=i.averageCenter&&(this.r=i.averageCenter),n(this),this.setMap(t),this.K=this.c.getZoom();var r=this;google.maps.event.addListener(this.c,"zoom_changed",function(){var t=r.c.getZoom();r.K!=t&&(r.K=t,r.m())}),google.maps.event.addListener(this.c,"idle",function(){r.i()}),e&&e.length&&this.C(e,!1)}function n(t){if(!t.j.length)for(var e,o=0;e=t.ca[o];o++)t.j.push({url:t.X+(o+1)+"."+t.W,height:e,width:e})}function i(t,e){e.s=!1,e.draggable&&google.maps.event.addListener(e,"dragend",function(){e.s=!1,t.L()}),t.a.push(e)}function r(t,e){var o=-1;if(t.a.indexOf)o=t.a.indexOf(e);else for(var n,i=0;n=t.a[i];i++)if(n==e){o=i;break}return-1==o?!1:(e.setMap(h),t.a.splice(o,1),!0)}function s(t){if(t.A)for(var e,o=t.v(new google.maps.LatLngBounds(t.c.getBounds().getSouthWest(),t.c.getBounds().getNorthEast())),n=0;e=t.a[n];n++)if(!e.s&&o.contains(e.getPosition())){for(var i=t,r=4e4,s=h,l=0,p=void 0;p=i.f[l];l++){var g=p.getCenter();if(g){var d=e.getPosition();if(g&&d)var c=(d.lat()-g.lat())*Math.PI/180,u=(d.lng()-g.lng())*Math.PI/180,g=Math.sin(c/2)*Math.sin(c/2)+Math.cos(g.lat()*Math.PI/180)*Math.cos(d.lat()*Math.PI/180)*Math.sin(u/2)*Math.sin(u/2),g=12742*Math.atan2(Math.sqrt(g),Math.sqrt(1-g));else g=0;r>g&&(r=g,s=p)}}s&&s.F.contains(e.getPosition())?s.q(e):(p=new a(i),p.q(e),i.f.push(p))}}function a(t){this.k=t,this.c=t.getMap(),this.g=t.w(),this.l=t.l,this.r=t.r,this.d=h,this.a=[],this.F=h,this.n=new p(this,t.z(),t.w())}function l(t){t.F=t.k.v(new google.maps.LatLngBounds(t.d,t.d))}function p(t,e,o){t.k.extend(p,google.maps.OverlayView),this.j=e,this.fa=o||0,this.u=t,this.d=h,this.c=t.getMap(),this.B=this.b=h,this.t=!1,this.setMap(this.c)}function g(t,e){var o=t.getProjection().fromLatLngToDivPixel(e);return o.x-=parseInt(t.p/2,10),o.y-=parseInt(t.h/2,10),o}function d(t){t.b&&(t.b.style.display="none"),t.t=!1}function c(t,e){var o=[];return o.push("background-image:url("+t.da+");"),o.push("background-position:"+(t.D?t.D:"0 0")+";"),"object"==typeof t.e?("number"==typeof t.e[0]&&t.e[0]>0&&t.e[0]<t.h?o.push("height:"+(t.h-t.e[0])+"px; padding-top:"+t.e[0]+"px;"):o.push("height:"+t.h+"px; line-height:"+t.h+"px;"),"number"==typeof t.e[1]&&t.e[1]>0&&t.e[1]<t.p?o.push("width:"+(t.p-t.e[1])+"px; padding-left:"+t.e[1]+"px;"):o.push("width:"+t.p+"px; text-align:center;")):o.push("height:"+t.h+"px; line-height:"+t.h+"px; width:"+t.p+"px; text-align:center;"),o.push("cursor:pointer; top:"+e.y+"px; left:"+e.x+"px; color:"+(t.M?t.M:"black")+"; position:absolute; font-size:"+(t.N?t.N:11)+"px; font-family:Arial,sans-serif; font-weight:bold"),o.join("")}var u,h=null;u=o.prototype,u.Q="https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m",u.P="png",u.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},u.onAdd=function(){this.A||(this.A=!0,s(this))},u.draw=function(){},u.S=function(){for(var t,e=this.o(),o=new google.maps.LatLngBounds,n=0;t=e[n];n++)o.extend(t.getPosition());this.c.fitBounds(o)},u.z=e("j"),u.o=e("a"),u.V=function(){return this.a.length},u.ba=t("J"),u.I=e("J"),u.G=function(t,e){for(var o=0,n=t.length,i=n;0!==i;)i=parseInt(i/10,10),o++;return o=Math.min(o,e),{text:n,index:o}},u.$=t("G"),u.H=e("G"),u.C=function(t,e){for(var o,n=0;o=t[n];n++)i(this,o);e||this.i()},u.q=function(t,e){i(this,t),e||this.i()},u.Y=function(t,e){var o=r(this,t);return!e&&o?(this.m(),this.i(),!0):!1},u.Z=function(t,e){for(var o,n=!1,i=0;o=t[i];i++)o=r(this,o),n=n||o;return!e&&n?(this.m(),this.i(),!0):void 0},u.U=function(){return this.f.length},u.getMap=e("c"),u.setMap=t("c"),u.w=e("g"),u.aa=t("g"),u.v=function(t){var e=this.getProjection(),o=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),n=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),o=e.fromLatLngToDivPixel(o);return o.x+=this.g,o.y-=this.g,n=e.fromLatLngToDivPixel(n),n.x-=this.g,n.y+=this.g,o=e.fromDivPixelToLatLng(o),e=e.fromDivPixelToLatLng(n),t.extend(o),t.extend(e),t},u.R=function(){this.m(!0),this.a=[]},u.m=function(t){for(var e,o=0;e=this.f[o];o++)e.remove();for(o=0;e=this.a[o];o++)e.s=!1,t&&e.setMap(h);this.f=[]},u.L=function(){var t=this.f.slice();this.f.length=0,this.m(),this.i(),window.setTimeout(function(){for(var e,o=0;e=t[o];o++)e.remove()},0)},u.i=function(){s(this)},u=a.prototype,u.q=function(t){var e;t:if(this.a.indexOf)e=-1!=this.a.indexOf(t);else{e=0;for(var o;o=this.a[e];e++)if(o==t){e=!0;break t}e=!1}if(e)return!1;if(this.d?this.r&&(o=this.a.length+1,e=(this.d.lat()*(o-1)+t.getPosition().lat())/o,o=(this.d.lng()*(o-1)+t.getPosition().lng())/o,this.d=new google.maps.LatLng(e,o),l(this)):(this.d=t.getPosition(),l(this)),t.s=!0,this.a.push(t),e=this.a.length,e<this.l&&t.getMap()!=this.c&&t.setMap(this.c),e==this.l)for(o=0;e>o;o++)this.a[o].setMap(h);if(e>=this.l&&t.setMap(h),t=this.c.getZoom(),(e=this.k.I())&&t>e)for(t=0;e=this.a[t];t++)e.setMap(this.c);else this.a.length<this.l?d(this.n):(e=this.k.H()(this.a,this.k.z().length),this.n.setCenter(this.d),t=this.n,t.B=e,t.ga=e.text,t.ea=e.index,t.b&&(t.b.innerHTML=e.text),e=Math.max(0,t.B.index-1),e=Math.min(t.j.length-1,e),e=t.j[e],t.da=e.url,t.h=e.height,t.p=e.width,t.M=e.textColor,t.e=e.anchor,t.N=e.textSize,t.D=e.backgroundPosition,this.n.show());return!0},u.getBounds=function(){for(var t,e=new google.maps.LatLngBounds(this.d,this.d),o=this.o(),n=0;t=o[n];n++)e.extend(t.getPosition());return e},u.remove=function(){this.n.remove(),this.a.length=0,delete this.a},u.T=function(){return this.a.length},u.o=e("a"),u.getCenter=e("d"),u.getMap=e("c"),u=p.prototype,u.onAdd=function(){this.b=document.createElement("DIV"),this.t&&(this.b.style.cssText=c(this,g(this,this.d)),this.b.innerHTML=this.B.text),this.getPanes().overlayMouseTarget.appendChild(this.b);var t=this;google.maps.event.addDomListener(this.b,"click",function(){var e=t.u.k;google.maps.event.trigger(e,"clusterclick",t.u),e.O&&t.c.fitBounds(t.u.getBounds())})},u.draw=function(){if(this.t){var t=g(this,this.d);this.b.style.top=t.y+"px",this.b.style.left=t.x+"px"}},u.show=function(){this.b&&(this.b.style.cssText=c(this,g(this,this.d)),this.b.style.display=""),this.t=!0},u.remove=function(){this.setMap(h)},u.onRemove=function(){this.b&&this.b.parentNode&&(d(this),this.b.parentNode.removeChild(this.b),this.b=h)},u.setCenter=t("d"),window.MarkerClusterer=o,o.prototype.addMarker=o.prototype.q,o.prototype.addMarkers=o.prototype.C,o.prototype.clearMarkers=o.prototype.R,o.prototype.fitMapToMarkers=o.prototype.S,o.prototype.getCalculator=o.prototype.H,o.prototype.getGridSize=o.prototype.w,o.prototype.getExtendedBounds=o.prototype.v,o.prototype.getMap=o.prototype.getMap,o.prototype.getMarkers=o.prototype.o,o.prototype.getMaxZoom=o.prototype.I,o.prototype.getStyles=o.prototype.z,o.prototype.getTotalClusters=o.prototype.U,o.prototype.getTotalMarkers=o.prototype.V,o.prototype.redraw=o.prototype.i,o.prototype.removeMarker=o.prototype.Y,o.prototype.removeMarkers=o.prototype.Z,o.prototype.resetViewport=o.prototype.m,o.prototype.repaint=o.prototype.L,o.prototype.setCalculator=o.prototype.$,o.prototype.setGridSize=o.prototype.aa,o.prototype.setMaxZoom=o.prototype.ba,o.prototype.onAdd=o.prototype.onAdd,o.prototype.draw=o.prototype.draw,a.prototype.getCenter=a.prototype.getCenter,a.prototype.getSize=a.prototype.T,a.prototype.getMarkers=a.prototype.o,p.prototype.onAdd=p.prototype.onAdd,p.prototype.draw=p.prototype.draw,p.prototype.onRemove=p.prototype.onRemove}(),function(t){var e=function(){this.markers=[],this.mainMarker=!1,this.icon="http://www.google.com/mapfiles/marker.png"};e.prototype.dist=function(t){return Math.sqrt(Math.pow(this.markers[0].latitude-t.latitude,2)+Math.pow(this.markers[0].longitude-t.longitude,2))},e.prototype.setIcon=function(t){this.icon=t},e.prototype.addMarker=function(t){this.markers[this.markers.length]=t},e.prototype.getMarker=function(){if(this.mainmarker)return this.mainmarker;var t,e;return 1<this.markers.length?(t=new o.MarkerImage("http://thydzik.com/thydzikGoogleMap/markerlink.php?text="+this.markers.length+"&color=EF9D3F"),e="cluster of "+this.markers.length+" markers"):(t=new o.MarkerImage(this.icon),e=this.markers[0].title),this.mainmarker=new o.Marker({position:new o.LatLng(this.markers[0].latitude,this.markers[0].longitude),icon:t,title:e,map:null})};var o=google.maps,n=new o.Geocoder,i=0,r=0,s={},s={init:function(e){var n,i=t.extend({},t.fn.gMapResp.defaults,e);for(n in t.fn.gMapResp.defaults.icon)i.icon[n]||(i.icon[n]=t.fn.gMapResp.defaults.icon[n]);return this.each(function(){var e=t(this),n=s._getMapCenter.apply(e,[i]);"fit"==i.zoom&&(i.zoomFit=!0,i.zoom=s._autoZoom.apply(e,[i]));var r={zoom:i.zoom,center:n,mapTypeControl:i.mapTypeControl,mapTypeControlOptions:{},zoomControl:i.zoomControl,draggable:i.draggable,zoomControlOptions:{},panControl:i.panControl,panControlOptions:{},scaleControl:i.scaleControl,scaleControlOptions:{},streetViewControl:i.streetViewControl,streetViewControlOptions:{},mapTypeId:i.maptype,scrollwheel:i.scrollwheel,maxZoom:i.maxZoom,minZoom:i.minZoom};if(i.controlsPositions.mapType&&(r.mapTypeControlOptions.position=i.controlsPositions.mapType),i.controlsPositions.zoom&&(r.zoomControlOptions.position=i.controlsPositions.zoom),i.controlsPositions.pan&&(r.panControlOptions.position=i.controlsPositions.pan),i.controlsPositions.scale&&(r.scaleControlOptions.position=i.controlsPositions.scale),i.controlsPositions.streetView&&(r.streetViewControlOptions.position=i.controlsPositions.streetView),i.styles&&(r.styles=i.styles),r.mapTypeControlOptions.style=i.controlsStyle.mapType,r.zoomControlOptions.style=i.controlsStyle.zoom,r=new o.Map(this,r),i.log&&console.log("map center is:"),i.log&&console.log(n),e.data("$gmap",r),e.data("gmap",{opts:i,gmap:r,markers:[],markerKeys:{},infoWindow:null,clusters:[]}),0!==i.controls.length)for(n=0;n<i.controls.length;n+=1)r.controls[i.controls[n].pos].push(i.controls[n].div);i.clustering.enabled?(n=e.data("gmap"),n.markers=i.markers,s._renderCluster.apply(e,[]),o.event.addListener(r,"bounds_changed",function(){s._renderCluster.apply(e,[])})):0!==i.markers.length&&s.addMarkers.apply(e,[i.markers]),s._onComplete.apply(e,[])})},_delayedMode:!1,_onComplete:function(){var t=this.data("gmap"),e=this;if(0!==i)window.setTimeout(function(){s._onComplete.apply(e,[])},100);else{if(s._delayedMode){var o=s._getMapCenter.apply(this,[t.opts,!0]);s._setMapCenter.apply(this,[o]),t.opts.zoomFit&&(o=s._autoZoom.apply(this,[t.opts,!0]),t.gmap.setZoom(o))}t.opts.onComplete()}},_setMapCenter:function(t){var e=this.data("gmap");if(e&&e.opts.log&&console.log("delayed setMapCenter called"),e&&void 0!==e.gmap&&0==i)e.gmap.setCenter(t);else{var o=this;window.setTimeout(function(){s._setMapCenter.apply(o,[t])},100)}},_boundaries:null,_getBoundaries:function(t){var e,o=t.markers,n=1e3,i=-1e3,r=1e3,a=-1e3;if(o){for(e=0;e<o.length;e+=1)o[e].latitude&&o[e].longitude&&(n>o[e].latitude&&(n=o[e].latitude),i<o[e].longitude&&(i=o[e].longitude),r>o[e].longitude&&(r=o[e].longitude),a<o[e].latitude&&(a=o[e].latitude),t.log&&console.log(o[e].latitude,o[e].longitude,n,i,r,a));s._boundaries={N:n,E:i,W:r,S:a}}return-1e3==n&&(s._boundaries={N:0,E:0,W:0,S:0}),s._boundaries},_getBoundariesFromMarkers:function(){var t,e=this.data("gmap").markers,o=1e3,n=-1e3,i=1e3,r=-1e3;if(e){for(t=0;t<e.length;t+=1)o>e[t].getPosition().lat()&&(o=e[t].getPosition().lat()),n<e[t].getPosition().lng()&&(n=e[t].getPosition().lng()),i>e[t].getPosition().lng()&&(i=e[t].getPosition().lng()),r<e[t].getPosition().lat()&&(r=e[t].getPosition().lat());s._boundaries={N:o,E:n,W:i,S:r}}return-1e3==o&&(s._boundaries={N:0,E:0,W:0,S:0}),s._boundaries},_getMapCenter:function(t,e){var i,r,a,l=this;if(t.markers.length&&("fit"==t.latitude||"fit"==t.longitude))return r=e?s._getBoundariesFromMarkers.apply(this):s._getBoundaries(t),i=new o.LatLng((r.N+r.S)/2,(r.E+r.W)/2),t.log&&console.log(e,r,i),i;if(t.latitude&&t.longitude)return i=new o.LatLng(t.latitude,t.longitude);if(i=new o.LatLng(37.10516411731325,-95.73597945520021),t.address)return n.geocode({address:t.address},function(e,o){o===google.maps.GeocoderStatus.OK?s._setMapCenter.apply(l,[e[0].geometry.location]):t.log&&console.log("Geocode was not successful for the following reason: "+o)}),i;if(0<t.markers.length){for(a=null,r=0;r<t.markers.length;r+=1)if(t.markers[r].setCenter){a=t.markers[r];break}if(null===a)for(r=0;r<t.markers.length;r+=1){if(t.markers[r].latitude&&t.markers[r].longitude){a=t.markers[r];break}t.markers[r].address&&(a=t.markers[r])}if(null===a)return i;if(a.latitude&&a.longitude)return new o.LatLng(a.latitude,a.longitude);a.address&&n.geocode({address:a.address},function(e,o){o===google.maps.GeocoderStatus.OK?s._setMapCenter.apply(l,[e[0].geometry.location]):t.log&&console.log("Geocode was not successful for the following reason: "+o)})}return i},_renderCluster:function(){var t,o=this.data("gmap"),n=o.markers,i=o.clusters,r=o.opts;for(t=0;t<i.length;t+=1)i[t].getMarker().setMap(null);if(i.length=0,t=o.gmap.getBounds()){var a=t.getNorthEast(),l=t.getSouthWest(),p=[],g=(a.lat()-l.lat())*r.clustering.clusterSize/100;for(t=0;t<n.length;t+=1)n[t].latitude<a.lat()&&n[t].latitude>l.lat()&&n[t].longitude<a.lng()&&n[t].longitude>l.lng()&&(p[p.length]=n[t]);for(r.log&&console.log("number of markers "+p.length+"/"+n.length),r.log&&console.log("cluster radius: "+g),t=0;t<p.length;t+=1){for(a=-1,n=0;n<i.length&&(l=i[n].dist(p[t]),!(g>l&&(a=n,r.clustering.fastClustering)));n+=1);-1===a?(n=new e,n.addMarker(p[t]),i[i.length]=n):i[a].addMarker(p[t])}for(r.log&&console.log("Total clusters in viewport: "+i.length),n=0;n<i.length;n+=1)i[n].getMarker().setMap(o.gmap)}else{var d=this;window.setTimeout(function(){s._renderCluster.apply(d)},1e3)}},_processMarker:function(t,e,n,i){var r,s=this.data("gmap"),a=s.gmap,l=s.opts;if(void 0===i&&(i=new o.LatLng(t.latitude,t.longitude)),!e){var p={image:l.icon.image,iconSize:new o.Size(l.icon.iconsize[0],l.icon.iconsize[1]),iconAnchor:new o.Point(l.icon.iconanchor[0],l.icon.iconanchor[1]),infoWindowAnchor:new o.Size(l.icon.infowindowanchor[0],l.icon.infowindowanchor[1])};e=new o.MarkerImage(p.image)}n||(new o.Size(l.icon.shadowsize[0],l.icon.shadowsize[1]),p&&p.iconAnchor||new o.Point(l.icon.iconanchor[0],l.icon.iconanchor[1])),e={position:i,icon:e,title:t.title,map:null,draggable:!0===t.draggable?!0:!1},l.clustering.enabled||(e.map=a),r=new o.Marker(e),r.setShadow(n),s.markers.push(r),t.key&&(s.markerKeys[t.key]=r);var g;t.html&&(n={content:"string"==typeof t.html?l.html_prepend+t.html+l.html_append:t.html,pixelOffset:t.infoWindowAnchor},l.log&&console.log("setup popup with data"),l.log&&console.log(n),g=new o.InfoWindow(n),o.event.addListener(r,"click",function(){l.log&&console.log("opening popup "+t.html),l.singleInfoWindow&&s.infoWindow&&s.infoWindow.close(),g.open(a,r),s.infoWindow=g})),t.html&&t.popup&&(l.log&&console.log("opening popup "+t.html),g.open(a,r),s.infoWindow=g),t.onDragEnd&&o.event.addListener(r,"dragend",function(e){l.log&&console.log("drag end"),t.onDragEnd(e)})},_geocodeMarker:function(t,e,a){var l=this;n.geocode({address:t.address},function(n,p){p===o.GeocoderStatus.OK?(i-=1,l.data("gmap").opts.log&&console.log("Geocode was successful with point: ",n[0].geometry.location),s._processMarker.apply(l,[t,e,a,n[0].geometry.location])):(p===o.GeocoderStatus.OVER_QUERY_LIMIT&&(!l.data("gmap").opts.noAlerts&&0===r&&alert("Error: too many geocoded addresses! Switching to 1 marker/s mode."),r+=1e3,window.setTimeout(function(){s._geocodeMarker.apply(l,[t,e,a])},r)),l.data("gmap").opts.log&&console.log("Geocode was not successful for the following reason: "+p))})},_autoZoom:function(e,o){var n,i,r=t(this).data("gmap"),a=t.extend({},r?r.opts:{},e),r=39135.758482;for(a.log&&console.log("autozooming map"),n=o?s._getBoundariesFromMarkers.apply(this):s._getBoundaries(a),a=111e3*(n.E-n.W)/this.width(),i=111e3*(n.S-n.N)/this.height(),n=2;20>n&&!(a>r||i>r);n+=1)r/=2;return n-2},addMarkers:function(t){var e=this.data("gmap").opts;if(0!==t.length)for(e.log&&console.log("adding "+t.length+" markers"),e=0;e<t.length;e+=1)s.addMarker.apply(this,[t[e]])},addMarker:function(t){var e=this.data("gmap").opts;e.log&&console.log("putting marker at "+t.latitude+", "+t.longitude+" with address "+t.address+" and html "+t.html);var n=e.icon.image,r=new o.Size(e.icon.iconsize[0],e.icon.iconsize[1]),a=new o.Point(e.icon.iconanchor[0],e.icon.iconanchor[1]),l=new o.Size(e.icon.infowindowanchor[0],e.icon.infowindowanchor[1]),p=e.icon.shadow,g=new o.Size(e.icon.shadowsize[0],e.icon.shadowsize[1]),d=new o.Point(e.icon.shadowanchor[0],e.icon.shadowanchor[1]);t.infoWindowAnchor=l,t.icon&&(t.icon.image&&(n=t.icon.image),t.icon.iconsize&&(r=new o.Size(t.icon.iconsize[0],t.icon.iconsize[1])),t.icon.iconanchor&&(a=new o.Point(t.icon.iconanchor[0],t.icon.iconanchor[1])),t.icon.infowindowanchor&&new o.Size(t.icon.infowindowanchor[0],t.icon.infowindowanchor[1]),t.icon.shadow&&(p=t.icon.shadow),t.icon.shadowsize&&(g=new o.Size(t.icon.shadowsize[0],t.icon.shadowsize[1])),t.icon.shadowanchor&&(d=new o.Point(t.icon.shadowanchor[0],t.icon.shadowanchor[1]))),n=new o.MarkerImage(n),p=new o.MarkerImage(p),t.address?("_address"===t.html&&(t.html=t.address),"_address"==t.title&&(t.title=t.address),e.log&&console.log("geocoding marker: "+t.address),i+=1,s._delayedMode=!0,s._geocodeMarker.apply(this,[t,n,p])):("_latlng"===t.html&&(t.html=t.latitude+", "+t.longitude),"_latlng"==t.title&&(t.title=t.latitude+", "+t.longitude),e=new o.LatLng(t.latitude,t.longitude),s._processMarker.apply(this,[t,n,p,e]))},removeAllMarkers:function(){var t,e=this.data("gmap").markers;for(t=0;t<e.length;t+=1)e[t].setMap(null),delete e[t];e.length=0},getMarker:function(t){return this.data("gmap").markerKeys[t]},fixAfterResize:function(t){var e=this.data("gmap");o.event.trigger(e.gmap,"resize"),t&&e.gmap.panTo(new google.maps.LatLng(0,0)),e.gmap.panTo(this.gMapResp("_getMapCenter",e.opts))},setZoom:function(t,e,o){var n=this.data("gmap").gmap;"fit"===t&&(t=s._autoZoom.apply(this,[e,o])),n.setZoom(parseInt(t))},changeSettings:function(t){var e,o=this.data("gmap"),n=[];for(e=0;e<o.markers.length;e+=1)n[e]={latitude:o.markers[e].getPosition().lat(),longitude:o.markers[e].getPosition().lng()};t.markers=n,t.zoom&&s.setZoom.apply(this,[t.zoom,t]),(t.latitude||t.longitude)&&o.gmap.panTo(s._getMapCenter.apply(this,[t]))},mapclick:function(t){google.maps.event.addListener(this.data("gmap").gmap,"click",function(e){t(e.latLng)})},geocode:function(t,e,i){n.geocode({address:t},function(t,n){n===o.GeocoderStatus.OK?e(t[0].geometry.location):i&&i(t,n)})},getRoute:function(e){var n=this.data("gmap"),i=n.gmap,r=new o.DirectionsRenderer,s=new o.DirectionsService,a={BYCAR:o.DirectionsTravelMode.DRIVING,BYBICYCLE:o.DirectionsTravelMode.BICYCLING,BYFOOT:o.DirectionsTravelMode.WALKING},l={MILES:o.DirectionsUnitSystem.IMPERIAL,KM:o.DirectionsUnitSystem.METRIC},p=null,g=null,d=null;return void 0!==e.routeDisplay?p=e.routeDisplay instanceof jQuery?e.routeDisplay[0]:"string"==typeof e.routeDisplay?t(e.routeDisplay)[0]:null:null!==n.opts.routeFinder.routeDisplay&&(p=n.opts.routeFinder.routeDisplay instanceof jQuery?n.opts.routeFinder.routeDisplay[0]:"string"==typeof n.opts.routeFinder.routeDisplay?t(n.opts.routeFinder.routeDisplay)[0]:null),r.setMap(i),null!==p&&r.setPanel(p),g=void 0!==a[n.opts.routeFinder.travelMode]?a[n.opts.routeFinder.travelMode]:a.BYCAR,d=void 0!==l[n.opts.routeFinder.travelUnit]?l[n.opts.routeFinder.travelUnit]:l.KM,s.route({origin:e.from,destination:e.to,travelMode:g,unitSystem:d},function(e,i){i==o.DirectionsStatus.OK?r.setDirections(e):null!==p&&t(p).html(n.opts.routeFinder.routeErrors[i])}),this}};t.fn.gMapResp=function(e){return s[e]?s[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.gmap"):s.init.apply(this,arguments)},t.fn.gMapResp.defaults={log:!1,noAlerts:!0,address:"",latitude:null,longitude:null,zoom:3,maxZoom:null,minZoom:null,markers:[],controls:{},scrollwheel:!0,maptype:google.maps.MapTypeId.ROADMAP,mapTypeControl:!0,zoomControl:!0,draggable:!0,panControl:!1,scaleControl:!1,streetViewControl:!0,controlsPositions:{mapType:null,zoom:null,pan:null,scale:null,streetView:null},controlsStyle:{mapType:google.maps.MapTypeControlStyle.DEFAULT,zoom:google.maps.ZoomControlStyle.DEFAULT},singleInfoWindow:!0,html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",iconsize:[20,34],iconanchor:[9,34],infowindowanchor:[0,0],shadow:"http://www.google.com/mapfiles/shadow50.png",shadowsize:[37,34],shadowanchor:[9,34]},onComplete:function(){},routeFinder:{travelMode:"BYCAR",travelUnit:"KM",routeDisplay:null,routeErrors:{INVALID_REQUEST:"The provided request is invalid.",NOT_FOUND:"One or more of the given addresses could not be found.",OVER_QUERY_LIMIT:"A temporary error occured. Please try again in a few minutes.",REQUEST_DENIED:"An error occured. Please contact us.",UNKNOWN_ERROR:"An unknown error occured. Please try again.",ZERO_RESULTS:"No route could be found within the given addresses."}},clustering:{enabled:!1,fastClustering:!1,clusterCount:10,clusterSize:40}}}(jQuery);