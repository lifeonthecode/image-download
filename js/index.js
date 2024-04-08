
const downloadBtn = document.querySelector('.download_btn');


// initial count image 0
let imageCount = 0;

// downloadBtn click event function 
downloadBtn.addEventListener('click', () => {
    // console.log('clicked')


    // get html element imageUrl 
    const imageUrl = document.querySelector('.image_url').value;
    // empty check imageUrl 
    if(!imageUrl) {
        // get html element 
        const message = document.querySelector('.message');
        // set error message in message element 
        message.innerHTML = 'please enter an image URL?';

        //error message remove 
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
    };

    // image dynamically path add Image() object
    const image = new Image();
    image.crossOrigin = "Anonymous";

    // image load function 
    image.onload = () => {
        // create canvas element 
        const canvas = document.createElement('canvas');

        // image width and height 
        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext('2d');
        // image drawing 
        ctx.drawImage(image, 0, 0);

        // get html element image_type 
        const image_type = document.querySelector('.image_type').value;

        // default image type set 
        const imageType = image_type === "" ? "png" : image_type;

        const imageDataUrl = canvas.toDataURL(imageType);

        // create anchor element 
        const link = document.createElement('a');

        // set anchor href url 
        link.href = imageDataUrl;

        // get html image_name element 
        const image_name = document.querySelector('.image_name').value;
        
        // default image name 
        const imageName = image_name === "" ? `image-download${imageCount++}` : image_name;

        // image download name 
        link.download = imageName;


        link.click();


    }

    // provide error message 
    image.onerror = () => {
        console.log('please you are error debug');
    }

    // imageUrl set  in image src
    image.src = imageUrl;

    // input data clear 
    setTimeout(() => {
        document.querySelector('.image_type').value = "";
        document.querySelector('.image_name').value = "";
        document.querySelector('.image_url').value = "";
    }, 3500)
})







