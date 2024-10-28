import { useEffect, useRef, useState } from 'react';

import api from '@/api';
import ListingDetailsCard from '@/components/ListingDetailsCard';
import { Spinner } from '@/components/ui';

const ListingDetailsPage = () => {
  const [listing, setListing] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  const abortController = useRef(null);

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      setError(null);

      abortController.current = new AbortController();

      try {
        const response = api.get('/api/listings', {
          signal: abortController.current?.signal,
        });
        setListing(response.data);
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListings();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const renderListing = () => {
    if (isLoading) {
      return (
        <div className='flex justify-center'>
          <Spinner size='sm' />
        </div>
      );
    }

    if (error) {
      return <div className='text-center'>{error}</div>;
    }

    return <ListingDetailsCard listing={listing} />;
  };

  return <div className='container py-4'>{renderListing()}</div>;
};

export default ListingDetailsPage;
