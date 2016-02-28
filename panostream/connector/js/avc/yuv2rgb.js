function clamp(n,low,high){
    if(n<low){return(low);}
    if(n>high){return(high);}
}

var yuv2ImageData = function(yuv, imageData) {
    var width = imageData.width;
    var height = imageData.height;
    var outputData = imageData.data;

    yOffset = 0;
    uOffset = width * height;
    vOffset = width * height + (width*height)/4;
    for (var h=0; h<height; h++) {
        for (var w=0; w<width; w++) {
            ypos = w + h * width + yOffset;

            upos = (w>>1) + (h>>1) * width/2 + uOffset;
            vpos = (w>>1) + (h>>1) * width/2 + vOffset;

            y = yuv[ypos];
            u = yuv[upos] - 128;
            v = yuv[vpos] - 128;

            // R=clamp(~~(y+1.4075*v),0,255);
            // G=clamp(~~(y-0.3455*u-0.7169*v),0,255);
            // B=clamp(~~(y+1.7790*u),0,255);
            R =  (y + 1.371*v);
            G =  (y - 0.698*v - 0.336*u);
            B =  (y + 1.732*u);

            outputData_pos = w*4 + width*h*4;
            outputData[0+outputData_pos] = R;
            outputData[1+outputData_pos] = G;
            outputData[2+outputData_pos] = B;
            outputData[3+outputData_pos] = 255;
        }
    }
};
