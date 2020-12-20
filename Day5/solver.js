var fs = require('fs');
const { cpuUsage } = require('process');

const data = fs.readFileSync('input.txt', 'utf8').toString().split(/\r\n/);

seatID = data.map((code)=>{
    let rowColumn = getRowColumn(code);
    return rowColumn[0] * 8 + rowColumn[1];
});

console.log(`highest seat ID: ${Math.max(...seatID)}`);


  function getRowColumn(code){
      const bsp = code.split('');
      let rowMinMax = [0,127];
      let columnMinMax = [0,7];

      bsp.map((key)=>{
          switch (key){
            case 'L':
                columnMinMax[1] = Math.floor(columnMinMax[0] + (columnMinMax[1] - columnMinMax[0])/2);
                break;
            case 'R':
                columnMinMax[0] = Math.ceil(columnMinMax[0] + (columnMinMax[1] - columnMinMax[0])/2);
                break;
            case 'F':
                rowMinMax[1] = Math.floor(rowMinMax[0] + (rowMinMax[1] - rowMinMax[0])/2);
                break;
            case 'B':
                rowMinMax[0] = Math.ceil(rowMinMax[0] + (rowMinMax[1] - rowMinMax[0])/2);
                break;
                }
      });
    
    return [rowMinMax[0],columnMinMax[0]];
   
  }