export const findOptimalDiscCombination = (weight) => {
   function convertToKg(lbs) {
      // Конвертуємо вагу з фунтів в кілограми
      return lbs * 0.453592;
   }

   const availableDiscWeights = [0.5, 1, 2.5, 5, 10, 15, 20, 25].concat(
      [10, 25, 35, 45].map((lbs) => convertToKg(lbs))
   );
   const maxDiscsPerSide = 12;

   let optimalCombination = null;
   let minWeightDifference = Number.MAX_VALUE;

   // Перебираємо всі можливі комбінації дискових навантажувачів
   for (let i = 0; i < availableDiscWeights.length; i++) {
      for (let j = i; j < availableDiscWeights.length; j++) {
         for (let k = j; k < availableDiscWeights.length; k++) {
            for (let l = k; l < availableDiscWeights.length; l++) {
               const totalWeight =
                  2 *
                  (availableDiscWeights[i] +
                     availableDiscWeights[j] +
                     availableDiscWeights[k] +
                     availableDiscWeights[l]) +
                  20;
               const weightDifference = totalWeight - weight;

               // Перевіряємо, чи задовольняє вага на штанзі умови задачі
               if (
                  weightDifference > 0 &&
                  weightDifference < minWeightDifference &&
                  i + j + k + l <= 2 * maxDiscsPerSide
               ) {
                  minWeightDifference = weightDifference;
                  optimalCombination = {
                     plates: [
                        availableDiscWeights[i],
                        availableDiscWeights[j],
                        availableDiscWeights[k],
                        availableDiscWeights[l]
                     ],
                     totalWeight: totalWeight
                  };
               }
            }
         }
      }
   }

   return optimalCombination;
}
