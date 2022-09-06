import { useState, memo } from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  ButtonBase,
  TextField,
  IconButton,
  Box,
} from '@mui/material';
import { CheckCircleOutline, EditOutlined } from '@mui/icons-material';
import { BrokerageType } from '../../utils';

interface BrokerageCardProps extends BrokerageType {
  onUpdate: (id: string, value: string) => void;
}

export function BrokerageCard({ id, name, catchPhrase, logo, onUpdate }: BrokerageCardProps) {
  const [editing, setEditing] = useState(false);
  return (
    <Card sx={{ width: 450, height: 400, maxWidth: '100%' }}>
      <CardMedia component="img" height="220" image={logo} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {editing ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              sx={{ flex: 1 }}
              onChange={(e: any) => onUpdate(id, e.target.value)}
            />
            <IconButton onClick={() => setEditing(false)}>
              <CheckCircleOutline />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'fle-start', justifyContent: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <ButtonBase onClick={() => setEditing(true)}>
              <Typography variant="body2" color="text.secondary">
                {catchPhrase}
              </Typography>
            </ButtonBase>
            </Box>
            <IconButton onClick={() => setEditing(true)}>
              <EditOutlined />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

