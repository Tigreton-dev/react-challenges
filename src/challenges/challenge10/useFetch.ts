import { useState, useEffect } from "react";
import { getData, getImage } from "./fetchData";

interface Ierror {
    hasError: boolean;
    message: string;
}

export const useFetch = (url: string) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Array<any>>([]);
    const [error, setError] = useState<Ierror>({
        hasError: false,
        message: "",
    });

    const fetchData = (url: string) => {
        setLoading(true);
        setTimeout(() => {
            getData(url)
                .then((data) => setData(data.results))
                .then(() => setLoading(false))
                .catch(handleError);
        }, 1000);
    };

    useEffect(() => fetchData(url), []);

    const handleError = (err: any) => {
        setLoading(false);
        setError({ hasError: true, message: err.message });
    };

    return { loading, data, error, fetchData };
};

export const useImageFetch = (url: string) => {
    const [imageLoading, setLoading] = useState(false);
    const [image, setImage] = useState();
    const [imageError, setError] = useState<Ierror>({
        hasError: false,
        message: "",
    });

    const fetchImage = (url: string) => {
        setLoading(true);
        setTimeout(() => {
            getImage(url)
                .then((data) => setImage(data))
                .then(() => setLoading(false))
                .catch(handleError);
        }, 1000);
    };

    useEffect(() => fetchImage(url), []);

    const handleError = (err: any) => {
        setLoading(false);
        setError({ hasError: true, message: err.message });
    };

    return { imageLoading, image, imageError, fetchImage };
};
