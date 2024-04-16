export class CreateRouteDto {
   name: string;
   routeDate: Date;
   successful: boolean;
   problemDescription: string;
   comments: string;
   startLatitude: number;
   startLongitude: number;
   endLatitude: number;
   endLongitude: number;
   vehicleId: number;
   assignedUserId: number;
}
