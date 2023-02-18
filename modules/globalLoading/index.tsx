import Event from 'events';
import { Portal } from '@chakra-ui/react'
import React, { useState, useContext, useEffect, PropsWithChildren, useCallback } from 'react';
import GlobalLoading, { MotionVariantTypes as LoadingStatus } from '../../common/components/globalLoading';

const EventEmitter = new Event.EventEmitter();
const CHANNEL_GLOBAL_LOADING = 'CHANNEL/GLOBAL-LOADING';

// eslint-disable-next-line no-unused-vars
const EmitterContext = React.createContext<(status: LoadingStatus) => void>(() => {});

export function GlobalLoadingProvider({ children }: PropsWithChildren) {
    const emitSetLoading = useCallback((status: LoadingStatus) => {
        EventEmitter.emit(CHANNEL_GLOBAL_LOADING, status);
    }, []);

    return (
        <EmitterContext.Provider value={emitSetLoading}>
            {children}
        </EmitterContext.Provider>
    );
}

export const useGlobalLoadingEmitter = () => {
    const emitterContext = useContext(EmitterContext);

    return emitterContext;
};

export function GlobalLoadingModule() {
    const [loadingStatus, setLoading] = useState<LoadingStatus>('inexist');

    useEffect(() => {
        if (loadingStatus === 'inexist') return () => {};

        const timer = setTimeout(() => {
            setLoading('inexist');

            console.log('Global Loader closed by timer, might be some issues here!');
        }, 10000);

        return () => clearTimeout(timer);
    }, [loadingStatus]);

    useEffect(() => {
        const eventHandler = (status: LoadingStatus) => setLoading(status);

        EventEmitter.on(CHANNEL_GLOBAL_LOADING, eventHandler);

        return () => {
            EventEmitter.off(CHANNEL_GLOBAL_LOADING, eventHandler);
        };
    }, []);

    return (
        <Portal>
            <GlobalLoading motionStatus={loadingStatus} />
        </Portal>
    )
}
