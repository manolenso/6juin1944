
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:"http://cdn.edgecommons.org/an/1.1.2/js/min/EdgeCommons.js",complete:function(){EC.debug("ok tout fonctionne!");EC.centerStage(sym);EC.SVG.accessSVG(sym.$("Omaha")).done(function(svgDocument){svgDocument.addEventListener("select",function(event){sym.setVariable("selectedPart",event.target);sym.$("selectedPartTxt").html(event.target.id);});});}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__1-1}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__1-2}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__1-3}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__1-4}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__5-3}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2-1}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2-2}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3-1}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2-3}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__1-5}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2-4}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__4-2}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__5-2}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__5-4}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2-5}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__5-5}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__4-5}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3-5}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__4-4}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__4-3}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3-4}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3-3}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3-2}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__4-1}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__5-1}","click",function(sym,e){var selectedPart=sym.getVariable("selectedPart");$(selectedPart).css("fill",$(e.currentTarget).css("background-color"));});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'triangle'
(function(symbolName){})("triangle");
//Edge symbol end:'triangle'

//=========================================================

//=========================================================

//Edge symbol: 'AnimateButtonComponent'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_hitstate}","mouseover",function(sym,e){sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hitstate}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hitstate}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hitstate}","mouseup",function(sym,e){sym.stop("Up");});
//Edge binding end
})("AnimateButtonComponent");
//Edge symbol end:'AnimateButtonComponent'
})(jQuery,AdobeEdge,"EDGE-4878582");