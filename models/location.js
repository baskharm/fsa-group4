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
    locationLatitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false
    },
    locationLongitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false
    },

    locationValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

};
