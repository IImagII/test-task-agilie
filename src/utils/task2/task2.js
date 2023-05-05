export const findDuplicate = (arr) => {
   let slow = arr[0];
   let fast = arr[0];

   // Пошук точки зустрічі (повторення)
   do {
      slow = arr[slow];
      fast = arr[arr[fast]];
   } while (slow != fast);

   // Пошук елемента, що повторюється
   let ptr1 = arr[0];
   let ptr2 = slow;
   while (ptr1 != ptr2) {
      ptr1 = arr[ptr1];
      ptr2 = arr[ptr2];
   }

   return ptr1;
}