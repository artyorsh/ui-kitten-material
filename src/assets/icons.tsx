import React from 'react';
import {
  Icon,
  IconElement,
} from 'react-native-ui-kitten';
import Config from 'react-native-config';

const isEva = (): boolean => Config.DESIGN_SYSTEM === 'eva';

export const BackIcon = (style): IconElement => (
  <Icon {...style} name='arrow-back'/>
);

export const LayoutIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'clipboard' : 'dashboard'} />
);

export const PersonIcon = (style): IconElement => (
  <Icon {...style} name='person'/>
);

export const MoreVerticalIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'more-vertical' : 'more-vert'}/>
);

export const LogoutIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'log-out' : 'exit-to-app'}/>
);

export const InfoIcon = (style): IconElement => (
  <Icon {...style} name='info-outline'/>
);

export const AlertTriangleIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'alert-circle' : 'warning'}/>
);

export const EyeIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'eye' : 'visibility'}/>
);

export const EyeOffIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'eye-off' : 'visibility-off'}/>
);

export const MenuIcon = (style): IconElement => (
  <Icon {...style} name='menu'/>
);

export const HomeIcon = (style): IconElement => (
  <Icon {...style} name='home'/>
);

export const DoneAllIcon = (style): IconElement => (
  <Icon {...style} name='done-all'/>
);

export const GridIcon = (style): IconElement => (
  <Icon {...style} name='code'/>
);

export const SearchIcon = (style): IconElement => (
  <Icon {...style} name='search'/>
);

export const PlusIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'plus' : 'add'}/>
);

export const PaletteIcon = (style): IconElement => (
  <Icon {...style} name={isEva() ? 'color-palette' : 'palette'}/>
);

export const EmailIcon = (style): IconElement => (
  <Icon {...style} name='email' />
);
