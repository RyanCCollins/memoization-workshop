import { Profiler, useEffect, useState } from 'react';
import { Box, Grid, CircularProgress } from '@mui/material';
import { BrokerageCard } from '../../../components';
import { BrokerageType, fetchBrokerages } from '../../../utils';

export function NonMemoized() {
  const [brokerages, setBrokerages] = useState<any>([]);
  const [called, setCalled] = useState(false)
  useEffect(() => {
    if (!called) {
      setCalled(true)
      fetchBrokerages()
        .then(bs => {
          setBrokerages(bs)
        })
    }
  }, []);
  
  const handleUpdate = (id: string, value: string) => {
    setBrokerages(brokerages.map((b: BrokerageType) => b.id === id ? { ...b, catchPhrase: value } : b));
  };

  if (!brokerages.length) {
    return (
      <Box sx={{ width: '100%', p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Profiler
      id="non-memoized"
      onRender={(id, phase, actualDuration, baseDuration) => {
        console.table({ id, phase, actualDuration, baseDuration })
      }}
    >
      <Box>
        <Grid container justifyContent="center" spacing={4}>
          {brokerages.map((brokerage: BrokerageType) => (
            <Grid key={brokerage.id} item>
              <BrokerageCard {...brokerage} onUpdate={handleUpdate} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Profiler>
  );
}
