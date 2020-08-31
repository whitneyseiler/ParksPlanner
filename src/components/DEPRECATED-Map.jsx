import React from 'react';

let Map = ({states, handleMouseEnter, handleMouseLeave, handleMouseMove, handleClick}) => {

    return (
			<div id="us-map">
        <div id="info-box"></div>
        <svg xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape" xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlnsSvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="us-map" preserveAspectRatio="xMinYMin meet" sodipodiDocname="Republican_Party_presidential_primaries_results,_2016.svg" inkscapeVersion="0.91 r13725" x="0px" y="0px" width="959px" height="593px" viewBox="174 100 959 593" enableBackground="new 174 100 959 593" xmlSpace="preserve">
        <sodipodiNamedview bordercolor="#666666" objecttolerance="10" pagecolor="#ffffff" borderopacity="1" gridtolerance="10" guidetolerance="10" inkscapeCx="509.19152" inkscapeCy="282.2353" inkscapeZoom="1.2137643" showgrid="false" id="namedview71" inkscapeCurrent-layer="g5" inkscapeWindow-maximized="1" inkscapeWindow-y="-8" inkscapeWindow-x="-8" inkscapePageopacity="0" inkscapeWindow-height="1017" inkscapeWindow-width="1920" inkscapePageshadow="2"></sodipodiNamedview>
          <g id="g5">
            {states.map((state, index) => {
              return <path 
                id={state.id}
                className="state-svg"
                data-info={state.dataInfo} 
                fill={state.fill} 
                d={state.d}
                onMouseEnter={(e) => handleMouseEnter(e)} 
                onMouseLeave={(e) => handleMouseLeave(e)} 
                onMouseMove={(e) => handleMouseMove(e)}   
                onClick={(e) => handleClick(e)}
              />
            })}
            <g id="DC">
              <path id="path58" fill="#D3D3D3" d="M975.8,353.8l-1.1-1.6l-1-0.8l1.1-1.6l2.2,1.5L975.8,353.8z"/>
              <circle 
                id="circle60" 
                data-info="<div>Washington DC</div>" 
                fill="#D3D3D3" 
                stroke="#FFFFFF" 
                strokeWidth="1.5" 
                cx="975.3" 
                cy="351.8" 
                r="5"
                onMouseEnter={(e) => handleMouseEnter(e)} 
                onMouseLeave={(e) => handleMouseLeave(e)} 
                onMouseMove={(e) => handleMouseMove(e)}   
                onClick={(e) => handleClick(e)}/>
            </g>
          </g>
          <path id="path67" fill="none" stroke="#A9A9A9" strokeWidth="2" d="M385,593v55l36,45 M174,525h144l67,68h86l53,54v46"/>
        </svg>
			</div>
    )
}

export default Map;