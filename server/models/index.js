const objection = require('objection');
const Company = require('./Company');
const Industry = require('./Industry');
const Jobpost = require('./Jobpost');
const Location = require('./Location');
const Question = require('./Question');
const User = require('./User');
const Video = require('./Video');

const formatBody = (body) => {
  return {
    id: parseInt(body.id),
    name: body.name,
    email: body.email,
    profile_img: body.profile_img,
    industry_id: parseInt(body.industry_id),
    location_id: parseInt(body.location_id)
  }
}

module.exports = {
  users: {
    get: (cb) => {
      User
        .query()
        .allowEager('[industry]')
        .eager('industry')
        .skipUndefined()
        .then((users) => { cb(null, users) })
        .catch(err => { console.log(err) })
    },
    getById: () => {

    },
    put: () => {
      // update user here
    },
    /**
     * Posts a user to the db using async/await
     */
    post: async ({ name, email, auth0_id, profile_img, github_url }, cb) => {
      const user = {
        name,
        email,
        auth0_id,
        profile_img,
        github_url
      };
      const userAlreadyExists = await User.query().where(user);
      console.log(userAlreadyExists);
      if (!userAlreadyExists.length) {
        await User
          .query()
          .insertAndFetch(user)
          .then((insertedUser) => { cb(null, insertedUser); })
          .catch(err => console.log(err));
      } else {
        console.log('here yo');
        cb(null, userAlreadyExists[0]);
      }
    },
    updateById: async ({ location, linkedin_url, id, industries }, cb) => {
      console.log(industries, 'here inside model');
      /* Patch User (async/await) */
      const user = await User
        .query()
        .patchAndFetchById(id, { location_id: location, linkedin_url })
        .where({ id })
        .then((usr) => cb(null, usr))
        .catch(e => cb(e, null));

      /* insert into location/user table, each location, each id */
      industries.map((indId) => {

      })
    }


  },

  companies: {
    getAll: (cb) => {
      Company
        .query()
        .then((companies) => { cb(null, companies) })
        .catch(err => { console.log(err) })
    },
    getById: (id, cb) => {
      Company
        .query()
        .where('id', id)
        .then((company) => { cb(null, company) })
        .catch(err => { console.log(err) })
    },
    createOne: (body, cb) => {
      Company
        .query()
        .insertAndFetch(formatBody(body))
        .then((company) => { cb(null, company) })
        .catch(err => { console.log(err) })
    },
    updateCompany: (id, cb) => {
      Company
        .query()
        .where('id', id)
        .updateAndFetch(formatBody(body))
        .then((company) => { cb(null, company) })
        .catch(err => { console.log(err) })
    },
    deleteCompany: (id, cb) => {
      Company
        .query()
        .deleteById(id)
        .then((deleted) => { cb(null, deleted) })
        .catch(err => { console.log(err) })
    }
  },

  jobposts: {
    get: (cb) => {
      Jobpost
        .query()
        .then((jobposts) => { cb(null, jobposts) })
        .catch( err => { console.log(err) })
    },
    getById: (id, cb) => {
      Jobpost
        .query()
        .where('id', id)
        .then((jobposts) => { cb(null, jobposts) })
        .catch( err => { console.log(err) })
    },
    // post: (cb) => {
    //   Jobpost
    //     .query()
    //     .insertAndFetch(req.body)
    //     .then((jobpost) => { cb(null, jobpost) })
    //     .catch(err => { console.log(err) })
    // },
    // updateById: (cb) => {
    //   Jobpost
    //     .query()
    //     .updateAndFetch(req.body)
    //     .then((jobpost) => { cb(null, jobpost) })
    //     .catch(err => { console.log(err) })
    // },
    // deleteById: () => {

    // }
  },
  questions: { 
    get: (cb) => {
      Question
        .query()
        .then((questions) => { cb(null, questions) })
        .catch(err => { console.log(err) })
    }
 },
  // videos: {
  //   get: (cb) => {
  //     Jobpost
  //       .query()
  //       .then((jobposts) => { cb(null, jobposts) })
  //       .catch( err => { console.log(err) })
  //   },
  //   getById: (id, cb) => {
  //     Jobpost
  //       .query()
  //       .where('id', id)
  //       .then((jobposts) => { cb(null, jobposts) })
  //       .catch( err => { console.log(err) })
  //   },
  //   post: (cb) => {
  //     Jobpost
  //       .query()
  //       .insertAndFetch(req.body)
  //       .then((jobpost) => { cb(null, jobpost) })
  //       .catch(err => { console.log(err) })
  //   },
  //   updateById: (cb) => {
  //     Jobpost
  //       .query()
  //       .updateAndFetch(req.body)
  //       .then((jobpost) => { cb(null, jobpost) })
  //       .catch(err => { console.log(err) })
  //   },
  //   deleteById: () => {

  //   }
  // },
  // questions: {
  //   get: (cb) => {
  //     Jobpost
  //       .query()
  //       .then((jobposts) => { cb(null, jobposts) })
  //       .catch( err => { console.log(err) })
  //   },
  //   getById: (id, cb) => {
  //     Jobpost
  //       .query()
  //       .where('id', id)
  //       .then((jobposts) => { cb(null, jobposts) })
  //       .catch( err => { console.log(err) })
  //   },
  //   post: (cb) => {
  //     Jobpost
  //       .query()
  //       .insertAndFetch(req.body)
  //       .then((jobpost) => { cb(null, jobpost) })
  //       .catch(err => { console.log(err) })
  //   },
  //   updateById: (cb) => {
  //     Jobpost
  //       .query()
  //       .updateAndFetch(req.body)
  //       .then((jobpost) => { cb(null, jobpost) })
  //       .catch(err => { console.log(err) })
  //   },
  //   deleteById: () => {

  //   }
  // }

};

