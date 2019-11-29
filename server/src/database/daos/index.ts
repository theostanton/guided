import UserDao from "./UserDao";
import AddressDao from "./AddressDao";
import LocationDao from "./LocationDao";
import DayDao from "./DayDao";
import GuideDao from "./GuideDao";
import RideDao from "./RideDao";
import SpotDao from "./SpotDao";

export default {
    address: new AddressDao(),
    day: new DayDao(),
    guide: new GuideDao(),
    location: new LocationDao(),
    ride: new RideDao(),
    spot: new SpotDao(),
    stay: new SpotDao(),
    user: new UserDao(),

}