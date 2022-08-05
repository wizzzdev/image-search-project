import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface ImageGalleryProps {
  urls: string[]
}

const ImageGallery = ({ urls }: ImageGalleryProps) => {
  return (
    <ImageList cols={3} rowHeight={164}>
      {urls.map((url) => (
        <ImageListItem key={url}>
          <img
            src={`${url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
            alt={url}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
};

export default ImageGallery;
