module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem = { ...item }
  if (item.enhancement < 20 && item.enhancement >= 0) {
    newItem.enhancement = newItem.enhancement + 1
  }
  return { ...newItem };
}

function fail(item) {
  const newItem = { ...item }
  if (item.durability < 5) {
    newItem.durability = 0
  } else if (item.enhancement < 15) {
    newItem.durability = newItem.durability - 5
  } else if (item.enhancement > 15) {
    newItem.durability = newItem.durability - 10
    newItem.enhancement = newItem.enhancement - 1
  } else if (item.enhancement = 15) {
    newItem.durability = 5
  }
  

  return { ...newItem };
}

function repair(item) {
  const newItem = { ...item }
  newItem.durability = 100
  return { ...newItem };
}

function get(item) {
  return { ...item };
}