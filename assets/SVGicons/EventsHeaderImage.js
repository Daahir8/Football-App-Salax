import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Rect, Defs, Pattern, Use, Image } from 'react-native-svg';

const EventsHeaderImage = () => {
  return (
    <Svg width="428" height="185" viewBox="0 0 428 185" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x="-78" width="649" height="185" fill="url(#pattern0)" />
    <Defs>
      <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use href="#image0" transform="matrix(-0.00124688 0 0 -0.0043742 1 1.23268)" />
      </Pattern>
      <Image id="image0" width="802" height="335" href="IMAGE_URL_HERE" />
    </Defs>
  </Svg>

  )
}

export default EventsHeaderImage