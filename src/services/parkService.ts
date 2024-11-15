/**
 * 
 * @param hourlyRate ]
 * @param durationInHours 
 * @returns number le montant d'un stationnemnt  
 */
export const calculateParkingFee = (hourlyRate: number, durationInHours: number) => {
    return hourlyRate * durationInHours;
  };
  