import { SectionType } from "../enums/SectionType"

export default interface BookingObject {
    tripId: number,
    spaceCraftId: number,
    classes: ClassBookingObject[]
}

interface ClassBookingObject {
    class: SectionType,
    seats: number
}