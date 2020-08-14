module.exports = function socialGraphs(arr){
    const groupsByLengthObj = arr.reduce((groups, count, i) => {
        groups[count] = groups[count] || [];
        groups[count].push(i);
        return groups;
    },{});
    const validGroups = [];
    Object.entries(groupsByLengthObj).forEach(([groupCount, userIds]) => {
            const groupCountNumber = +groupCount;
            for(let i = 0; i < userIds.length; i += groupCountNumber){
                const offset = i + groupCountNumber;
                const arrayToDisplay = userIds.slice(i, offset);
                if(arrayToDisplay.length === groupCountNumber){
                    validGroups.push(arrayToDisplay);
                }
            }
    });
    validGroups.sort((a,b)=> a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1)
        .forEach((group)=> console.log(group.join(' ')));
}
