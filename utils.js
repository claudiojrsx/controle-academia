module.exports = {
  age: function (timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    // 2020 - 1993 = 26
    let age = today.getUTCFullYear() - birthDate.getUTCFullYear()
    const month = today.getUTCMonth() - birthDate.getUTCMonth()

    if (month < 0 || month == 0 && today.getUTCDate() < birthDate.getUTCDate) {
      age = age - 1
    }

    return age
  }
}
