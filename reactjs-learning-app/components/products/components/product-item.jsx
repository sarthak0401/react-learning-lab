import styles from './product-item.module.css';

function ButtonComponent(){
    return <button className={styles.button}>Click</button>
}

function ProductItem({singleProductItem}) {
  return (
    <div style={{border : '2px solid red', marginBottom : '20px', padding : '20px' }}>
      <p className={styles.productTitle}>{singleProductItem}</p>
      <ButtonComponent/>
    </div>
  );
}

export default ProductItem;