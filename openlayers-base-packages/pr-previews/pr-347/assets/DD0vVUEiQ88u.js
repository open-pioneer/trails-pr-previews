import{j as t,c as q,a as U,r as p,B as I,i as K,b as $,d as A,F as Z,e as Y}from"./Bh0CuZ3gy5tC.js";import{B as d,V as J,S as j,T as X,O as Q,a as C,b as N,c as ee,C as te,F as oe,r as T,d as D,e as re,w as ie,H as ne,M as ae,u as se,f as le,g as v,h as x,i as L,j as M,k as y,D as ce,l as pe,m as de}from"./c1kK9DCuJnCY.js";import{W as V,P as ue,a as me,b as ge,c as he,d as fe,e as be,f as ve,g as xe,h as we}from"./D-9pufTwf4Xx.js";import{W as R,E as Se,V as ye,S as ke,O as Me,C as je,a as Ce,b as Le,L as ze,M as _e,c as Pe,d as Ie,P as Ae,N as Te}from"./CraXauRVS_5b.js";import{G as O,u as De,T as h,P as Re,a as Ee,b as Fe,c as qe,d as Ne,e as Ve}from"./DXfhCeP-WM0p.js";import{T as z}from"./Tz2xttM4F6S2.js";import{N as Oe,P as He}from"./9yAKyzW4Gqoo.js";import{V as Ge,S as Be,I as We,Z as Ue,a as Ke}from"./C0PPflDP0n2H.js";import{_ as E}from"./CmsKOCeNyeyo.js";import{u as b,D as $e}from"./y8tIs5X1Fxbi.js";import{H}from"./L25RkWOQSN8A.js";import{G}from"./CL_VRsbiqLzM.js";import{R as Ze}from"./36p4PNrogudN.js";import{C as Ye}from"./BCXJt8t_qqq7.js";import"./BAy5P-akRSWf.js";import"./5XCAP1CQuYNG.js";import"./Cq1ZpfgEg4XJ.js";import"./D03oE8cEQPSj.js";import"./BO_q12Vdyug-.js";import"./CreVQ-qFRzOc.js";import"./CjjyePfBQlZ7.js";import"./DUys4rac0YQP.js";import"./2d5-QpxJNHTD.js";import"./BeFcF3Ti4kY-.js";const Je={height:"25px",width:"25px",borderColor:"#4cb3ff",borderWidth:"3px",borderRadius:"50%",display:"inline-block "};function Xe(r){return t.jsxs(d,{children:[t.jsx(z,{children:r.layer.title}),t.jsx(d,{style:Je})]})}const _="main";class Qe{mapId=_;vectorSourceFactory;constructor(e){this.vectorSourceFactory=e.references.vectorSourceFactory}async getMapConfig(){return{advanced:{view:new J({center:[404747,5757920],zoom:13,constrainResolution:!0,projection:"EPSG:25832"})},layers:[...et(),rt(),tt(this.vectorSourceFactory),ot(),it()]}}}function et(){return[new R({isBaseLayer:!0,title:"Topplus grau",url:"https://www.wmts.nrw.de/topplus_open/1.0.0/WMTSCapabilities.xml",name:"topplus_grau",matrixSet:"EPSG_25832_14",visible:!1,sourceOptions:{attributions:`Kartendarstellung und Präsentationsgraphiken: &copy; Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a title="Datenquellen öffnen" aria-label="Datenquellen öffnen" href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html " target="_blank">Datenquellen</a>`}}),new R({isBaseLayer:!0,title:"Topplus farbig",url:"https://www.wmts.nrw.de/topplus_open/1.0.0/WMTSCapabilities.xml",name:"topplus_col",matrixSet:"EPSG_25832_14",visible:!0,sourceOptions:{attributions:`Kartendarstellung und Präsentationsgraphiken: &copy; Bundesamt für Kartographie und Geodäsie ${new Date().getFullYear()}, <a title="Datenquellen öffnen" aria-label="Datenquellen öffnen" href="https://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html " target="_blank">Datenquellen</a>`}}),new j({title:"OpenStreetMaps",visible:!1,isBaseLayer:!0,olLayer:new X({source:new Q})})]}function tt(r){const e="https://ogc-api-test.nrw.de/inspire-us-krankenhaus/v1",o="governmentalservice",i=r.createVectorSource({strategy:"next",baseUrl:e,collectionId:o,limit:1e3,crs:"http://www.opengis.net/def/crs/EPSG/0/25832",attributions:`Land NRW (${new Date().getFullYear()}), <a href='https://www.govdata.de/dl-de/by-2-0'>Datenlizenz Deutschland - Namensnennung - Version 2.0</a>, <a href='https://ogc-api-test.nrw.de/inspire-us-krankenhaus/v1'>Datenquelle</a>`}),n=new C({source:i});return new j({id:"krankenhaus",title:"Krankenhäuser",visible:!1,olLayer:n,attributes:{collectionURL:e+"/collections/"+o}})}function ot(){return new V({title:"Schulstandorte",description:"Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.Der vorliegende Datenbestand / Dienst zu den Schulstandorten in NRW stammt aus der Schuldatenbank. Die Informationen werden von den Schulträgern bzw. Schulen selbst eingetragen und aktuell gehalten. Die Daten werden tagesaktuell bereitgestellt und enthalten alle grundlegenden Informationen zu Schulen wie Schulnummer, Schulbezeichnung und Adresse.",visible:!0,url:"https://www.wms.nrw.de/wms/wms_nw_inspire-schulen",sublayers:[{name:"US.education",title:"INSPIRE - WMS Schulstandorte NRW",attributes:{legend:{}}}],sourceOptions:{ratio:1}})}function rt(){return new V({title:"Straßennetz Landesbetrieb Straßenbau NRW",url:"https://www.wms.nrw.de/wms/strassen_nrw_wms",visible:!0,sublayers:[{name:"1",title:"Verwaltungen",attributes:{legend:{imageUrl:"https://www.wms.nrw.de/legends/wms/strassen_nrw_wms/1.png"}}},{name:"4",title:"Abschnitte und Äste"},{name:"6",title:"Unfälle"}]})}function it(){const r={Component:Xe},e=new N({url:"https://ogc-api.nrw.de/inspire-us-kindergarten/v1/collections/governmentalservice/items?f=json&limit=10000",format:new O,attributions:'&copy; <a href="http://www.bkg.bund.de" target="_blank">Bundesamt f&uuml;r Kartographie und Geod&auml;sie</a> 2017, <a href="http://sg.geodatenzentrum.de/web_public/Datenquellen_TopPlus_Open.pdf" target="_blank">Datenquellen</a>'}),o=new C({source:e,style:new ee({image:new te({fill:new oe({color:"blue"}),radius:4})})});return new j({id:"ogc_kitas",title:"Kindertagesstätten",visible:!0,olLayer:o,attributes:{legend:r,resultListMetadata:[{id:"id",displayName:"ID",width:100,getPropertyValue(i){return i.id}},{propertyName:"pointOfContact.address.postCode",displayName:"PLZ",width:120},{propertyName:"name",displayName:"Name"},{propertyName:"inspireId",displayName:"inspireID"},{displayName:"Gefördert",width:160,getPropertyValue(i){switch(i.properties?.gefoerdert){case"ja":return!0;case"nein":return!1;default:return i.properties?.gefoerdert}}}]}})}class nt{label;filteredTypes;httpService;constructor(e,o,i){this.label=e,this.filteredTypes=o,this.httpService=i}async search(e,{mapProjection:o,signal:i}){const n=await this.request(e,100,i),a=new O({dataProjection:"EPSG:4326",featureProjection:o});return n.features.filter(s=>this.filteredTypes.includes(s.properties.type)).map((s,l)=>{const c=a.readGeometry(s.geometry);return{id:s.properties.osm_id||l,label:this.createLabel(s),geometry:c,properties:s.properties}})}async request(e,o,i){const n=new URL("https://photon.komoot.io/api?");n.searchParams.set("q",e),n.searchParams.set("lang","de"),n.searchParams.set("lat","51.961563"),n.searchParams.set("lon","7.628202"),n.searchParams.set("limit",o.toString());const a=await this.httpService.fetch(n,{signal:i});if(!a.ok)throw new Error("Request failed: "+a.status);return await a.json()}createLabel(e){return`${e.properties.name} (${e.properties.osm_value?e.properties.osm_value+", ":""}${e.properties.postcode?e.properties.postcode+", ":""}${e.properties.city?e.properties.city+", ":""}${e.properties.country?e.properties.country+")":")"}`}}const at=q("ol-app:AppModel");function k(r){return r==="selection"||r==="measurement"||r.startsWith("editing-")}class st{_mapRegistry;_vectorSelectionSourceFactory;_httpService;_resources=[];_featureHighlight=void 0;_mainContent=T(["toc"]);_searchSources=D();_selectionSources=D();_sourceMetadata=re();_resultListState=T({key:0,open:!1,input:void 0});constructor({references:e}){this._mapRegistry=e.mapRegistry,this._vectorSelectionSourceFactory=e.vectorSelectionSourceFactory,this._httpService=e.httpService,this.initSearchSources(),this.initSelectionSources().catch(o=>{at.error("Failed to initialize selection sources",o)})}destroy(){this.clearHighlight(),this._resources.forEach(e=>e.destroy())}get mainContent(){return this._mainContent.value}get searchSources(){return this._searchSources}get selectionSources(){return this._selectionSources}get sourceMetadata(){return this._sourceMetadata}get resultListState(){return this._resultListState.value}toggleMainContent(e){const o=this._mainContent.value;if(o.includes(e)){this._mainContent.value=o.filter(n=>n!==e);return}let i;k(e)?(i=[e],this.clearHighlight()):(i=o.filter(n=>!k(n)),i.push(e)),this._mainContent.value=i}hideContent(e){this._mainContent.value=this._mainContent.value.filter(o=>o!==e)}clearInteractions(){this._mainContent.value=this._mainContent.value.filter(e=>!k(e))}setResultListInput(e){const o=this._resultListState.value;this._resultListState.value={open:!0,key:o.key+1,input:e}}setResultListVisibility(e){this._resultListState.value={...this._resultListState.value,open:e}}highlightAndZoom(e,o){const i=e.olMap.getViewport();this.clearHighlight(),this._featureHighlight=e.highlightAndZoom(o,{viewPadding:i&&i.offsetWidth<1e3?{top:150,right:75,bottom:50,left:75}:{top:150,right:400,bottom:50,left:400}})}zoom(e,o){const i=e.olMap.getViewport();e.zoom(o,{viewPadding:i&&i.offsetWidth<1e3?{top:150,right:75,bottom:50,left:75}:{top:150,right:400,bottom:50,left:400}})}clearHighlight(){this._featureHighlight&&(this._featureHighlight.destroy(),this._featureHighlight=void 0)}initSearchSources(){const e=new nt("Photon Geocoder",["city","street"],this._httpService);this._searchSources.push(e)}async initSelectionSources(){const e=["ogc_kitas","ogc_kataster"],i=(await this._mapRegistry.expectMapModel(_)).layers.getOperationalLayers({sortByDisplayOrder:!0});for(const n of i){if(!e.includes(n.id)||!lt(n.olLayer))continue;const a=this._vectorSelectionSourceFactory.createSelectionSource({vectorLayer:n.olLayer,label:n.title}),s=ie(()=>[a.status],([l])=>{l!=="available"&&(l==="unavailable"||l?.kind==="unavailable")&&this.clearHighlight()});this._resources.push(s,a),this._selectionSources.unshift(a),this._sourceMetadata.set(a,n.attributes.resultListMetadata)}}}function lt(r){return r instanceof C&&r.getSource()instanceof N}const ct={"ol-map":{name:"ol-map",services:{MapConfigProviderImpl:{name:"MapConfigProviderImpl",clazz:Qe,provides:[{name:"map.MapConfigProvider",qualifier:void 0}],references:{vectorSourceFactory:{name:"ogc-features.VectorSourceFactory",qualifier:void 0,all:!1}}},AppModel:{name:"AppModel",clazz:st,provides:[{name:"ol-app.AppModel",qualifier:void 0}],references:{vectorSelectionSourceFactory:{name:"selection.VectorSelectionSourceFactory",qualifier:void 0,all:!1},httpService:{name:"http.HttpService",qualifier:void 0,all:!1},mapRegistry:{name:"map.MapRegistry",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1},{name:"ol-app.AppModel",qualifier:void 0,all:!1},{name:"notifier.NotificationService",qualifier:void 0,all:!1},{name:"editing.EditingService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/chakra-integration":{name:"@open-pioneer/chakra-integration",services:{},ui:{references:[]},properties:{}},"@open-pioneer/coordinate-viewer":{name:"@open-pioneer/coordinate-viewer",services:{},ui:{references:[]},properties:{}},"@open-pioneer/editing":{name:"@open-pioneer/editing",services:{EditingServiceImpl:{name:"EditingServiceImpl",clazz:Se,provides:[{name:"editing.EditingService",qualifier:void 0}],references:{mapRegistry:{name:"map.MapRegistry",qualifier:void 0,all:!1},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{polygonStyle:{value:{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"red","stroke-width":1.25,"circle-radius":3,"circle-fill-color":"red","circle-stroke-width":1.25,"circle-stroke-color":"red"},required:!1},vertexStyle:{value:{"circle-radius":3,"circle-fill-color":"red","circle-stroke-width":1.25,"circle-stroke-color":"red"},required:!1}}},"@open-pioneer/http":{name:"@open-pioneer/http",services:{HttpServiceImpl:{name:"HttpServiceImpl",clazz:ne,provides:[{name:"http.HttpService",qualifier:"http.HttpService"}],references:{interceptors:{name:"http.Interceptor",qualifier:void 0,all:!0}}}},ui:{references:[]},properties:{}},"@open-pioneer/legend":{name:"@open-pioneer/legend",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map":{name:"@open-pioneer/map",services:{MapRegistryImpl:{name:"MapRegistryImpl",clazz:ae,provides:[{name:"map.MapRegistry",qualifier:void 0}],references:{providers:{name:"map.MapConfigProvider",qualifier:void 0,all:!0},httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[{name:"map.MapRegistry",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/map-navigation":{name:"@open-pioneer/map-navigation",services:{},ui:{references:[]},properties:{}},"@open-pioneer/map-ui-components":{name:"@open-pioneer/map-ui-components",services:{},ui:{references:[]},properties:{}},"@open-pioneer/measurement":{name:"@open-pioneer/measurement",services:{},ui:{references:[]},properties:{}},"@open-pioneer/notifier":{name:"@open-pioneer/notifier",services:{NotificationServiceImpl:{name:"NotificationServiceImpl",clazz:Oe,provides:[{name:"notifier.NotificationService",qualifier:"notifier.NotificationService"}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/ogc-features":{name:"@open-pioneer/ogc-features",services:{VectorSourceFactory:{name:"VectorSourceFactory",clazz:Ge,provides:[{name:"ogc-features.VectorSourceFactory",qualifier:void 0}],references:{httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}},SearchSourceFactory:{name:"SearchSourceFactory",clazz:Be,provides:[{name:"ogc-features.SearchSourceFactory",qualifier:void 0}],references:{httpService:{name:"http.HttpService",qualifier:void 0,all:!1}}}},ui:{references:[]},properties:{}},"@open-pioneer/printing":{name:"@open-pioneer/printing",services:{PrintingServiceImpl:{name:"PrintingServiceImpl",clazz:He,provides:[{name:"printing.PrintingService",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1},{name:"printing.PrintingService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/react-utils":{name:"@open-pioneer/react-utils",services:{},ui:{references:[]},properties:{}},"@open-pioneer/reactivity":{name:"@open-pioneer/reactivity",services:{},ui:{references:[]},properties:{}},"@open-pioneer/result-list":{name:"@open-pioneer/result-list",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime":{name:"@open-pioneer/runtime",services:{},ui:{references:[]},properties:{}},"@open-pioneer/scale-bar":{name:"@open-pioneer/scale-bar",services:{},ui:{references:[]},properties:{}},"@open-pioneer/scale-viewer":{name:"@open-pioneer/scale-viewer",services:{},ui:{references:[]},properties:{}},"@open-pioneer/search":{name:"@open-pioneer/search",services:{},ui:{references:[]},properties:{}},"@open-pioneer/selection":{name:"@open-pioneer/selection",services:{VectorSelectionSourceFactory:{name:"VectorSelectionSourceFactory",clazz:ye,provides:[{name:"selection.VectorSelectionSourceFactory",qualifier:void 0}],references:{}}},ui:{references:[{name:"notifier.NotificationService",qualifier:void 0,all:!1}]},properties:{}},"@open-pioneer/theme":{name:"@open-pioneer/theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/toc":{name:"@open-pioneer/toc",services:{},ui:{references:[]},properties:{}},"@open-pioneer/core":{name:"@open-pioneer/core",services:{},ui:{references:[]},properties:{}},"@open-pioneer/base-theme":{name:"@open-pioneer/base-theme",services:{},ui:{references:[]},properties:{}},"@open-pioneer/basemap-switcher":{name:"@open-pioneer/basemap-switcher",services:{},ui:{references:[]},properties:{}},"@open-pioneer/runtime-react-support":{name:"@open-pioneer/runtime-react-support",services:{},ui:{references:[]},properties:{}}},pt='.search-box{position:absolute;width:500px;max-width:100%;z-index:1}.editing-tooltip{position:relative;background:#fffc;border-radius:4px;color:#000;padding:4px 8px;opacity:1;white-space:nowrap;font-size:12px;cursor:default;-webkit-user-select:none;user-select:none;font-weight:700}.editing-tooltip-hidden{visibility:hidden}:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:pan-x pan-y}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}.map-container .ol-viewport .ol-attribution{bottom:var(--map-padding-bottom);right:var(--map-padding-right)}.measurement-tooltip{position:relative;background:#fffc;border-radius:4px;color:#000;padding:4px 8px;opacity:1;white-space:nowrap;font-size:12px;cursor:default;-webkit-user-select:none;user-select:none;font-weight:700}.measurement-active-tooltip{background:#000000e6;border-radius:4px;border-color:#000000e6;opacity:.9;color:#fff}.measurement-finished-tooltip{background-color:#4cb3ffe6;color:#000;border:1px solid white}.measurement-active-tooltip:before,.measurement-finished-tooltip:before{border-top:6px solid rgba(0,0,0,.9);border-right:6px solid transparent;border-left:6px solid transparent;content:"";position:absolute;bottom:-6px;margin-left:-7px;left:50%}.measurement-finished-tooltip:before{border-top-color:#4cb3ff}.printing-overlay{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;-webkit-user-select:none;user-select:none;pointer-events:all;cursor:wait;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#b4b4b4cc}.printing-overlay-status{flex:1 1 auto;font-size:1.5em;text-align:center}.printing-scale-bar.ol-scale-bar{left:var(--printing-scale-bar-left);bottom:var(--printing-scale-bar-bottom)}.search-component .chakra-divider{display:none}.search-component .search-highlighted-match{font-weight:700}.search-component .search-value-container{cursor:text;padding-left:30px!important}.search-component .search-invisible{display:none}.selection-drag-box{background-color:#ffffff4d!important;border:3px solid var(--chakra-colors-background_primary)!important}.selection-tooltip{position:relative;background:#fffc;border-radius:4px;color:#000;padding:4px 8px;opacity:1;white-space:nowrap;font-size:12px;cursor:default;-webkit-user-select:none;user-select:none;font-weight:700}.selection .react-select{cursor:default}.map-container .selection-active{cursor:crosshair}.map-container .selection-inactive{cursor:no-drop}.selection-source-value.selection-source-value--disabled{opacity:.4}.selection-source-value.selection-source-value--disabled span{margin:0 6px 0 0}.result-list-no-data-message{text-align:center;margin-top:50px;font-weight:700;font-size:larger}.result-list-table th,.result-list-table td{overflow-wrap:break-word}.result-list-table.result-list-table--is-resizing *{cursor:col-resize}.result-list-table thead{position:sticky;top:0;z-index:1;background:var(--chakra-colors-background_body)}.result-list-table th{position:relative;border-right-width:thin}.result-list-table tbody tr:hover{background:var(--chakra-colors-background_light)}.result-list-table .result-list-resizer{position:absolute;top:0;height:100%;right:0;width:8px;background:var(--chakra-colors-trails-100);transform:scaleX(.25);cursor:col-resize;-webkit-user-select:none;user-select:none;touch-action:none;padding-left:0}.result-list-table th:last-child .result-list-resizer{width:8px;transform:translate(50%) scaleX(.25)}.result-list-table th .result-list-resizer.result-list-resizer--is-resizing{background:var(--chakra-colors-trails-500);transform:scale(1)}.result-list-table th .result-list-resizer:hover{transform:scale(1)}.scale-bar .ol-scale-bar{margin-bottom:8px;margin-right:8px}.scale-bar .ol-scale-bar,.scale-bar .ol-scale-line{position:relative;bottom:0;left:0;background:none}.scale-bar .ol-scale-bar .ol-scale-bar-inner,.scale-bar .ol-scale-bar .ol-scale-line-inner,.scale-bar .ol-scale-line .ol-scale-bar-inner,.scale-bar .ol-scale-line .ol-scale-line-inner{color:var(--chakra-white);border-color:var(--chakra-white)}',dt=["en","de"];function ut(r){switch(r){case"en":return E(()=>import("./BYGrfKr5WBJ9.js"),[],import.meta.url).then(e=>e.default);case"de":return E(()=>import("./C-s9YzO5rJEK.js"),[],import.meta.url).then(e=>e.default)}throw new Error(`Unsupported locale: '${r}'`)}const mt=U(pt),gt=Object.freeze(Object.defineProperty({__proto__:null,loadMessages:ut,locales:dt,packages:ct,styles:mt},Symbol.toStringTag,{value:"Module"})),B="ol-map",g=le.bind(void 0,B),u=se.bind(void 0,B),ht=q("ol-app:Editing");function F(r){const e=ft(r.kind),o=p.useId(),i=u();return t.jsx(d,{role:"dialog","aria-labelledby":o,children:t.jsx(v,{title:t.jsx(x,{id:o,size:"md",mb:2,children:i.formatMessage({id:"editing.title"})}),children:t.jsxs(d,{overflowY:"auto",maxHeight:300,children:[t.jsx(z,{textAlign:"center",children:i.formatMessage({id:"editing.active"})}),t.jsxs(H,{mt:4,align:"center",justify:"center",children:[t.jsx(I,{onClick:()=>{e?.reset()},children:i.formatMessage({id:"editing.resetGeometry"})}),t.jsx(I,{onClick:()=>{e?.destroy()},children:i.formatMessage({id:"editing.abort"})})]})]})})})}function ft(r){const e=g("notifier.NotificationService"),o=g("editing.EditingService"),i=u(),n=g("ol-app.AppModel"),{map:a}=L(),[s,l]=p.useState();return p.useEffect(()=>{if(!a)return;const c=new bt(e,o,a,i,n,r);return l(c),()=>{c.destroy(),l(void 0)}},[n,o,i,a,e,r]),s}class bt{notificationService;editingService;map;intl;appModel;kind;job;constructor(e,o,i,n,a,s){this.notificationService=e,this.editingService=o,this.map=i,this.intl=n,this.appModel=a,this.kind=s;let l;switch(s){case"create":l=this.createJob();break;case"update":l=this.updateJob();break}this.job=l,this.job.run().catch(c=>{K(c)||(ht.error("Edit operation failed",c),this.notificationService.notify({level:"error",message:this.intl.formatMessage({id:"editing.error"})}))}).finally(()=>{this.destroy()})}destroy(){this.job?.destroy(),this.job=void 0,this.appModel.hideContent(`editing-${this.kind}`)}reset(){this.job?.reset()}createJob(){let e;return{destroy(){e?.stop(),e=void 0},reset(){e?.reset()},run:async()=>{const o=this.findLayer(),i=new URL(o.attributes.collectionURL+"/items");e=this.editingService.createFeature(this.map,i);const n=await e.whenComplete();if(e=void 0,!n)return;this.notificationService.notify({level:"info",message:this.intl.formatMessage({id:"editing.create.featureCreated"},{featureId:n.featureId})}),(o?.olLayer).getSource()?.refresh()}}}updateJob(){const e=this.map,o=new AbortController,i=o.signal;let n,a,s;function l(){a&&e.olMap.removeInteraction(a),a&&a.dispose(),n&&n.destroy(),o.abort(),a=void 0,n=void 0}return{destroy(){l(),s?.stop(),s=void 0},reset(){s?.reset()},run:async()=>{const c=this.findLayer(),m=c.olLayer,w=new URL(c.attributes.collectionURL+"/items");a=new ke({layers:[m]}),e.olMap.addInteraction(a),n=vt(this.intl,e.olMap),n.element.classList.remove("editing-tooltip-hidden");let f;for(;;){const{selected:P,deselected:W}=await xt(a,i);if(P.length===1&&W.length===0){l(),f=P[0];break}}if(!f)throw Error("Feature is undefined");s=this.editingService.updateFeature(e,w,f);const S=await s.whenComplete();S&&(this.notificationService.notify({level:"info",message:this.intl.formatMessage({id:"editing.update.featureModified"},{featureId:S.featureId})}),m.getSource()?.refresh())}}}findLayer(){const e=this.map.layers.getLayerById("krankenhaus");if(!e)throw new Error("Layer not found");return e}}function vt(r,e){const o=document.createElement("div");o.className="editing-tooltip editing-tooltip-hidden",o.textContent=r.formatMessage({id:"editing.update.tooltip.select"});const i=new Me({element:o,offset:[15,0],positioning:"center-left"}),n=e.on("pointermove",a=>{a.dragging||i.setPosition(a.coordinate)});return e.addOverlay(i),{overlay:i,element:o,destroy(){M(n),e.removeOverlay(i)}}}function xt(r,e){let o;const{promise:i,resolve:n,reject:a}=$();if(e.aborted)return a(A()),i;const s=()=>{o&&M(o),o=void 0,a(A())};return e.addEventListener("abort",s),o=r.on("select",l=>{e.removeEventListener("abort",s),o&&M(o),o=void 0,n(l)}),i}function wt(){const r=u();return t.jsxs(y,{role:"region","aria-label":r.formatMessage({id:"ariaLabel.footer"}),gap:3,alignItems:"center",justifyContent:"center",children:[t.jsx(je,{precision:2,displayProjectionCode:"EPSG:4326"}),t.jsx(Ce,{}),t.jsx(Le,{})]})}function St(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:e.formatMessage({id:"legendTitle"})}),children:t.jsx(d,{overflowY:"auto",maxHeight:300,children:t.jsx(ze,{showBaseLayers:!0})})})})}function yt(r){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M15 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M6.5 9.5l1.546 -1.311"},child:[]},{tag:"path",attr:{d:"M14 5.5l3 1.5"},child:[]},{tag:"path",attr:{d:"M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71"},child:[]},{tag:"path",attr:{d:"M13.5 17.5l-7 -5"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(r)}function kt(r){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M15 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M6.5 9.5l3.5 -3"},child:[]},{tag:"path",attr:{d:"M14 5.5l3 1.5"},child:[]},{tag:"path",attr:{d:"M18.5 10l-2.5 7"},child:[]},{tag:"path",attr:{d:"M13.5 17.5l-7 -5"},child:[]}]})(r)}function Mt(){const r=u(),e=g("ol-app.AppModel"),o=b(()=>e.resultListState,[e]),i=o.open,{isTocActive:n,isLegendActive:a,isPrintingActive:s}=b(()=>({isTocActive:e.mainContent.includes("toc"),isLegendActive:e.mainContent.includes("legend"),isPrintingActive:e.mainContent.includes("printing")}),[e]);return t.jsxs(y,{role:"toolbar","aria-label":r.formatMessage({id:"ariaLabel.toolbar"}),direction:"column",gap:1,padding:1,children:[t.jsx(jt,{}),o.input&&t.jsx(h,{label:r.formatMessage({id:"resultListTitle"}),icon:t.jsx(me,{}),isActive:o.open,onClick:()=>e.setResultListVisibility(!i)}),t.jsx(h,{label:r.formatMessage({id:"tocTitle"}),icon:t.jsx(ge,{}),isActive:n,onClick:()=>e.toggleMainContent("toc")}),t.jsx(h,{label:r.formatMessage({id:"legendTitle"}),icon:t.jsx(he,{}),isActive:a,onClick:()=>e.toggleMainContent("legend")}),t.jsx(h,{label:r.formatMessage({id:"printingTitle"}),icon:t.jsx(fe,{}),isActive:s,onClick:()=>e.toggleMainContent("printing")}),t.jsx(We,{}),t.jsx(Ue,{}),t.jsx(Ke,{})]})}function jt(){const r=u(),e=g("ol-app.AppModel"),[o,i]=p.useState(!1),{isSelectionActive:n,isMeasurementActive:a,isEditingCreateActive:s,isEditingUpdateActive:l}=b(()=>({isSelectionActive:e.mainContent.includes("selection"),isMeasurementActive:e.mainContent.includes("measurement"),isEditingCreateActive:e.mainContent.includes("editing-create"),isEditingUpdateActive:e.mainContent.includes("editing-update")}),[e]),c=f=>()=>{f(),i(!1)},m={placement:"top"},w=t.jsxs(t.Fragment,{children:[t.jsx(h,{label:s?r.formatMessage({id:"editing.stopTitle"}):r.formatMessage({id:"editing.create.startTitle"}),icon:s?t.jsx(yt,{}):t.jsx(kt,{}),isActive:s,onClick:c(()=>e.toggleMainContent("editing-create")),tooltipProps:m}),t.jsx(h,{label:l?r.formatMessage({id:"editing.stopTitle"}):r.formatMessage({id:"editing.update.startTitle"}),icon:l?t.jsx(be,{}):t.jsx(ve,{}),isActive:l,onClick:c(()=>e.toggleMainContent("editing-update")),tooltipProps:m}),t.jsx(h,{label:r.formatMessage({id:"measurementTitle"}),icon:t.jsx(xe,{}),isActive:a,onClick:c(()=>e.toggleMainContent("measurement")),tooltipProps:m}),t.jsx(h,{label:r.formatMessage({id:"selectionTitle"}),icon:t.jsx(we,{}),isActive:n,onClick:c(()=>e.toggleMainContent("selection")),tooltipProps:m})]});return t.jsxs(Re,{placement:"left",isLazy:!0,onOpen:()=>i(!0),onClose:()=>i(!1),isOpen:o,children:[t.jsx(Ee,{children:t.jsx(Ct,{})}),t.jsx(Z,{children:t.jsxs(Fe,{width:"auto",children:[t.jsx(qe,{}),t.jsx(Ne,{children:t.jsx(H,{spacing:2,children:w})})]})})]})}const Ct=p.forwardRef(function(e,o){const i=u(),n=De(),{onClick:a,...s}=n.getTriggerProps();return t.jsx(h,{ref:o,label:i.formatMessage({id:"mapInteractions.title"}),icon:t.jsx(ue,{}),onClick:a,buttonProps:s})});function Lt(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:e.formatMessage({id:"measurementTitle"})}),children:t.jsx(_e,{})})})}function zt(){const r=g("ol-app.AppModel"),e=b(()=>r.resultListState,[r]),[o,i]=p.useState([]),[n,a]=p.useState([]),s=p.useCallback(l=>{i(l.features),a(l.getFeatureIds())},[]);return p.useEffect(()=>{console.log("Anzahl Features: "+o.length),console.log("SelectedIds: "+n.toString())},[o,n]),e.input&&t.jsx(d,{className:"result-list-container",position:"absolute",visibility:e.open?"visible":"hidden",bottom:"0",backgroundColor:"white",width:"100%",height:"400px",zIndex:1,borderTop:"2px solid",borderBottom:"2px solid",borderColor:"trails.100",children:t.jsx(Ze,{input:e.input,onSelectionChange:s},e.key)})}function _t(){const{map:r}=L(),e=g("ol-app.AppModel"),o=b(()=>e.searchSources.getItems(),[e]);function i(a){if(console.debug("The user selected the following item: ",a.result),!r)return;const s=a.result.geometry;s&&e.highlightAndZoom(r,[s])}function n(){console.debug("The user cleared the search"),e.clearHighlight()}return t.jsx(d,{backgroundColor:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",mt:5,className:"search-box",children:t.jsx(Pe,{sources:o,maxResultsPerGroup:10,onSelect:i,onClear:n})})}function Pt(){const r=u(),e=g("notifier.NotificationService"),o=p.useId(),{map:i}=L(),n=g("ol-app.AppModel"),a=b(()=>n.selectionSources.getItems(),[n]),s={numberOptions:{maximumFractionDigits:3},dateOptions:{dateStyle:"medium",timeStyle:"medium",timeZone:"UTC"}};function l(m){const{source:w,results:f}=m;if(!i){console.debug("Map not ready");return}const S=n.sourceMetadata.get(w);if(!S){console.warn("Can not show results because no metadata could be found");return}n.setResultListInput({columns:S,data:f,formatOptions:s}),e.notify({level:"info",message:r.formatMessage({id:"foundResults"},{resultsCount:f.length}),displayDuration:4e3})}function c(m){n.clearHighlight()}return t.jsx(d,{role:"dialog","aria-labelledby":o,children:t.jsx(v,{title:t.jsx(x,{id:o,size:"md",mb:2,children:r.formatMessage({id:"selectionTitle"})}),children:t.jsx(Ie,{sources:a,onSelectionComplete:l,onSelectionSourceChanged:c})})})}function It(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:t.jsx(z,{children:e.formatMessage({id:"tocTitle"})})}),children:t.jsx(d,{overflowY:"auto",maxHeight:300,children:t.jsx(Ve,{showTools:!0,basemapSwitcherProps:{allowSelectingEmptyBasemap:!0}})})})})}function At(){const r=p.useId(),e=u();return t.jsx(d,{role:"dialog","aria-labelledby":r,children:t.jsx(v,{title:t.jsx(x,{id:r,size:"md",mb:2,children:e.formatMessage({id:"printingTitle"})}),children:t.jsx(Ae,{})})})}function Tt(){const r=u(),e=g("ol-app.AppModel"),{resultListState:o,mainContent:i}=b(()=>({resultListState:e.resultListState,mainContent:e.mainContent}),[e]),n=o.input&&o.open;return t.jsx(ce,{mapId:_,children:t.jsxs(y,{height:"100%",direction:"column",overflow:"hidden",children:[t.jsx(Te,{position:"top-right"}),t.jsxs(v,{title:t.jsx(d,{role:"region","aria-label":r.formatMessage({id:"ariaLabel.header"}),textAlign:"center",py:1,children:t.jsx(x,{size:"md",children:"Sample Application"})}),children:[t.jsx(y,{flex:"1",direction:"column",position:"relative",children:t.jsxs(pe,{role:"main","aria-label":r.formatMessage({id:"ariaLabel.map"}),viewPadding:n?{bottom:400}:void 0,children:[t.jsx(Ye,{centerContent:!0,children:t.jsx(_t,{})}),t.jsx(Dt,{mainContent:i}),t.jsx(de,{position:"bottom-right",horizontalGap:10,verticalGap:45,children:t.jsx(Mt,{})}),t.jsx(zt,{})]})}),t.jsx(wt,{})]})]})})}function Dt(r){const{mainContent:e}=r,o=p.useMemo(()=>{const i=n=>{switch(n){case"toc":return t.jsx(It,{},n);case"legend":return t.jsx(St,{},n);case"printing":return t.jsx(At,{},n);case"selection":return t.jsx(Pt,{},n);case"measurement":return t.jsx(Lt,{},n);case"editing-create":return t.jsx(F,{kind:"create"},n);case"editing-update":return t.jsx(F,{kind:"update"},n)}};return e.map(n=>i(n))},[e]);return t.jsx(Rt,{children:o})}function Rt(r){const e=r.children,o=[];for(const i of e)i&&(o.length&&o.push(t.jsx($e,{mt:4,mb:4},o.length)),o.push(i));if(o.length!==0)return t.jsx(d,{position:"absolute",top:"100px",left:4,maxHeight:"calc(100% - 140px)",width:350,maxWidth:350,zIndex:1,backgroundColor:"white",borderWidth:"1px",borderRadius:"lg",padding:2,boxShadow:"lg",overflow:"auto",children:o})}const Et=new URLSearchParams(window.location.search),Ft=Et.get("lang")||void 0,qt=Y({component:Tt,appMetadata:gt,config:{locale:Ft,properties:{"@open-pioneer/local-storage":{storageId:"ol-app-state"}}}});customElements.define("ol-map-app",qt);