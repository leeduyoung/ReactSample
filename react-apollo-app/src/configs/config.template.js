const debug = process.env.REACT_APP_BRANCH === "dev"

module.exports = {
  debug,
  apiUrl: debug
    ? "[devURL]"
    : "[releaseURL]",
}
