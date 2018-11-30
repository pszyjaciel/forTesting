function drawLine(doc, start, stop) {
var startPoint = new PathPointInfo();
startPoint.anchor = start;
startPoint.leftDirection = start;
startPoint.rightDirection = start;
startPoint.kind = PointKind.CORNERPOINT;
var stopPoint = new PathPointInfo();
stopPoint.anchor = stop;
stopPoint.leftDirection = stop;
stopPoint.rightDirection = stop;
stopPoint.kind = PointKind.CORNERPOINT;
var spi = new SubPathInfo();
spi.closed = false;
spi.operation = ShapeOperation.SHAPEXOR;
spi.entireSubPath = [startPoint, stopPoint];
var line = doc.pathItems.add("Line", [spi]);
line.strokePath(ToolType.PENCIL);
line.remove();
};
//drawLine(app.activeDocument, [100,100], [200,200]);

var j = 20;
for (i=10; i<16; i++) {
    drawLine(app.activeDocument, [(i*10),0], [(i*10),800]);
    drawLine(app.activeDocument, [0, (j*10)], [600, (j*10)]);
    j++;
}
