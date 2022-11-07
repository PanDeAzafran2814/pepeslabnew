import React from 'react';
import dataProject from '../assets/fake-data/dataProject';
import PageTitle from '../components/pagetitle';
import Project from '../features/project/nftitem';
import { Network, Alchemy } from "alchemy-sdk";
import { useState } from 'react';


function NftItem(pops) {
    const [datacollrection, Setdatacollection]=useState();
    const settings = {
        apiKey: "DaVXPztsrU8prbCt56HOAeQWsELaL7_P", // Replace with your Alchemy API Key.
        network: Network.ETH_MAINNET, // Replace with your network.
      };

      const alchemy = new Alchemy(settings);

      alchemy.nft
        .getNftsForContract("0x0046ac5ad2de7d5c9aebecf67751cb7e0865a0eb")
        .then(response=>{
            Setdatacollection(response)
        })

console.log(datacollrection)
    return (
        <div className='page-nft'>
            <PageTitle title='NFT ITEM’S' />

            <Project data={dataProject} />
        </div>
    );
}

export default NftItem;