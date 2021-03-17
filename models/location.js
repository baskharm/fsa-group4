/**
 *  Location model
 *  It describes each attribute.
 *
 * @author Rajeshwari Rudravaram  <s538361@nwmissouri.edu>
 *
 * 
 */
module.exports = (db, DataTypes) => {
  db.define('Location', {
    locationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    locationName: {
      type: DataTypes.STRING(30),
      unique: true,
      required: true,
      allowNull: false
    },
    locationLatitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
      validate: { min: -90, max: 90 }
    },
    locationLongitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
      validate: { min: -180, max: 180 }
    },

    radius: {
      type: DataTypes.INTEGER,
      required: true,
    }
  });

};
