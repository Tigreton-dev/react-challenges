import LazyImage from './LazyImage';

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
        <div className='flex flex-col items-center p-8 text-center border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs h-[600px] overflow-scroll'>
            <div className='grid grid-cols-3 gap-3'>
                {imageTags.map((image, index) => (
                    <LazyImage
                        key={index}
                        key={index}
                        src={`https://source.unsplash.com/random/300x300?${image}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Demo;



