import React, { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Slider,
  Pagination,
  Rating,
  Select,
  MenuItem,
  CardMedia,
  InputLabel,
  FormControl,
  Dialog,
} from "@mui/material";
import {products} from "../data/product";

const PRODUCTS_PER_PAGE = 12;

const PhoneProducts = () => {
  const [priceRange, setPriceRange] = useState([10000, 60000]);
  const [minRating, setMinRating] = useState(0);
  const [page, setPage] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoverOpen, setHoverOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating >= minRating
    );
  }, [priceRange, minRating]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" align="center" mb={4}>
        Explore Phones
      </Typography>

      {/* Filters */}
      <Grid container spacing={3} justifyContent="center" mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography gutterBottom>Price Range (₹)</Typography>
          <Slider
            value={priceRange}
            onChange={(e, newVal) => {
              setPriceRange(newVal);
              setPage(1);
            }}
            valueLabelDisplay="auto"
            min={10000}
            max={60000}
            step={1000}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography gutterBottom>Minimum Rating</Typography>
          <FormControl fullWidth>
            <InputLabel>Rating</InputLabel>
            <Select
              value={minRating}
              label="Rating"
              onChange={(e) => {
                setMinRating(e.target.value);
                setPage(1);
              }}
            >
              {[0, 1, 2, 3, 4].map((value) => (
                <MenuItem key={value} value={value}>
                  {value} & up
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Products Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ mx: { xs: 0, sm: 2, md: 4 } }}
      >
        {paginatedProducts.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id}
            display="flex"
            justifyContent="center"
            sx={{
              transition: "transform 0.2s, box-shadow 0.2s",
              '&:hover': {
                transform: "scale(1.03)",
                boxShadow: 6,
                cursor: "pointer",
              },
            }}
          >
            <Box
              onClick={() => {
                setHoveredProduct(product);
                setHoverOpen(true);
              }}
              width="100%"
            >
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{product.price}
                  </Typography>
                  <Rating
                    value={parseFloat(product.rating)}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box mt={6} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, val) => setPage(val)}
          color="primary"
        />
      </Box>

      {/* Hover Modal */}
      <Dialog
        open={hoverOpen && Boolean(hoveredProduct)}
        onClose={() => {
          setHoveredProduct(null);
          setHoverOpen(false);
        }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 2,
            maxWidth: 400,
            width: "90%",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
          },
        }}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.3)",
          },
        }}
      >
        {hoveredProduct && (
          <>
            <CardMedia
              component="img"
              height="200"
              image={hoveredProduct.image}
              alt={hoveredProduct.name}
            />
            <CardContent>
              <Typography variant="h6">{hoveredProduct.name}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                ₹{hoveredProduct.price}
              </Typography>
              <Typography variant="body2" paragraph>
                This is a high-quality smartphone with latest specs and top-notch performance. Ideal for daily use and gaming.
              </Typography>
              <Rating
                value={parseFloat(hoveredProduct.rating)}
                precision={0.1}
                readOnly
              />
            </CardContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default PhoneProducts;
