const debug = process.env.REACT_APP_BRANCH === "dev"

module.exports = {
  debug,
  apiUrl: debug
    ? "https://plus-api-dev.the8days.com/graphql"
    : "https://plus-api-release.the8days.com/graphql",
}
