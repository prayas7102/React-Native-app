import { View, StyleSheet } from 'react-native';
import React from 'react';
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoicHJheWFza3VtYXIiLCJhIjoiY2t3ZzBoY2w0MGswMTJwcG1paWFqdWRzcSJ9.__eZ6h0eFMNHrqIPy44GZQ");
MapboxGL.setConnected(true);

const MapScreen = () => {
  MapboxGL.setTelemetryEnabled(false);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    // backgroundColor: "tomato"
  },
  map: {
    flex: 1
  },
  page: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#F5FCFF"
  }
});

export default MapScreen

// https://docs.mapbox.com/mapbox-search-js/example/japan-search-box/?size=n_10_n
// https://docs.mapbox.com/api/navigation/directions/
// https://docs.mapbox.com/mapbox-gl-js/example/measure/