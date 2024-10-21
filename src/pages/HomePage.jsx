import { useEffect, useState } from 'react';

import api from '@/api';
import ListingFilters from '@/components/ListingFilters.jsx';
import ListingList from '@/components/ListingList.jsx';
import { Separator, Spinner } from '@/components/ui';

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);

      const response = await api.get('/api/listings');
      setListings(response.data);

      setIsLoading(false);
    };

    fetchListings();
  }, []);

  const renderListingList = () => {
    if (isLoading) {
      return (
        <div className='flex justify-center'>
          <Spinner size='sm' />
        </div>
      );
    }

    return <ListingList listings={listings} />;
  };

  const handleFilters = (filters) => {
    // const { dates, guests, search } = filters;
    // // Resets filters by using static listings
    // let filteredListings = staticListings;
    // // Handles date range
    // if (dates) {
    //   filteredListings = filteredListings.filter((listing) =>
    //     isListingAvailable(listing, dates),
    //   );
    // }
    // // Handles guests
    // if (guests) {
    //   filteredListings = filteredListings.filter(
    //     (listing) => guests <= listing.maxGuests,
    //   );
    // }
    // // Handles search
    // if (search) {
    //   filteredListings = filteredListings.filter((listing) =>
    //     listing.name.toLowerCase().includes(search.toLowerCase()),
    //   );
    // }
    // setListings(filteredListings);
  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      {renderListingList()}
    </div>
  );
};

export default HomePage;
