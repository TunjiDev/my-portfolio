import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup } from "react-simple-maps";

import styles from "./Map.module.css";

const MapChart = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position: any) {
    setPosition(position);
  }

  return (
    <div className="relative h-full">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -52.0, 0],
          center: [-5, -3],
          scale: 300,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup zoom={position.zoom} center={position.coordinates as any} onMoveEnd={handleMoveEnd}>
          <Geographies geography="/features.json" fill="#1a1a1a" stroke="#25632e" strokeWidth={0.5}>
            {({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
          </Geographies>
          <Annotation
            subject={[8.6753, 9.082]}
            dx={-90}
            dy={-30}
            connectorProps={{
              stroke: "#fff",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}
          >
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
              {"Nigeria"}
            </text>
          </Annotation>
        </ZoomableGroup>
      </ComposableMap>

      <div className={styles.controls}>
        <button onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
            className={styles.svg}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
            className={styles.svg}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MapChart;
