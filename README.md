# Project

This repository revolves around mongoDB and his feature of easily storing files through non relational architecture

# Structure

--|
  |- config -|
  |          |- createDCollection    # Create the collection that is used
  |          |- populateDCollection  # Populate the collection using the data.json
  |          |- removeData           # Removes the data from the collection
  |          |- data                 # Store the messages
  |
  |- search -|
             |- inOrder              # Show the messages from the newest to the oldest
             |- inInvertedOrder      # Show the messages from the odlest to the newest
             |- specificPart         # Show a message that has a specific word or phrase