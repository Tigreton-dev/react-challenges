import { useFetch, useImageFetch } from './useFetch'

const GET_DATA_URL = 'https://randomuser.me/api/?results=20';
const GET_IMAGE_URL = 'https://picsum.photos/200'
// const POST_DATA_URL = 'https://api.github.com/gists'

export default function Demo() {
    const { loading, data, error, fetchData } = useFetch(GET_DATA_URL)
    const { imageLoading, image, imageError, fetchImage } = useImageFetch(GET_IMAGE_URL)

    if (loading || imageLoading) return (<div className="flex flex-col items-center p-8 text-center border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs min-h-[400px]"><h1>Loading...</h1></div >)

    return (
        <div className="flex flex-col items-center p-8 text-center border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs min-h-[400px]">
            {error.hasError && <h1>{error.message}</h1>}
            {imageError.hasError && <h1>{imageError.message}</h1>}
            {data.map((user: any) => <p key={user.email}>{user.name.first}</p>)}
            <img alt="" src={image} width="auto" height='auto' />
            <button onClick={() => fetchData(GET_DATA_URL)} className="bg-blue-500 p-2 rounded-md m-5">Update Data</button>
            <button onClick={() => fetchImage(GET_IMAGE_URL)} className="bg-blue-500 p-2 rounded-md m-5">Update Image</button>
        </div>
    );
}
