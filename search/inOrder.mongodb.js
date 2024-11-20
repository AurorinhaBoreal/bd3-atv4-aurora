const database = "BD3_ATV4"

const collection = "BD3_ATV4_MESSAGES"

use(database)

db.getCollection(collection).find().sort({dateSent: 1, hourSent: 1})