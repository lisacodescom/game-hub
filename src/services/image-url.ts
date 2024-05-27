import noImage from '../assets/GameHub Resources/Image Placeholder/no-image-placeholder-6f3882e0.webp'

const getCroppedImageURL =(url:string)=>{
    if(!url) return noImage
    const index = url.indexOf('media/')
    return url.slice(0,index) + 'media/crop/600/400/' + url.slice(index+6)
}

export default getCroppedImageURL 