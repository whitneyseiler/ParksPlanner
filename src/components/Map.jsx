import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2hpdG5leXNlaWxlciIsImEiOiJjamxxNWo4cXkyY2RzM3dzNnljdGkzNDB2In0.wR0jz' +
    '3YiwL-UHC7OtUSMHQ';

class Mapp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
      visited: []
    };

    this.map = null;
    this.renderListing = this.renderListings.bind(this);
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    const context = this;
    // Holds visible airport features for filtering
    var features = [];
    var popup = new mapboxgl.Popup({closeButton: false});
    var filterEl = document.getElementById('feature-filter');
    var listingEl = document.getElementById('feature-listing');

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [
        -100.486052, 37.830348
      ],
      zoom: 3
    });
    this.map = map;

    map.on('load', () => {
      map.loadImage('https://api.mapbox.com/v4/marker/pin-m-park+609321.png?access_token=pk.eyJ1IjoibnBzIiwiYSI6IkdfeS1OY1UifQ.K8Qn5ojTw4RV1GwBlsci-Q', function(err, image) {
        if (err) throw err;
        map.addImage('custom-marker', image);
      });

      map.addSource('parks-boundaries', {
        type: 'geojson',
        'data': "https://gist.githubusercontent.com/erincaughey/2f221501645757e28b715c4063e87595/" +
            "raw/a90be1b434b1a8cdf71c2abc3373ca63987e2d23/nps-geo-boundary.json"
      });

      map.addSource('parks-markers', {
        type: 'geojson',
        'data': "https://opendata.arcgis.com/datasets/c8d60ffcbf5c4030a17762fe10e81c6a_0.geojson",
      });

      map.addLayer({
        id: 'boundaries',
        type: 'fill',
        source: 'parks-boundaries',
        paint: {
          'fill-color': '#527E5B',
          'fill-opacity': 0.6
        },
        filter: [ "all", 
          ['==', '$type', 'Polygon'],
          [ '==', 'feature.properties.UNIT_TYPE', 'National Park' ]
        ]
      });

      map.addLayer({
        id: 'markers',
        type: 'symbol',
        source: 'parks-markers',
        filter: [ '==', ['get', 'UNIT_TYPE'], 'National Park' ],
        layout: {
          'icon-image': 'custom-marker',
          'icon-padding': 0,
          'icon-allow-overlap': true,
          'icon-size': 0.75
        },
        paint: {
          'icon-color': 'red'
        },
      });

      map.on('moveend', () => {
        var parks = map.queryRenderedFeatures({ layers: ['markers'] });
          
        if (parks) {
          var uniqueFeatures = context.getUniqueFeatures(parks, 'UNIT_NAME');
          // Populate features for the listing overlay.
          context.renderListings(uniqueFeatures);
            
          // Clear the input container
          filterEl.value = '';
            
          // Store the current features in `features` variable to
          // later use for filtering on `keyup`.
          features = uniqueFeatures;
        }
      });

      // When a click event occurs on a feature in the markers layer, open a
      // popup at the location of the feature, with description HTML from its
      // properties.
      map.on('click', 'markers', (e) => {
        const { visited } = this.state;
        const featureId = e.features[0].UNIT_CODE;

        if (e.features.length > 0) {
          if (visited.includes(featureId)) {
            visited.splice(visited.indexOf(featureId), 1);
            this.setState({ visited });
          } else {
            visited.push(featureId)
            this.setState({ visited });
          }
        }
      });

      map.on('mousemove', 'markers', (e) => {
        map.getCanvas().style.cursor = 'pointer';
          
        var feature = e.features[0];
        popup.setLngLat(feature.geometry.coordinates).setText(
          feature.properties.UNIT_NAME
        ).addTo(map);
      });

      map.on('mouseleave', 'markers', (e) => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });

      filterEl.addEventListener('keyup', (e) => {
        var value = e.target.value;
        var filtered = features.filter(feature => {
          var name = feature.properties.UNIT_NAME;
          return name.indexOf(value) > -1;
        });
          
        // Populate the sidebar with filtered results
        context.renderListings(filtered);
          
        // Set the filter to populate features into the layer.
        if (filtered.length) {
          map.setFilter('markers', [
            'match',
            ['get', 'UNIT_NAME'],
            filtered.map(function(feature) {
              return feature.properties.UNIT_NAME;
            }),
            true,
            false
          ]);
        }
      });
        
      // Call this function on initialization
      // passing an empty array to render an empty state
      context.renderListings(features);
    })
  }

  getUniqueFeatures(array, comparatorProperty) {
    var existingFeatureKeys = {};
    // Because features come from tiled vector data, feature geometries may be split
    // or duplicated across tile boundaries and, as a result, features may appear
    // multiple times in query results.
    var uniqueFeatures = array.filter(el => {
      if (existingFeatureKeys[el.properties[comparatorProperty]]) {
        return false;
      } else {
        existingFeatureKeys[el.properties[comparatorProperty]] = true;
        return true;
      }
    });

    return uniqueFeatures;
  }

  renderListings(features) {
    var filterEl = document.getElementById('feature-filter');
    var listingEl = document.getElementById('feature-listing');
    var popup = new mapboxgl.Popup({closeButton: false});
    var empty = document.createElement('p');

    // Clear any existing listings
    listingEl.innerHTML = '';

    if (features.length) {
      features.forEach(feature => {
        var prop = feature.properties;
        if (prop.UNIT_TYPE === 'National Park') {
          var item = document.createElement('span');
          item.textContent = prop.UNIT_NAME;
          item.addEventListener('mouseover', () => {
            // Highlight corresponding feature on the map
            popup
              .setLngLat(feature.geometry.coordinates)
              .setText(feature.properties.UNIT_NAME )
              .addTo(this.map);
          });
          listingEl.appendChild(item);
        }
      });

      // Show the filter input
      filterEl.parentNode.style.display = 'block';
    } else if (features.length === 0 && filterEl.value !== '') {
      empty.textContent = 'No results found';
      listingEl.appendChild(empty);
    } else {
      empty.textContent = 'Drag the map to populate results';
      listingEl.appendChild(empty);

      // Hide the filter input
      filterEl.parentNode.style.display = 'none';

      // remove features filter
      this.map.setFilter('markers', ['has', 'UNIT_TYPE']);
    }
  }

  render() {
    return (
      <section className="mapContainer">
        <div className="map-overlay">
          <fieldset>
            <input id="feature-filter" type="text" placeholder="Filter results by name"/>
          </fieldset>
          <div id="feature-listing" className="listing"></div>
        </div>
        <div id="map" ref={el => this.mapContainer = el}/>
      </section>
    )
  }
}

export default Mapp;