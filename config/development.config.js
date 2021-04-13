const MONGO_PORT = 27017;
module.exports = {
    url: `mongodb://${process.env.db_service_name}:${MONGO_PORT}/${process.env.db_name}`
}
