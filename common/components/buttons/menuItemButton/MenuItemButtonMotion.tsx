import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import MenuItemButtonUI, { MenuItemButtonUIProps, BorderLine, BorderLineProps } from './MenuItemButtonUI';
import type { MotionVariants, MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type MotionVariantTypes = 'hovered' | 'unhovered';

const motionVariantTypes: {
    [K in MotionVariantTypes]: K
} = {
    hovered: 'hovered',
    unhovered: 'unhovered',
};

const buttonVariants: MotionVariants<MotionVariantTypes> = {
    hovered: { opacity: 1 },
    unhovered: { opacity: 0.3 },
};

const disabledButtonVariants: MotionVariants<MotionVariantTypes> = {
    hovered: { opacity: 0.5 },
    unhovered: { opacity: 0.5 },
};

const borderLineVariants: MotionVariants<MotionVariantTypes> = {
    unhovered: { transform: 'translateX(-100%)' },
    hovered: { transform: 'translateX(0%)' },
};

type MergedMotionProps = MergeWithMotion<MenuItemButtonUIProps>;
type MergedBorderLineMotionProps = MergeWithMotion<BorderLineProps>;
const MotionMenuItemButton: ReactFCWithRef<MergedMotionProps> = motion(MenuItemButtonUI);
const MotionBorderLine: ReactFCWithRef<MergedBorderLineMotionProps> = motion(BorderLine);

export interface MenuItemButtonMotionProps extends MergedMotionProps {};

const MenuItemButtonMotion = forwardRef<MenuItemButtonMotionProps, 'button'>((props, ref) => {
    const { children, disabled, ...rest } = props;

    return (
        <MotionMenuItemButton
            ref={ref}
            disabled={disabled}
            initial={motionVariantTypes.unhovered}
            whileHover={motionVariantTypes.hovered}
            variants={disabled ? disabledButtonVariants : buttonVariants}
            {...rest}>
            {children}
            <MotionBorderLine
                transition={{ type: 'Tween' }}
                variants={borderLineVariants}
                disabled={disabled} />
        </MotionMenuItemButton>
    );
});

export default MenuItemButtonMotion;
