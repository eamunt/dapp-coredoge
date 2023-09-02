/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-await-in-loop */
import { getAddress } from "utils/addressHelpers";
import contracts from "config/constants/contracts";
import multicall from "utils/multicall";
import marketPlaceAbi from "config/abi/marketPlaceAbi.json"
import bighunterToken from "config/abi/bighunterToken.json"
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { set } from "lodash";

export const FetchDataRunBoxIsOpen = (idMysteryBox, chainId: number) => {
  const [dataBox, setDataBox] = useState({
    tokenId: 0,
    type: 0
  });
  useEffect(() => {
    const fetchDataBox = async () => {
      try {
        const callBoxId = [
          {
            address: getAddress(contracts.mysteryBox, chainId),
            name: 'mysteryBoxNftMap',
            params: [idMysteryBox]
          }
        ]
        const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();
        const callBoxType = [
          {
            address: getAddress(contracts.mysteryBox, chainId),
            name: 'getBoxTypeRunTogether',
            params: [index]
          }
        ]
        const boxType = await multicall(marketPlaceAbi, callBoxType, chainId);
        setDataBox({
          tokenId: new BigNumber(idRunBox.toString()).toNumber(),
          type: new BigNumber(boxType.toString()).toNumber()
        })
      } catch (e) {
        console.log(e)
      }
    }
    fetchDataBox()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idMysteryBox])
  return { dataBox }
}

export const FetchDataNft = (account: string, chainId: number) => {
  const [nftBalance, setNftBalance] = useState(0);
  useEffect(() => {
    const fetchDataBox = async () => {
      try {
        const callBoxId = [
          {
            address: getAddress(contracts.coreMarketPlace, chainId),
            name: 'balanceOf',
            params: [account]
          }
        ]
        const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();

        setNftBalance(index)
      } catch (e) {
        console.log(e)
      }
    }
    if (account) {
      fetchDataBox()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])
  return { nftBalance }
}


export const GetAllowance = (account: string, chainId, getRequestApproval: any) => {
  const [allowance, setAllowance] = useState(0);
  const spender = getAddress(contracts.coreMarketPlace, chainId);
  useEffect(() => {
    const fetchDataBox = async () => {
      try {
        const callBoxId = [
          {
            address: "0x585b34473CEac1D60BD9B9381D6aBaF122008504",
            name: 'allowance',
            params: [account, spender]
          }
        ]
        const idRunBox = await multicall(bighunterToken, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();

        setAllowance((index / 1e18))
      } catch (e) {
        console.log(e)
      }
    }
    if (account && !getRequestApproval) {
      fetchDataBox()
    }
    if (getRequestApproval) {
      fetchDataBox()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, getRequestApproval])
  return { allowance }
}

export const GetBalanceOfToken = (account: string, chainId) => {
  const [balanceOfToken, setBalanceOfToken] = useState(0);
  useEffect(() => {
    const fetchDataBox = async () => {
      try {
        const callBoxId = [
          {
            address: "0x585b34473CEac1D60BD9B9381D6aBaF122008504",
            name: 'balanceOf',
            params: [account]
          }
        ]
        const idRunBox = await multicall(bighunterToken, callBoxId, chainId);
        const index = new BigNumber(idRunBox.toString()).toNumber();

        setBalanceOfToken((index / 1e18))
      } catch (e) {
        console.log(e)
      }
    }
    if (account) {
      fetchDataBox()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])
  return { balanceOfToken }
}


export const GetPriceNfts = (chainId: number) => {
  const [ListPrices, setListPrices] = useState([]);
  useEffect(() => {
    const fetchDataBox = async () => {
      const data = [];
      for (let i = 0; i < 3; i++) {
        try {
          const callBoxId = [
            {
              address: getAddress(contracts.coreMarketPlace, chainId),
              name: 'NFT_PRICE',
              params: [i]
            }
          ]
          const idRunBox = await multicall(marketPlaceAbi, callBoxId, chainId);
          const index = new BigNumber(idRunBox.toString()).toNumber();
          data.push((index / 1e18));
        }
        catch (e) {
          console.log("try catch error")
          console.log(e)
        }
      }
      setListPrices(() => {
        return [...data]
      });
    }
    fetchDataBox();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { ListPrices }
}

export const SetPricesNft = (ListPrices: any) => {
  const boxName = ["Silver", "Gold", "Ruby"];
  const Items = [];
  if (ListPrices.length > 0) {
    ListPrices.forEach((Price, index) => {
      Items.push({
        id: index,
        name: `${boxName[index]} Box`,
        image: `/images/luckybox/box${index}.png`,
        desc: 'Box NFT',
        price: Price,
        nftType: index
      })
    })
  }

  return Items;
}