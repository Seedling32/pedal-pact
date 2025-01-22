const sampleData = {
  rides: [
    {
      id: 1,
      title: 'Blue Ridge Parkway Scenic Ride',
      date: new Date('2025-04-15T08:30:00Z'),
      location: 1, // Assuming location ID for Asheville
      route_points: JSON.stringify([
        { lat: 35.5951, lng: -82.5515 }, // Downtown Asheville
        { lat: 35.5647, lng: -82.5272 }, // Blue Ridge Parkway Entrance
        { lat: 35.4985, lng: -82.5066 }, // Pisgah National Forest
      ]),
      description: 'This is a fun Blue Ridge Parkway scenic route for all ages.',
      created_by: 1, // Assuming an admin user ID
      date_created: new Date(),
    },
    {
      id: 2,
      title: 'French Broad River Greenway Loop',
      date: new Date('2025-05-10T09:00:00Z'),
      location: 1,
      route_points: JSON.stringify([
        { lat: 35.5966, lng: -82.5735 }, // Carrier Park
        { lat: 35.6112, lng: -82.5661 }, // River Arts District
        { lat: 35.5951, lng: -82.5515 }, // Downtown Asheville
      ]),
      description: 'This route is flat and follows the river. Perfect for a family cruise.',
      created_by: 1,
      date_created: new Date(),
    },
    {
      id: 3,
      title: 'Bent Creek Forest Trail Adventure',
      date: new Date('2025-06-01T07:45:00Z'),
      location: 1,
      route_points: JSON.stringify([
        { lat: 35.4979, lng: -82.6083 }, // Bent Creek Parking Lot
        { lat: 35.4875, lng: -82.5951 }, // Bent Creek Gap Road
        { lat: 35.5048, lng: -82.5841 }, // Lake Powhatan
      ]),
      description: 'This is a fun short bent creek trail.',
      created_by: 1,
      date_created: new Date(),
    },
    {
      id: 4,
      title: 'Mount Mitchell Challenge',
      date: new Date('2025-07-20T06:00:00Z'),
      location: 1,
      route_points: JSON.stringify([
        { lat: 35.6184, lng: -82.3057 }, // Blue Ridge Parkway Start
        { lat: 35.7596, lng: -82.2876 }, // Craggy Gardens
        { lat: 35.7596, lng: -82.265 }, // Mount Mitchell Summit
      ]),
      description: 'This is a short but very challenging ride!',
      created_by: 2,
      date_created: new Date(),
    },
    {
      id: 5,
      title: 'Downtown to Biltmore Estate Tour',
      date: new Date('2025-08-05T10:00:00Z'),
      location: 1,
      route_points: JSON.stringify([
        { lat: 35.5951, lng: -82.5515 }, // Downtown Asheville
        { lat: 35.5652, lng: -82.5412 }, // Biltmore Village
        { lat: 35.5402, lng: -82.5528 }, // Biltmore Estate
      ]),
      description: 'If you have never been to Asheville consider this ride to see the city.',
      created_by: 2,
      date_created: new Date(),
    },
    {
      id: 6,
      title: 'River Road Gravel Ride',
      date: new Date('2025-09-15T07:00:00Z'),
      location: 1,
      route_points: JSON.stringify([
        { lat: 35.6014, lng: -82.5686 }, // French Broad River Park
        { lat: 35.6154, lng: -82.5963 }, // Gravel Path Entry
        { lat: 35.6305, lng: -82.6127 }, // Riverside Drive
      ]),
      description: 'Short and fun gravel rip by the river.',
      created_by: 3,
      date_created: new Date(),
    },
  ],
};

export default sampleData;
