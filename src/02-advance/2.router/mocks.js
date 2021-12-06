const createUser = (id, name) => {
  return {
    id, name, description: `description-for-${name}`
  }
}

export const USERS = [
  createUser('1','Valentyn'),
  createUser('2','Pavel'),
  createUser('3','Alex'),
  createUser('4','Roma'),
  createUser('5','Artem'),
]