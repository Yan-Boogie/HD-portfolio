import { AnimatePresence } from 'framer-motion';
import { forwardRef, useMultiStyleConfig } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import PageMotion, { PageMotionProps } from './PageMotion';
import Transition from './components/transition';
import Layout from './components/layout';

export interface PageProps extends PageMotionProps {
    withLayout?: boolean;
    title?: string;
};

const Page = forwardRef<PageProps, 'div'>((props, ref) => {
    const { children, title, withLayout = true, ...rest } = props;
    const styles = useMultiStyleConfig('Page');

    const renderChildren = () => withLayout ? (
        <Layout title={title}>
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
