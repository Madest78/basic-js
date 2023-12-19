const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  function extractNames(members) {
    if (!Array.isArray(members)) {
      return [];
    }
    return members.filter(member => typeof member === 'string').map(name => name.trim());
  }

  function createTeam(names) {
    let initials = names.reduce((acc, name) => {
      if (name.length > 0) {
        acc.push(name[0].toUpperCase());
      }
      return acc;
    }, []);

    return initials.sort().join('');
  }

  const names = extractNames(members);
  return createTeam(names);
}

module.exports = {
  createDreamTeam
};
