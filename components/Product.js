import {
  FormControl,
  MenuItem,
  Rating,
  Select,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import classes from "./product.module.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import { useRouter } from "next/router";

const Product = (props) => {
  const product = props.data;

  const colors = ["green", "orange", "purple", "black", "gray"];
  const sizes = ["UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10"];

  const [selectColor, setSelectColor] = useState("green");
  const [selectSize, setSelectSize] = useState("UK 8");
  const [qtyValue, setQtyValue] = useState(1);
  const [showCopySec, setShowCopySec] = useState(false);

  const qtyHandler = (event) => {
    event.preventDefault();

    setQtyValue(event.target.value);
  };

  const handleChange = (event) => {
    event.preventDefault();

    setSelectSize(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("product:", product.title);
    console.log("color:", selectColor);
    console.log("size:", selectSize);
    console.log("count:", qtyValue);
    console.log("price:", product.price * qtyValue);
  };

  const router = useRouter();

  const copyHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopySec(true);
    setTimeout(() => {
      setShowCopySec(false);
    }, 2000);
  };

  return (
    <section className={classes.product}>
      <div className={classes.image}>
        <Image
          width={300}
          height={300}
          alt={product.title}
          src={product.image}
          priority={true}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.firstSec}>
          <div className={classes.title}>
            <h1>{product.title}</h1>
            <Rating value={product.rating.rate} precision={0.5} />
          </div>

          <div className={classes.category}>
            <h3>{product.category}</h3>
          </div>
          <div className={classes.count}>
            <h4 className={classes.orgPrice}>
              ${(product.price * 1.2).toFixed(1)}
            </h4>
            <h4 className={classes.offPrice}>${product.price}</h4>
          </div>
        </div>
        <div className={classes.description}>
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className={classes.select}>
          <div className={classes.selectColors}>
            <h3>COLOR</h3>
            {colors.map((color, index) => (
              <div
                key={index}
                className={
                  color === selectColor
                    ? `${classes.radioColor} ${classes.activeColor}`
                    : classes.radioColor
                }
                style={{ borderColor: `${color}` }}
                onClick={() => setSelectColor(`${color}`)}
              >
                <div
                  className={classes.colors}
                  style={{
                    background: `${color}`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className={classes.selectSize}>
            <FormControl fullWidth>
              <h3>SIZE</h3>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectSize}
                onChange={handleChange}
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.selectQTY}>
            <h3>QTY</h3>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 1, max: product.rating.count } }}
              value={qtyValue}
              onChange={qtyHandler}
            />
          </div>
        </div>
        <div className={classes.shopSec}>
          <Button
            className={classes.addToCart}
            startIcon={<ShoppingCartIcon />}
            onClick={submitHandler}
          >
            ADD TO CART
          </Button>
          <div className={classes.share}>
            <ShareIcon className={classes.shareIcon} onClick={copyHandler} />
            {showCopySec && (
              <Alert className={classes.copyAlert} severity="success">
                Copied!
              </Alert>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
