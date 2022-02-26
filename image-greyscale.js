const Jimp = require('jimp');

 //  Image resize and greyscale

var image = 'image/images5.jpg'

async function imagep()
{
Jimp.read(image)
.then(result=>{
   return result
//    .resize(700, 360)
    .quality(60)      //must be a number 0 - 100
    .greyscale()
    .write('blur-image/jimp-image-8.jpg');
})
.catch(err=>
    {
        console.error(err);
    })
}
imagep();
console.log('Done');