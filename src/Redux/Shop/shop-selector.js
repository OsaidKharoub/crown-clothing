import {createSelector} from 'reselect';


const selectorShop = state => state.shop;

export const selectorShopData = createSelector(
    [selectorShop],
    shop => shop.ShopData
)

export const selectorCollectionForPreview = createSelector(
    [selectorShopData],
    ShopData => Object.keys(ShopData).map(key => ShopData[key])
)

export const selectorCollection = collectionUrlParam => {
    console.log("collectionUrlParam", collectionUrlParam);
    return createSelector(
        [selectorShopData],
        ShopData => ShopData[collectionUrlParam]
    )
}

