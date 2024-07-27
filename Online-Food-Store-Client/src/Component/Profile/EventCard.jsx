import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1675233652.jpg?fit=around|562.5:360&crop=562.5:360;*,*"
        />
        <CardContent>
          <Typography variant="h5">Indain Fast Food</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"mumbai"}</p>
            <p className="text-sm text-blue-500">Feburary 14, 2024 12:00 Am</p>
            <p className="text-sm text-red-500">Feburary 15, 2024 12:00 Am</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
