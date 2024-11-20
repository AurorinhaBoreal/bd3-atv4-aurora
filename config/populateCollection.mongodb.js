const database = "BD3_ATV4"

const collection = "BD3_ATV4_MESSAGES"

use(database)

db.getCollection(collection).insertMany(
    [
        {
            "message": "The system crashed again. I think we’re out of options.",
            "hourSent": "17:00",
            "dateSent": "2024-11-20",
            "sender": "Rayane",
            "senderNumber": "11945328547"
        },
        {
            "message": "Wait, are you saying we should abandon the project?",
            "hourSent": "18:40",
            "dateSent": "2024-11-19",
            "sender": "Daniel",
            "senderNumber": "2130954294"
        },
        {
            "message": "We’ve been troubleshooting for weeks. Nothing is working.",
            "hourSent": "18:35",
            "dateSent": "2024-11-19",
            "sender": "Rayane",
            "senderNumber": "11945328547"
        },
        {
            "message": "But what about the client? We can’t just give up now.",
            "hourSent": "18:30",
            "dateSent": "2024-11-19",
            "sender": "Daniel",
            "senderNumber": "2130954294"
        },
        {
            "message": "I don’t think they’ll be happy, but we’re out of time and ideas.",
            "hourSent": "18:25",
            "dateSent": "2024-11-19",
            "sender": "Rayane",
            "senderNumber": "11945328547"
        },
        {
            "message": "This feels like failure. We should’ve planned better.",
            "hourSent": "18:20",
            "dateSent": "2024-11-19",
            "sender": "Daniel",
            "senderNumber": "2130954294"
        },
        {
            "message": "We did the best we could with what we had. Let’s move on.",
            "hourSent": "18:15",
            "dateSent": "2024-11-19",
            "sender": "Rayane",
            "senderNumber": "11945328547"
        },
        {
            "message": "Fine. Let’s call it. The project is officially dead.",
            "hourSent": "18:10",
            "dateSent": "2024-11-19",
            "sender": "Daniel",
            "senderNumber": "2130954294"
        },
        {
            "message": "Agreed. It’s over.",
            "hourSent": "18:05",
            "dateSent": "2024-11-19",
            "sender": "Rayane",
            "senderNumber": "11945328547"
        },
        {
            "message": "It’s over.",
            "hourSent": "18:00",
            "dateSent": "2024-11-19",
            "sender": "Daniel",
            "senderNumber": "2130954294"
        }
    ]
)