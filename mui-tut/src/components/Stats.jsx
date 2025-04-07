import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Smartphone, ShoppingCart, People, EmojiEvents, Close as CloseIcon } from "@mui/icons-material";
import CountUp from "react-countup";

const statsData = [
  {
    label: "Phones Sold",
    value: 120000,
    icon: <Smartphone fontSize="large" />,
    description: "Total number of phones sold this year across all platforms.",
  },
  {
    label: "Orders Delivered",
    value: 95000,
    icon: <ShoppingCart fontSize="large" />,
    description: "Successfully delivered orders including accessories and phones.",
  },
  {
    label: "Happy Customers",
    value: 87000,
    icon: <People fontSize="large" />,
    description: "Customers who rated their experience 4 stars or higher.",
  },
  {
    label: "Top Ratings",
    value: 4.8,
    icon: <EmojiEvents fontSize="large" />,
    description: "Average rating based on verified buyer feedback.",
  },
];

const Stats = () => {
  const [open, setOpen] = useState(false);
  const [selectedStat, setSelectedStat] = useState(null);

  const handleOpen = (stat) => {
    setSelectedStat(stat);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStat(null);
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Phone Sales Stats
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
              onClick={() => handleOpen(stat)}
            >
              <Box color="primary.main" mb={2}>
                {stat.icon}
              </Box>
              <Typography variant="h5" fontWeight="bold">
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  decimals={stat.label === "Top Ratings" ? 1 : 0}
                />
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedStat?.label}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ minWidth: 300 }}>
          <Box textAlign="center" mb={2}>
            <Box color="primary.main" mb={1}>{selectedStat?.icon}</Box>
            <Typography variant="body1">{selectedStat?.description}</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Stats;
