import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useGTMPageView = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'pageview',
                page: location.pathname,
            });
        }
    }, [location]);
};

export default useGTMPageView;