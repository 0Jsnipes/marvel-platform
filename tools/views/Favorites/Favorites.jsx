import React from 'react';

import { Star, StarBorder } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';

import styles from '../ToolsListingContainer/styles'; // Ensure you use similar styles

import ToolCard from '@/tools/components/ToolCard';

const Favorites = ({ favoriteTools = [], handleToggleFavorite, favorites }) => {
  const renderTitle = () => (
    <Grid {...styles.headerGridProps}>
      <Typography {...styles.categoryTitleProps}>
        Favorites {favoriteTools && `(${favoriteTools.length})`}
      </Typography>
    </Grid>
  );

  const renderCards = () => (
    <Grid {...styles.containerGridProps}>
      <Grid {...styles.innerListGridProps}>
        {favoriteTools.length > 0 ? (
          favoriteTools.map((tool) => (
            <Grid item key={tool.id} xs={12} sm={6} md={4}>
               <ToolCard
                  {...tool}
                  favorites={favoriteTools}
                  handleToggleFavorite={handleToggleFavorite}
                />
            </Grid>
          ))
        ) : (
          <Typography />
        )}
      </Grid>
    </Grid>
  );

  return (
    <Grid {...styles.mainGridProps}>
      {renderTitle()}
      {renderCards()}
    </Grid>
  );
};
export default Favorites;
