import { Profiler, useEffect, useState, useCallback, useMemo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BrokerageCard } from '../../../components';
import { BrokerageType, fetchBrokerages } from '../../../utils';

export function NonMemoized() {
  const [brokerages, setBrokerages] = useState<any>([]);
  useEffect(() => {
    if (brokerages.length === 0) {
      fetchBrokerages()
        .then(bs => {
          setBrokerages(bs)
        })
    }
  }, []);
  
  const handleUpdate = (id: string, value: string) => {
    setBrokerages(brokerages.map((b: BrokerageType) => b.id === id ? { ...b, catchPhrase: value } : b));
  };

  return (
    <Profiler
      id="non-memoized"
      onRender={(id, phase, actualDuration, baseDuration) => {
        console.table({ id, phase, actualDuration, baseDuration })
      }}
    >
      <Box>
        {brokerages && brokerages.length > 0 && (
          <Box>
            <Grid container justifyContent="center" spacing={4}>
              {brokerages.map((brokerage: BrokerageType) => (
                <Grid key={brokerage.id} item>
                  <BrokerageCard {...brokerage} onUpdate={handleUpdate} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Profiler>
  );
}
