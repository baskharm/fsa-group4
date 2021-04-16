/**
 * Seed the database with sample data.
 *
 * During development, drop & recreate the database on startup.
 *
 * Only as we move into production (and the app is stable) will we
 * begin to store real data.
 *
 * *
 */

const LOG = require("./logger");

module.exports = async (db) => {
  LOG.info("Starting seeder.......................");

  try {
    const syncResult = await db.sync({ force: true });
    LOG.info(`Recreated all tables: ${syncResult}`);
  } catch (err) {
    LOG.error(`ERROR: on sync process - ${err.message}`);
  }
  try {
    await db.models.Location.bulkCreate(
      [
        // list of locations........
        {
          locationId: 1,
          locationName: 'B D Owens Library',
          locationLatitude: 40.353523,
          locationLongitude: -94.886021
        },
        {
          locationId: 2,
          locationName: 'Colden Pond',
          locationLatitude: 40.35111268683,
          locationLongitude: -94.8822024375
        },
        {
          locationId: 3,
          locationName: 'Horizons West Apartments',
          locationLatitude: 41.3144774880,
          locationLongitude: -95.0566091797
        },



      ],
      { validate: true } // add options object to call new model validators
    );
    const num = await db.models.Location.count();
    LOG.info(`Seeded ${num} locations.`);
  } catch (err) {
    LOG.error(`ERROR: Location seeding - ${err.message}`);
  }

  LOG.info("Done with seeder................");

  return db;
};