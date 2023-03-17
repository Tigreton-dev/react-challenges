import LazyImage from './LazyImage';
import "./Demo.css";

const imageTags = [
    'water',
    'snow',
    'fire',
    'rain',
    'cat',
    'dog',
    'horse',
    'lion',
    'tiger',
    'field',
    'tree',
    'palm',
    'island',
    'people',
    'hand',
    'world',
    'temple',
    'paris',
    'rome',
    'madrid',
    'lisboa',
    'berlin',
    'food',
    'drink'
];

const Demo = () => {

    return (
        <div className='lazyImage'>
            <div className='lazyImageGrid'>
                {imageTags.map((item, index) => (
                    <div key={index}>
                        <LazyImage
                            key={index}
                            src={`https://source.unsplash.com/random/300x300?${item}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Demo;



