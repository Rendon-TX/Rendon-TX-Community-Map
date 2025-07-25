// JavaScript source code
import json_TADCountyBoundary_2 from "data/TADCountyBoundary_2.js"

function pop_TADCountyBoundary_2(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(String(feature.properties['OBJECTID']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TDC'] !== null ? autolinker.link(String(feature.properties['TDC']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['CO_NAME'] !== null ? autolinker.link(String(feature.properties['CO_NAME']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['COUNTY_TEX'] !== null ? autolinker.link(String(feature.properties['COUNTY_TEX']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['GlobalID'] !== null ? autolinker.link(String(feature.properties['GlobalID']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Shape_area'] !== null ? autolinker.link(String(feature.properties['Shape_area']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Shape_len'] !== null ? autolinker.link(String(feature.properties['Shape_len']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}
function style_TADCountyBoundary_2_0() {
    return {
        pane: 'pane_TADCountyBoundary_2',
        opacity: 1,
        color: 'rgba(122,112,112,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 5.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(152,125,183,0.0)',
        interactive: false,
    }
}
function style_TADCountyBoundary_2_1() {
    return {
        pane: 'pane_TADCountyBoundary_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '5.0,1.0,2.0,1.0,2.0,1.0',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,255,0.0)',
        interactive: false,
    }
}
map.createPane('pane_TADCountyBoundary_2');
map.getPane('pane_TADCountyBoundary_2').style.zIndex = 402;
map.getPane('pane_TADCountyBoundary_2').style['mix-blend-mode'] = 'normal';
var layer_TADCountyBoundary_2 = new L.geoJson.multiStyle(json_TADCountyBoundary_2, {
    attribution: '',
    interactive: false,
    dataVar: 'json_TADCountyBoundary_2',
    layerName: 'layer_TADCountyBoundary_2',
    pane: 'pane_TADCountyBoundary_2',
    onEachFeature: pop_TADCountyBoundary_2,
    styles: [style_TADCountyBoundary_2_0, style_TADCountyBoundary_2_1,]
});
bounds_group.addLayer(layer_TADCountyBoundary_2);
map.addLayer(layer_TADCountyBoundary_2);