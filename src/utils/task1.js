export const turnNumber = (start, end) => {
   const queue = [start]
   const visited = new Set()

   while (queue.length) {
      const curr = queue.shift()
      if (curr === end) {
         return true
      }
      if (visited.has(curr)) {
         continue
      }
      visited.add(curr)
      const double = curr * 2
      const appendOne = parseInt(curr.toString() + '1')
      if (double <= end) {
         queue.push(double)
      }
      if (appendOne <= end) {
         queue.push(appendOne)
      }
   }

   return false
}
