var foss4gMap = {
  token: 'pk.eyJ1IjoiYWxhbnRnZW8tcHJlc2FsZXMiLCJhIjoiY2prbjg1aXQxMDBiMDNxcGk2bjdzemE4cSJ9.bZzUZUuSiYwyjPgSSwuImg',
  legendClasses: {
    conferenceLocations: 'Conference Locations',
    socialEvents: 'Social Events',
    transport: 'Transport'
  },
  colors: {
    marker: '#5a5a5a',
    markerHighlight: '#0099b3',
    text: '#5a5a5a',
    textAlternate: '#ffffff'
  },
  features: [
    {
      id: 'oldArtsBuilding',
      name: 'Old Arts Building',
      address: 'Building 149, The University of Melbourne, Parkville',
      description: '<p>The conference will be held at The Old Arts Building at the The University of Melbourne, a historic and beautiful sandstone building.</p><p>It is located at the Parkville campus near South Lawn and Union House.</p>',
      website: 'https://maps.unimelb.edu.au/parkville/building/149',
      directionsLink: 'https://www.google.com/maps/dir//-37.7978,144.960093/@-37.7977977,144.9589223,17z/data=!4m2!4m1!3e0',
      coords: [144.960093, -37.7978],
      mobileZoomCoords: [144.960129, -37.797254],
      bearing: 0,
      zoom: 17,
      pitch: 0,
      icon: 'star',
      legendClass: 'conferenceLocations'
    },
    {
      id: 'brunswickMessHall',
      name: 'Brunswick Mess Hall',
      address: '400 Sydney Rd, Brunswick',
      description: '<p>The conference dinner will be held at this heritage listed hall in the heart of Brunswick.</p><p>Catch the number 19 tram on Sydney Road and get off at stop 22.</p>',
      website: 'https://thebrunswickmesshall.com.au',
      directionsLink: 'https://www.google.com/maps/dir//The+Brunswick+Mess+Hall,+400+Sydney+Rd,+Brunswick+VIC+3056/',
      coords: [144.962016, -37.768448],
      mobileZoomCoords: [144.962015, -37.767664],
      bearing: 0,
      zoom: 16,
      pitch: 0,
      icon: 'restaurant',
      legendClass: 'socialEvents'
    },
    {
      id: 'shawDaveySlum',
      name: 'Shaw Davey Slum',
      address: '171-175 Elgin St, Carlton',
      website: 'http://theshawdaveyslum.com.au/',
      directionsLink: 'https://www.google.com/maps/dir//The+Shaw+Davey+Slum,+171-175+Elgin+St,+Carlton+VIC+3053/',
      coords: [144.968708, -37.797497],
      mobileZoomCoords: [144.968708, -37.797105],
      bearing: 0,
      zoom: 17,
      pitch: 0,
      icon: 'fastFood',
      legendClass: 'socialEvents'
    },
    {
      id: 'melbourneAirport',
      name: 'Melbourne Airport',
      address: 'Departure Dr, Melbourne Airport',
      description: '<p>Melbourne Airport is approximately 25 minutes drive from The University of Melbourne.</p><p>Alternatively you can catch the <a class="popup-link" href="https://skybus.com.au" target="_blank">SkyBus</a> to Southern Cross Station where you can get metro trains, trams and buses.</p>',
      website: 'https://www.melbourneairport.com.au',
      coords: [144.848916, -37.670004],
      mobileZoomCoords: [144.848916, -37.668305],
      bearing: 0,
      zoom: 15,
      pitch: 0,
      icon: 'airport',
      legendClass: 'transport'
    },
    {
      id: 'southernCrossStation',
      name: 'Southern Cross Station',
      address: 'Spencer St, Docklands',
      website: 'https://southerncrossstation.com.au/',
      description: '<p>Southern Cross Station is Melbourne\'s public transport hub.</p><p>From here you can catch trains, trams, buses and the <a class="popup-link" href="https://skybus.com.au" target="_blank">Skybus</a> to Melbourne Airport.</p>',
      coords: [144.952829, -37.818230],
      mobileZoomCoords: [144.952828, -37.815098],
      bearing: 0,
      zoom: 14,
      pitch: 0,
      icon: 'rail',
      legendClass: 'transport'
    }
  ],
  initialCenter: [144.960130, -37.797686],
  initialZoom: 12,
  initialPitch: 60,
  initialBearing: 0,
  mapStyle: 'mapbox://styles/mapbox/light-v9',
  isMobileView: function() {
    return window.innerWidth < 768;
  },
  getSvgIconUrl: function(iconName, color) {
    // From https://github.com/mapbox/mapbox-gl-styles
    // Save the SVG definition here and replace fill color
    var iconSvg = {
      marker: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" height="21" width="21"><title>marker-15.svg</title><rect fill="none" x="0" y="0" width="21" height="21"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M7.5,0C5.0676,0,2.2297,1.4865,2.2297,5.2703  C2.2297,7.8378,6.2838,13.5135,7.5,15c1.0811-1.4865,5.2703-7.027,5.2703-9.7297C12.7703,1.4865,9.9324,0,7.5,0z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="' + color + '" transform="translate(3 3)" d="M7.5,0C5.0676,0,2.2297,1.4865,2.2297,5.2703  C2.2297,7.8378,6.2838,13.5135,7.5,15c1.0811-1.4865,5.2703-7.027,5.2703-9.7297C12.7703,1.4865,9.9324,0,7.5,0z"/></svg>',
      star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" height="21" width="21"><title>star-15.svg</title><rect fill="none" x="0" y="0" width="21" height="21"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5  l5,3.5l-2-6l4-3.5h-5L7.5,0z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="' + color + '" transform="translate(3 3)" d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5  l5,3.5l-2-6l4-3.5h-5L7.5,0z"/></svg>',
      restaurant: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" height="21" width="21"><title>restaurant-15.svg</title><rect fill="none" x="0" y="0" width="21" height="21"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5  c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0  c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1  s1,0,1-1V0z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="' + color + '" transform="translate(3 3)" d="M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5  c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0  c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1  s1,0,1-1V0z"/></svg>',
      fastFood: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" height="21" width="21"><title>fast-food-15.svg</title><rect fill="none" x="0" y="0" width="21" height="21"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M14,8c0,0.5523-0.4477,1-1,1H2C1.4477,9,1,8.5523,1,8s0.4477-1,1-1h11C13.5523,7,14,7.4477,14,8z M3.5,10H2  c0,1.6569,1.3431,3,3,3h5c1.6569,0,3-1.3431,3-3H3.5z M3,6H2V4c0-1.1046,0.8954-2,2-2h7c1.1046,0,2,0.8954,2,2v2H3z M11,4.5  C11,4.7761,11.2239,5,11.5,5S12,4.7761,12,4.5S11.7761,4,11.5,4S11,4.2239,11,4.5z M9,3.5C9,3.7761,9.2239,4,9.5,4S10,3.7761,10,3.5  S9.7761,3,9.5,3S9,3.2239,9,3.5z M7,4.5C7,4.7761,7.2239,5,7.5,5S8,4.7761,8,4.5S7.7761,4,7.5,4S7,4.2239,7,4.5z M5,3.5  C5,3.7761,5.2239,4,5.5,4S6,3.7761,6,3.5S5.7761,3,5.5,3S5,3.2239,5,3.5z M3,4.5C3,4.7761,3.2239,5,3.5,5S4,4.7761,4,4.5  S3.7761,4,3.5,4S3,4.2239,3,4.5z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="' + color + '" transform="translate(3 3)" d="M14,8c0,0.5523-0.4477,1-1,1H2C1.4477,9,1,8.5523,1,8s0.4477-1,1-1h11C13.5523,7,14,7.4477,14,8z M3.5,10H2  c0,1.6569,1.3431,3,3,3h5c1.6569,0,3-1.3431,3-3H3.5z M3,6H2V4c0-1.1046,0.8954-2,2-2h7c1.1046,0,2,0.8954,2,2v2H3z M11,4.5  C11,4.7761,11.2239,5,11.5,5S12,4.7761,12,4.5S11.7761,4,11.5,4S11,4.2239,11,4.5z M9,3.5C9,3.7761,9.2239,4,9.5,4S10,3.7761,10,3.5  S9.7761,3,9.5,3S9,3.2239,9,3.5z M7,4.5C7,4.7761,7.2239,5,7.5,5S8,4.7761,8,4.5S7.7761,4,7.5,4S7,4.2239,7,4.5z M5,3.5  C5,3.7761,5.2239,4,5.5,4S6,3.7761,6,3.5S5.7761,3,5.5,3S5,3.2239,5,3.5z M3,4.5C3,4.7761,3.2239,5,3.5,5S4,4.7761,4,4.5  S3.7761,4,3.5,4S3,4.2239,3,4.5z"/></svg>',
      airport: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" height="21" width="21"><title>airport-15.svg</title><rect fill="none" x="0" y="0" width="21" height="21"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M15,6.8182L15,8.5l-6.5-1  l-0.3182,4.7727L11,14v1l-3.5-0.6818L4,15v-1l2.8182-1.7273L6.5,7.5L0,8.5V6.8182L6.5,4.5v-3c0,0,0-1.5,1-1.5s1,1.5,1,1.5v2.8182  L15,6.8182z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="' + color + '" transform="translate(3 3)" d="M15,6.8182L15,8.5l-6.5-1  l-0.3182,4.7727L11,14v1l-3.5-0.6818L4,15v-1l2.8182-1.7273L6.5,7.5L0,8.5V6.8182L6.5,4.5v-3c0,0,0-1.5,1-1.5s1,1.5,1,1.5v2.8182  L15,6.8182z"/></svg>',
      rail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" height="21" width="21"><title>rail-15.svg</title><rect fill="none" x="0" y="0" width="21" height="21"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M11.93,14.26L11.93,14.26l-1-2l0,0c-0.1287-0.2443-0.4311-0.338-0.6754-0.2092C10.0313,12.1684,9.9307,12.434,10.02,12.67  l0,0l0,0L10.19,13H4.81l0.13-0.27l0,0l0,0c0.0977-0.2583-0.0325-0.5469-0.2908-0.6446C4.4132,11.9962,4.1476,12.0968,4.03,12.32l0,0  l-1,2l0,0C3.0088,14.3776,2.9986,14.4387,3,14.5C3,14.7761,3.2239,15,3.5,15c0.1802-0.001,0.3454-0.1008,0.43-0.26l0,0v-0.05H4  L4.31,14h6.38L11,14.69l0,0v0.05l0,0c0.0846,0.1592,0.2498,0.259,0.43,0.26c0.2761,0,0.5-0.2239,0.5-0.5  C11.9499,14.4212,11.9499,14.3388,11.93,14.26z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M12,1H3C2.4477,1,2,1.4477,2,2v8c0,0.5523,0.4477,1,1,1h9c0.5523,0,1-0.4477,1-1V2C13,1.4477,12.5523,1,12,1z M5.76,1.5   h3.5c0.1381,0,0.25,0.1119,0.25,0.25S9.3981,2,9.26,2H5.75C5.6119,2,5.5,1.8881,5.5,1.75S5.6119,1.5,5.75,1.5H5.76z M5,10   c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S5.5523,10,5,10z M7,7H3.5C3.2239,7,3,6.7761,3,6.5v-3C3,3.2239,3.2239,3,3.5,3   H7V7z M10,10c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S10.5523,10,10,10z M12,6.5C12,6.7761,11.7761,7,11.5,7H8V3h3.5   C11.7761,3,12,3.2239,12,3.5V6.5z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="rgba(255,255,255,0.25)" transform="translate(3 3)" d="M12,1H3C2.4477,1,2,1.4477,2,2v8c0,0.5523,0.4477,1,1,1h9c0.5523,0,1-0.4477,1-1V2C13,1.4477,12.5523,1,12,1z M5.76,1.5   h3.5c0.1381,0,0.25,0.1119,0.25,0.25S9.3981,2,9.26,2H5.75C5.6119,2,5.5,1.8881,5.5,1.75S5.6119,1.5,5.75,1.5H5.76z M5,10   c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S5.5523,10,5,10z M7,7H3.5C3.2239,7,3,6.7761,3,6.5v-3C3,3.2239,3.2239,3,3.5,3   H7V7z M10,10c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S10.5523,10,10,10z M12,6.5C12,6.7761,11.7761,7,11.5,7H8V3h3.5   C11.7761,3,12,3.2239,12,3.5V6.5z" style="stroke-linejoin:round;stroke-miterlimit:4px;" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path fill="' + color + '" transform="translate(3 3)" d="M11.93,14.26L11.93,14.26l-1-2l0,0c-0.1287-0.2443-0.4311-0.338-0.6754-0.2092C10.0313,12.1684,9.9307,12.434,10.02,12.67  l0,0l0,0L10.19,13H4.81l0.13-0.27l0,0l0,0c0.0977-0.2583-0.0325-0.5469-0.2908-0.6446C4.4132,11.9962,4.1476,12.0968,4.03,12.32l0,0  l-1,2l0,0C3.0088,14.3776,2.9986,14.4387,3,14.5C3,14.7761,3.2239,15,3.5,15c0.1802-0.001,0.3454-0.1008,0.43-0.26l0,0v-0.05H4  L4.31,14h6.38L11,14.69l0,0v0.05l0,0c0.0846,0.1592,0.2498,0.259,0.43,0.26c0.2761,0,0.5-0.2239,0.5-0.5  C11.9499,14.4212,11.9499,14.3388,11.93,14.26z"/><path fill="' + color + '" transform="translate(3 3)" d="M12,1H3C2.4477,1,2,1.4477,2,2v8c0,0.5523,0.4477,1,1,1h9c0.5523,0,1-0.4477,1-1V2C13,1.4477,12.5523,1,12,1z M5.76,1.5   h3.5c0.1381,0,0.25,0.1119,0.25,0.25S9.3981,2,9.26,2H5.75C5.6119,2,5.5,1.8881,5.5,1.75S5.6119,1.5,5.75,1.5H5.76z M5,10   c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S5.5523,10,5,10z M7,7H3.5C3.2239,7,3,6.7761,3,6.5v-3C3,3.2239,3.2239,3,3.5,3   H7V7z M10,10c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S10.5523,10,10,10z M12,6.5C12,6.7761,11.7761,7,11.5,7H8V3h3.5   C11.7761,3,12,3.2239,12,3.5V6.5z"/><path fill="' + color + '" transform="translate(3 3)" d="M12,1H3C2.4477,1,2,1.4477,2,2v8c0,0.5523,0.4477,1,1,1h9c0.5523,0,1-0.4477,1-1V2C13,1.4477,12.5523,1,12,1z M5.76,1.5   h3.5c0.1381,0,0.25,0.1119,0.25,0.25S9.3981,2,9.26,2H5.75C5.6119,2,5.5,1.8881,5.5,1.75S5.6119,1.5,5.75,1.5H5.76z M5,10   c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S5.5523,10,5,10z M7,7H3.5C3.2239,7,3,6.7761,3,6.5v-3C3,3.2239,3.2239,3,3.5,3   H7V7z M10,10c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S10.5523,10,10,10z M12,6.5C12,6.7761,11.7761,7,11.5,7H8V3h3.5   C11.7761,3,12,3.2239,12,3.5V6.5z"/></svg>'
    }
    return encodeURI('data:image/svg+xml;utf8,' + iconSvg[iconName]).replace(new RegExp('#', 'g'), '%23');
  },
  createMarkerElement: function(feature) {
    var el = document.createElement('div');
    el.className = 'marker poi-marker';
    el.style.backgroundImage = 'url(\'' + foss4gMap.getSvgIconUrl('marker', foss4gMap.colors.marker) + '\')';

    var childEl = document.createElement('div');
    childEl.className = 'poi-marker-icon';
    childEl.style.backgroundImage = 'url(\'' + foss4gMap.getSvgIconUrl(feature.icon, foss4gMap.colors.textAlternate) + '\')';
    el.appendChild(childEl);

    el.addEventListener('click', function() {
      if (foss4gMap.isMobileView()) {
        foss4gMap.panToFeature(feature);
      }
    });

    el.addEventListener('mouseover', function() {
      foss4gMap.highlightMarker(feature);
      foss4gMap.highlightLegendItem(feature);
    });

    el.addEventListener('mouseout', function() {
      foss4gMap.unhighlightMarker(feature);
      foss4gMap.unhighlightLegendItem(feature);
    });

    return el;
  },
  changeMarkerStyle: function(feature, color, zIndex) {
    if (!feature.marker) {
      return;
    }
    var el = feature.marker.getElement();
    el.style.backgroundImage = 'url(\'' + foss4gMap.getSvgIconUrl('marker', color) + '\')';
    el.style.zIndex = zIndex;
  },
  highlightMarker: function(feature) {
    foss4gMap.changeMarkerStyle(feature, foss4gMap.colors.markerHighlight, 10);
  },
  unhighlightMarker: function(feature) {
    foss4gMap.changeMarkerStyle(feature, foss4gMap.colors.marker, 0);
  },
  changeLegendItemStyle: function(feature, textColor, bgColor) {
    var itemElement = document.getElementById('legend-item-' + feature.id);
    var iconElement = document.getElementById('legend-item-icon-' + feature.id);
    var textElement = document.getElementById('legend-item-text-' + feature.id);
    iconElement.style.backgroundImage = 'url(\'' + foss4gMap.getSvgIconUrl(feature.icon, textColor) + '\')';
    textElement.style.color = textColor;
    itemElement.style.backgroundColor = bgColor;
  },
  highlightLegendItem: function(feature) {
    foss4gMap.changeLegendItemStyle(
      feature, foss4gMap.colors.textAlternate, foss4gMap.colors.markerHighlight
    );
  },
  unhighlightLegendItem: function(feature) {
    foss4gMap.changeLegendItemStyle(
      feature, foss4gMap.colors.text, foss4gMap.colors.textAlternate
    );
  },
  createLegendItem: function(legendClassElement, feature) {
    var legendItemElement = document.createElement('div');
    var legendItemIconElement = document.createElement('div');
    var legendItemTextElement = document.createElement('div');

    legendItemElement.id = 'legend-item-' + feature.id;
    legendItemIconElement.id = 'legend-item-icon-' + feature.id;
    legendItemTextElement.id = 'legend-item-text-' + feature.id;

    legendItemElement.className = 'legend-item';
    legendItemIconElement.className = 'legend-item-icon';
    legendItemTextElement.className = 'legend-item-text';

    legendItemIconElement.style.backgroundImage = 'url(\'' + foss4gMap.getSvgIconUrl(feature.icon, foss4gMap.colors.text) + '\')';
    legendItemTextElement.textContent = feature.name;

    legendItemElement.appendChild(legendItemIconElement);
    legendItemElement.appendChild(legendItemTextElement);
    legendClassElement.appendChild(legendItemElement);

    legendItemElement.addEventListener('mouseover', function() {
      foss4gMap.highlightLegendItem(feature);
      foss4gMap.highlightMarker(feature);
    });

    legendItemElement.addEventListener('mouseout', function() {
      foss4gMap.unhighlightLegendItem(feature);
      foss4gMap.unhighlightMarker(feature);
    });

    legendItemElement.addEventListener('click', function() {
      foss4gMap.zoomToFeature(feature);
      foss4gMap.clearMarkerPopups();
      feature.marker.getPopup().addTo(foss4gMap.map);
    });
  },
  createLegendItems: function(legendClassElement, legendClassKey) {
    foss4gMap.features.forEach(function(feature) {
      if (feature.legendClass === legendClassKey) {
        foss4gMap.createLegendItem(legendClassElement, feature);
      }
    });
  },
  createLegendClass: function(legendElement, legendClassKey) {
    var legendClassElement = document.createElement('div');
    var legendHeaderElement = document.createElement('div');
    legendHeaderElement.className = 'legend-header';
    legendHeaderElement.textContent = foss4gMap.legendClasses[legendClassKey];
    legendClassElement.appendChild(legendHeaderElement);
    foss4gMap.createLegendItems(legendClassElement, legendClassKey);
    legendElement.appendChild(legendClassElement);
  },
  createLegend: function() {
    var legendElement = document.getElementById('legend');

    Object.keys(foss4gMap.legendClasses).forEach(function(key) {
      foss4gMap.createLegendClass(legendElement, key);
    })
  },
  clearMarkerPopups: function() {
    foss4gMap.features.forEach(function(feature) {
      if (feature.marker && feature.marker.getPopup().isOpen()) {
        feature.marker.getPopup().remove();
      }
    })
  },
  createPopupHtml: function(feature) {
    var htmlString =  '<div class="popup-container"><div class="popup-title">' + feature.name + '<div class="zoom-icon-container" title="Zoom to ' + feature.name + '" onclick="foss4gMap.zoomToFeatureById(\'' + feature.id + '\')"><div class="zoom-icon"></div></div></div>';
    if (feature.address) {
      htmlString +='<div class="popup-address">' + feature.address + '</div>';
    }
    htmlString += '<div class="popup-separator"></div>';
    if (feature.description) {
      htmlString +='<div class="popup-description">' + feature.description + '</div>';
    }
    if (feature.website || feature.directionsLink) {
      htmlString += '<div class="popup-website-directions-container">';
      if (feature.website) {
        htmlString += '<div class="popup-website"><a href=' + feature.website + ' target=\'_blank\' class="popup-link">Website</a></div>';
      }
      if (feature.directionsLink) {
        htmlString += '<div class="popup-directions"><a href=' + feature.directionsLink + ' target=\'_blank\' class="popup-link">Directions</a></div>';
      }
      htmlString += '</div>';
    }
    htmlString += '</div>';
    return htmlString;
  },
  createMarker: function(feature) {
    var el = foss4gMap.createMarkerElement(feature);
    var popupHtml = foss4gMap.createPopupHtml(feature);

    var popupOffsets = {
      'top': [0,0],
      'top-left': [0,0],
      'top-right': [0,0],
      'bottom': [0, -40],
      'bottom-left': [0,-40],
      'bottom-right': [0,-40],
      'left': [20,-20],
      'right': [-20,-20]
    };
    var popup  = new mapboxgl.Popup(
      { offset: popupOffsets, closeButton: false }
    ).setHTML(popupHtml);

    var marker = new mapboxgl.Marker(el, { anchor: 'bottom' })
      .setLngLat(feature.coords)
      .setPopup(popup)
      .addTo(foss4gMap.map);

    feature.marker = marker;
  },
  panToFeature: function(feature) {
    foss4gMap.map.panTo(feature.coords);
  },
  zoomToFeatureById: function (featureId) {
    foss4gMap.features.forEach(function(feature) {
      if (feature.id === featureId) {
        foss4gMap.zoomToFeature(feature);
      }
    })
  },
  zoomToFeature: function(feature) {
    var zoomCoords
    if (foss4gMap.isMobileView()) {
      zoomCoords = feature.mobileZoomCoords;
    } else {
      zoomCoords = feature.coords;
    }
    foss4gMap.map.flyTo(
      {bearing:feature.bearing, duration: 3000, pitch:feature.pitch, zoom:feature.zoom, center: zoomCoords}
    );
  },
  zoomToInitialExtent: function() {
    foss4gMap.clearMarkerPopups();
    foss4gMap.map.flyTo(
      {
        center: foss4gMap.initialCenter,
        zoom: foss4gMap.initialZoom,
        pitch: foss4gMap.initialPitch,
        bearing: foss4gMap.initialBearing
      }
    );
  },
  handleMapOnLoad: function() {
    foss4gMap.features.forEach(function(feature) {
      foss4gMap.createMarker(feature);
    })
  },
  init: function() {
    mapboxgl.accessToken = foss4gMap.token;
    foss4gMap.map = new mapboxgl.Map({
      container: 'map',
      center: foss4gMap.initialCenter,
      zoom: foss4gMap.initialZoom,
      pitch: foss4gMap.initialPitch,
      bearing: foss4gMap.initialBearing,
      style: foss4gMap.mapStyle,
      scrollZoom: false
    });

    foss4gMap.createLegend();

    foss4gMap.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    foss4gMap.map.on('load', foss4gMap.handleMapOnLoad);
  }
}

foss4gMap.init();
