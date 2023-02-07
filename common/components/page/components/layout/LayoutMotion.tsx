import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';

import { LayoutUI, LayoutUIProps, HeaderUI, FooterUI, BodyUI, TitleUI, ScrollDownUI } from './LayoutUI';
import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';
import type { PageMotionVariants, HeaderMotionVariants, ScrollDownMotionVariants } from '../../types';

const layoutVariants: PageMotionVariants = {
    enter: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.3 } },
    exit: { opacity: 0, transition: { when: 'afterChildren' } },
};

const headerMotionVariants: HeaderMotionVariants = {
    transparent: { backgroundColor: 'transparent' },
    hidden: { opacity: 0 },
};

const scrollDownMotionVariants: ScrollDownMotionVariants = {
    active: { opacity: 1, y: [-5, 5, -5] },
    hidden: { opacity: 0 },
};

type MergedLayoutMotionProps = MergeWithMotion<LayoutUIProps>;
export interface LayoutMotionProps extends MergedLayoutMotionProps {
    title?: string;
};

const MotionTitle = motion(TitleUI);
const MotionHeader = motion(HeaderUI);
const MotionFooter = motion(FooterUI);
const MotionBody = motion(BodyUI);
const MotionScrollDown = motion(ScrollDownUI);
const MotionLayout: ReactFCWithRef<MergedLayoutMotionProps> = motion(LayoutUI);
const LayoutMotion = forwardRef<LayoutMotionProps, 'div'>((props, ref) => {
    const { children, title, ...rest } = props;
    const [headerVariant, setHeaderVariant] = useState<string>('');
    const [scrollDownVariant, setScrollDownVariant] = useState<string>('active');
    const { scrollY } = useScroll();
    const footerRef = useRef(null);
    const scrollDownRef = useRef(null);

    const isFooterInView = useInView(footerRef);

    useEffect(() => {
        if (isFooterInView) return () => {};

        const onScroll = (el: number) => {
            if (el <= 0) {
                setHeaderVariant('');
                setScrollDownVariant('active');
            };

            if (el > 0) {
                setHeaderVariant('transparent');
                setScrollDownVariant('hidden');
            }
        };

        const unsubScrollY = scrollY.onChange(onScroll);

        return () => {
            unsubScrollY();
        }
    }, [scrollY, isFooterInView]);

    useEffect(() => {
        if (isFooterInView && scrollY.get() > 0) setHeaderVariant('hidden');
    }, [isFooterInView, scrollY]);

    return (
        <MotionLayout
            initial={{ opacity: 0 }}
            variants={layoutVariants}
            ref={ref}
            {...rest}>
            <MotionHeader
                animate={headerVariant}
                variants={headerMotionVariants} />
            {title && (
                <>
                    <MotionTitle
                        title={title} />
                    <MotionScrollDown
                        animate={scrollDownVariant}
                        transition={scrollDownVariant === 'active' ? {
                            duration: 3,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        } : {}}
                        variants={scrollDownMotionVariants}
                        ref={scrollDownRef} />
                </>
            )}
            <MotionBody>
                {children}
            </MotionBody>
            <MotionFooter
                ref={footerRef} />
        </MotionLayout>
    );
});

export default LayoutMotion;
