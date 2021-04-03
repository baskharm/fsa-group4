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
          locationName: 'Bearcat football stadium',
          locationLatitude: 40.3515,
          locationLongitude: -94.8826
        },
        {
          locationId: 2,
          locationName: "Colden Pond",
          locationLatitude: 40.3511,
          locationLongitude: -94.882,
        },
        {
          locationId: 3,
          locationName: "Bearcat Soccer field",
          locationLatitude: 40.3513,
          locationLongitude: -94.8828,
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