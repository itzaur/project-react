import { useEffect, useState } from 'react';

import api from '@/api';
import ListingFilters from '@/components/ListingFilters.jsx';
import ListingList from '@/components/ListingList.jsx';
import { Separator } from '@/components/ui';

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await api.get('/api/listings');

      setListings(response.data);
    };

    fetchListings();
  }, []);

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
      <ListingList listings={listings} />
    </div>
  );
};

export default HomePage;
