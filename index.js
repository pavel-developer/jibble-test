const socialGraphs = require('./socialGraphs');
const droppedRequests = require('./droppedRequests');
const scInputFirst = [2,2,2,2];
const scInputSecond = [3,3,3,3,3,1,3];
const scInputThird = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 11, 11, 11, 11];

console.group('SOCIAL GRAPHS: ');
console.log('INPUT: ', scInputFirst.toString());
console.log('OUTPUT: ');
socialGraphs(scInputFirst);
console.log('--------');
console.log('INPUT: ', scInputSecond.toString());
console.log('OUTPUT: ');
socialGraphs(scInputSecond);
console.log('--------');
console.groupEnd();
console.group('DROPPED REQUESTS: ');
console.log('INPUT: ', scInputThird.toString());
console.log('OUTPUT: ',droppedRequests(scInputThird));
