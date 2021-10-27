module.exports = (fullName) => {
  if(typeof fullName !== 'string' || fullName.length === 0) return 'Error';
  const [ firstName, lastName, other ] = fullName.trim().split(' ');
  if(!firstName || !lastName || other) return false;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
