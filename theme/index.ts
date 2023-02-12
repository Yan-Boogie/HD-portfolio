// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'

// Component style overrides
import IconButtonStyle from './components/iconButton';
import IconStyle from './components/icon';
import ShowreelWallpaperButtonStyle from './components/showreelWallpaperButton';
import TextStyle from './components/text';
import VideoContainerStyle from './components/videoPlayer';
import MenuIconButtonStyle from './components/menuItemButton';
import IllustratorCardStyle from './components/illustratorCard';
import PageStyle from './components/page';
import DividerStyle from './components/divider';

const overrides = {
  fonts: {
    heading: `'Moguine Serif'`,
    body: `'Moguine Serif'`,
    mono: `'Moguine Serif'`,
    i: `'Moguine Serif Italic'`,
  },
  styles,
  colors,
  components: {
    IconButton: IconButtonStyle,
    IconUI: IconStyle,
    ShowreelWallpaperButton: ShowreelWallpaperButtonStyle,
    Text: TextStyle,
    VideoContainer: VideoContainerStyle,
    MenuIconButton: MenuIconButtonStyle,
    IllustratorCard: IllustratorCardStyle,
    Page: PageStyle,
    Divider: DividerStyle,
  },
}

export default extendTheme(overrides)