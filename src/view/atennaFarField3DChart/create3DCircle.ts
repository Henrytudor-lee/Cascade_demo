const option = {
 tooltip: {},
 xAxis3D: {},
 yAxis3D: {},
 zAxis3D: {},
 grid3D: {},
 series: [
   {
     type: 'line3D',
     data: generateCirclePoints(1, 100), // 调用生成圆上点的函数
     lineStyle: {
       width: 2,
       color: 'rgb(0, 0, 0)', // 圆的线颜色
       opacity: 1
     },
     emphasis: {
       lineStyle: {
         opacity: 1
       }
     }
   }
 ]
};

function generateCirclePoints(radius: number, count: number) {
 var points = [];
 var angle = (Math.PI * 2) / count; // 计算每个点之间的角度间隔

 for (var i = 0; i < count; i++) {
   var x = radius * Math.cos(i * angle); // 计算 x 坐标
   var y = radius * Math.sin(i * angle); // 计算 y 坐标
   var z = 0; // z 坐标设为0，生成平面圆

   points.push([x, y, z]);
 }

 return points;
}
