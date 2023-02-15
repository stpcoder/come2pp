import React from 'react'
import { useState } from 'react'
import {Map, MapMarker, useMap } from 'react-kakao-maps-sdk'

function Mapcom(){
  const data = [
    {
      content: <div style={{ color: "#000" }}>청암학술정보관</div>,
      latlng: { lat: 36.012793922685795, lng: 129.3251617222954 },
    },
    {
      content: <div style={{ color: "#000" }}>무은재기념관</div>,
      latlng: { lat: 36.01199988200514, lng: 129.32261879164327 },
    },
    {
      content: <div style={{ color: "#000" }}>제2공학관</div>,
      latlng: { lat: 36.01244723249525, lng: 129.32185119710428 },
    },
  ]

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    )
  }

  return (
    <div class="w-full flex justify-center ">
      <div class="h-3/5 w-4/5 ">
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 36.0129952127773,
            lng: 129.32295852510202,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={4} // 지도의 확대 레벨
        >
          {data.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              content={value.content}
            />
          ))}
        </Map>
      </div>
    </div>
  )
}

export default Mapcom