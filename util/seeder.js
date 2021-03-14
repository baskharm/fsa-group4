const LOG = require('./logger');

module.exports = async (db) => {
  LOG.info('Starting seeder.......................');

  try {
    await db.models.Location.bulkCreate(
      [
        // list of locations
        { id: 1, name: 'Colden Pond',lat: 40.35112,long: -94.88220,radius:25 },
        { id: 2, name: 'Horizons West Apartments',lat:41.31447 ,long: -95.05660, radius:25 },
        { id: 3, name: 'B.D Owens Library' ,lat: 40.35380,long: -94.88598, radius:25},


    ],
    { validate: true } // add options object to call new model validators
  );
  const num = await db.models.Location.count();
  LOG.info(`Seeded ${num} locations.`);
} catch (err) {
  LOG.error(`ERROR: Location seeding - ${err.message}`);
}

LOG.info('Done with seeder................');

  return db;
};