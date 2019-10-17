// Shuts up error about --isolated modules
import "react";

// Uncomment this: ~20KB total size of bundles
import moment, { Moment } from "moment";
const m: Moment = moment("2019");

// Uncomment this: ~4KB total size of bundles
// import { Moment } from "moment";
// const m: ReturnType<Moment["toString"]> = "ha ha ha...";

// Uncomment this: ~4KB, same as above
// const m: ReturnType<import("moment").Moment["toString"]> = "ha ha ha...";

console.log("Hello, world!");
