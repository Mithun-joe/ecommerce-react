import React, { Component } from 'react';
import SHOP_DATA from "./shop_data";
import Preview from "../../components/preview-collection/preview";


class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state ={
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollectionProps}) => (
                        <Preview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;



