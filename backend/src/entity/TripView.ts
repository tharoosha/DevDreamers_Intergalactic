import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
    expression: `
    SELECT
        trip.id as id,
        trip.departureTime as departureTime,
        trip.basePrice as minimumPrice,
        fromRegion.name as fromRegion,
        toRegion.name as toRegion,
        space_craft.model as spaceCraftModel,
        space_craft.travelMode as spaceCraftTravelMode,
        company.name as companyName
    FROM trip
    INNER JOIN region AS fromRegion ON trip.fromRegionId = fromRegion.id
    INNER JOIN region AS toRegion ON trip.toRegionId = toRegion.id
    INNER JOIN space_craft ON trip.spacecraftId = space_craft.id
    INNER JOIN company ON trip.companyId = company.id
    `
})
export class TripView {
    @ViewColumn()
    id: number;

    @ViewColumn()
    departureTime: Date;

    @ViewColumn()
    minimumPrice: number;

    @ViewColumn()
    fromRegion: string;

    @ViewColumn()
    toRegion: string;

    @ViewColumn()
    spaceCraftModel: string;

    @ViewColumn()
    spaceCraftTravelMode: string;

    @ViewColumn()
    companyName: string;
}