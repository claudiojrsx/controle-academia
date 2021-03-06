module.exports = {
  age: function (timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    // 2020 - 1993 = 26
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1
    }

    return age
  },

  date: function(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = date.getUTCMonth() + 1
    const day = date.getUTCDate()

    return `${year}-${month}-${day}`
  }
}
