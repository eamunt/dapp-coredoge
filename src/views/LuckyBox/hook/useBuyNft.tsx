import { useTranslation } from '@pancakeswap/localization'
import { useToast } from '@pancakeswap/uikit'
import { ToastDescriptionWithTx } from 'components/Toast'
import contract from 'config/constants/contracts'
import { useCallWithMarketGasPrice } from 'hooks/useCallWithMarketGasPrice'
import { useCoreMarketPlace } from 'hooks/useContract'
import { useCallback, useEffect, useState } from 'react'
import { getAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

export const useBuyNFT = (chainId: number, onRefresh, balance) => {
  const [requestedBuy, setRequestBuy] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const { callWithMarketGasPrice } = useCallWithMarketGasPrice()
  const [isCloseBuy, setClose] = useState(false)
  const { t } = useTranslation()
  const marketplaceContract = useCoreMarketPlace(getAddress(contract.coreMarketPlace, chainId));
  const [pendingBuy, setPendingBuy] = useState(false)
  const handleBuy = useCallback(async () => {
    setPendingBuy(true)
    try {
      const tx = await callWithMarketGasPrice(marketplaceContract, 'buyItem', [balance])
      const receipt = await tx.wait()
      if (receipt.status) {
        toastSuccess(
          t(`Successfully buy ${balance}`),
          <ToastDescriptionWithTx txHash={receipt.transactionHash} />
        )
        setClose(true)
        setRequestBuy(true)
        onRefresh(Date.now())
      } else {
        // user rejected tx or didn't go thru
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setRequestBuy(false)
      }
    } catch (e) {
      console.error(e)
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
    } finally {
      setPendingBuy(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callWithMarketGasPrice, marketplaceContract, balance, toastSuccess, t, toastError])


  return { handleBuy, requestedBuy, pendingBuy, isCloseBuy }
}
