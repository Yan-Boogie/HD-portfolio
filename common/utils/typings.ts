import type { MotionProps, Variant } from 'framer-motion';
import type { FC, RefAttributes } from 'react';

type Merge<P, T> = Omit<P, keyof T> & T;
export type MergeWithMotion<P> = Merge<P, MotionProps>;

export type ReactFCWithRef<C> = FC<C & RefAttributes<any>>;

export type NarrowToType<T, U> = (value: T | U) => value is T;

export type MotionVariants<T extends string> = {
    [_key in T]: Variant;
}