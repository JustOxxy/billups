import { faHand, faHandBackFist, faHandLizard, faHandScissors, faHandSpock } from '@fortawesome/free-solid-svg-icons';

export const getCardIcon = (value: string) => {
  switch (value) {
    case 'paper':
      return faHand;
    case 'scissors':
      return faHandScissors;
    case 'lizard':
      return faHandLizard;
    case 'spock':
      return faHandSpock;
    case 'rock':
      return faHandBackFist;
  }
};
