function createEnum(values) {
  const enumObj = {};
  for (const value of values) {
    enumObj[value] = value;
  }
  return Object.freeze(enumObj)
}

export const action_type  = createEnum(['Single', 'Double', 'Triple', 'Reaction', 'Free'])

export const size = createEnum(['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'])