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
      allowNull: false,
      autoIncrement: true
    },
    locationName: {
      type: DataTypes.STRING(30),
      unique: true,
      required: true,
      allowNull: false,
      validate: {
        is: {
          args: /^([a-zA-Z]+\s)*[a-zA-Z]+$/i  ,
          msg:
            'Name accepts alphabets, neither numbers nor special characters.',
        },
        max: {
          args: [30],
          msg: 'Name is too long.',
        },
        min: {
          args: [5],
          msg: 'Name should have at least 5 characters.',
        },
      },
    },
    
    locationLatitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
      validate: {
        min: {
          args: -90,
          msg: 'Latitude must be -90 degrees or more.',
        },
        max: {
          args: 90,
          msg: 'Latitude must be 90 degrees or less.'
        },
      },
    },


    locationLongitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
      unique: true,
      validate: {
        min: {
          args: -180,
          msg: 'Latitude must be -180 degrees or more.',
        },
        max: {
          args: 180,
          msg: 'Latitude must be 180 degrees or less.',
        },

      }
    }
   
  });

};
