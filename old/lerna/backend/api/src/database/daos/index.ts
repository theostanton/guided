import UserDao from "./UserDao";
import LocationDao from "./LocationDao";
import GuideDao from "./GuideDao";
import RideDao from "./RideDao";
import StayDao from "./StayDao";

export default {
    guide: new GuideDao(),
    location: new LocationDao(),
    ride: new RideDao(),
    stay: new StayDao(),
    user: new UserDao(),

}