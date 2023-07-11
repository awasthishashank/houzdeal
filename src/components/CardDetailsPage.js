import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Info from '../components/Info/Info';
import Pageinfo from '../components/Pageinfo/Pageinfo';

const CardDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Info />
      <Pageinfo />
      <Footer />
    </div>
  );
};

export default CardDetailsPage;
