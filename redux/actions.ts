export const LikeDataFun = (id:any) => {
    return {
        type: 'LIKE_DATA',
        payload:id,
    };
}


export const BuyDataFun = (id:any) => {
    return {
        type: 'BUY_PRODUCT',
        payload:id,
    };
}

