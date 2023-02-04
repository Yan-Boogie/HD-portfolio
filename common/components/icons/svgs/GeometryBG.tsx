import { forwardRef } from '@chakra-ui/react';

import IconSwitch from '../IconSwitch';

const Path = () => (
    <>
        <path
            fill="white"
            d="M714.36 833.31c0 169.55 137.45 307 307 307v-307h-307zM1328.36 1447.31c0-169.55-137.45-307-307-307v307h307z"
        />
        <path
            fill="white"
            d="M714.36 1447.31c169.55 0 307-137.45 307-307h-307v307zM714.36 1447.31c0-169.55-137.45-307-307-307v307h307zM714.36 833.31c-169.55 0-307 137.45-307 307h307v-307zM1635.36 1140.31c0-169.55-137.45-307-307-307v307h307zM1328.36 833.31c169.55 0 307-137.45 307-307h-307v307zM1635.36 219.31c-169.55 0-307 137.45-307 307h307v-307z"
        />
        <path
            fill="white"
            d="M1331.32 833.31c0-169.55-137.45-307-307-307v307h307zM1331.32 219.31c-169.55 0-307 137.45-307 307h307v-307zM1021.36 833.31v307h307c0-169.55-137.45-307-307-307zM1328.36 1447.31h307v-307c-169.55 0-307 137.45-307 307z"
        />
    </>
);

export const GeometryBG = forwardRef<{}, 'div'>((props, ref) => {
    return (
        <IconSwitch
            ref={ref}
            motiontype="none"
            fontSize="300px"
            viewBox="0 0 1728.95 1537.69">
            <Path />
        </IconSwitch>
    );
});
