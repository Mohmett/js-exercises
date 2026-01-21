
function changeImage(){
    const image=document.querySelector("#image");
    // console.log(image);
    const url=prompt("Enter Your Image's URL")
    image.setAttribute('src',url);

    const width=prompt("Choose appropriate Width")
    image.style.width=width;

     const height=prompt("Choose appropriate height")
    image.style.height=height;

    const border=prompt("Choose Your Border")
    image.style.border=`5px solid ${border}`;

    const padding=prompt("Choose Padding Size");
    image.style.padding=padding;

    const background=prompt("Choose Background Color");
    image.style.backgroundColor=background;
}
