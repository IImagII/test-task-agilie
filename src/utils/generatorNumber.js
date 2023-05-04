export const generateArray = () => {
   const n = 10;
   const arr = Array.from({ length: n + 1 }, (_, i) => i + 1);


   const index = Math.floor(Math.random() * n) + 1;
   arr[n] = arr[index];

   return arr;
};
