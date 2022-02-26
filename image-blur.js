const Jimp = require('jimp');

async function imageblur()
{
    const image = await Jimp.read('image/download3.jpg');
    image.blur(3, function(error,result)
        {
        if(result)
        {
            result.write('blur-image/blur-image-3.png');
            console.log('Image blur Done');    
        }
        else
        {
            console.error(error);
        }
    })
}
imageblur()