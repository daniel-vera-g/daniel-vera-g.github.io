// @flow
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'keybase':
      href = `https://keybase.io/${contact}`;
      break;
    case 'mastodon':
      href = 'https://mastodon.technology/@dvg';
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'linkedin':
      href = 'https://www.linkedin.com/in/daniel-vera-gilliard-b87568146/';
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
