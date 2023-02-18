import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { forwardRef, useMultiStyleConfig } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import { useGlobalLoadingEmitter } from '@/modules/globalLoading';
import PageMotion, { PageMotionProps } from './PageMotion';
import Transition from './components/transition';
import Layout from './components/layout';
import { LayoutStyles } from './types';

export interface PageProps extends PageMotionProps {
    title?: string;
    layoutStyle: LayoutStyles;
};

const Page = forwardRef<PageProps, 'div'>((props, ref) => {
    const { children, layoutStyle, title, ...rest } = props;
    const styles = useMultiStyleConfig('Page');
    const emitLoading = useGlobalLoadingEmitter();
    
    useEffect(() => {
        emitLoading('inexist');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderChildren = () => layoutStyle !== 'none' ? (
        <Layout layoutStyle={layoutStyle} title={title}>
            {children}
        </Layout>
    ) : children;

    return (
        <StylesProvider.Provider value={styles}>
            <AnimatePresence exitBeforeEnter>
                <PageMotion ref={ref} {...rest}>
                    {renderChildren()}
                    <AnimatePresence exitBeforeEnter>
                        <Transition />
                    </AnimatePresence>
                </PageMotion>
            </AnimatePresence>
        </StylesProvider.Provider>
    );
});

export default Page;
