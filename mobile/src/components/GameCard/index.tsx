import { 
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground, 
  ImageSourcePropType,
  Text
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: string;
  title: string;
  _count:{
    ads: number
  };
  bannerURL: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{uri: data.bannerURL}}// when i quanto to inform an URL insteand of a file I use a couple of {} an use the parameter "URI"
      >
      <LinearGradient
      colors={THEME.COLORS.FOOTER}
      style={styles.footer}
      >
        <Text style={styles.name}>
          {data.title}
        </Text>

        <Text style={styles.ads}>
          {data._count.ads} anúncio(s)
        </Text>
      </LinearGradient>
      </ImageBackground>

    </TouchableOpacity>
  );
}