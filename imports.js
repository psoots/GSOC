/*
 * This file defines which OpenLayers classes we need. This array
 * is checked when the OpenLayers library is loaded, so it MUST
 * come before the OpenLayers library when loaded by html.
 *
 */

   	window.OpenLayers = [ // only load the ones we need, for speed
                "OpenLayers/BaseTypes/Class.js",
                "OpenLayers/Util.js",
                "OpenLayers/BaseTypes.js",
                "OpenLayers/BaseTypes/Bounds.js",
                "OpenLayers/BaseTypes/Element.js",
                "OpenLayers/BaseTypes/LonLat.js",
                "OpenLayers/BaseTypes/Pixel.js",
                "OpenLayers/BaseTypes/Size.js",
                "OpenLayers/Console.js",
                "OpenLayers/Tween.js",
                "Rico/Corner.js",                
                "OpenLayers/Events.js",
                "OpenLayers/Projection.js",
                "OpenLayers/Map.js",
                "OpenLayers/Layer.js",
                "OpenLayers/Tile.js",
                "OpenLayers/Tile/Image.js",
                "OpenLayers/Tile/Image/IFrame.js",
                "OpenLayers/Layer/HTTPRequest.js",
                "OpenLayers/Layer/Grid.js",
                "OpenLayers/Layer/Image.js",
                "OpenLayers/Layer/MapServer.js",
                "OpenLayers/Feature.js",
                "OpenLayers/Feature/Vector.js",
                "OpenLayers/Handler.js",
                "OpenLayers/Handler/Click.js",
                "OpenLayers/Handler/Point.js",
                "OpenLayers/Handler/Feature.js",
                "OpenLayers/Handler/Drag.js",
                "OpenLayers/Handler/Pinch.js",
                "OpenLayers/Handler/Box.js",
                "OpenLayers/Handler/MouseWheel.js",
                "OpenLayers/Control.js",
                "OpenLayers/Control/Attribution.js",
                "OpenLayers/Control/Button.js",
                "OpenLayers/Control/ZoomBox.js",
                "OpenLayers/Control/ZoomToMaxExtent.js",
                "OpenLayers/Control/DragPan.js",
                "OpenLayers/Control/Navigation.js",
                "OpenLayers/Control/MouseDefaults.js",
                "OpenLayers/Control/MousePosition.js",
                "OpenLayers/Control/PanZoom.js",
                "OpenLayers/Control/PanZoomBar.js",                
                "OpenLayers/Control/ArgParser.js",
                "OpenLayers/Control/LayerSwitcher.js",
                "OpenLayers/Control/DrawFeature.js",
                "OpenLayers/Geometry.js",
                "OpenLayers/Geometry/Point.js", 
                "OpenLayers/Renderer.js",
                "OpenLayers/Renderer/Elements.js",
                "OpenLayers/Renderer/NG.js",
                "OpenLayers/Renderer/SVG.js",
                "OpenLayers/Renderer/SVG2.js",
                "OpenLayers/Renderer/Canvas.js",
                "OpenLayers/Renderer/VML.js",
                "OpenLayers/Layer/Vector.js",
                "OpenLayers/Filter.js",
                "OpenLayers/Filter/Spatial.js",
                "OpenLayers/Style.js",
                "OpenLayers/StyleMap.js",
                "OpenLayers/Lang.js"
            ]; 