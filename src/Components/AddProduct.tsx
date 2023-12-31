

import { useState } from 'react';
import { IProduct } from './Product.type';

type Props = {
  onBackBtnClickedHnd: () => void;
  onSubmitClickHnd: (data: IProduct) => void;
};

const AddProduct = (props: Props) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

  const { onBackBtnClickedHnd, onSubmitClickHnd } = props;

  const onProductNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const onQuantityChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const onUnitPriceChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitPrice(Number(e.target.value));
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IProduct = {
      id: new Date().toJSON().toString(),
      name: productName,
      quantity: quantity,
      price: unitPrice,
      created_date: new Date(),
      updated_date: new Date(),
      user_id: '1', 
    };
    console.log('Adding product:', data);
    onSubmitClickHnd(data);
  };

  return (
    <>
    <h2 className='text-success'>Add Products</h2>
      <form className="container-fluid" onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={productName}
            onChange={onProductNameChangeHnd}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={onQuantityChangeHnd}
          />
        </div>
        <div>
          <label>Unit Price:</label>
          <input
            type="number"
            value={unitPrice}
            onChange={onUnitPriceChangeHnd}
          />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickedHnd} />
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </>
  );
};

export default AddProduct;
