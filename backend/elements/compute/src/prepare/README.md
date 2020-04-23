The prepare() function prepares computations to be made upon a given guide. 
It is to be called by any process that has mutated any spots or rides.
It is to be considered atomic and will not create unnecessary computations. 
It currently doesn't cancel computations in flight as it _shouldn't_ need to, the computations stages will be marked as stale whilst they are being computed. 

Steps
1. Create computations ("scheduled") for stages ("computing") that are to be computed   
2. Update any irrelevant stages to "stale", they're corresponding spots and rides are implicitly stale now too
3. Return IDs of scheduled computations to be triggered