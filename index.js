let name = require('../utilities/utils/index')
function getPeopleInCity(name) {
  for (i in name) {
    console.log(name[i].firstName)
  }
}
getPeopleInCity(name)
module.exports = getPeopleInCity
