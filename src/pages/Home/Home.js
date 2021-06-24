import React from 'react';
import {ScrollView, SafeAreaView, Image, View} from 'react-native';
import {Layout, Spinner, Text} from '@ui-kitten/components';
import {HeaderHome, Loading, ProductSlider} from '../../components';
import axios from 'axios';

// style
import styles from './Home.style';

const Index = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get('http://shayna-backend-dashboard.herokuapp.com/api/products')
      .then(res => {
        setProducts(res.data.data.data);
      })
      .catch(e => console.log('error: ', e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.layout}>
      <HeaderHome />
      <Layout style={styles.contentLayout}>
        {loading ? (
          <Loading />
        ) : (
          <ScrollView>
            <ProductSlider title="Products" items={products} />
          </ScrollView>
        )}
      </Layout>
    </SafeAreaView>
  );
};

export default Index;
