'use strict'

module.exports = function (array, reverse) {
  var sorted = true
  var index = 0
  var current
  var nextItem
  while (sorted && index < array.length - 1) {
    if (Number(array[index])) {
      current = Number(array[index])
      nextItem = Number(array[index + 1])
    } else {
      current = array[index]
      nextItem = array[index + 1]
    }
    sorted = reverse ? current >= nextItem : current <= nextItem
    index++
  }
  return sorted
}
