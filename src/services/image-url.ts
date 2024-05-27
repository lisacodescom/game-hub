


const getCroppedImageURL =(url:string)=>{
    if(!url) return ' '
    const index = url.indexOf('media/')
    return url.slice(0,index) + 'media/crop/600/400/' + url.slice(index+6)
}

export default getCroppedImageURL 