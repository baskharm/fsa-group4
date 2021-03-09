const LOG = require('./logger');

module.exports = async (db) => {
  LOG.info('Starting seeder.......................');

  try {
    await db.models.Location.bulkCreate(
      [
        // first quest locations........
        { id: 11, name: 'Bearcat football stadium' },
        { id: 12, name: 'Colden Pond' },
        { id: 13, name: 'Bearcat Soccer field' },
        { id: 14, name: 'Field House' },

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