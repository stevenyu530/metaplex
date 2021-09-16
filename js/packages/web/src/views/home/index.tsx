import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { AuctionListView } from './auctionList';
import { SetupView } from './setup';

export const HomeView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
    <div className="intro">
      <div>
        <div className="intro-word"> Mooncake </div>
        <div> A Chinese bakery product traditionally eaten during the <a href="https://www.google.com/search?q=mid-autumn+festival">Mid-Autumn Festival</a>. Often been gifted to family and friends to give best wishes. </div>
      </div>
      <div>
        <div className="intro-word"> Mooncake NFT </div>
        <div> A humble virtual (and <a href="https://explorer.solana.com/">on chain</a>) mooncake. <i>Dairy free</i>. <i>Zero calorie</i>. Keep you good mood when added to your wallet. Also a great gift for your (crypto) friends. </div>
      </div>
    </div>
      {showAuctions ? <AuctionListView /> : <SetupView />}
    </Layout>
  );
};
