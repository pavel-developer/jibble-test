module.exports = function droppedRequests(requestTime) {
   const limits = [
       { duration: 1, count: 3 },
       { duration: 10, count: 20 },
       { duration: 60, count: 60 }
   ];
   const timeObject = {};
   let count = 0;
   requestTime.forEach((requestSecond)=> {
       timeObject[requestSecond] = (timeObject[requestSecond] || 0);
       const limitsValidation = limits.map(({ duration, count}) => {
           return Object.keys(timeObject).filter((key) => +key - 1 >= requestSecond - duration)
               .reduce((acc, val) => acc + timeObject[val], 0) >= count;
       });
       if(limitsValidation.some((v) => v)){
           count++;
       }
       ++timeObject[requestSecond];
   })
   return count;
}
