/**
 * Location controller
 *  Handles requests related to location (see routes)
 *
 * @author Bhaskar reddy Minupuri <S538310@nwmissouri.edu>
 * @author Rajeshwari Rudravaram <s538361@nwmissouri.edu>
 */

const LOG = require('../util/logger');
const db = require('../models/index')();

const tabTitle = 'Locations';

// FUNCTIONS TO RESPOND WITH JSON DATA  ----------------------------------------

// GET all JSON
module.exports.findAll = async (req, res) => {
  (await db).models.Location.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: (await db).models.Location,
        attributes: ['id', 'name'],
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving all.',
      });
    });
};

// GET one JSON by ID
module.exports.findOne = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// HANDLE EXECUTE DATA MODIFICATION REQUESTS -----------------------------------

// POST /save
module.exports.saveNew = async (req, res) => {
  try {
    const context = await db;
    await context.models.Location.create(req.body);
    return res.redirect('/location');
  } catch (err) {
    return res.redirect('/location');
  }
};
try {
  const context = await db;
  await context.models.Location.create(req.body);
  return res.redirect("/aboutp");
} catch (err) {
  return res.redirect("/aboutp");
};

// POST /save/:id
module.exports.saveEdit = async (req, res) => {

  module.exports.showIndex = async (req, res) => {
    (await db).models.Location.findAll()
      .then((data) => {
        res.locals.locations = data;
        res.render("location", { title: tabTitle, res });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error retrieving all.",
        });
      });
  };
  try {
    const reqId = parseInt(req.params.id, 10);
    const context = await db;
    const updated = await context.models.Location.update(req.body, {
      where: { id: reqId },
    });
    LOG.info(`Updated: ${JSON.stringify(updated)}`);
    return res.redirect('/location');
  } catch (err) {
    return res.redirect('/location');
  }
};

// POST /delete/:id
module.exports.deleteItem = async (req, res) => {
  try {
    const reqId = parseInt(req.params.id, 10);
    const deleted = (await db).models.Location.destroy({
      where: { id: reqId },
    });
    if (deleted) {
      return res.redirect('/location');
    }
    throw new Error(`${reqId} not found`);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
module.exports.showIndex = async (req, res) => {
  (await db).models.Location.findAll()
    .then((data) => {
      res.locals.locations = data;
      res.render('location/index.ejs', { title: tabTitle, res });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error retrieving all.',
      });
    });
};

// GET /create
module.exports.showCreate = async (req, res) => {
  // create a temporary item and add it to the response.locals object
  // this also provides a place to pass any validation errors to the view
  // Important! attributes must match those defined in the model
  const tempItem = {
    name: 'LocationName',
  };
  res.locals.location = tempItem;
  res.render('location/create.ejs', { title: tabTitle, res });
};

// GET /delete/:id
module.exports.showDelete = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.locals.location = data;
      if (data) {
        res.render('location/delete.ejs', { title: tabTitle, res });
      } else {
        res.redirect('location/');
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// GET /details/:id
module.exports.showDetails = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.locals.location = data;
      res.render('location/details.ejs', { title: tabTitle, res });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};

// GET /edit/:id
module.exports.showEdit = async (req, res) => {
  const { id } = req.params;
  (await db).models.Location.findByPk(id)
    .then((data) => {
      res.locals.location = data;
      res.render('location/edit.ejs', { title: tabTitle, res });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving item with id=${id}: ${err.message}`,
      });
    });
};
