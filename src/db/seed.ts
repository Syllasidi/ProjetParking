import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /** Insertion de données dans City */
  const cities = await prisma.city.createMany({
    data: [
      { name: 'Aix-en-Provence', slug: 'aix-en-provence', country: 'France', latitude: 43.533329, longitude: 5.43333 },
      { name: 'La Spezia', slug: 'la-spezia', country: 'Italy', latitude: 44.238366, longitude: 9.6912326 },
      { name: 'Aix-la-Chapelle', slug: 'aix-la-chapelle', country: 'Germany', latitude: 50.776351, longitude: 6.083862 },
      { name: 'San Cristóbal de La Laguna', slug: 'san-cristobal-de-la-laguna', country: 'Spain', latitude: 28.4871807, longitude: -16.313879 },
      { name: 'Newcastle upon Tyne', slug: 'newcastle-upon-tyne', country: 'England', latitude: 54.9738474, longitude: -1.6131572 }
    ]
  });

  /** Insertion de données dans Parking */
  const parkings = await prisma.parking.createMany({
    data: [
      { name: 'Parking A', numberOfPlaces: 100, opened: true, cityId: 1, hourlyRate: 4.5, latitude: 43.533329, longitude: 5.43333 },
      { name: 'Parking B', numberOfPlaces: 50, opened: true, cityId: 2, hourlyRate: 3.0, latitude: 44.238366, longitude: 9.6912326 },
      { name: 'Parking C', numberOfPlaces: 80, opened: true, cityId: 2, hourlyRate: 2.5, latitude: 44.238366, longitude: 9.6912326 },
      { name: 'Parking D', numberOfPlaces: 40, opened: true, cityId: 3, hourlyRate: 2.8, latitude: 50.776351, longitude: 6.083862 },
      { name: 'Parking E', numberOfPlaces: 70, opened: true, cityId: 4, hourlyRate: 3.1, latitude: 28.4871807, longitude: -16.313879 },
      { name: 'Parking F', numberOfPlaces: 60, opened: true, cityId: 5, hourlyRate: 2.4, latitude: 54.9738474, longitude: -1.6131572 },
      { name: 'Parking G', numberOfPlaces: 90, opened: true, cityId: 5, hourlyRate: 3.4, latitude: 54.9738474, longitude: -1.6131572 }
    ]
  });

  /** Insertion de données dans Spot */
  const spots = await prisma.spot.createMany({
    data: [
      { parkingId: 1 },
      { parkingId: 2 },
      { parkingId: 3 },
      { parkingId: 4 }
    ]
  });

  /** Insertion de données dans Park */
  const parks = await prisma.park.createMany({
    data: [
      { id: 'PARK1', startedAt: new Date(1730448000000), endedAt: new Date(1730455200000), vehicleNumberPlate: 'AB123CD', spotId: 1, price: 5.0 },
      { id: 'PARK2', startedAt: new Date(1730538000000), endedAt: new Date(1730545200000), vehicleNumberPlate: 'XY456ZT', spotId: 2, price: 6.0 },
      { id: 'PARK3', startedAt: new Date(1730628000000), endedAt: new Date(1730635200000), vehicleNumberPlate: 'JK789LM', spotId: 3, price: 4.0 }
    ]
  });
}

main()
  .then(async () => {
    /** Fermer la connexion Prisma */
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
