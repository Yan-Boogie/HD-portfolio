import { useState, useEffect } from 'react';
import { chakra } from '@chakra-ui/react';
import { ComponentMeta } from '@storybook/react';

import GlobalLoading, { MotionVariantTypes as LoadingStatus } from './';
import IconButton from '../buttons/iconButton';
import { Start } from '../icons';

export default {
    title: 'Component/GlobalLoading',
    component: GlobalLoading,
} as ComponentMeta<typeof GlobalLoading>;

export const Base = () => {
    const [loadingStatus, setStatus] = useState<LoadingStatus>('inexist');

    useEffect(() => {
        if (loadingStatus === 'inexist') return () => {};

        const timer = setTimeout(() => {
            setStatus('inexist');
        }, 5000);
        
      return () => clearTimeout(timer);
    }, [loadingStatus]);

    return (
        <chakra.div>
            <IconButton aria-label="switch" onClick={() => setStatus('exist')}>
                <Start motiontype="full" />
            </IconButton>
            <GlobalLoading motionStatus={loadingStatus} />
        </chakra.div>
    );
}
