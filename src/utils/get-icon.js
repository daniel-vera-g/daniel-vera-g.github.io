// @flow
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'keybase':
      icon = ICONS.KEYBASE;
      break;
    case 'mastodon':
      icon = ICONS.MASTODON;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
