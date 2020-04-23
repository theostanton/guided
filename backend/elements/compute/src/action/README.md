The action() functioon handles one computation to create one stage. Taking it from "computing" to "ready"
One or many rides will be created, with new ride ID. Each ride having a corresponding geojson uploaded to s3. 
If the stage is split in to multiple rides, unlocked spots will be created at intervals of roughly of the guides maxHoursPerRide.
It has a dumb try/catch all that sets computation to "failed" if anything goes wrong. Could do with smartening up. 

1. Set computation to "computing"
2. Generate Google directions through from stages fromSpot to stages toSpot for the guides transport type
3. 